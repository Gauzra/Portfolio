import { useCallback, useEffect, useState } from "react"

const DISPLAY_MS = 2000
const EXIT_MS = 800
const OPENING_SESSION_KEY = "portfolio:opening-shown"

type OpeningPhase = "visible" | "leaving" | "hidden"

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}

function hasOpeningBeenShown() {
  try {
    return sessionStorage.getItem(OPENING_SESSION_KEY) === "true"
  } catch {
    return false
  }
}

export default function useOpeningIntro() {
  const [phase, setPhase] = useState<OpeningPhase>(() =>
    prefersReducedMotion() || hasOpeningBeenShown() ? "hidden" : "visible",
  )

  const dismiss = useCallback(() => {
    setPhase((current) => (current === "visible" ? "leaving" : current))
  }, [])

  useEffect(() => {
    if (phase !== "visible") return

    try {
      sessionStorage.setItem(OPENING_SESSION_KEY, "true")
    } catch {
      // Session storage may be unavailable
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const handleReducedMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setPhase("hidden")
      }
    }

    mediaQuery.addEventListener("change", handleReducedMotionChange)

    const timer = window.setTimeout(dismiss, DISPLAY_MS)

    return () => {
      window.clearTimeout(timer)
      mediaQuery.removeEventListener("change", handleReducedMotionChange)
    }
  }, [dismiss, phase])

  useEffect(() => {
    if (phase !== "leaving") return

    const timer = window.setTimeout(() => {
      setPhase("hidden")
    }, EXIT_MS)

    return () => window.clearTimeout(timer)
  }, [phase])

  return {
    isVisible: phase !== "hidden",
    isLeaving: phase === "leaving",
    dismiss,
  }
}
