import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
)

const navLinks = [
  { label: 'Works', path: '/work' },
  { label: 'About Me', path: '/about' },
  { label: 'Services', path: '/#services' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const goToPath = useCallback((path: string) => {
    setMenuOpen(false)
    navigate(path)
  }, [navigate])

  const goHome = useCallback(() => {
    setMenuOpen(false)
    navigate('/')
  }, [navigate])

  return (
    <>
      {/* Fixed Header — exactly like Gilugali */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-6">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo — Serif italic like Gilugali */}
          <button onClick={goHome} className="relative z-[60]">
            <span className={`font-serif text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${menuOpen ? 'text-white/70' : 'text-[#1A1A1A]'}`}>
              Maurice
            </span>
          </button>

          {/* Right side */}
          <div className="flex items-center gap-4 relative z-[60]">
            {/* Contact Me pill — BLACK bg, WHITE text (clearly visible) */}
            <button
              onClick={() => goToPath('/contact')}
              className={`hidden md:flex items-center px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                menuOpen
                  ? 'bg-transparent border border-white/20 text-white hover:bg-white/10'
                  : 'bg-[#1A1A1A] text-white hover:bg-black'
              }`}
            >
              Contact Me
            </button>

            {/* Hamburger — two thin lines clearly visible */}
            <button
              id="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 flex items-center justify-center transition-all duration-300"
              aria-label="Toggle navigation menu"
            >
              <div className="flex flex-col gap-[6px] items-end">
                <span className={`block h-[2px] rounded-full transition-all duration-300 ${
                  menuOpen
                    ? 'w-5 bg-white rotate-45 translate-y-[4px]'
                    : 'w-7 bg-[#1A1A1A]'
                }`} />
                <span className={`block h-[2px] rounded-full transition-all duration-300 ${
                  menuOpen
                    ? 'w-5 bg-white -rotate-45 -translate-y-[4px]'
                    : 'w-5 bg-[#1A1A1A]'
                }`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Menu Overlay — exactly like Gilugali */}
      <div
        className={`fixed inset-0 z-40 bg-[#111111] transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col justify-between px-8 md:px-12 pt-24 pb-8">
          {/* 2x2 Grid — NO numbers, just bold text like Gilugali */}
          <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
            {navLinks.map((link, i) => (
              <button
                key={link.label}
                onClick={() => goToPath(link.path)}
                className={`group flex items-end text-left p-8 md:p-12 border-b border-white/[0.06] ${i % 2 === 0 ? 'md:border-r md:border-r-white/[0.06]' : ''} transition-all duration-500 ${
                  menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 80 + 150}ms` : '0ms' }}
              >
                <h3 className="text-white text-3xl md:text-5xl font-sans font-bold tracking-tight group-hover:text-white/60 transition-colors duration-300">
                  {link.label}
                </h3>
              </button>
            ))}
          </div>

          {/* Bottom bar — Current Location + Follow us */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-white/[0.06]">
            <div>
              <p className="text-white text-sm font-bold mb-1">Current Location</p>
              <p className="text-white font-bold text-sm">Kigali</p>
              <p className="text-white/50 text-sm">Kigali, Rwanda</p>
            </div>
            <div>
              <p className="text-white text-sm font-bold mb-3">Follow us</p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/nshuti-maurice-2b7a202a0/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  <LinkedInIcon />
                </a>
                <a href="https://github.com/mourice-dev" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  <GithubIcon />
                </a>
                <a href="https://x.com/Nshuti_Kope" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
