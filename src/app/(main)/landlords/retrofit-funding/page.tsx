import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'Retrofit & Funding | HomeHub for Landlords',
  description: 'Navigate retrofit schemes and funding opportunities with HomeHub. Identify eligible properties, access guidance, and track your decarbonisation progress.',
}

const features = [
  {
    title: 'Scheme Eligibility Matching',
    description: 'Automatically match properties in your portfolio against current and upcoming retrofit funding schemes — so you never miss an opportunity.',
  },
  {
    title: 'EPC Improvement Planning',
    description: 'Generate property-level improvement plans showing the most cost-effective measures to raise energy ratings to meet incoming MEES requirements.',
  },
  {
    title: 'Funding Navigator',
    description: 'A plain-English guide to ECO4, Great British Insulation Scheme, Social Housing Decarbonisation Fund, and other available grants.',
  },
  {
    title: 'Resident Consent Workflow',
    description: 'Manage resident communications and consent for retrofit surveys and works, with full audit trail and digital sign-off.',
  },
  {
    title: 'Contractor Coordination',
    description: 'Connect directly with accredited retrofit contractors through the platform, managing the works pipeline from assessment to completion.',
  },
  {
    title: 'Decarbonisation Reporting',
    description: 'Track your portfolio\'s retrofit progress against your net zero targets with clear, board-ready reporting and trend analysis.',
  },
]

export default function RetrofitFundingPage() {
  return (
    <>
      <Section first className="bg-violet-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Landlords</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Retrofit &amp; Funding
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Unlock funding, plan improvements, and hit your net zero targets. HomeHub makes retrofit manageable for housing providers of every size.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/demo">Book a Demo</Button>
              <Button href="/platform/energy" variant="outline" color="violet" className="border-white/30 text-white hover:border-white/60">
                Energy Platform
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Navigate the retrofit landscape with confidence
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Retrofit funding is complex and constantly changing. HomeHub cuts through the complexity to help you access the right schemes for your properties and your residents.
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
