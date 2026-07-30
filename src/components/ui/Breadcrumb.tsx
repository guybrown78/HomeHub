import Link from 'next/link'
import { LuChevronRight } from 'react-icons/lu'

type Crumb = {
  label: string
  href?: string
}

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm">
      {items.map((item, i) => (
        <span key={item.label} className="flex items-center gap-1.5">
          {i > 0 && <LuChevronRight className="h-3.5 w-3.5 text-fg-subtle" strokeWidth={2} />}
          {item.href ? (
            <Link href={item.href} className="text-fg-subtle transition-colors hover:text-fg">
              {item.label}
            </Link>
          ) : (
            <span className={i === items.length - 1 ? 'text-fg' : 'text-fg-subtle'}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
