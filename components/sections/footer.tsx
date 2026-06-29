import { Workflow } from 'lucide-react'

type Social = {
  label: string
  href: string
  logo?: string
}

type NavItem = {
  label: string
  href: string
}

type FooterData = {
  brandName?: string
  footerDescription?: string
  email?: string
  cta?: {
    label?: string
    href?: string
  }
  social?: Social[]
  nav?: NavItem[]
}

type Props = {
  footer: FooterData | null
}

export function Footer({ footer }: Props) {
  // 🚀 If no data, fail gracefully (no infinite "loading footer")
  if (!footer) return null

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">

          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Workflow className="size-5" />
              </span>

              <span className="text-base font-semibold tracking-tight">
                {footer.brandName ?? 'Brand'}
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {footer.footerDescription ?? ''}
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {footer.social?.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group flex size-10 items-center justify-center rounded-xl border border-border bg-background transition-colors hover:border-primary/50 hover:bg-primary/10"
                >
                  <img
                    src={s.logo || '/placeholder.svg'}
                    alt={s.label}
                    width={18}
                    height={18}
                    className="size-[18px] object-contain opacity-70 grayscale transition-all group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="lg:col-span-4 lg:col-start-7" aria-label="Footer">
            <h3 className="text-sm font-semibold text-foreground">
              Navigation
            </h3>

            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
              {footer.nav?.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-foreground">
              Get in touch
            </h3>

            {footer.email && (
              <a
                href={`mailto:${footer.email}`}
                className="mt-4 block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {footer.email}
              </a>
            )}

            {footer.cta && (
              <a
                href={footer.cta.href}
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {footer.cta.label}
              </a>
            )}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {footer.brandName ?? 'Company'}.
            All rights reserved.
          </p>
          <p>Built with Next.js, Sanity & automation workflows.</p>
        </div>

      </div>
    </footer>
  )
}