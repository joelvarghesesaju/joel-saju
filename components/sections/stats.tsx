'use client'

import { SectionHeading } from '@/components/section-heading'
import { RevealStagger, RevealItem } from '@/components/reveal'
import { CountUp } from '@/components/count-up'
import { getIcon } from '@/lib/icons'

type StatsItem = {
  icon: string
  value: number
  prefix?: string
  suffix?: string
  label: string
}

type StatsData = {
  heading: string
  subtitle: string
  items: StatsItem[]
}

export function Stats({ stats }: { stats: StatsData }) {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Business Impact"
          title={stats.heading}
          subtitle={stats.subtitle}
        />

        <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.items.map((item) => {
            const Icon = getIcon(item.icon)

            return (
              <RevealItem key={item.label}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="absolute -right-8 -top-8 size-28 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/15" />

                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </span>

                  <p className="mt-6 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                    <CountUp
                      value={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                    />
                  </p>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              </RevealItem>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}