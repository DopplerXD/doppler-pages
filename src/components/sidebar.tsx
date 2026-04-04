import Link from 'next/link'

const navItems = [
  {
    title: '开始',
    items: [
      { title: '简介', slug: 'index' },
    ]
  },
  {
    title: '算法',
    items: [
      { title: '算法笔记', slug: 'algorithm/index' },
    ]
  },
  {
    title: '技术学习',
    items: [
      { title: '技术学习', slug: 'tech/index' },
    ]
  },
  {
    title: '开发经验',
    items: [
      { title: '开发经验', slug: 'dev/index' },
    ]
  },
  {
    title: 'Leetcode',
    items: [
      { title: '题解', slug: 'leetcode/index' },
    ]
  },
  {
    title: '资源分享',
    items: [
      { title: '资源分享', slug: 'resource/index' },
    ]
  },
]

export function Sidebar({ currentPath }: { currentPath: string }) {
  return (
    <aside className="w-64 shrink-0 border-r border-border h-[calc(100vh-64px)] sticky top-16 overflow-y-auto hidden lg:block backdrop-blur-sm bg-background/50">
      <nav className="p-4">
        {navItems.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 px-3">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/docs/${item.slug === 'index' ? '' : item.slug}`}
                    className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                      currentPath === item.slug
                        ? 'bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-primary border-l-2 border-primary font-medium'
                        : 'text-secondary hover:text-foreground hover:bg-secondary/10 hover:border-l-2 hover:border-secondary/30'
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
