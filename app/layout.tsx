import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://joel-saju.vercel.app/'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'FlowWeave — Custom n8n Automation Specialist',
    template: '%s | FlowWeave',
  },
  description:
    'I build custom  n8n automations that eliminate manual work, cut costs, and run your business on autopilot.',
  keywords: [
    'n8n',
    'automation',
    'workflow automation',
    'AI automation',
    'no-code automation',
    'business automation',
    'CRM automation',
    'lead automation',
  ],
  authors: [{ name: 'Joel' }],
  creator: 'FlowWeave',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'FlowWeave — Custom n8n Automation Specialist',
    description:
      'Custom n8n automations that eliminate manual work, cut costs, and run your business on autopilot.',
    siteName: 'FlowWeave',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowWeave — Custom n8n Automation Specialist',
    description:
      'Custom n8n automations that eliminate manual work, cut costs, and run your business on autopilot.',
    creator: '@FlowWeave',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1015',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
