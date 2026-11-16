import { useEffect } from "react"
import { BrowserRouter, useLocation } from "react-router-dom"
import SiteHeader from "./components/layout/SiteHeader"
import AppRoutes from "./router"

function ScrollHandler() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => {
        const target = document.querySelector(hash)
        if (target) {
          target.scrollIntoView({ behavior: "smooth" })
        }
      }, 50)

      return () => window.clearTimeout(timer)
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <ScrollHandler />
      <SiteHeader />
      <AppRoutes />
    </BrowserRouter>
  )
}