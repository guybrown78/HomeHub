import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'About HomeHub',
  description: 'HomeHub is on a mission to make housing better for everyone. Learn about our story, our team, and the values that drive everything we do.',
}

const values = [
  {
    title: 'Resident First',
    description: 'Every decision we make starts with the resident. Technology is only valuable if it genuinely improves people\'s lives in their homes.',
  },
  {
    title: 'Built for Trust',
    description: 'We handle sensitive data about people\'s homes and lives. We take that responsibility seriously with security, transparency, and privacy at our core.',
  },
  {
    title: 'Outcomes Over Features',
    description: 'We measure success by the impact we have — repairs resolved faster, homes made warmer, communities better connected — not by features shipped.',
  },
  {
    title: 'Partner Mindset',
    description: 'We work alongside housing providers as true partners, understanding their unique challenges and building solutions that fit their world.',
  },
]

const stats = [
  { value: '200+', label: 'Housing providers' },
  { value: '500k+', label: 'Residents on platform' },
  { value: '98%', label: 'Customer retention rate' },
  { value: '2019', label: 'Founded' },
]

export default function AboutPage() {
  return (
    <>
      <Section first className="bg-violet-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Company</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About HomeHub
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              We started HomeHub because we believed housing could be better — for residents, for providers, and for communities. We still do.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our story</h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  HomeHub was founded in 2019 by a team with deep roots in housing, technology, and community development. We saw first-hand how the housing sector was being left behind digitally — residents unable to report repairs without waiting on hold, landlords managing compliance through spreadsheets, and communities with no way to connect.
                </p>
                <p>
                  We built HomeHub to change that. Starting with a simple repairs reporting app, we quickly expanded to cover the full spectrum of resident engagement — from community to energy, from compliance to retrofit.
                </p>
                <p>
                  Today, HomeHub serves hundreds of housing providers across the UK, giving hundreds of thousands of residents a better experience in their homes. We&apos;re growing fast, but our mission stays the same: make housing better for everyone.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/demo">See HomeHub in Action</Button>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-violet-50 p-8 text-center">
                    <p className="text-4xl font-bold text-violet-950">{stat.value}</p>
                    <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our values</h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                  <div className="mb-4 h-1 w-12 rounded-full bg-amber-400" />
                  <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
