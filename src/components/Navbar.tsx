import { useState, useEffect } from 'react'
import { Menu, X, Search } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (label: string, href: string) => {
    setActiveLink(label)
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 nav-blur border-b border-black/5 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick('Home', '#home')}
          className="text-[#1d1d1f] font-bold text-lg tracking-tight hover:opacity-70 transition-opacity"
        >
          <span className="text-xl font-black">&lt;/&gt;</span>
          <span className="ml-2 text-[18px] font-semibold tracking-wide">DevPortfolio</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.label, link.href)}
              className={`text-[17px] font-medium transition-colors duration-200 relative group ${
                activeLink === link.label
                  ? 'text-[#1d1d1f]'
                  : 'text-[#6e6e73] hover:text-[#1d1d1f]'
              }`}
            >
              {link.label}
              {activeLink === link.label && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#1d1d1f] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3.5">
          <button
            id="search-btn"
            onClick={() => setSearchOpen(!searchOpen)}
            className="hidden md:flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 transition-colors"
            aria-label="Search"
          >
            <Search size={18} className="text-[#1d1d1f]" />
          </button>

          <a
            href="#contact"
            onClick={() => handleNavClick('Contact', '#contact')}
            className="hidden md:inline-flex items-center px-4 py-2 bg-[#1d1d1f] text-white text-[17px] font-semibold rounded-full hover:bg-black/80 transition-colors"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            className="md:hidden p-2 rounded-lg hover:bg-black/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="hidden md:flex border-t border-black/5 bg-white/90 nav-blur px-5 py-3 animate-fade-in">
          <div className="max-w-[1200px] mx-auto w-full flex items-center gap-3">
            <Search size={16} className="text-[#86868b]" />
            <input
              autoFocus
              type="text"
              placeholder="Search..."
              className="flex-1 text-[17px] outline-none bg-transparent text-[#1d1d1f] placeholder-[#86868b]"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="text-[17px] text-[#86868b] hover:text-[#1d1d1f]"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 nav-blur border-t border-black/5 animate-fade-in">
          <nav className="flex flex-col px-5 py-3.5 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.label, link.href)}
                className={`text-left py-3 text-[18px] font-medium border-b border-black/5 last:border-0 transition-colors ${
                  activeLink === link.label
                    ? 'text-[#1d1d1f]'
                    : 'text-[#6e6e73]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <a
              href="#contact"
              className="mt-3 text-center py-3 bg-[#1d1d1f] text-white text-[17px] font-semibold rounded-full"
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
