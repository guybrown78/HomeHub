import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'

export const metadata = {
  title: 'For Contractors | HomeHub',
  description: 'Join the HomeHub contractor network. Receive job instructions, manage your schedule, and communicate with housing providers through one simple platform.',
}

const benefits = [
  {
    title: 'Job Management Dashboard',
    description: 'View all assigned jobs in one place, with clear instructions, property details, and resident contact information ready when you need it.',
  },
  {
    title: 'Digital Job Sheets',
    description: 'Complete digital job sheets on site, capture photos of completed work, and submit evidence of compliance with a few taps.',
  },
  {
    title: 'Scheduling & Calendar',
    description: 'Manage your schedule directly through the platform, with clear visibility of upcoming appointments and any changes in real time.',
  },
  {
    title: 'Resident Communication',
    description: 'Message residents ahead of appointments, confirm arrival times, and keep them informed without sharing personal contact details.',
  },
  {
    title: 'Compliance Documentation',
    description: 'Store and submit safety certificates, COSHH records, and completion reports digitally — reducing paperwork and admin overhead.',
  },
  {
    title: 'Performance Tracking',
    description: 'View your completion rates, resident satisfaction scores, and response time metrics to demonstrate value and win more work.',
  },
]

export default function ContractorsPage() {
  return (
    <>
      <Section first className="bg-violet-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">Residents</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              For Contractors
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              Spend less time on admin and more time doing great work. HomeHub connects you directly with housing providers and gives you everything you need to manage jobs efficiently.
            </p>
            <div className="mt-10">
              <Button href="/contact">Get in Touch</Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-gray-50 py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Built for trades professionals who value their time
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              HomeHub gives you everything you need to deliver outstanding work — from job briefing to completion sign-off — without the paperwork burden.
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

          <div className="mt-16 rounded-2xl bg-violet-50 p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-violet-950">Join our contractor network</h2>
            <p className="mt-3 text-gray-600">
              Interested in becoming an approved HomeHub contractor? Get in touch with our team.
            </p>
            <div className="mt-6">
              <Button href="/contact">Contact Us</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
