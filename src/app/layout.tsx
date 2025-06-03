import { type Metadata } from 'next'
import { Inter, Rubik } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})
export const metadata: Metadata = {
  title: {
    template: '%s - HomeHub',
    default: 'HomeHub - Let’s make housing easier, together.',
  },
  description:
    'By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={clsx('bg-gray-50 antialiased', rubik.variable)}>
      <body>{children}</body>
    </html>
  )
}
