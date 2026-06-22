import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { getIcon } from '@/lib/icons'
import content from '@/content/whyChoose.json'

export function WhyChoose() {
  return (
    <section id="why-choose" className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading title={content.heading} subtitle={content.subtitle} />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, i) => {
            const Icon = getIcon(item.icon)
            return (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-8 text-center transition-colors hover:border-primary/40">
                  <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                    <Icon className="size-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
