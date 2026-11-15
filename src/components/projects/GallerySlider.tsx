import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { ProjectGalleryImage } from "../../data/projects"
import "./GallerySlider.css"

type GallerySliderProps = {
  images: ProjectGalleryImage[]
}

export default function GallerySlider({ images }: GallerySliderProps) {
  const [current, setCurrent] = useState(0)
  const total = images.length

  if (total === 0) return null

  const prev = () => setCurrent((i) => (i - 1 + total) % total)
  const next = () => setCurrent((i) => (i + 1) % total)

  const image = images[current]

  return (
    <div className="gallery-slider" aria-label="Galeri pratinjau visual">
      <div className="gallery-slider-stage">
        <figure className="gallery-slider-figure" key={current}>
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            draggable={false}
          />
          {image.caption && <figcaption>{image.caption}</figcaption>}
        </figure>

        {total > 1 && (
          <>
            <button
              type="button"
              className="gallery-slider-arrow gallery-slider-arrow-prev"
              onClick={prev}
              aria-label="Gambar sebelumnya"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>
            <button
              type="button"
              className="gallery-slider-arrow gallery-slider-arrow-next"
              onClick={next}
              aria-label="Gambar berikutnya"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="gallery-slider-footer">
          <div className="gallery-slider-dots" role="tablist">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === current}
                aria-label={`Gambar ${index + 1}`}
                className={`gallery-slider-dot ${
                  index === current ? "is-active" : ""
                }`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>

          <span className="gallery-slider-count">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  )
}
