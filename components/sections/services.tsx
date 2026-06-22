import { SectionHeading } from '@/components/section-heading'
import { RevealStagger, RevealItem } from '@/components/reveal'
import { getIcon } from '@/lib/icons'
import services from '@/content/services.json'

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Services" title={services.heading} subtitle={services.subtitle} />

        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service) => {
            const Icon = getIcon(service.icon)
            return (
              <RevealItem key={service.title} className="h-full">
                <article className="group relative flex h-full flex-col gap-4 rounded-3xl border border-border bg-card/50 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-card hover:shadow-2xl hover:shadow-primary/10">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="font-heading text-lg font-semibold tracking-tight">{service.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              </RevealItem>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}
