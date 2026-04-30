import { useEffect, useRef, useState } from 'react'
import { Download, Code2, Palette, Database, Globe, Smartphone } from 'lucide-react'

const languages = [
  'JavaScript', 'TypeScript', 'HTML5', 'CSS', 'Tailwind CSS',
  'PHP', 'Java', 'C#', 'C++', 'C', 'SQL', 'MySQL', 'Oracle',
  'Bash', 'React', 'Express', 'Node.js'
]

import ParticleBackground from './ParticleBackground'

export default function About() {
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
    <section id="about" className="bg-white">
      {/* Header Area with Background */}
      <div className="relative py-24 overflow-hidden border-b border-black/5">
        <ParticleBackground />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-5">
          <div className="text-center">
            <p className="text-[16px] font-bold tracking-[0.15em] uppercase text-[#86868b] mb-3">About Me</p>
            <h2 className="text-[28px] lg:text-[36px] font-medium text-[#1a1a1c] tracking-tight mb-3.5">
              Crafting Digital Experiences
            </h2>
            <p className="text-[19px] text-[#6e6e73] max-w-[580px] mx-auto leading-relaxed">
              I'm a passionate software developer with over 8 years of experience turning
              ideas into elegant, functional digital products.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area without Background */}
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Story */}
          <div ref={ref} className={`transition-all duration-[1200ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-[22px] font-bold text-[#1d1d1f] mb-3.5">The Story</h3>
            <p className="text-[18px] text-[#6e6e73] leading-relaxed mb-3.5">
              My journey into software development started with a deep curiosity about how things work under the hood.
              What began as tinkering with HTML on a family computer eventually evolved into a full-fledged career
              building products used by thousands of people daily.
            </p>
            <p className="text-[18px] text-[#6e6e73] leading-relaxed mb-7">
              I believe great software is born at the intersection of technical excellence and human empathy.
              Every line of code I write is guided by the question: does this make someone's life better?
            </p>
          </div>

          {/* Right — Languages */}
          <div>
            <h3 className="text-[22px] font-bold text-[#1d1d1f] mb-6 transition-all duration-[1200ms] delay-[400ms] opacity-100">Languages & Core Tech</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
              {languages.map((lang, index) => (
                <li
                  key={lang}
                  className={`flex items-center gap-2.5 text-[16px] text-[#1d1d1f] font-medium transition-all duration-[1000ms] ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${Math.min(index * 30 + 200, 1500)}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#86868b] shrink-0" />
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
