import { useEffect, useRef, useState } from 'react'
import ParticleBackground from './ParticleBackground'

const languages = [
  'JavaScript', 'TypeScript', 'HTML5', 'CSS', 'Tailwind CSS',
  'PHP', 'Java', 'C#', 'C++', 'C', 'SQL', 'MySQL', 'Oracle',
  'Bash', 'React', 'Express', 'Node.js'
]

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
    <>
      {/* Home Area with Background */}
      <section id="home" className="relative py-32 overflow-hidden border-b border-black/5 bg-white">
        <ParticleBackground />
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-5">
          <div className="text-center">
            <h2 
              className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-[#1a1a1c] tracking-tight mb-4 animate-fade-in-up" 
              style={{ animationDelay: '300ms', animationFillMode: 'both' }}
            >
              Hi, I'm Nshuti Maurice
            </h2>
            <p 
              className="text-[19px] md:text-[21px] text-[#6e6e73] max-w-[640px] mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '600ms', animationFillMode: 'both' }}
            >
              I'm a passionate software developer turning ideas into elegant, functional digital products.
            </p>
          </div>
        </div>
      </section>

      {/* About Content Area without Background */}
      <section id="about" className="bg-white">
        <div className="max-w-[1200px] mx-auto px-5 py-24">
          <div className="text-center mb-16">
            <p className="text-[16px] font-bold tracking-[0.15em] uppercase text-[#86868b]">About Me</p>
          </div>

          {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Story */}
          <div ref={ref} className={`transition-all duration-[1200ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-[22px] font-bold text-[#1d1d1f] mb-3.5">The Story</h3>
            <p className="text-[18px] text-[#6e6e73] leading-relaxed mb-3.5">
              My journey into software development started with a deep curiosity about how things work under the hood.
              What began as tinkering with HTML eventually evolved into a growing career
              building real-world applications and learning new technologies every day.
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
    </>
  )
}
