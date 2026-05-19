import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Callout } from '@/components/ui/Callout'
import { LuChevronRight } from 'react-icons/lu'

export const metadata = {
  title: 'For Contractors | HomeHub',
  description:
    'A future-facing landing page for contractor and retrofit partnerships — supporting collaboration, resident engagement during works, and programme coordination.',
}

const plannedSections = [
  {
    title: 'Contractor collaboration',
    description:
      'How HomeHub connects approved contractors with housing providers — shared job visibility, appointment management, and completion tracking in one place.',
  },
  {
    title: 'Retrofit support',
    description:
      'Tools for retrofit contractors to coordinate works, communicate with residents, and capture evidence for programme reporting and funding submissions.',
  },
  {
    title: 'Resident engagement during works',
    description:
      'How HomeHub supports resident communication before and during contractor visits — reducing no-access rates, managing expectations, and improving satisfaction.',
  },
  {
    title: 'Communication visibility',
    description:
      'Shared communication records between contractors and housing providers — ensuring everyone has the same information and accountability is clear.',
  },
  {
    title: 'Programme coordination',
    description:
      'How HomeHub supports multi-property retrofit and repair programmes — tracking progress, resident readiness, and works status across large-scale projects.',
  },
  {
    title: 'Partnership pathway',
    description:
      'An early signal of HomeHub\'s ambition to build a formal contractor and retrofit partner network — with an invitation to start a conversation.',
  },
]

export default function ContractorsPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Partners
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              For Contractors
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              HomeHub is building a contractor and retrofit partner network. Work alongside
              housing providers to deliver better outcomes for residents — with shared
              visibility, coordinated communication, and programme-level reporting.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" color="accent">
                Get in Touch
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button
                href="/partners"
                variant="outline"
                color="violet"
                className="border-white/30 text-white hover:border-white/60"
              >
                Our Partners
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-muted py-16 sm:py-24">
        <Container>
          <Callout variant="neutral" title="Page in development">
            This page is being developed. This is an early-stage,
            future-facing page — full content and design will be developed as the contractor
            partnership programme matures.
          </Callout>

          <div className="mt-14">
            <SectionHeader
              eyebrow="Planned content"
              heading="What this page will contain"
              description="The Contractors page will be lightweight but forward-looking — signalling HomeHub's ambition to build a contractor network while supporting early partnership conversations."
            />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {plannedSections.map((section) => (
                <Card key={section.title}>
                  <h3 className="text-base font-semibold text-fg">{section.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {section.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
