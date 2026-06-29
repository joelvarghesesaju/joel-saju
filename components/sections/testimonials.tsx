import Image from 'next/image'
import { Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

type TestimonialItem = {
  name: string
  role: string
  company: string
  message: string
  avatar?: string
  rating: number
}

type TestimonialsData = {
  heading: string
  subtitle: string
  items: TestimonialItem[]
}

type Props = {
  testimonials: TestimonialsData | null
}

export function Testimonials({ testimonials }: Props) {
  if (!testimonials) {
    return (
      <section className="py-24 text-center text-muted-foreground">
        <p>Loading testimonials...</p>
      </section>
    )
  }

  return (
    <section id="testimonials" className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <SectionHeading
          title={testimonials.heading}
          subtitle={testimonials.subtitle}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {(testimonials.items ?? [])
            .filter((item) => item.name && item.message)
            .map((item, i) => (
              <Reveal key={item.name + i} delay={(i % 2) * 0.1}>
                <figure className="flex h-full flex-col rounded-2xl border border-border/60 bg-card/40 p-8">

                  {/* Stars */}
                  <div className="flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, s) => (
                      <Star
                        key={s}
                        className="size-4 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/90">
                    "{item.message}"
                  </blockquote>

                  {/* Author */}
                  <figcaption className="mt-6 flex items-center gap-4 border-t border-border/60 pt-6">

                    {/* FIX: safer image handling */}
                    <img
                      src={item.avatar || '/placeholder.svg'}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="size-12 rounded-full object-cover ring-1 ring-border"
                    />

                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {item.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.role}, {item.company}
                      </div>
                    </div>

                  </figcaption>

                </figure>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  )
}