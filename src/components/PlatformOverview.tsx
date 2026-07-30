import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import Link from 'next/link'
import {
  LuWrench,
  LuZap,
  LuMessageSquare,
  LuFileText,
  LuChevronRight,
} from 'react-icons/lu'

const modules = [
  {
    Icon: LuWrench,
    name: 'Resolve',
    tagline: 'Issue Management',
    description:
      'Report and manage repairs, damp, and mould quickly with a full audit trail from report to resolution.',
    href: '/platform/resolve',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    border: 'border-rose-100',
    hoverText: 'text-rose-700',
  },
  {
    Icon: LuZap,
    name: 'Energy',
    tagline: 'Energy Insights',
    description:
      "Help residents understand their energy usage, improve EPC ratings, and support retrofit programmes.",
    href: '/platform/energy',
    iconBg: 'bg-accent-50',
    iconColor: 'text-accent-700',
    border: 'border-accent-100',
    hoverText: 'text-accent-800',
  },
  {
    Icon: LuMessageSquare,
    name: 'Community',
    tagline: 'Resident Engagement',
    description:
      'Improve communication between landlords and residents with targeted messages and community updates.',
    href: '/platform/community',
    iconBg: 'bg-brand-50',
    iconColor: 'text-brand-700',
    border: 'border-brand-100',
    hoverText: 'text-brand-800',
  },
  {
    Icon: LuFileText,
    name: 'Documents',
    tagline: 'Home Information',
    description:
      'Give residents access to all the important information about their home in one easy-to-access place.',
    href: '/platform/resolve',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    border: 'border-emerald-100',
    hoverText: 'text-emerald-700',
  },
]

export function PlatformOverview() {
  return (
    <Section className="bg-bg py-20 sm:py-32">
      <Container>
        <FadeIn>
          <SectionHeader
            eyebrow="The Platform"
            heading="One platform, four powerful modules"
            description="Everything you need to manage homes, engage residents, and stay compliant — all working together."
            align="center"
          />
        </FadeIn>

        <FadeInStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((mod) => (
            <FadeInItem key={mod.name}>
            <div
              className={`group flex h-full flex-col rounded-2xl border ${mod.border} bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${mod.iconBg}`}
              >
                <mod.Icon
                  className={`h-5 w-5 ${mod.iconColor}`}
                  strokeWidth={1.75}
                />
              </div>

              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                {mod.tagline}
              </p>
              <h3 className="mt-1 text-xl font-bold text-fg">{mod.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {mod.description}
              </p>

              <div className="mt-5 flex-1" />

              <Link
                href={mod.href}
                className={`inline-flex items-center gap-1 text-sm font-semibold ${mod.hoverText} opacity-0 transition-all duration-200 group-hover:opacity-100`}
              >
                Learn more
                <LuChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </Section>
  )
}
