import Image from 'next/image'
import Link from 'next/link'
import epcScreen from '@/images/epc-rating-score.png'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { YouTubeEmbed } from '@/components/ui/YouTubeEmbed'
import { PhoneFrame } from '@/components/PhoneFrame'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import {
  LuChevronRight,
  LuArrowRight,
  LuReceipt,
  LuChartBar,
  LuLightbulb,
  LuLayoutDashboard,
  LuRadar,
  LuHardHat,
  LuBell,
  LuCalendarClock,
  LuUsers,
  LuBanknote,
  LuThermometer,
  LuFlag,
  LuHouse,
  LuHandHeart,
  LuLeaf,
  LuChartLine,
  LuTarget,
  LuBuilding2,
  LuFileText,
  LuBookOpen,
  LuGraduationCap,
  LuMegaphone,
} from 'react-icons/lu'

export const metadata = {
  title: 'Energy – Energy Performance & EPC Insights | HomeHub',
  description:
    'See energy performance, EPC data, and retrofit activity across your homes with HomeHub Energy — clearer insights for housing providers and residents alike.',
}

// ─── Inline components ───────────────────────────────────────────────────────

function EpcPortfolioPreview() {
  const stats = [
    { label: 'Average EPC rating', value: 'C · 72', trend: '+3 pts' },
    { label: 'Homes below EPC C', value: '18%', trend: '-6% YoY' },
    { label: 'Retrofit in progress', value: '23', trend: '+5' },
    { label: 'Improved this year', value: '46', trend: '+12' },
  ]

  const bands = [
    { band: 'A', height: 8 },
    { band: 'B', height: 22 },
    { band: 'C', height: 58 },
    { band: 'D', height: 40 },
    { band: 'E', height: 18 },
    { band: 'F', height: 9 },
    { band: 'G', height: 4 },
  ]

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
            EPC Portfolio
          </p>
          <p className="mt-0.5 text-lg font-bold text-white">Q4 2024</p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
          <LuRadar className="h-4 w-4 text-accent-400" strokeWidth={1.75} />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl bg-white/5 p-3">
            <p className="text-xs text-white/50">{stat.label}</p>
            <p className="mt-1 text-lg font-bold text-white">{stat.value}</p>
            <p className="text-xs font-semibold text-accent-400">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold text-white/40">EPC band distribution</p>
        <div className="flex h-14 items-end gap-1.5">
          {bands.map(({ band, height }) => (
            <div
              key={band}
              className="flex-1 rounded-t-sm bg-white/15 transition-all hover:bg-accent-400"
              style={{ height: `${(height / 58) * 100}%` }}
            />
          ))}
        </div>
        <div className="mt-1.5 flex gap-1.5">
          {bands.map(({ band }) => (
            <span key={band} className="flex-1 text-center text-[10px] font-medium text-white/40">
              {band}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const energyInsightPoints = [
  {
    Icon: LuReceipt,
    title: 'Clearer bill breakdowns',
    description: 'Give residents clearer explanations of their energy use and bills.',
  },
  {
    Icon: LuChartBar,
    title: 'Consistent information',
    description: 'Provide consistent energy information across homes and communities.',
  },
  {
    Icon: LuLightbulb,
    title: 'Where support is needed',
    description: 'Help housing teams identify where additional support may be needed.',
  },
  {
    Icon: LuLayoutDashboard,
    title: 'Portfolio-wide picture',
    description: 'Build a clearer picture of energy-related needs across the portfolio.',
  },
]

const retrofitPoints = [
  {
    Icon: LuHardHat,
    title: 'Plain-language explanations',
    description: 'Explain proposed energy improvements in plain language.',
  },
  {
    Icon: LuBell,
    title: 'Updates as work progresses',
    description: 'Share relevant updates and supporting information with residents.',
  },
  {
    Icon: LuCalendarClock,
    title: 'Engagement tracking',
    description: 'Track engagement across properties or retrofit programmes.',
  },
  {
    Icon: LuUsers,
    title: 'Progress recorded',
    description: 'Record progress as improvements are planned and completed.',
  },
  {
    Icon: LuBanknote,
    title: 'Funding signposting',
    description:
      'Direct residents towards appropriate support or funding information where relevant.',
  },
]

const fuelPovertyPoints = [
  {
    Icon: LuThermometer,
    title: 'A clearer picture',
    description: 'Build a clearer picture of potential energy-related vulnerability.',
  },
  {
    Icon: LuFlag,
    title: 'More informed conversations',
    description: 'Support more informed and sensitive resident conversations.',
  },
  {
    Icon: LuHouse,
    title: 'Prioritise outreach',
    description: 'Help teams prioritise outreach and further assessment.',
  },
  {
    Icon: LuHandHeart,
    title: 'A record of support offered',
    description: 'Keep a record of information shared and support offered.',
  },
]

const netZeroPoints = [
  {
    Icon: LuLeaf,
    title: 'Portfolio-wide monitoring',
    description: 'Monitor energy performance across the housing portfolio.',
  },
  {
    Icon: LuChartLine,
    title: 'Activity tracked over time',
    description: 'Track completed and planned improvement activity.',
  },
  {
    Icon: LuTarget,
    title: 'Where action is needed',
    description: 'Identify areas where further action may be needed.',
  },
  {
    Icon: LuBuilding2,
    title: 'Clearer reporting evidence',
    description: 'Support internal reporting with clearer property-level evidence.',
  },
  {
    Icon: LuFileText,
    title: 'Goals residents understand',
    description: 'Connect portfolio goals with information residents can understand.',
  },
]

const residentTipPoints = [
  {
    Icon: LuLightbulb,
    title: 'Timely guidance',
    description: 'Share clear and timely energy-saving guidance.',
  },
  {
    Icon: LuBookOpen,
    title: 'One familiar place',
    description: 'Keep advice accessible in one familiar place.',
  },
  {
    Icon: LuGraduationCap,
    title: 'Advice connected to your home',
    description: 'Connect general information to the resident’s home and circumstances.',
  },
  {
    Icon: LuMegaphone,
    title: 'Residents can contribute',
    description: 'Encourage residents to contribute useful ideas.',
  },
  {
    Icon: LuUsers,
    title: 'A wider community programme',
    description:
      'Connects to the Community programme for hands-on energy-saving support and recognition.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EnergyPage() {
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
                Understand energy performance across every home
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
                HomeHub Energy brings energy information, EPC data and retrofit progress into
                one clear view — helping housing providers understand their portfolio,
                communicate with residents and make better-informed decisions about where
                support and investment are needed.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/book-demo" color="accent">
                  Book a demo
                  <LuChevronRight className="ml-0.5 h-4 w-4" />
                </Button>
                <Button
                  href="#see-it-in-action"
                  variant="outline"
                  color="violet"
                  className="border-white/30 text-white hover:border-white/60"
                >
                  See how HomeHub works
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <Image
                  src={epcScreen}
                  alt="EPC rating score and energy-saving steps screen in the HomeHub app"
                />
              </PhoneFrame>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Energy insights & bill breakdown ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn>
            <SectionHeader
              eyebrow="Energy insights & bill breakdown"
              heading="Make household energy information easier to understand"
              description="Energy information can be difficult for residents to understand and difficult for housing providers to act on at scale. HomeHub helps turn complex energy and bill information into clearer insights — supporting better conversations with residents, clearer evidence of engagement, and more informed decisions about where further advice, support or property improvements may be needed."
              align="center"
            />
          </FadeIn>

          <FadeInStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.08}>
            {energyInsightPoints.map(({ Icon, title, description }) => (
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

      {/* ── EPC data & efficiency ratings ── */}
      <Section data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                EPC data & efficiency ratings
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                See the energy performance of your homes more clearly
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                EPC information is valuable, but it is often held separately from the wider
                resident and property picture. HomeHub brings EPC data and home-efficiency
                information together so housing providers can understand the current
                performance of individual homes and compare needs across the wider portfolio —
                helping teams identify lower-performing properties, prioritise further
                investigation and communicate improvement opportunities more clearly to
                residents.
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-fg">
                  A clearer view of each home&rsquo;s energy performance
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  Bring EPC information and key home-efficiency indicators together in one
                  understandable view. Housing teams can see where a property is performing
                  well, where improvement may be needed, and how its overall energy position
                  can be explained more clearly to the resident.
                </p>
              </div>

              <FadeIn delay={0.2} className="mt-10">
                <Button href="/book-demo" variant="solid" color="white">
                  Book a Demo
                  <LuChevronRight className="ml-0.5 h-4 w-4" />
                </Button>
              </FadeIn>
            </FadeIn>

            <FadeIn delay={0.15}>
              <EpcPortfolioPreview />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Retrofit engagement & funding ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <FadeIn>
                <SectionHeader
                  eyebrow="Retrofit engagement & funding"
                  heading="Keep residents informed throughout retrofit activity"
                  description="Retrofit programmes depend on resident understanding and participation as well as technical delivery. HomeHub gives housing providers a direct way to explain proposed improvements, share relevant information and keep residents updated as activity progresses — without relying on disconnected messages, documents and spreadsheets."
                />
              </FadeIn>

              <FadeInStagger className="mt-10 space-y-5" stagger={0.1}>
                {retrofitPoints.map(({ Icon, title, description }) => (
                  <FadeInItem key={title} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50">
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

              <FadeIn delay={0.2} className="mt-10">
                <Button href="/landlords/retrofit-funding">
                  Retrofit &amp; Funding
                  <LuChevronRight className="ml-0.5 h-4 w-4" />
                </Button>
              </FadeIn>
            </div>

            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                  Retrofit programme status
                </p>
                <div className="mt-4 space-y-4">
                  {['Survey scheduled', 'Works in progress', 'Improvements confirmed'].map(
                    (label) => (
                      <div key={label} className="flex items-center gap-3">
                        <div className="h-2.5 w-2.5 flex-none rounded-full bg-accent-400" />
                        <span className="text-sm text-fg">{label}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Fuel poverty identification ── */}
      <Section className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Fuel poverty identification"
              heading="Identify where residents may need more support"
              description="A property's energy performance is only part of the picture. Housing providers also need to understand how energy costs, household circumstances and the condition of the home may affect the resident. HomeHub can help bring relevant information together so housing teams can identify potential signs of fuel poverty or energy-related hardship earlier — giving providers clearer evidence to guide conversations, target support and refer residents to the right internal team or external service."
              align="center"
            />
          </FadeIn>

          <FadeInStagger className="mx-auto mt-14 max-w-3xl space-y-5" stagger={0.1}>
            {fuelPovertyPoints.map(({ Icon, title, description }) => (
              <FadeInItem key={title} className="flex gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50">
                  <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-semibold text-fg">{title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-fg-muted">{description}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.15}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-fg-muted">
              Every case stays with a person to review, so teams can decide the right follow-up
              and support with confidence.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Net zero progress tracking ── */}
      <Section data-theme="brand-light" className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <div>
              <FadeIn>
                <SectionHeader
                  eyebrow="Net zero progress tracking"
                  heading="Track progress from individual homes to the wider portfolio"
                  description="Net zero plans need clear evidence of what has changed, where investment has been made and what still needs attention. HomeHub helps housing providers track energy performance and improvement activity over time — building a clearer view of progress across homes, estates or programmes to support planning, reporting and future investment decisions."
                />
              </FadeIn>

              <FadeInStagger className="mt-10 space-y-5" stagger={0.1}>
                {netZeroPoints.map(({ Icon, title, description }) => (
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
                  Portfolio progress
                </p>
                <div className="mt-4 space-y-4">
                  {['Baseline recorded', 'Improvements logged', 'Reporting ready'].map(
                    (label) => (
                      <div key={label} className="flex items-center gap-3">
                        <div className="h-2.5 w-2.5 flex-none rounded-full bg-brand-700" />
                        <span className="text-sm text-fg">{label}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Resident education & tips ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Resident education & tips"
              heading="Help residents make informed choices at home"
              description="Clear, practical information can help residents understand their home and make better-informed decisions about energy use. HomeHub gives housing providers a consistent way to share relevant energy-saving guidance, connected to the resident's home, energy information or improvement journey — rather than relying on one-off campaigns or information that is difficult to find."
              align="center"
            />
          </FadeIn>

          <FadeInStagger className="mx-auto mt-14 max-w-3xl space-y-5" stagger={0.1}>
            {residentTipPoints.map(({ Icon, title, description }) => (
              <FadeInItem key={title} className="flex gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-50">
                  <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-semibold text-fg">{title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-fg-muted">{description}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.15} className="mx-auto mt-10 max-w-3xl">
            <Link
              href="/platform/community"
              className="group flex items-center justify-between rounded-2xl border border-brand-100 bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                  Resident Engagement
                </p>
                <p className="mt-0.5 text-base font-bold text-fg">
                  See how Community supports resident-led energy tips
                </p>
              </div>
              <LuArrowRight
                className="h-5 w-5 text-fg-subtle transition-transform duration-200 group-hover:translate-x-1 group-hover:text-fg"
                strokeWidth={1.75}
              />
            </Link>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Video introduction ── */}
      <Section id="see-it-in-action" data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="See it in action"
              heading="See HomeHub in 60 seconds"
              description="See how HomeHub helps housing providers share information, engage residents and build a clearer picture of every home."
              align="center"
            />
          </FadeIn>

          <FadeIn delay={0.15} className="mx-auto mt-12 max-w-3xl">
            <YouTubeEmbed
              videoId="dSdC6WJkXug"
              title="See HomeHub in 60 seconds"
              className="ring-1 ring-white/10"
            />
          </FadeIn>
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
              Energy works best alongside the full platform
            </h2>
            <p className="mt-3 max-w-2xl text-fg-muted">
              Combine Energy with Resolve and Community to give residents a complete home
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
                href="/platform/community"
                className="group flex items-center justify-between rounded-2xl border border-brand-100 bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-fg-subtle">
                    Resident Engagement
                  </p>
                  <p className="mt-0.5 text-base font-bold text-fg">Community</p>
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
              Build a clearer picture of energy performance across your homes
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              See how HomeHub can help your teams understand energy needs, communicate with
              residents and track progress across your housing portfolio.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/book-demo">
                Book a HomeHub demo
                <LuChevronRight className="ml-0.5 h-4 w-4" />
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
