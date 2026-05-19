import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Callout } from '@/components/ui/Callout'
import { AppStoreLink } from '@/components/AppStoreLink'
import { GooglePlayLink } from '@/components/GooglePlayLink'

export const metadata = {
  title: 'For Homeowners | HomeHub',
  description:
    'Understand your energy usage, improve your home\'s efficiency, and access guidance and support — all from one place with HomeHub.',
}

const plannedSections = [
  {
    title: 'Energy bill understanding',
    description:
      'Clear, simple breakdowns of energy usage and estimated costs — helping homeowners understand what they are spending and where savings can be made.',
  },
  {
    title: 'Home efficiency insights',
    description:
      'EPC data, energy ratings, and practical improvement suggestions presented in plain language — making it easy to understand a property\'s efficiency potential.',
  },
  {
    title: 'Improvement guidance',
    description:
      'Step-by-step guidance on home improvements — from draught proofing and insulation to solar and heat pumps — including funding options where applicable.',
  },
  {
    title: 'Support & resources',
    description:
      'Access to guides, advice, and support resources relevant to homeownership — from maintenance tips to energy support schemes and local services.',
  },
  {
    title: 'Simple dashboard',
    description:
      'A clean, easy-to-read home overview showing energy performance, upcoming reminders, and useful information — designed for non-technical users.',
  },
  {
    title: 'App download',
    description:
      'A clear CTA encouraging homeowners to download the HomeHub app and start exploring their home data — with App Store and Google Play links.',
  },
]

export default function HomeownersPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Residents
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              For Homeowners
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Understand your energy usage, find ways to reduce your bills, and get guidance
              on improving your home — all from one simple app. HomeHub puts your home
              data in your pocket.
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
            This page is being developed. Full content, energy visuals,
            and homeowner-focused design will be added prior to launch.
          </Callout>

          <div className="mt-14">
            <SectionHeader
              eyebrow="Planned content"
              heading="What this page will contain"
              description="The Homeowners page will be calm, educational, and helpful — expanding HomeHub's audience beyond social housing and supporting energy-related SEO."
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
