'use client'

import { useCategory } from './category-context'

const categories = [
  { id: 'start', label: '开始', icon: '📚' },
  { id: 'algorithm', label: '算法', icon: '🔢' },
  { id: 'tech', label: '技术学习', icon: '💻' },
  { id: 'dev', label: '开发经验', icon: '⚙️' },
  { id: 'leetcode', label: 'Leetcode', icon: '📝' },
  { id: 'resource', label: '资源分享', icon: '🎁' },
]

export function CategoryNav() {
  const { selectedCategory, setSelectedCategory } = useCategory()

  return (
    <aside className="w-48 shrink-0 border-r border-border h-full overflow-y-auto bg-background/95 backdrop-blur-sm">
      <nav className="px-2 pt-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-base font-semibold transition-all mb-1 border ${
              selectedCategory === cat.id
                ? 'bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_rgba(139,92,246,0.05)_70%,_transparent_100%)] text-primary border-primary/30'
                : 'text-secondary hover:text-foreground hover:bg-secondary/10 border-transparent'
            }`}
          >
            <span className="text-xl">{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}
