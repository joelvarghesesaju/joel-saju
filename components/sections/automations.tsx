import { ArrowDown, Clock, TrendingUp } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { RevealStagger, RevealItem } from '@/components/reveal'
import { getIcon } from '@/lib/icons'
import automations from '@/content/automations.json'

export function Automations() {
  return (
    <section id="automations" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Featured Automations" title={automations.heading} subtitle={automations.subtitle} />

        <RevealStagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {automations.items.map((item) => {
            const Icon = getIcon(item.icon)
            return (
              <RevealItem key={item.name} className="h-full">
                <article className="group flex h-full flex-col rounded-3xl border border-border bg-card/50 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-heading text-base font-semibold tracking-tight">{item.name}</h3>
                  </div>

                  <div className="mt-6 flex flex-col gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-destructive/80">Problem</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.problem}</p>
                    </div>
                    <div className="flex justify-center text-primary/50">
                      <ArrowDown className="size-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">Automation</p>
                      <p className="mt-1 text-sm leading-relaxed text-foreground">{item.solution}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.apps.map((app) => (
                      <span
                        key={app}
                        className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {app}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5">
                    <div className="flex items-center gap-2">
                      <Clock className="size-4 text-primary" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.timeSaved}</p>
                        <p className="text-[11px] text-muted-foreground">Time saved</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="size-4 text-primary" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.roi}</p>
                        <p className="text-[11px] text-muted-foreground">Est. ROI</p>
                      </div>
                    </div>
                  </div>
                </article>
              </RevealItem>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}
