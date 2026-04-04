import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 bg-background/95">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-secondary text-sm">
          © 2026 Doppler Pages. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="https://github.com/DopplerXD" className="text-secondary hover:text-foreground transition-colors">GitHub</Link>
          <Link href="https://www.zhihu.com/people/DopplerXD" className="text-secondary hover:text-foreground transition-colors">Zhihu</Link>
          <Link href="mailto:doppleryxc@gmail.com" className="text-secondary hover:text-foreground transition-colors">Email</Link>
        </div>
      </div>
    </footer>
  )
}
