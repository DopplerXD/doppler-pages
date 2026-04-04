import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import './docs.css'

const components = {
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-4xl font-bold mb-6 mt-8 gradient-text" {...props}>{children}</h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-bold mb-4 mt-10 pb-2 border-b border-border" {...props}>{children}</h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold mb-3 mt-8" {...props}>{children}</h3>
  ),
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-lg font-semibold mb-2 mt-6" {...props}>{children}</h4>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 leading-7 text-foreground/90" {...props}>{children}</p>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-none mb-4 space-y-2" {...props}>{children}</ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside mb-4 space-y-2" {...props}>{children}</ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="flex items-start gap-2 ml-4" {...props}>
      <span className="text-primary mt-1">•</span>
      <span>{children}</span>
    </li>
  ),
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a href={href} className="text-primary hover:underline transition-colors" {...props}>{children}</a>
  ),
  blockquote: ({ children, ...props }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-secondary bg-primary/5 py-2 rounded-r" {...props}>{children}</blockquote>
  ),
  code: ({ className, children, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const match = /language-(\w+)/.exec(className || '')
    const isInline = !match
    return isInline ? (
      <code className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 px-2 py-1 rounded text-sm text-primary border border-primary/20" {...props}>{children}</code>
    ) : (
      <code className={className} {...props}>{children}</code>
    )
  },
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-secondary/10 rounded-xl p-4 overflow-x-auto my-6 border border-border" {...props}>{children}</pre>
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-border" {...props} />
  ),
  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props}>{children}</strong>
  ),
  em: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic text-secondary" {...props}>{children}</em>
  ),
}

interface MDXContentProps {
  source: string
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeHighlight,
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: 'append' }]
          ],
        },
      }}
    />
  )
}
