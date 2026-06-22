import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { Stats } from '@/components/sections/stats'
import { TrustedApps } from '@/components/sections/trusted-apps'
import { Services } from '@/components/sections/services'
import { Industries } from '@/components/sections/industries'
import { WhyAutomate } from '@/components/sections/why-automate'
import { Automations } from '@/components/sections/automations'
import { CaseStudies } from '@/components/sections/case-studies'
import { Process } from '@/components/sections/process'
import { WhyChoose } from '@/components/sections/why-choose'
import { Testimonials } from '@/components/sections/testimonials'
import { Faq } from '@/components/sections/faq'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TrustedApps />
        <Services />
        <Industries />
        <WhyAutomate />
        <Automations />
        <CaseStudies />
        <Process />
        <WhyChoose />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
