import { useState, useRef, useEffect } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

const contactInfo = [
  { label: 'Email', value: 'nshutikope@gmail.com', href: 'mailto:nshutikope@gmail.com' },
  { label: 'Phone', value: '+250 793 253 301', href: 'tel:+250793253301' },
  { label: 'Location', value: 'Kigali, Rwanda', href: null },
  { label: 'GitHub', value: 'github.com/mourice-dev', href: 'https://github.com/mourice-dev' },
]

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoUrl = `mailto:nshutikope@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`
    window.location.href = mailtoUrl
    setSent(true)
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }, 3000)
  }

  return (
    <section id="contact-form" ref={ref} className="bg-[#111111] text-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-8 md:px-12 py-20">
        {/* Header */}
        <div className={`mb-14 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Contact Info */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, i) => (
                <div 
                  key={item.label}
                  className={`border-b border-white/[0.06] pb-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${i * 100 + 300}ms` }}
                >
                  <p className="text-xs font-sans font-bold text-white/30 uppercase tracking-wider mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-white/70 text-base font-sans hover:text-white transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white/70 text-base font-sans">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <p className="text-white/50 text-sm font-sans">Currently available for new projects & collaborations</p>
            </div>
          </div>

          {/* Right — Form */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <form onSubmit={handleSubmit} className="space-y-1">
              {[
                { id: 'name', placeholder: 'Your Name', type: 'text' },
                { id: 'email', placeholder: 'Your Email', type: 'email' },
                { id: 'subject', placeholder: 'Subject', type: 'text' },
              ].map(({ id, placeholder, type }) => (
                <div key={id}>
                  <input
                    id={`contact-${id}`}
                    type={type}
                    placeholder={placeholder}
                    value={form[id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                    required
                    className="form-input"
                  />
                </div>
              ))}

              <div>
                <textarea
                  id="contact-message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="form-input resize-none"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
                />
              </div>

              <div className="pt-6">
                <button
                  id="contact-submit"
                  type="submit"
                  disabled={sent}
                  className={`w-full flex items-center justify-center gap-3 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                    sent
                      ? 'bg-green-500 text-white'
                      : 'bg-white text-[#111111] hover:bg-gray-100 hover:scale-[1.01] active:scale-[0.99]'
                  }`}
                >
                  {sent ? (
                    <><CheckCircle2 size={18} /> Message Sent!</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
