import { useEffect, useRef, useState } from 'react'
import { Calendar, Clock } from 'lucide-react'

const posts = [
  {
    id: 1,
    date: 'Apr 2026',
    readTime: 'Learning Log',
    category: 'React',
    title: 'My Journey Building a Portfolio with React & TypeScript',
    excerpt: 'What I learned building this portfolio — from canvas particle animations to Intersection Observer scroll effects.',
    emoji: '⚛️',
    bg: '#e8e8ed',
    href: 'https://github.com/mourice-dev',
  },
  {
    id: 2,
    date: 'Mar 2026',
    readTime: 'Learning Log',
    category: 'TypeScript',
    title: 'Understanding TypeScript Type Assertions in React',
    excerpt: 'Exploring the difference between the "as" keyword and type annotations in JSX — and when to use each.',
    emoji: '🔷',
    bg: '#d1d1d6',
    href: 'https://github.com/mourice-dev',
  },
  {
    id: 3,
    date: 'Feb 2026',
    readTime: 'Learning Log',
    category: 'React',
    title: 'Optimizing React with useMemo & useCallback',
    excerpt: 'Key takeaways from implementing performance hooks correctly — common pitfalls and how to avoid them.',
    emoji: '⚡',
    bg: '#c7c7cc',
    href: 'https://github.com/mourice-dev',
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
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[16px] font-bold tracking-[0.15em] uppercase text-[#86868b] mb-3">Insights</p>
            <h2 className="text-[28px] lg:text-[36px] font-medium text-[#1d1d1f] tracking-tight">Learning Journal</h2>
          </div>
          <a
            href="https://github.com/mourice-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#1d1d1f] border-b-2 border-[#1d1d1f] pb-0.5 hover:border-[#86868b] hover:text-[#86868b] transition-colors"
          >
            More on GitHub <span>→</span>
          </a>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post, i) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white border border-black/5 rounded-2xl overflow-hidden hover:border-black/15 hover:shadow-xl transition-all hover:-translate-y-1.5 block ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transition: `all 0.5s ease ${i * 100}ms` }}
            >
              <div
                className="h-44 flex items-center justify-center text-4xl group-hover:scale-[1.02] transition-transform duration-300"
                style={{ backgroundColor: post.bg }}
              >
                {post.emoji}
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3.5 mb-3.5 flex-wrap">
                  <span className="text-[14px] font-bold px-2.5 py-1 bg-[#f5f5f7] text-[#6e6e73] rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-[14px] text-[#86868b]">
                    <Calendar size={11} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-[14px] text-[#86868b]">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-[17px] font-bold text-[#1d1d1f] mb-2 group-hover:text-[#6e6e73] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-[15px] text-[#86868b] leading-relaxed mb-3.5">{post.excerpt}</p>

                <span className="text-[15px] font-semibold text-[#1d1d1f] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read more <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="sm:hidden text-center mt-7">
          <a
            href="https://github.com/mourice-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-3 border-2 border-[#1d1d1f] text-[#1d1d1f] text-[15px] font-semibold rounded-full hover:bg-[#1d1d1f] hover:text-white transition-all"
          >
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
