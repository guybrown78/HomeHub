import { Container } from '@/components/Container'
import Link from 'next/link'
import { LuBuilding2, LuSmartphone, LuHouse, LuChevronRight } from 'react-icons/lu'

const audiences = [
  {
    id: 'landlords',
    theme: 'brand' as const,
    Icon: LuBuilding2,
    label: 'For Landlords',
    headline: 'Manage smarter, deliver better.',
    description:
      'Improve resident engagement, reduce admin, and stay compliant across your entire housing portfolio.',
    cta: 'Explore for Landlords',
    href: '/landlords/resident-engagement',
    iconBg: 'bg-white/10',
    iconColor: 'text-accent-300',
  },
  {
    id: 'tenants',
    theme: null,
    Icon: LuSmartphone,
    label: 'For Tenants',
    headline: 'Your home, your way.',
    description:
      'Report issues, access support, and manage your home — all from your phone, without the phone calls.',
    cta: 'Download the App',
    href: '/residents/download-app',
    iconBg: 'bg-brand-50',
    iconColor: 'text-brand-700',
  },
  {
    id: 'homeowners',
    theme: 'accent' as const,
    Icon: LuHouse,
    label: 'For Homeowners',
    headline: 'Understand and improve your home.',
    description:
      'Understand your energy usage, reduce bills, and get practical guidance on improving your home.',
    cta: 'Explore HomeHub',
    href: '/residents/homeowners',
    iconBg: 'bg-brand-100',
    iconColor: 'text-brand-900',
  },
]

export function AudienceRouting() {
  return (
    <section className="-mt-10 rounded-t-5xl bg-bg-muted py-20 sm:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Built for everyone involved in housing
          </h2>
          <p className="mt-4 text-lg text-fg-muted">
            Whether you manage properties, rent your home, or own it — HomeHub
            is designed for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {audiences.map((audience) => (
            <div
              key={audience.id}
              data-theme={audience.theme ?? undefined}
              className="group flex flex-col overflow-hidden rounded-3xl bg-bg p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${audience.iconBg}`}
              >
                <audience.Icon
                  className={`h-6 w-6 ${audience.iconColor}`}
                  strokeWidth={1.5}
                />
              </div>

              <span className="mt-5 text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                {audience.label}
              </span>
              <h3 className="mt-2 text-xl font-bold text-fg">
                {audience.headline}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {audience.description}
              </p>

              <div className="mt-6 flex-1" />

              <Link
                href={audience.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-fg transition-opacity hover:opacity-60"
              >
                {audience.cta}
                <LuChevronRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
