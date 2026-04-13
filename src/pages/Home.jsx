import { useEffect } from 'react'
import FooterMain from '../components/layout/FooterMain'
import Navbar from '../components/layout/Navbar'
import AfterHeroSection from '../components/sections/AfterHeroSection'
import ExpertiseSection from '../components/sections/ExpertiseSection'
import HeroSection from '../components/sections/HeroSection'
import ResultsSection from '../components/sections/ResultsSection'
import WorkSection from '../components/sections/WorkSection'

function Home() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal-on-scroll')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 }
    )

    nodes.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF4EC] text-[#161616]">
      <Navbar />
      <HeroSection />
      <AfterHeroSection />
      <ExpertiseSection />
      <WorkSection />
      <ResultsSection />
      <FooterMain />
    </div>
  )
}

export default Home
