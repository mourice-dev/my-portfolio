import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AntigravityNavbar from './components/AntigravityNavbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import TechStack from './components/TechStack'
import Education from './components/Education'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Footer from './components/Footer'

function HomePage() {
  return (
    <>
      <About />
      <Education />
      <TechStack />
      <Contact />
    </>
  )
}

function WorkPage() {
  return (
    <>
      <div className="pt-24" />
      <Portfolio />
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
      <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col relative">
        <AntigravityNavbar />
        <main className="flex-1 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
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
