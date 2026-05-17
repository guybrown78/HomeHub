import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'Resolve – Issue Reporting & Resolution | HomeHub',
  description: 'Streamline repairs and issue reporting with HomeHub Resolve. Give residents a simple way to report problems and track resolution in real time.',
}

const features = [
  {
    title: 'Simple Issue Reporting',
    description: 'Residents can report repairs and issues in seconds via the app, with photo uploads and clear categorisation to help your team prioritise.',
  },
  {
    title: 'Real-Time Tracking',
    description: 'Keep residents informed at every stage. Automated status updates reduce inbound calls and build trust through transparency.',
  },
  {
    title: 'Contractor Coordination',
    description: 'Assign jobs directly to your approved contractors, track completion, and maintain a full audit trail for compliance purposes.',
  },
  {
    title: 'Smart Triage',
    description: 'AI-assisted categorisation routes urgent issues instantly, ensuring emergency repairs are flagged and acted on without delay.',
  },
  {
    title: 'Performance Analytics',
    description: 'Monitor repair volumes, response times, and resolution rates with a real-time dashboard to drive continuous improvement.',
  },
  {
    title: 'Compliance Audit Trail',
    description: 'Every reported issue is logged with timestamps and actions taken, giving you the evidence you need for regulatory compliance.',
  },
]

export default function ResolvePage() {
  return (
    <>
      <Section first className="bg-violet-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Platform</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Resolve
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              A smarter way to report, track, and resolve housing repairs. Give residents the transparency they deserve and give your team the tools to work efficiently.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/demo">Book a Demo</Button>
              <Button href="/landlords/repairs-resolution" variant="outline" color="violet" className="border-white/30 text-white hover:border-white/60">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Built for housing providers who care about residents
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From the moment a resident submits a report to the day it&apos;s resolved, Resolve keeps everyone aligned, informed, and accountable.
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
