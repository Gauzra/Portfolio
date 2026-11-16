import "./AboutSection.css"

import { profile } from "../../data/profile"
import SectionWatermark from "../ui/SectionWatermark"

const socialLinks = [
  {
    label: "GitHub",
    href: profile.links.github,
    icon: (
      <path d="M12 2.5a9.75 9.75 0 0 0-3.08 19c.49.09.67-.21.67-.47v-1.88c-2.73.59-3.3-1.16-3.3-1.16-.45-1.13-1.09-1.43-1.09-1.43-.89-.61.07-.6.07-.6.98.07 1.5 1.01 1.5 1.01.88 1.5 2.3 1.07 2.86.82.09-.63.34-1.07.62-1.32-2.18-.25-4.47-1.09-4.47-4.82 0-1.07.38-1.94 1.01-2.62-.1-.25-.44-1.24.1-2.58 0 0 .82-.26 2.68 1a9.29 9.29 0 0 1 4.88 0c1.86-1.26 2.68-1 2.68-1 .54 1.34.2 2.33.1 2.58.63.68 1.01 1.55 1.01 2.62 0 3.74-2.3 4.57-4.48 4.81.35.31.66.92.66 1.85v2.72c0 .26.18.57.67.47A9.75 9.75 0 0 0 12 2.5Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: profile.links.linkedin,
    icon: (
      <>
        <path d="M6.35 8.05H2.9V21h3.45V8.05ZM4.62 2.5A2.1 2.1 0 1 0 4.62 6.7a2.1 2.1 0 0 0 0-4.2ZM21.1 13.57c0-3.9-2.08-5.72-4.86-5.72-2.24 0-3.24 1.23-3.8 2.1v-1.9H9V21h3.45v-6.41c0-1.69.32-3.33 2.42-3.33 2.07 0 2.1 1.94 2.1 3.44V21h3.45l.68-7.43Z" />
      </>
    ),
  },
  {
    label: "Instagram",
    href: profile.links.instagram,
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.248 2.227.415.56.217.96.474 1.38.895.42.42.677.82.894 1.38.167.422.36 1.057.414 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.247 1.805-.414 2.227a3.7 3.7 0 0 1-.895 1.38 3.7 3.7 0 0 1-1.38.894c-.422.167-1.057.36-2.227.414-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.247-2.227-.414a3.7 3.7 0 0 1-1.38-.895 3.7 3.7 0 0 1-.895-1.38c-.167-.422-.36-1.057-.414-2.227C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.247-1.805.414-2.227.217-.56.474-.96.895-1.38.42-.42.82-.677 1.38-.894.422-.167 1.057-.36 2.227-.414C8.416 2.175 8.796 2.163 12 2.163Zm0 1.802c-3.148 0-3.52.012-4.76.068-1.15.052-1.774.244-2.19.406-.55.213-.94.468-1.35.878-.41.41-.665.8-.878 1.35-.162.416-.354 1.04-.406 2.19-.056 1.24-.068 1.612-.068 4.76s.012 3.52.068 4.76c.052 1.15.244 1.774.406 2.19.213.55.468.94.878 1.35.41.41.8.665 1.35.878.416.162 1.04.354 2.19.406 1.24.056 1.612.068 4.76.068s3.52-.012 4.76-.068c1.15-.052 1.774-.244 2.19-.406.55-.213.94-.468 1.35-.878.41-.41.665-.8.878-1.35.162-.416.354-1.04.406-2.19.056-1.24.068-1.612.068-4.76s-.012-3.52-.068-4.76c-.052-1.15-.244-1.774-.406-2.19a3.6 3.6 0 0 0-.878-1.35 3.6 3.6 0 0 0-1.35-.878c-.416-.162-1.04-.354-2.19-.406-1.24-.056-1.612-.068-4.76-.068Zm0 3.064A5.971 5.971 0 1 1 6.029 12 5.971 5.971 0 0 1 12 6.029Zm0 1.802A4.169 4.169 0 1 0 16.169 12 4.169 4.169 0 0 0 12 7.831Zm6.203-2.106a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z" />
    ),
  },
]

function Portrait() {
  return (
    <div
      className="portrait-column"
      data-reveal="scale"
      data-reveal-delay={120}
    >
      <div className="portrait-glow" aria-hidden="true" />
      <div className="portrait-orbit orbit-one" aria-hidden="true" />
      <div className="portrait-orbit orbit-two" aria-hidden="true" />
      <div className="portrait-frame">
        <img
          className="portrait"
          src={`${import.meta.env.BASE_URL}Photo.png`}
          alt="Portrait of M Gauz Rofiqul Azhiem"
          width={884}
          height={1250}
        />
      </div>
    </div>
  )
}

