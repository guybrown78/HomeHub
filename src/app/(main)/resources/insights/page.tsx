import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'Insights & Research | HomeHub Resources',
  description: 'Housing sector research, data, and analysis from the HomeHub team. Explore trends in resident engagement, compliance, retrofit, and digital housing.',
}

const insights = [
  {
    category: 'Resident Engagement',
    date: 'April 2026',
    title: 'The State of Digital Resident Engagement in UK Social Housing',
    description: 'Our annual survey of 2,400 residents and 180 housing providers reveals the growing gap between digital expectations and current service delivery — and what leading organisations are doing differently.',
  },
  {
    category: 'Compliance',
    date: 'March 2026',
    title: 'TSM Readiness Report: Where Are Housing Providers Falling Short?',
    description: 'Analysis of Tenant Satisfaction Measure compliance across 150 housing associations reveals the metrics most at risk — and the technology interventions making a measurable difference.',
  },
  {
    category: 'Retrofit',
    date: 'February 2026',
    title: 'Retrofit Reality: Closing the Gap Between Ambition and Delivery',
    description: 'Despite significant funding available, retrofit delivery in the social housing sector remains far below target. We examine the barriers and what needs to change.',
  },
  {
    category: 'Technology',
    date: 'January 2026',
    title: 'AI in Housing: From Hype to Practical Application',
    description: 'A practical look at where AI is genuinely adding value in housing management today — from repairs triage to fuel poverty detection — and where the risks lie.',
  },
  {
    category: 'Community',
    date: 'December 2025',
    title: 'The Social Value of Connected Communities',
    description: 'New research quantifies the social value created when residents are digitally connected to their community and housing provider — with implications for ESG reporting and funding bids.',
  },
  {
    category: 'Energy',
    date: 'November 2025',
    title: 'Fuel Poverty and the Role of Housing Providers',
    description: 'With energy costs remaining elevated, we examine how data from housing management platforms can help providers identify vulnerable residents before crisis hits.',
  },
]

export default function InsightsPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Resources</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Insights
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Research, data, and analysis to help housing professionals navigate a rapidly changing sector. From compliance to community, we explore what matters most.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {insights.map((insight) => (
              <article key={insight.title} className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                    {insight.category}
                  </span>
                  <span className="text-xs text-gray-400">{insight.date}</span>
                </div>
                <h2 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-brand-950">{insight.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{insight.description}</p>
                <p className="mt-6 text-xs font-semibold text-brand-950">Read insight →</p>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/demo">Talk to Our Team</Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
