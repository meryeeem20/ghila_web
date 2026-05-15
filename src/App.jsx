import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/landing/Navbar.jsx'
import { SiteFooter } from './components/landing/SiteFooter.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage.jsx'
import { HowItWorksPage } from './pages/HowItWorksPage.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ghila-cream">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/comment-ca-marche" element={<HowItWorksPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/politique-confidentialite" element={<PrivacyPolicyPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  )
}
