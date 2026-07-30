import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import housePhoto from '@/images/photography-sample.jpg'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Blob } from '@/components/ui/Blob'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import { ProgrammeFlow, type ProgrammeFlowStep } from './ProgrammeFlow'
import {
  LuChevronRight,
  LuArrowRight,
  LuCircleCheck,
  LuClipboardList,
  LuHardHat,
  LuCalendarClock,
  LuMessageCircle,
  LuKey,
  LuHouse,
  LuUsers,
  LuMegaphone,
  LuSearch,
  LuLightbulb,
  LuHandshake,
  LuHistory,
  LuZap,
  LuLayers,
  LuEye,
  LuShieldCheck,
  LuFileText,
  LuFolderClock,
  LuBookOpenCheck,
  LuTrendingUp,
} from 'react-icons/lu'

export const metadata = {
  title: 'Retrofit and Funding for Social Landlords | HomeHub',
  description:
    'Deliver retrofit programmes that engage residents, coordinate delivery and gather the evidence funding applications require. See how HomeHub supports social housing retrofit.',
}

// ─── Inline components ───────────────────────────────────────────────────────

type NetworkPoint = {
  Icon: React.ElementType
  label: string
}

/** A resident's home at the centre, connected to the outcomes engagement supports. */
function EngagementNetwork({ items }: { items: NetworkPoint[] }) {
  const radius = 30
  const points = items.map((item, i) => {
    const angle = ((-90 + i * (360 / items.length)) * Math.PI) / 180
    // Labels sit on the outward side of their circle. For every point except
    // the topmost, "outward" is down (or level), so below reads naturally —
    // only the top point needs its label flipped above to keep the whole
    // diagram's vertical extent symmetric around the hub.
    const labelAbove = i === 0 || i === 1 || i === 5
    return {
      ...item,
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle),
      labelAbove,
    }
  })

  return (
    <div className="relative mx-auto aspect-square w-full max-w-md p-10 sm:p-12">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full text-brand-200"
        aria-hidden="true"
      >
        {points.map((p, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={p.x}
            y2={p.y}
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* Hub */}
      <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full bg-primary shadow-lg sm:h-28 sm:w-28">
        <Blob
          fill="white"
          fillOpacity={0.14}
          className="absolute -right-4 -top-6 h-20 w-20 rotate-12 sm:h-24 sm:w-24"
        />
        <Blob
          fill="white"
          fillOpacity={0.1}
          className="absolute -bottom-6 -left-5 h-16 w-16 -rotate-45 sm:h-20 sm:w-20"
        />
        <LuHouse className="relative z-10 h-10 w-10 text-primary-fg sm:h-11 sm:w-11" strokeWidth={1.5} />
      </div>

      {/* Spokes */}
      {points.map((p, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card shadow-sm sm:h-16 sm:w-16">
            <p.Icon className="h-6 w-6 text-brand-700 sm:h-7 sm:w-7" strokeWidth={1.75} />
          </div>
          <p
            className={clsx(
              'absolute left-1/2 w-24 -translate-x-1/2 text-center text-xs font-medium leading-snug text-fg',
              p.labelAbove ? 'bottom-full mb-2.5' : 'top-full mt-2.5',
            )}
          >
            {p.label}
          </p>
        </div>
      ))}
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const residentRequirements = [
  'Understand why the work is happening',
  'See how it will benefit their home',
  'Respond to communications',
  'Provide relevant household information',
  'Attend surveys and appointments',
  'Prepare for installations',
  'Understand disruption and timescales',
  'Learn how to use new systems',
  'Provide feedback after completion',
]

const engagementOutcomes = [
  { Icon: LuBookOpenCheck, label: 'Better-informed residents' },
  { Icon: LuUsers, label: 'Stronger participation' },
  { Icon: LuMessageCircle, label: 'Fewer missed communications' },
  { Icon: LuCalendarClock, label: 'Improved appointment readiness' },
  { Icon: LuHandshake, label: 'Greater trust' },
  { Icon: LuLayers, label: 'Clearer programme delivery' },
]

const beforeWorks = [
  'Why the home has been selected',
  'What improvements are proposed',
  'What benefits residents can expect',
  'What surveys are required',
  'When appointments will take place',
  'How residents should prepare',
]

const duringWorks = [
  'Appointment reminders',
  'Contractor information',
  'Work schedules',
  'Delays or changes',
  'Preparation instructions',
  'Progress updates',
  'Next steps',
]

const afterWorks = [
  'Completion information',
  'Guidance on new heating, insulation or ventilation systems',
  'Energy-saving advice',
  'Supporting documents',
  'Feedback opportunities',
  'Follow-up support',
]

const feedbackTypes = [
  { Icon: LuMessageCircle, label: 'Resident questions' },
  { Icon: LuCalendarClock, label: 'Appointment responses' },
  { Icon: LuKey, label: 'Access requirements' },
  { Icon: LuHouse, label: 'Household circumstances' },
  { Icon: LuHardHat, label: 'Concerns about disruption' },
  { Icon: LuClipboardList, label: 'Feedback on proposed works' },
  { Icon: LuCircleCheck, label: 'Post-installation feedback' },
  { Icon: LuSearch, label: 'Requests for further information' },
]

const readinessStatus = [
  { label: 'Ready to proceed', count: '38', dot: 'bg-emerald-400' },
  { label: 'Need more support', count: '12', dot: 'bg-accent-400' },
  { label: 'Awaiting response', count: '9', dot: 'bg-white/30' },
]

const fundingSchemes = [
  'ECO4',
  'Warm Homes Plan',
  'Social housing decarbonisation programmes',
  'Local authority retrofit programmes',
  'Energy-company schemes',
  'Regional and partnership funding',
  'Fuel-poverty programmes',
  'Net-zero investment programmes',
]

const fundingHelp = [
  { Icon: LuMegaphone, label: 'Communicate available support clearly' },
  { Icon: LuSearch, label: 'Target information using relevant property data' },
  { Icon: LuHouse, label: 'Identify suitable homes and resident groups' },
  { Icon: LuMessageCircle, label: 'Explain why households are being contacted' },
  { Icon: LuLightbulb, label: 'Provide tailored guidance' },
  { Icon: LuHandshake, label: 'Encourage residents to take part' },
  { Icon: LuClipboardList, label: 'Gather the information needed to progress applications' },
  { Icon: LuHistory, label: 'Maintain a record of communications and responses' },
]

const evidenceTypes = [
  'Property details',
  'EPC information',
  'Resident communications',
  'Engagement records',
  'Resident responses',
  'Appointment records',
  'Household information',
  'Surveys',
  'Programme documents',
  'Works status',
  'Completion information',
  'Resident feedback',
  'Before-and-after data',
]

const evidenceBenefits = [
  { Icon: LuZap, label: 'Faster access to programme information' },
  { Icon: LuLayers, label: 'More consistent records' },
  { Icon: LuEye, label: 'Better visibility across properties' },
  { Icon: LuShieldCheck, label: 'Clearer evidence of resident engagement' },
  { Icon: LuFileText, label: 'Easier reporting to funders and delivery partners' },
  { Icon: LuFolderClock, label: 'Reduced reliance on disconnected spreadsheets and inboxes' },
  { Icon: LuHistory, label: 'A stronger audit trail from initial contact to completed work' },
]

const visibilityDimensions = [
  'Individual properties',
  'Buildings or blocks',
  'Streets',
  'Estates',
  'Neighbourhoods',
  'Programme phases',
  'Property types',
  'Resident groups',
  'Contractor workstreams',
  'Wider portfolios',
]

const visibilityChecklist = [
  'Which homes have been identified',
  'Which residents have been contacted',
  'Which residents have responded',
  'Which appointments are booked',
  'Which homes are ready for work',
  'Which works are planned',
  'Which works are in progress',
  'Which works are complete',
  'Where further resident support is required',
]

const programmeFlow: ProgrammeFlowStep[] = [
  {
    number: '01',
    icon: <LuSearch />,
    title: 'Identify suitable homes',
    description:
      'Use property and EPC data to identify homes suited to the programme and prioritise where retrofit will have the greatest impact.',
  },
  {
    number: '02',
    icon: <LuMegaphone />,
    title: 'Inform and engage residents',
    description:
      'Explain why a home has been selected, what is proposed and what residents can expect, through a consistent resident-facing channel.',
  },
  {
    number: '03',
    icon: <LuClipboardList />,
    title: 'Gather responses and property information',
    description:
      'Collect resident responses, household circumstances and access requirements needed to plan the work.',
  },
  {
    number: '04',
    icon: <LuCalendarClock />,
    title: 'Arrange surveys and appointments',
    description:
      'Coordinate survey and installation appointments, with reminders that keep residents prepared and on schedule.',
  },
  {
    number: '05',
    icon: <LuHardHat />,
    title: 'Coordinate works and resident readiness',
    description:
      'Give housing teams and contractors a shared view of works status and which residents are ready to proceed.',
  },
  {
    number: '06',
    icon: <LuCircleCheck />,
    title: 'Record completion and programme evidence',
    description:
      'Capture completion information and retain a clear record for funding applications and post-programme reporting.',
  },
]

const progressTracking = [
  'EPC ratings',
  'Property energy performance',
  'Planned retrofit measures',
  'Completed interventions',
  'Resident participation',
  'Energy savings',
  'Fuel-poverty support',
  'Net-zero progress',
  'Neighbourhood improvement',
  'Wider portfolio targets',
]

const valueChain = [
  { Icon: LuSearch, label: 'Energy identifies the opportunity' },
  { Icon: LuUsers, label: 'HomeHub connects the resident' },
  { Icon: LuEye, label: 'Programme visibility supports delivery' },
  { Icon: LuTrendingUp, label: 'Evidence demonstrates progress' },
]

const connectedModules: {
  name: string
  description: string
  href?: string
}[] = [
  {
    name: 'Energy',
    description: 'EPC information, property performance and retrofit priorities.',
    href: '/platform/energy',
  },
  {
    name: 'Community',
    description: 'Programme announcements and local updates.',
    href: '/platform/community',
  },
  {
    name: 'Resolve',
    description: 'Identifies property issues that may affect planned works.',
    href: '/platform/resolve',
  },
  {
    name: 'Messaging',
    description: 'Direct and targeted resident communication.',
  },
  {
    name: 'Documents',
    description: 'Surveys, guidance and property information.',
  },
  {
    name: 'Tenant Voice',
    description: 'Resident feedback and participation.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RetrofitFundingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section first className="overflow-hidden bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Landlords
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Deliver retrofit programmes residents understand and support
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
                Successful retrofit programmes depend on communication and engagement, not just
                installation. Residents need to understand the programme, take part in surveys
                and appointments, prepare for works and feel supported throughout the process.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/70 sm:text-xl">
                HomeHub connects residents, housing teams, contractors, property information and
                programme updates in one place, turning funding and delivery plans into
                confident action inside occupied homes.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/book-demo" color="accent">
                  Book a Demo
                  <LuChevronRight className="ml-0.5 h-4 w-4" />
                </Button>
                <Button
                  href="/platform/energy"
                  variant="outline"
                  color="violet"
                  className="border-white/30 text-white hover:border-white/60"
                >
                  See Energy Platform
                </Button>
              </div>
              <p className="mt-8 text-sm text-white/50">
                Built for councils, housing associations and social landlords delivering
                retrofit at scale.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={housePhoto}
                    alt="A resident at home during a housing retrofit programme"
                    className="h-full w-full object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                  />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold text-fg">
                    Retrofit that works for residents, not just properties
                  </p>
                  <p className="mt-1 text-sm text-fg-muted">
                    Every home in the programme, connected to the person living in it.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Successful retrofit starts with resident engagement ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                Why engagement comes first
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Successful retrofit starts with resident engagement
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Physical works are only part of a retrofit programme. For it to succeed, residents
                need to:
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {residentRequirements.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-600" strokeWidth={1.75} />
                    <span className="text-sm leading-relaxed text-fg-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-fg-muted">
                HomeHub creates a consistent resident journey in place of disconnected letters,
                emails, phone calls and contractor messages, giving housing providers a
                resident-facing layer that turns programme plans into action inside occupied
                homes. It builds on the same approach to{' '}
                <Link
                  href="/landlords/resident-engagement"
                  className="font-medium text-brand-700 underline hover:text-brand-800"
                >
                  resident engagement
                </Link>{' '}
                used across HomeHub.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <EngagementNetwork items={engagementOutcomes} />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Communicate throughout the retrofit journey ── */}
      <Section data-theme="brand-light" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="The retrofit journey"
              heading="Communicate before, during and after works"
              description="Clear and timely information reduces uncertainty, improves cooperation and helps residents feel part of the programme, rather than something that is happening to their home."
              align="center"
            />
          </FadeIn>

          <FadeInStagger className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3" stagger={0.08}>
            {[
              { title: 'Before works', Icon: LuClipboardList, items: beforeWorks },
              { title: 'During works', Icon: LuHardHat, items: duringWorks },
              { title: 'After works', Icon: LuCircleCheck, items: afterWorks },
            ].map(({ title, Icon, items }) => (
              <FadeInItem key={title}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
                    <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-fg">{title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <LuCircleCheck className="mt-0.5 h-3.5 w-3.5 flex-none text-brand-500" strokeWidth={2} />
                        <span className="text-sm leading-relaxed text-fg-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-fg-muted">
              This connects naturally with Community for programme announcements, Messaging for
              direct updates, Documents for surveys and guidance, and AI to help residents find
              relevant information as the programme progresses.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Support two-way engagement during works ── */}
      <Section data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Two-way engagement
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Move beyond sending information to managing participation
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Retrofit communication works in both directions. HomeHub helps housing teams
                gather resident feedback, collect responses and keep communication open
                throughout the programme.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                This makes it clear which residents are ready to proceed, which need more
                support, and which have not yet responded, so appointment scheduling and
                resident readiness become visible parts of the programme rather than something
                held in someone&rsquo;s inbox.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  What HomeHub helps you capture
                </p>
                <ul className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  {feedbackTypes.map(({ Icon, label }) => (
                    <li key={label} className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-white/10">
                        <Icon className="h-3.5 w-3.5 text-accent-400" strokeWidth={1.75} />
                      </div>
                      <span className="text-sm font-medium text-white/80">{label}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                    Resident readiness
                  </p>
                  {readinessStatus.map((row) => (
                    <div key={row.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${row.dot}`} />
                        <span className="text-sm text-white/80">{row.label}</span>
                      </div>
                      <span className="text-sm font-semibold text-white">{row.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Help residents and landlords understand funding support ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                Funding support and awareness
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Turn funding awareness into resident action
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                HomeHub helps residents and housing providers understand relevant retrofit
                funding and support, from national schemes through to local and partnership
                programmes.
              </p>
              <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                  Support this can cover
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {fundingSchemes.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-medium text-brand-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                How HomeHub helps landlords
              </p>
              <ul className="mt-4 space-y-4">
                {fundingHelp.map(({ Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm">
                    <Icon className="h-4 w-4 flex-none text-brand-700" strokeWidth={1.75} />
                    <span className="text-sm font-medium text-fg">{label}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-fg-muted">
              HomeHub makes retrofit support easier to understand and easier to act upon, for
              residents and for the teams delivering the programme. Explore our{' '}
              <Link href="/resources/guides" className="font-medium text-brand-700 underline hover:text-brand-800">
                guides
              </Link>{' '}
              for more on retrofit and funding.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Gather the evidence funding programmes require ── */}
      <Section className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              Evidence gathering
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              Gather the evidence funding programmes require
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              HomeHub creates a clearer record of what has happened at each home and across the
              wider programme, bringing together the information funding applications and
              post-programme reporting depend on.
            </p>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                  Brought together in one place
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {evidenceTypes.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-bg-muted px-3.5 py-1.5 text-sm font-medium text-fg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeInStagger className="space-y-4" stagger={0.06}>
              {evidenceBenefits.map(({ Icon, label }) => (
                <FadeInItem key={label} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-50">
                    <Icon className="h-4 w-4 text-brand-700" strokeWidth={1.75} />
                  </div>
                  <span className="font-medium text-fg">{label}</span>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </Container>
      </Section>

      {/* ── Coordinate multi-property retrofit programmes ── */}
      <Section data-theme="brand-light" className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Programme coordination"
              heading="Coordinate retrofit delivery across every property"
              description="Housing teams, resident-engagement teams, sustainability teams and contractors work from a clearer shared picture, with visibility across every stage of the programme."
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-2.5"
            stagger={0.04}
          >
            {visibilityDimensions.map((item) => (
              <FadeInItem key={item}>
                <span className="inline-block rounded-full bg-card px-3.5 py-1.5 text-sm font-medium text-fg shadow-sm">
                  {item}
                </span>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.1} className="mt-16">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-fg-muted">
              A simple programme flow
            </p>
            <p className="mx-auto mt-2 max-w-md text-center text-xs text-fg-subtle">
              Click a step to explore it
            </p>
            <div className="mx-auto mt-8 max-w-4xl">
              <ProgrammeFlow steps={programmeFlow} />
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="mx-auto mt-12 max-w-2xl">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-fg-muted">
              Seeing the full picture at a glance
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {visibilityChecklist.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-600" strokeWidth={1.75} />
                  <span className="text-sm leading-relaxed text-fg-muted">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Track EPC, energy and net-zero progress ── */}
      <Section className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                Net-zero progress
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Track the impact of retrofit across your portfolio
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Strategic targets become meaningful when teams can see which homes have been
                assessed, which residents have engaged, what work has taken place and what
                progress has been made. HomeHub brings before-and-after retrofit information
                together with the resident activity behind it.
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {progressTracking.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-600" strokeWidth={1.75} />
                    <span className="text-sm leading-relaxed text-fg-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-fg-muted">
                Detailed EPC dashboards and property-performance insights live on the{' '}
                <Link href="/platform/energy" className="font-medium text-brand-700 underline hover:text-brand-800">
                  Energy platform
                </Link>
                . This is how those insights support retrofit planning, delivery, funding and
                reporting.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                  From insight to evidence
                </p>
                <div className="mt-5 space-y-4">
                  {valueChain.map(({ Icon, label }) => (
                    <div key={label} className="flex items-center gap-4">
                      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50">
                        <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                      </div>
                      <p className="text-sm font-semibold text-fg">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm text-fg-muted">
                Retrofit programmes that include leaseholders or homeowners can extend the same
                clarity to{' '}
                <Link href="/residents/homeowners" className="font-medium text-brand-700 underline hover:text-brand-800">
                  homeowners
                </Link>{' '}
                across the wider neighbourhood.
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Connect retrofit with the wider platform ── */}
      <Section data-theme="brand-light" className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              Connected across HomeHub
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              More value when everything is connected
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-fg-muted">
              Retrofit and funding does not sit apart from the rest of HomeHub. Property data,
              resident communication, programme activity and supporting evidence work together
              across the platform.
            </p>
          </FadeIn>

          <FadeInStagger
            className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.06}
          >
            {connectedModules.map((mod) =>
              mod.href ? (
                <FadeInItem key={mod.name}>
                  <Link
                    href={mod.href}
                    className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div>
                      <p className="text-base font-bold text-fg">{mod.name}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                        {mod.description}
                      </p>
                    </div>
                    <LuArrowRight
                      className="mt-4 h-5 w-5 text-fg-subtle transition-transform duration-200 group-hover:translate-x-1 group-hover:text-fg"
                      strokeWidth={1.75}
                    />
                  </Link>
                </FadeInItem>
              ) : (
                <FadeInItem key={mod.name}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <div>
                      <p className="text-base font-bold text-fg">{mod.name}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                        {mod.description}
                      </p>
                    </div>
                  </div>
                </FadeInItem>
              ),
            )}
          </FadeInStagger>

          <FadeIn delay={0.2}>
            <p className="mt-10 text-fg-muted">
              See how other housing providers are delivering retrofit programmes on{' '}
              <Link href="/platform/case-studies" className="font-medium text-brand-700 underline hover:text-brand-800">
                Case Studies
              </Link>
              .
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Final CTA ── */}
      <Section data-theme="accent" className="bg-bg py-20 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-fg sm:text-4xl">
              See how HomeHub can support your retrofit and funding programmes
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              HomeHub helps housing providers engage more residents, communicate more clearly,
              coordinate multi-property delivery, gather stronger evidence and track energy and
              net-zero progress, turning funding into visible improvements in residents&rsquo;
              homes.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/book-demo">
                Book a Demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button href="/platform/energy" variant="outline">
                See Energy Platform
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
