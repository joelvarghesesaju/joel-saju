import { ArrowRight, Clock, DollarSign } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { RevealStagger, RevealItem } from '@/components/reveal'
import { getIcon } from '@/lib/icons'

type CaseStudyItem = {
  industry: string
  problem: string
  automation: string
  apps: string[]
  hoursSaved: string
  moneySaved: string
  result: string
  icon: string
}

type CaseStudiesData = {
  heading: string
  subtitle: string
  items: CaseStudyItem[]
}

type Props = {
  caseStudies: CaseStudiesData | null
}

export function CaseStudies({ caseStudies }: Props) {
  if (!caseStudies) return null

  return (
    <section
      id="case-studies"
      className="scroll-mt-20 border-y border-border bg-card/20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <SectionHeading
          eyebrow="Case Studies"
          title={caseStudies.heading}
          subtitle={caseStudies.subtitle}
        />

        <RevealStagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.items?.map((cs) => {
            const Icon = getIcon(cs.icon)

            return (
              <RevealItem key={cs.industry}>
                <article className="group flex h-full flex-col rounded-3xl border border-border bg-background/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">

                  {/* Industry tag */}
                  <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {cs.industry}
                  </span>

                  {/* Problem + Automation */}
                  <div className="mt-5 flex flex-col gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Problem
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {cs.problem}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Automation Built
                      </p>
                      <p className="mt-1 text-sm text-foreground">
                        {cs.automation}
                      </p>
                    </div>
                  </div>

                  {/* Apps */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cs.apps?.map((app) => (
                      <span
                        key={app}
                        className="rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {app}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5">
                    <div className="flex items-center gap-2">
                      <Clock className="size-4 text-primary" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {cs.hoursSaved}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          Hours saved
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <DollarSign className="size-4 text-primary" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {cs.moneySaved}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          Est. savings
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="mt-5 flex items-start gap-2 rounded-2xl bg-primary/5 p-4">
                    <ArrowRight className="mt-0.5 size-4 shrink-0 text-primary" />
                    <p className="text-sm font-medium leading-relaxed text-foreground">
                      {cs.result}
                    </p>
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
  