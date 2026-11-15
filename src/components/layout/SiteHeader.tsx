import "./SiteHeader.css"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const navigation = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
]

function Brand() {
  return (
    <Link className="brand" to="/#home" aria-label="Portfolio home">
      <span className="brand-mark" aria-hidden="true">
        <i />
      </span>
    </Link>
  )
}

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveLink(
        location.pathname.startsWith("/projects/") ? "Projects" : "",
      )
      return
    }

    let frameId = 0

    const updateActiveLink = () => {
      frameId = 0

      const probe = window.innerHeight * 0.35
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4

      let nextActiveLink = "Home"

      for (const item of navigation) {
        const sectionId = item.href.split("#")[1]
        const section = document.getElementById(sectionId)

        if (section && section.getBoundingClientRect().top <= probe) {
          nextActiveLink = item.label
        }
      }

      if (atBottom) {
        nextActiveLink = "Contact"
      }

      setActiveLink(nextActiveLink)
    }

    const handleScroll = () => {
      if (frameId === 0) {
        frameId = window.requestAnimationFrame(updateActiveLink)
      }
    }

    updateActiveLink()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)

      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [location.pathname, location.hash])

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Brand />

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={isOpen ? "nav-links is-open" : "nav-links"}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              className={activeLink === item.label ? "active" : ""}
              to={item.href}
              key={item.label}
              aria-current={activeLink === item.label ? "page" : undefined}
              onClick={(e) => {
                setActiveLink(item.label)
                setIsOpen(false)
                if (location.pathname === "/") {
                  const hash = item.href.replace("/", "")
                  const target = document.querySelector(hash)
                  if (target) {
                    e.preventDefault()
                    target.scrollIntoView({ behavior: "smooth" })
                  }
                }
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
