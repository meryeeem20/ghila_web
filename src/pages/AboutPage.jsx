import { useEffect } from 'react'
import { AboutSection } from '../components/landing/AboutSection.jsx'

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <AboutSection />
}
