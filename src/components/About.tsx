import { useEffect, useRef, useState } from 'react'

const languages = [
  'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express.js',
  'Socket.io', 'HTML5', 'CSS3', 'Tailwind CSS', 'SQL',
  'MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'PHP',
  'Java', 'C#', 'C++', 'C', 'Git', 'GitHub',
  'Postman', 'VS Code', 'Vercel', 'Vite', 'Three.js / WebGL',
  'WebSockets', 'Bash', 'Airtable'
]

const stats = [
  { number: '2+', label: 'Years Learning' },
  { number: '10+', label: 'Projects Built' },
  { number: '5+', label: 'Technologies' },
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
    <section id="about" className="relative py-28 bg-[#f0f2f8] gilugali-grid overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-[1100px] mx-auto px-8 md:px-12">
        {/* Section Header — bold sans like Gilugali */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
            About Me — The Story Behind the Code
          </h2>
        </div>

        {/* Two Column */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Story */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`} style={{ transitionDelay: '300ms' }}>
            <p className="text-base md:text-[17px] text-[#6B6B6B] leading-relaxed mb-6 font-sans">
              My journey into software development started with a deep curiosity about how things work under the hood.
              What began as tinkering with HTML pages eventually evolved into a real passion — 
              building applications that solve real problems and creating experiences that people actually enjoy using.
            </p>
            <p className="text-base md:text-[17px] text-[#6B6B6B] leading-relaxed mb-6 font-sans">
              I believe great software is born at the intersection of technical excellence and human empathy.
              I'm not just writing code — I'm solving puzzles, telling stories through interfaces, 
              and building things that make people's lives a little bit easier.
            </p>
            <p className="text-base md:text-[17px] text-[#6B6B6B] leading-relaxed mb-6 font-sans">
              Whether it's a sleek frontend experience or a robust backend system, 
              I approach every project with the same mindset: 
              <span className="font-bold text-[#1A1A1A]"> build it right, make it beautiful, keep it simple.</span>
            </p>
            <p className="text-base md:text-[17px] text-[#6B6B6B] leading-relaxed mb-10 font-sans">
              I am currently available for new projects & collaborations. If you are looking for a dedicated developer to collaborate on projects or bring new ideas to life, feel free to reach out!
            </p>

            {/* Stats */}
            <div className="flex gap-10 md:gap-14">
              {stats.map((stat, i) => (
                <div 
                  key={stat.label}
                  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${i * 150 + 600}ms` }}
                >
                  <p className="font-sans text-4xl md:text-5xl font-bold text-[#1A1A1A]">{stat.number}</p>
                  <p className="text-xs font-sans text-[#6B6B6B] mt-1 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Languages */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '500ms' }}>
            <h3 className="text-sm font-bold text-[#1A1A1A] mb-6">
              Languages & Core Tech
            </h3>
            <div className="flex flex-wrap gap-2.5 mb-10">
              {languages.map((lang, index) => (
                <span
                  key={lang}
                  className={`tag-pill transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                  }`}
                  style={{ transitionDelay: `${Math.min(index * 50 + 600, 1800)}ms` }}
                >
                  {lang}
                </span>
              ))}
            </div>

            {/* Philosophy */}
            <div className="p-6 bg-white/40 border border-black/[0.04] rounded-2xl">
              <p className="text-[#6B6B6B] text-base leading-relaxed font-sans mb-3">
                "The best developers aren't the ones who write the most clever code — 
                they're the ones who write code that anyone can understand, maintain, and build upon."
              </p>
              <p className="text-xs font-bold text-[#1A1A1A]/50 uppercase tracking-wider">— My Development Philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
