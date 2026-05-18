import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { LuShieldCheck, LuGlobe, LuLock } from 'react-icons/lu'

const organisations = [
  'Midland Heart',
  'Places for People',
  'L&Q Housing',
  'Clarion Housing',
  'Hyde Group',
  'Sanctuary Housing',
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
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-fg-subtle">
            Trusted by
          </p>
          <h2 className="mt-2 text-lg font-semibold text-fg-muted">
            Working with organisations across housing and retrofit
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {organisations.map((org) => (
            <span
              key={org}
              className="text-sm font-semibold text-fg-subtle transition-colors hover:text-fg-muted"
            >
              {org}
            </span>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-border pt-10 sm:flex-row sm:gap-12">
          {trust.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-fg-muted">
              <Icon className="h-4 w-4 text-brand-600" strokeWidth={2} />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
