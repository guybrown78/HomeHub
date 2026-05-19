import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Callout } from '@/components/ui/Callout'
import { LuChevronRight } from 'react-icons/lu'

export const metadata = {
  title: 'Repairs & Resolution | HomeHub for Landlords',
  description:
    'Transform your repairs process with HomeHub. Faster reporting, smarter triage, and transparent tracking that residents and housing teams both love.',
}

const plannedSections = [
  {
    title: 'Repairs workflow overview',
    description:
      'An end-to-end view of how HomeHub handles the repairs lifecycle — from resident report to contractor assignment to final sign-off — with full audit trail.',
  },
  {
    title: 'Faster issue resolution',
    description:
      'How smart triage and contractor coordination reduces the time from first report to resolution, with real-world benchmarks and measurable outcomes.',
  },
  {
    title: 'Reduced inbound calls',
    description:
      'Digital reporting and automated status updates mean residents no longer need to call to check on repairs — demonstrated through usage data and case examples.',
  },
  {
    title: 'Portfolio-wide visibility',
    description:
      'A single dashboard view across all properties — open repairs, approaching deadlines, contractor performance, and compliance status in one place.',
  },
  {
    title: 'Resident communication',
    description:
      'How HomeHub keeps residents informed at every stage of the repairs journey — reducing frustration and building trust through transparency.',
  },
  {
    title: 'Escalation tracking',
    description:
      'Structured escalation workflows that flag overdue repairs, repeat issues, and compliance risks before they become formal complaints or regulatory problems.',
  },
]

export default function RepairsResolutionPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Landlords
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Repairs &amp; Resolution
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              A faster, fairer repairs service that works for residents and housing teams alike.
              Less admin, fewer missed appointments, and better outcomes — with portfolio-wide
              visibility from first report to final sign-off.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/book-demo" color="accent">
                Book a Demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button
                href="/platform/resolve"
                variant="outline"
                color="violet"
                className="border-white/30 text-white hover:border-white/60"
              >
                See Resolve Platform
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-muted py-16 sm:py-24">
        <Container>
          <Callout variant="neutral" title="Page in development">
            This page is being developed. Full content, repairs dashboard
            visuals, and workflow diagrams will be added prior to launch.
          </Callout>

          <div className="mt-14">
            <SectionHeader
              eyebrow="Planned content"
              heading="What this page will contain"
              description="The Repairs & Resolution page will complement the Resolve platform page with a stronger operational focus — demonstrating measurable efficiency gains for housing provider teams."
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
