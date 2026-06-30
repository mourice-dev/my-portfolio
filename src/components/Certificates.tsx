import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Award, Eye, X, Calendar } from 'lucide-react'

// Import optimized certificate JPEGs
import certArduino1st from '../assets/IMG_3967.jpg'
import certHikvision from '../assets/IMG_3970.jpg'
import certScratch from '../assets/IMG_3972.jpg'
import certArduinoCompletion from '../assets/IMG_3973.jpg'

interface Certificate {
  title: string
  issuer: string
  year: string
  description: string
  image?: string
}

const certificates: Certificate[] = [
  {
    title: 'Certificate of Award - 1st Place (Arduino IoT)',
    issuer: 'KOICA, KOICS & Rwanda Polytechnic',
    year: '2025',
    description: 'Awarded 1st place (Team Intellio) in recognition of exceptional creativity, innovative problem-solving, and dedicated participation in the Arduino Advanced IoT Class.',
    image: certArduino1st,
  },
  {
    title: 'Certificate of Completion - Arduino Advanced IoT',
    issuer: 'KOICA, KOICS & Rwanda Polytechnic',
    year: '2025',
    description: 'Successfully completed the intensive Arduino Advanced IoT course, demonstrating strong performance in practical project work.',
    image: certArduinoCompletion,
  },
  {
    title: 'Certificate of Award - Scratch Game Making',
    issuer: 'KOICA, KOICS & Rwanda Polytechnic',
    year: '2025',
    description: 'Awarded in recognition of outstanding performance, exceptional creativity, and dedicated participation in the Game Making with Scratch class.',
    image: certScratch,
  },
  {
    title: 'Certificate of Participation - HIKVISION Spotlight',
    issuer: 'Hikvision Rwanda',
    year: '2025',
    description: 'Attended the "HIKVISION Spotlight Product" training, gaining expertise in advanced surveillance products and security solutions.',
    image: certHikvision,
  },
  {
    title: 'Full-Stack Web Development',
    issuer: 'Online Bootcamp',
    year: '2023',
    description: 'Comprehensive certification covering modern web technologies including React, Node.js, and databases.',
  },
  {
    title: 'JavaScript Data Structures and Algorithms',
    issuer: 'freeCodeCamp',
    year: '2022',
    description: 'Deep dive into fundamental data structures, algorithm scripting, and object-oriented programming in JavaScript.',
  },
]

interface CertificatesProps {
  featuredOnly?: boolean
}

export default function Certificates({ featuredOnly = false }: CertificatesProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeImage, setActiveImage] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImage(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // If featuredOnly is true, show only the newest 4 certificates
  const displayCertificates = featuredOnly ? certificates.slice(0, 4) : certificates

  return (
    <section id="certificates" className="relative py-28 bg-white border-y border-black/[0.04] overflow-hidden">
      <div ref={ref} className="relative z-10 max-w-[1100px] mx-auto px-8 md:px-12">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-[42px] font-bold text-neutral-900 tracking-tight">
            Certifications
          </h2>
          <p className="text-neutral-500 mt-4 max-w-xl font-sans leading-relaxed text-base">
            {featuredOnly
              ? "Continuous learning and professional growth. Here are some of the recent professional certifications I've earned."
              : "Continuous learning and professional growth. Here are the certifications and awards I've earned."}
          </p>
        </div>

        {featuredOnly ? (
          /* Text-only List Layout (Homepage) */
          <div className="space-y-0 max-w-[900px] mx-auto">
            {displayCertificates.map((cert, i) => (
              <div
                key={cert.title}
                className={`py-8 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${i > 0 ? 'border-t border-black/[0.06]' : ''}`}
                style={{ transitionDelay: `${i * 150 + 150}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h4 className="font-sans text-xl md:text-2xl font-bold text-neutral-900">{cert.title}</h4>
                    <p className="text-neutral-500 text-sm font-sans font-medium mt-1">{cert.issuer}</p>
                  </div>
                  <span className="tag-pill text-xs shrink-0">{cert.year}</span>
                </div>
                <p className="text-neutral-500 text-[15px] leading-relaxed font-sans max-w-2xl">
                  {cert.description}
                </p>
              </div>
            ))}

            {/* Show More Button */}
            <div
              className={`pt-12 text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${displayCertificates.length * 150 + 150}ms` }}
            >
              <Link
                to="/certificates"
                className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-black hover:scale-[1.02] transition-all duration-300"
              >
                Show More Certificates
                <span>→</span>
              </Link>
            </div>
          </div>
        ) : (
          /* Grid Cards Layout (Dedicated Page) */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {displayCertificates.map((cert, i) => (
              <div
                key={cert.title}
                className={`group bg-neutral-50 rounded-2xl border border-black/[0.03] overflow-hidden flex flex-col transition-all duration-1000 hover:shadow-xl hover:shadow-black/[0.02] hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150 + 150}ms` }}
              >
                {/* Image Preview / Placeholder */}
                <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden border-b border-black/[0.03]">
                  {cert.image ? (
                    <>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Hover Overlay */}
                      <button
                        onClick={() => setActiveImage(cert.image || null)}
                        className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-sm"
                        aria-label={`View full image of ${cert.title}`}
                      >
                        <span className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <Eye className="w-5 h-5 text-white" />
                        </span>
                      </button>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="inline-flex p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-3">
                          <Award className="w-8 h-8 text-neutral-300" />
                        </div>
                        <p className="text-xs font-semibold tracking-wider uppercase text-neutral-400">Verification Only</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h4 className="font-sans text-lg md:text-xl font-bold text-neutral-900 leading-snug group-hover:text-black transition-colors">
                      {cert.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-500 shrink-0 bg-neutral-200/60 px-2.5 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-neutral-600 text-sm leading-relaxed font-sans mt-auto">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Full-Screen Image Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 transition-opacity duration-300"
          onClick={() => setActiveImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all hover:scale-105 z-50"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt="Certificate Full View"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
          </div>
        </div>
      )}
    </section>
  )
}


