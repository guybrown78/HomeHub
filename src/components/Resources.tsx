import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { LuZap, LuHouse, LuFileText, LuArrowRight } from 'react-icons/lu'

const resources = [
  {
    category: 'Energy Guide',
    categoryColor: 'bg-accent-100 text-accent-800',
    title: 'Understanding Your Energy Bill',
    description:
      'A plain-English guide to energy tariffs, usage charges, and practical steps to reduce costs in your home.',
    href: '/resources/guides',
    Icon: LuZap,
    iconColor: 'text-accent-700',
    iconBg: 'bg-accent-50',
  },
  {
    category: 'Insights',
    categoryColor: 'bg-brand-100 text-brand-700',
    title: 'Retrofit Roadmap for Housing Providers',
    description:
      'How housing associations can plan, fund, and deliver retrofit programmes that genuinely work for residents.',
    href: '/resources/insights',
    Icon: LuHouse,
    iconColor: 'text-brand-600',
    iconBg: 'bg-brand-50',
  },
  {
    category: 'Support Guide',
    categoryColor: 'bg-emerald-100 text-emerald-700',
    title: 'Home Support Guidance',
    description:
      'Helping residents access the support they need — from financial assistance to repairs and welfare services.',
    href: '/resources/guides',
    Icon: LuFileText,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
]

export function Resources() {
  return (
    <Section className="bg-bg py-20 sm:py-32">
      <Container>
        <FadeIn className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-subtle">
              Resources
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              Guides, insights and support
            </h2>
            <p className="mt-3 text-lg text-fg-muted">
              Practical resources for better home management.
            </p>
          </div>
          <div className="flex-none">
            <Button href="/resources/guides" variant="outline">
              Explore Resources
              <LuArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </FadeIn>

        <FadeInStagger className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {resources.map((resource) => (
            <FadeInItem key={resource.title}>
            <Link
              href={resource.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div
                    className={`inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl ${resource.iconBg}`}
                  >
                    <resource.Icon
                      className={`h-5 w-5 ${resource.iconColor}`}
                      strokeWidth={1.75}
                    />
                  </div>
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${resource.categoryColor}`}
                  >
                    {resource.category}
                  </span>
                </div>
                <h3 className="mt-2 font-bold text-fg transition-colors group-hover:text-brand-800">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {resource.description}
                </p>
              </div>
              <div className="flex-1" />
              <div className="border-t border-border px-6 py-4">
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 transition-all group-hover:gap-2">
                  Read more
                  <LuArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </Section>
  )
}
