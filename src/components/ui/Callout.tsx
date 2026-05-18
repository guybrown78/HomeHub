import { LuInfo, LuTriangleAlert, LuCircleCheck } from 'react-icons/lu'

export type CalloutVariant = 'info' | 'warning' | 'success' | 'neutral'

const config: Record<
  CalloutVariant,
  { bg: string; border: string; iconColor: string; Icon: React.ElementType }
> = {
  info: {
    bg: 'bg-brand-50',
    border: 'border-brand-200',
    iconColor: 'text-brand-600',
    Icon: LuInfo,
  },
  warning: {
    bg: 'bg-accent-100',
    border: 'border-accent-300',
    iconColor: 'text-accent-700',
    Icon: LuTriangleAlert,
  },
  success: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    iconColor: 'text-green-600',
    Icon: LuCircleCheck,
  },
  neutral: {
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    iconColor: 'text-gray-500',
    Icon: LuInfo,
  },
}

export function Callout({
  variant,
  title,
  children,
}: {
  variant: CalloutVariant
  title: string
  children: React.ReactNode
}) {
  const c = config[variant]
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
