'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCategory } from './category-context'

export function DocSidebar() {
  const pathname = usePathname()
  const { selectedCategory, categoryDocs } = useCategory()
  
  const currentPath = pathname.replace('/docs/', '').replace('/docs', 'index') || 'index'
  const docs = categoryDocs[selectedCategory] || []

  return (
    <aside className="w-56 shrink-0 border-r border-border h-full overflow-y-auto bg-background/95 backdrop-blur-sm">
      <div className="p-4">
        <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
          {selectedCategory === 'start' ? '开始' : 
           selectedCategory === 'algorithm' ? '算法' :
           selectedCategory === 'tech' ? '技术学习' :
           selectedCategory === 'dev' ? '开发经验' :
           selectedCategory === 'leetcode' ? 'Leetcode' : '资源分享'}
        </h3>
      </div>
      
      <nav className="px-3">
        {docs.map((doc) => (
          <Link
            key={doc.slug}
            href={`/docs/${doc.slug === 'index' ? '' : doc.slug}?category=${selectedCategory}`}
            className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-all mb-1 ${
              currentPath === doc.slug
                ? 'bg-primary/10 text-primary border-l-2 border-primary'
                : 'text-secondary hover:text-foreground hover:bg-secondary/10'
            }`}
          >
            <span>{doc.title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
