import { Container } from '@/components/Container'
import { AppStoreLink } from '@/components/AppStoreLink'
import { GooglePlayLink } from '@/components/GooglePlayLink'
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

export default function DownloadAppPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
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
              <GooglePlayLink color="white" />
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
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-950 text-sm font-bold text-white">
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
              <Link href="/contact" className="text-sm font-semibold text-brand-950 hover:underline">
                Ask your landlord to sign up →
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
