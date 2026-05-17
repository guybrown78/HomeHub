import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'Compliance & Regulation | HomeHub for Landlords',
  description: 'Stay ahead of housing compliance obligations with HomeHub. Track safety certificates, EPC ratings, and regulatory requirements across your entire portfolio.',
}

const features = [
  {
    title: 'Safety Certificate Tracking',
    description: 'Centrally manage gas safety, electrical certificates, fire risk assessments, and legionella checks with automated renewal reminders.',
  },
  {
    title: 'EPC Portfolio View',
    description: 'See every property\'s energy performance rating in one place, with actionable upgrade pathways to meet incoming MEES regulations.',
  },
  {
    title: 'Regulatory Audit Trail',
    description: 'Maintain a complete, timestamped record of all compliance actions for every property — ready for inspection at any time.',
  },
  {
    title: 'Decarbonisation Planning',
    description: 'Model your net zero pathway across your housing stock, identifying priority properties for retrofit investment.',
  },
  {
    title: 'Tenant Satisfaction Metrics',
    description: 'Evidence your compliance with Tenant Satisfaction Measures (TSM) requirements through structured resident feedback and reporting.',
  },
  {
    title: 'Regulatory Alerts',
    description: 'Stay ahead of legislative changes with in-platform alerts and guidance as new housing regulations come into force.',
  },
]

export default function ComplianceRegulationPage() {
  return (
    <>
      <Section first className="bg-violet-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Landlords</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Compliance &amp; Regulation
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Housing compliance is more complex than ever. HomeHub gives landlords and housing providers the visibility and control to stay ahead — not just keep up.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/demo">Book a Demo</Button>
              <Button href="/resources/guides" variant="outline" color="violet" className="border-white/30 text-white hover:border-white/60">
                Compliance Guides
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              From reactive to proactive compliance management
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Stop chasing certificates and start managing compliance strategically. HomeHub gives you the full picture across your entire portfolio.
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
