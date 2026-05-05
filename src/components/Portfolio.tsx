import { useState, useRef, useEffect } from 'react'
import { ExternalLink } from 'lucide-react'
import OrbitBackground from './OrbitBackground'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

/* ──────────────────────────────────────────────
   TODO: Replace these with YOUR real projects.
   Add actual GitHub links and live demo URLs.
   ────────────────────────────────────────────── */

const projects = [
  {
    id: 1,
    title: 'Resume Generator',
    category: 'Web App',
    tags: ['React', 'JavaScript', 'CSS'],
    desc: 'An interactive web application that allows users to easily generate professional resumes with a clean, user-friendly interface.',
    color: '#e8e8ed',
    emoji: '📄',
    github: 'https://github.com/mourice-dev',
    live: 'https://resume-generetor-react-d7ckg4htl-nshutikope-2194s-projects.vercel.app/',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    category: 'Web App',
    tags: ['React', 'Node.js', 'API Integration'],
    desc: 'A full-featured e-commerce platform with product listings, shopping cart functionality, and seamless user experience.',
    color: '#d1d1d6',
    emoji: '🛒',
    github: 'https://github.com/mourice-dev',
    live: '#',
  },
  {
    id: 3,
    title: 'MedicTracker',
    category: 'Web App',
    tags: ['React', 'HealthTech'],
    desc: 'A medical tracking application designed to help users keep log of their medical history, appointments, and prescriptions efficiently.',
    color: '#c7c7cc',
    emoji: '⚕️',
    github: 'https://github.com/mourice-dev',
    live: '#',
  },
]

export default function Portfolio() {
  const [visible, setVisible] = useState<number[]>([])
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projects.forEach((p, i) => {
            setTimeout(() => setVisible((prev) => [...prev, p.id]), i * 250)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="relative py-12 bg-[#f8f9fa] overflow-hidden">
      <OrbitBackground />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[14px] font-bold tracking-[0.15em] uppercase text-[#86868b] mb-3">My Work</p>
          <h2 className="text-[24px] lg:text-[28px] font-medium text-[#1a1a1c] tracking-tight mb-3.5">Portfolio</h2>
          <p className="text-[17px] text-[#6e6e73] max-w-[480px] mx-auto leading-relaxed">
            Projects I've built while learning and growing as a developer.
          </p>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`portfolio-item group bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-black/15 hover:shadow-2xl transition-all duration-[1000ms] hover:-translate-y-2 ${
                visible.includes(project.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transition: 'all 1s ease' }}
            >
              {/* Image placeholder */}
              <div
                className="relative h-52 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: project.color }}
              >
                <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                  {project.emoji}
                </span>
                {/* Overlay */}
                <div className="portfolio-overlay absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 flex items-center justify-center gap-3.5">
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors shadow"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferre"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors shadow"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon />
                  </a>
                </div>
                {/* Category badge */}
                <span className="absolute top-4 left-4 bg-white/90 text-[#1d1d1f] text-[14px] font-bold tracking-wide px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-[17px] font-bold text-[#1d1d1f] mb-2">{project.title}</h3>
                <p className="text-[15px] text-[#86868b] leading-relaxed mb-3.5">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[14px] font-semibold px-2.5 py-1 bg-[#f5f5f7] text-[#6e6e73] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/mourice-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#1d1d1f] text-[#1d1d1f] text-[15px] font-semibold rounded-full hover:bg-[#1d1d1f] hover:text-white transition-all group"
          >
            View All on GitHub
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
