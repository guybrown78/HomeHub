'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LuArrowRight } from 'react-icons/lu'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import { CategoryFilter } from '@/components/insights/CategoryFilter'
import { type Insight, formatMonthYear } from '@/data/insights'

const ALL = 'All Insights'

export function InsightsBrowser({
  insights,
  categories,
  featured,
}: {
  insights: Insight[]
  categories: string[]
  featured: Insight
}) {
  const [active, setActive] = useState(ALL)

  const showFeatured = active === ALL || active === featured.category
  const gridInsights = insights.filter((insight) => {
    if (insight.slug === featured.slug && active === ALL) return false
    return active === ALL || insight.category === active
  })

  return (
    <>
      <FadeIn>
        <CategoryFilter categories={[ALL, ...categories]} active={active} onChange={setActive} />
      </FadeIn>

      {showFeatured && (
        <FadeIn className="mt-10">
          <Link
            href={`/resources/insights/${featured.slug}`}
            className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md lg:grid-cols-2"
          >
            <div className="aspect-[16/9] overflow-hidden lg:aspect-auto">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                  {featured.category}
                </span>
                <span className="text-xs text-fg-subtle">{formatMonthYear(featured.publishedAt)}</span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-fg transition-colors group-hover:text-brand-800 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 leading-relaxed text-fg-muted">{featured.summary}</p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2">
                Read insight
                <LuArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        </FadeIn>
      )}

      {gridInsights.length > 0 ? (
        <FadeInStagger className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gridInsights.map((insight) => (
            <FadeInItem key={insight.slug}>
              <Link
                href={`/resources/insights/${insight.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <Image
                    src={insight.image}
                    alt={insight.imageAlt}
                    className="h-full w-full object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                      {insight.category}
                    </span>
                    <span className="text-xs text-fg-subtle">{formatMonthYear(insight.publishedAt)}</span>
                  </div>
                  <h3 className="mt-3 font-bold text-fg transition-colors group-hover:text-brand-800">
                    {insight.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{insight.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2">
                    Read insight
                    <LuArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </FadeInItem>
          ))}
        </FadeInStagger>
      ) : (
        <p className="mt-10 text-fg-muted">No insights in this category yet.</p>
      )}
    </>
  )
}
