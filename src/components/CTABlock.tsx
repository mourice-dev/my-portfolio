import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function CTABlock() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="relative py-16 bg-[#f0f2f8] gilugali-grid overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-[1100px] mx-auto px-8 md:px-12">
        <div
          className={`bg-[#111111] rounded-[1.5rem] px-8 md:px-16 py-14 md:py-20 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* "Tell me about your project" title */}
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-8">
            Tell me about your project
          </h2>

          {/* Say Hi button */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#111111] px-8 py-3.5 rounded-full text-sm font-bold hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300"
          >
            Say Hi
            <span className="text-base">→</span>
          </Link>

          {/* Bottom info row */}
          <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div>
              <p className="text-white/50 text-sm font-sans">
                <span className="font-bold text-white/70">Kigali</span>
                <span className="text-white/40"> Kigali, Rwanda</span>
              </p>
            </div>
            <div className="flex gap-5">
              <a href="https://www.linkedin.com/in/nshuti-maurice-2b7a202a0/" target="_blank" rel="noopener noreferrer" className="text-white/40 text-sm font-sans hover:text-white transition-colors animated-underline">LinkedIn</a>
              <a href="https://github.com/mourice-dev" target="_blank" rel="noopener noreferrer" className="text-white/40 text-sm font-sans hover:text-white transition-colors animated-underline">GitHub</a>
              <a href="https://x.com/Nshuti_Kope" target="_blank" rel="noopener noreferrer" className="text-white/40 text-sm font-sans hover:text-white transition-colors animated-underline">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
