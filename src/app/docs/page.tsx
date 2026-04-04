import { MDXContent } from '@/components/mdx-content'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CategoryProvider } from '@/components/category-context'
import { CategoryNav } from '@/components/category-nav'
import { DocSidebar } from '@/components/doc-sidebar'
import { Breadcrumb } from '@/components/breadcrumb'
import { TableOfContents } from '@/components/table-of-contents'

const docsContent = `
# DopplerXD Docs

欢迎来到 DopplerXD 的个人知识库。

## 关于本站

这是我的个人笔记和文档站点，记录了我在学习和开发过程中积累的知识和经验。

### 主要内容

本站包含以下主要内容：

- **算法** - 算法学习和刷题笔记
- **技术学习** - 各种技术的学习笔记
- **开发经验** - 实际开发中的经验总结
- **Leetcode** - Leetcode 题解
- **资源分享** - 优质资源推荐

## 关于我

一个热爱技术的开发者，喜欢学习和分享。

### 技术栈

#### 前端技术

- React / Next.js
- TypeScript
- Tailwind CSS

#### 后端技术

- Node.js
- Python
- Java

## 联系方式

- GitHub: [DopplerXD](https://github.com/DopplerXD)
- Zhihu: [DopplerXD](https://www.zhihu.com/people/DopplerXD/)
- Email: doppleryxc@gmail.com

---

本站使用 Next.js 构建，从 MkDocs + Material 主题迁移而来。
`

const tocItems = [
  { id: 'dopplerxd-docs', text: 'DopplerXD Docs', level: 1 },
  { id: '关于本站', text: '关于本站', level: 2 },
  { id: '主要内容', text: '主要内容', level: 3 },
  { id: '关于我', text: '关于我', level: 2 },
  { id: '技术栈', text: '技术栈', level: 3 },
  { id: '前端技术', text: '前端技术', level: 4 },
  { id: '后端技术', text: '后端技术', level: 4 },
  { id: '联系方式', text: '联系方式', level: 2 },
]

export default function DocsPage() {
  return (
    <main className="min-h-screen tech-grid flex flex-col">
      <Navbar />
      
      {/* 主内容区域 */}
      <div className="flex-1 flex">
        <CategoryProvider>
          {/* 左侧栏容器 - 固定在左侧 */}
          <div className="fixed left-0 top-16 bottom-[60px] flex z-40">
            <CategoryNav />
            <DocSidebar />
          </div>
          
          {/* 中间文档区域 - 居中显示 */}
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-5xl px-12 pt-24 pb-8">
              <Breadcrumb />
              <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h1:gradient-text prose-h2:text-2xl prose-h2:border-b prose-h2:border-border prose-h2:pb-2 prose-a:text-primary prose-code:text-primary prose-code:bg-secondary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-secondary/10 prose-pre:border prose-pre:border-border">
                <MDXContent source={docsContent} />
              </article>
            </div>
          </div>
        </CategoryProvider>
        
        {/* 右侧栏 - 固定在右侧 */}
        <div className="fixed right-0 top-16 bottom-[60px] z-40">
          <TableOfContents items={tocItems} />
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
