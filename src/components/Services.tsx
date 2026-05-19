import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import meImage from '../assets/me.jpeg'

const services = [
  {
    title: 'Web Development',
    description: 'I specialize in all things JavaScript, with a focus on building dynamic and responsive websites. I love using React and TypeScript on the frontend and Node.js on the backend to create everything from e-commerce platforms to dashboards and content management systems.',
  },
  {
    title: 'Frontend Engineering',
    description: 'Creating pixel-perfect, accessible, and performant user interfaces is what I live for. From smooth animations to intuitive layouts, I build experiences that users actually enjoy — because great design should feel invisible.',
  },
  {
    title: 'Backend & API Development',
    description: 'Designing and implementing robust REST APIs, database architectures, and server-side logic. I build scalable solutions with Node.js, Express, and relational databases that power modern, production-ready applications.',
  },
  {
    title: 'Database Design & Optimization',
    description: 'Architecting efficient database schemas and writing optimized queries. I work with MySQL, Oracle, PostgreSQL, and Supabase to ensure your data is structured, secure, and fast — no matter how much it scales.',
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="relative py-28 bg-[#f0f2f8] gilugali-grid overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12">
        {/* Section Title */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight">
            Services — Bringing Your Ideas to Life with Code
          </h2>
          <p className="text-[#6B6B6B] text-base mt-4 max-w-xl font-sans leading-relaxed">
            I love building cool, efficient, and innovative solutions. Whether you're starting from scratch 
            or need some extra help on your current project, I've got you covered!
          </p>
        </div>

        {/* Two-column: Photo on left + Service list on right */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left — Photo with double rotated frame */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-8 scale-95'}`}
          >
            <div className="relative">
              <div className="absolute -inset-3 border border-black/[0.06] rounded-[1.5rem] -rotate-2" />
              <div className="absolute -inset-6 border border-black/[0.04] rounded-[2rem] rotate-2" />
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#1A1A1A] shadow-xl">
                <img
                  src={meImage}
                  alt="Maurice Nshuti"
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right — Service list with CV link at the end */}
          <div className="flex flex-col items-start">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`group py-8 w-full transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } ${i > 0 ? 'border-t border-black/[0.06]' : ''}`}
                style={{ transitionDelay: `${i * 120 + 400}ms` }}
              >
                <h3 className="font-sans text-xl md:text-2xl font-bold text-[#1A1A1A] mb-3 tracking-tight group-hover:text-[#6B6B6B] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#6B6B6B] text-[15px] leading-relaxed font-sans max-w-xl">
                  {service.description}
                </p>
              </div>
            ))}

            {/* CV Link — styled like Contact Me button */}
            <Link
              to="/maurice_cv.pdf"
              target="_blank"
              className={`mt-4 inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-black hover:scale-[1.02] transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              Open My CV
              <span className="text-base">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
