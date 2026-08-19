import type { Metadata, Viewport } from 'next'
import { Inter, Barlow_Semi_Condensed, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import localFont from 'next/font/local'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

// Official Ditto Title Font
const kairos = localFont({
  src: './kairossansw1g-cnlight.ttf',
  variable: '--font-kairos',
  display: 'swap',
})

// Barlow Semi Condensed — secondary fallback font
const barlow = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ditto-pos-concept.example'),
  title: {
    default: 'Ditto POS concept — resilient checkout through every outage',
    template: '%s | Ditto POS concept',
  },
  description:
    'Independent Ditto POS concept: an offline-first, peer-to-peer experience for keeping checkout, kitchen, and store devices working through network outages.',
  keywords: [
    'Ditto',
    'offline-first database',
    'peer-to-peer sync',
    'point of sale',
    'POS resilience',
    'mesh networking',
    'CRDT',
    'edge database',
  ],
  authors: [{ name: 'Digital Marketing Designer assignment' }],
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Ditto POS concept — checkout that outlasts an outage',
    description:
      'An independent Point of Sale concept showing how peer-to-peer sync can keep retail and QSR operations moving through an outage.',
    type: 'website',
    siteName: 'Ditto POS concept',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ditto POS concept — checkout that outlasts an outage',
    description:
      'An independent Point of Sale concept showing how peer-to-peer sync can keep retail and QSR operations moving through an outage.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fefefe',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${kairos.variable} ${inter.variable} ${barlow.variable} ${jetbrains.variable} bg-background`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
