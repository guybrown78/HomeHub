import Image from 'next/image'
import Link from 'next/link'
import tenantSupportScreen from '@/images/tenant-support.png'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Callout } from '@/components/ui/Callout'
import { PhoneFrame } from '@/components/PhoneFrame'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import {
  LuChevronRight,
  LuArrowRight,
  LuBell,
  LuHardHat,
  LuShield,
  LuMapPin,
  LuMessageCircle,
  LuListChecks,
  LuMegaphone,
  LuHistory,
  LuLightbulb,
  LuUsers,
  LuBookOpen,
  LuAward,
  LuMail,
  LuFlaskConical,
  LuShare2,
  LuLanguages,
  LuFocus,
  LuRoute,
  LuHandshake,
  LuClock,
  LuEye,
  LuLayers,
  LuCircleCheck,
  LuChartBar,
  LuLayoutDashboard,
} from 'react-icons/lu'

export const metadata = {
  title: 'Community – Resident Communication & Engagement | HomeHub',
  description:
    'Keep residents informed, involved and connected with HomeHub Community — announcements, messaging, participation and evidence of social value in one place.',
}

// ─── Inline components ───────────────────────────────────────────────────────

function PlaceholderPanel({
  description,
  aspect = 'aspect-[4/3]',
}: {
  description: string
  aspect?: string
}) {
  return (
    <div
      className={`flex ${aspect} items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-white/5 p-8 text-center`}
    >
      <div>
        <LuUsers className="mx-auto h-10 w-10 text-white/30" strokeWidth={1.5} />
        <p className="mt-3 text-sm font-medium leading-snug text-white/50">{description}</p>
      </div>
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const introPoints = [
  {
    Icon: LuMegaphone,
    title: 'One reliable place',
    description: 'Publish information in one reliable place.',
  },
  {
    Icon: LuMessageCircle,
    title: 'Encourage responses',
    description: 'Encourage residents to respond and contribute.',
  },
  {
    Icon: LuHandshake,
    title: 'Promote local support',
    description: 'Promote local support, services and events.',
  },
  {
    Icon: LuListChecks,
    title: 'Build evidence',
    description: 'Build evidence of participation and activity.',
  },
]

const announcementPoints = [
  {
    Icon: LuBell,
    title: 'Service updates',
    description:
      'Keep residents informed about changes to services, opening hours, planned activity or local disruption.',
  },
  {
    Icon: LuHardHat,
    title: 'Planned works',
    description:
      'Explain what work is taking place, why it is needed and what residents should expect next.',
  },
  {
    Icon: LuShield,
    title: 'Safety information',
    description: 'Share clear guidance and important notices in a place residents can return to.',
  },
  {
    Icon: LuMapPin,
    title: 'Local opportunities',
    description:
      'Promote events, training, support schemes and activities taking place in the area.',
  },
]

const messagingPoints = [
  {
    Icon: LuMessageCircle,
    title: 'Relevant information',
    description: 'Share updates connected to the resident, their home or their local area.',
  },
  {
    Icon: LuListChecks,
    title: 'Clear next steps',
    description:
      'Help residents understand whether they need to read, respond, attend or take action.',
  },
  {
    Icon: LuMegaphone,
    title: 'Opportunities to contribute',
    description: 'Invite residents to share ideas, feedback, questions or experiences.',
  },
  {
    Icon: LuHistory,
    title: 'A more consistent record',
    description: 'Keep important updates and activity within a clearer digital journey.',
  },
]

const engagementPoints = [
  {
    Icon: LuLightbulb,
    title: 'Resident ideas',
    description: 'Give people a simple route to share useful suggestions and practical knowledge.',
  },
  {
    Icon: LuUsers,
    title: 'Local participation',
    description: 'Promote events, programmes and activities that residents can join.',
  },
  {
    Icon: LuBookOpen,
    title: 'Resident stories',
    description: 'Show the real experiences and contributions behind community activity.',
  },
  {
    Icon: LuAward,
    title: 'Recognition',
    description: 'Acknowledge residents who contribute ideas that provide genuine value.',
  },
]

const tipSteps = [
  {
    number: '01',
    Icon: LuMail,
    title: 'Send in a tip',
    description: 'A resident emails HomeHub with an energy-saving idea they use at home.',
  },
  {
    number: '02',
    Icon: LuFlaskConical,
    title: 'HomeHub tests it',
    description: 'The idea is reviewed and tested to see whether it provides a practical benefit.',
  },
  {
    number: '03',
    Icon: LuShare2,
    title: 'Share what works',
    description:
      'Successful tips can be shared with other residents, and the contributor may receive a reward.',
  },
]

const digitalInclusionPoints = [
  {
    Icon: LuLanguages,
    title: 'Plain language',
    description: 'Present information in a way that is easier to read and understand.',
  },
  {
    Icon: LuFocus,
    title: 'Focused content',
    description: 'Help residents find relevant updates without searching across several different channels.',
  },
  {
    Icon: LuRoute,
    title: 'Simple journeys',
    description: 'Reduce unnecessary steps between receiving information and knowing what to do next.',
  },
  {
    Icon: LuHandshake,
    title: 'Part of a wider approach',
    description: 'Use HomeHub alongside appropriate offline communication and resident support.',
  },
]

const trustPoints = [
  {
    Icon: LuMessageCircle,
    title: 'Explain what is happening',
    description: 'Give residents enough context to understand an update or activity.',
  },
  {
    Icon: LuClock,
    title: 'Set expectations',
    description: 'Make the next step, timescale or action clearer where this information is available.',
  },
  {
    Icon: LuEye,
    title: 'Keep information visible',
    description: 'Allow residents to return to important updates when they need them.',
  },
  {
    Icon: LuLayers,
    title: 'Strengthen internal consistency',
    description: 'Give housing teams a shared place for approved resident information.',
  },
]

const socialValueExamples = [
  'Announcements and resident updates published',
  'Local events or programmes promoted',
  'Resident responses and contributions received',
  'Participation in community initiatives',
  'Energy-saving tips submitted and tested',
  'Resident stories and approved testimonials collected',
  'Support services promoted through the app',
  'Examples of resident recognition or rewards',
  'Activity linked to particular neighbourhoods or programmes',
  'Evidence used within internal or external reports',
]

const benefitCards = [
  {
    Icon: LuBell,
    title: 'Keep residents informed',
    description: 'Publish timely updates in one reliable place residents can return to.',
  },
  {
    Icon: LuUsers,
    title: 'Encourage participation',
    description: 'Give residents simple ways to contribute ideas, stories and feedback.',
  },
  {
    Icon: LuLayoutDashboard,
    title: 'Improve consistency',
    description: 'Help housing teams manage approved information and reduce gaps between messages.',
  },
  {
    Icon: LuChartBar,
    title: 'Demonstrate activity',
    description: 'Gather clearer evidence of announcements, initiatives, contributions and local support.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CommunityPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section first className="overflow-hidden bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Platform
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Keep residents informed, involved and connected
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
                Share important updates, invite participation and build a clearer picture of
                resident activity through one accessible community space.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/book-demo" color="accent">
                  Book a demo
                  <LuChevronRight className="ml-0.5 h-4 w-4" />
                </Button>
                <Button
                  href="/"
                  variant="outline"
                  color="violet"
                  className="border-white/30 text-white hover:border-white/60"
                >
                  Explore the HomeHub platform
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <Image
                  src={tenantSupportScreen}
                  alt="Tenant support and messaging screen in the HomeHub app"
                />
              </PhoneFrame>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Intro ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              heading="More than a place to post updates"
              description="Resident communication can easily become spread across letters, emails, websites, social media and local notices. Important information is missed, responses are harder to manage and housing teams have limited visibility of what residents have seen or acted on. HomeHub Community brings information, participation and local support into one clear resident experience — helping housing providers share timely updates, promote services and initiatives, collect resident contributions and build a more consistent record of their community activity."
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2"
            stagger={0.08}
          >
            {introPoints.map(({ Icon, title, description }) => (
              <FadeInItem key={title} className="flex items-center gap-3">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-50">
                  <Icon className="h-4 w-4 text-brand-700" strokeWidth={1.75} />
                </div>
                <p className="text-sm text-fg-muted">{description}</p>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── Section 1: Announcements ── */}
      <Section className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Clear updates"
              heading="Give residents one place to find current information"
              description="Important updates should be easy to find and easy to understand. HomeHub Community gives housing providers a dedicated space to publish information about services, planned works, safety, local events, support programmes and changes that affect residents — instead of relying only on scattered letters, emails, social posts or noticeboards."
              align="center"
            />
          </FadeIn>

          <FadeInStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.08}>
            {announcementPoints.map(({ Icon, title, description }) => (
              <FadeInItem key={title}>
                <Card className="h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                    <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-fg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{description}</p>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── Section 2: Community messaging ── */}
      <Section data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Direct contact
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Create clearer communication between landlords and residents
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Good resident communication is not only about sending information. HomeHub
                Community supports direct landlord-to-resident messaging while creating
                opportunities for residents to take part where appropriate — helping reduce gaps
                between what a landlord has communicated and what a resident understands. HomeHub
                does not need to replace every existing communication channel; it provides an
                additional, structured space that helps bring important information and resident
                activity together.
              </p>

              <FadeInStagger className="mt-8 space-y-5" stagger={0.1}>
                {messagingPoints.map(({ Icon, title, description }) => (
                  <FadeInItem key={title} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/10">
                      <Icon className="h-5 w-5 text-accent-400" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="font-semibold text-fg">{title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-fg-muted">{description}</p>
                    </div>
                  </FadeInItem>
                ))}
              </FadeInStagger>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Message thread
                </p>
                <div className="mt-4 space-y-3">
                  <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-accent-400 px-4 py-2.5">
                    <p className="text-sm font-medium text-brand-950">
                      Planned works starting Monday — access needed 9am&ndash;12pm.
                    </p>
                    <p className="mt-1 text-[11px] text-brand-950/60">Landlord · 09:14</p>
                  </div>
                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-2.5">
                    <p className="text-sm text-white/80">
                      Thanks for letting me know — I&rsquo;ll be in.
                    </p>
                    <p className="mt-1 text-[11px] text-white/40">Resident · 09:22</p>
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-accent-400 px-4 py-2.5">
                    <p className="text-sm font-medium text-brand-950">
                      Great — we&rsquo;ll confirm once it&rsquo;s complete.
                    </p>
                    <p className="mt-1 text-[11px] text-brand-950/60">Landlord · 09:23</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Section 3: Resident engagement tools ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Participation"
              heading="Make it easier for residents to take part"
              description="Residents should be able to do more than receive updates. HomeHub Community can support practical ways for people to contribute ideas, share experiences and take part in initiatives connected to their home or neighbourhood — from submitting useful tips to sharing a resident story or contributing feedback about a service."
              align="center"
            />
          </FadeIn>

          <FadeInStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.08}>
            {engagementPoints.map(({ Icon, title, description }) => (
              <FadeInItem key={title}>
                <Card className="h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                    <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-fg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{description}</p>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>

          {/* Test your tip */}
          <div className="mt-24">
            <FadeIn className="mx-auto max-w-2xl text-center">
              <SectionHeader
                eyebrow="Test your tip"
                heading="Share an energy-saving tip and help others"
                description="Residents often have practical ideas that could help other households save energy or reduce everyday costs. HomeHub invites residents to send in their own energy-saving tips — each idea can be tested before successful suggestions are shared with the wider community."
                align="center"
              />
            </FadeIn>

            <div className="relative mt-16">
              <div
                className="absolute left-1/6 right-1/6 top-8 hidden h-0.5 rounded-full bg-brand-200 lg:block"
                aria-hidden="true"
              />
              <FadeInStagger
                className="grid grid-cols-1 gap-10 sm:grid-cols-3"
                stagger={0.1}
              >
                {tipSteps.map((step, index) => (
                  <FadeInItem key={step.number}>
                    <div className="group flex flex-col items-center text-center">
                      <div className="relative z-10 flex h-16 w-16 flex-none items-center justify-center rounded-full bg-primary shadow-md ring-4 ring-bg-muted transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                        <step.Icon className="h-7 w-7 text-primary-fg" strokeWidth={1.75} />
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-fg">
                          {index + 1}
                        </span>
                      </div>
                      <div className="mt-6 rounded-2xl px-4 pb-4 pt-3">
                        <h3 className="text-base font-bold text-fg">{step.title}</h3>
                        <p className="mt-2 max-w-[28ch] text-sm leading-relaxed text-fg-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </FadeInItem>
                ))}
              </FadeInStagger>
            </div>

            <FadeIn delay={0.15} className="mx-auto mt-10 max-w-2xl">
              <Callout variant="info" title="Rewards aren't guaranteed">
                Rewards are linked to tips that have been tested and shown to work. Submitting a
                suggestion does not automatically guarantee a reward.
              </Callout>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Resident Story ── */}
      <Section data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Resident story
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                A practical tip, tested and recognised
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                A resident submitted an energy-saving tip for HomeHub to test. After the idea was
                reviewed and shown to provide a practical benefit, it was selected to be shared
                with the wider resident community. To recognise the contribution, the resident
                received an air fryer.
              </p>
              <p className="mt-4 text-fg-muted">
                The story shows how a simple resident idea can become useful information for
                other households, while giving the person behind it clear recognition for taking
                part.
              </p>

              <blockquote className="mt-6 border-l-2 border-accent-400 pl-4">
                <p className="text-sm leading-relaxed text-fg-muted italic">
                  Resident quote pending final approval from the client.
                </p>
                <footer className="mt-3">
                  <p className="text-sm font-semibold text-fg">Resident name — pending approval</p>
                </footer>
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.15}>
              <PlaceholderPanel description="Resident photo — pending client approval" />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Section 4: Digital inclusion support ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Accessible information"
              heading="Help more residents understand and take part"
              description="Not every resident has the same level of digital confidence, access or experience. HomeHub Community is designed to make important information feel straightforward and approachable — reducing unnecessary barriers without forcing every interaction online."
              align="center"
            />
          </FadeIn>

          <FadeInStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.08}>
            {digitalInclusionPoints.map(({ Icon, title, description }) => (
              <FadeInItem key={title}>
                <Card className="h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                    <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-fg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{description}</p>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── Section 5: Trust and transparency ── */}
      <Section data-theme="brand-light" className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <FadeIn>
                <SectionHeader
                  eyebrow="Visible progress"
                  heading="Show residents what is happening and what comes next"
                  description="Trust is harder to build when residents do not know what is happening, why decisions have been made or when they can expect another update. HomeHub Community helps housing providers communicate more regularly and make information easier to revisit."
                />
              </FadeIn>

              <FadeInStagger className="mt-10 space-y-5" stagger={0.1}>
                {trustPoints.map(({ Icon, title, description }) => (
                  <FadeInItem key={title} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white/60">
                      <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="font-semibold text-fg">{title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-fg-muted">
                        {description}
                      </p>
                    </div>
                  </FadeInItem>
                ))}
              </FadeInStagger>
            </div>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-border-strong bg-card p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                  Resident visibility
                </p>
                <div className="mt-4 space-y-4">
                  {['Update shared', 'Response tracked', 'Follow-up visible'].map((label) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="h-2.5 w-2.5 flex-none rounded-full bg-brand-700" />
                      <span className="text-sm text-fg">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Section 6: Social value reporting ── */}
      <Section className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Evidence of activity"
              heading="Build a clearer picture of participation and impact"
              description="Housing providers carry out a wide range of work that supports residents and local communities, but the evidence is often held across separate teams, documents and communication channels. HomeHub Community can help bring more of that activity into one clearer picture — supporting internal reviews, client reporting, funding discussions and wider conversations about social value. HomeHub does not automatically satisfy a particular framework or reporting requirement; it helps organisations gather more useful evidence of the activity taking place."
              align="center"
            />
          </FadeIn>

          <FadeIn delay={0.15} className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-card p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
              Examples of evidence or activity that could be reported
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {socialValueExamples.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-700" strokeWidth={2} />
                  <span className="text-sm text-fg-muted">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Benefits summary ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Why it matters"
              heading="A clearer way to inform, involve and understand residents"
              description="HomeHub Community helps housing providers organise resident information, encourage participation and build stronger evidence of the work happening across their communities."
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.08}
          >
            {benefitCards.map(({ Icon, title, description }) => (
              <FadeInItem key={title}>
                <Card className="h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                    <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-fg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{description}</p>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── Part of the platform ── */}
      <Section className="bg-bg py-16 sm:py-20">
        <Container>
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              Part of HomeHub
            </p>
            <h2 className="mt-2 text-2xl font-bold text-fg sm:text-3xl">
              Community works best alongside the full platform
            </h2>
            <p className="mt-3 max-w-2xl text-fg-muted">
              Combine Community with Resolve and Energy to give residents a complete home
              management experience — and your team a single operational view.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.08}>
            <FadeInItem>
              <Link
                href="/platform/resolve"
                className="group flex items-center justify-between rounded-2xl border border-rose-100 bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                    Issue Management
                  </p>
                  <p className="mt-0.5 text-base font-bold text-fg">Resolve</p>
                </div>
                <LuArrowRight
                  className="h-5 w-5 text-fg-subtle transition-transform duration-200 group-hover:translate-x-1 group-hover:text-fg"
                  strokeWidth={1.75}
                />
              </Link>
            </FadeInItem>
            <FadeInItem>
              <Link
                href="/platform/energy"
                className="group flex items-center justify-between rounded-2xl border border-accent-100 bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                    Energy Insights
                  </p>
                  <p className="mt-0.5 text-base font-bold text-fg">Energy</p>
                </div>
                <LuArrowRight
                  className="h-5 w-5 text-fg-subtle transition-transform duration-200 group-hover:translate-x-1 group-hover:text-fg"
                  strokeWidth={1.75}
                />
              </Link>
            </FadeInItem>
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── Final CTA ── */}
      <Section data-theme="accent" className="bg-bg py-20 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-fg sm:text-4xl">
              Bring resident communication and participation together
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              See how HomeHub Community can help your organisation share clearer information,
              encourage resident involvement and build a stronger record of community activity.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/book-demo">
                Book a demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline">
                Talk to the HomeHub team
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
