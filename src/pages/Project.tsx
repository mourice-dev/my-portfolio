import { useEffect, useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import CTABlock from '../components/CTABlock'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export default function Project() {
  const { id } = useParams()
  const [isVisible, setIsVisible] = useState(false)

  const project = projects.find(p => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [id])

  if (!project) {
    return <Navigate to="/work" replace />
  }

  const otherProjects = projects.filter(p => p.id !== project.id)

  return (
    <div className="flex flex-col bg-[#f0f2f8]">
      <section className="relative gilugali-grid overflow-hidden">
        <div className="relative z-10">
          {/* Case Study Header */}
          <div className="max-w-[900px] mx-auto px-8 md:px-12 pt-48 pb-16 text-center">
            <p
              className={`text-sm font-sans font-bold text-[#1A1A1A] mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Case Study
            </p>
            <h1
              className={`font-sans text-4xl md:text-5xl lg:text-[64px] font-bold text-[#1A1A1A] leading-[1.05] tracking-tight mb-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              {project.headline}
            </h1>
            <p
              className={`text-[#6B6B6B] text-lg leading-relaxed font-sans max-w-2xl mx-auto transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {project.description}
            </p>
          </div>

          <div className="max-w-[1100px] mx-auto px-8 md:px-12">
            {/* Metadata Row */}
            <div
              className={`grid grid-cols-3 border-y border-black/[0.08] py-5 mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div>
                <p className="text-sm font-bold text-[#1A1A1A]">Client</p>
                <p className="text-sm font-sans text-[#6B6B6B] mt-1">{project.client}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1A1A1A]">Year</p>
                <p className="text-sm font-sans text-[#6B6B6B] mt-1">{project.year}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1A1A1A]">Service</p>
                <p className="text-sm font-sans text-[#6B6B6B] mt-1">{project.service}</p>
              </div>
            </div>

            {/* Mockup Image */}
            <div
              className={`relative rounded-2xl overflow-hidden mb-20 group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="browser-mockup relative">
                <img
                  src={project.image}
                  alt={project.headline}
                  className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-4">
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-[#1A1A1A] px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/15 border border-white/25 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white/25 transition-colors backdrop-blur-sm"
                  >
                    <GithubIcon />
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="max-w-[800px] mb-16">
              <h3 className="font-sans text-2xl font-bold text-[#1A1A1A] mb-6">Overview</h3>
              {project.overview.map((para, pi) => (
                <p key={pi} className="text-[#6B6B6B] text-[17px] leading-relaxed font-sans mb-5">
                  {para}
                </p>
              ))}
            </div>

            {/* What I Did */}
            <div className="mb-24">
              <h3 className="font-sans text-2xl font-bold text-[#1A1A1A] mb-5">What I did</h3>
              <div className="flex flex-wrap gap-3">
                {project.whatIdid.map(item => (
                  <span key={item} className="tag-pill">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Case Studies */}
      {otherProjects.length > 0 && (
        <section className="bg-white py-24 border-t border-black/[0.04]">
          <div className="max-w-[1100px] mx-auto px-8 md:px-12">
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight mb-12">
              More case studies
            </h2>
            <div className="space-y-16">
              {otherProjects.map(p => (
                <div key={p.id} className="border-b border-black/[0.06] pb-16">
                  <h3 className="font-sans text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4">
                    {p.headline}
                  </h3>
                  <p className="text-[#6B6B6B] text-base leading-relaxed font-sans max-w-3xl mb-6">
                    {p.description}
                  </p>
                  <Link
                    to={`/work/${p.id}`}
                    className="inline-flex items-center font-bold text-[#1A1A1A] hover:text-[#6B6B6B] transition-colors"
                  >
                    Read case study <span className="ml-2">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABlock />
    </div>
  )
}
