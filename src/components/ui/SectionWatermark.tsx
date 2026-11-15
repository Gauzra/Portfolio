import "./SectionWatermark.css"

type SectionWatermarkProps = {
  children: string
  className?: string
}

export default function SectionWatermark({
  children,
  className = "",
}: SectionWatermarkProps) {
  return (
    <span
      className={`section-watermark ${className}`.trim()}
      aria-hidden="true"
    >
      {children}
    </span>
  )
}
