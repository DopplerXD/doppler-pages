'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './theme-toggle'

export function Navbar() {
  const pathname = usePathname()
  
  const navItems = [
    { href: '/', label: '首页' },
    { href: '/docs', label: '文档' },
    { href: '#', label: '博客' },
    { href: '#', label: '项目' },
    { href: '#', label: '工具' },
    { href: '#', label: '关于' },
  ]
  
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href === '/docs') return pathname.startsWith('/docs')
    return false
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/head.jpg" alt="Logo" className="w-8 h-8 rounded-lg object-cover" />
          <span className="font-semibold text-lg">DopplerXD Pages</span>
        </Link>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition-colors relative ${
                isActive(item.href)
                  ? 'text-primary font-medium'
                  : 'text-secondary hover:text-foreground'
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
              )}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
