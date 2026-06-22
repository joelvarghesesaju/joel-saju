'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Reveal } from '@/components/reveal'
import content from '@/content/contact.json'

type Status = 'idle' | 'submitting' | 'success'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    // Simulate submission. Wire up to a real endpoint/server action as needed.
    setTimeout(() => setStatus('success'), 1100)
  }

  return (
    <section id="contact" className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-8 sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl"
          />
          <div className="relative grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {content.badge}
                </span>
                <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {content.heading}
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {content.subtitle}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center"
                >
                  <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-foreground">Message sent</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  {content.fields.map((field) => (
                    <div key={field.name} className="grid gap-2">
                      <Label htmlFor={field.name}>{field.label}</Label>
                      {field.type === 'textarea' ? (
                        <Textarea
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          placeholder={field.placeholder}
                          rows={4}
                        />
                      ) : (
                        <Input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  ))}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === 'submitting'}
                    className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        {content.submitLabel}
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
