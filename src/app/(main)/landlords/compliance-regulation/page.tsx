import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Callout } from '@/components/ui/Callout'
import { LuChevronRight } from 'react-icons/lu'

export const metadata = {
  title: 'Compliance & Regulation | HomeHub for Landlords',
  description:
    'Stay on top of Awaab\'s Law, damp and mould obligations, and housing standards with HomeHub\'s built-in audit trails, compliance tooling, and evidence-based reporting.',
}

const plannedSections = [
  {
    title: "Awaab's Law compliance",
    description:
      "Track investigation and remediation timelines against Awaab's Law requirements. Automated alerts notify your team before deadlines are breached.",
  },
  {
    title: 'Damp & mould tracking',
    description:
      'Structured reporting for damp and mould issues with guided photo prompts, severity categorisation, and escalation workflows for urgent cases.',
  },
  {
    title: 'Evidence-based audit trails',
    description:
      'Every action — report, inspection, communication, remediation, sign-off — is logged with timestamps and responsible parties for regulatory defence.',
  },
  {
    title: 'Communication records',
    description:
      'A full history of resident communications linked to each case, demonstrating responsiveness and compliance with Housing Ombudsman expectations.',
  },
  {
    title: 'Regulatory reporting',
    description:
      'Export compliance data for regulatory submissions, internal governance reviews, and Housing Ombudsman investigations in structured, auditable formats.',
  },
  {
    title: 'Visibility & accountability dashboard',
    description:
      'Portfolio-wide compliance status at a glance — open cases, approaching deadlines, resolved issues, and team performance across all properties.',
  },
]

export default function ComplianceRegulationPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Landlords
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Compliance &amp; Regulation
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Stay on top of your obligations. HomeHub gives housing providers the structure,
              evidence, and visibility they need to meet Awaab&apos;s Law, damp and mould
              requirements, and housing standards — with confidence.
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
            This page is being developed. Full content, compliance
            dashboard visuals, and audit timeline designs will be added prior to launch.
          </Callout>

          <div className="mt-14">
            <SectionHeader
              eyebrow="Planned content"
              heading="What this page will contain"
              description="The Compliance & Regulation page will communicate confidence and structure — showing housing providers how HomeHub makes compliance systematic, not manual."
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
