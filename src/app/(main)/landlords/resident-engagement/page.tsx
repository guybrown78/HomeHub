import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'Resident Engagement | HomeHub for Landlords',
  description: 'Improve resident satisfaction and meet TSM requirements with HomeHub. A platform that makes meaningful engagement easy, measurable, and scalable.',
}

const features = [
  {
    title: 'Multi-Channel Communication',
    description: 'Reach residents via the app, push notifications, and in-app messaging — ensuring critical information gets through regardless of preference.',
  },
  {
    title: 'Satisfaction Surveys',
    description: 'Run TSM-aligned resident satisfaction surveys at scale, with automated analysis and reporting that saves your team hours of manual work.',
  },
  {
    title: 'Personalised Content',
    description: 'Deliver relevant information to the right residents — from maintenance notices to community events — based on their property and profile.',
  },
  {
    title: 'Engagement Analytics',
    description: 'Understand which residents are engaging, which aren\'t, and why. Use data to target support at those who need it most.',
  },
  {
    title: 'Resident Portal',
    description: 'Give every resident a self-service hub for documents, repair tracking, account management, and local community content.',
  },
  {
    title: 'Feedback Loops',
    description: 'Close the loop on resident feedback with visible follow-up actions, demonstrating that complaints and suggestions lead to real change.',
  },
]

export default function ResidentEngagementPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Landlords</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Resident Engagement
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Engaged residents are satisfied residents. HomeHub makes it easy to communicate, listen, and respond at scale — building the trust that drives long-term tenancy success.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/demo">Book a Demo</Button>
              <Button href="/platform/community" variant="outline" color="violet" className="border-white/30 text-white hover:border-white/60">
                Community Platform
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              From compliance checkbox to genuine connection
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              True resident engagement goes beyond newsletters and annual surveys. HomeHub gives you the infrastructure to build lasting relationships with everyone in your homes.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-4 h-1 w-12 rounded-full bg-amber-400" />
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
