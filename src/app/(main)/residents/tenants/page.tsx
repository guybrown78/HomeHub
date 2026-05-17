import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'For Tenants | HomeHub',
  description: 'HomeHub connects tenants with their housing provider. Report repairs, track progress, access your tenancy documents, and stay connected to your community.',
}

const benefits = [
  {
    title: 'Report Repairs in Seconds',
    description: 'No more sitting on hold. Submit a repair request with photos directly from your phone, any time of day or night.',
  },
  {
    title: 'Track Your Repair',
    description: 'See exactly where your repair is in the process and get notified the moment there\'s an update — no chasing needed.',
  },
  {
    title: 'Access Your Documents',
    description: 'Your tenancy agreement, property guides, safety certificates, and important notices — all in one secure place.',
  },
  {
    title: 'Stay Informed',
    description: 'Get important updates from your housing provider directly to your phone, so you\'re never out of the loop.',
  },
  {
    title: 'Connect with Your Community',
    description: 'Meet your neighbours, discover local events, and access community resources through the HomeHub community board.',
  },
  {
    title: 'Energy Advice',
    description: 'Get personalised energy saving tips and understand your EPC rating to help reduce your bills throughout the year.',
  },
]

export default function TenantsPage() {
  return (
    <>
      <Section first className="bg-violet-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Residents</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              For Tenants
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Your home, your voice, your community. HomeHub puts everything you need to manage your tenancy in the palm of your hand.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <AppStoreLink color="white" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Everything you need, right in your pocket
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              HomeHub is free for tenants whose housing provider is on the platform. Check with your landlord to see if you&apos;re eligible.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-4 h-1 w-12 rounded-full bg-amber-400" />
                <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/residents/download-app">Download the App</Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
