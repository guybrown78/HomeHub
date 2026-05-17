import { Container } from '@/components/Container'
import { AppStoreLink } from '@/components/AppStoreLink'
import Link from 'next/link'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'Download the HomeHub App | HomeHub',
  description: 'Download HomeHub on iOS or Android. Connect with your housing provider, report repairs, access documents, and manage your home from your phone.',
}

const steps = [
  {
    step: '1',
    title: 'Download the app',
    description: 'Available free on the App Store and Google Play. Search for HomeHub or use the links below.',
  },
  {
    step: '2',
    title: 'Create your account',
    description: 'Sign up with your email address and verify your identity. Takes less than two minutes.',
  },
  {
    step: '3',
    title: 'Connect to your provider',
    description: 'Enter your address or housing provider code to link your account to your home.',
  },
  {
    step: '4',
    title: 'Start using HomeHub',
    description: 'Report repairs, check your documents, stay informed, and connect with your community.',
  },
]

function GooglePlayBadge() {
  return (
    <Link
      href="#"
      aria-label="Get it on Google Play"
      className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-white hover:bg-gray-800 transition-colors"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M3.18 23.76c.3.17.64.24.99.2l12.7-11.56L13.5 9.03 3.18 23.76Z" />
        <path d="m20.49 10.39-2.83-1.63-3.68 3.35 3.68 3.35 2.85-1.64a1.79 1.79 0 0 0 0-3.43Z" />
        <path d="M2.19.54A1.79 1.79 0 0 0 1.5 2v20a1.79 1.79 0 0 0 .69 1.46l.1.08 11.21-11.2v-.27L2.29.46Z" />
        <path d="m16.87 12.4-3.27-3.27L2.29.46c.3-.19.68-.22 1.01-.06l13.57 7.82-3.17 2.88 3.17 1.3Z" />
      </svg>
      <div className="text-left">
        <div className="text-[10px] leading-none">GET IT ON</div>
        <div className="text-sm font-semibold leading-tight">Google Play</div>
      </div>
    </Link>
  )
}

export default function DownloadAppPage() {
  return (
    <>
      <Section first className="bg-violet-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Residents</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Download HomeHub
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Your home, your community, your way. Download HomeHub free on iOS and Android and connect with your housing provider today.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <AppStoreLink color="white" />
              <GooglePlayBadge />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Getting started is simple
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Set up your HomeHub account in minutes. No paperwork, no calls, no queues.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {steps.map((step) => (
              <div key={step.step} className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-violet-950 text-sm font-bold text-white">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-amber-50 p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Is your housing provider on HomeHub?
            </h2>
            <p className="mt-3 text-gray-600">
              HomeHub is available to residents whose housing provider has signed up to the platform. If your landlord isn&apos;t using HomeHub yet, ask them to get in touch.
            </p>
            <div className="mt-6">
              <Link href="/contact" className="text-sm font-semibold text-violet-950 hover:underline">
                Ask your landlord to sign up →
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
