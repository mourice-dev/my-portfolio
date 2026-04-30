import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 8, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '', label: 'Industry Awards' },
]

function useCountUp(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target])
  return count
}

function StatItem({ value, suffix, label, isVisible }: { value: number; suffix: string; label: string; isVisible: boolean }) {
  const count = useCountUp(value, isVisible)
  return (
    <div className="text-center px-5 py-2">
      <div className="text-[37px] lg:text-[44px] font-black text-[#1d1d1f] leading-none mb-2">
        {count}{suffix}
      </div>
      <div className="text-[17px] text-[#86868b] font-medium tracking-wide">{label}</div>
    </div>
  )
}

export default function Stats() {
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
    <section className="py-12 bg-white border-t border-b border-black/5">
      <div ref={ref} className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 divide-x divide-black/5">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
