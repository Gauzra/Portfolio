import "./HeroSection.css"

import SectionWatermark from "../ui/SectionWatermark"

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="intro-column">
          <h1
            id="hero-title"
            style={{ fontFamily: '"Jockey One", sans-serif' }}
            data-reveal="fade-up"
          >
            <span>WEB</span> DEVELOPER
          </h1>
          <p className="role" data-reveal="fade-up" data-reveal-delay={80}>
            Mengembangkan Website dan Sistem Informasi Terintegrasi
            <span className="cursor" aria-hidden="true" />
          </p>
          <p className="summary" data-reveal="fade-up" data-reveal-delay={160}>
            Membangun website responsif, aplikasi web yang skalabel, API yang
            andal, serta sistem informasi terintegrasi dengan dukungan basis
            data yang dirancang dengan baik, untuk mengubah ide kompleks menjadi
            produk digital yang praktis.
          </p>

          <div className="hero-tech-stack">
            <span
              className="tech-stack-label"
              data-reveal="fade-up"
              data-reveal-delay={220}
            >
              CORE TECH STACK
            </span>
            <div className="tech-stack-list">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "Python",
                "React",
                "Tailwind CSS",
              ].map((tech, index) => (
                <span
                  className="tech-badge"
                  key={tech}
                  data-reveal="card"
                  data-reveal-delay={280 + index * 70}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
