import { useEffect, useRef, useState } from 'react'
import { Calendar, Clock } from 'lucide-react'

const posts = [
  {
    id: 1,
    date: 'Apr 15, 2026',
    readTime: '5 min read',
    category: 'React',
    title: 'Building Performant React Apps with Concurrent Features',
    excerpt: 'Explore how React 19\'s concurrent rendering model can dramatically improve perceived performance in data-heavy applications.',
    emoji: '⚛️',
    bg: '#e8e8ed',
  },
  {
    id: 2,
    date: 'Mar 28, 2026',
    readTime: '7 min read',
    category: 'TypeScript',
    title: 'Advanced TypeScript Patterns Every Developer Should Know',
    excerpt: 'A deep dive into mapped types, conditional types, and template literal types that will transform how you write TypeScript.',
    emoji: '🔷',
    bg: '#d1d1d6',
  },
  {
    id: 3,
    date: 'Mar 10, 2026',
    readTime: '4 min read',
    category: 'Design',
    title: 'The Psychology of Color in Interface Design',
    excerpt: 'How strategic color choices influence user behavior, trust, and conversion — with real-world case studies.',
    emoji: '🎨',
    bg: '#c7c7cc',
  },
]

export default function Blog() {
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
    <section id="blog" className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[16px] font-bold tracking-[0.15em] uppercase text-[#86868b] mb-3">Insights</p>
            <h2 className="text-[31px] lg:text-[41px] font-black text-[#1d1d1f] tracking-tight">Latest Blog</h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1.5 text-[17px] font-semibold text-[#1d1d1f] border-b-2 border-[#1d1d1f] pb-0.5 hover:border-[#86868b] hover:text-[#86868b] transition-colors"
          >
            More… <span>→</span>
          </a>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <article
              key={post.id}
              className={`group bg-white border border-black/5 rounded-2xl overflow-hidden hover:border-black/15 hover:shadow-xl transition-all duration-400 hover:-translate-y-1.5 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms`, transition: `all 0.5s ease ${i * 100}ms` }}
            >
              {/* Thumbnail */}
              <div
                className="h-44 flex items-center justify-center text-4xl group-hover:scale-[1.02] transition-transform duration-300"
                style={{ backgroundColor: post.bg }}
              >
                {post.emoji}
              </div>

              <div className="p-5">
                {/* Meta */}
                <div className="flex items-center gap-3.5 mb-3.5">
                  <span className="text-[16px] font-bold tracking-wide px-2.5 py-1 bg-[#f5f5f7] text-[#6e6e73] rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[16px] text-[#86868b]">
                    <Calendar size={11} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-[16px] text-[#86868b]">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-[18px] font-bold text-[#1d1d1f] mb-2 group-hover:text-[#6e6e73] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-[17px] text-[#86868b] leading-relaxed mb-3.5">{post.excerpt}</p>

                <span className="text-[17px] font-semibold text-[#1d1d1f] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read more <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile more link */}
        <div className="sm:hidden text-center mt-7">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 px-5 py-3 border-2 border-[#1d1d1f] text-[#1d1d1f] text-[17px] font-semibold rounded-full hover:bg-[#1d1d1f] hover:text-white transition-all"
          >
            More…
          </a>
        </div>
      </div>
    </section>
  )
}
