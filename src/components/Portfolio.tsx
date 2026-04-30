import { useState, useRef, useEffect } from 'react'
import { ExternalLink } from 'lucide-react'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const filters = ['All', 'Web App', 'Mobile', 'Design', 'Open Source']

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web App',
    tags: ['React', 'Node.js', 'MongoDB'],
    desc: 'A full-stack e-commerce solution with real-time inventory, payment integration, and an intuitive admin dashboard.',
    color: '#e8e8ed',
    emoji: '🛒',
  },
  {
    id: 2,
    title: 'Finance Dashboard',
    category: 'Web App',
    tags: ['Next.js', 'TypeScript', 'Chart.js'],
    desc: 'Real-time financial analytics dashboard with interactive charts, portfolio tracking, and automated reporting.',
    color: '#d1d1d6',
    emoji: '📊',
  },
  {
    id: 3,
    title: 'Fitness Tracker App',
    category: 'Mobile',
    tags: ['React Native', 'Firebase'],
    desc: 'Cross-platform mobile app for workout logging, progress visualization, and personalized training plans.',
    color: '#c7c7cc',
    emoji: '💪',
  },
  {
    id: 4,
    title: 'Design System Kit',
    category: 'Design',
    tags: ['Figma', 'Storybook', 'CSS'],
    desc: 'A comprehensive design system with 200+ components, tokens, and guidelines for consistent product design.',
    color: '#e8e8ed',
    emoji: '🎨',
  },
  {
    id: 5,
    title: 'AI Chat Assistant',
    category: 'Web App',
    tags: ['React', 'OpenAI', 'WebSockets'],
    desc: 'Intelligent chatbot platform with streaming responses, context memory, and multi-model support.',
    color: '#d1d1d6',
    emoji: '🤖',
  },
  {
    id: 6,
    title: 'Open Source CLI',
    category: 'Open Source',
    tags: ['Node.js', 'TypeScript'],
    desc: 'A developer productivity CLI tool with 2,000+ GitHub stars, automating common React project tasks.',
    color: '#c7c7cc',
    emoji: '⚡',
  },
]

import OrbitBackground from './OrbitBackground'

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [visible, setVisible] = useState<number[]>([])
  const ref = useRef<HTMLDivElement>(null)

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  useEffect(() => {
    setVisible([])
    const timers = filtered.map((p, i) =>
      setTimeout(() => setVisible((prev) => [...prev, p.id]), i * 250)
    )
    return () => timers.forEach(clearTimeout)
  }, [active])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          filtered.forEach((p, i) => {
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
            A curated selection of projects that showcase my range, craft, and technical depth.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              id={`filter-${f.toLowerCase().replace(' ', '-')}`}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-[15px] font-semibold transition-all ${
                active === f
                  ? 'bg-[#1d1d1f] text-white shadow-md'
                  : 'bg-white text-[#6e6e73] border border-black/10 hover:border-black/25 hover:text-[#1d1d1f]'
              }`}
            >
              {f}
              {f === 'All' && <span className="ml-1.5 text-[14px] opacity-60">({projects.length})</span>}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
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
                  <a
                    href="#"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors shadow"
                    aria-label={`View ${project.title} live`}
                  >
                    <ExternalLink size={15} />
                  </a>
                  <a
                    href="#"
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
          <button className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#1d1d1f] text-[#1d1d1f] text-[15px] font-semibold rounded-full hover:bg-[#1d1d1f] hover:text-white transition-all group">
            View All Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
