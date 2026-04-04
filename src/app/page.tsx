import { GlowButton } from "@/components/glow-button";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen tech-grid">
      <Navbar />

      {/* Hero 区域 */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            {/* 头像 */}
            <div className="rainbow-border p-1 mb-8">
              <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-5xl">🚀</span>
              </div>
            </div>

            {/* 标题 */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Doppler Pages</span>
            </h1>

            {/* 副标题 */}
            <p className="text-xl md:text-2xl text-secondary max-w-2xl mb-8">
              简约科技风的个人网站，支持浅色/深色/跟随系统主题切换
            </p>

            {/* 按钮组 */}
            <div className="flex gap-4 flex-wrap justify-center">
              <Link href="/docs">
                <GlowButton>开始探索</GlowButton>
              </Link>
              <button className="px-8 py-3 rounded-lg border border-border hover:border-primary hover:text-primary transition-colors">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 特性卡片 */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">核心特性</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border bg-background/50 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2"/>
        <path d="M12 20v2"/>
        <path d="m4.93 4.93 1.41 1.41"/>
        <path d="m17.66 17.66 1.41 1.41"/>
        <path d="M2 12h2"/>
        <path d="M20 12h2"/>
        <path d="m6.34 17.66-1.41 1.41"/>
        <path d="m19.07 4.93-1.41 1.41"/>
      </svg>
    ),
    title: "主题切换",
    description: "支持浅色、深色和跟随系统三种主题模式，一键切换，无缝过渡",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
      </svg>
    ),
    title: "流光炫彩",
    description: "独特的流光炫彩按钮效果，让你的网站更具科技感和视觉冲击力",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="m13 2-2 2.5h3L12 7"/>
        <path d="M10 14v-3"/>
        <path d="M14 14v-3"/>
        <path d="M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3h-2Z"/>
        <path d="M12 22v-3"/>
      </svg>
    ),
    title: "简约科技",
    description: "简约而不简单的设计风格，科技感与美感并存，体验更佳",
  },
];
