'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const docsStructure = {
  'index': { title: '简介', category: '开始' },
  'algorithm/index': { title: '算法笔记', category: '算法' },
  'tech/index': { title: '技术学习', category: '技术学习' },
  'dev/index': { title: '开发经验', category: '开发经验' },
  'dev/tree-command': { title: 'tree 命令', category: '开发经验' },
  'leetcode/index': { title: '题解', category: 'Leetcode' },
  'resource/index': { title: '资源分享', category: '资源分享' },
  'notes/clean-code': { title: 'Clean Code 精华', category: '读书笔记' },
}

type DocKey = keyof typeof docsStructure

const categories = ['开始', '算法', '技术学习', '开发经验', 'Leetcode', '资源分享', '读书笔记']

export function SectionNav() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  
  const currentPath = pathname.replace('/docs/', '').replace('/docs', 'index') || 'index'
  
  const currentCategory = docsStructure[currentPath as DocKey]?.category || '开始'
  
  const categoryDocs = Object.entries(docsStructure)
    .filter(([_, doc]) => doc.category === currentCategory)
    .map(([slug, doc]) => ({ slug, ...doc }))

  return (
    <aside className={`${collapsed ? 'w-16' : 'w-64'} shrink-0 border-r border-border h-screen sticky top-0 overflow-y-auto transition-all duration-300`}>
      <div className="p-4 flex items-center justify-between">
        {!collapsed && (
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">
            {currentCategory}
          </h3>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-8 h-8 rounded-lg hover:bg-secondary/10 flex items-center justify-center text-secondary hover:text-foreground transition-colors"
          title={collapsed ? '展开' : '收起'}
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>
      
      <nav className="px-3">
        {categoryDocs.map((doc) => (
          <Link
            key={doc.slug}
            href={`/docs/${doc.slug === 'index' ? '' : doc.slug}`}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all mb-1 ${
              currentPath === doc.slug
                ? 'bg-primary/10 text-primary font-medium border-l-2 border-primary'
                : 'text-secondary hover:text-foreground hover:bg-secondary/10'
            }`}
            title={collapsed ? doc.title : undefined}
          >
            {!collapsed && <span>{doc.title}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
