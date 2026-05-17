import { Container } from '@/components/Container'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'For Homeowners | HomeHub',
  description: 'HomeHub helps homeowners manage their property, access retrofit funding, and connect with local services — all through one easy-to-use app.',
}

const benefits = [
  {
    title: 'Property Management Hub',
    description: 'Keep all your property documents, warranties, and maintenance records in one organised, always-accessible place.',
  },
  {
    title: 'Retrofit & Funding Guidance',
    description: 'Discover which home improvement grants and schemes you may qualify for, from insulation to heat pumps and solar panels.',
  },
  {
    title: 'Energy Performance Insights',
    description: 'Understand your home\'s EPC rating and get personalised recommendations for improvements that save money and increase property value.',
  },
  {
    title: 'Trusted Contractor Network',
    description: 'Access a vetted network of local tradespeople, with reviews from your community to help you make informed decisions.',
  },
  {
    title: 'Home Maintenance Reminders',
    description: 'Never miss a boiler service, guttering check, or seasonal task with smart reminders tailored to your property.',
  },
  {
    title: 'Community Connection',
    description: 'Stay connected to your neighbourhood with local news, community alerts, and neighbour-to-neighbour support.',
  },
]

export default function HomeownersPage() {
  return (
    <>
      <Section first className="bg-violet-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Residents</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              For Homeowners
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Own your home, own your data. HomeHub gives homeowners the tools to manage their property smarter, access funding opportunities, and build community.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <AppStoreLink color="white" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Your home deserves smarter support
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Whether you&apos;re a first-time buyer or long-term homeowner, HomeHub helps you stay on top of your property and make the most of available support.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="mb-4 h-1 w-12 rounded-full bg-amber-400" />
                <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/residents/download-app">Download the App</Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
