const PATH =
  'M60 10 C80 10, 80 30, 70 50 C60 70, 40 80, 20 70 C0 60, 0 40, 10 20 C20 0, 40 10, 60 10Z'

export function Blob({
  fill = 'currentColor',
  fillOpacity = 1,
  className,
  ...props
}: {
  fill?: string
  fillOpacity?: number
  className?: string
} & Omit<React.ComponentPropsWithoutRef<'svg'>, 'fill'>) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden className={className} {...props}>
      <path d={PATH} fill={fill} fillOpacity={fillOpacity} />
    </svg>
  )
}
