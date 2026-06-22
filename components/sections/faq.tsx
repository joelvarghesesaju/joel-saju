import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import content from '@/content/faq.json'

export function Faq() {
  return (
    <section id="faq" className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading title={content.heading} subtitle={content.subtitle} />
        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {content.items.map((item, i) => (
              <AccordionItem
                key={item.question}
                value={`item-${i}`}
                className="border-border/60"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
