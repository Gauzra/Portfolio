import {
  Children,
  useRef,
  useState,
  type ReactNode,
  type PointerEvent as ReactPointerEvent,
  type MouseEvent as ReactMouseEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react"

import "./ProjectCoverflow.css"

type ProjectCoverflowProps = {
  children: ReactNode
  label?: string
}

function getEffectiveOffset(
  index: number,
  activeIndex: number,
  total: number,
  dragProgress: number,
) {
  let offset = index - activeIndex

  // Circular wrap to range (-total/2, total/2]
  while (offset > total / 2) offset -= total
  while (offset < -total / 2) offset += total

  // If total is even and offset is directly opposite (e.g. 2 in total=4):
  // align sign with drag direction so the incoming card enters from the proper edge
  if (total % 2 === 0 && Math.abs(offset) === total / 2) {
    if (dragProgress < -0.01) {
      offset = total / 2
    } else if (dragProgress > 0.01) {
      offset = -total / 2
    }
  }

  return offset + dragProgress
}

type PointerState = {
  x: number
  y: number
  time: number
}

export default function ProjectCoverflow({
  children,
  label = "Project showcase carousel",
}: ProjectCoverflowProps) {
  const projects = Children.toArray(children)
  const total = projects.length

  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragProgress, setDragProgress] = useState(0)

  const stageRef = useRef<HTMLDivElement>(null)
  const pointerStart = useRef<PointerState | null>(null)
  const didDrag = useRef(false)

  const navigate = (direction: number) => {
    if (total <= 1) return

    setActiveIndex((current) => (current + direction + total) % total)
  }

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!event.isPrimary || event.button !== 0) return

    pointerStart.current = {
      x: event.clientX,
      y: event.clientY,
      time: Date.now(),
    }

    didDrag.current = false
  }

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!pointerStart.current) return

    const deltaX = event.clientX - pointerStart.current.x
    const deltaY = event.clientY - pointerStart.current.y

    // If mostly vertical before drag starts, let user scroll the page
    if (!didDrag.current) {
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 8) {
        pointerStart.current = null
        return
      }
    }

    if (Math.abs(deltaX) > 6) {
      if (!didDrag.current) {
        didDrag.current = true
        setIsDragging(true)

        try {
          event.currentTarget.setPointerCapture(event.pointerId)
        } catch {
          // Ignore pointer capture errors
        }
      }

      const stageWidth = stageRef.current?.offsetWidth || 600
      const stepWidth = Math.max(180, stageWidth * 0.32)

      let progress = deltaX / stepWidth

      // Elastic resistance when dragging past 1 card
      if (progress > 1) {
        progress = 1 + (progress - 1) * 0.28
      } else if (progress < -1) {
        progress = -1 + (progress + 1) * 0.28
      }

      setDragProgress(progress)
    }
  }

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!pointerStart.current) return

    try {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId)
      }
    } catch {
      // Ignore capture release error
    }

    const deltaX = event.clientX - pointerStart.current.x
    const deltaTime = Math.max(1, Date.now() - pointerStart.current.time)
    const velocity = Math.abs(deltaX) / deltaTime

    const isSwipe =
      Math.abs(deltaX) > 45 || (velocity > 0.32 && Math.abs(deltaX) > 18)

    if (didDrag.current && isSwipe) {
      navigate(deltaX < 0 ? 1 : -1)
    }

    pointerStart.current = null
    setIsDragging(false)
    setDragProgress(0)

    // Clear didDrag on the next tick so clickCapture can prevent the link
    window.setTimeout(() => {
      didDrag.current = false
    }, 120)
  }

  const handlePointerCancel = (event: ReactPointerEvent<HTMLDivElement>) => {
    try {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId)
      }
    } catch {
      // Ignore capture release error
    }

    pointerStart.current = null
    setIsDragging(false)
    setDragProgress(0)

    window.setTimeout(() => {
      didDrag.current = false
    }, 120)
  }

  const handleClickCapture = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (didDrag.current) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      navigate(-1)
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      navigate(1)
    }
  }

  if (total === 0) return null

  return (
    <section
      className="project-coverflow"
      aria-label={label}
      aria-roledescription="carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div
        ref={stageRef}
        className={`project-coverflow-stage ${isDragging ? "is-dragging" : ""}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onClickCapture={handleClickCapture}
        onDragStart={(e) => e.preventDefault()}
      >
        {projects.map((project, index) => {
          const effectiveOffset = getEffectiveOffset(
            index,
            activeIndex,
            total,
            dragProgress,
          )

          const absOffset = Math.abs(effectiveOffset)

          // Skip items that are far out of view
          if (absOffset > 2.2) return null

          const isActive = absOffset < 0.35
          const scale = Math.max(0.68, 1 - absOffset * 0.22)
          const rotation = Math.max(-18, Math.min(18, -effectiveOffset * 12))
          const position = effectiveOffset * 52
          const opacity =
            absOffset < 0.05 ? 1 : Math.max(0, 1 - absOffset * 0.42)
          const zIndex = Math.round(30 - absOffset * 10)

          return (
            <div
              className={`project-coverflow-item ${
                isActive ? "is-active" : "is-side"
              }`}
              key={index}
              style={{
                transform: `translateX(calc(-50% + ${position}%)) scale(${scale}) rotateY(${rotation}deg)`,
                zIndex,
                opacity,
              }}
            >
              {project}
            </div>
          )
        })}
      </div>

      <div className="project-coverflow-navigation">
        <button
          type="button"
          className="project-coverflow-arrow"
          onClick={() => navigate(-1)}
          aria-label="Previous project"
          disabled={total <= 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div
          className="project-coverflow-pagination"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="current">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>

          <span className="separator">/</span>

          <span className="total">{String(total).padStart(2, "0")}</span>
        </div>

        <button
          type="button"
          className="project-coverflow-arrow"
          onClick={() => navigate(1)}
          aria-label="Next project"
          disabled={total <= 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="project-coverflow-dots">
        {projects.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`project-coverflow-dot ${
              index === activeIndex ? "is-active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to project ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  )
}
