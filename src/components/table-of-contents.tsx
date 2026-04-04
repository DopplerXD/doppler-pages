'use client'

interface TOCItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  items: TOCItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const filteredItems = items.filter(item => item.level >= 1 && item.level <= 4)
  
  if (filteredItems.length === 0) return null

  return (
    <aside className="w-[336px] shrink-0 border-l border-border overflow-y-auto bg-background/95 backdrop-blur-sm" style={{ height: 'calc(100vh - 64px - 60px)', position: 'sticky', top: '64px' }}>
      <div className="p-4">
        <h3 className="text-sm font-bold text-primary uppercase tracking-wider">
          On this page
        </h3>
      </div>
      
      <nav className="px-4">
        {filteredItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block py-2 text-base font-semibold text-secondary hover:text-foreground transition-colors"
            style={{ paddingLeft: `${(item.level - 1) * 12 + 8}px` }}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </aside>
  )
}
