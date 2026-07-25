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

import React from 'react'

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number
}

const LinkedinIcon = ({ size = 16, className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
)

interface ConnectLink {
  label: string
  href: string
  icon?: React.ComponentType<IconProps>
}

const connectLinks: ConnectLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nshuti-maurice-2b7a202a0/', icon: LinkedinIcon },
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
                    className="text-white/50 text-sm font-sans hover:text-white transition-colors flex items-center gap-2"
                  >
                    {link.icon && <link.icon size={16} />}
                    <span>{link.label}</span>
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
