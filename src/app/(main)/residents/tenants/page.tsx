import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Callout } from '@/components/ui/Callout'
import { AppStoreLink } from '@/components/AppStoreLink'
import { GooglePlayLink } from '@/components/GooglePlayLink'

export const metadata = {
  title: 'For Tenants | HomeHub',
  description:
    'Report issues, track repairs, access support, and stay connected with your housing provider — all from the HomeHub app.',
}

const plannedSections = [
  {
    title: 'Reporting issues',
    description:
      'How tenants use the app to report repairs, damp, and other issues in seconds — with photo uploads, descriptions, and instant confirmation that their report has been received.',
  },
  {
    title: 'Tracking repairs',
    description:
      'Real-time status updates that keep tenants informed at every stage — from initial report through contractor assignment to final resolution.',
  },
  {
    title: 'Communicating with your landlord',
    description:
      'Two-way messaging between tenants and housing teams — making it easy to ask questions, share updates, and receive important information.',
  },
  {
    title: 'Support & guidance',
    description:
      'Access to energy advice, home maintenance guidance, and support resources — all tailored to the specific property and tenancy.',
  },
  {
    title: 'Notifications & updates',
    description:
      'Timely notifications for appointment confirmations, repair updates, important notices, and community announcements — so tenants always know what is happening.',
  },
  {
    title: 'App download',
    description:
      'A prominent, easy-to-follow CTA guiding tenants to download HomeHub from the App Store or Google Play — with QR code and direct links.',
  },
]

export default function TenantsPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Residents
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              For Tenants
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Report issues, track repairs, and stay connected with your housing provider —
              all from your phone. HomeHub makes it simple to feel heard, informed, and
              supported in your home.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <AppStoreLink color="white" />
              <GooglePlayLink color="white" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-muted py-16 sm:py-24">
        <Container>
          <Callout variant="neutral" title="Page in development">
            This page is being developed. Full content, mobile app
            visuals, and resident-focused design will be added prior to launch.
          </Callout>

          <div className="mt-14">
            <SectionHeader
              eyebrow="Planned content"
              heading="What this page will contain"
              description="The Tenants page will be simple, friendly, and app-focused — making HomeHub feel approachable and driving downloads among residents."
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
