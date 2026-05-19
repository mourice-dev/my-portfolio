import ContactForm from '../components/Contact'

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-[#f0f2f8]">
      {/* Hero Section */}
      <section className="relative pt-48 pb-16 px-8 md:px-12 gilugali-grid overflow-hidden">
        <div className="relative z-10 max-w-[1200px] mx-auto text-center">
          <p className="text-xs font-sans font-bold text-[#1A1A1A] uppercase tracking-widest mb-6">
            Contact me
          </p>
          <h1 className="font-sans text-[48px] md:text-[72px] lg:text-[80px] font-bold leading-[1.05] text-[#1A1A1A] tracking-[-0.02em] mb-6">
            Let's work together
          </h1>
          <p className="text-base md:text-lg text-[#6B6B6B] font-sans max-w-[640px] mx-auto">
            I can't wait to hear from you.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <ContactForm />
    </div>
  )
}
