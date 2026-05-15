import { useEffect } from 'react'
import { HowItWorksSection } from '../components/landing/HowItWorksSection.jsx'

export function HowItWorksPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <HowItWorksSection />
}
