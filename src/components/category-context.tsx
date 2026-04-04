'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const categoryDocs: Record<string, Array<{ slug: string; title: string }>> = {
  'start': [
    { slug: 'index', title: '简介' },
  ],
  'algorithm': [
    { slug: 'algorithm/index', title: '算法笔记' },
  ],
  'tech': [
    { slug: 'tech/index', title: '技术学习' },
  ],
  'dev': [
    { slug: 'dev/index', title: '开发经验' },
    { slug: 'dev/tree-command', title: 'tree 命令' },
  ],
  'leetcode': [
    { slug: 'leetcode/index', title: '题解' },
  ],
  'resource': [
    { slug: 'resource/index', title: '资源分享' },
    { slug: 'resource/good-web', title: '互联网优质资源分享' },
  ],
}

interface CategoryContextType {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  categoryDocs: typeof categoryDocs
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined)

export function CategoryProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('start')
  
  const currentPath = pathname.replace('/docs/', '').replace('/docs', 'index') || 'index'
  
  useEffect(() => {
    const category = searchParams.get('category')
    if (category && categoryDocs[category]) {
      setSelectedCategory(category)
    } else {
      for (const [cat, docs] of Object.entries(categoryDocs)) {
        if (docs.some(doc => doc.slug === currentPath)) {
          setSelectedCategory(cat)
          break
        }
      }
    }
  }, [currentPath, searchParams])
  
  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory, categoryDocs }}>
      {children}
    </CategoryContext.Provider>
  )
}

export function useCategory() {
  const context = useContext(CategoryContext)
  if (context === undefined) {
    throw new Error('useCategory must be used within a CategoryProvider')
  }
  return context
}

export { categoryDocs }
