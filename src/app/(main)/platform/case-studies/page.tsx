import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'Case Studies | HomeHub',
  description: 'See how housing providers across the UK are using HomeHub to improve resident engagement, streamline repairs, and meet compliance obligations.',
}

const caseStudies = [
  {
    org: 'Midlands Housing Association',
    outcome: '42% reduction in repair resolution time',
    description: 'A 12,000-home housing association implemented HomeHub Resolve to replace a paper-based repairs process. Within six months, average resolution times dropped by 42% and resident satisfaction scores improved significantly.',
    tags: ['Repairs', 'Resident Engagement'],
  },
  {
    org: 'Northern Social Housing Provider',
    outcome: '68% of residents actively using the app',
    description: 'After rolling out HomeHub across their portfolio, this provider saw 68% of residents engage with the platform within the first quarter — far exceeding the industry average for digital adoption.',
    tags: ['Community', 'Digital Adoption'],
  },
  {
    org: 'London Borough Housing Team',
    outcome: 'Full EPC compliance tracking achieved',
    description: 'Using HomeHub Energy, this local authority was able to track EPC ratings across their entire housing stock, identify retrofit priorities, and align with their net zero roadmap.',
    tags: ['Energy', 'Compliance'],
  },
  {
    org: 'South West ALMO',
    outcome: '£180k saved in call centre costs annually',
    description: 'By giving residents self-service access to repairs reporting, account management, and real-time updates, this ALMO reduced inbound call volumes by 35% — saving £180,000 in operating costs per year.',
    tags: ['Cost Reduction', 'Resolve'],
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <Section first className="bg-violet-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Platform</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Case Studies
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Real outcomes from real housing providers. See how HomeHub is transforming resident engagement, compliance, and operational efficiency across the UK.
            </p>
            <div className="mt-10">
              <Button href="/demo">Talk to Our Team</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {caseStudies.map((cs) => (
              <div key={cs.org} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-2xl font-bold text-violet-950">{cs.outcome}</p>
                <p className="mt-1 text-sm font-medium text-gray-500">{cs.org}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">{cs.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-violet-50 p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-violet-950">Want to be our next success story?</h2>
            <p className="mt-3 text-gray-600">
              Book a demo to see how HomeHub can work for your organisation.
            </p>
            <div className="mt-6">
              <Button href="/demo">Book a Demo</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
