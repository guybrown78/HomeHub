import clsx from 'clsx'

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  heading: React.ReactNode
  description?: React.ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={clsx(align === 'center' && 'text-center', className)}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-bold text-fg sm:text-4xl">{heading}</h2>
      {description && (
        <p
          className={clsx(
            'mt-4 text-lg text-fg-muted',
            align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
