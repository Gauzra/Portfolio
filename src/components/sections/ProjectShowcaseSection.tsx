import "./ProjectShowcaseSection.css"

import ProjectCoverflow from "../projects/ProjectCoverflow"

import ProjectCard from "../projects/ProjectCard"

import { projects } from "../../data/projects"
import SectionWatermark from "../ui/SectionWatermark"

export default function ProjectShowcaseSection() {
  return (
    <section
      className="project-showcase"
      id="projects"
      aria-labelledby="projects-title"
    >


      <div className="project-showcase-content">
        <div className="project-showcase-heading">
          <span className="project-showcase-eyebrow" data-reveal="fade-up">
            SELECTED WORKS / PORTFOLIO
          </span>

          <h2 id="projects-title" data-reveal="fade-up" data-reveal-delay={80}>
            PROYEK PILIHAN
          </h2>

          <p data-reveal="fade-up" data-reveal-delay={160}>
            Beberapa proyek yang merepresentasikan pengalaman saya dalam
            membangun aplikasi web, mengembangkan sistem informasi, dan
            mengintegrasikan teknologi untuk menyelesaikan kebutuhan nyata.
          </p>
        </div>

        <div data-reveal="scale" data-reveal-delay={240}>
          <ProjectCoverflow>
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                number={project.number}
                slug={project.slug}
                name={project.name}
                category={project.category}
                year={project.year}
                description={project.description}
                image={project.image}
                imageAlt={project.imageAlt}
                technologies={project.technologies}
                featured={project.featured}
              />
            ))}
          </ProjectCoverflow>
        </div>
      </div>
    </section>
  )
}
