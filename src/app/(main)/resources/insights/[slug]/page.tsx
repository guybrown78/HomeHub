import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { FadeIn } from '@/components/FadeIn'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { InsightArticleBody } from '@/components/insights/InsightArticleBody'
import { InsightsClosingCta } from '@/components/insights/InsightsClosingCta'
import { insights, getInsightBySlug, formatMonthYear } from '@/data/insights'
import { LuArrowLeft } from 'react-icons/lu'

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const insight = getInsightBySlug(params.slug)
  if (!insight) return {}

  return {
    title: insight.seoTitle,
    description: insight.metaDescription,
  }
}

export default function InsightArticlePage({ params }: { params: { slug: string } }) {
  const insight = getInsightBySlug(params.slug)
  if (!insight) notFound()

  return (
    <>
      <Section first className="bg-bg py-16 sm:py-24">
        <Container>
          <FadeIn>
            <Breadcrumb
              items={[
                { label: 'Resources' },
                { label: 'Insights', href: '/resources/insights' },
                { label: insight.title },
              ]}
            />
            <span className="mt-6 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {insight.category}
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
              {insight.title}
            </h1>
            <p className="mt-3 text-sm text-fg-subtle">{formatMonthYear(insight.publishedAt)}</p>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-fg-muted">{insight.summary}</p>
          </FadeIn>

          <FadeIn delay={0.1} className="mt-10 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={insight.image}
              alt={insight.imageAlt}
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 768px, 100vw"
              priority
            />
          </FadeIn>

          <div className="mx-auto mt-12 max-w-3xl">
            <InsightArticleBody blocks={insight.content} />

            <div className="mt-12 rounded-2xl border border-border bg-card-muted p-6">
              <p className="text-sm text-fg-muted">
                See how HomeHub&rsquo;s{' '}
                <Link
                  href={insight.relatedPlatformUrl}
                  className="font-medium text-brand-700 underline hover:text-brand-800"
                >
                  {insight.relatedPlatform}
                </Link>{' '}
                platform supports this in practice. You may also find{' '}
                <Link
                  href={insight.relatedLandlordUrl}
                  className="font-medium text-brand-700 underline hover:text-brand-800"
                >
                  {insight.relatedLandlordPage}
                </Link>{' '}
                useful.
              </p>
            </div>

            <Link
              href="/resources/insights"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              <LuArrowLeft className="h-4 w-4" strokeWidth={1.75} />
              View All Insights
            </Link>
          </div>
        </Container>
      </Section>

      <InsightsClosingCta heading={insight.ctaHeading} description={insight.ctaDescription} />
    </>
  )
}
