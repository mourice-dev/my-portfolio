import { useEffect, useRef, useState } from 'react'
import { GraduationCap } from 'lucide-react'
import WaveBackground from './WaveBackground'

/* ──────────────────────────────────────────────
   TODO: Replace the placeholder school/university
   names below with your REAL institution names,
   degree titles, and date ranges.
   ────────────────────────────────────────────── */

const education = [
  {
    year: '2019 – 2022',
    degree: 'Software Development',
    institution: 'Secondary School',
    desc: 'Studied software development fundamentals including programming, databases, and web technologies. This is where I first discovered my passion for coding and built my foundational programming knowledge.',
    icon: GraduationCap,
  },
  {
    year: '2023 – Present',
    degree: 'Bachelor of Information Technology',
    institution: 'University',
    desc: 'Currently pursuing a degree in Information Technology, deepening my expertise in software engineering, data structures, algorithms, and modern application development.',
    icon: GraduationCap,
  },
]

function TimelineItem({ year, title, subtitle, desc, icon: Icon, isVisible, delay }: {
  year: string; title: string; subtitle: string; desc: string
  icon: typeof GraduationCap; isVisible: boolean; delay: number
}) {
  return (
    <div
      className={`flex gap-4 transition-all duration-[1000ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className="flex flex-col items-center">
        <div className="w-11 h-11 bg-[#f5f5f7] border border-black/5 rounded-xl flex items-center justify-center shrink-0">
          <Icon size={18} className="text-[#1d1d1f]" strokeWidth={1.5} />
        </div>
        <div className="w-px flex-1 bg-black/5 mt-3" />
      </div>

      {/* Content */}
      <div className="pb-7 flex-1">
        <p className="text-[16px] font-bold text-[#86868b] tracking-wide mb-1">{year}</p>
        <h4 className="text-[18px] font-bold text-[#1d1d1f] mb-0.5">{title}</h4>
        <p className="text-[17px] font-semibold text-[#6e6e73] mb-2">{subtitle}</p>
        <p className="text-[17px] text-[#86868b] leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

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
    <section id="education" className="relative py-20 bg-white overflow-hidden">
      <WaveBackground />

      <div className="relative z-10 max-w-[800px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[16px] font-bold tracking-[0.15em] uppercase text-[#86868b] mb-3">Background</p>
          <h2 className="text-[28px] lg:text-[36px] font-medium text-[#1a1a1c] tracking-tight">
            Education
          </h2>
        </div>

        <div ref={ref} className="pl-2 sm:pl-0">
          <div className="max-w-2xl mx-auto">
            {education.map((item, i) => (
              <TimelineItem
                key={item.degree}
                year={item.year}
                title={item.degree}
                subtitle={item.institution}
                desc={item.desc}
                icon={item.icon}
                isVisible={isVisible}
                delay={i * 250 + 200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
