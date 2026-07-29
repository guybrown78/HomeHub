import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import {
  LuChevronRight,
  LuClipboardList,
  LuCalendarClock,
  LuCalendarCheck,
  LuMessageCircle,
  LuActivity,
  LuFileText,
  LuLayers,
  LuBuilding2,
  LuKey,
  LuCircleCheck,
  LuHistory,
  LuHardHat,
  LuUserRound,
  LuPhoneOff,
  LuShieldCheck,
  LuRefreshCw,
  LuUsers,
  LuCircleHelp,
  LuBellOff,
  LuClock,
  LuEye,
  LuMegaphone,
  LuLayoutDashboard,
  LuInfo,
  LuHandshake,
} from 'react-icons/lu'

export const metadata = {
  title: 'For Contractors | HomeHub',
  description:
    'Work more closely with housing providers, keep residents informed and deliver repairs, maintenance and retrofit programmes with greater visibility from first appointment to completed work.',
}

// ─── Inline components ───────────────────────────────────────────────────────

function ContractorJobPreview() {
  return (
    <div className="relative rounded-2xl border border-border bg-card p-6 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
            Job overview
          </p>
          <p className="mt-0.5 text-lg font-bold text-fg">This week</p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50">
          <LuHardHat className="h-4 w-4 text-brand-700" strokeWidth={1.75} />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {[
          { label: "Today's appointments", value: '6' },
          { label: 'Jobs in progress', value: '14' },
          { label: 'Completed this month', value: '52' },
          { label: 'Properties covered', value: '128' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl bg-bg-muted p-3">
            <p className="text-xs text-fg-muted">{stat.label}</p>
            <p className="mt-1 text-xl font-bold text-fg">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <p className="mb-2 text-xs font-semibold text-fg-muted">Jobs completed this week</p>
        <div className="flex h-14 items-end gap-1.5">
          {[38, 55, 47, 70, 60, 30, 20].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-brand-200 transition-all hover:bg-brand-400"
              style={{ height: `${(h / 70) * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {[
          { label: 'Elm Court, Block A', status: 'In progress', dot: 'bg-accent-400' },
          { label: '14 Birch Road', status: 'Access confirmed', dot: 'bg-emerald-400' },
          { label: 'Kestrel House', status: 'Awaiting response', dot: 'bg-accent-400' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-lg bg-bg-muted px-3 py-2"
          >
            <span className="text-xs font-medium text-fg">{item.label}</span>
            <div className="flex items-center gap-1.5">
              <div className={`h-2 w-2 rounded-full ${item.dot}`} />
              <span className="text-xs text-fg-muted">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const sharedViewCards = [
  {
    Icon: LuClipboardList,
    title: 'Clearer job information',
    description:
      'Give contractors access to the information they need to understand the work, property and resident requirements before attending.',
  },
  {
    Icon: LuCalendarClock,
    title: 'Coordinated appointments',
    description:
      'Keep appointment details, resident responses and access requirements visible to the teams responsible for delivery.',
  },
  {
    Icon: LuMessageCircle,
    title: 'Consistent resident updates',
    description:
      'Help residents understand when work will happen, who will attend and what they need to do beforehand.',
  },
  {
    Icon: LuActivity,
    title: 'Visible progress',
    description:
      'Share job status, outstanding actions and completion information with the housing teams managing the programme.',
  },
  {
    Icon: LuFileText,
    title: 'Better records',
    description:
      'Keep communication, updates and supporting documents connected to the relevant work and property.',
  },
  {
    Icon: LuLayers,
    title: 'Programme oversight',
    description:
      'Track activity across multiple homes, streets, estates or neighbourhoods from one coordinated platform.',
  },
]

const sharedRecordItems = [
  { Icon: LuClipboardList, label: 'Planned work' },
  { Icon: LuBuilding2, label: 'Property information' },
  { Icon: LuCalendarClock, label: 'Appointment details' },
  { Icon: LuMessageCircle, label: 'Resident communication' },
  { Icon: LuKey, label: 'Access requirements' },
  { Icon: LuActivity, label: 'Work status' },
  { Icon: LuFileText, label: 'Supporting notes and documents' },
  { Icon: LuCircleCheck, label: 'Completion updates' },
  { Icon: LuHistory, label: 'Outstanding actions' },
]

const residentInformation = [
  'What work is planned',
  'Why the work is needed',
  'When contractors are expected',
  'Who will be attending',
  'How long the work may take',
  'Whether access to particular rooms is required',
  'Any steps they should take before the visit',
  'Changes to appointment times',
  'Progress during longer programmes',
  'What happens after the work is complete',
]

const missedAppointmentImpact = [
  { Icon: LuHardHat, label: 'The contractor loses productive time' },
  { Icon: LuBuilding2, label: 'The housing provider has to rearrange the work' },
  { Icon: LuLayers, label: 'Programme schedules can slip' },
  { Icon: LuUserRound, label: 'The resident must wait longer for the work to be completed' },
]

const resolveCards = [
  {
    Icon: LuClipboardList,
    title: 'Better information before attendance',
    description:
      'Photos, resident descriptions and property information can help contractors understand the reported issue before visiting.',
  },
  {
    Icon: LuActivity,
    title: 'Clearer progress updates',
    description:
      'Housing teams can follow the status of work and keep residents informed without relying on repeated manual contact.',
  },
  {
    Icon: LuPhoneOff,
    title: 'Fewer status enquiries',
    description:
      'When residents can see that their issue has been received and is progressing, they have less need to call for updates.',
  },
  {
    Icon: LuShieldCheck,
    title: 'Stronger completion records',
    description:
      'Completion information, notes and supporting evidence can be connected to the relevant repair or property.',
  },
]

const retrofitScope = [
  'Initial resident communication',
  'Property-level work information',
  'Surveys and assessment appointments',
  'Resident preparation',
  'Installation scheduling',
  'Access coordination',
  'Progress updates',
  'Supporting documents',
  'Evidence capture',
  'Completion information',
  'Aftercare guidance',
  'Programme reporting',
]

const retrofitAudiences = [
  {
    Icon: LuHardHat,
    label: 'For contractors',
    description: 'A clearer view of resident readiness and property progress across many properties.',
  },
  {
    Icon: LuBuilding2,
    label: 'For housing providers',
    description: 'Stronger oversight of programme delivery from initial contact to completion.',
  },
  {
    Icon: LuUserRound,
    label: 'For residents',
    description: 'A process that is easier to understand, from the first introduction to completed improvements.',
  },
]

const communicationRisks = [
  { Icon: LuMessageCircle, label: 'Conflicting messages' },
  { Icon: LuRefreshCw, label: 'Repeated questions' },
  { Icon: LuUsers, label: 'Duplicated contact' },
  { Icon: LuCircleHelp, label: 'Unclear responsibilities' },
  { Icon: LuBellOff, label: 'Missed updates' },
  { Icon: LuClipboardList, label: 'Unnecessary administration' },
  { Icon: LuClock, label: 'Delays caused by incomplete information' },
]

const programmeChecklist = [
  'Which properties are included',
  'Which residents have been contacted',
  'Where appointments have been arranged',
  'Which homes are ready for work',
  'Where access support is required',
  'Which visits have taken place',
  'What work is in progress',
  'Which properties are complete',
  'What evidence has been captured',
  'Which actions remain outstanding',
]

const contractorJourney = [
  {
    number: '01',
    title: 'Work is prepared',
    description:
      'The housing provider or programme team records the relevant job, property and resident information.',
  },
  {
    number: '02',
    title: 'Residents receive clear information',
    description: 'Residents are told what work is planned, why it is happening and what they need to do.',
  },
  {
    number: '03',
    title: 'Appointments are coordinated',
    description:
      'Housing teams, contractors and resident liaison staff work from the latest appointment and access information.',
  },
  {
    number: '04',
    title: 'Progress is recorded',
    description:
      'Work status, notes, supporting documents and evidence can be added as the job or programme progresses.',
  },
  {
    number: '05',
    title: 'Completion is shared',
    description: 'Completed work is recorded and residents receive clear information about the outcome.',
  },
]

const benefitsByAudience = [
  {
    audience: 'For contractors',
    items: [
      { Icon: LuClipboardList, title: 'Arrive better informed', description: 'Access clearer information about the job, property and resident requirements before attending.' },
      { Icon: LuCalendarCheck, title: 'Reduce wasted visits', description: 'Support better appointment communication, resident preparation and access coordination.' },
      { Icon: LuMessageCircle, title: 'Share updates more easily', description: 'Provide progress and completion information through a clearer, connected process.' },
      { Icon: LuUsers, title: 'Reduce duplicated communication', description: 'Work from the same information as housing teams and resident liaison staff.' },
      { Icon: LuFileText, title: 'Support programme reporting', description: 'Capture property-level progress and evidence across larger programmes.' },
    ],
  },
  {
    audience: 'For housing providers',
    items: [
      { Icon: LuEye, title: 'Improve contractor visibility', description: 'See progress across jobs, properties and delivery partners.' },
      { Icon: LuMegaphone, title: 'Keep residents informed', description: 'Provide timely, consistent information before, during and after work.' },
      { Icon: LuShieldCheck, title: 'Strengthen accountability', description: 'Maintain clearer records of communication, activity and outstanding actions.' },
      { Icon: LuLayers, title: 'Coordinate at scale', description: 'Track progress across properties, neighbourhoods and programme areas.' },
      { Icon: LuLayoutDashboard, title: 'Improve operational oversight', description: 'Give contract, programme and housing teams a more complete view of delivery.' },
    ],
  },
  {
    audience: 'For residents',
    items: [
      { Icon: LuInfo, title: 'Know what is happening', description: 'Receive clear information about planned work and appointments.' },
      { Icon: LuCircleCheck, title: 'Be better prepared', description: 'Understand what contractors need and what to expect during the visit.' },
      { Icon: LuActivity, title: 'Get consistent updates', description: 'See progress without needing to contact multiple teams.' },
      { Icon: LuUsers, title: 'Feel included', description: 'Stay informed throughout repairs, planned works and retrofit programmes.' },
      { Icon: LuHandshake, title: 'Have greater confidence', description: 'Know that the work, communication and next steps are being properly tracked.' },
    ],
  },
]

const partnershipContributions = [
  'Better resident communication',
  'Improved appointment coordination',
  'Clearer programme reporting',
  'More transparent progress tracking',
  'Stronger evidence capture',
  'Fewer avoidable delays',
  'A more consistent resident experience',
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContractorsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section first className="overflow-hidden bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Partners
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                For Contractors
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
                Work more closely with housing providers, keep residents informed and deliver
                repairs, maintenance and retrofit programmes with greater visibility from first
                appointment to completed work.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/70 sm:text-xl">
                HomeHub connects the people involved in improving residents&rsquo; homes.
                Contractors receive clearer information, housing teams gain better oversight and
                residents understand what is happening at every stage.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/contact" color="accent">
                  Talk to HomeHub
                  <LuChevronRight className="ml-0.5 h-4 w-4" />
                </Button>
                <Button
                  href="/partners"
                  variant="outline"
                  color="violet"
                  className="border-white/30 text-white hover:border-white/60"
                >
                  Explore Our Partners
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <ContractorJobPreview />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Better work starts with better communication ── */}
      <Section className="bg-bg-muted py-20 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              heading="Better work starts with better communication"
              description="Delivering work in residents' homes involves more than completing the job itself. Appointments need to be arranged, residents need to understand what is happening, access requirements must be recorded, housing teams need progress updates and contractors need accurate information before they attend. When those details are spread across calls, emails, spreadsheets and separate systems, communication becomes harder to manage, messages can be missed, information can be duplicated and residents may receive different answers from different teams."
              align="center"
            />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-fg-muted">
              HomeHub creates a clearer connection between housing providers, contractors and
              residents, giving everyone a better understanding of the work being delivered, what
              has already happened and what needs to happen next.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── One shared view of the work ── */}
      <Section data-theme="brand-light" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="One shared view of the work"
              heading="Connect contractors, housing teams and residents"
              description="HomeHub supports coordinated delivery across repairs, planned maintenance, property improvements and social housing retrofit programmes — helping reduce unnecessary calls, repeated questions and avoidable delays."
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.08}
          >
            {sharedViewCards.map(({ Icon, title, description }) => (
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

      {/* ── Contractor collaboration ── */}
      <Section className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                Contractor collaboration
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Work from the same information
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Successful contractor and landlord collaboration depends on both sides having
                accurate, up-to-date information. HomeHub supports a more connected way of
                working by bringing job information, resident communication and progress updates
                together.
              </p>
              <p className="mt-4 text-fg-muted">
                Contractors can see the details relevant to their work. Housing teams can follow
                what is happening without chasing updates across multiple channels. Resident
                liaison teams can understand what residents have already been told and whether
                further support is needed. This creates clearer responsibility across every stage
                of delivery.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                  A shared record of
                </p>
                <ul className="mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                  {sharedRecordItems.map(({ Icon, label }) => (
                    <li key={label} className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-brand-50">
                        <Icon className="h-3.5 w-3.5 text-brand-700" strokeWidth={1.75} />
                      </div>
                      <span className="text-sm font-medium text-fg">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Resident communication during works ── */}
      <Section data-theme="brand-light" className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Resident communication during works"
              heading="Help residents feel prepared"
              description="For residents, work inside the home can be disruptive. HomeHub helps housing providers and delivery teams explain what is happening in plain language, giving residents time to prepare and confidence that the work is being properly managed."
              align="center"
            />
          </FadeIn>

          <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {residentInformation.map((item) => (
              <li key={item} className="flex gap-2.5">
                <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-600" strokeWidth={1.75} />
                <span className="text-sm leading-relaxed text-fg-muted">{item}</span>
              </li>
            ))}
          </ul>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-fg-muted">
              This practical communication supports better resident access and helps reduce
              missed appointments caused by unclear or incomplete information. It also creates a
              more consistent experience, as residents are less likely to receive different
              messages from the contractor, landlord and programme team.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Access and appointment coordination ── */}
      <Section className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                Access and appointment coordination
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Reduce avoidable delays
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                A missed appointment affects everyone. HomeHub supports clearer contractor
                appointment management by helping teams coordinate the information around each
                visit.
              </p>
              <p className="mt-4 text-fg-muted">
                Housing providers can communicate appointment details directly to residents.
                Residents can receive reminders and understand what is required before the
                contractor arrives. For larger programmes, teams can identify properties where
                contact has been made, appointments have been arranged or further action is
                required.
              </p>
            </FadeIn>

            <FadeInStagger className="space-y-4" stagger={0.08}>
              {missedAppointmentImpact.map(({ Icon, label }) => (
                <FadeInItem key={label} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-50">
                    <Icon className="h-4 w-4 text-brand-700" strokeWidth={1.75} />
                  </div>
                  <span className="text-sm font-medium text-fg">{label}</span>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </Container>
      </Section>

      {/* ── Repairs and planned maintenance ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Repairs and planned maintenance"
              heading="Keep work moving from report to resolution"
              description="HomeHub Resolve supports the journey from a resident reporting an issue through to repair progress and final completion — giving contractors better context before attending and a clearer way to share progress."
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.08}
          >
            {resolveCards.map(({ Icon, title, description }) => (
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

          <FadeIn delay={0.2} className="mt-12 text-center">
            <Button href="/platform/resolve">
              See the Resolve Platform
              <LuChevronRight className="ml-0.5 h-4 w-4" />
            </Button>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Retrofit delivery ── */}
      <Section data-theme="brand-light" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              Retrofit delivery
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              Coordinate improvements across entire programmes
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              Social housing retrofit requires careful coordination between housing providers,
              contractors, installers and residents. The physical installation is only one part
              of the programme — residents need to understand why improvements are being made,
              what will happen inside their home and how the changes may affect them.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                Contractors and programme teams can use HomeHub to support
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {retrofitScope.map((item) => (
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

          <FadeInStagger className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3" stagger={0.08}>
            {retrofitAudiences.map(({ Icon, label, description }) => (
              <FadeInItem key={label}>
                <div className="flex h-full flex-col gap-2 rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4 flex-none text-brand-700" strokeWidth={1.75} />
                    <span className="text-sm font-semibold text-fg">{label}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-fg-muted">{description}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.2} className="mt-12 text-center">
            <Button href="/landlords/retrofit-funding">
              Explore Retrofit Support
              <LuChevronRight className="ml-0.5 h-4 w-4" />
            </Button>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Energy improvements residents can understand ── */}
      <Section className="bg-bg py-20 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Energy improvements residents can understand"
              heading="Connect the work to the benefit"
              description="Energy-efficiency improvements can involve technical language that is difficult for residents to understand. HomeHub Energy helps translate property and energy information into clear, useful guidance, so residents can learn more about their home's energy performance and access practical energy-saving advice."
              align="center"
            />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-fg-muted">
              This supports contractors and retrofit teams by helping residents connect the
              installation work with the benefits it is intended to provide, leading to better
              preparation, more constructive conversations and stronger engagement throughout the
              programme.
            </p>
            <div className="mt-10">
              <Button href="/platform/energy">
                See the Energy Platform
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Shared communication visibility ── */}
      <Section data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Shared communication visibility
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">Keep everyone aligned</h2>
              <p className="mt-4 text-lg text-fg-muted">
                When communication is split between different teams, it is easy for information
                to become inconsistent. A resident may speak to the landlord, contractor and
                resident liaison officer separately, with each conversation containing
                information the other teams cannot see.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                HomeHub creates a clearer communication layer around the property, work and
                resident journey — supporting accountability by showing what has been
                communicated, what actions are outstanding and where responsibility sits.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  This shared visibility helps reduce
                </p>
                <ul className="mt-5 space-y-4">
                  {communicationRisks.map(({ Icon, label }) => (
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

      {/* ── Programme coordination ── */}
      <Section data-theme="brand-light" className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Programme coordination"
              heading="See progress across every property"
              description="Managing one repair or installation is very different from coordinating work across hundreds or thousands of homes. HomeHub brings together property progress, resident communication and work status, so programme teams understand:"
              align="center"
            />
          </FadeIn>

          <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {programmeChecklist.map((item) => (
              <li key={item} className="flex gap-2.5">
                <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-600" strokeWidth={1.75} />
                <span className="text-sm leading-relaxed text-fg-muted">{item}</span>
              </li>
            ))}
          </ul>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-fg-muted">
              This gives housing providers and delivery partners a clearer understanding of
              progress across the programme, making it easier to identify delays, focus attention
              and provide accurate updates to operational and programme teams.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── From planned work to completion ── */}
      <Section data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              From planned work to completion
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">A clearer contractor journey</h2>
          </FadeIn>

          <div className="relative mt-16">
            <div
              className="absolute left-1/12 right-1/12 top-8 hidden h-0.5 rounded-full bg-white/10 lg:block"
              aria-hidden="true"
            />
            <FadeInStagger
              className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5"
              stagger={0.1}
            >
              {contractorJourney.map((step) => (
                <FadeInItem key={step.number}>
                  <div className="group flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-16 w-16 flex-none items-center justify-center rounded-full bg-primary shadow-md ring-4 ring-bg transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                      <span className="text-lg font-bold text-primary-fg">{step.number}</span>
                    </div>
                    <div className="mt-6 rounded-2xl px-4 pb-4 pt-3">
                      <h3 className="text-base font-bold text-fg">{step.title}</h3>
                      <p className="mt-2 max-w-[24ch] text-sm leading-relaxed text-fg-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>
        </Container>
      </Section>

      {/* ── Benefits for every part of the service ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              heading="Benefits for every part of the service"
              align="center"
            />
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
            {benefitsByAudience.map(({ audience, items }) => (
              <FadeIn key={audience}>
                <h3 className="text-lg font-bold text-fg">{audience}</h3>
                <ul className="mt-5 space-y-4">
                  {items.map(({ Icon, title, description }) => (
                    <li key={title} className="flex gap-3">
                      <div className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-50">
                        <Icon className="h-4 w-4 text-brand-700" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-fg">{title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-fg-muted">{description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── A stronger partnership with housing providers ── */}
      <Section className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="A stronger partnership with housing providers"
              heading="Deliver more than the work itself"
              description="Housing providers are looking for delivery partners who can provide quality work, clear communication and a positive resident experience. HomeHub helps contractors demonstrate all three — by improving the flow of information between contractors, landlords and residents, contractors can strengthen their relationship with housing providers by contributing to:"
              align="center"
            />
          </FadeIn>

          <ul className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {partnershipContributions.map((item) => (
              <li key={item} className="flex gap-2.5">
                <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-600" strokeWidth={1.75} />
                <span className="text-sm leading-relaxed text-fg-muted">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ── Become a HomeHub partner ── */}
      <Section className="overflow-hidden bg-brand-950 py-20 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Become a HomeHub partner
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Build better outcomes together
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              HomeHub works with contractors, retrofit providers and housing delivery partners
              that want to improve how work is coordinated and communicated. Whether you deliver
              responsive repairs, planned maintenance, property improvements or large-scale
              retrofit programmes, HomeHub can help connect your work with the housing teams and
              residents it affects.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              Together, we can make delivery clearer, improve resident confidence and give
              housing providers better visibility across their programmes.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact" color="accent">
                Talk to HomeHub
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
              <Button
                href="/partners"
                variant="outline"
                color="violet"
                className="border-white/30 text-white hover:border-white/60"
              >
                Explore Our Partners
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Final CTA ── */}
      <Section data-theme="accent" className="bg-bg py-20 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-fg sm:text-4xl">
              Better coordination. Better communication. Better delivery.
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              HomeHub brings contractors, housing providers and residents together around the
              same work. Give your teams clearer information, keep residents informed and provide
              housing partners with the visibility they need across every property and programme.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact">
                Talk to HomeHub
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
