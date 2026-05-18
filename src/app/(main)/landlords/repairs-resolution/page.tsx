import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'Repairs & Resolution | HomeHub for Landlords',
  description: 'Transform your repairs process with HomeHub. Faster reporting, smarter triage, and transparent tracking that residents and housing teams both love.',
}

const features = [
  {
    title: 'Digital Repairs Reporting',
    description: 'Replace phone calls and paper forms with a simple, photo-enabled digital reporting flow that residents can complete in under two minutes.',
  },
  {
    title: 'Intelligent Triage',
    description: 'AI-assisted categorisation automatically prioritises urgent repairs and routes non-emergency jobs to the right contractor queue.',
  },
  {
    title: 'Contractor Management',
    description: 'Manage your approved contractor network directly within HomeHub, with job assignment, scheduling, and completion tracking built in.',
  },
  {
    title: 'Resident Communication',
    description: 'Automated status updates keep residents informed throughout the repairs journey, dramatically reducing inbound enquiries.',
  },
  {
    title: 'Performance Dashboards',
    description: 'Real-time analytics on repair volumes, response times, and completion rates help you identify bottlenecks and improve service delivery.',
  },
  {
    title: 'Repeat Issue Detection',
    description: 'Pattern recognition flags properties with recurring problems so your team can investigate underlying causes before they escalate.',
  },
]

export default function RepairsResolutionPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Landlords</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Repairs &amp; Resolution
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              A faster, fairer repairs service that works for residents and housing teams alike. Less admin, fewer missed appointments, and better outcomes for everyone.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/book-demo">Book a Demo</Button>
              <Button href="/platform/resolve" variant="outline" color="violet" className="border-white/30 text-white hover:border-white/60">
                See Resolve Platform
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Fix it faster. Keep residents informed. Cut costs.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              HomeHub Repairs & Resolution removes friction from the entire repairs lifecycle — from first report to final sign-off.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-4 h-1 w-12 rounded-full bg-amber-400" />
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
