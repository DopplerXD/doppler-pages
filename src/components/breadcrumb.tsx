'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

export function Breadcrumb() {
  const pathname = usePathname()
  const currentPath = pathname.replace('/docs/', '').replace('/docs', 'index') || 'index'
  
  const currentDoc = docsStructure[currentPath as DocKey]
  
  if (!currentDoc) return null
  
  const breadcrumbs = [
    { label: '首页', href: '/' },
    { label: '文档', href: '/docs' },
    { label: currentDoc.category, href: '#' },
    { label: currentDoc.title, href: `/docs/${currentPath === 'index' ? '' : currentPath}` },
  ]

  return (
    <nav className="flex items-center gap-2 text-sm text-secondary mb-6">
      {breadcrumbs.map((crumb, index) => (
        <span key={crumb.label} className="flex items-center gap-2">
          {index > 0 && <span className="text-border">/</span>}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-foreground font-medium">{crumb.label}</span>
          ) : (
            <Link href={crumb.href} className="hover:text-foreground transition-colors">
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  )
}
