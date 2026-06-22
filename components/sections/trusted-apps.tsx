import { Reveal } from '@/components/reveal'
import apps from '@/content/apps.json'

export function TrustedApps() {
  return (
    <section className="border-y border-border bg-card/20 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {apps.heading}
          </p>
        </Reveal>
        <Reveal className="mt-10">
          <ul className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
            {apps.items.map((app) => (
              <li key={app.name} className="flex items-center justify-center">
                <div className="group flex items-center gap-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={app.logo || '/placeholder.svg'}
                    alt={`${app.name} logo`}
                    width={28}
                    height={28}
                    className="size-7 object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    {app.name}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
