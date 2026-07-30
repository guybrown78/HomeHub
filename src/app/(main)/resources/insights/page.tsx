import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { FadeIn } from '@/components/FadeIn'
import { InsightsBrowser } from '@/components/insights/InsightsBrowser'
import { InsightsClosingCta } from '@/components/insights/InsightsClosingCta'
import { insights, insightCategories, getFeaturedInsight } from '@/data/insights'

export const metadata = {
  title: 'Social Housing Insights | HomeHub',
  description:
    'Explore practical HomeHub insights covering resident engagement, repairs, compliance, retrofit, fuel poverty and home energy performance in UK social housing.',
}

export default function InsightsPage() {
  const featured = getFeaturedInsight()

  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <FadeIn className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">Resources</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Insights
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Explore the issues shaping social housing services, from resident engagement and
              repairs to retrofit, home energy and community support. HomeHub Insights brings
              together practical thinking for councils, landlords, housing teams and their
              partners.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="bg-bg py-16 sm:py-24">
        <Container>
          <InsightsBrowser insights={insights} categories={insightCategories} featured={featured} />
        </Container>
      </Section>

      <InsightsClosingCta
        heading="Turn insight into better resident services"
        description="See how HomeHub helps housing providers improve communication, resolve issues, understand home energy performance and keep residents better informed."
        secondaryButton={{ label: 'Explore the HomeHub Platform', href: '/' }}
      />
    </>
  )
}
