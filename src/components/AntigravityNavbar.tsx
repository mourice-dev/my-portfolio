import { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Work', to: '/work' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Blog', to: '/blog' },
];

export default function AntigravityNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-7">
          <Link to="/" className="flex items-center gap-2">
            <Terminal className="text-[#4285f4]" size={24} />
            <span className="font-medium text-base tracking-tight text-gray-900">
              <span className="font-bold">Maurice</span> Nshuti
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-600">
            {navLinks.map((link) =>
              link.to ? (
                <Link key={link.label} to={link.to} className="hover:text-gray-900 transition-colors">
                  {link.label}
                </Link>
              ) : (
                <a key={link.label} href={link.href} className="hover:text-gray-900 transition-colors">
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="hidden md:flex items-center gap-2 bg-[#1a1a1c] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black transition-colors shadow-sm"
          >
            Let's Talk
          </a>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-black/5 animate-fade-in">
          <nav className="flex flex-col px-5 py-3.5 gap-1">
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-left py-3 text-[16px] font-medium border-b border-black/5 last:border-0 text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-left py-3 text-[16px] font-medium border-b border-black/5 last:border-0 text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-3 text-center py-3 bg-[#1d1d1f] text-white text-[15px] font-semibold rounded-full hover:bg-black transition-colors"
            >
              Let's Talk
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
}
