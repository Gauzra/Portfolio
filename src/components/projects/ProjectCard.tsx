import { Link } from "react-router-dom"
import "./ProjectCard.css"

export type ProjectCardProps = {
  number: string

  slug: string

  name: string

  category: string

  year?: string

  description: string

  image?: string

  imageAlt?: string

  technologies: string[]

  featured?: boolean
}

export default function ProjectCard({
  number,

  slug,

  name,

  category,

  year,

  description,

  image,

  imageAlt,

  technologies,

  featured = false,
}: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${slug}`}
      className={`project-card ${featured ? "is-featured" : ""}`}
      aria-label={`Lihat detail proyek ${name}`}
      onClick={(event) => {
        if (
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return
        }

        sessionStorage.setItem(
          "portfolio:home-scroll-y",
          String(window.scrollY),
        )
      }}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
    >
      <div className="project-card-media">
        <div className="project-card-meta">
          <span>PROJECT / {number}</span>

          {featured && <span className="project-card-featured">FEATURED</span>}
        </div>

        {image && (
          <img
            src={image}
            alt={imageAlt || `Preview ${name}`}
            className="project-card-image"
            loading="lazy"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        )}

        <div className="project-card-image-overlay" />

        <span className="project-card-image-label">PROJECT PREVIEW</span>
      </div>

      <div className="project-card-body">
        <div className="project-card-heading">
          <div className="project-card-title-group">
            <span className="project-card-category">{category}</span>

            <h3>{name}</h3>
          </div>

          {year && <span className="project-card-year">{year}</span>}
        </div>

        <p className="project-card-description">{description}</p>

        <div
          className="project-card-technologies"
          aria-label="Technologies used"
        >
          {technologies.map((technology) => (
            <span className="project-card-tech" key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-card-footer">
          <span>EXPLORE PROJECT</span>
          <span className="project-card-footer-arrow">→</span>
        </div>
      </div>
    </Link>
  )
}
