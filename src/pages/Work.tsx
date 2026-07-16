import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import CTABlock from '../components/CTABlock'

export default function Work() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<'professional' | 'personal'>('professional')

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const filteredProjects = projects.filter(p => p.type === activeTab)

  return (
    <div className="flex flex-col bg-[#f0f2f8]">
      {/* Hero Section */}
      <section className="relative pt-48 pb-16 px-8 md:px-12 gilugali-grid overflow-hidden">
        <div className="relative z-10 max-w-[1200px] mx-auto">
          <p
            className={`text-xs font-sans font-bold text-[#1A1A1A] uppercase tracking-widest mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            My work
          </p>
          <h1
            className={`font-sans text-[48px] md:text-[72px] lg:text-[80px] font-bold leading-[1.05] text-[#1A1A1A] tracking-[-0.02em] mb-8 max-w-[900px] transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Innovative Solutions for Modern Challenges
          </h1>
          <p
            className={`text-base md:text-lg text-[#6B6B6B] leading-relaxed max-w-[640px] font-sans transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Explore a selection of my recent works. From industry-grade corporate platforms to custom open-source tools, see how I bring ideas to life.
          </p>
        </div>
      </section>

      {/* Tabs Switcher Section */}
      <section className="relative bg-[#f0f2f8] pt-4 pb-8">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12">
          <div className="flex border-b border-black/[0.08] relative">
            <button
              onClick={() => setActiveTab('professional')}
              className={`pb-4 pr-8 text-lg font-bold transition-all duration-300 relative ${
                activeTab === 'professional' ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]/60 hover:text-[#1A1A1A]'
              }`}
            >
              Professional Works
              {activeTab === 'professional' && (
                <span className="absolute bottom-0 left-0 right-8 h-[2px] bg-[#1A1A1A] transition-all duration-300" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('personal')}
              className={`pb-4 px-8 text-lg font-bold transition-all duration-300 relative ${
                activeTab === 'personal' ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]/60 hover:text-[#1A1A1A]'
              }`}
            >
              Personal Projects
              {activeTab === 'personal' && (
                <span className="absolute bottom-0 left-8 right-8 h-[2px] bg-[#1A1A1A] transition-all duration-300" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="relative bg-[#f0f2f8] pb-24">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <div
                key={project.id}
                className={`py-16 md:py-24 border-t border-black/[0.08] grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-24 items-start transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${i * 200 + 300}ms` }}
              >
                {/* Left Column: Metadata */}
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A]">Client</p>
                    <p className="text-sm font-sans text-[#6B6B6B] mt-1">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A]">Service</p>
                    <p className="text-sm font-sans text-[#6B6B6B] mt-1">{project.service}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A]">Year</p>
                    <p className="text-sm font-sans text-[#6B6B6B] mt-1">{project.year}</p>
                  </div>
                </div>

                {/* Right Column: Details */}
                <div>
                  <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6">
                    {project.headline}
                  </h2>
                  <p className="text-[#6B6B6B] text-base leading-relaxed font-sans mb-10 max-w-2xl">
                    {project.description}
                  </p>
                  <Link
                    to={`/work/${project.id}`}
                    className="inline-flex items-center gap-2 bg-[#111111] text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-black hover:scale-[1.02] transition-all duration-300"
                  >
                    Read case study
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="py-24 text-center text-[#6B6B6B]">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      <CTABlock />
    </div>
  )
}
