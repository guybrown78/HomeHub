import type { ComponentType, SVGAttributes } from 'react'
import {
  LuWrench,
  LuZap,
  LuMessageCircle,
  LuFileText,
  LuShieldCheck,
  LuHammer,
  LuUsers,
  LuLeaf,
  LuHouse,
  LuKey,
  LuBriefcase,
  LuSmartphone,
  LuBookOpen,
  LuTrendingUp,
  LuCircleHelp,
  LuInfo,
  LuHandshake,
  LuMail,
  LuCalendar,
} from 'react-icons/lu'

type NavIcon = ComponentType<SVGAttributes<SVGElement> & { strokeWidth?: number | string }>

export type NavLink = {
  label: string
  href: string
  icon?: NavIcon
  description?: string
}

export type NavSection = {
  title: string
  iconBg: string
  iconColor: string
  align?: 'left' | 'right'
  links: NavLink[]
}

export const navSections: NavSection[] = [
  {
    title: 'Platform',
    iconBg: 'bg-brand-50',
    iconColor: 'text-brand-700',
    links: [
      {
        label: 'Resolve',
        href: '/platform/resolve',
        icon: LuWrench,
        description: 'Report and track repairs from damp to broken fixtures',
      },
      {
        label: 'Energy',
        href: '/platform/energy',
        icon: LuZap,
        description: 'Monitor usage and help residents reduce energy costs',
      },
      {
        label: 'Community',
        href: '/platform/community',
        icon: LuMessageCircle,
        description: 'Keep landlords and residents connected and informed',
      },
      {
        label: 'Case Studies',
        href: '/platform/case-studies',
        icon: LuFileText,
        description: 'See how organisations use HomeHub in practice',
      },
    ],
  },
  {
    title: 'Landlords',
    iconBg: 'bg-brand-50',
    iconColor: 'text-brand-700',
    links: [
      {
        label: 'Compliance & Regulation',
        href: '/landlords/compliance-regulation',
        icon: LuShieldCheck,
        description: 'Stay ahead of safety requirements and audit trails',
      },
      {
        label: 'Repairs & Resolution',
        href: '/landlords/repairs-resolution',
        icon: LuHammer,
        description: 'Manage repairs end-to-end with full visibility',
      },
      {
        label: 'Resident Engagement',
        href: '/landlords/resident-engagement',
        icon: LuUsers,
        description: 'Improve communication across your portfolio',
      },
      {
        label: 'Retrofit & Funding',
        href: '/landlords/retrofit-funding',
        icon: LuLeaf,
        description: 'Plan and deliver retrofit programmes that work',
      },
    ],
  },
  {
    title: 'Residents',
    iconBg: 'bg-accent-100',
    iconColor: 'text-accent-800',
    links: [
      {
        label: 'Tenants',
        href: '/residents/tenants',
        icon: LuHouse,
        description: 'Report issues and manage your home digitally',
      },
      {
        label: 'Homeowners',
        href: '/residents/homeowners',
        icon: LuKey,
        description: 'Understand your energy and stay on top of maintenance',
      },
      {
        label: 'Contractors',
        href: '/residents/contractors',
        icon: LuBriefcase,
        description: 'Access jobs, updates and resident communications',
      },
      {
        label: 'Download App',
        href: '/residents/download-app',
        icon: LuSmartphone,
        description: 'Get the HomeHub app on iOS or Android',
      },
    ],
  },
  {
    title: 'Resources',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-700',
    links: [
      {
        label: 'Guides',
        href: '/resources/guides',
        icon: LuBookOpen,
        description: 'Plain-English guides for landlords and residents',
      },
      {
        label: 'Insights',
        href: '/resources/insights',
        icon: LuTrendingUp,
        description: 'Data and trends from across the housing sector',
      },
      {
        label: "FAQ's",
        href: '/resources/faqs',
        icon: LuCircleHelp,
        description: 'Common questions about HomeHub answered',
      },
    ],
  },
  {
    title: 'Company',
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-600',
    align: 'right',
    links: [
      {
        label: 'About',
        href: '/about',
        icon: LuInfo,
        description: 'Our mission, team and how HomeHub started',
      },
      {
        label: 'Partners & Sponsors',
        href: '/partners',
        icon: LuHandshake,
        description: 'Organisations we work with across housing',
      },
      {
        label: 'Contact',
        href: '/contact',
        icon: LuMail,
        description: 'Get in touch with the HomeHub team',
      },
      {
        label: 'Book a Demo',
        href: '/book-demo',
        icon: LuCalendar,
        description: 'See the platform in action with our team',
      },
    ],
  },
]

export const headerCtas = [
  { label: 'Download App', href: '/residents/download-app', variant: 'outline' as const },
  { label: 'Book a Demo', href: '/book-demo', variant: 'solid' as const },
]

export const footerPolicyLinks = [
  { label: 'Privacy Policy', href: '/policies/privacy' },
  { label: 'Terms of Service', href: '/policies/terms' },
  { label: 'Cookie Policy', href: '/policies/cookies' },
]
