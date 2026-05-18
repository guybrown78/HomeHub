import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'Energy – Smart Energy Management | HomeHub',
  description: 'Help residents understand and reduce their energy use. HomeHub Energy brings smart insights, EPC data, and retrofit guidance to the palm of their hand.',
}

const features = [
  {
    title: 'EPC Integration',
    description: 'Surface energy performance certificate data directly to residents, giving them context for their bills and practical next steps.',
  },
  {
    title: 'Consumption Insights',
    description: 'Connect smart meter data to provide personalised energy usage insights and identify properties with high consumption patterns.',
  },
  {
    title: 'Retrofit Guidance',
    description: 'Guide residents and landlords through available retrofit schemes, funding options, and upgrade pathways to improve energy ratings.',
  },
  {
    title: 'Fuel Poverty Flagging',
    description: 'Automatically identify households at risk of fuel poverty so housing providers can proactively intervene with support and advice.',
  },
  {
    title: 'Net Zero Reporting',
    description: 'Track your housing stock\'s energy performance over time, supporting your net zero commitments with clear, auditable data.',
  },
  {
    title: 'Resident Education',
    description: 'Deliver targeted tips, seasonal advice, and guides that help residents cut costs and reduce their environmental footprint.',
  },
]

export default function EnergyPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Platform</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Energy
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Empowering residents to understand, manage, and reduce their energy use — while helping housing providers meet retrofit and net zero targets.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/demo">Book a Demo</Button>
              <Button href="/landlords/retrofit-funding" variant="outline" color="violet" className="border-white/30 text-white hover:border-white/60">
                Retrofit & Funding
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Energy intelligence for homes and housing providers
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Connect your properties to a smarter energy future. HomeHub Energy makes complex data accessible and actionable for residents and housing teams alike.
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
