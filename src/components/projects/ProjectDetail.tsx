import { useState } from "react"
import { Link } from "react-router-dom"
import { projects, type ProjectData } from "../../data/projects"
import useScrollReveal from "../../hooks/useScrollReveal"
import GallerySlider from "./GallerySlider"
import "./ProjectDetail.css"

type ProjectDetailProps = {
  project: ProjectData
  nextProject?: ProjectData | null
}

type SectionHeaderProps = {
  number: string
  title: string
}

function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="detail-section-heading" data-reveal="fade-up">
      <span>{number}</span>
      <h2>{title}</h2>
    </div>
  )
}

export default function ProjectDetail({
  project,
  nextProject,
}: ProjectDetailProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const revealRef = useScrollReveal<HTMLElement>({
    revealKey: `project:${project.slug}`,
  })

  const publishedProjects = projects.filter((item) => item.published)
  const currentIndex = publishedProjects.findIndex(
    (item) => item.slug === project.slug
  )
  const resolvedNextProject =
    nextProject !== undefined
      ? nextProject
      : publishedProjects.length > 1 && currentIndex !== -1
      ? publishedProjects[(currentIndex + 1) % publishedProjects.length]
      : null

  const gallery =
    project.gallery ??
    (project.image
      ? [
          {
            src: project.image,
            alt: project.imageAlt ?? `Preview aplikasi ${project.name}`,
          },
        ]
      : [])

  return (
    <main className="project-detail-page" ref={revealRef}>
      <div className="project-detail-container">
        {/* NAVIGATION */}
        <nav className="detail-topbar" aria-label="Navigasi proyek">
          <Link className="detail-back" to="/#projects">
            <span aria-hidden="true">←</span>
            Kembali ke Proyek
          </Link>

          <span className="detail-breadcrumb">PROYEK / {project.number}</span>
        </nav>

        {/* PROJECT HERO */}
        <section className="detail-hero">
          <div className="detail-hero-content">
            <span className="detail-category" data-reveal="fade-up">
              {project.category}
            </span>

            <span
              className="detail-project-number"
              data-reveal="fade-up"
              data-reveal-delay={60}
            >
              PROYEK {project.number}
            </span>

            <h1 data-reveal="fade-up" data-reveal-delay={110}>
              {project.name}
            </h1>

            <p
              className="detail-description"
              data-reveal="fade-up"
              data-reveal-delay={170}
            >
              {project.description}
            </p>

            <div
              className="detail-technologies"
              data-reveal="fade-up"
              data-reveal-delay={230}
            >
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div
              className="detail-project-links"
              data-reveal="fade-up"
              data-reveal-delay={290}
            >
              {project.links?.link && (
                <a
                  href={project.links.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-link-primary"
                >
                  Link Akses ↗
                </a>
              )}

              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-link-secondary"
                >
                  Repositori GitHub ↗
                </a>
              )}
            </div>
          </div>

          {project.heroImage && (
            <div
              className="detail-hero-preview"
              data-reveal="scale"
              data-reveal-delay={140}
            >
              <img
                src={project.heroImage}
                alt={project.heroImageAlt ?? `Tampilan utama ${project.name}`}
              />
              <span>PRATINJAU PROYEK / {project.number}</span>
            </div>
          )}
        </section>

        {/* OVERVIEW */}
        <section className="detail-section">
          <SectionHeader number="01" title="Tentang Proyek" />

          <div
            className="detail-overview"
            data-reveal="fade-up"
            data-reveal-delay={60}
          >
            <p>{project.overview ?? project.description}</p>
          </div>
        </section>

        {/* PROBLEM & SOLUTION */}
        {(project.problem || project.solution) && (
          <section className="detail-section">
            <SectionHeader number="02" title="Tantangan & Solusi" />

            <div className="detail-two-column">
              {project.problem && (
                <article
                  className="detail-content-card"
                  data-reveal="card"
                  data-reveal-delay={60}
                >
                  <span className="detail-card-label">TANTANGAN</span>
                  <h3>Identifikasi Masalah</h3>
                  <p>{project.problem}</p>
                </article>
              )}

              {project.solution && (
                <article
                  className="detail-content-card"
                  data-reveal="card"
                  data-reveal-delay={150}
                >
                  <span className="detail-card-label">PENDEKATAN</span>
                  <h3>Solusi yang Diterapkan</h3>
                  <p>{project.solution}</p>
                </article>
              )}
            </div>
          </section>
        )}

        {/* FEATURES */}
        {project.features && project.features.length > 0 && (
          <section className="detail-section">
            <SectionHeader number="03" title="Fitur Utama" />

            <div className="detail-features">
              {project.features.map((feature, index) => (
                <div
                  className="detail-feature"
                  key={`${feature}-${index}`}
                  data-reveal="card"
                  data-reveal-delay={60 + index * 80}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{feature}</strong>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TECHNOLOGY */}
        <section className="detail-section">
          <SectionHeader number="04" title="Teknologi yang Digunakan" />

          <div className="detail-stack">
            {project.technologies.map((technology, index) => (
              <div
                className="detail-stack-item"
                key={technology}
                data-reveal="card"
                data-reveal-delay={60 + index * 70}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{technology}</strong>
              </div>
            ))}
          </div>

          {project.architecture && (
            <div
              className="detail-architecture"
              data-reveal="fade-up"
              data-reveal-delay={140}
            >
              <span>ARSITEKTUR TEKNIS</span>
              <p>{project.architecture}</p>
            </div>
          )}
        </section>

        {/* DATABASE DESIGN */}
        {project.database && (
          <section className="detail-section">
            <SectionHeader number="05" title="Perancangan Database" />

            {project.database.description && (
              <div
                className="detail-db-description"
                data-reveal="fade-up"
                data-reveal-delay={60}
              >
                <p>{project.database.description}</p>
              </div>
            )}

            {project.database.erdImage && (
              <figure
                className="detail-db-erd"
                data-reveal="scale"
                data-reveal-delay={80}
              >
                <div className="detail-db-erd-frame">
                  <img
                    src={project.database.erdImage}
                    alt={
                      project.database.erdImageAlt ??
                      `Diagram ERD ${project.name}`
                    }
                    loading="lazy"
                    onClick={() => setLightboxSrc(project.database!.erdImage!)}
                  />
                </div>
                {project.database.erdCaption && (
                  <figcaption>{project.database.erdCaption}</figcaption>
                )}
              </figure>
            )}
          </section>
        )}

        {/* CONTRIBUTION & OUTCOME */}
        {(project.contribution?.length || project.outcomes?.length) && (
          <section className="detail-section">
            <SectionHeader number="06" title="Kontribusi & Hasil" />

            <div className="detail-two-column">
              {project.contribution && project.contribution.length > 0 && (
                <article
                  className="detail-content-card"
                  data-reveal="card"
                  data-reveal-delay={60}
                >
                  <span className="detail-card-label">KONTRIBUSI SAYA</span>

                  <h3>Apa yang Saya Kerjakan</h3>

                  <ul>
                    {project.contribution.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              )}

              {project.outcomes && project.outcomes.length > 0 && (
                <article
                  className="detail-content-card"
                  data-reveal="card"
                  data-reveal-delay={150}
                >
                  <span className="detail-card-label">HASIL PROYEK</span>

                  <h3>Hasil yang Dicapai</h3>

                  <ul>
                    {project.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              )}
            </div>
          </section>
        )}

        {/* VISUAL PREVIEW */}
        {gallery.length > 0 && (
          <section className="detail-section">
            <SectionHeader number="07" title="Pratinjau Visual" />
            <div data-reveal="scale" data-reveal-delay={80}>
              <GallerySlider key={project.slug} images={gallery} />
            </div>
          </section>
        )}

        {/* FOOTER */}
        <footer className="detail-footer" data-reveal="fade-up">
          <Link to="/#projects" className="detail-footer-back">
            <span aria-hidden="true" className="detail-back-arrow">
              ←
            </span>
            Kembali ke Galeri Proyek
          </Link>

          {resolvedNextProject && (
            <Link
              to={`/projects/${resolvedNextProject.slug}`}
              className="detail-footer-next"
              aria-label={`Beralih ke proyek berikutnya: ${resolvedNextProject.name}`}
            >
              <span className="detail-footer-next-label">Proyek Berikutnya:</span>
              <strong className="detail-footer-next-name">
                {resolvedNextProject.name}
              </strong>
              <span className="detail-footer-next-num">
                / {resolvedNextProject.number}
              </span>
              <span aria-hidden="true" className="detail-next-arrow">
                →
              </span>
            </Link>
          )}
        </footer>
      </div>

      {/* LIGHTBOX */}
      {lightboxSrc && (
        <div
          className="detail-lightbox"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Pratinjau gambar"
        >
          <button
            type="button"
            className="detail-lightbox-close"
            aria-label="Tutup pratinjau"
            onClick={() => setLightboxSrc(null)}
          >
            ✕
          </button>
          <img
            src={lightboxSrc}
            alt="Pratinjau diperbesar"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  )
}
