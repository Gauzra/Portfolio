import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

const splash = document.getElementById("initial-opening")

const root = ReactDOM.createRoot(document.getElementById("root")!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches

const DISPLAY_MS = 2500
const EXIT_MS = 520
const FONT_TIMEOUT_MS = 1500

const isProjectPage = window.location.pathname.startsWith(
  `${import.meta.env.BASE_URL}projects`,
)
async function startOpening() {
  if (!splash) return

  if (reducedMotion || isProjectPage) {
    splash.remove()
    return
  }

  try {
    await Promise.race([
      document.fonts.load('400 10rem "Jockey One"'),
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, FONT_TIMEOUT_MS)
      }),
    ])
  } catch {
    // Tetap lanjut jika pemuatan font gagal.
  }

  // Mulai animasi tulisan setelah font siap atau batas waktu tercapai.
  splash.classList.add("font-ready")

  window.setTimeout(() => {
    splash.classList.add("is-leaving")

    window.setTimeout(() => {
      splash.remove()
    }, EXIT_MS)
  }, DISPLAY_MS)
}

void startOpening()
