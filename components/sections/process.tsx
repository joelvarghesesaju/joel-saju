import { SectionHeading } from '@/components/section-heading'
import { RevealStagger, RevealItem } from '@/components/reveal'
import { getIcon } from '@/lib/icons'
import process from '@/content/process.json'

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Process" title={process.heading} subtitle={process.subtitle} />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />

          <RevealStagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {process.steps.map((step) => {
              const Icon = getIcon(step.icon)
              return (
                <RevealItem key={step.step}>
                  <div className="flex flex-col items-center text-center">
                    <span className="relative flex size-14 items-center justify-center rounded-2xl border border-primary/40 bg-card text-primary shadow-lg shadow-primary/10">
                      <Icon className="size-6" />
                    </span>
                    <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">
                      {step.step}
                    </span>
                    <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </RevealItem>
              )
            })}
          </RevealStagger>
        </div>
      </div>
    </section>
  )
}
