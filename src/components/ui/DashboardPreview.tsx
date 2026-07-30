export function DashboardPreview() {
  return (
    <div className="relative rounded-2xl border border-border bg-card p-6 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
            Portfolio Overview
          </p>
          <p className="mt-0.5 text-lg font-bold text-fg">Q4 2024</p>
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50">
          <div className="h-3 w-3 rounded-full bg-brand-400" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {[
          { label: 'Open Repairs', value: '12', trend: '23% fewer' },
          { label: 'Compliance', value: '98%', trend: '+2 pts' },
          { label: 'Engaged Residents', value: '847', trend: '+14%' },
          { label: 'Avg. Resolution', value: '3.2d', trend: '1.8d faster' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl bg-bg-muted p-3">
            <p className="text-xs text-fg-muted">{stat.label}</p>
            <p className="mt-1 text-xl font-bold text-fg">{stat.value}</p>
            <p className="text-xs font-semibold text-emerald-600">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <p className="mb-2 text-xs font-semibold text-fg-muted">Repairs this month</p>
        <div className="flex h-14 items-end gap-1.5">
          {[45, 62, 38, 71, 55, 49, 33].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-brand-200 transition-all hover:bg-brand-400"
              style={{ height: `${(h / 71) * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {[
          { label: 'Gas certificates', status: 'Up to date', dot: 'bg-emerald-400' },
          { label: 'Electrical checks', status: '3 due soon', dot: 'bg-accent-400' },
          { label: 'Fire risk assessments', status: 'Up to date', dot: 'bg-emerald-400' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-lg bg-bg-muted px-3 py-2"
          >
            <span className="text-xs font-medium text-fg">{item.label}</span>
            <div className="flex items-center gap-1.5">
              <div className={`h-2 w-2 rounded-full ${item.dot}`} />
              <span className="text-xs text-fg-muted">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
