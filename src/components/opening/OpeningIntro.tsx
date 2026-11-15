import useOpeningIntro from "../../hooks/useOpeningIntro"
import "../../styles/opening.css"

export default function OpeningIntro() {
  const { isVisible, isLeaving, dismiss } = useOpeningIntro()

  if (!isVisible) return null

  return (
    <div
      className={isLeaving ? "opening is-leaving" : "opening"}
      role="region"
      aria-label="Intro portofolio"
    >
      <div className="opening-backdrop" aria-hidden="true" />
      <div className="opening-grid" aria-hidden="true" />
      <div className="opening-orbit opening-orbit-one" aria-hidden="true" />
      <div className="opening-orbit opening-orbit-two" aria-hidden="true" />

      <div className="opening-content">
        <span className="opening-line" aria-hidden="true" />
        <p className="opening-word">WELCOME</p>
        <span className="opening-line" aria-hidden="true" />
      </div>

      <button
        className="opening-skip"
        type="button"
        onClick={dismiss}
        aria-label="Lewati intro dan lanjut ke halaman utama"
      >
        Lewati
        <span aria-hidden="true">↗</span>
      </button>
    </div>
  )
}
