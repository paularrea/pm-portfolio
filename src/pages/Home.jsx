import Hero from '../components/Hero'
import StrengthsStrip from '../components/StrengthsStrip'
import WorkSection from '../components/WorkSection'
import HowIWork from '../components/HowIWork'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <StrengthsStrip />
      <WorkSection />
      <HowIWork />
      <Experience />
      <Contact />
    </main>
  )
}
