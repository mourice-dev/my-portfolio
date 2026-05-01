import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import AntigravityNavbar from './components/AntigravityNavbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import TechStack from './components/TechStack'
import Education from './components/Education'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Footer from './components/Footer'

/**
 * Handles scrolling to a hash (#contact, #about, etc.) after navigation.
 * This fixes the double-click issue: React Router changes the route first,
 * then this effect scrolls to the target element once the page renders.
 */
function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Small delay to let the new page render before scrolling
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

function HomePage() {
  return (
    <>
      <About />
      <Portfolio />
      <Education />
      <TechStack />
      <Contact />
    </>
  )
}

function BlogPage() {
  return (
    <>
      <div className="pt-24" />
      <Blog />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col relative">
        <AntigravityNavbar />
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <div className="relative z-10 bg-white">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}
