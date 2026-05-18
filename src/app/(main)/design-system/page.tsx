import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { TextField, SelectField } from '@/components/Fields'
import {
  LuHouse,
  LuBell,
  LuCalendar,
  LuCircleCheck,
  LuChevronRight,
  LuClipboard,
  LuFileText,
  LuCircleHelp,
  LuInfo,
  LuLayoutDashboard,
  LuMail,
  LuMapPin,
  LuMessageSquare,
  LuPhone,
  LuSearch,
  LuSettings,
  LuShield,
  LuStar,
  LuHammer,
  LuUser,
  LuUsers,
  LuWrench,
  LuZap,
  LuTriangleAlert,
  LuX,
} from 'react-icons/lu'

export const metadata: Metadata = {
  title: 'Design System',
  robots: { index: false },
}

/* ── Section anchor helper ─────────────────────────────────── */
function SectionAnchor({ id }: { id: string }) {
  return <div id={id} className="-mt-24 pt-24" aria-hidden />
}

/* ── Section wrapper ───────────────────────────────────────── */
function Section({
  children,
  label,
  id,
}: {
  children: React.ReactNode
  label: string
  id: string
}) {
  return (
    <section className="border-b border-border py-16">
      <SectionAnchor id={id} />
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-fg-subtle">
        {label}
      </p>
      {children}
    </section>
  )
}

/* ── Sub-heading ───────────────────────────────────────────── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-2xl font-bold text-fg">
      {children}
    </h2>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 mt-10 text-base font-semibold text-fg">
      {children}
    </h3>
  )
}

/* ── Color swatch ──────────────────────────────────────────── */
function Swatch({
  bg,
  label,
  token,
  light = false,
}: {
  bg: string
  label: string
  token: string
  light?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="h-14 w-full rounded-xl border border-black/5 shadow-sm"
        style={{ background: bg }}
      />
      <p className="text-xs font-semibold text-fg">{label}</p>
      <p className="font-mono text-[10px] text-fg-subtle">{token}</p>
    </div>
  )
}

