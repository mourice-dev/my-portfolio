import { useEffect, useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import resumeMockup from '../images/resume-mockup.png'
import ecommerceMockup from '../images/ecommerce-mockup.png'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const projects = [
  {
    id: 1,
    headline: 'Interactive Resume Building Made Simple',
    description: 'The Resume Generator gives users a fast, intuitive way to create polished resumes without the hassle of traditional formatting.',
    client: 'Personal Project',
    year: '2024',
    service: 'Frontend Development, UI/UX',
    overview: [
      'Users needed a quick and easy way to generate professional resumes without struggling with formatting or design. This web app was built to solve that problem — providing a clean, interactive interface where you fill in your details and instantly get a beautifully formatted, ready-to-download resume.',
      'I handled the full frontend development, focusing on making the experience smooth and intuitive. The interface was designed to feel natural, with real-time preview so you can see exactly what your resume will look like as you type.',
      'The application provided users with a flexible, easy-to-use platform, allowing them to create professional resumes in minutes rather than hours.'
    ],
    whatIdid: ['Frontend', 'UI/UX Design'],
    image: resumeMockup,
    github: 'https://github.com/mourice-dev',
    live: 'https://eresume-generator.vercel.app/',
  },
  {
    id: 2,
    headline: 'Full-Stack Shopping Experience with Secure Authentication',
    description: 'A complete e-commerce platform built from the ground up — handling products, carts, user sessions, and payments.',
    client: 'Personal Project',
    year: '2025',
    service: 'Fullstack Development, Database',
    overview: [
      'This project was born from a desire to understand how real e-commerce platforms work end-to-end. The application features a seamless shopping experience with product browsing, cart management, user authentication, and session-based security — all built with a modern React frontend and a robust Express.js backend.',
      'I designed and built everything: the responsive product catalog, the cart system with real-time updates, the authentication flow with secure session handling, and the MySQL database architecture powering it all.',
      'The website provided a complete, production-ready e-commerce platform that handles the full shopping lifecycle, from browsing to checkout.'
    ],
    whatIdid: ['Frontend', 'Backend', 'Database', 'Authentication'],
    image: ecommerceMockup,
    github: 'https://github.com/mourice-dev',
    live: 'https://orangeshop-fe.vercel.app/',
  },
]

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.03 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="relative bg-[#f0f2f8] gilugali-grid overflow-hidden">
      <div ref={ref} className="relative z-10">
        {/* Projects — Each one is a full case study page like Gilugali/harvest */}
        {projects.map((project, i) => (
          <article key={project.id} className="border-b border-black/[0.04]">
            {/* Case Study Header — centered like Gilugali */}
            <div className="max-w-[900px] mx-auto px-8 md:px-12 pt-28 pb-16 text-center">
              <p
                className={`text-sm font-sans font-bold text-[#1A1A1A] mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                Case Study
              </p>
              <h2
                className={`font-sans text-3xl md:text-4xl lg:text-[52px] font-bold text-[#1A1A1A] leading-[1.1] tracking-tight mb-6 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 200 + 100}ms` }}
              >
                {project.headline}
              </h2>
              <p
                className={`text-[#6B6B6B] text-base leading-relaxed font-sans max-w-2xl mx-auto transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 200 + 200}ms` }}
              >
                {project.description}
              </p>
            </div>

            {/* Metadata Row — Client | Year | Service (like Gilugali) */}
            <div className="max-w-[1100px] mx-auto px-8 md:px-12">
              <div
                className={`grid grid-cols-3 border-y border-black/[0.08] py-5 mb-12 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${i * 200 + 300}ms` }}
              >
                <div>
                  <p className="text-sm font-bold text-[#1A1A1A]">Client</p>
                  <p className="text-sm font-sans text-[#6B6B6B] mt-1">{project.client}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1A1A1A]">Year</p>
                  <p className="text-sm font-sans text-[#6B6B6B] mt-1">{project.year}</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1A1A1A]">Service</p>
                  <p className="text-sm font-sans text-[#6B6B6B] mt-1">{project.service}</p>
                </div>
              </div>

              {/* Mockup Image */}
              <div
                className={`relative rounded-2xl overflow-hidden mb-16 group transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 200 + 400}ms` }}
              >
                <div className="browser-mockup relative">
                  <img
                    src={project.image}
                    alt={project.headline}
                    className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
                  />
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-4">
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white text-[#1A1A1A] px-6 py-3 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/15 border border-white/25 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-white/25 transition-colors backdrop-blur-sm"
                    >
                      <GithubIcon />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Overview — paragraphs like Gilugali */}
              <div className="max-w-[800px] mb-12">
                <h3 className="font-sans text-2xl font-bold text-[#1A1A1A] mb-6">Overview</h3>
                {project.overview.map((para, pi) => (
                  <p key={pi} className="text-[#6B6B6B] text-[15px] leading-relaxed font-sans mb-4">
                    {para}
                  </p>
                ))}
              </div>

              {/* What I Did */}
              <div className="mb-16">
                <h3 className="font-sans text-2xl font-bold text-[#1A1A1A] mb-4">What I did</h3>
                <div className="flex flex-wrap gap-2.5">
                  {project.whatIdid.map(item => (
                    <span key={item} className="tag-pill">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* More Case Studies section (like Gilugali bottom) */}
        <div className="max-w-[1100px] mx-auto px-8 md:px-12 py-20">
          <h3 className="font-sans text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-10">More projects</h3>
          <a
            href="https://github.com/mourice-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#1A1A1A] text-white rounded-full text-sm font-bold hover:bg-black hover:scale-[1.02] transition-all duration-300"
          >
            <GithubIcon />
            View All on GitHub
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
