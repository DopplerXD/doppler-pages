import { MDXContent } from '@/components/mdx-content'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CategoryProvider } from '@/components/category-context'
import { CategoryNav } from '@/components/category-nav'
import { DocSidebar } from '@/components/doc-sidebar'
import { Breadcrumb } from '@/components/breadcrumb'
import { TableOfContents } from '@/components/table-of-contents'

const docsData: Record<string, { content: string; toc: Array<{ id: string; text: string; level: number }> }> = {
  'index': {
    content: `
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
`,
    toc: [
      { id: 'dopplerxd-docs', text: 'DopplerXD Docs', level: 1 },
      { id: '关于本站', text: '关于本站', level: 2 },
      { id: '主要内容', text: '主要内容', level: 3 },
      { id: '关于我', text: '关于我', level: 2 },
    ]
  },
  'dev/tree-command': {
    content: `
# tree 命令生成项目目录结构

项目根目录下打开控制台，运行

\`\`\`shell
tree . > tr.txt
\`\`\`

便能生成文件结构。

## 示例

执行命令后会在当前目录生成一个 \`tr.txt\` 文件，包含项目的完整目录树结构。

这对于项目文档编写、README 制作等场景非常有用。
`,
    toc: [
      { id: 'tree-命令生成项目目录结构', text: 'tree 命令生成项目目录结构', level: 1 },
      { id: '示例', text: '示例', level: 2 },
    ]
  },
  'resource/good-web': {
    content: `
# 互联网优质资源分享

## AI

- **[AI工具箱导航](https://www.amz123.com/ai)** – AMZ123
- **[deepseek](https://www.deepseek.com/)** – 深度求索 R1可推理
- **[豆包](https://www.doubao.com/chat/)** – 字节旗下 新增Beta推理
- **[讯飞星火](https://xinghuo.xfyun.cn/desk)** –
- **[ChatGPT](https://chatgpt.com/)** – OpenAI
- **[Gemini](https://gemini.google.com/)** – Google
- **[通义千问](https://tongyi.aliyun.com/qianwen/)** – 阿里
- **[智谱清言](https://chatglm.cn/main/guest?lang=zh)** –
- **[cursor](https://www.cursor.so/)** – 基于GPT-4 编程高手
- **[扣子](https://www.coze.cn/)** – 字节推出的AI机器人和智能体创建平台

## 学习资源

- **[提问指南](https://lug.ustc.edu.cn/wiki/doc/howtoask/)** – 旨在用简洁、清晰、友好的语言表述与提问相关的注意事项
- **[提问的智慧](https://lug.ustc.edu.cn/wiki/doc/smart-questions/)** – LUG @ USTC 中国科学技术大学 Linux 用户协会 对英文原版进行的中文翻译
- **[Markdown 中文手册](https://www.dba.cn/book/markdown/)** –
- **[LaTeX 常用公式语法总结](https://zhuanlan.zhihu.com/p/696652520)** – 我自己写的
- **[领域树](http://www.rumen.icu/product/domaintree)** – 汇集入门经典书籍，让领域入门从此不再困难

## 计算机科学

- **[csdiy](https://csdiy.wiki/)** – ⭐CS自学指南
- **[菜鸟教程](https://www.runoob.com/)** – 啥都有
- **[Git 教程](https://liaoxuefeng.com/books/git/introduction/index.html)** – 来自廖雪峰
- **[Vim 快捷键速查表](https://linux.cn/article-8144-1.html)** –
- **[cppreference 英文版](https://en.cppreference.com/w/)** – c/c++ 核心概念、语法分析
- **[cppreference 中文版](https://zh.cppreference.com/w/)** –
- **[Java Visualizer](https://cscircles.cemc.uwaterloo.ca//java_visualize/#)** – Java 代码运行可视化
- **[VisuAlgo](https://visualgo.net/zh)** – 通过动画可视化数据结构和算法
- **[Data Structure Visualizations](https://www.rmboot.com/)** – 数据结构可视化

## 数据科学

- **[UC Irvine Machine Learning Repository](https://archive.ics.uci.edu/)** –
- **[scikit-learn](https://scikit-learn.org/stable/index.html)** –

## 算法竞赛

- **[洛谷](https://www.luogu.com.cn/)** –
- **[牛客竞赛](https://ac.nowcoder.com/acm/contest/vip-index)** – 每周一次周赛，每月两次月赛，许多高校在此举办校赛、模拟赛
- **[CodeForces](https://codeforces.com/)** – 来自俄罗斯 全球最大算法竞赛平台，有海量 XCPC 题目资源
- **[AtCoder](https://atcoder.jp/)** – 来自日本，与 CodeForces 类似，比赛时间对 cn 更友好
- **[QOJ](https://qoj.ac/)** – CF 上没有的 XCPC 题目可以来这里找
- **[LeetCode 力扣](https://leetcode.cn/)** – 力扣模式与 ACM 模式不同，适合求职者学习
- **[CFTracker](https://cftracker.netlify.app/contests)** – 根据 CF 平台 ID 统计做题情况
- **[AtCoder Problems](https://kenkoooo.com/atcoder#/table)** – 根据 AtCoder 平台 ID 统计做题情况
- **[Vjudge](https://vjudge.net/)** – 整合所有平台的题目并支持远程提交
- **[Acwing](https://www.acwing.com/)** –
- **[DopplerXD 的算法模板](https://www.dopplerxd.top/algorithm/wjz9z319/)** – 自己整理的算法模板
- **[jiangly 的算法模板](https://github.com/hh2048/XCPC/tree/main/03%20-%20jiangly%E6%A8%A1%E6%9D%BF%E6%94%B6%E9%9B%86)** – by github - hh2048
- **[Board - XCPCIO](https://board.xcpcio.com/)** – XCPC 竞赛榜单

## 信息获取

- **[今日热榜](https://tophub.today/)** – 整合站，什么都有
- **[AnyKnew](https://www.anyknew.com/#/)** – 效率咨询，高效读咨询
- **[RSS 订阅源推荐](https://rss-source.com/)** – 很全，但少部分不可用

## 小工具

- **[即时工具](https://www.67tool.com/)** – 在线工具箱，不仅限于程序员
- **[极简工具](https://tool.zzzmh.cn/)** – 程序员的葵花宝典
- **[Qwerty Learner](https://qwerty.cooleryue.cn/)** – 边练字边背单词，好用！
- **[LDTools](https://tool.pc.wiki/)** – PC 常用工具，by 老弟一号工作室
- **[emojimix](https://tikolu.net/emojimix)** – 生成 emoji 混合表情
- **[你注册过哪些网站](https://www.reg007.com/)** – 根据手机号查询注册过的网站
- **[geogebra](https://www.geogebra.org/)** – 数学教学平台，2D/3D 绘图，科学、图形计算器，数学学习资源
- **[打字练习](https://www.typingtom.com/)** – 手型练习、测速等
- **[Yes Or No?](https://yesno.wtf/)** – 随机出现 yes 或 no 的视频片段/图片，帮你决策
- **[humanbenchmark](https://humanbenchmark.com/)** – 人类素质测试，反应、定位、瞬间记忆等
- **[中午吃什么](https://chishenme.xyz/)** – 简洁，随机帮你决定今天吃什么
- **[网络剪切板](https://netcut.cn/)** – 提供数据暂存和传送服务
- **[代码便利贴](https://paste.org.cn/)** – 在线代码分享平台
- **[iLovePDF](https://www.ilovepdf.com/zh-cn)** – PDF爱好者的在线工具，完全免费、易于使用、丰富的PDF处理工具

## 游戏

- **[HLTV](https://www.hltv.org/)** – CS 最权威的竞赛信息平台
- **[MC百科](https://www.mcmod.cn/)** – 最大的Minecraft中文百科
- **[中文MC Wiki](https://minecraft.fandom.com/zh/wiki/Minecraft_Wiki)** – 最详细的我的世界百科
- **[VALORANT赛事数据](https://www.rib.gg/zh)** – 数据全面 类似HLTV
- **[无畏契约赛事官网](https://vct.qq.com/)** – 腾讯

## 博客搭建

- **[CC Licenses List](https://creativecommons.org/licenses/list.zh-hans)** – CC 系列知识共享许可证
- **[wordpress 中文站](https://cn.wordpress.org/)** – 以PHP和MySQL为平台的自由开源的博客软件和内容管理系统
- **[hugo](https://gohugo.io/)** – 基于 Go 开发的静态框架
- **[VuePress](https://vuepress.vuejs.org/zh/)** – Vue 驱动的静态网站生成器
- **[hexo](https://hexo.io/zh-cn/)** – 快速、简洁且高效的博客框架
- **[Github Pages](https://pages.github.com/)** – 无需多言！
- **[mkdocs-material](https://squidfunk.github.io/mkdocs-material/)** – 个人认为是 mkdocs 最好的主题
- **[Halo](https://www.halo.run/)** – 强大易用的开源建站工具

## 前端开发

- **[AI/LLM 模型图标集](https://lobehub.com/zh/icons)** – 开源矢量图标集，覆盖主流 AI 品牌和模型
- **[iconfont](https://www.iconfont.cn/)** – 阿里巴巴矢量图标集
- **[Vue3 文档](https://cn.vuejs.org/guide/introduction)** –
- **[Element Plus](https://element-plus.org/zh-CN/)** – 基于 Vue 3，面向设计师和开发者的组件库
- **[arco.design](https://arco.design/)** – 字节跳动出品的企业级设计系统，支持 Vue 和 React
- **[Ant Design Vue](https://www.antdv.com/components/overview-cn)** – 阿里开发，有 React 版本
- **[Web 入门](https://developer.mozilla.org/zh-CN/docs/Learn_web_development/Getting_started/Your_first_website)** –
- **[前端学习路线](https://objtube.github.io/front-end-roadmap/#/)** – by Github objtube

## 后端开发

- **[Apipost](https://www.apipost.cn/)** – Apipost = Postman + Swagger + Mock + Jmeter
- **[MyBatis-Plus](https://baomidou.com/introduce/)** – MyBatis 的增强工具
- **[60s API](https://docs.60s-api.viki.moe/)** – 一系列高质量、开源、可靠的开放 API 集合

## 其他

- **[Every Second](https://everysecond.io/)** – 每一秒能发生什么
- **[chrome 小恐龙游戏](chrome://dino/)** – 超经典小恐龙游戏 无网必玩
`,
    toc: [
      { id: '互联网优质资源分享', text: '互联网优质资源分享', level: 1 },
      { id: 'ai', text: 'AI', level: 2 },
      { id: '学习资源', text: '学习资源', level: 2 },
      { id: '计算机科学', text: '计算机科学', level: 2 },
      { id: '数据科学', text: '数据科学', level: 2 },
      { id: '算法竞赛', text: '算法竞赛', level: 2 },
      { id: '信息获取', text: '信息获取', level: 2 },
      { id: '小工具', text: '小工具', level: 2 },
      { id: '游戏', text: '游戏', level: 2 },
      { id: '博客搭建', text: '博客搭建', level: 2 },
      { id: '前端开发', text: '前端开发', level: 2 },
      { id: '后端开发', text: '后端开发', level: 2 },
      { id: '其他', text: '其他', level: 2 },
    ]
  },
}

export async function generateStaticParams() {
  return Object.keys(docsData).map(slug => ({
    slug: slug === 'index' ? [] : slug.split('/')
  }))
}

export default function DocPage({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug?.join('/') || 'index'
  const doc = docsData[slug] || docsData['index']

  return (
    <main className="min-h-screen tech-grid flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex">
        <CategoryProvider>
          <div className="fixed left-0 top-16 bottom-[60px] flex z-40">
            <CategoryNav />
            <DocSidebar />
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-5xl px-12 pt-24 pb-8">
              <Breadcrumb />
              <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h1:gradient-text prose-h2:text-2xl prose-h2:border-b prose-h2:border-border prose-h2:pb-2 prose-a:text-primary prose-code:text-primary prose-code:bg-secondary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-pre:bg-secondary/10 prose-pre:border prose-pre:border-border">
                <MDXContent source={doc.content} />
              </article>
            </div>
          </div>
        </CategoryProvider>
        
        <div className="fixed right-0 top-16 bottom-[60px] z-40">
          <TableOfContents items={doc.toc} />
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
