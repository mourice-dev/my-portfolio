import { useEffect, useRef, useState } from 'react'
import { Search, Code2, Boxes, Lightbulb, BarChart2, PenTool } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Building robust, scalable web applications with modern technologies like React, Node.js, and TypeScript.',
  },
  {
    icon: PenTool,
    title: 'UI/UX Design',
    desc: 'Creating beautiful, responsive websites that engage users and drive results with pixel-perfect precision.',
  },
  {
    icon: Boxes,
    title: 'Mobile Apps',
    desc: 'Developing cross-platform mobile experiences using React Native that feel native on iOS and Android.',
  },
  {
    icon: BarChart2,
    title: 'Data Analysis',
    desc: 'Turning raw data into actionable insights with powerful dashboards and data visualization tools.',
  },
  {
    icon: Lightbulb,
    title: 'Business Strategy',
    desc: 'Helping startups and businesses define their tech stack, roadmap, and digital transformation strategy.',
  },
  {
    icon: Search,
    title: 'SEO & Performance',
    desc: 'Optimizing web apps for speed, accessibility, and discoverability to reach more users effectively.',
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[16px] font-bold tracking-[0.15em] uppercase text-[#86868b] mb-3">What I Do</p>
          <h2 className="text-[31px] lg:text-[41px] font-black text-[#1d1d1f] tracking-tight mb-3.5">Services</h2>
          <p className="text-[18px] text-[#6e6e73] max-w-[540px] mx-auto leading-relaxed">
            From concept to deployment — I offer end-to-end software solutions tailored to your needs.
          </p>
        </div>

        {/* Cards grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group relative bg-white border border-black/5 rounded-2xl p-7 hover:border-black/15 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms`, transition: `all 0.5s ease ${i * 80}ms` }}
            >
              {/* Subtle hover bg */}
              <div className="absolute inset-0 bg-[#f5f5f7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 bg-[#f5f5f7] group-hover:bg-white rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 shadow-sm">
                  <Icon size={24} className="text-[#1d1d1f]" strokeWidth={1.5} />
                </div>

                {/* Underline accent */}
                <div className="mb-3.5">
                  <p className="text-[16px] font-bold tracking-[0.15em] uppercase text-[#86868b] mb-2">{title}</p>
                  <div className="w-8 h-[2px] bg-[#1d1d1f] rounded-full" />
                </div>

                <p className="text-[18px] text-[#6e6e73] leading-relaxed">{desc}</p>

                {/* Arrow on hover */}
                <div className="mt-5 flex items-center gap-1.5 text-[17px] font-semibold text-[#1d1d1f] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
