import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-full py-2 px-3 text-sm font-semibold transition-colors',
  outline:
    'inline-flex justify-center rounded-full border py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-sm transition-colors',
}

const variantStyles = {
  solid: {
    cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70',
    violet: 'bg-violet-950 text-white hover:bg-violet-900 active:bg-violet-800 active:text-white/80',
  },
  outline: {
   violet: 'border-violet-950 text-violet-950 hover:border-violet-900 active:bg-violet-800 active:text-white/80',
  },
}

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'violet'

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
