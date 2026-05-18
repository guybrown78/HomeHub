import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'Community – Building Better Communities | HomeHub',
  description: 'Foster stronger communities with HomeHub Community. Enable resident communication, local news, and neighbourhood connections through one platform.',
}

const features = [
  {
    title: 'Community Noticeboard',
    description: 'Give housing providers a direct channel to residents for announcements, updates, and local news — cutting through the noise of email.',
  },
  {
    title: 'Resident Forums',
    description: 'Enable residents to connect with neighbours, share local knowledge, and build a sense of belonging in their community.',
  },
  {
    title: 'Events & Activities',
    description: 'Promote community events, resident meetings, and local activities directly through the app to drive engagement and attendance.',
  },
  {
    title: 'Neighbourhood Alerts',
    description: 'Keep residents informed about local disruptions, planned works, or safety notices with targeted push notifications.',
  },
  {
    title: 'Wellbeing Services',
    description: 'Signpost residents to local support services, food banks, mental health resources, and community groups with a single tap.',
  },
  {
    title: 'Resident Surveys',
    description: 'Gather structured feedback from residents to inform service improvements and demonstrate that their voices are heard.',
  },
]

export default function CommunityPage() {
  return (
    <>
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Platform</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Community
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Build stronger, more connected communities. HomeHub gives housing providers the tools to communicate meaningfully with residents and foster genuine neighbourhood belonging.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/book-demo">Book a Demo</Button>
              <Button href="/landlords/resident-engagement" variant="outline" color="violet" className="border-white/30 text-white hover:border-white/60">
                Resident Engagement
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              More than an app — a community platform
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Great housing is more than bricks and mortar. HomeHub Community helps you create environments where residents thrive together.
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
