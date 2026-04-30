import { useState, useRef, useEffect } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react'
import meImage from '../assets/me.jpeg'

const GithubIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const contactCards = [
  { icon: MapPin, label: 'Address', value: 'Rwanda, Kigali', href: null },
  { icon: Phone, label: 'Phone', value: '+250 793 253 301', href: 'tel:+250793253301' },
  { icon: Mail, label: 'Email', value: 'nshutikope@gmail.com', href: 'mailto:nshutikope@gmail.com' },
  { icon: GithubIcon, label: 'Website', value: 'github.com/mourice-dev', href: 'https://github.com/mourice-dev' },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Open email client with pre-filled form data
    const mailtoUrl = `mailto:nshutikope@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`
    window.location.href = mailtoUrl
    
    setSent(true)
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }, 3000)
  }

  return (
    <section id="contact" className="relative py-12 bg-[#f8f9fa] overflow-hidden">
      {/* Concentric Circles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: 'repeating-radial-gradient(circle at center, #000 0, transparent 1px, transparent 40px)' }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-11">
          <p className="text-[14px] font-bold tracking-[0.15em] uppercase text-[#86868b] mb-3">Get In Touch</p>
          <h2 className="text-[24px] lg:text-[28px] font-medium text-[#1a1a1c] tracking-tight mb-3.5">Contact Me</h2>
          <p className="text-[17px] text-[#6e6e73] max-w-[480px] mx-auto leading-relaxed">
            Have a project in mind? Let's talk about it — I'd love to hear from you.
          </p>
        </div>

        {/* Contact info cards — 4 columns */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactCards.map(({ icon: Icon, label, value, href }, i) => (
            <div
              key={label}
              className={`bg-white border border-black/5 rounded-2xl p-6 text-center hover:border-black/15 hover:shadow-lg transition-all duration-700 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <div className="w-12 h-12 bg-[#f5f5f7] rounded-xl flex items-center justify-center mx-auto mb-3.5">
                <Icon size={20} className="text-[#1d1d1f]" strokeWidth={1.5} />
              </div>
              <h4 className="text-[15px] font-bold text-[#1d1d1f] mb-2">{label}</h4>
              {href ? (
                <a href={href} className="text-[15px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors leading-relaxed">
                  {value}
                </a>
              ) : (
                <p className="text-[15px] text-[#6e6e73] whitespace-pre-line leading-relaxed">{value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Form + photo layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — photo/visual */}
          <div
            className={`relative rounded-2xl overflow-hidden bg-black/5 aspect-[4/5] w-full max-w-[300px] mx-auto flex items-end transition-all duration-[1000ms] delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <img src={meImage} alt="Contact" className="absolute inset-0 w-full h-full object-cover object-top" />

            {/* Overlay text */}
            <div className="relative z-10 p-7 bg-gradient-to-t from-black/60 to-transparent w-full">
              <p className="text-white font-bold text-[18px]">Let's Build Something Amazing</p>
              <p className="text-white/70 text-[15px] mt-1">Open to new opportunities & collaborations</p>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className={`transition-all duration-[1000ms] delay-[800ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Your Name' },
                { id: 'email', label: 'Your Email', type: 'email', placeholder: 'Your Email' },
                { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Subject' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <input
                    id={`contact-${id}`}
                    type={type}
                    placeholder={placeholder}
                    value={form[id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                    required
                    className="w-full px-4 py-3.5 bg-white border border-black/10 rounded-xl text-[16px] text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:border-black/30 focus:ring-2 focus:ring-black/5 transition-all"
                  />
                </div>
              ))}

              <textarea
                id="contact-message"
                placeholder="Message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full px-4 py-3.5 bg-white border border-black/10 rounded-xl text-[16px] text-[#1d1d1f] placeholder-[#86868b] focus:outline-none focus:border-black/30 focus:ring-2 focus:ring-black/5 transition-all resize-none"
              />

              <button
                id="contact-submit"
                type="submit"
                disabled={sent}
                className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-[16px] font-bold tracking-wide transition-all duration-200 ${
                  sent
                    ? 'bg-green-500 text-white scale-[0.99]'
                    : 'bg-[#1d1d1f] text-white hover:bg-black/80 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-black/10'
                }`}
              >
                {sent ? (
                  <><CheckCircle2 size={18} /> Message Sent!</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