/* ── Card demos ────────────────────────────────────────────── */
function DemoCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-6 shadow-sm ${className}`}>
      {children}
    </div>
  )
}

/* ── Callout ───────────────────────────────────────────────── */
type CalloutVariant = 'info' | 'warning' | 'success' | 'neutral'

const calloutConfig: Record<
  CalloutVariant,
  { bg: string; border: string; iconColor: string; Icon: React.ElementType; label: string }
> = {
  info: {
    bg: 'bg-brand-50',
    border: 'border-brand-200',
    iconColor: 'text-brand-600',
    Icon: LuInfo,
    label: 'Information',
  },
  warning: {
    bg: 'bg-accent-100',
    border: 'border-accent-300',
    iconColor: 'text-accent-700',
    Icon: LuTriangleAlert,
    label: 'Note',
  },
  success: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    iconColor: 'text-green-600',
    Icon: LuCircleCheck,
    label: 'Success',
  },
  neutral: {
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    iconColor: 'text-gray-500',
    Icon: LuInfo,
    label: 'Note',
  },
}

function Callout({
  variant,
  title,
  children,
}: {
  variant: CalloutVariant
  title: string
  children: React.ReactNode
}) {
  const c = calloutConfig[variant]
  return (
    <div className={`flex gap-3 rounded-xl border p-4 ${c.bg} ${c.border}`}>
      <c.Icon className={`mt-0.5 h-5 w-5 flex-none ${c.iconColor}`} />
      <div>
        <p className="text-sm font-semibold text-fg">{title}</p>
        <p className="mt-0.5 text-sm text-fg-muted">{children}</p>
      </div>
    </div>
  )
}

/* ── Illustrated card (blob style) ────────────────────────── */
function IllustrationCard({
  blobColor,
  icon: Icon,
  title,
  description,
}: {
  blobColor: string
  icon: React.ElementType
  title: string
  description: string
}) {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div
        className="relative flex h-20 w-20 flex-none items-center justify-center overflow-hidden rounded-2xl"
        style={{ backgroundColor: blobColor }}
      >
        <svg
          viewBox="0 0 80 80"
          fill="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <path
            d="M60 10 C80 10, 80 30, 70 50 C60 70, 40 80, 20 70 C0 60, 0 40, 10 20 C20 0, 40 10, 60 10Z"
            fill="currentColor"
            fillOpacity="0.25"
            className="text-white"
          />
        </svg>
        <Icon className="relative z-10 h-9 w-9 text-brand-700" strokeWidth={1.75} />
      </div>
      <div>
        <p className="font-bold text-fg">{title}</p>
        <p className="mt-0.5 text-sm text-fg-muted">{description}</p>
      </div>
    </div>
  )
}

/* ── Nav items ─────────────────────────────────────────────── */
const navItems = [
  { label: 'Colors', href: '#colors' },
  { label: 'Typography', href: '#typography' },
  { label: 'Iconography', href: '#iconography' },
  { label: 'Buttons', href: '#buttons' },
  { label: 'Cards', href: '#cards' },
  { label: 'Forms', href: '#forms' },
  { label: 'Callouts', href: '#callouts' },
  { label: 'Imagery', href: '#imagery' },
]

/* ── Page ──────────────────────────────────────────────────── */
export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-page">
      {/* Header */}
      <div data-theme="brand" className="bg-bg py-16">
        <Container>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
                HomeHub
              </p>
              <h1 className="mt-2 text-5xl font-bold text-fg">
                Design System
              </h1>
              <p className="mt-4 max-w-lg text-lg text-fg-muted">
                The single source of truth for HomeHub&apos;s visual language — tokens,
                components, patterns, and guidelines.
              </p>
            </div>
            <div className="hidden items-center gap-2 lg:flex">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-fg-muted">
                v1.0
              </span>
              <span className="rounded-full bg-accent-400/20 px-3 py-1 text-xs font-semibold text-accent-300">
                Internal
              </span>
            </div>
          </div>

          {/* Quick nav */}
          <nav className="mt-10 flex flex-wrap gap-2" aria-label="Design system sections">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium text-fg-muted transition-colors hover:border-white/40 hover:text-fg"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>

      <Container>
        {/* ══════════════════════════════════════════════════════
            1. COLORS
        ══════════════════════════════════════════════════════ */}
        <Section id="colors" label="01 — Foundation">
          <SectionHeading>Color System</SectionHeading>

          <p className="mb-10 max-w-2xl text-base text-fg-muted">
            HomeHub uses two brand palettes — <strong className="text-fg">Brand</strong> (deep
            purple) and <strong className="text-fg">Accent</strong> (warm amber-yellow) — plus a
            neutral gray scale. Semantic tokens map these palettes to intent-based roles, and
            section-level themes override those tokens contextually.
          </p>

          {/* Brand palette */}
          <SubHeading>Brand — Purple · #361B64</SubHeading>
          <div className="grid grid-cols-5 gap-3 sm:grid-cols-11">
            {[
              ['50',  'oklch(0.968 0.014 295)'],
              ['100', 'oklch(0.946 0.024 295)'],
              ['200', 'oklch(0.905 0.048 295)'],
              ['300', 'oklch(0.855 0.074 295)'],
              ['400', 'oklch(0.785 0.094 295)'],
              ['500', 'oklch(0.704 0.106 295)'],
              ['600', 'oklch(0.621 0.114 295)'],
              ['700', 'oklch(0.565 0.118 295)'],
              ['800', 'oklch(0.472 0.118 295)'],
              ['900', 'oklch(0.374 0.116 295)'],
              ['950', '#361B64'],
            ].map(([stop, value]) => (
              <Swatch
                key={stop}
                bg={value}
                label={stop}
                token={`--color-brand-${stop}`}
              />
            ))}
          </div>

          {/* Accent palette */}
          <SubHeading>Accent — Amber Yellow · #FFCC5B</SubHeading>
          <div className="grid grid-cols-5 gap-3 sm:grid-cols-11">
            {[
              ['50',  'oklch(0.982 0.010 85)'],
              ['100', 'oklch(0.962 0.028 85)'],
              ['200', 'oklch(0.930 0.058 84)'],
              ['300', 'oklch(0.900 0.098 84)'],
              ['400', '#FFCC5B'],
              ['500', 'oklch(0.770 0.172 82)'],
              ['600', 'oklch(0.660 0.184 80)'],
              ['700', 'oklch(0.545 0.168 78)'],
              ['800', 'oklch(0.432 0.130 76)'],
              ['900', 'oklch(0.336 0.090 74)'],
              ['950', 'oklch(0.248 0.060 72)'],
            ].map(([stop, value]) => (
              <Swatch
                key={stop}
                bg={value}
                label={stop}
                token={`--color-accent-${stop}`}
              />
            ))}
          </div>

          {/* Gray */}
          <SubHeading>Neutral — Gray</SubHeading>
          <div className="grid grid-cols-5 gap-3 sm:grid-cols-11">
            {[
              ['50', 'oklch(0.985 0 0)'],
              ['100', 'oklch(0.970 0 0)'],
              ['200', 'oklch(0.922 0 0)'],
              ['300', 'oklch(0.870 0 0)'],
              ['400', 'oklch(0.708 0 0)'],
              ['500', 'oklch(0.556 0 0)'],
              ['600', 'oklch(0.439 0 0)'],
              ['700', 'oklch(0.371 0 0)'],
              ['800', 'oklch(0.269 0 0)'],
              ['900', 'oklch(0.205 0 0)'],
              ['950', 'oklch(0.145 0 0)'],
            ].map(([stop, value]) => (
              <Swatch
                key={stop}
                bg={value}
                label={stop}
                token={`--color-gray-${stop}`}
              />
            ))}
          </div>

          {/* Semantic tokens */}
          <SubHeading>Semantic Tokens</SubHeading>
          <div className="overflow-hidden rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-card-muted text-left">
                  <th className="px-4 py-3 font-semibold text-fg">Token</th>
                  <th className="px-4 py-3 font-semibold text-fg">Tailwind class</th>
                  <th className="px-4 py-3 font-semibold text-fg">Default value</th>
                  <th className="px-4 py-3 font-semibold text-fg">Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ['--color-page', 'bg-page', '#F1F1F1 (Figma surface)', 'Root page background'],
                  ['--color-bg', 'bg-bg', '#ffffff', 'Default section background'],
                  ['--color-bg-muted', 'bg-bg-muted', '#F1F1F1 (Figma surface)', 'Alternating section rows'],
                  ['--color-card', 'bg-card', '#ffffff', 'Card surface'],
                  ['--color-card-muted', 'bg-card-muted', 'near-white', 'Muted or nested card'],
                  ['--color-fg', 'text-fg', 'gray-950', 'Primary body text'],
                  ['--color-fg-muted', 'text-fg-muted', 'gray-600', 'Secondary / supporting text'],
                  ['--color-fg-subtle', 'text-fg-subtle', 'gray-400', 'Placeholders, captions'],
                  ['--color-border', 'border-border', 'gray-200', 'Default divider / outline'],
                  ['--color-border-strong', 'border-border-strong', 'gray-300', 'Emphasis border'],
                  ['--color-primary', 'bg-primary', '#361B64 (brand-950)', 'Primary CTA button bg'],
                  ['--color-primary-fg', 'text-primary-fg', '#ffffff', 'Text on primary surface'],
                  ['--color-secondary', 'bg-secondary', '#FFCC5B (accent-400)', 'Secondary CTA bg'],
                  ['--color-secondary-fg', 'text-secondary-fg', '#361B64 (brand-950)', 'Text on accent surface'],
                ].map(([token, cls, value, usage]) => (
                  <tr key={token} className="bg-card">
                    <td className="px-4 py-3 font-mono text-xs text-brand-700">{token}</td>
                    <td className="px-4 py-3 font-mono text-xs text-fg-muted">{cls}</td>
                    <td className="px-4 py-3 text-xs text-fg-muted">{value}</td>
                    <td className="px-4 py-3 text-xs text-fg-subtle">{usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section themes */}
          <SubHeading>Section Themes</SubHeading>
          <p className="mb-5 text-sm text-fg-muted">
            Apply <code className="rounded bg-brand-50 px-1.5 py-0.5 text-xs text-brand-700">data-theme=&quot;…&quot;</code> to
            any wrapper. Child components using semantic tokens adapt automatically — no class changes required.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { theme: undefined, label: 'Default', desc: 'White surface, dark text', extraClass: 'border border-border' },
              { theme: 'brand-light', label: 'Brand Light', desc: 'Purple-tinted background', extraClass: '' },
              { theme: 'brand', label: 'Brand', desc: 'Deep purple, white text', extraClass: '' },
              { theme: 'accent', label: 'Accent', desc: 'Amber yellow, dark text', extraClass: '' },
            ].map(({ theme, label, desc, extraClass }) => (
              <div
                key={label}
                data-theme={theme}
                className={`rounded-2xl bg-bg p-6 ${extraClass}`}
              >
                <p className="text-sm font-bold text-fg">{label}</p>
                <p className="mt-1 text-xs text-fg-muted">{desc}</p>
                <div className="mt-3 h-1.5 w-16 rounded-full bg-fg opacity-20" />
                <div className="mt-1.5 h-1.5 w-10 rounded-full bg-fg opacity-10" />
                <div className="mt-3 rounded-lg border border-border bg-card p-2 text-xs text-fg-subtle">
                  bg-card
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════
            2. TYPOGRAPHY
        ══════════════════════════════════════════════════════ */}
        <Section id="typography" label="02 — Foundation">
          <SectionHeading>Typography</SectionHeading>

          <p className="mb-10 max-w-2xl text-base text-fg-muted">
            HomeHub uses <strong className="text-fg">Rubik</strong> — a friendly, geometric
            sans-serif with rounded letterforms that balance professionalism with approachability.
          </p>

          <SubHeading>Typeface — Rubik</SubHeading>
          <div className="mb-10 flex flex-wrap items-baseline gap-8">
            {[300, 400, 500, 600, 700].map((w) => (
              <div key={w}>
                <p
                  className="text-4xl text-fg"
                  style={{ fontWeight: w }}
                >
                  Aa
                </p>
                <p className="mt-1 text-xs text-fg-subtle">{w}</p>
              </div>
            ))}
          </div>

          <SubHeading>Type Scale</SubHeading>
          <div className="space-y-4">
            {[
              { label: 'text-9xl', size: '8rem / 1', sample: 'Display' },
              { label: 'text-6xl', size: '3.75rem / 1', sample: 'Hero Heading' },
              { label: 'text-4xl', size: '2.5rem / 3rem', sample: 'Page Heading' },
              { label: 'text-3xl', size: '2rem / 3rem', sample: 'Section Heading' },
              { label: 'text-2xl', size: '1.5rem / 2rem', sample: 'Sub-Heading' },
              { label: 'text-xl', size: '1.25rem / 1.75rem', sample: 'Large Body' },
              { label: 'text-lg', size: '1.125rem / 2rem', sample: 'Body Large' },
              { label: 'text-base', size: '1rem / 1.5rem', sample: 'Body Default' },
              { label: 'text-sm', size: '0.875rem / 1.5rem', sample: 'Body Small' },
              { label: 'text-xs', size: '0.75rem / 1rem', sample: 'Caption / Label' },
            ].map(({ label, size, sample }) => (
              <div
                key={label}
                className="flex items-baseline gap-6 border-b border-border pb-4"
              >
                <div className="w-28 flex-none">
                  <p className="font-mono text-xs text-fg-subtle">{label}</p>
                  <p className="font-mono text-[10px] text-fg-subtle opacity-60">{size}</p>
                </div>
                <p className={`${label} font-semibold text-fg leading-none`}>{sample}</p>
              </div>
            ))}
          </div>

          <SubHeading>Heading Hierarchy</SubHeading>
          <div className="rounded-2xl border border-border bg-card p-8">
            <h1 className="text-5xl font-bold text-fg">The future of housing</h1>
            <h2 className="mt-4 text-3xl font-bold text-fg">Community & Compliance</h2>
            <h3 className="mt-3 text-xl font-bold text-fg">Repairs & Resolution</h3>
            <h4 className="mt-3 text-lg font-semibold text-fg">Resident Portal</h4>
            <p className="mt-4 text-base text-fg-muted">
              Body text sits below the heading hierarchy. It uses <code>text-fg-muted</code> to
              create clear visual contrast between headings and supporting content.
            </p>
            <p className="mt-2 text-sm text-fg-subtle">
              Caption or label text uses <code>text-fg-subtle</code> for de-emphasised information.
            </p>
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════
            3. ICONOGRAPHY
        ══════════════════════════════════════════════════════ */}
        <Section id="iconography" label="03 — Foundation">
          <SectionHeading>Iconography</SectionHeading>

          <p className="mb-4 max-w-2xl text-base text-fg-muted">
            HomeHub uses <strong className="text-fg">Lucide</strong> icons — a consistent, open-source
            stroke icon set with 1,000+ symbols. Available via{' '}
            <code className="rounded bg-brand-50 px-1.5 py-0.5 text-xs text-brand-700">
              react-icons/lu
            </code>{' '}
            (already installed).
          </p>

          <Callout variant="info" title="Icon guidance">
            Always use stroke icons (never filled) for UI actions. Set{' '}
            <code>strokeWidth</code> to <strong>1.75</strong> for body size, <strong>2</strong>{' '}
            for small/inline. Default size is <strong>20×20px</strong>.
          </Callout>

          <SubHeading>Icon Library Sample</SubHeading>
          <div className="grid grid-cols-6 gap-4 sm:grid-cols-8 lg:grid-cols-12">
            {[
              { Icon: LuHouse, label: 'Home' },
              { Icon: LuUser, label: 'User' },
              { Icon: LuUsers, label: 'Users' },
              { Icon: LuBell, label: 'Bell' },
              { Icon: LuCalendar, label: 'Calendar' },
              { Icon: LuCircleCheck, label: 'Check' },
              { Icon: LuChevronRight, label: 'Chevron' },
              { Icon: LuClipboard, label: 'Clipboard' },
              { Icon: LuFileText, label: 'File' },
              { Icon: LuCircleHelp, label: 'Help' },
              { Icon: LuInfo, label: 'Info' },
              { Icon: LuLayoutDashboard, label: 'Dashboard' },
              { Icon: LuMail, label: 'Mail' },
              { Icon: LuMapPin, label: 'Map Pin' },
              { Icon: LuMessageSquare, label: 'Message' },
              { Icon: LuPhone, label: 'Phone' },
              { Icon: LuSearch, label: 'Search' },
              { Icon: LuSettings, label: 'Settings' },
              { Icon: LuShield, label: 'Shield' },
              { Icon: LuStar, label: 'Star' },
              { Icon: LuHammer, label: 'Tool' },
              { Icon: LuWrench, label: 'Wrench' },
              { Icon: LuZap, label: 'Zap' },
              { Icon: LuX, label: 'Close' },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 py-3">
                <Icon className="h-6 w-6 text-fg-muted" strokeWidth={1.75} />
                <span className="text-center text-[10px] text-fg-subtle">{label}</span>
              </div>
            ))}
          </div>

          <SubHeading>Size Variants</SubHeading>
          <div className="flex flex-wrap items-end gap-8">
            {[
              { size: 16, label: 'xs — 16px' },
              { size: 20, label: 'sm — 20px (default)' },
              { size: 24, label: 'md — 24px' },
              { size: 32, label: 'lg — 32px' },
            ].map(({ size, label }) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <LuHouse style={{ width: size, height: size }} className="text-brand-700" strokeWidth={1.75} />
                <span className="text-xs text-fg-subtle">{label}</span>
              </div>
            ))}
          </div>

          <SubHeading>Icons on surfaces</SubHeading>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 rounded-xl bg-card border border-border px-4 py-3">
              <LuHouse className="h-5 w-5 text-fg-muted" strokeWidth={1.75} />
              <span className="text-sm text-fg">Default surface</span>
            </div>
            <div data-theme="brand" className="flex items-center gap-3 rounded-xl bg-bg px-4 py-3">
              <LuHouse className="h-5 w-5 text-fg-muted" strokeWidth={1.75} />
              <span className="text-sm text-fg">Brand surface</span>
            </div>
            <div data-theme="accent" className="flex items-center gap-3 rounded-xl bg-bg px-4 py-3">
              <LuHouse className="h-5 w-5 text-fg-muted" strokeWidth={1.75} />
              <span className="text-sm text-fg">Accent surface</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-brand-50 px-4 py-3">
              <LuHouse className="h-5 w-5 text-brand-600" strokeWidth={1.75} />
              <span className="text-sm text-brand-900">Brand-tinted</span>
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════
            4. BUTTONS
        ══════════════════════════════════════════════════════ */}
        <Section id="buttons" label="04 — Components">
          <SectionHeading>Buttons</SectionHeading>

          <p className="mb-10 max-w-2xl text-base text-fg-muted">
            Buttons use rounded-full pill shapes. The primary action on any page should use
            the solid brand variant. Use accent sparingly for high-visibility CTAs.
          </p>

          <SubHeading>Solid Variants</SubHeading>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="solid" color="violet">Brand (Primary)</Button>
            <button
              className="inline-flex justify-center rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-fg transition-colors hover:opacity-90 active:opacity-80"
            >
              Accent (Secondary)
            </button>
            <Button variant="solid" color="white">
              White
            </Button>
          </div>

          <SubHeading>Outline Variants</SubHeading>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="outline" color="violet">Outline Brand</Button>
            <button className="inline-flex justify-center rounded-full border border-border px-4 py-2 text-sm font-semibold text-fg-muted transition-colors hover:border-border-strong hover:text-fg">
              Outline Neutral
            </button>
          </div>

          <SubHeading>With Icons</SubHeading>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="solid" color="violet">
              <LuHouse className="h-4 w-4" />
              With icon
            </Button>
            <Button variant="outline" color="violet">
              Get started
              <LuChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <SubHeading>States</SubHeading>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="solid" color="violet">Default</Button>
            <button
              className="inline-flex justify-center rounded-full bg-brand-950 px-4 py-2 text-sm font-semibold text-white opacity-50 cursor-not-allowed"
              disabled
            >
              Disabled
            </button>
          </div>

          <SubHeading>On dark surface</SubHeading>
          <div data-theme="brand" className="flex flex-wrap items-center gap-4 rounded-2xl bg-bg p-6">
            <Button variant="solid" color="white">White button</Button>
            <button className="inline-flex justify-center rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-fg transition-colors hover:opacity-90 active:opacity-80">
              Accent button
            </button>
            <button className="inline-flex justify-center rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white/80 transition-colors hover:border-white/60 hover:text-white">
              Ghost on dark
            </button>
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════
            5. CARDS
        ══════════════════════════════════════════════════════ */}
        <Section id="cards" label="05 — Components">
          <SectionHeading>Cards</SectionHeading>

          <p className="mb-10 max-w-2xl text-base text-fg-muted">
            Cards use <code>rounded-2xl</code> corners and <code>bg-card</code> with a subtle
            border. Use shadow-sm for elevation. Muted cards reduce visual weight for secondary
            content.
          </p>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Default card */}
            <DemoCard>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50">
                <LuHouse className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-bold text-fg">Default Card</h3>
              <p className="mt-1.5 text-sm text-fg-muted">
                White background, subtle border, and soft shadow. The standard container for
                content blocks.
              </p>
              <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-600">
                Learn more <LuChevronRight className="h-3.5 w-3.5" />
              </a>
            </DemoCard>

            {/* Muted card */}
            <div className="rounded-2xl bg-card-muted p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gray-200">
                <LuFileText className="h-5 w-5 text-gray-600" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-bold text-fg">Muted Card</h3>
              <p className="mt-1.5 text-sm text-fg-muted">
                No shadow, gray-50 background. Use for secondary or supporting content that should
                recede visually.
              </p>
            </div>

            {/* Featured card */}
            <div data-theme="brand" className="rounded-2xl bg-bg p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <LuZap className="h-5 w-5 text-accent-300" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-bold text-fg">Brand Card</h3>
              <p className="mt-1.5 text-sm text-fg-muted">
                Dark purple surface for featured or highlighted content. Tokens adapt
                automatically via <code>data-theme=&quot;brand&quot;</code>.
              </p>
            </div>

            {/* Accent card */}
            <div data-theme="accent" className="rounded-2xl bg-bg p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-card">
                <LuStar className="h-5 w-5 text-accent-700" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-bold text-fg">Accent Card</h3>
              <p className="mt-1.5 text-sm text-fg-muted">
                Amber-yellow surface for high-visibility callouts or promotional content.
              </p>
            </div>

            {/* Interactive card */}
            <DemoCard className="cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-100">
                <LuUsers className="h-5 w-5 text-accent-700" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-bold text-fg">Interactive Card</h3>
              <p className="mt-1.5 text-sm text-fg-muted">
                Hover to see the lift effect. Use for clickable card-based navigation.
              </p>
            </DemoCard>

            {/* Stat card */}
            <div className="rounded-2xl bg-brand-50 p-6 text-center">
              <p className="text-5xl font-bold text-brand-950">94%</p>
              <p className="mt-2 text-sm font-semibold text-brand-700">Resident satisfaction</p>
              <p className="mt-1 text-xs text-brand-500">Across all managed properties</p>
            </div>
          </div>

          {/* Illustration card style */}
          <SubHeading>Illustration Cards (blob style)</SubHeading>
          <p className="mb-5 text-sm text-fg-muted">
            Cards pairing a blob-background illustration with text. Match the reference style:
            bold-outline flat icons on a soft coloured blob.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <IllustrationCard
              blobColor="oklch(0.946 0.024 295)"
              icon={LuZap}
              title="EPC Rating Score"
              description="Learn about your current energy efficiency rating"
            />
            <IllustrationCard
              blobColor="oklch(0.962 0.028 85)"
              icon={LuShield}
              title="Tips & Compliance"
              description="Discover ways to save money on energy bills"
            />
            <IllustrationCard
              blobColor="oklch(0.978 0.025 150)"
              icon={LuWrench}
              title="Tenant Support"
              description="Easily get help with home maintenance and repairs"
            />
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════
            6. FORMS
        ══════════════════════════════════════════════════════ */}
        <Section id="forms" label="06 — Components">
          <SectionHeading>Forms</SectionHeading>

          <p className="mb-10 max-w-2xl text-base text-fg-muted">
            Form fields use rounded-lg borders with a brand focus ring. Labels are semibold
            and always visible (never placeholder-only). Group related fields and provide
            inline validation feedback.
          </p>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Field types */}
            <div className="space-y-5">
              <SubHeading>Field Types</SubHeading>
              <TextField label="Text field" placeholder="Enter your full name" />
              <TextField label="Email" type="email" placeholder="you@example.com" />
              <TextField label="Error state" defaultValue="invalid-email" className="[&_input]:border-red-400 [&_input]:ring-red-400" />
              <div>
                <label className="mb-2 block text-sm font-semibold text-fg">
                  Textarea
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe the issue…"
                  className="block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-fg-muted placeholder:text-fg-subtle focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                />
              </div>
              <SelectField label="Property type">
                <option>Select an option</option>
                <option>Flat</option>
                <option>House</option>
                <option>Shared ownership</option>
              </SelectField>
            </div>

            {/* Example form */}
            <div>
              <SubHeading>Contact Form Example</SubHeading>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-5 text-lg font-bold text-fg">Get in touch</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <TextField label="First name" placeholder="Alex" />
                    <TextField label="Last name" placeholder="Smith" />
                  </div>
                  <TextField label="Email address" type="email" placeholder="alex@example.com" />
                  <SelectField label="Enquiry type">
                    <option>General question</option>
                    <option>Technical support</option>
                    <option>Partnership</option>
                  </SelectField>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-fg">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="How can we help?"
                      className="block w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-fg-muted placeholder:text-fg-subtle focus:border-brand-700 focus:outline-none focus:ring-1 focus:ring-brand-700"
                    />
                  </div>
                  <Callout variant="success" title="Form submitted!">
                    Thank you — we&apos;ll get back to you within one business day.
                  </Callout>
                  <Button variant="solid" color="violet" className="w-full justify-center">
                    Send message
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Checkboxes / Radios */}
          <SubHeading>Selection Controls</SubHeading>
          <div className="flex flex-wrap gap-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-fg">Checkboxes</p>
              {['Email notifications', 'SMS alerts', 'App push notifications'].map((label) => (
                <label key={label} className="flex cursor-pointer items-center gap-2.5">
                  <input
                    type="checkbox"
                    defaultChecked={label === 'Email notifications'}
                    className="h-4 w-4 rounded border-gray-300 text-brand-700 focus:ring-brand-700"
                  />
                  <span className="text-sm text-fg-muted">{label}</span>
                </label>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-fg">Radio buttons</p>
              {['Landlord', 'Resident', 'Contractor'].map((label, i) => (
                <label key={label} className="flex cursor-pointer items-center gap-2.5">
                  <input
                    type="radio"
                    name="role"
                    defaultChecked={i === 0}
                    className="h-4 w-4 border-gray-300 text-brand-700 focus:ring-brand-700"
                  />
                  <span className="text-sm text-fg-muted">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════
            7. CALLOUTS
        ══════════════════════════════════════════════════════ */}
        <Section id="callouts" label="07 — Components">
          <SectionHeading>Callouts</SectionHeading>

          <p className="mb-10 max-w-2xl text-base text-fg-muted">
            Callouts surface important contextual information. As a marketing website,
            HomeHub uses a limited set: info (brand), note (accent), success (form feedback),
            and neutral.
          </p>

          <div className="space-y-4">
            <Callout variant="info" title="Information">
              Your compliance certificate expires in 30 days. Renew through the portal to
              keep your properties compliant.
            </Callout>
            <Callout variant="warning" title="Please note">
              Energy assessments are subject to scheduling availability in your region. Allow
              up to 5 working days.
            </Callout>
            <Callout variant="success" title="Application received">
              Your retrofit funding application has been submitted. You&apos;ll receive a
              confirmation email within 24 hours.
            </Callout>
            <Callout variant="neutral" title="Did you know?">
              HomeHub integrates with most major housing management systems via our open API.
              Contact us to learn more.
            </Callout>
          </div>
        </Section>

        {/* ══════════════════════════════════════════════════════
            8. IMAGERY
        ══════════════════════════════════════════════════════ */}
        <Section id="imagery" label="08 — Guidelines">
          <SectionHeading>Imagery & Illustration</SectionHeading>

          <p className="mb-10 max-w-2xl text-base text-fg-muted">
            HomeHub uses two complementary image styles. Match the style to the section context —
            illustrations for feature/concept sections, photography for trust/social-proof sections.
          </p>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Stock photography */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-50">
                  <LuLayoutDashboard className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-bold text-fg">Photography</h3>
              </div>
              <div className="mb-4 h-44 overflow-hidden rounded-xl bg-brand-100">
                <div className="flex h-full items-center justify-center text-brand-300">
                  <svg viewBox="0 0 240 160" className="h-full w-full" aria-hidden>
                    <rect width="240" height="160" fill="none"/>
                    <rect x="20" y="30" width="200" height="100" rx="12" fill="oklch(0.882 0.072 282)" />
                    <circle cx="120" cy="80" r="30" fill="oklch(0.784 0.115 280)" />
                    <path d="M100 90 Q120 65 140 90" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <circle cx="111" cy="77" r="4" fill="white"/>
                    <circle cx="129" cy="77" r="4" fill="white"/>
                    <text x="120" y="145" textAnchor="middle" fill="oklch(0.338 0.192 277)" fontSize="11" fontFamily="sans-serif">Stock photo placeholder</text>
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-fg">Guidelines</p>
                <ul className="space-y-1.5 text-sm text-fg-muted">
                  <li className="flex items-start gap-2">
                    <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-500" strokeWidth={2} />
                    Bright, natural lighting — avoid dark or moody tones
                  </li>
                  <li className="flex items-start gap-2">
                    <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-500" strokeWidth={2} />
                    Real homes, real people — diverse, inclusive representation
                  </li>
                  <li className="flex items-start gap-2">
                    <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-500" strokeWidth={2} />
                    Trust-building contexts: residents, properties, community
                  </li>
                  <li className="flex items-start gap-2">
                    <LuX className="mt-0.5 h-4 w-4 flex-none text-red-400" strokeWidth={2} />
                    Avoid stock photo clichés (handshakes, staged offices)
                  </li>
                </ul>
              </div>
            </div>

            {/* Illustration style */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-100">
                  <LuStar className="h-5 w-5 text-accent-700" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-bold text-fg">Illustration</h3>
              </div>

              {/* Live illustration examples */}
              <div className="mb-5 grid grid-cols-3 gap-3">
                {/* House — brand-100 blob */}
                <div
                  className="flex h-40 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: 'oklch(0.946 0.024 295)' }}
                >
                  <svg viewBox="0 0 80 80" width="96" height="96" fill="none" aria-hidden>
                    {/* Body */}
                    <rect x="16" y="42" width="48" height="32" rx="3" fill="white" stroke="#361B64" strokeWidth="2.5"/>
                    {/* Door */}
                    <rect x="31" y="54" width="12" height="20" rx="2" fill="#C8B4E8" stroke="#361B64" strokeWidth="2"/>
                    <circle cx="41" cy="64" r="1.5" fill="#361B64"/>
                    {/* Window left */}
                    <rect x="18" y="50" width="9" height="9" rx="1.5" fill="#C8EDF5" stroke="#361B64" strokeWidth="1.5"/>
                    <line x1="22.5" y1="50" x2="22.5" y2="59" stroke="#361B64" strokeWidth="1"/>
                    <line x1="18" y1="54.5" x2="27" y2="54.5" stroke="#361B64" strokeWidth="1"/>
                    {/* Window right */}
                    <rect x="53" y="50" width="9" height="9" rx="1.5" fill="#C8EDF5" stroke="#361B64" strokeWidth="1.5"/>
                    <line x1="57.5" y1="50" x2="57.5" y2="59" stroke="#361B64" strokeWidth="1"/>
                    <line x1="53" y1="54.5" x2="62" y2="54.5" stroke="#361B64" strokeWidth="1"/>
                    {/* Roof */}
                    <path d="M10 44 L40 14 L70 44 Z" fill="#FFCC5B" stroke="#361B64" strokeWidth="2.5" strokeLinejoin="round"/>
                    {/* Chimney */}
                    <rect x="52" y="20" width="7" height="14" rx="1" fill="#F4A0B5" stroke="#361B64" strokeWidth="2"/>
                    {/* Smoke puffs */}
                    <circle cx="54" cy="16" r="3" fill="white" stroke="#361B64" strokeWidth="1.5"/>
                    <circle cx="58" cy="12" r="2.5" fill="white" stroke="#361B64" strokeWidth="1.5"/>
                  </svg>
                </div>

                {/* Wrench + spanner — accent-100 blob */}
                <div
                  className="flex h-40 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: 'oklch(0.962 0.028 85)' }}
                >
                  <svg viewBox="0 0 80 80" width="96" height="96" fill="none" aria-hidden>
                    {/* Clipboard base */}
                    <rect x="18" y="22" width="44" height="50" rx="4" fill="white" stroke="#361B64" strokeWidth="2.5"/>
                    {/* Clip top */}
                    <rect x="30" y="16" width="20" height="12" rx="3" fill="#C8B4E8" stroke="#361B64" strokeWidth="2"/>
                    <rect x="35" y="19" width="10" height="5" rx="1.5" fill="white" stroke="#361B64" strokeWidth="1.5"/>
                    {/* Lines */}
                    <path d="M26 40 L54 40" stroke="oklch(0.905 0.048 295)" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M26 49 L54 49" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M26 57 L42 57" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round"/>
                    {/* Tick badge */}
                    <circle cx="54" cy="57" r="10" fill="#FFCC5B" stroke="#361B64" strokeWidth="2"/>
                    <path d="M49 57 L53 61 L59 53" stroke="#361B64" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* Document / certificate — green-100 blob */}
                <div
                  className="flex h-40 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: 'oklch(0.978 0.025 150)' }}
                >
                  <svg viewBox="0 0 80 80" width="96" height="96" fill="none" aria-hidden>
                    {/* Spanner body */}
                    <path d="M52 14 C56 14 60 18 60 22 C60 26 57 29 53 30 L53 30 L30 53 L30 57 C30 61 26 65 22 65 C18 65 14 61 14 57 C14 53 18 49 22 49 L26 49 L49 26 C50 22 52 14 52 14Z" fill="#B8E0B0" stroke="#361B64" strokeWidth="2.5" strokeLinejoin="round"/>
                    {/* Spanner head circle */}
                    <circle cx="54" cy="22" r="8" fill="white" stroke="#361B64" strokeWidth="2.5"/>
                    {/* Spanner head slot */}
                    <rect x="50" y="18" width="8" height="8" rx="1" fill="#B8E0B0" stroke="#361B64" strokeWidth="1.5"/>
                    {/* Handle end circle */}
                    <circle cx="20" cy="58" r="6" fill="#FFCC5B" stroke="#361B64" strokeWidth="2.5"/>
                    {/* Bolt at joint */}
                    <circle cx="38" cy="38" r="5" fill="white" stroke="#361B64" strokeWidth="2"/>
                    <circle cx="38" cy="38" r="2" fill="#361B64"/>
                  </svg>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-fg">Illustration style</p>
                <ul className="space-y-1.5 text-sm text-fg-muted">
                  <li className="flex items-start gap-2">
                    <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-500" strokeWidth={2} />
                    Bold outlines (2–3px), flat colour — no gradients
                  </li>
                  <li className="flex items-start gap-2">
                    <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-500" strokeWidth={2} />
                    Soft pastel blob background — brand-100 or accent-100
                  </li>
                  <li className="flex items-start gap-2">
                    <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-500" strokeWidth={2} />
                    Friendly, housing-focused subjects (homes, tools, documents)
                  </li>
                  <li className="flex items-start gap-2">
                    <LuCircleCheck className="mt-0.5 h-4 w-4 flex-none text-brand-500" strokeWidth={2} />
                    Sources: <strong>unDraw.co</strong>, <strong>Storyset.com</strong> (free, customisable colour)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Blob shape guide */}
          <SubHeading>Blob Shape Backgrounds</SubHeading>
          <p className="mb-5 text-sm text-fg-muted">
            Illustration backdrops use an organic blob shape. Use brand-100 (purple) or
            accent-100 (yellow) as the fill. Avoid sharp corners — the blob should feel
            soft and organic.
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { color: 'oklch(0.946 0.024 295)', label: 'brand-100' },
              { color: 'oklch(0.962 0.028 85)',  label: 'accent-100' },
              { color: 'oklch(0.978 0.025 150)', label: 'green-100' },
              { color: 'oklch(0.970 0.025 20)',  label: 'rose-100' },
              { color: 'oklch(0.970 0.025 240)', label: 'sky-100' },
            ].map(({ color, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="relative h-20 w-20">
                  <svg viewBox="0 0 80 80" className="h-full w-full" aria-hidden>
                    <path
                      d="M60 10 C80 10, 80 30, 70 50 C60 70, 40 80, 20 70 C0 60, 0 40, 10 20 C20 0, 40 10, 60 10Z"
                      fill={color}
                    />
                  </svg>
                </div>
                <span className="font-mono text-[10px] text-fg-subtle">{label}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Footer note */}
        <div className="py-12 text-center">
          <p className="text-sm text-fg-subtle">
            HomeHub Design System · v1.0 · Internal use only
          </p>
        </div>
      </Container>
    </div>
  )
}
