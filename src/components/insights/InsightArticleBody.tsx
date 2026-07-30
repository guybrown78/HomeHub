import { Fragment } from 'react'
import Link from 'next/link'
import { type InsightBlock } from '@/data/insights'

export function InsightArticleBody({ blocks }: { blocks: InsightBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.type === 'heading') {
          return (
            <h2 key={i} className="pt-4 text-2xl font-bold text-fg first:pt-0">
              {block.text}
            </h2>
          )
        }

        if (block.type === 'list') {
          return (
            <ul key={i} className="list-disc space-y-2 pl-5 marker:text-brand-400">
              {block.items.map((item) => (
                <li key={item} className="leading-relaxed text-fg-muted">
                  {item}
                </li>
              ))}
            </ul>
          )
        }

        return (
          <p key={i} className="leading-relaxed text-fg-muted">
            {block.content.map((node, j) =>
              typeof node === 'string' ? (
                <Fragment key={j}>{node}</Fragment>
              ) : (
                <Link
                  key={j}
                  href={node.href}
                  className="font-medium text-brand-700 underline hover:text-brand-800"
                >
                  {node.text}
                </Link>
              ),
            )}
          </p>
        )
      })}
    </div>
  )
}
