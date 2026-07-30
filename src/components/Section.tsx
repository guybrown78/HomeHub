import clsx from 'clsx'

type SectionProps = React.ComponentPropsWithoutRef<'section'> & {
  /**
   * Pass `first` on the opening section of a page so it rounds the top
   * corners without pulling up into the element above it.
   */
  first?: boolean
}

/**
 * Stacked card section. Every section has large rounded top corners and,
 * unless it is the first on the page, overlaps the section above it by the
 * same amount as the border-radius — so each card appears to slide on top
 * of the previous one.
 */
export function Section({ first = false, className, children, ...props }: SectionProps) {
  return (
    <section
      className={clsx('rounded-t-5xl', !first && '-mt-10', className)}
      {...props}
    >
      {children}
    </section>
  )
}
