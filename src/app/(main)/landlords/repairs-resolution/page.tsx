import Link from 'next/link'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { IllustrationCard } from '@/components/ui/IllustrationCard'
import { DashboardPreview } from '@/components/ui/DashboardPreview'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import {
  LuChevronRight,
  LuCircleX,
  LuCircleCheck,
  LuCircleHelp,
  LuCircleDot,
  LuTriangleAlert,
  LuClipboardList,
  LuHistory,
  LuUserCheck,
  LuBellRing,
  LuCamera,
  LuUsers,
  LuFolderClock,
  LuWrench,
  LuRefreshCw,
  LuCalendarClock,
  LuListChecks,
  LuArrowRightLeft,
  LuShieldCheck,
  LuEye,
  LuSearch,
  LuPhoneOff,
  LuLayoutDashboard,
  LuMessageSquare,
  LuFileText,
} from 'react-icons/lu'

export const metadata = {
  title: 'Repairs Management for Social Landlords | HomeHub',
  description:
    'Give housing teams clearer oversight of repairs from first report to resolution. Improve resident communication, reduce avoidable calls and identify overdue or repeat issues sooner.',
}

// ─── Inline components ───────────────────────────────────────────────────────

function RepairReportPreview() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-400/20">
            <LuWrench className="h-3.5 w-3.5 text-accent-300" strokeWidth={2} />
          </div>
          <span className="text-sm font-semibold text-white">Repair #A1029</span>
        </div>
        <span className="rounded-full bg-accent-400/20 px-2 py-0.5 text-xs font-semibold text-accent-300">
          In Progress
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <p className="text-sm font-semibold text-white">Kitchen &middot; Leak under sink</p>
          <div className="mt-1.5 flex items-center gap-3 text-xs text-white/40">
            <span className="flex items-center gap-1">
              <LuCamera className="h-3 w-3" strokeWidth={2} />
              Reported 14 Jun
            </span>
            <span>Flat 3, Willow Court</span>
          </div>
        </div>

        <div className="rounded-xl bg-white/5 px-4 py-3">
          <p className="text-xs text-white/40">Assigned to</p>
          <div className="mt-1 flex items-center gap-2">
            <LuUserCheck className="h-3.5 w-3.5 text-accent-300" strokeWidth={2} />
            <span className="text-sm font-medium text-white">Contractor &mdash; J. Patel</span>
          </div>
        </div>

        <div className="space-y-2">
          {[
            { label: 'Reported', done: true },
            { label: 'Allocated', done: true },
            { label: 'In progress', done: false, active: true },
            { label: 'Resolved', done: false },
          ].map((step) => (
            <div key={step.label} className="flex items-center gap-3">
              <div
                className={`flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                  step.done
                    ? 'bg-emerald-500/20'
                    : step.active
                      ? 'border-2 border-accent-400 bg-transparent'
                      : 'border border-white/20 bg-transparent'
                }`}
              >
                {step.done && (
                  <LuCircleCheck className="h-3 w-3 text-emerald-400" strokeWidth={2.5} />
                )}
              </div>
              <p
                className={`text-xs ${
                  step.done || step.active ? 'font-medium text-white/80' : 'text-white/30'
                }`}
              >
                {step.label}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-brand-800/60 px-4 py-3">
          <div className="flex items-center gap-2">
            <LuHistory className="h-3.5 w-3.5 flex-none text-accent-300" strokeWidth={2} />
            <p className="text-xs text-white/70">
              2 previous reports for this property &mdash; flagged for review
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function RepeatIssueTimeline() {
  const entries = [
    { date: '12 Jan', label: 'Kitchen leak reported', tag: 'Resolved', tagColor: 'bg-emerald-400' },
    { date: '3 Mar', label: 'Leak returned under sink', tag: 'Resolved', tagColor: 'bg-emerald-400' },
    { date: '19 Jun', label: 'Leak reported again', tag: 'In review', tagColor: 'bg-accent-400' },
  ]
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
            Willow Court &mdash; Flat 3
          </p>
          <p className="mt-0.5 text-sm font-bold text-fg">Repair history</p>
        </div>
        <span className="rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-600">
          3 related reports
        </span>
      </div>

      <div className="relative mt-6 space-y-5 pl-2">
        <div
          className="absolute bottom-2 left-[7px] top-2 w-px bg-border"
          aria-hidden="true"
        />
        {entries.map((entry) => (
          <div key={entry.date} className="relative flex items-start gap-4 pl-6">
            <div className={`absolute left-0 top-1 h-3.5 w-3.5 rounded-full ${entry.tagColor}`} />
            <div className="flex-1">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-fg">{entry.label}</p>
                <span className="flex-none text-xs text-fg-subtle">{entry.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 border-t border-border pt-4">
        <LuSearch className="h-4 w-4 text-brand-700" strokeWidth={1.75} />
        <p className="text-xs font-medium text-fg-muted">Pattern flagged for investigation</p>
      </div>
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const fragmentationPoints = [
  'Important information may be missing from the original report',
  'Ownership of the repair can become unclear',
  'Updates may not reach the resident',
  'Repeat issues may be treated as separate jobs',
  'Overdue actions may only become visible after a complaint',
]

const journeySteps = [
  {
    number: '01',
    Icon: LuClipboardList,
    title: 'Better information from the beginning',
    description:
      'Residents report a problem through a clear digital journey and provide the information needed to understand the issue.',
    chips: ['Description', 'Room or area', 'Photos', 'When it started', 'Happened before?', 'Access details'],
  },
  {
    number: '02',
    Icon: LuHistory,
    title: 'A consistent record of every report',
    description:
      'Each repair is categorised, time stamped and retained as part of the property and resident history — a consistent starting point for whoever reviews it next.',
  },
  {
    number: '03',
    Icon: LuUserCheck,
    title: 'Clearer allocation and ownership',
    description:
      'Repairs are directed to the relevant team, contractor or responsible person. A visible record of ownership reduces uncertainty about who takes the next action.',
  },
  {
    number: '04',
    Icon: LuBellRing,
    title: 'Progress updates throughout the repair',
    description:
      'Housing teams record changes as work progresses and keep residents informed — status changes, appointment information or requests for further detail.',
  },
  {
    number: '05',
    Icon: LuTriangleAlert,
    title: 'Escalation when progress stalls',
    description:
      'Repairs that are overdue, repeated or require management attention are identified for further review before they become harder to resolve.',
  },
  {
    number: '06',
    Icon: LuCircleCheck,
    title: 'Confirmation and final resolution',
    description:
      'The repair history shows what action was completed, when, and how the case was closed — informing any future report that the problem has returned.',
  },
]

const delayPoints = [
  {
    Icon: LuCamera,
    title: 'Capture the right detail sooner',
    description:
      'Photographs, descriptions and property information help teams understand the issue before deciding what needs to happen next.',
    blobColor: 'oklch(0.946 0.024 295)',
  },
  {
    Icon: LuUsers,
    title: 'Make responsibility visible',
    description:
      'Clear ownership helps teams understand who is responsible for the next action and where progress has stalled.',
    blobColor: 'oklch(0.962 0.028 85)',
  },
  {
    Icon: LuFolderClock,
    title: 'Keep the history accessible',
    description:
      'Staff can see previous updates and actions without rebuilding the story from several different sources.',
    blobColor: 'oklch(0.978 0.025 150)',
  },
  {
    Icon: LuTriangleAlert,
    title: 'Prioritise higher-risk concerns',
    description:
      'Clear categorisation and escalation routes help teams identify which cases need faster review or management oversight.',
    blobColor: 'oklch(0.95 0.024 230)',
  },
]

const residentUnderstanding = [
  { Icon: LuCircleCheck, label: 'Whether their report has been received' },
  { Icon: LuListChecks, label: 'What is expected to happen next' },
  { Icon: LuRefreshCw, label: 'Whether the status has changed' },
  { Icon: LuCalendarClock, label: 'Whether an appointment or visit is required' },
  { Icon: LuCircleHelp, label: 'Whether more information is needed' },
  { Icon: LuCircleDot, label: 'Whether the repair is complete or remains open' },
]

const portfolioVisibility = [
  'Open and completed repairs',
  'Current repair status',
  'Older or overdue cases',
  'Upcoming actions and deadlines',
  'Repeat reports',
  'Common issue categories',
  'Properties with several unresolved issues',
  'Activity by property, building, estate or portfolio',
  'Internal team or contractor workloads',
  'Repairs requiring escalation or review',
]

const practicalQuestions = [
  'Where are repairs becoming overdue?',
  'Which properties have experienced repeated issues?',
  'Are particular repair categories increasing?',
  'Which cases require management intervention?',
  'Where are residents waiting for an update?',
  'Are there recurring problems within a building or estate?',
  'Which teams or contractors have the highest open workload?',
]

const residentBenefits = [
  'Greater confidence that the issue has been received',
  'Less need to repeat the same information',
  'Clearer expectations about the next step',
  'Easier access to previous updates',
  'Less frustration while waiting for progress',
  'A more transparent repair experience',
]

const providerBenefits = [
  'More consistent communication',
  'Fewer gaps between teams',
  'Less reliance on individual staff remembering to update',
  'A clearer record of what the resident was told',
  'Fewer routine calls asking for progress',
  'Stronger evidence when reviewing a complaint',
]

const escalationTriggers = [
  'Actions that have become overdue',
  'Repairs with no recent progress',
  'Repeated reports about the same issue',
  'Missed or failed appointments',
  'Problems that return after previous work',
  'Recurring issues affecting the same property',
  'Damp, mould, leaks or other concerns needing closer review',
  'Cases where the resident has not received an update',
  'Repairs requiring specialist or management involvement',
]

const repeatIdentifiers = [
  'Repeated reports from the same home',
  'Recurring repair categories',
  'Previous actions and outcomes',
  'Repairs that addressed a symptom rather than the cause',
  'Issues that return after work has been completed',
  'Patterns that may require a survey or further investigation',
]

const coordinationBenefits = [
  { Icon: LuUserCheck, title: 'Clearer allocation' },
  { Icon: LuArrowRightLeft, title: 'Better handovers' },
  { Icon: LuFileText, title: 'Less duplicated administration' },
  { Icon: LuRefreshCw, title: 'More consistent status information' },
  { Icon: LuBellRing, title: 'Easier follow-up' },
  { Icon: LuShieldCheck, title: 'Clearer accountability' },
  { Icon: LuHistory, title: 'A retained record of communication and action' },
  { Icon: LuEye, title: 'Improved visibility across teams' },
]

const summaryBenefits = [
  {
    Icon: LuUserCheck,
    title: 'Clearer repair ownership',
    description: 'Teams understand who is responsible and what action is expected next.',
  },
  {
    Icon: LuClipboardList,
    title: 'Better reporting information',
    description: 'Residents provide clearer details at the start, helping teams assess and allocate the repair.',
  },
  {
    Icon: LuFileText,
    title: 'Reduced routine administration',
    description: 'A consistent digital record reduces reliance on separate notes, emails and repeated data entry.',
  },
  {
    Icon: LuPhoneOff,
    title: 'Fewer avoidable progress enquiries',
    description: 'Residents can see relevant updates without needing to contact the housing team each time.',
  },
  {
    Icon: LuSearch,
    title: 'Earlier identification of repeat or overdue cases',
    description: 'Repair histories and escalation routes make it easier to recognise where attention is needed.',
  },
  {
    Icon: LuShieldCheck,
    title: 'Stronger evidence',
    description: 'Housing providers maintain a clearer record of reports, updates, actions and outcomes.',
  },
  {
    Icon: LuLayoutDashboard,
    title: 'Better portfolio oversight',
    description: 'Managers can see repair activity across properties, teams and service areas.',
  },
  {
    Icon: LuMessageSquare,
    title: 'More consistent resident communication',
    description: 'Residents receive clearer information throughout the repair journey.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RepairsResolutionPage() {
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
                A clearer repairs service from first report to resolution
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
                HomeHub helps housing providers connect resident reporting, housing-team
                activity, contractor updates and repair outcomes in one clearer process.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/70 sm:text-xl">
                Give residents a simpler way to report problems, keep teams informed and
                maintain visibility across every property, repair and escalation.
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
                  Explore Resolve
                </Button>
              </div>
              <p className="mt-8 text-sm text-white/50">
                Clearer reporting. Better communication. Stronger oversight across your repairs
                service.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <RepairReportPreview />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Repairs become harder when information is fragmented ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                Why repairs go wrong
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Repairs become harder when information is fragmented
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Most repairs involve more than one person, team or system.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                A resident may report an issue by telephone. Notes are passed to a housing
                officer. A repair is allocated to an internal team or external contractor.
                Updates arrive through email, spreadsheets or separate contractor systems. The
                resident calls again because they do not know what is happening.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                Each step may work on its own, but the complete repair journey can become
                difficult to follow.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                HomeHub creates a clearer connection between the resident, the housing provider
                and the repair process — a more consistent view of what has been reported, what
                action has been taken, who is responsible and what needs to happen next.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                  What can go wrong
                </p>
                <ul className="mt-5 space-y-4">
                  {fragmentationPoints.map((item) => (
                    <li key={item} className="flex gap-3">
                      <LuCircleX className="mt-0.5 h-5 w-5 flex-none text-rose-400" strokeWidth={1.75} />
                      <span className="text-sm leading-relaxed text-fg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── The repair journey ── */}
      <Section data-theme="brand-light" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="The repair journey"
              heading="Manage the complete repair journey more clearly"
              description="HomeHub supports the repair from the resident’s first report through to the final outcome — not to replace every repairs, contractor or asset-management system, but to make the journey easier to understand, manage and communicate."
              align="center"
            />
          </FadeIn>

          <div className="relative mx-auto mt-16 max-w-3xl">
            <div
              className="absolute bottom-4 left-6 top-4 hidden w-0.5 rounded-full bg-brand-200 sm:block"
              aria-hidden="true"
            />
            <FadeInStagger className="space-y-10" stagger={0.08}>
              {journeySteps.map((step) => (
                <FadeInItem key={step.number}>
                  <div className="relative flex gap-6 sm:pl-0">
                    <div className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary shadow-md ring-4 ring-bg">
                      <step.Icon className="h-5 w-5 text-primary-fg" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1 pb-1">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-bold text-brand-300">{step.number}</span>
                        <h3 className="text-base font-bold text-fg">{step.title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                        {step.description}
                      </p>
                      {step.chips && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {step.chips.map((chip) => (
                            <span
                              key={chip}
                              className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </Container>
      </Section>

      {/* ── Reduce avoidable delays ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Faster resolution"
              heading="Reduce avoidable delays"
              description="Faster resolution is not only about how quickly someone attends a property. Delays often begin earlier, when the original report does not contain enough information, the issue is sent to the wrong team or responsibility is unclear."
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2"
            stagger={0.08}
          >
            {delayPoints.map(({ Icon, title, description, blobColor }) => (
              <FadeInItem key={title}>
                <IllustrationCard
                  blobColor={blobColor}
                  icon={Icon}
                  title={title}
                  description={description}
                />
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-fg-muted">
              HomeHub supports faster action by making the information, responsibility and
              repair status easier to see.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Reduce routine repair calls ── */}
      <Section data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Fewer routine enquiries
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Reduce routine repair calls
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Residents often contact their landlord because they do not know what is
                happening. These are reasonable questions, but answering them repeatedly places
                additional pressure on housing and contact-centre teams.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                HomeHub helps residents follow the progress of their repair through clearer
                confirmation and status updates — reducing the need to chase routine updates and
                giving teams more time for cases that require direct support. Phone, face-to-face
                and assisted routes stay fully available alongside it, so residents can always
                choose the way that suits them best.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Residents can understand
                </p>
                <ul className="mt-5 space-y-4">
                  {residentUnderstanding.map(({ Icon, label }) => (
                    <li key={label} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-white/10">
                        <Icon className="h-4 w-4 text-accent-400" strokeWidth={1.75} />
                      </div>
                      <span className="text-sm font-medium text-white/80">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Portfolio visibility ── */}
      <Section className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              Portfolio visibility
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              See repairs across your whole portfolio
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              Individual repair records are important, but housing providers also need to
              understand what is happening across the wider service. HomeHub can support
              visibility across:
            </p>
          </FadeIn>

          <FadeInStagger
            className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2"
            stagger={0.04}
          >
            {portfolioVisibility.map((item) => (
              <FadeInItem key={item} className="flex items-center gap-3">
                <LuCircleCheck className="h-4 w-4 flex-none text-brand-600" strokeWidth={1.75} />
                <span className="text-sm text-fg-muted">{item}</span>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn>
              <h3 className="text-xl font-bold text-fg">
                Turn repair information into practical decisions
              </h3>
              <p className="mt-3 text-fg-muted">
                Portfolio-wide information can help managers answer questions such as:
              </p>
              <ul className="mt-5 space-y-3">
                {practicalQuestions.map((q) => (
                  <li key={q} className="flex gap-3">
                    <LuCircleHelp className="mt-0.5 h-4 w-4 flex-none text-brand-600" strokeWidth={1.75} />
                    <span className="text-sm leading-relaxed text-fg">{q}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-l-2 border-brand-200 pl-4 text-fg-muted">
                The value is not simply having more data. The value is being able to identify
                problems sooner, focus resources more effectively and understand how the repairs
                service is performing across the organisation.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <DashboardPreview />
              <p className="mt-3 text-center text-xs text-fg-subtle">
                Illustrative view. Figures shown are for demonstration only.
              </p>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Keep residents informed at every stage ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              Resident communication
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              Keep residents informed at every stage
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              A repair is also a communication journey. Even when repair activity is
              progressing, the resident may feel that nothing is happening if updates are
              unclear or inconsistent. Clear communication helps set expectations and reduces
              uncertainty — see how this connects to{' '}
              <Link href="/landlords/resident-engagement" className="font-medium text-brand-700 underline hover:text-brand-800">
                resident engagement
              </Link>{' '}
              more widely.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <FadeIn delay={0.05}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-fg-subtle">
                For residents
              </h3>
              <ul className="mt-4 space-y-3">
                {residentBenefits.map((item) => (
                  <li key={item} className="flex gap-3">
                    <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-600" strokeWidth={1.75} />
                    <span className="text-sm leading-relaxed text-fg">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-fg-subtle">
                For housing providers
              </h3>
              <ul className="mt-4 space-y-3">
                {providerBenefits.map((item) => (
                  <li key={item} className="flex gap-3">
                    <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-600" strokeWidth={1.75} />
                    <span className="text-sm leading-relaxed text-fg">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.15}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-fg-muted">
              For urgent, sensitive or complex cases, a member of the housing team is always
              on hand to step in directly.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Identify overdue and escalating repairs sooner ── */}
      <Section data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Escalation &amp; risk
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Identify overdue and escalating repairs sooner
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                An appointment may be missed. A contractor may be unable to complete the work. A
                resident may report that the problem has returned. Without structured
                escalation, these cases can remain unresolved until the resident contacts the
                landlord again or raises a formal complaint.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                Clear escalation routes help teams decide who should review the case, what
                follow-up is required and when further action should take place — surfacing
                warning signs sooner, supporting earlier intervention and giving managers a
                clear record of how the issue was handled.
              </p>

              <FadeIn delay={0.2} className="mt-10">
                <Button href="/landlords/compliance-regulation" variant="solid" color="white">
                  Compliance &amp; Regulation
                  <LuChevronRight className="ml-0.5 h-4 w-4" />
                </Button>
              </FadeIn>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Escalation triggers
                </p>
                <ul className="mt-5 space-y-3.5">
                  {escalationTriggers.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <LuTriangleAlert className="mt-0.5 h-4 w-4 flex-none text-accent-400" strokeWidth={1.75} />
                      <span className="text-sm font-medium text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Recognise repeat repairs and underlying problems ── */}
      <Section className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                Repeat issues
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Recognise repeat repairs and underlying problems
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                A completed repair does not always mean the underlying problem has been
                resolved. When each repair is viewed in isolation, the wider pattern can be
                missed.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                HomeHub helps housing teams maintain a clearer repair history for the property,
                making it easier to identify:
              </p>
              <ul className="mt-5 space-y-2.5">
                {repeatIdentifiers.map((item) => (
                  <li key={item} className="flex gap-3">
                    <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-600" strokeWidth={1.75} />
                    <span className="text-sm leading-relaxed text-fg-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-fg-muted">
                For the resident, this means they are less likely to feel that each report is
                being treated as though it has never happened before.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <RepeatIssueTimeline />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Improve coordination between teams and contractors ── */}
      <Section data-theme="accent" className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Team &amp; contractor coordination"
              heading="Improve coordination between teams and contractors"
              description="Repairs often pass through several hands — contact centre, housing officer, repairs team, contractor, surveyor. Every handover creates an opportunity for information to be delayed, duplicated or lost. HomeHub creates a shared, visible repair record that supports better coordination between the people involved."
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2"
            stagger={0.06}
          >
            {coordinationBenefits.map(({ Icon, title }) => (
              <FadeInItem key={title} className="flex items-center gap-4">
                <Icon className="h-5 w-5 flex-none text-brand-700" strokeWidth={1.75} />
                <p className="font-medium text-fg">{title}</p>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-fg-muted">
              HomeHub does not need to replace specialist scheduling, contractor management,
              procurement or invoicing systems to add value. It sits alongside existing
              processes and makes the resident-facing repair journey easier to understand.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Support an inclusive repairs service ── */}
      <Section className="bg-bg py-20 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              Inclusive service
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              Support an inclusive repairs service
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              Digital reporting can make repairs easier for many residents, but it should form
              part of an inclusive service. Some may prefer an app because they can report an
              issue at a convenient time and revisit the information later. Others may need
              telephone, face-to-face or assisted support — HomeHub should complement these
              routes rather than remove them.
            </p>
            <p className="mt-4 text-lg text-fg-muted">
              A clear digital record can also support staff helping a{' '}
              <Link href="/residents/tenants" className="font-medium text-brand-700 underline hover:text-brand-800">
                resident
              </Link>{' '}
              through another channel, recorded consistently and connected to the same repair
              journey.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── A more controlled repairs service ── */}
      <Section data-theme="brand-light" className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Summary"
              heading="A more controlled repairs service"
              description="HomeHub gives housing providers a clearer way to connect resident reports, operational activity and repair outcomes."
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.06}
          >
            {summaryBenefits.map(({ Icon, title, description }) => (
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

      {/* ── Final CTA ── */}
      <Section data-theme="accent" className="bg-bg py-20 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-fg sm:text-4xl">
              Give your repairs teams a clearer view
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              See how HomeHub could support your existing repairs process, improve resident
              communication and help teams identify overdue or repeated issues sooner.
            </p>
            <p className="mt-3 text-fg-muted">
              We will work with you to understand the current repair journey, identify gaps in
              visibility or communication and explore how Resolve could fit alongside your
              existing teams and systems. Have implementation questions first? Visit our{' '}
              <Link href="/resources/faqs" className="font-medium text-brand-700 underline hover:text-brand-800">
                FAQs
              </Link>
              .
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/book-demo">
                Book a Demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button href="/platform/resolve" variant="outline">
                Explore Resolve
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
