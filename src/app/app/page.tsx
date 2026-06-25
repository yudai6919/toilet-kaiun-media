import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE_URL, LINE_URL } from "@/lib/constants";
import LineIcon from "@/components/LineIcon";

export const metadata: Metadata = {
  title: "TOTONOEアプリ｜トイレ掃除を習慣にするアプリ",
  description:
    "トイレ掃除や小さな習慣を記録し、人生を少しずつ整えるTOTONOEアプリ。現在開発中。先行案内はLINEで受付中。",
  openGraph: {
    title: "TOTONOEアプリ｜トイレ掃除を習慣にするアプリ",
    description:
      "トイレ掃除や小さな習慣を記録し、人生を少しずつ整えるTOTONOEアプリ。先行案内はLINEで受付中。",
    url: `${SITE_URL}/app`,
    type: "website",
    siteName: "TOTONOE | 整え。",
    locale: "ja_JP",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "TOTONOEアプリ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOTONOEアプリ｜トイレ掃除を習慣にするアプリ",
    description:
      "トイレ掃除や小さな習慣を記録し、人生を少しずつ整えるTOTONOEアプリ。先行案内はLINEで受付中。",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: `${SITE_URL}/app`,
  },
};

const features = [
  {
    title: "トイレ掃除記録",
    desc: "ワンタップで今日の掃除を記録。毎日の小さな達成感を可視化します。",
  },
  {
    title: "朝習慣記録",
    desc: "朝のルーティンを記録。カーテンを開ける、水を飲む、深呼吸する。",
  },
  {
    title: "整えの記録",
    desc: "掃除以外の「整えた瞬間」も記録。靴を揃えた、玄関を整えた、など。",
  },
  {
    title: "継続日数表示",
    desc: "続けた日数をカレンダーで可視化。途切れても、また戻ればOK。",
  },
  {
    title: "21日チャレンジ",
    desc: "科学に基づいた21日間の習慣化プログラム。無理なくトイレ掃除を習慣にできます。",
  },
  {
    title: "達成バッジ",
    desc: "3日、7日、21日、100日。継続のマイルストーンごとにバッジを獲得。",
  },
];

export default function AppPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            items={[
              { label: "TOP", href: "/" },
              { label: "アプリ紹介", href: "/app" },
            ]}
          />

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-cream border border-border/50 px-5 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] text-charcoal/50 font-semibold tracking-wide">
                開発中
              </span>
            </div>

            <p className="text-gold/50 text-[10px] tracking-[0.5em] uppercase mb-6 font-light">
              App
            </p>
            <h1 className="font-[var(--font-zen-old-mincho)] text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.4] tracking-[0.04em] text-charcoal mb-6">
              TOTONOEアプリ
            </h1>
            <div className="w-10 h-px bg-gold/30 mx-auto mb-8" />
            <p className="font-[var(--font-zen-old-mincho)] text-lg md:text-xl text-gold font-normal tracking-[0.06em] leading-[1.8] mb-8">
              人生変えたいなら、
              <br />
              まずトイレを磨け。
            </p>
            <p className="text-sm md:text-base text-charcoal/45 leading-[2.2] tracking-wide">
              小さな習慣を記録し、
              <br className="sm:hidden" />
              人生を少しずつ整えるアプリを準備しています。
            </p>
          </div>
        </div>
      </section>

      {/* App Mockup */}
      <section className="py-16 md:py-20 px-6 bg-cream">
        <div className="max-w-sm mx-auto">
          <div className="bg-charcoal rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="aspect-[9/16] bg-charcoal-light rounded-2xl flex items-center justify-center border border-white/5">
              <div className="text-center px-6 space-y-6">
                <p className="text-gold text-5xl">&#10022;</p>
                <div>
                  <p className="text-white text-2xl font-bold mb-1">TOTONOE</p>
                  <p className="text-white/30 text-xs">整え。</p>
                </div>
                <div className="bg-charcoal rounded-xl p-4 text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">連続記録</span>
                    <span className="text-gold text-sm font-bold">21日</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">今月の掃除</span>
                    <span className="text-white text-sm font-bold">14回</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs">獲得バッジ</span>
                    <span className="text-gold text-sm font-bold">5</span>
                  </div>
                </div>
                <div className="bg-gold text-charcoal rounded-full py-3 px-6 text-sm font-bold">
                  今日の掃除を記録
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">
              Features
            </p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-charcoal">
              できること
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-cream border border-border/40 p-7 md:p-8"
              >
                <h3 className="text-base font-bold text-charcoal mb-2 tracking-wide">
                  {f.title}
                </h3>
                <p className="text-[13px] text-charcoal/45 leading-[2] tracking-wide">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINE CTA */}
      <section className="py-24 md:py-32 px-6 bg-cream">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gold/50 text-[10px] tracking-[0.5em] uppercase mb-6 font-light">
            LINE
          </p>
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-charcoal mb-5">
            先行案内はLINEで
            <br className="sm:hidden" />
            お届けします
          </h2>
          <div className="w-10 h-px bg-gold/30 mx-auto mb-10" />

          <div className="rounded-2xl bg-white border border-border/40 p-7 md:p-8 mb-10">
            <p className="text-[10px] text-gold/60 tracking-[0.3em] uppercase mb-5 font-light">
              配信内容
            </p>
            <ul className="space-y-3">
              {["アプリのリリース情報", "新しい記事のお知らせ", "整える習慣のヒント", "限定コンテンツ"].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[13px] text-charcoal/60 tracking-wide"
                >
                  <span className="w-1 h-1 rounded-full bg-gold/40 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-line-green px-10 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-line-green-hover hover:-translate-y-0.5 shadow-lg shadow-line-green/20 mb-4"
          >
            <LineIcon className="w-5 h-5" />
            LINEで登録する
          </a>
          <p className="text-[11px] text-charcoal/20 tracking-wide">
            無料で登録できます
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 md:py-36 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-[1.6] tracking-[0.04em] text-charcoal">
            毎日の整えを、
            <br />
            記録する習慣へ。
          </h2>
          <p className="text-charcoal/40 text-sm md:text-base leading-[2] tracking-wide mb-12">
            TOTONOEアプリで、
            <br className="sm:hidden" />
            小さな習慣を続ける力を。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-line-green px-10 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-line-green-hover hover:-translate-y-0.5 shadow-lg shadow-line-green/20"
            >
              <LineIcon className="w-5 h-5" />
              LINEで先行案内を受け取る
            </a>
            <Link
              href="/note"
              className="rounded-full border border-charcoal/15 px-9 py-4 text-sm font-semibold text-charcoal/70 tracking-wide transition-all duration-300 hover:border-gold hover:text-charcoal hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              記事を読む <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