function SocialBar() {
  return (
    <div
      className="socials socials-below"
      aria-label="Social media"
      data-reveal="fade-up"
      data-reveal-delay={200}
    >
      <span>Connect</span>
      <i aria-hidden="true" />
      {socialLinks.map((social) => (
        <a
          href={social.href}
          key={social.label}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            {social.icon}
          </svg>
        </a>
      ))}
    </div>
  )
}

const sdlcStages = [
  {
    number: "01",
    phase: "DISCOVERY & ANALYSIS",
    title: "Analisis Kebutuhan",
    description:
      "Mengidentifikasi permasalahan, memahami kebutuhan pengguna, dan menetapkan tujuan serta ruang lingkup sistem.",
    output: "Kebutuhan sistem",
  },
  {
    number: "02",
    phase: "REQUIREMENT DEFINITION",
    title: "Definisi Kebutuhan",
    description:
      "Merumuskan kebutuhan fungsional dan nonfungsional sebagai dasar perencanaan sebagai dasar perencanaan dan pengembangan aplikasi.",
    output: "Spesifikasi sistem",
  },
  {
    number: "03",
    phase: "QUICK DESIGN",
    title: "Perancangan sistem",
    description:
      "Menyusun rancangan antarmuka, alur proses, struktur database, dan arsitektur aplikasi.",
    output: "Desain sistem",
  },
  {
    number: "04",
    phase: "RAPID PROTOTYPING",
    title: "Pengembangan Prototipe",
    description:
      "Membangun prototipe awal untuk menggambarkan fitur, alur kerja, dan interaksi aplikasi.",
    output: "Prototipe aplikasi",
  },
  {
    number: "05",
    phase: "VALIDATION & ITERATION",
    title: "Validasi dan Iterasi",
    description:
      "Mengevaluasi prototipe berdasarkan umpan balik pengguna, mengidentifikasi kekurangan, dan melakukan penyempurnaan secara iteratif hingga kebutuhan sistem terpenuhi.",
    output: "Prototipe tervalidasi",
    featured: true,
  },
  {
    number: "06",
    phase: "FINAL IMPLEMENTATION",
    title: "Implementasi dan Deployment",
    description:
      "Membangun sistem final, melakukan pengujian, deployment, serta pemeliharaan aplikasi.",
    output: "Sistem siap digunakan",
  },
]

