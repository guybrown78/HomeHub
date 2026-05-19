import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import { Section } from '@/components/Section'
import { LuShieldCheck, LuGlobe, LuLock, LuTrophy, LuBuilding2 } from 'react-icons/lu'

const clients = [
  { name: 'Railway Housing Association', href: 'https://www.railwayha.co.uk/' },
  { name: 'Thirteen Group', href: 'http://thirteengroup.co.uk/' },
]

const awards = [
  { label: 'Tees Business Awards', sublabel: 'Winner' },
  { label: 'Retrofit Industry Awards', sublabel: 'Recognised' },
]

const trust = [
  { Icon: LuGlobe, label: 'UK Housing Focus' },
  { Icon: LuLock, label: 'GDPR Compliant' },
  { Icon: LuShieldCheck, label: 'Secure by Design' },
]

export function SocialProof() {
  return (
    <Section className="bg-bg-muted py-16 sm:py-20">
      <Container>
        {/* Clients */}
        <FadeIn className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-fg-subtle">
            Trusted by
          </p>
          <h2 className="mt-2 text-lg font-semibold text-fg-muted">
            Working with organisations across housing and retrofit
          </h2>
        </FadeIn>

        <FadeInStagger className="mt-8 flex flex-wrap items-center justify-center gap-4" stagger={0.1}>
          {clients.map((client) => (
            <FadeInItem key={client.name}>
              <a
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2.5 transition-all hover:border-brand-200 hover:shadow-sm"
              >
                <LuBuilding2 className="h-4 w-4 flex-none text-brand-400" strokeWidth={1.75} />
                <span className="text-sm font-semibold text-fg-muted">{client.name}</span>
              </a>
            </FadeInItem>
          ))}
        </FadeInStagger>

        {/* Awards */}
        <FadeIn delay={0.15} className="mt-10 border-t border-border pt-10">
          <p className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-fg-subtle">
            Awards &amp; Recognition
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {awards.map((award) => (
              <div
                key={award.label}
                className="flex items-center gap-3 rounded-2xl border border-accent-200 bg-accent-50 px-5 py-3"
              >
                <LuTrophy className="h-5 w-5 flex-none text-accent-600" strokeWidth={1.75} />
                <div>
                  <p className="text-sm font-semibold text-fg">{award.label}</p>
                  <p className="text-xs text-fg-muted">{award.sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Trust badges */}
        <FadeInStagger className="mt-10 flex flex-col items-center justify-center gap-6 border-t border-border pt-10 sm:flex-row sm:gap-12" stagger={0.1}>
          {trust.map(({ Icon, label }) => (
            <FadeInItem key={label} className="flex items-center gap-2 text-fg-muted">
              <Icon className="h-4 w-4 text-brand-600" strokeWidth={2} />
              <span className="text-sm font-medium">{label}</span>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </Section>
  )
}
