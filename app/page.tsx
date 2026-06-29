import { client } from '@/sanity/lib/client'
import { HERO_QUERY,STATS_QUERY,AUTOMATIONS_QUERY,CASE_STUDIES_QUERY,TESTIMONIALS_QUERY,FOOTER_QUERY} from '@/sanity/lib/queries'


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

export default async function HomePage() {
  const hero = await client.fetch(HERO_QUERY)
  const stats = await client.fetch(STATS_QUERY)
  const automations = await client.fetch(AUTOMATIONS_QUERY)
  const caseStudies = await client.fetch(CASE_STUDIES_QUERY)
  const testimonials =
  (await client.fetch(TESTIMONIALS_QUERY)) ?? null
  const footer = await client.fetch(FOOTER_QUERY)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <Hero hero={hero} />
        <Stats stats={stats} />
        <TrustedApps />
        <Services />
        <Industries />
        <WhyAutomate />
        <Automations automations={automations} />
        <CaseStudies caseStudies={caseStudies} />
        <Process />
        <WhyChoose />
        <Testimonials testimonials={testimonials} />
        <Faq />
        <Contact />
      </main>

      <Footer footer={footer} />
    </div>
  )
}

