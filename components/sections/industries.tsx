import { SectionHeading } from '@/components/section-heading'
import { RevealStagger, RevealItem } from '@/components/reveal'
import { getIcon } from '@/lib/icons'
import industries from '@/content/industries.json'

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 border-y border-border bg-card/20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Industries" title={industries.heading} subtitle={industries.subtitle} />

        <RevealStagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.items.map((industry) => {
            const Icon = getIcon(industry.icon)
            return (
              <RevealItem key={industry.name} className="h-full">
                <article className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-background/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-sm font-semibold tracking-tight">{industry.name}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{industry.description}</p>
                </article>
              </RevealItem>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}
