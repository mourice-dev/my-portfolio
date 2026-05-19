import { useEffect, useRef, useState } from 'react'

const certificates = [
  {
    title: 'Full-Stack Web Development',
    issuer: 'Online Bootcamp',
    year: '2023',
    description: 'Comprehensive certification covering modern web technologies including React, Node.js, and databases.',
  },
  {
    title: 'JavaScript Data Structures and Algorithms',
    issuer: 'freeCodeCamp',
    year: '2022',
    description: 'Deep dive into fundamental data structures, algorithm scripting, and object-oriented programming in JavaScript.',
  },
]

export default function Certificates() {
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
    <section className="relative py-28 bg-white border-y border-black/[0.04] overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-[900px] mx-auto px-8 md:px-12">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
            Certifications
          </h2>
          <p className="text-neutral-500 mt-4 max-w-xl font-sans leading-relaxed">
            Continuous learning is part of my journey. Here are some of the professional certifications I've earned.
          </p>
        </div>

        {/* List */}
        <div className="space-y-0">
          {certificates.map((cert, i) => (
            <div
              key={cert.title}
              className={`py-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${i > 0 ? 'border-t border-black/[0.06]' : ''}`}
              style={{ transitionDelay: `${i * 200 + 200}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h4 className="font-sans text-xl md:text-2xl font-bold text-neutral-900">{cert.title}</h4>
                  <p className="text-neutral-500 text-sm font-sans font-medium mt-1">{cert.issuer}</p>
                </div>
                <span className="tag-pill text-xs shrink-0">{cert.year}</span>
              </div>
              <p className="text-neutral-500 text-[15px] leading-relaxed font-sans max-w-xl">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
