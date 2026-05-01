import { useEffect, useRef, useState } from 'react'
const techStack = [
  { 
    name: 'React', 
    logo: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"/>
      </svg>
    )
  },
  { 
    name: 'TypeScript', 
    logo: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 2h20v20H2z"/>
        <text x="12" y="16" fontSize="10" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle" fill="currentColor" stroke="none">TS</text>
      </svg>
    )
  },
  { 
    name: 'Node.js', 
    logo: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    )
  },
  { 
    name: 'AWS', 
    logo: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.3-1.8-4.2-4.1-4.5C17.4 6.7 14.9 4 12 4c-2.8 0-5.1 2-5.8 4.6C3.9 8.8 2 10.9 2 13.5 2 16.5 4.5 19 7.5 19h10z"/>
      </svg>
    )
  },
  { 
    name: 'PostgreSQL', 
    logo: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    )
  },
  { 
    name: 'GraphQL', 
    logo: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v7M12 15v7M2 12h7M15 12h7M5 5l5 5M19 19l-5-5M19 5l-5 5M5 19l5-5"/>
      </svg>
    )
  },
  { 
    name: 'Figma', 
    logo: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a4 4 0 0 0-4 4v12a4 4 0 1 0 4-4H8a4 4 0 0 0 8-4v-4a4 4 0 0 0-4-4z"/>
      </svg>
    )
  },
  {
    name: 'Codewars',
    logo: <img src="https://cdn.simpleicons.org/codewars/1d1d1f" width="24" height="24" alt="Codewars" />
  },
  {
    name: 'Tailwind CSS',
    logo: <img src="https://cdn.simpleicons.org/tailwindcss/1d1d1f" width="24" height="24" alt="Tailwind CSS" />
  },
  {
    name: 'MySQL',
    logo: <img src="https://cdn.simpleicons.org/mysql/1d1d1f" width="24" height="24" alt="MySQL" />
  },
  {
    name: 'Oracle',
    logo: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M7.076 7.076C3.162 7.076 0 10.239 0 14.15c0 3.913 3.162 7.076 7.076 7.076h9.849c3.912 0 7.075-3.163 7.075-7.076 0-3.912-3.163-7.075-7.075-7.075H7.076zm9.927 11.479H7.076a4.404 4.404 0 010-8.808h9.927a4.404 4.404 0 010 8.808z"/>
      </svg>
    )
  },
  {
    name: 'Git',
    logo: <img src="https://cdn.simpleicons.org/git/1d1d1f" width="24" height="24" alt="Git" />
  },
  {
    name: 'GitHub',
    logo: <img src="https://cdn.simpleicons.org/github/1d1d1f" width="24" height="24" alt="GitHub" />
  },
  {
    name: 'JSON',
    logo: <img src="https://cdn.simpleicons.org/json/1d1d1f" width="24" height="24" alt="JSON" />
  },
  {
    name: 'VS Code',
    logo: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M17.583.063a1.5 1.5 0 00-1.032.392l-7.9 7.208L4.15 4.356a1 1 0 00-1.3.074l-1.5 1.373a1 1 0 00-.013 1.44L5.59 12l-4.253 4.757a1 1 0 00.013 1.44l1.5 1.373a1 1 0 001.3.074l4.5-3.307 7.9 7.208a1.5 1.5 0 002.38-1.21V1.274A1.5 1.5 0 0017.583.063zM17.5 18.56l-6.402-5.56 6.402-5.56z"/>
      </svg>
    )
  },
  {
    name: 'Vite',
    logo: <img src="https://cdn.simpleicons.org/vite/1d1d1f" width="24" height="24" alt="Vite" />
  },
  {
    name: 'Postman',
    logo: <img src="https://cdn.simpleicons.org/postman/1d1d1f" width="24" height="24" alt="Postman" />
  },
  {
    name: 'Supabase',
    logo: <img src="https://cdn.simpleicons.org/supabase/1d1d1f" width="24" height="24" alt="Supabase" />
  },
  {
    name: 'Vercel',
    logo: <img src="https://cdn.simpleicons.org/vercel/1d1d1f" width="24" height="24" alt="Vercel" />
  },
  {
    name: 'Netlify',
    logo: <img src="https://cdn.simpleicons.org/netlify/1d1d1f" width="24" height="24" alt="Netlify" />
  },
]

import FloatingBoxesBackground from './FloatingBoxesBackground'

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-12 bg-white border-t border-b border-gray-100 overflow-hidden">
      <FloatingBoxesBackground />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5">
        {/* Tech stack */}
        <div className="text-center mb-8">
          <p className="text-[18px] font-bold tracking-[0.15em] uppercase text-[#86868b] mb-2">Tech Stack</p>
          <h3 className="text-[28px] lg:text-[36px] font-medium text-[#1a1a1c] tracking-tight">Tools I Work With</h3>
        </div>

        <div ref={ref} className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {techStack.map((tech, i) => (
            <div
              key={tech.name}
              className={`flex flex-col items-center gap-2 group cursor-default transition-all duration-[1000ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="w-14 h-14 bg-white border border-black/5 rounded-2xl flex items-center justify-center text-[#1d1d1f] shadow-sm hover:shadow-md hover:border-black/15 hover:-translate-y-1 transition-all duration-200">
                {tech.logo}
              </div>
              <span className="text-[18px] text-[#86868b] font-medium text-center hidden sm:block">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
