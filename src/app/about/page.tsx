import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://totonoe-life.jp";

export const metadata: Metadata = {
  title: "TOTONOEについて｜人生変えたいなら、まずトイレを磨け。",
  description:
    "TOTONOEは、空間・習慣・心を整えるための読みものサイトです。トイレ掃除をきっかけに、人生を少しずつ整えるヒントを発信しています。",
  openGraph: {
    title: "TOTONOEについて｜人生変えたいなら、まずトイレを磨け。",
    description:
      "TOTONOEは、空間・習慣・心を整えるための読みものサイトです。トイレ掃除をきっかけに、人生を少しずつ整えるヒントを発信しています。",
    url: `${SITE_URL}/about`,
    type: "website",
    siteName: "TOTONOE | 整え。",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "TOTONOEについて",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOTONOEについて｜人生変えたいなら、まずトイレを磨け。",
    description:
      "TOTONOEは、空間・習慣・心を整えるための読みものサイトです。",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

const values = [
  {
    num: "01",
    title: "完璧を目指さない",
    desc: "完璧にやろうとすると続かない。7割でいい。やったことに意味がある。",
  },
  {
    num: "02",
    title: "小さく整える",
    desc: "大きく変えようとしない。目の前のひとつを、ただ整える。それだけでいい。",
  },
  {
    num: "03",
    title: "自分を責めない",
    desc: "サボった日があっても大丈夫。やめたわけじゃない。また戻ればいい。",
  },
  {
    num: "04",
    title: "続けるより戻ってくる",
    desc: "継続は大事。でもそれ以上に、離れてもまた戻ってこれることが大事。",
  },
  {
    num: "05",
    title: "人生は習慣でできている",
    desc: "才能でも運でもなく、毎日の小さな習慣が人生を作っている。",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD: Organization */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "TOTONOE",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/icon-512.png`,
          },
          description:
            "TOTONOEは、空間・習慣・心を整えるための読みものサイトです。トイレ掃除をきっかけに、人生を少しずつ整えるヒントを発信しています。",
          sameAs: [],
          foundingDate: "2026",
          knowsAbout: [
            "トイレ掃除",
            "習慣化",
            "開運",
            "丁寧な暮らし",
            "マインドフルネス",
          ],
        }}
      />

      {/* JSON-LD: AboutPage */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "TOTONOEについて",
          description:
            "TOTONOEは、空間・習慣・心を整えるための読みものサイトです。",
          url: `${SITE_URL}/about`,
          isPartOf: {
            "@type": "WebSite",
            name: "TOTONOE | 整え。",
            url: SITE_URL,
          },
        }}
      />

      {/* ═══════ 1. Hero ═══════ */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            items={[
              { label: "TOP", href: "/" },
              { label: "TOTONOEについて", href: "/about" },
            ]}
          />

          <div className="text-center mt-8 md:mt-12">
            <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-8 font-light">
              About
            </p>
            <h1 className="font-[var(--font-zen-old-mincho)] text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.4] tracking-[0.04em] text-[#2C2C2C] mb-8">
              TOTONOEについて
            </h1>
            <div className="w-10 h-px bg-[#C8A96B]/30 mx-auto mb-8" />
            <p className="font-[var(--font-zen-old-mincho)] text-lg md:text-xl text-[#C8A96B] font-normal tracking-[0.06em] leading-[1.8]">
              人生変えたいなら、
              <br />
              まずトイレを磨け。
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ 2. TOTONOEとは ═══════ */}
      <section className="py-24 md:py-32 px-6 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-6 font-light">
            What is TOTONOE
          </p>
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C] mb-10">
            TOTONOEとは
          </h2>
          <div className="space-y-6 text-sm md:text-base text-[#2C2C2C]/55 leading-[2.2] tracking-wide">
            <p>
              TOTONOEは、「空間・習慣・心を整える」をテーマにした読みものサイトです。
            </p>
            <p>
              トイレ掃除という、誰でも今日から始められる小さな行動をきっかけに、暮らしと人生を少しずつ整えていく。そのためのヒントや考え方、実践者の体験談をお届けしています。
            </p>
            <p>
              掃除のハウツーだけではなく、「なぜ整えるのか」「整えることで何が変わるのか」を、静かに、丁寧に伝えていきます。
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ 3. なぜこのサイトを作ったのか ═══════ */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-6 font-light">
            Our Story
          </p>
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C] mb-10">
            なぜこのサイトを作ったのか
          </h2>
          <div className="space-y-6 text-sm md:text-base text-[#2C2C2C]/55 leading-[2.2] tracking-wide">
            <p>
              何かを変えたい。でも、何から始めればいいかわからない。そんな日がありました。
            </p>
            <p>
              あるとき、ふと目についたのが自宅のトイレでした。汚れた空間を見て、自分の心も同じように散らかっていることに気づきました。
            </p>
            <p>
              たった1分、トイレを磨いてみた。それだけで、少しだけ気持ちが軽くなった。その小さな体験が、TOTONOEの原点です。
            </p>
            <p>
              「大きなことをしなくていい。目の前のひとつを整えるだけで、人生は少しずつ動き始める。」その実感を、同じように立ち止まっている人に届けたい。そう思って、このサイトを作りました。
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ 4. TOTONOEの価値観 ═══════ */}
      <section className="py-24 md:py-32 px-6 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-6 font-light">
              Values
            </p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C]">
              TOTONOEの価値観
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {values.map((v) => (
              <div
                key={v.num}
                className="rounded-2xl bg-white border border-[#E8DDC8]/40 p-7 md:p-8"
              >
                <p className="text-[#C8A96B]/30 text-3xl font-light font-[var(--font-zen-old-mincho)] mb-4">
                  {v.num}
                </p>
                <h3 className="text-base font-bold text-[#2C2C2C] mb-3 tracking-wide">
                  {v.title}
                </h3>
                <p className="text-[13px] text-[#2C2C2C]/45 leading-[2] tracking-wide">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 5. このサイトで伝えたいこと ═══════ */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-6 font-light">
            Our Message
          </p>
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C] mb-10">
            このサイトで伝えたいこと
          </h2>
          <div className="space-y-6 text-sm md:text-base text-[#2C2C2C]/55 leading-[2.2] tracking-wide">
            <p>
              TOTONOEが伝えたいのは、「掃除のやり方」ではありません。
            </p>
            <p>
              毎日の小さな行動を積み重ねることで、空間が整い、心が整い、やがて人生の流れそのものが整っていく。その静かな変化の可能性を、読みものを通じて届けていきたいと考えています。
            </p>
            <p>
              大きなことをする必要はありません。完璧である必要もありません。ただ、今日ひとつだけ、目の前を整えてみる。それだけで十分です。
            </p>
          </div>
        </div>
      </section>

      {/* ═══════ 6. CTA ═══════ */}
      <section className="py-28 md:py-36 px-6 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-[1.6] tracking-[0.04em] text-[#2C2C2C]">
            まずは今日、
            <br />
            ひとつだけ整えてみませんか。
          </h2>
          <p className="text-[#2C2C2C]/40 text-sm md:text-base leading-[2] tracking-wide mb-12">
            大きなことを始める必要はありません。
            <br />
            まず、目の前のトイレを
            <br className="sm:hidden" />
            1分だけ磨いてみてください。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/note"
              className="rounded-full bg-[#2C2C2C] px-9 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-[#1a1a1a] hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              記事を読む <span>&rarr;</span>
            </Link>
            <Link
              href="/stories"
              className="rounded-full border border-[#2C2C2C]/15 px-9 py-4 text-sm font-semibold text-[#2C2C2C]/70 tracking-wide transition-all duration-300 hover:border-[#C8A96B] hover:text-[#2C2C2C] hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              整えの記録を見る <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
