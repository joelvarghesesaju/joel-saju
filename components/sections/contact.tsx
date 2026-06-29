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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget

    const payload = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value || '',
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value || '',
      company:
        (form.elements.namedItem('company') as HTMLInputElement)?.value || '',
      message:
        (form.elements.namedItem('message') as HTMLTextAreaElement)?.value ||
        '',
    }

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwFxYtzpob-QmOKPIonNy14itH9Y_HqZDMQURS2GbrshRZiBd43zrZXVyNMqBVeRQR0RQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      setStatus('success')
      form.reset()
    } catch (err) {
      console.error('Contact form error:', err)
      setStatus('idle')
    }
  }

  return (
    <section id="contact" className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-8 sm:p-12">

          <div className="relative grid gap-12 lg:grid-cols-2">

            {/* LEFT SIDE */}
            <Reveal>
              <div>
                <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {content.badge}
                </span>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  {content.heading}
                </h2>

                <p className="mt-4 text-muted-foreground">
                  {content.subtitle}
                </p>
              </div>
            </Reveal>

            {/* RIGHT SIDE */}
            <Reveal delay={0.1}>
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center"
                >
                  <CheckCircle2 className="size-12 text-primary" />
                  <h3 className="mt-4 text-lg font-semibold">
                    Message sent
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thanks! I’ll get back to you soon.
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
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        {content.submitLabel}
                        <ArrowRight className="size-4" />
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