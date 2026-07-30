import Link from 'next/link'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { AppStoreLink } from '@/components/AppStoreLink'
import { GooglePlayLink } from '@/components/GooglePlayLink'
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/FadeIn'
import {
  LuChevronRight,
  LuArrowRight,
  LuGauge,
  LuSearch,
  LuLayers,
  LuCircleGauge,
  LuCircleCheck,
  LuX,
  LuWind,
  LuThermometerSun,
  LuDoorOpen,
  LuSparkles,
  LuLightbulb,
  LuSun,
  LuBatteryCharging,
  LuFlame,
  LuHammer,
  LuBookOpen,
  LuCalendarClock,
  LuFolder,
  LuBanknote,
  LuMapPin,
  LuHouse,
  LuFileText,
  LuBell,
  LuMessageSquare,
  LuGraduationCap,
  LuGift,
  LuShieldCheck,
} from 'react-icons/lu'

export const metadata = {
  title: 'HomeHub for Homeowners | Understand Your Home Energy Performance',
  description:
    "Understand your home's EPC, energy performance and improvement opportunities with HomeHub. Explore practical energy-saving guidance and keep useful property information in one simple app.",
}

// ─── Inline components ───────────────────────────────────────────────────────

function HomeOverviewPreview() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
            Your Home
          </p>
          <p className="mt-0.5 text-lg font-bold text-white">14 Elm Grove</p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
          <LuHouse className="h-4 w-4 text-accent-400" strokeWidth={1.75} />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-4 rounded-xl bg-white/5 p-4">
        <div className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-accent-400">
          <span className="text-xl font-bold text-brand-950">C</span>
        </div>
        <div>
          <p className="text-xs text-white/50">EPC Rating</p>
          <p className="text-sm font-semibold text-white">Current rating: C</p>
        </div>
      </div>

      <div className="mt-4 space-y-2.5">
        {[
          { label: 'Energy performance', meta: 'Overview available' },
          { label: 'Improvement priorities', meta: '4 areas to explore' },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
          >
            <span className="text-sm font-medium text-white/80">{row.label}</span>
            <span className="text-xs text-white/40">{row.meta}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-accent-400 px-4 py-3.5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-950/60">
          Recommended next step
        </p>
        <p className="mt-0.5 text-sm font-bold text-brand-950">
          View your home-improvement options
        </p>
      </div>
    </div>
  )
}