export default function AboutSection() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">


      <div className="about-ambient" aria-hidden="true" />

      <div className="about-content">
        {/* PROFILE */}
        <div className="about-intro">
          <div className="about-profile-copy">
            <div className="about-label" data-reveal="fade-up">
              About me
            </div>

            <div
              className="availability"
              data-reveal="fade-up"
              data-reveal-delay={70}
            >
              <span className="status-dot" aria-hidden="true" />
              Available for work
            </div>

            <h2
              className="about-title"
              id="about-title"
              data-reveal="fade-up"
              data-reveal-delay={120}
            >
              M. Gauz Rofiqul <span>Azhiem</span>
            </h2>

            <div
              className="about-copy"
              data-reveal="fade-up"
              data-reveal-delay={180}
            >
              <p>
                Lulusan Magister Akuntansi Universitas Negeri Yogyakarta dengan minat pada sistem informasi akuntansi, dan pengembangan aplikasi berbasis web.
                Memiliki pengalaman dalam pengembangan sistem informasi akuntansi, penelitian UMKM, serta penyampaian materi sosialisasi penggunaan sistem pencatatan keuangan bagi pelaku UMKM.
                Terbiasa memanfaatkan AI sebagai asisten dalam proses pengembangan aplikasi, mulai dari eksplorasi solusi, debugging, hingga pengujian dan penyempurnaan fitur.
                Menggabungkan pemahaman akuntansi, kemampuan pengembangan teknologi, dan pemanfaatan AI untuk membangun solusi digital yang mendukung kebutuhan informasi dan pengelolaan keuangan organisasi.
              </p>

              <p>
                Dengan menerapkan pola pikir terstruktur,
                beriorentasi pada pemecahan masalah, dan menerapkan pendekatan
                System Development Life Cycle (SDLC) dalam mengembangkan
                website.Saya berupaya menjembatani kebutuhan pengguna dengan
                implementasi teknis sehingga menghasilkan website yang tidak
                hanya berfungsi dengan baik, tetapi juga dirancang berdasarkan
                permasalahan yang hendak diselesaikan.
              </p>
            </div>

            <div
              className="about-quote"
              data-reveal="fade-up"
              data-reveal-delay={240}
            >
              Menghubungkan teknologi, data, dan kebutuhan bisnis.
            </div>

            <div
              className="about-actions"
              data-reveal="fade-up"
              data-reveal-delay={300}
            >
              <a
                className="about-action about-action-primary"
                href={`${import.meta.env.BASE_URL}Resume%20mgauzra.pdf`}
                download="Resume-M-Gauz-Rofiqul-Azhiem.pdf"
              >
                Unduh RESUME <span aria-hidden="true">↗</span>
              </a>

              <a
                className="about-action about-action-secondary"
                href="#projects"
              >
                Lihat Proyek <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="portrait-stack">
            <Portrait />
            <SocialBar />
          </div>
        </div>

        {/* SDLC PROTOTYPING PROCESS */}
        <section
          className="about-approach sdlc-section"
          aria-labelledby="sdlc-title"
        >
          <div className="sdlc-watermark" aria-hidden="true">
            PROCESS
          </div>

          <div className="sdlc-heading">
            <div className="sdlc-heading-copy">
              <span className="sdlc-eyebrow" data-reveal="fade-up">
                MY DEVELOPMENT APPROACH
              </span>

              <h3 id="sdlc-title" data-reveal="fade-up" data-reveal-delay={60}>
                SDLC <em>Prototyping</em>
              </h3>

              <p data-reveal="fade-up" data-reveal-delay={120}>
                Pendekatan pengembangan sistem melalui analisis, perancangan,
                prototyping, evaluasi, dan implementasi.
              </p>
            </div>

            <div
              className="sdlc-model"
              data-reveal="fade-up"
              data-reveal-delay={180}
            >
              <span>06</span>
              <div>
                <strong>DEVELOPMENT STAGES</strong>
                <small>ITERATIVE PROCESS</small>
              </div>
            </div>
          </div>

          <div className="sdlc-grid">
            <svg
              className="sdlc-connectors"
              viewBox="0 0 1200 384"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="sdlc-arrowhead"
                  markerWidth="7"
                  markerHeight="7"
                  refX="6"
                  refY="3.5"
                  orient="auto"
                >
                  <path
                    d="M0 0 L7 3.5 L0 7"
                    fill="none"
                    stroke="#FFB45F"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </marker>
              </defs>

              <path
                className="sdlc-connector-path"
                d="M178 188 C188 188 194 225 204 226"
                markerEnd="url(#sdlc-arrowhead)"
              />

              <path
                className="sdlc-connector-path"
                d="M382 226 C392 226 399 190 409 190"
                markerEnd="url(#sdlc-arrowhead)"
              />

              <path
                className="sdlc-connector-path"
                d="M587 190 C597 190 603 225 614 226"
                markerEnd="url(#sdlc-arrowhead)"
              />

              <path
                className="sdlc-connector-path"
                d="M791 226 C801 226 808 177 818 176"
                markerEnd="url(#sdlc-arrowhead)"
              />

              <path
                className="sdlc-connector-path"
                d="M996 176 C1006 176 1013 225 1023 226"
                markerEnd="url(#sdlc-arrowhead)"
              />
            </svg>

            {sdlcStages.map((stage, index) => (
              <article
                className={`sdlc-card ${stage.featured ? "sdlc-card-featured" : ""
                  }`}
                key={stage.number}
                data-reveal="card"
                data-reveal-delay={index * 90}
              >
                <div className="sdlc-card-top">
                  <span className="sdlc-number">{stage.number}</span>

                  <span className="sdlc-phase">{stage.phase}</span>
                </div>

                <div className="sdlc-card-content">
                  <h4>{stage.title}</h4>
                  <p>{stage.description}</p>
                </div>

                <div className="sdlc-card-footer">
                  <span>OUTPUT</span>
                  <strong>{stage.output}</strong>
                </div>
              </article>
            ))}
          </div>

          <div
            className="sdlc-iteration"
            data-reveal="fade-up"
            data-reveal-delay={120}
          >
            <span className="sdlc-iteration-line" />

            <div className="sdlc-iteration-content">
              <span>FEEDBACK LOOP</span>
              <p>
                Hasil evaluasi dapat mengembalikan proses ke tahap perancangan
                atau pengembangan prototipe hingga kebutuhan sistem terpenuhi.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
