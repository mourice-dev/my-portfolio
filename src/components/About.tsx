import { useEffect, useRef, useState } from 'react'
import ParticleBackground from './ParticleBackground'

const languages = [
  'JavaScript', 'TypeScript', 'HTML5', 'CSS', 'Tailwind CSS',
  'PHP', 'Java', 'C#', 'C++', 'C', 'SQL', 'MySQL', 'Oracle',
  'Bash', 'React', 'Express', 'Node.js'
]

const Typewriter = ({ text, delay = 0, speed = 50, className = "" }: { text: string, delay?: number, speed?: number, className?: string }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;
    
    if (delay > 0) {
      timeout = setTimeout(() => {
        setShowCursor(true);
        startTyping();
      }, delay);
    } else {
      setShowCursor(true);
      startTyping();
    }

    function startTyping() {
      let i = 0;
      interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 2000); // hide cursor after a while
        }
      }, speed);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay, speed]);

  return (
    <span className={className}>
      {displayedText}
      <span className={`inline-block w-[2px] bg-black ml-1 h-[0.9em] align-middle ${showCursor ? 'animate-pulse' : 'hidden'}`}></span>
    </span>
  );
};

export default function About() {
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
    <>
      {/* Home Area with Background */}
      <section id="home" className="relative pt-40 pb-32 overflow-hidden bg-white">
        <ParticleBackground />
        
        <div className="relative z-10 max-w-[1000px] mx-auto px-5 text-center flex flex-col items-center">
          
          {/* Logo / Badge Area */}
          <div className="mb-8 flex items-center justify-center gap-2 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
            <div className="flex -space-x-1">
              <span className="w-3 h-3 rounded-full bg-blue-500 block"></span>
              <span className="w-3 h-3 rounded-full bg-red-500 block opacity-80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500 block opacity-90"></span>
            </div>
            <span className="text-xl font-medium tracking-tight text-gray-800">
              <span className="font-semibold text-black">Nshuti</span> Maurice
            </span>
          </div>

          <h1 className="text-[40px] md:text-[64px] lg:text-[76px] font-medium text-[#1a1a1c] tracking-tight leading-[1.05] mb-6 max-w-[900px]">
            <Typewriter text="Hi, I'm Nshuti Maurice" speed={60} delay={400} />
          </h1>
          
          <p className="text-[20px] md:text-[24px] text-[#4a4a4f] max-w-[640px] mx-auto leading-relaxed mb-12 h-[72px]">
            <Typewriter text="I'm a passionate software developer turning ideas into elegant, functional digital products." speed={40} delay={2000} />
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '4800ms', animationFillMode: 'both' }}>
            <button className="bg-[#1a1a1c] hover:bg-black text-white px-8 py-3.5 rounded-full font-medium flex items-center gap-2 transition-colors w-full sm:w-auto justify-center">
              View My Work
            </button>
            <button className="bg-white border border-gray-200 text-[#1a1a1c] px-8 py-3.5 rounded-full font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Content Area without Background */}
      <section id="about" className="bg-white">
        <div className="max-w-[1200px] mx-auto px-5 py-24">
          <div className="text-center mb-16">
            <p className="text-[16px] font-bold tracking-[0.15em] uppercase text-[#86868b]">About Me</p>
          </div>

          {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Story */}
          <div ref={ref} className={`transition-all duration-[1200ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-[22px] font-bold text-[#1d1d1f] mb-3.5">The Story</h3>
            <p className="text-[18px] text-[#6e6e73] leading-relaxed mb-3.5">
              My journey into software development started with a deep curiosity about how things work under the hood.
              What began as tinkering with HTML eventually evolved into a growing career
              building real-world applications and learning new technologies every day.
            </p>
            <p className="text-[18px] text-[#6e6e73] leading-relaxed mb-7">
              I believe great software is born at the intersection of technical excellence and human empathy.
              Every line of code I write is guided by the question: does this make someone's life better?
            </p>
          </div>

          {/* Right — Languages */}
          <div>
            <h3 className="text-[22px] font-bold text-[#1d1d1f] mb-6 transition-all duration-[1200ms] delay-[400ms] opacity-100">Languages & Core Tech</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4">
              {languages.map((lang, index) => (
                <li
                  key={lang}
                  className={`flex items-center gap-2.5 text-[16px] text-[#1d1d1f] font-medium transition-all duration-[1000ms] ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${Math.min(index * 30 + 200, 1500)}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#86868b] shrink-0" />
                  {lang}
                </li>
              ))}
            </ul>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}
