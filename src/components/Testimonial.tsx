import { useEffect, useRef, useState } from 'react'

export default function Testimonial() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-[800px] mx-auto px-8 md:px-12 text-center">
        <p
          className={`text-base md:text-lg text-[#6B6B6B]/80 leading-relaxed font-sans italic transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Working with Maurice was a game-changer. Not only did he deliver efficient and clean code, 
          but his attention to detail and dedication made the entire process seamless and enjoyable.
        </p>
      </div>
    </section>
  )
}
