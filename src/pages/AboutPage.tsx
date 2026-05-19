import About from '../components/About'
import Education from '../components/Education'
import TechStack from '../components/TechStack'
import CTABlock from '../components/CTABlock'

export default function AboutPage() {
  return (
    <div className="flex flex-col pt-24">
      {/* We add some top padding so it doesn't collide with the fixed navbar */}
      <About />
      <Education />
      <TechStack />
      <CTABlock />
    </div>
  )
}
