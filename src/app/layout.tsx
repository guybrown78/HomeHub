import { type Metadata } from 'next'
import { Rubik } from 'next/font/google'
import clsx from 'clsx'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import '@/styles/tailwind.css'

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.homehub.co.uk'),
  title: {
    template: '%s | HomeHub',
    default: 'HomeHub - Making housing easier, together.',
  },
  description:
    'HomeHub connects housing providers with their residents. Streamline repairs, drive engagement, manage compliance, and build stronger communities — all in one platform.',
  openGraph: {
    type: 'website',
    siteName: 'HomeHub',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'HomeHub - Making housing easier, together.' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-page antialiased', rubik.variable)}>
      <body>
        <GoogleAnalytics
          GA_MEASUREMENT_ID="G-66VYYXLD36"
          ADS_MEASUREMENT_ID="AW-18100994958"
        />
        {children}
      </body>
    </html>
  )
}
