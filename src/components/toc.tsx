export function TOC({ headings }: { headings: { id: string; text: string; level: number }[] }) {
  if (!headings || headings.length === 0) return null

  return (
    <aside className="w-48 shrink-0 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto hidden xl:block">
      <nav className="p-4">
        <h3 className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
          目录
        </h3>
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`block text-sm text-secondary hover:text-foreground transition-colors ${
                  heading.level === 3 ? 'pl-3' : ''
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
