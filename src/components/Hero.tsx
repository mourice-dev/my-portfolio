import { useEffect, useRef, useState } from 'react'
import { ArrowDown } from 'lucide-react'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
)

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const [typed, setTyped] = useState('')
  const roles = ['Software Developer', 'React Specialist', 'UI/UX Enthusiast', 'Full Stack Engineer']
  const roleIndex = useRef(0)
  const charIndex = useRef(0)
  const deleting = useRef(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setVisible(true)
  }, [])

  useEffect(() => {
    const type = () => {
      const current = roles[roleIndex.current]
      if (!deleting.current) {
        setTyped(current.substring(0, charIndex.current + 1))
        charIndex.current++
        if (charIndex.current === current.length) {
          deleting.current = true
          timerRef.current = setTimeout(type, 1800)
          return
        }
      } else {
        setTyped(current.substring(0, charIndex.current - 1))
        charIndex.current--
        if (charIndex.current === 0) {
          deleting.current = false
          roleIndex.current = (roleIndex.current + 1) % roles.length
        }
      }
      timerRef.current = setTimeout(type, deleting.current ? 50 : 80)
    }
    timerRef.current = setTimeout(type, 600)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#f5f5f7]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-[10%] w-[600px] h-[600px] bg-black/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] bg-black/[0.02] rounded-full blur-2xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-5 pt-12 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-black/10 rounded-full px-3.5 py-1.5 mb-7 shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[17px] font-medium text-[#6e6e73]">Available for work</span>
            </div>

            {/* Name */}
            <h1 className="text-[44px] lg:text-[56px] font-black leading-[1.05] tracking-tight text-[#1d1d1f] mb-3.5">
              Hi, I'm<br />
              <span className="text-apple-gradient">Alex Morgan.</span>
            </h1>

            {/* Typed role */}
            <div className="h-10 mb-5">
              <p className="text-[20px] font-medium text-[#6e6e73]">
                {typed}
                <span className="inline-block w-[2px] h-5 bg-[#1d1d1f] ml-0.5 animate-pulse align-middle" />
              </p>
            </div>

            {/* Description */}
            <p className="text-[18px] leading-relaxed text-[#6e6e73] max-w-[480px] mb-8">
              I craft beautiful, performant digital experiences that merge clean code
              with thoughtful design. Building the web of tomorrow, today.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3.5 mb-10">
              <a
                href="#portfolio"
                onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1d1d1f] text-white text-[18px] font-semibold rounded-full hover:bg-black/80 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/10"
              >
                View My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#1d1d1f] text-[18px] font-semibold rounded-full border border-black/10 hover:border-black/30 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3.5">
              <span className="text-[17px] text-[#86868b] font-medium">Follow me</span>
              <div className="h-px w-8 bg-black/15" />
              {[
                { icon: GithubIcon, href: '#', label: 'GitHub' },
                { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
                { icon: TwitterIcon, href: '#', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-black/10 text-[#6e6e73] hover:text-[#1d1d1f] hover:border-black/25 hover:scale-110 transition-all shadow-sm"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Profile visual */}
          <div
            className={`flex justify-center transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="w-[340px] h-[340px] lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-br from-black/5 to-black/15 flex items-center justify-center">
                {/* Inner avatar */}
                <div className="w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden bg-gradient-to-br from-[#e8e8ed] to-[#c7c7cc] border-4 border-white shadow-2xl">
                  <div className="w-full h-full flex items-end justify-center bg-gradient-to-b from-[#d1d1d6] to-[#aeaeb2]">
                    {/* Silhouette-style developer illustration */}
                    <svg viewBox="0 0 380 380" className="w-full h-full" fill="none">
                      {/* Body/suit */}
                      <ellipse cx="190" cy="420" rx="140" ry="100" fill="#1d1d1f" />
                      <rect x="130" y="280" width="120" height="160" rx="8" fill="#1d1d1f" />
                      {/* Shirt/collar */}
                      <path d="M160 280 L190 310 L220 280" fill="white" opacity="0.9" />
                      <path d="M185 310 L190 340 L195 310" fill="white" opacity="0.7" />
                      {/* Head */}
                      <ellipse cx="190" cy="210" rx="72" ry="80" fill="#c8a882" />
                      {/* Hair */}
                      <path d="M118 195 Q120 130 190 125 Q260 130 262 195 Q250 150 190 148 Q130 150 118 195Z" fill="#3d2b1f" />
                      {/* Glasses */}
                      <rect x="152" y="205" width="36" height="22" rx="10" fill="none" stroke="#2c2c2c" strokeWidth="3" />
                      <rect x="193" y="205" width="36" height="22" rx="10" fill="none" stroke="#2c2c2c" strokeWidth="3" />
                      <line x1="188" y1="216" x2="193" y2="216" stroke="#2c2c2c" strokeWidth="2.5" />
                      <line x1="148" y1="216" x2="142" y2="212" stroke="#2c2c2c" strokeWidth="2.5" />
                      <line x1="229" y1="216" x2="235" y2="212" stroke="#2c2c2c" strokeWidth="2.5" />
                      {/* Eyes */}
                      <circle cx="170" cy="216" r="6" fill="#2c2c2c" />
                      <circle cx="211" cy="216" r="6" fill="#2c2c2c" />
                      <circle cx="172" cy="214" r="2" fill="white" />
                      <circle cx="213" cy="214" r="2" fill="white" />
                      {/* Nose */}
                      <path d="M187 225 Q190 235 193 225" stroke="#a07850" strokeWidth="1.5" fill="none" />
                      {/* Mouth / smile */}
                      <path d="M175 248 Q190 260 205 248" stroke="#8b5e3c" strokeWidth="2" fill="none" strokeLinecap="round" />
                      {/* Ears */}
                      <ellipse cx="118" cy="215" rx="12" ry="16" fill="#c8a882" />
                      <ellipse cx="262" cy="215" rx="12" ry="16" fill="#c8a882" />
                      {/* Beard / stubble */}
                      <ellipse cx="190" cy="265" rx="40" ry="18" fill="#a07050" opacity="0.3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-8 top-12 bg-white rounded-2xl shadow-xl p-3.5 flex items-center gap-3 animate-float border border-black/5">
                <div className="w-10 h-10 bg-[#f5f5f7] rounded-xl flex items-center justify-center text-base">💻</div>
                <div>
                  <p className="text-[16px] text-[#86868b] font-medium">Experience</p>
                  <p className="text-[17px] font-bold text-[#1d1d1f]">8+ Years</p>
                </div>
              </div>

              <div className="absolute -right-8 bottom-16 bg-white rounded-2xl shadow-xl p-3.5 flex items-center gap-3 border border-black/5">
                <div className="w-10 h-10 bg-[#f5f5f7] rounded-xl flex items-center justify-center text-base">🏆</div>
                <div>
                  <p className="text-[16px] text-[#86868b] font-medium">Projects</p>
                  <p className="text-[17px] font-bold text-[#1d1d1f]">100+ Done</p>
                </div>
              </div>

              <div className="absolute right-4 top-4 bg-white rounded-2xl shadow-xl p-3.5 flex items-center gap-3 border border-black/5">
                <div className="w-10 h-10 bg-[#f5f5f7] rounded-xl flex items-center justify-center text-base">⭐</div>
                <div>
                  <p className="text-[16px] text-[#86868b] font-medium">Rating</p>
                  <p className="text-[17px] font-bold text-[#1d1d1f]">5.0 / 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={scrollDown}
            className="flex flex-col items-center gap-2 text-[#86868b] hover:text-[#1d1d1f] transition-colors group"
            aria-label="Scroll down"
          >
            <span className="text-[16px] font-medium tracking-widest uppercase">Scroll</span>
            <ArrowDown size={18} className="animate-bounce group-hover:animate-none" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </section>
  )
}
