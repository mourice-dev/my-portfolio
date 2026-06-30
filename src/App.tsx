import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Work from './pages/Work'
import Project from './pages/Project'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import CertificatesPage from './pages/CertificatesPage'

/**
 * Handles scrolling to top or to a hash (#services) after navigation.
 */
function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen bg-[#f0f2f8] font-sans text-[#1A1A1A] flex flex-col relative">
        <Navbar />
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:id" element={<Project />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
          </Routes>
        </main>
        {/* We place Footer here, but ContactForm is now handled by the pages 
            (or we can place Footer globally since all pages need it) */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}
