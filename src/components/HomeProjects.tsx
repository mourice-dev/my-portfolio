import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function HomeProjects() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-28 bg-[#f0f2f8] overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12">
        {/* Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            Selected Projects
          </h2>
          <p className="text-[#6B6B6B] mt-4 max-w-xl font-sans text-sm leading-relaxed">
            A glimpse into some of the latest things I've built. For more details, explore the full case studies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Link
              to={`/work/${project.id}`}
              key={project.id}
              className={`group block bg-white rounded-2xl overflow-hidden border border-black/[0.04] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* Image */}
              <div className="aspect-video bg-[#f0f2f8] overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl font-serif font-bold text-[#1A1A1A]/20">{project.title[0]}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    project.type === 'professional' 
                      ? 'bg-blue-50 text-blue-600 border border-blue-100' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {project.type === 'professional' ? 'Professional Work' : 'Personal Project'}
                  </span>
                </div>
                <h3 className="font-sans text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#6B6B6B] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed font-sans line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.whatIdid.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 bg-[#f0f2f8] rounded-full text-[#6B6B6B] font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
