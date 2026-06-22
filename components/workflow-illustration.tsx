'use client'

import { motion } from 'motion/react'
import hero from '@/content/hero.json'

const nodes = hero.workflow.nodes
const hub = hero.workflow.hub

// Positions (in %) around the central hub for up to 8 nodes.
const positions = [
  { x: 14, y: 12 },
  { x: 84, y: 10 },
  { x: 2, y: 42 },
  { x: 96, y: 40 },
  { x: 10, y: 76 },
  { x: 88, y: 74 },
  { x: 36, y: 95 },
  { x: 66, y: 95 },
]

export function WorkflowIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* glow */}
      <div className="absolute left-1/2 top-1/2 size-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

      {/* connecting lines */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 size-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {positions.slice(0, nodes.length).map((p, i) => (
          <motion.line
            key={i}
            x1={50}
            y1={50}
            x2={p.x}
            y2={p.y}
            stroke="var(--color-primary)"
            strokeWidth={0.4}
            strokeOpacity={0.35}
            strokeDasharray="2 2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
          />
        ))}
      </svg>

      {/* app nodes */}
      {nodes.map((node, i) => {
        const p = positions[i]
        return (
          <motion.div
            key={node.name}
            className="absolute flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-border bg-card/80 shadow-xl shadow-black/30 backdrop-blur-sm sm:size-16"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
          >
            <motion.div
              className="flex size-full items-center justify-center p-3"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={node.logo || '/placeholder.svg'}
                alt={`${node.name} logo`}
                width={32}
                height={32}
                className="size-8 object-contain"
              />
            </motion.div>
          </motion.div>
        )
      })}

      {/* central hub */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-3xl border border-primary/40 bg-card shadow-2xl shadow-primary/30 sm:size-28"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="absolute inset-0 -z-10 animate-ping rounded-3xl bg-primary/10" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hub.logo || '/placeholder.svg'}
          alt={`${hub.name} logo`}
          width={44}
          height={44}
          className="size-11 object-contain"
        />
        <span className="text-xs font-semibold text-foreground">{hub.name}</span>
      </motion.div>
    </div>
  )
}
