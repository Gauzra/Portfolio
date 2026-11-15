import { useLayoutEffect, useRef, type RefObject } from "react"

type ScrollRevealOptions = {
  rootMargin?: string
  threshold?: number | number[]
  revealKey?: string
}

const PENDING_CLASS = "reveal-pending"
const REVEALED_CLASS = "is-revealed"
const SETTLE_MS = 650
const revealedKeys = new Set<string>()

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}

function readDelay(element: HTMLElement) {
  const delay = Number(element.dataset.revealDelay ?? "0")

  return Number.isFinite(delay) && delay > 0 ? delay : 0
}

export default function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: ScrollRevealOptions = {},
): RefObject<T | null> {
  const {
    rootMargin = "0px 0px -10% 0px",
    threshold = 0.1,
    revealKey,
  } = options

  const containerRef = useRef<T | null>(null)

  useLayoutEffect(() => {
    const container = containerRef.current

    if (!container) return
    if (typeof IntersectionObserver === "undefined") return
    if (prefersReducedMotion()) return
    if (revealKey && revealedKeys.has(revealKey)) return

    const timeouts = new Set<number>()
    const pendingElements = new Set<HTMLElement>()

    let observer: IntersectionObserver | null = null

    const reveal = (element: HTMLElement) => {
      if (element.classList.contains(REVEALED_CLASS)) return

      const delay = readDelay(element)

      element.classList.add(REVEALED_CLASS)

      if (revealKey) {
        revealedKeys.add(revealKey)
      }

      const timeout = window.setTimeout(() => {
        element.classList.remove(PENDING_CLASS, REVEALED_CLASS)
        element.style.removeProperty("--reveal-delay")
        element.dataset.revealState = "revealed"
        pendingElements.delete(element)
        timeouts.delete(timeout)
      }, delay + SETTLE_MS)

      timeouts.add(timeout)
    }

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue

        observer?.unobserve(entry.target)

        reveal(entry.target as HTMLElement)
      }
    }

    try {
      observer = new IntersectionObserver(handleIntersect, {
        root: null,
        rootMargin,
        threshold,
      })
    } catch {
      return
    }

    const register = (element: HTMLElement) => {
      if (element.dataset.revealState) return
      if (pendingElements.has(element)) return

      const delay = readDelay(element)

      if (delay > 0) {
        element.style.setProperty("--reveal-delay", `${delay}ms`)
      }

      element.dataset.revealState = "pending"
      element.classList.add(PENDING_CLASS)
      pendingElements.add(element)
      observer?.observe(element)
    }

    container.querySelectorAll<HTMLElement>("[data-reveal]").forEach(register)

    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return

          if (node.matches("[data-reveal]")) register(node)

          node.querySelectorAll<HTMLElement>("[data-reveal]").forEach(register)
        })
      }
    })

    mutationObserver.observe(container, {
      childList: true,
      subtree: true,
    })

    return () => {
      observer?.disconnect()
      mutationObserver.disconnect()

      timeouts.forEach((timeout) => window.clearTimeout(timeout))

      pendingElements.forEach((element) => {
        element.classList.remove(PENDING_CLASS, REVEALED_CLASS)
        element.style.removeProperty("--reveal-delay")

        if (element.dataset.revealState !== "revealed") {
          delete element.dataset.revealState
        }
      })
    }
  }, [rootMargin, threshold, revealKey])

  return containerRef
}
