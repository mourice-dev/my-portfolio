import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import AntigravityNavbar from './components/AntigravityNavbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import TechStack from './components/TechStack'
import Education from './components/Education'
import Contact from './components/Contact'
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

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show loading for a short duration, then fade out smoothly
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 800); // Wait for fade out animation
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isLoading && (
        <div className={`fixed inset-0 z-[1000] flex items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex flex-col items-center gap-4">
            <span className="text-[16px] tracking-[0.4em] font-medium text-[#1d1d1f] uppercase animate-pulse">
              Loading
            </span>
          </div>
        </div>
      )}
      
      <ScrollToHash />
      <div className={`min-h-screen bg-white font-sans text-gray-900 flex flex-col relative transition-opacity duration-1000 ease-in-out ${isLoading && !fadeOut ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <AntigravityNavbar />
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <div className="relative z-10 bg-white">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}
