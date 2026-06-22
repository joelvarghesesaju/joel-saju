import { Check, X } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import whyAutomate from '@/content/whyAutomate.json'

export function WhyAutomate() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why Automate" title={whyAutomate.heading} subtitle={whyAutomate.subtitle} />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-destructive/30 bg-destructive/5 p-8">
              <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
                {whyAutomate.problems.title}
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {whyAutomate.problems.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                      <X className="size-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-primary/30 bg-primary/5 p-8">
              <h3 className="font-heading text-xl font-semibold tracking-tight text-foreground">
                {whyAutomate.benefits.title}
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {whyAutomate.benefits.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
