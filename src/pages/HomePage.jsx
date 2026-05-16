import { HeroSection } from '../components/landing/HeroSection.jsx'
import { TrustedBySection } from '../components/landing/TrustedBySection.jsx'
import { FeaturesSection } from '../components/landing/FeaturesSection.jsx'
import { HomeHowItWorksPreview } from '../components/landing/HomeHowItWorksPreview.jsx'
import { ServiceAdvantagesSection } from '../components/landing/ServiceAdvantagesSection.jsx'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <HomeHowItWorksPreview />
      <ServiceAdvantagesSection />
    </>
  )
}
