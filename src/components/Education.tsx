import { useEffect, useRef, useState } from 'react'

const education = [
  {
    year: '2019 – 2022',
    degree: 'Software Development',
    institution: 'Secondary School',
    desc: 'Studied software development fundamentals including programming, databases, and web technologies. This is where I first discovered my passion for coding.',
  },
  {
    year: '2023 – Present',
    degree: 'Bachelor of Information Technology',
    institution: 'University',
    desc: 'Currently pursuing a degree in Information Technology, deepening my expertise in software engineering, data structures, algorithms, and modern application development.',
  },
]

export default function Education() {
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
    <section id="education" className="relative py-28 bg-white overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-[900px] mx-auto px-8 md:px-12">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            Education
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {education.map((item, i) => (
            <div
              key={item.degree}
              className={`py-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${i > 0 ? 'border-t border-black/[0.06]' : ''}`}
              style={{ transitionDelay: `${i * 200 + 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h4 className="font-sans text-xl md:text-2xl font-bold text-[#1A1A1A]">{item.degree}</h4>
                  <p className="text-[#6B6B6B] text-sm font-sans font-medium mt-1">{item.institution}</p>
                </div>
                <span className="tag-pill text-xs shrink-0">{item.year}</span>
              </div>
              <p className="text-[#6B6B6B] text-[15px] leading-relaxed font-sans max-w-xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
