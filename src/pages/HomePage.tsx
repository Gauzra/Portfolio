import { useLayoutEffect } from "react"

// import OpeningIntro from "../components/opening/OpeningIntro"
import AboutSection from "../components/sections/AboutSection"
import ContactSection from "../components/sections/ContactSection"
import HeroSection from "../components/sections/HeroSection"
import ProjectShowcaseSection from "../components/sections/ProjectShowcaseSection"

import useScrollReveal from "../hooks/useScrollReveal"

export default function HomePage() {
  const revealRef = useScrollReveal<HTMLElement>({ revealKey: "home" })

  useLayoutEffect(() => {
    const savedPosition = sessionStorage.getItem("portfolio:home-scroll-y")

    if (savedPosition === null) return

    const scrollY = Number(savedPosition)

    if (!Number.isFinite(scrollY)) {
      sessionStorage.removeItem("portfolio:home-scroll-y")
      return
    }

    const frameId = window.requestAnimationFrame(() => {
      window.scrollTo({
        top: scrollY,
        left: 0,
        behavior: "auto",
      })

      sessionStorage.removeItem("portfolio:home-scroll-y")
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      {/* <OpeningIntro /> */}
      <main id="home" ref={revealRef}>
        <HeroSection />
        <AboutSection />
        <ProjectShowcaseSection />
        <ContactSection />
      </main>
    </>
  )
}
