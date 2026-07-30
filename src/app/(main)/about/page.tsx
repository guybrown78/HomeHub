import Link from 'next/link'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { PlatformOverview } from '@/components/PlatformOverview'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import {
  LuChevronRight,
  LuCircleAlert,
  LuEye,
  LuShieldCheck,
  LuAccessibility,
  LuHeartHandshake,
  LuGraduationCap,
} from 'react-icons/lu'

export const metadata = {
  title: 'About HomeHub',
  description:
    'We\'re building a platform that makes it easier for housing providers and residents to connect, communicate, and solve problems together.',
}

const founderCredentials = [
  'PAS 2035-Qualified Retrofit Coordinator',
  'National Energy Consultant of the Year',
  'PhD Researcher, Domestic Retrofit Outcomes',
]

const problems = [
  'Residents report an issue and have no way to track what happens next',
  'Repairs, compliance and communication are managed across disconnected systems',
  "Evidence for Awaab's Law, HHSRS and the Decent Homes Standard is scattered across calls, emails and spreadsheets",
  'Tenant Satisfaction Measures depend on data that is hard to pull together',
  'Damp and mould reports go unactioned without a clear paper trail',
  'Vulnerable and digitally excluded residents are the hardest to reach and the easiest to miss',
]

const values = [
  {
    Icon: LuEye,
    title: 'Transparency',
    description:
      'Housing providers and residents should see the same information about what is happening, and why.',
  },
  {
    Icon: LuShieldCheck,
    title: 'Evidence you can stand behind',
    description:
      'Every report, message and outcome is recorded, so decisions and compliance evidence hold up under scrutiny.',
  },
  {
    Icon: LuAccessibility,
    title: 'Built for everyone',
    description:
      'Digital tools should work for every resident, not just the digitally confident.',
  },
  {
    Icon: LuHeartHandshake,
    title: 'Resident outcomes first',
    description:
      "Features earn their place by improving a resident's home, not just a landlord's dashboard.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section first className="bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              About
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About HomeHub
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
              We are building a platform that makes it easier for housing providers and
              residents to connect, communicate, and solve problems together. Better housing
              starts with better communication.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/book-demo" color="accent">
                Book a Demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                color="violet"
                className="border-white/30 text-white hover:border-white/60"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Mission & story ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                Our story
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Built from years spent solving this problem on the ground
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                HomeHub was founded by a PAS 2035-qualified retrofit coordinator and national
                &ldquo;Energy Consultant of the Year&rdquo;, currently completing PhD research
                into domestic retrofit outcomes in social housing.
              </p>
              <p className="mt-4 text-fg-muted">
                Before HomeHub existed, that experience meant coordinating the Warm Homes Social
                Housing Fund Wave 3 consortium &mdash; delivering £44 million of retrofit
                investment across the North East, with a further £21 million across North
                Yorkshire.
              </p>
              <p className="mt-4 text-fg-muted">
                Running programmes at that scale surfaced the same problem again and again:
                residents left waiting for updates, landlords managing evidence across
                disconnected spreadsheets and inboxes, and good work that was hard to prove after
                the fact. HomeHub was built to close that gap &mdash; turning delivery experience
                into a platform, rather than starting from a blank page.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <Card className="border-brand-100 bg-card p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                  Founder background
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {founderCredentials.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 space-y-3 border-t border-border pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-fg-muted">North East retrofit investment</span>
                    <span className="text-sm font-semibold text-fg">£44m</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-fg-muted">North Yorkshire retrofit investment</span>
                    <span className="text-sm font-semibold text-fg">£21m</span>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── The problem we are solving ── */}
      <Section data-theme="brand-light" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="The problem"
              heading="Housing communication is still stuck in phone calls, letters and spreadsheets"
              description="Compliance pressure keeps growing, but the tools most housing providers rely on to communicate with residents and prove what happened haven't kept up."
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2"
            stagger={0.06}
          >
            {problems.map((item) => (
              <FadeInItem key={item}>
                <div className="flex h-full gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <LuCircleAlert className="mt-0.5 h-4 w-4 flex-none text-brand-600" strokeWidth={1.75} />
                  <span className="text-sm leading-relaxed text-fg-muted">{item}</span>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── Platform vision ── */}
      <PlatformOverview />

      {/* ── The team ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                Who&rsquo;s behind it
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Led by hands-on retrofit and housing delivery experience
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                HomeHub is led by its founder &mdash; a retrofit coordinator and energy consultant
                who has spent a career working inside the social housing sector, not just building
                software for it.
              </p>
              <p className="mt-4 text-fg-muted">
                As HomeHub grows, so will the team behind it. If you want to help build it,
                we&rsquo;d like to hear from you.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="outline">
                  Get in Touch
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <Card theme="brand" className="p-8 sm:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <LuGraduationCap className="h-7 w-7 text-accent-400" strokeWidth={1.5} />
                </div>
                <p className="mt-5 text-lg font-semibold text-fg">
                  Currently completing PhD research into domestic retrofit outcomes in social
                  housing.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  That research sits alongside day-to-day work on HomeHub, keeping the platform
                  grounded in what actually improves outcomes for residents and housing
                  providers, not just what looks good in a dashboard.
                </p>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Values ── */}
      <Section data-theme="brand-light" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Values"
              heading="The principles behind how we build"
              description="These are the things we check every feature against before it ships."
              align="center"
            />
          </FadeIn>

          <FadeInStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {values.map(({ Icon, title, description }) => (
              <FadeInItem key={title}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                    <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-fg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{description}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── Get involved ── */}
      <Section data-theme="accent" className="bg-bg py-20 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-fg sm:text-4xl">
              Want to help shape what HomeHub becomes?
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              Whether you&rsquo;re a housing provider exploring the platform, a resident with
              feedback, or someone who wants to join the team &mdash; we&rsquo;d like to hear
              from you.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/book-demo">
                Book a Demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline">
                Get in Touch
              </Button>
            </div>
            <p className="mt-8 text-sm text-fg-muted">
              Exploring a partnership instead? Visit our{' '}
              <Link href="/partners" className="font-medium text-brand-700 underline hover:text-brand-800">
                Partners
              </Link>{' '}
              page.
            </p>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
