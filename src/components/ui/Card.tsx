import clsx from 'clsx'

export type CardVariant = 'default' | 'muted' | 'interactive'
export type CardTheme = 'brand' | 'accent' | 'brand-light'

const variantStyles: Record<CardVariant, string> = {
  default: 'rounded-2xl border border-border bg-card p-6 shadow-sm',
  muted: 'rounded-2xl bg-card-muted p-6',
  interactive:
    'rounded-2xl border border-border bg-card p-6 shadow-sm cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md',
}

export function Card({
  children,
  variant = 'default',
  theme,
  className,
  ...props
}: {
  children: React.ReactNode
  variant?: CardVariant
  theme?: CardTheme
  className?: string
} & Omit<React.ComponentPropsWithoutRef<'div'>, 'children'>) {
  return (
    <div
      data-theme={theme}
      className={clsx(theme ? 'rounded-2xl bg-bg p-6' : variantStyles[variant], className)}
      {...props}
    >
      {children}
    </div>
  )
}
