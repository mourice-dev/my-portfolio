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
const GithubIcon = ({ size = 16, className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
const TwitterIcon = ({ size = 16, className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
const InstagramIcon = ({ size = 16, className, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
)

interface ConnectLink {
  label: string
  href: string
  icon?: React.ComponentType<IconProps>
  ariaLabel: string
}

const connectLinks: ConnectLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nshuti-maurice-2b7a202a0/', icon: LinkedinIcon, ariaLabel: 'Follow Maurice Nshuti on LinkedIn' },
  { label: 'GitHub', href: 'https://github.com/mourice-dev', icon: GithubIcon, ariaLabel: 'Visit Maurice Nshuti\'s GitHub profile' },
  { label: 'Twitter', href: 'https://x.com/Nshuti_Kope', icon: TwitterIcon, ariaLabel: 'Follow Maurice Nshuti on Twitter' },
  { label: 'Instagram', href: 'https://www.instagram.com/nshutii__/', icon: InstagramIcon, ariaLabel: 'Follow Maurice Nshuti on Instagram' },
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
                    aria-label={link.ariaLabel}
                    className="text-white/50 text-sm font-sans hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    {link.icon && (
                      <link.icon
                        size={16}
                        className="transition-transform duration-300 group-hover:scale-110 group-hover:text-white"
                      />
                    )}
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">{link.label}</span>
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
