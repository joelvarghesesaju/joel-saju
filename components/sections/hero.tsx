'use client'

import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import { WorkflowIllustration } from '@/components/workflow-illustration'
import hero from '@/content/hero.json'

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at top, black, transparent 70%)',
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={fade}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary"
          >
            <Sparkles className="size-3.5" />
            {hero.badge}
          </motion.span>

          <motion.h1
            variants={fade}
            transition={{ duration: 0.6 }}
            className="text-balance font-heading text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.05]"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={fade}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div variants={fade} transition={{ duration: 0.6 }} className="flex flex-col gap-3 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40"
            >
              {hero.primaryCta.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/50 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-card"
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="rounded-3xl border border-border bg-card/40 p-6 backdrop-blur-sm sm:p-10">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">{hero.workflow.title}</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-primary">
                <span className="size-2 animate-pulse rounded-full bg-primary" />
                {hero.workflow.subtitle}
              </span>
            </div>
            <WorkflowIllustration />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
