import Hero from '../components/Hero'
import Testimonial from '../components/Testimonial'
import Services from '../components/Services'
import Education from '../components/Education'
import Certificates from '../components/Certificates'
import TechStack from '../components/TechStack'
import HomeProjects from '../components/HomeProjects'
import CTABlock from '../components/CTABlock'

/**
 * Home page layout (things about me):
 * 1. Hero — Who I am
 * 2. Testimonial — Social proof (clean white bg)
 * 3. Services — What I do + CV link
 * 4. Education — My background
 * 5. Certificates — Professional certifications
 * 6. Tools & Languages — Tech stack icons
 * 7. Selected Projects — Brief project cards
 * 8. CTA — "Tell me about your project"
 */
export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Testimonial />
      <Services />
      <Education />
      <Certificates />
      <TechStack />
      <HomeProjects />
      <CTABlock />
    </div>
  )
}
