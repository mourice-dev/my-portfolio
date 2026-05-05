import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
)
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
)

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Work', to: '/work' },
  { label: 'Contact', href: '/#contact' },
]

const skills = [
  'React & TypeScript',
  'Node.js & Express',
  'UI/UX Design',
  'Database Design',
  'REST APIs',
]

const socials = [
  { icon: TwitterIcon, href: 'https://x.com/Nshuti_Kope', label: 'Twitter' },
  { icon: GithubIcon, href: 'https://github.com/mourice-dev', label: 'GitHub' },
  { icon: InstagramIcon, href: 'https://www.instagram.com/nshutii__/', label: 'Instagram' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/nshuti-maurice-2b7a202a0/', label: 'LinkedIn' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-[#1d1d1f] text-white">
      {/* Main footer */}
      <div className="max-w-[1200px] mx-auto px-5 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h4 className="text-[18px] font-bold mb-3.5">About</h4>
            <p className="text-[15px] text-white/50 leading-relaxed mb-5">
              Software developer passionate about building beautiful, performant digital experiences
              and continuously learning new technologies.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[18px] font-bold mb-3.5">Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      className="text-[15px] text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-[15px] text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-[18px] font-bold mb-3.5">Skills</h4>
            <ul className="space-y-3">
              {skills.map((skill) => (
                <li key={skill} className="text-[15px] text-white/50 flex items-center gap-2">
                  <span>→</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-[18px] font-bold mb-3.5">Have a Question?</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-[15px] text-white/50">
                <MapPin size={16} className="shrink-0 mt-0.5 text-white/30" />
                <span>Rwanda, Kigali</span>
              </li>
              <li className="flex gap-3 text-[15px] text-white/50">
                <Phone size={16} className="shrink-0 text-white/30" />
                <a href="tel:+250793253301" className="hover:text-white transition-colors">+250 793 253 301</a>
              </li>
              <li className="flex gap-3 text-[15px] text-white/50">
                <Mail size={16} className="shrink-0 text-white/30" />
                <a href="mailto:nshutikope@gmail.com" className="hover:text-white transition-colors">nshutikope@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3.5">
          <p className="text-[14px] text-white/30 text-center">
            Copyright © {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-white/50">♥</span> by Maurice Nshuti
          </p>

          <div className="flex items-center gap-4">
            <a href="https://x.com/Nshuti_Kope" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/40 hover:text-white/80 transition-colors">Twitter</a>
            <a href="https://www.linkedin.com/in/nshuti-maurice-2b7a202a0/" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/40 hover:text-white/80 transition-colors">LinkedIn</a>
            <a href="https://github.com/mourice-dev" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/40 hover:text-white/80 transition-colors">GitHub</a>
            <a href="https://www.instagram.com/nshutii__/" target="_blank" rel="noopener noreferrer" className="text-[14px] text-white/40 hover:text-white/80 transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        id="scroll-to-top"
        onClick={scrollTop}
        className="fixed bottom-8 right-8 w-11 h-11 bg-[#1d1d1f] border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-black hover:scale-110 transition-all shadow-xl z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  )
}
