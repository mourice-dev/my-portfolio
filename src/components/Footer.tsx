const workLinks = [
  { label: 'Resume Generator', href: 'https://eresume-generator.vercel.app/' },
  { label: 'E-commerce App', href: 'https://orangeshop-fe.vercel.app/' },
  { label: 'See all →', href: 'https://github.com/mourice-dev' },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact', href: '/contact' },
]

const connectLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nshuti-maurice-2b7a202a0/' },
  { label: 'GitHub', href: 'https://github.com/mourice-dev' },
  { label: 'Twitter', href: 'https://x.com/Nshuti_Kope' },
  { label: 'Instagram', href: 'https://www.instagram.com/nshutii__/' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Main footer grid — Gilugali uses 4 columns */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Current Location & Availability */}
          <div>
            <p className="text-sm font-bold text-white mb-4">Location & Availability</p>
            <p className="text-white font-bold text-sm">Kigali, Rwanda</p>
            <p className="text-white/50 text-sm mt-2 leading-relaxed">
              Currently available for new projects & collaborations.
            </p>
          </div>

          {/* Work */}
          <div>
            <p className="text-sm font-bold text-white mb-4">Work</p>
            <ul className="space-y-2.5">
              {workLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 text-sm font-sans hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-sm font-bold text-white mb-4">Company</p>
            <ul className="space-y-2.5">
              {companyLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm font-sans hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-sm font-bold text-white mb-4">Connect</p>
            <ul className="space-y-2.5">
              {connectLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 text-sm font-sans hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar — Logo + copyright */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-sans text-lg font-bold text-white/70">Maurice</span>
          <p className="text-xs text-white/25 font-sans">
            © Maurice Nshuti. {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
