'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export function VerticalNav() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  
  const navItems = [
    { href: '/', label: '首页', icon: '🏠' },
    { href: '/docs', label: '文档', icon: '📚' },
    { href: '#', label: '博客', icon: '📝' },
    { href: '#', label: '项目', icon: '🚀' },
    { href: '#', label: '工具', icon: '🔧' },
    { href: '#', label: '关于', icon: '👤' },
  ]
  
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href === '/docs') return pathname.startsWith('/docs')
    return false
  }

  return (
    <aside className={`${collapsed ? 'w-16' : 'w-48'} shrink-0 border-r border-border h-screen sticky top-0 overflow-y-auto transition-all duration-300 flex flex-col`}>
      <div className="p-4 flex justify-end">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-8 h-8 rounded-lg hover:bg-secondary/10 flex items-center justify-center text-secondary hover:text-foreground transition-colors"
          title={collapsed ? '展开' : '收起'}
        >
          {collapsed ? '→' : '←'}
        </button>
      </div>
      
      <nav className="flex-1 px-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-3 rounded-lg text-base transition-all ${
              isActive(item.href)
                ? 'bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-primary font-medium border-l-2 border-primary'
                : 'text-secondary hover:text-foreground hover:bg-secondary/10'
            }`}
            title={collapsed ? item.label : undefined}
          >
            <span className="text-xl">{item.icon}</span>
            {!collapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