function YourHomePreview() {
  const rows = [
    { Icon: LuCircleGauge, title: 'EPC Rating', meta: 'Current rating: C' },
    { Icon: LuGauge, title: 'Energy Performance', meta: 'How your home currently performs' },
    { Icon: LuSearch, title: 'Improvement Priorities', meta: 'Explore the areas that matter most' },
    { Icon: LuArrowRight, title: 'Recommended Next Step', meta: 'View your home-improvement options' },
  ]
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">Your Home</p>
      <div className="mt-4 space-y-2.5">
        {rows.map(({ Icon, title, meta }) => (
          <div
            key={title}
            className="flex items-center gap-3 rounded-xl bg-bg-muted px-4 py-3.5"
          >
            <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-brand-50">
              <Icon className="h-4 w-4 text-brand-700" strokeWidth={1.75} />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-fg">{title}</p>
              <p className="text-xs text-fg-muted">{meta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AskHomeHubPreview() {
  const suggestions = [
    'Explain my EPC rating',
    'Show simple energy-saving actions',
    'Explore home-improvement options',
    'Understand heat pumps',
    'Learn about insulation',
  ]
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brand-50">
          <LuSparkles className="h-4 w-4 text-brand-700" strokeWidth={1.75} />
        </div>
        <p className="text-sm font-semibold text-fg">Ask HomeHub</p>
      </div>

      <div className="mt-4 rounded-xl bg-bg-muted px-4 py-3">
        <p className="text-sm text-fg-muted">What would you like to know about your home?</p>
      </div>

      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-fg-subtle">
        Suggested questions
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {suggestions.map((label) => (
          <span
            key={label}
            className="rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-medium text-fg"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

function HomeDashboardPreview() {
  const rows = [
    { Icon: LuHouse, title: 'Property Overview', meta: 'See important details about your property' },
    { Icon: LuCircleGauge, title: 'Energy Rating', meta: 'Understand your current EPC rating' },
    { Icon: LuGauge, title: 'Energy Performance', meta: 'Explore how your home uses and retains energy' },
    { Icon: LuArrowRight, title: 'Next Improvement', meta: 'View a recommended area to explore' },
    { Icon: LuFileText, title: 'Your Documents', meta: 'Keep useful property information close at hand' },
    { Icon: LuLightbulb, title: 'Energy-Saving Tips', meta: 'Discover simple actions for your home' },
  ]
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">Your Home</p>
      <div className="mt-4 space-y-2">
        {rows.map(({ Icon, title, meta }) => (
          <div key={title} className="flex items-center gap-3 rounded-xl bg-bg-muted px-4 py-3">
            <Icon className="h-4 w-4 flex-none text-brand-700" strokeWidth={1.75} />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-fg">{title}</p>
              <p className="text-xs text-fg-muted">{meta}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const understandBenefits = [
  {
    Icon: LuCircleGauge,
    title: 'Understand your EPC',
    description:
      "See your property's Energy Performance Certificate rating and understand what it says about the energy efficiency of your home.",
  },
  {
    Icon: LuSearch,
    title: 'Identify improvement areas',
    description: 'Explore where your home may be losing energy and which parts of the property could be improved.',
  },
  {
    Icon: LuLayers,
    title: 'See the bigger picture',
    description:
      'Understand how the age, construction, heating and insulation of your property can influence its energy performance.',
  },
  {
    Icon: LuArrowRight,
    title: 'Find your next step',
    description: 'Move from general information to clear, practical actions that are relevant to your home.',
  },
]

const energyCostPoints = [
  {
    Icon: LuGauge,
    title: 'See your energy information clearly',
    description: 'Bring useful energy and property information into one easy-to-read view.',
  },
  {
    Icon: LuCalendarClock,
    title: 'Understand seasonal changes',
    description: 'Learn why heating, hot water and everyday energy use can change at different times of year.',
  },
  {
    Icon: LuSearch,
    title: 'Find areas to improve',
    description: 'Explore the parts of your home that may be contributing to higher energy use.',
  },
  {
    Icon: LuLightbulb,
    title: 'Discover practical actions',
    description: 'Find useful steps that can help your home use energy more efficiently.',
  },
]

const withoutHomeHub = [
  'Energy information spread across bills, certificates, documents and websites.',
  "Technical language that makes it difficult to understand your home's performance.",
  'General advice that does not feel connected to your property.',
  'Uncertainty about which improvements to explore first.',
]

const withHomeHub = [
  'A clear overview of your home and its energy performance.',
  "Plain-English explanations of your EPC and property information.",
  'Practical guidance connected to your home.',
  'A simple path from understanding to action.',
]

const basicImprovements = [
  'Draught proofing',
  'Loft insulation',
  'Heating controls',
  'Improved ventilation',
  'Energy-saving habits',
  'Window and door improvements',
]

const largerImprovements = [
  'Wall insulation',
  'Floor insulation',
  'Heating-system upgrades',
  'Solar panels',
  'Battery storage',
  'Heat pumps',
  'Improved windows and doors',
]

const improvementCards = [
  { Icon: LuWind, title: 'Draught Proofing', description: 'Find common sources of draughts and explore simple ways to reduce unwanted heat loss.' },
  { Icon: LuLayers, title: 'Loft Insulation', description: 'Understand how loft insulation can help retain heat and improve the comfort of your home.' },
  { Icon: LuHammer, title: 'Wall and Floor Insulation', description: 'Explore the different ways walls and floors can be improved to reduce heat loss.' },
  { Icon: LuThermometerSun, title: 'Heating Controls', description: 'Learn how better control over your heating can help your home use energy more effectively.' },
  { Icon: LuDoorOpen, title: 'Windows and Doors', description: 'Understand how your windows and doors contribute to heat loss, comfort and energy performance.' },
  { Icon: LuSun, title: 'Solar Energy', description: 'Explore how solar panels can generate electricity for your home and support your wider energy plans.' },
  { Icon: LuBatteryCharging, title: 'Battery Storage', description: 'Learn how home batteries can store energy for use when you need it.' },
  { Icon: LuFlame, title: 'Heat Pumps', description: 'Understand how heat pumps work and how they could form part of a more efficient heating system.' },
  { Icon: LuWind, title: 'Ventilation', description: 'Explore how good ventilation supports comfort, air quality and the overall performance of your home.' },
]

const journeySteps = [
  { number: '01', title: 'Explore your home', description: 'View useful property details, energy information and your current EPC rating.' },
  { number: '02', title: 'Understand the opportunities', description: 'See the parts of your home that could offer the greatest opportunities for improvement.' },
  { number: '03', title: 'Compare possible actions', description: 'Learn what different improvements involve and how they could benefit your property.' },
  { number: '04', title: 'Plan with confidence', description: 'Decide which actions fit your home, priorities and long-term plans.' },
  { number: '05', title: 'Track your progress', description: 'Keep your home information together as improvements are completed and your property changes over time.' },
]

const supportPoints = [
  { Icon: LuLightbulb, title: 'Energy-saving guidance', description: 'Discover simple actions that can help your home use energy more efficiently.' },
  { Icon: LuBookOpen, title: 'Home-improvement guides', description: 'Understand what different improvements involve before deciding what to explore next.' },
  { Icon: LuCalendarClock, title: 'Seasonal home advice', description: 'Find useful tips for keeping your home comfortable and efficient throughout the year.' },
  { Icon: LuHammer, title: 'Maintenance information', description: 'Access practical guidance that helps you look after your property.' },
  { Icon: LuBanknote, title: 'Funding and support', description: 'Discover information about energy-efficiency schemes, local initiatives and available support.' },
  { Icon: LuMapPin, title: 'Local resources', description: 'Find services, projects and community initiatives that may be useful in your area.' },
]

const aiQuestions = [
  'What does my EPC rating mean?',
  'Where should I start with improving my home?',
  'What is draught proofing?',
  'What is the difference between loft insulation and wall insulation?',
  'How do heat pumps work?',
  'What simple energy-saving actions can I try?',
  'What should I understand before installing solar panels?',
  'How can I make my home warmer?',
  'Which parts of my home affect energy performance?',
  'What information should I look at before planning improvements?',
]

const moreThanEnergy = [
  { Icon: LuGauge, title: 'Energy', description: 'Understand how your home performs and explore practical ways to improve it.' },
  { Icon: LuSparkles, title: 'AI', description: 'Ask questions and turn complicated information into clearer answers.' },
  { Icon: LuFolder, title: 'Documents', description: 'Keep useful home and property information together.' },
  { Icon: LuLightbulb, title: 'Energy Saving Tips', description: 'Discover simple ideas for reducing energy use and improving everyday efficiency.' },
  { Icon: LuMapPin, title: 'Community', description: 'Find local events, projects and initiatives happening near you.' },
  { Icon: LuMessageSquare, title: 'Messaging', description: 'Receive relevant information and updates in one familiar place.' },
  { Icon: LuGraduationCap, title: 'Training', description: 'Access straightforward learning and guidance on useful home-related topics.' },
  { Icon: LuGift, title: 'Free 2 Me', description: 'Discover offers, support and opportunities available through HomeHub.' },
]

const faqs = [
  {
    question: 'What information can I see about my home?',
    answer:
      'HomeHub brings together useful property, EPC, energy-performance and home-improvement information in one clear app.',
  },
  {
    question: 'What does an EPC rating mean?',
    answer:
      'An Energy Performance Certificate shows how energy efficient a property is. HomeHub helps explain your rating and the factors that contribute to it in plain English.',
  },
  {
    question: 'Can HomeHub help me decide where to start?',
    answer:
      "HomeHub helps you understand your home's current performance and explore the improvement areas that could be most useful to consider.",
  },
  {
    question: 'Does HomeHub include energy-saving guidance?',
    answer:
      'Yes. HomeHub provides practical energy-saving ideas, home-improvement guidance and useful information connected to your property.',
  },
  {
    question: 'Can I find information about funding and support?',
    answer:
      'HomeHub can connect you with relevant information about energy-efficiency support, funding schemes and local initiatives.',
  },
  {
    question: 'Is HomeHub only for social housing tenants?',
    answer:
      'No. HomeHub also helps homeowners understand their property, improve energy efficiency and keep useful home information together.',
  },
  {
    question: 'Can I use HomeHub to understand my EPC?',
    answer: 'Yes. HomeHub presents EPC and energy-performance information in a clearer, more accessible format.',
  },
  {
    question: 'What types of home improvements can I explore?',
    answer:
      'You can learn about improvements including draught proofing, insulation, heating controls, windows, solar panels, battery storage, heat pumps and ventilation.',
  },
  {
    question: 'How do I download HomeHub?',
    answer: 'HomeHub is available directly from the Apple App Store and Google Play.',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomeownersPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section first className="overflow-hidden bg-brand-950 py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
                Residents · For Homeowners
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Understand your home. Make better energy decisions.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl">
                HomeHub brings your property, energy performance and home-improvement information
                together in one simple app.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/70 sm:text-xl">
                Understand your EPC, explore practical ways to improve your home and find useful
                guidance based on your property.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <AppStoreLink color="white" />
                <GooglePlayLink color="white" />
              </div>
              <p className="mt-6 text-sm text-white/50">
                Clear home and energy information, wherever you need it.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <HomeOverviewPreview />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Understand Your Home ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                Your Home, Made Clear
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                See how your home performs
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Your home contains a lot of useful information, but it is often spread across
                energy bills, certificates, documents and different websites.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                HomeHub brings the important details together and presents them in a way that is
                easy to understand.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                See your property&rsquo;s energy rating, understand what it means and explore the
                parts of your home that could offer the biggest opportunities for improvement.
                From insulation and heating to windows, ventilation and renewable energy, HomeHub
                helps you build a clearer picture of how your home uses energy.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <YourHomePreview />
            </FadeIn>
          </div>

          <FadeInStagger
            className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.08}
          >
            {understandBenefits.map(({ Icon, title, description }) => (
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

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-fg-muted">
              Understand where your home is now, then decide where you want to take it.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Energy Costs ── */}
      <Section data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Understand Your Energy
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              Make more sense of your energy costs
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              Energy bills can be difficult to follow. Tariffs, standing charges, readings and
              seasonal changes can make it hard to understand what you are paying for and why
              your costs change.
            </p>
            <p className="mt-4 text-lg text-fg-muted">
              HomeHub helps connect your property&rsquo;s energy performance with the way your
              home uses energy. See the factors that may be affecting your costs, understand how
              usage can change throughout the year and discover practical ways to reduce
              unnecessary energy use.
            </p>
            <p className="mt-4 text-lg text-fg-muted">
              The result is a clearer view of your home and more confidence about what to do next.
            </p>
          </FadeIn>

          <FadeInStagger
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.08}
          >
            {energyCostPoints.map(({ Icon, title, description }) => (
              <FadeInItem key={title}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="h-5 w-5 text-accent-400" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-fg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{description}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── Comparison ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              A Clearer View
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              From scattered information to useful next steps
            </h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <FadeIn>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                  Without HomeHub
                </p>
                <ul className="mt-5 space-y-4">
                  {withoutHomeHub.map((item) => (
                    <li key={item} className="flex gap-3">
                      <LuX className="mt-0.5 h-4 w-4 flex-none text-fg-subtle" strokeWidth={2} />
                      <span className="text-sm leading-relaxed text-fg-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="h-full rounded-2xl border border-brand-100 bg-brand-50 p-6 shadow-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                  With HomeHub
                </p>
                <ul className="mt-5 space-y-4">
                  {withHomeHub.map((item) => (
                    <li key={item} className="flex gap-3">
                      <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-700" strokeWidth={2} />
                      <span className="text-sm leading-relaxed text-fg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Home Improvements ── */}
      <Section data-theme="brand-light" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Improve Your Home"
              heading="Explore practical ways to make your home more efficient"
              description="Every home is different. HomeHub helps you explore the improvements that could make your property warmer, more comfortable and more energy efficient. Understand what each improvement involves, why it may be useful and how it fits into the wider plan for your home."
              align="center"
            />
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <FadeIn>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <h3 className="font-semibold text-fg">Start with the basics</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  Small improvements can make a noticeable difference to everyday comfort and
                  energy use. Explore options such as:
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {basicImprovements.map((item) => (
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

            <FadeIn delay={0.1}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <h3 className="font-semibold text-fg">Plan your next step</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  Explore larger improvements based on your home, priorities and long-term plans.
                  HomeHub can help you understand options such as:
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {largerImprovements.map((item) => (
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
          </div>

          <FadeIn delay={0.15}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-fg-muted">
              Home improvements are easier to plan when you can see the full picture. HomeHub
              helps you understand how insulation, heating, ventilation and renewable energy can
              work together to improve the performance of your property.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Improvement Cards ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeInStagger
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.06}
          >
            {improvementCards.map(({ Icon, title, description }) => (
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

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-fg-muted">
              Build a home-improvement plan around your property, your priorities and what
              matters most to you.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── How It Works ── */}
      <Section data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Your Home-Improvement Journey
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              A clearer way to plan what comes next
            </h2>
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
              {journeySteps.map((step) => (
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

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-16 max-w-2xl text-center text-fg-muted">
              HomeHub gives you a simple view of where your home is today and the steps that
              could improve it tomorrow.
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Support and Resources ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Useful Help in One Place"
              heading="Find guidance, support and practical information"
              description="Improving your home can involve a lot of research. HomeHub makes it easier to find useful information, understand common improvement options and discover support that may be relevant to your property. Access practical guides, seasonal advice, maintenance information, energy-saving tips and details of local or national support."
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.08}
          >
            {supportPoints.map(({ Icon, title, description }) => (
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

          <FadeIn delay={0.2}>
            <div className="mx-auto mt-10 flex max-w-md flex-wrap items-center justify-center gap-4">
              <Link
                href="/resources/guides"
                className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-fg transition-colors hover:opacity-90"
              >
                Explore HomeHub Guides
                <LuChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/resources/faqs"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-fg transition-colors hover:bg-bg-muted"
              >
                View Frequently Asked Questions
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* ── HomeHub AI ── */}
      <Section data-theme="brand-light" className="bg-bg py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                Clear Answers, When You Need Them
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Ask HomeHub about your home
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                Home and energy information can quickly become technical. HomeHub AI helps turn
                complicated information into clear answers and useful next steps.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                Ask questions in your own words and get straightforward guidance that helps you
                understand your home, your EPC and the improvements available to you.
              </p>

              <FadeInStagger
                className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2"
                stagger={0.04}
              >
                {aiQuestions.map((question) => (
                  <FadeInItem key={question} className="flex items-start gap-2">
                    <LuChevronRight className="mt-1 h-3.5 w-3.5 flex-none text-brand-500" strokeWidth={2} />
                    <span className="text-sm text-fg-muted">{question}</span>
                  </FadeInItem>
                ))}
              </FadeInStagger>

              <p className="mt-6 text-sm font-medium text-fg-muted">
                Less searching. Less jargon. Clearer information about your home.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <AskHomeHubPreview />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── Home Dashboard ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                Everything in One Place
              </p>
              <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
                Your home information in one simple dashboard
              </h2>
              <p className="mt-4 text-lg text-fg-muted">
                HomeHub gives you a clear overview of your home from your phone. See important
                property information, understand your energy performance, explore improvement
                opportunities and keep useful documents and guidance close at hand.
              </p>
              <p className="mt-4 text-lg text-fg-muted">
                No searching through old emails, folders or different websites. The information
                you need is organised around your home.
              </p>

              <FadeInStagger className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { Icon: LuHouse, label: 'Your property' },
                  { Icon: LuCircleGauge, label: 'Energy performance' },
                  { Icon: LuSearch, label: 'Improvement opportunities' },
                  { Icon: LuFileText, label: 'Useful documents' },
                  { Icon: LuBell, label: 'Tips and reminders' },
                  { Icon: LuArrowRight, label: 'Progress' },
                ].map(({ Icon, label }) => (
                  <FadeInItem key={label} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 flex-none text-brand-700" strokeWidth={1.75} />
                    <span className="text-sm text-fg-muted">{label}</span>
                  </FadeInItem>
                ))}
              </FadeInStagger>
            </FadeIn>

            <FadeIn delay={0.15}>
              <HomeDashboardPreview />
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* ── More Than Energy ── */}
      <Section data-theme="brand" className="bg-bg py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              One App for Your Home
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              More useful information, support and opportunities
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              HomeHub is designed to become a useful part of looking after your home. Alongside
              energy and property information, the app can connect you with helpful documents,
              local activity, practical learning and relevant support.
            </p>
          </FadeIn>

          <FadeInStagger
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            stagger={0.06}
          >
            {moreThanEnergy.map(({ Icon, title, description }) => (
              <FadeInItem key={title}>
                <Card className="h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="h-5 w-5 text-accent-400" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-fg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{description}</p>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>

      {/* ── App Promotion ── */}
      <Section className="bg-bg py-20 sm:py-28">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              HomeHub in Your Pocket
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              Your home information, wherever you are
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              Check your home&rsquo;s energy performance, explore useful guidance and find your
              next step from your phone. HomeHub makes it easy to return to your information
              whenever you need it, whether you are reviewing your EPC, planning an improvement
              or looking for practical energy-saving advice.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <AppStoreLink />
              <GooglePlayLink />
            </div>
            <p className="mt-6 text-sm text-fg-muted">
              Not sure where to start?{' '}
              <Link
                href="/residents/download-app"
                className="font-medium text-brand-700 underline hover:text-brand-800"
              >
                Find out how to get started
              </Link>
              .
            </p>
          </FadeIn>
        </Container>
      </Section>

      {/* ── Homeowner FAQs ── */}
      <Section className="bg-bg-muted py-20 sm:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionHeader
              eyebrow="Frequently Asked Questions"
              heading="Questions about HomeHub for homeowners"
              align="center"
            />
          </FadeIn>

          <FadeInStagger
            className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2"
            stagger={0.06}
          >
            {faqs.map(({ question, answer }) => (
              <FadeInItem key={question}>
                <Card className="h-full">
                  <h3 className="text-base font-semibold text-fg">{question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{answer}</p>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.15}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-fg-muted">
              Have another question?{' '}
              <Link href="/resources/faqs" className="font-medium text-brand-700 underline hover:text-brand-800">
                View all Frequently Asked Questions
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
            <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              Start with HomeHub
            </p>
            <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">
              Understand your home. Plan what comes next.
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              Download HomeHub to explore your home&rsquo;s energy performance, discover practical
              improvements and keep useful property information close at hand.
            </p>
            <p className="mt-4 text-lg text-fg-muted">
              Better home decisions begin with clearer information.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <AppStoreLink />
              <GooglePlayLink />
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  )
}
