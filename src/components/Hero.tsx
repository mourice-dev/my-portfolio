import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-end gilugali-grid">
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-12 pb-24 pt-48 w-full">
        {/* Bold sans-serif heading — LEFT aligned like Gilugali */}
        <h1
          className={`font-sans text-[40px] md:text-[60px] lg:text-[72px] font-bold leading-[1.05] text-[#1A1A1A] tracking-[-0.02em] mb-8 max-w-[900px] transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          Innovative Software Developer Crafting Tomorrow's Solutions
        </h1>

        {/* Description paragraph — smaller text */}
        <p
          className={`text-sm md:text-base text-[#6B6B6B] leading-relaxed max-w-[600px] font-sans transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          I'm a passionate software developer dedicated to building creative and efficient 
          solutions. Whether it's developing seamless user experiences or optimizing 
          systems, I thrive at the intersection of technology and innovation. 
          Let's build something amazing together!
        </p>

        {/* Location label at very bottom */}
        <div
          className={`mt-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs font-sans text-[#6B6B6B]/60 w-full">
            <p>
              <span className="font-semibold text-[#1A1A1A]">Kigali</span>
              <span className="text-[#6B6B6B]/40"> Kigali, Rwanda</span>
            </p>
            <p className="text-[#1A1A1A] font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Currently available for new projects & collaborations
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
