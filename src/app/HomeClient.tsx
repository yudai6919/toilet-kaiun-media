"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, Bell, MessageCircle, BookOpen, Sparkles } from "lucide-react";
import type { Blog } from "@/lib/microcms";
import ArticleCard from "@/components/ArticleCard";
import PopularPosts from "@/components/PopularPosts";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

type CategorySection = {
  slug: string;
  ja: string;
  en: string;
  blogs: Blog[];
};

type Props = {
  latestBlogs: Blog[];
  storyBlogs: Blog[];
  categorySections: CategorySection[];
};

export default function HomeClient({ latestBlogs, storyBlogs, categorySections }: Props) {
  return (
    <>
      {/* ─── 1. FIRST VIEW ─── */}
      <section className="min-h-[100svh] flex flex-col items-center justify-center px-6 bg-white relative">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            variants={fade} initial="hidden" animate="visible" custom={0}
            className="mb-10"
          >
            <svg width="48" height="48" viewBox="0 0 512 512" className="mx-auto opacity-80" aria-hidden="true">
              <path d="M 180 100 A 170 170 0 0 0 100 340" fill="none" stroke="#2C2C2C" strokeWidth="36" strokeLinecap="round"/>
              <line x1="256" y1="130" x2="256" y2="330" stroke="#2C2C2C" strokeWidth="32" strokeLinecap="round"/>
              <line x1="160" y1="230" x2="352" y2="230" stroke="#2C2C2C" strokeWidth="32" strokeLinecap="round"/>
              <circle cx="390" cy="380" r="38" fill="#2C2C2C"/>
            </svg>
          </motion.div>

          <motion.h1
            variants={fade} initial="hidden" animate="visible" custom={1}
            className="font-[var(--font-zen-old-mincho)] text-[26px] md:text-4xl lg:text-[42px] font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C] mb-8"
          >
            人生変えたいなら、
            <br />
            まずトイレを磨け。
          </motion.h1>

          <motion.p
            variants={fade} initial="hidden" animate="visible" custom={2}
            className="text-sm md:text-base text-[#2C2C2C]/40 leading-[2] tracking-wide mb-12"
          >
            トイレ掃除を、人生を整える習慣へ。
            <br />
            空間・心・行動を静かに整えるメディア。
          </motion.p>

          <motion.div
            variants={fade} initial="hidden" animate="visible" custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#start"
              className="rounded-full bg-[#2C2C2C] px-9 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-[#1a1a1a] hover:-translate-y-0.5"
            >
              今日から整える
            </Link>
            <Link
              href="/note"
              className="rounded-full border border-[#2C2C2C]/15 px-9 py-4 text-sm font-semibold text-[#2C2C2C]/70 tracking-wide transition-all duration-300 hover:border-[#C8A96B] hover:text-[#2C2C2C] hover:-translate-y-0.5"
            >
              整えノートを見る
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-10 bg-[#2C2C2C]/10 mx-auto mb-2" />
          <p className="text-[10px] text-[#2C2C2C]/20 tracking-[0.3em] uppercase">Scroll</p>
        </motion.div>
      </section>

      {/* ─── Popular Posts ─── */}
      <PopularPosts bg="cream" />

      {/* ─── 2. TOTONOEとは ─── */}
      <section id="about" className="py-28 md:py-36 px-6 bg-[#F7F3EC]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={fade} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}>
            <p className="text-[#C8A96B] text-[10px] tracking-[0.5em] uppercase mb-8 font-light">About</p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C] mb-8">
              TOTONOEは、
              <br />
              トイレ掃除を
              <br className="sm:hidden" />
              &ldquo;人生を整える習慣&rdquo;に
              <br />
              変えるメディアです。
            </h2>
            <div className="w-10 h-px bg-[#C8A96B]/30 mx-auto mb-8" />
            <p className="text-[#2C2C2C]/45 text-sm md:text-base leading-[2.2] tracking-wide">
              掃除のやり方を教えるだけではありません。
              <br />
              毎日の小さな行動を通して、
              <br className="sm:hidden" />
              空間・心・行動の流れを
              <br />
              静かに整えていく。
              <br />
              そのための読みものと習慣化サポートです。
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 3. なぜトイレ掃除なのか ─── */}
      <section className="py-28 md:py-36 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <p className="text-[#C8A96B] text-[10px] tracking-[0.5em] uppercase mb-8 font-light">Why Toilet</p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C]">
              なぜ、トイレ掃除なのか。
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {[
              { num: "01", title: "空間が整う", desc: "毎日使う場所を整えることで、暮らし全体の空気が少しずつ変わり始めます。" },
              { num: "02", title: "心が整う", desc: "目の前を無心で磨く時間が、散らかった思考を静かに整理してくれます。" },
              { num: "03", title: "行動が整う", desc: "小さな習慣が次の行動を連れてきます。整える力は、人生を動かす力です。" },
            ].map((item, i) => (
              <motion.div
                key={item.num}
                variants={fade} initial="hidden" whileInView="visible" custom={i}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <p className="text-[#C8A96B]/40 text-4xl md:text-5xl font-light mb-5 font-[var(--font-zen-old-mincho)]">
                  {item.num}
                </p>
                <h3 className="text-lg font-bold text-[#2C2C2C] mb-3 tracking-wide">{item.title}</h3>
                <p className="text-sm text-[#2C2C2C]/45 leading-[2] tracking-wide">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. 新着記事 ─── */}
      {latestBlogs.length > 0 && (
        <section className="py-20 md:py-28 px-6 bg-[#F7F3EC]" aria-label="新着記事">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={fade} initial="hidden" whileInView="visible" custom={0}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">New</p>
              <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.5] tracking-[0.04em] text-[#2C2C2C] mb-4">
                新着記事
              </h2>
              <div className="w-10 h-px bg-[#C8A96B]/30 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {latestBlogs.slice(0, 6).map((blog, i) => (
                <motion.div
                  key={blog.id}
                  variants={fade} initial="hidden" whileInView="visible" custom={i % 3}
                  viewport={{ once: true }}
                >
                  <ArticleCard blog={blog} />
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fade} initial="hidden" whileInView="visible" custom={0}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href="/note"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C8A96B]/25 bg-white/60 backdrop-blur-sm px-9 py-4 text-sm font-semibold text-[#2C2C2C]/80 transition-all duration-300 hover:bg-[#2C2C2C] hover:text-[#FAF7F2] hover:border-transparent hover:-translate-y-0.5"
              >
                すべての記事を見る <span>&rarr;</span>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* ─── 5. カテゴリ別セクション ─── */}
      {categorySections.filter((s) => s.blogs.length > 0).map((section, sIdx) => (
        <section
          key={section.slug}
          className={`py-20 md:py-28 px-6 ${sIdx % 2 === 0 ? "bg-white" : "bg-[#F7F3EC]"}`}
          aria-label={section.ja}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={fade} initial="hidden" whileInView="visible" custom={0}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">
                {section.en}
              </p>
              <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.5] tracking-[0.04em] text-[#2C2C2C] mb-4">
                {section.ja}
              </h2>
              <div className="w-10 h-px bg-[#C8A96B]/30 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {section.blogs.slice(0, 3).map((blog, i) => (
                <motion.div
                  key={blog.id}
                  variants={fade} initial="hidden" whileInView="visible" custom={i % 3}
                  viewport={{ once: true }}
                >
                  <ArticleCard blog={blog} />
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fade} initial="hidden" whileInView="visible" custom={0}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <Link
                href={`/category/${section.slug}`}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#C8A96B] hover:text-[#2C2C2C] transition-colors duration-300"
              >
                「{section.ja}」をもっと読む <span>&rarr;</span>
              </Link>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ─── 6. 整えの体験談 ─── */}
      <section id="testimonial" className="py-28 md:py-36 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C8A96B] text-[10px] tracking-[0.5em] uppercase mb-8 font-light">Voices</p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C] mb-5">
              少しずつ、
              <br />
              流れが変わり始めた。
            </h2>
            <p className="text-sm text-[#2C2C2C]/40 leading-[2] tracking-wide">
              トイレ掃除を続けた人たちの、
              <br className="sm:hidden" />
              小さな変化の記録。
            </p>
          </motion.div>

          {storyBlogs.length > 0 ? (
            <div className="space-y-6">
              {storyBlogs.slice(0, 3).map((story, i) => (
                <motion.div
                  key={story.id}
                  variants={fade} initial="hidden" whileInView="visible" custom={i}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/note/${story.slug}`}
                    aria-label={`${story.title}を読む`}
                    className="group block p-6 md:p-8 rounded-2xl bg-[#F7F3EC]/60 border border-[#F7F3EC] hover:border-[#C8A96B]/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] text-[#C8A96B] font-semibold tracking-[0.15em] uppercase">
                        体験談
                      </span>
                      <span className="text-[#2C2C2C]/10 text-[10px]">|</span>
                      <time dateTime={story.publishedAt} className="text-[10px] text-[#2C2C2C]/25 tracking-wide">
                        {new Date(story.publishedAt).toLocaleDateString("ja-JP")}
                      </time>
                    </div>
                    <h3 className="font-[var(--font-zen-old-mincho)] text-[15px] md:text-base text-[#2C2C2C]/70 leading-[2] tracking-wide mb-2">
                      {story.title}
                    </h3>
                    {story.description && (
                      <p className="text-[12px] text-[#2C2C2C]/35 leading-[1.8] line-clamp-2 mb-3">
                        {story.description}
                      </p>
                    )}
                    <span className="text-[12px] font-semibold text-[#C8A96B]/40 group-hover:text-[#C8A96B] transition-colors duration-300">
                      体験談を読む &rarr;
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {[
                { slug: "toilet-cleaning-results", tag: "30代・会社員", quote: "朝の空気が変わった気がした。毎朝トイレを磨くようになって、不思議と部屋全体を整えたくなった。", days: "継続 42日目" },
                { slug: "messy-room-messy-mind", tag: "40代・主婦", quote: "散らかった部屋を見て「心も散らかってたんだ」と気づいた。まずトイレから始めたら、少しずつ楽になれた。", days: "継続 28日目" },
                { slug: "wanted-to-feel-lighter", tag: "20代・フリーランス", quote: "人生を変えたかったわけじゃない。ただ楽になりたかった。トイレ掃除は、そのための小さな入口だった。", days: "継続 67日目" },
              ].map((voice, i) => (
                <motion.div key={voice.slug} variants={fade} initial="hidden" whileInView="visible" custom={i} viewport={{ once: true }}>
                  <Link
                    href={`/note/${voice.slug}`}
                    className="group block p-6 md:p-8 rounded-2xl bg-[#F7F3EC]/60 border border-[#F7F3EC] hover:border-[#C8A96B]/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] text-[#C8A96B] font-semibold tracking-[0.15em] uppercase">{voice.tag}</span>
                      <span className="text-[#2C2C2C]/10 text-[10px]">|</span>
                      <span className="text-[10px] text-[#2C2C2C]/25 tracking-wide">{voice.days}</span>
                    </div>
                    <p className="font-[var(--font-zen-old-mincho)] text-[15px] md:text-base text-[#2C2C2C]/70 leading-[2] tracking-wide mb-3">
                      &ldquo;{voice.quote}&rdquo;
                    </p>
                    <span className="text-[12px] font-semibold text-[#C8A96B]/40 group-hover:text-[#C8A96B] transition-colors duration-300">
                      体験談を読む &rarr;
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/stories"
              className="rounded-full border border-[#2C2C2C]/12 px-9 py-4 text-sm font-semibold text-[#2C2C2C]/60 tracking-wide transition-all duration-300 hover:border-[#C8A96B]/40 hover:text-[#2C2C2C] hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              すべての体験談を見る <span>&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── 7. 6コマ漫画 ─── */}
      <section id="manga" className="py-28 md:py-36 px-6 bg-[#F7F3EC]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-[#C8A96B] text-[10px] tracking-[0.5em] uppercase mb-8 font-light">Story</p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C] mb-5">
              私が変わったきっかけ
            </h2>
            <p className="text-sm text-[#2C2C2C]/40 leading-[2] tracking-wide">
              何も変わらないと思っていた毎日が、
              <br className="sm:hidden" />
              たったひとつの行動から動き出した。
            </p>
          </motion.div>

          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={1}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <Image
              src="/images/totonoe-manga.png"
              alt="TOTONOEストーリー漫画"
              width={1536}
              height={1024}
              className="rounded-2xl mx-auto"
              sizes="900px"
            />
          </motion.div>

          <div className="md:hidden flex flex-col gap-8">
            {[
              { src: "/images/manga/panel-1.png", alt: "第1話：変わらない毎日" },
              { src: "/images/manga/panel-2.png", alt: "第2話：SNSで見つけた投稿" },
              { src: "/images/manga/panel-3.png", alt: "第3話：人生変えたいなら" },
              { src: "/images/manga/panel-4.png", alt: "第4話：自宅のトイレを見て" },
              { src: "/images/manga/panel-5.png", alt: "第5話：無心で磨いた" },
              { src: "/images/manga/panel-6.png", alt: "第6話：人生が動き出した" },
            ].map((panel) => (
              <motion.div
                key={panel.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
                viewport={{ once: true, margin: "-40px" }}
                className="rounded-2xl overflow-hidden bg-white shadow-sm"
              >
                <Image
                  src={panel.src}
                  alt={panel.alt}
                  width={768}
                  height={341}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 406px"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. 今日からできること ─── */}
      <section id="start" className="py-28 md:py-36 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C8A96B] text-[10px] tracking-[0.5em] uppercase mb-8 font-light">Start</p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C] mb-5">
              毎日1分でいい。
              <br />
              整える人から、
              <br className="sm:hidden" />
              流れは変わる。
            </h2>
          </motion.div>

          <div className="space-y-0">
            {[
              { num: "01", title: "気づく", desc: "自宅のトイレを見てみてください。その状態が、今のあなたの心を映しています。" },
              { num: "02", title: "磨く", desc: "たった1分、便器をひと拭き。完璧じゃなくていい。触れることが、整えの第一歩。" },
              { num: "03", title: "記録する", desc: "今日の掃除をアプリで記録。続いている実感が、明日のあなたを動かします。" },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                variants={fade} initial="hidden" whileInView="visible" custom={i}
                viewport={{ once: true }}
                className="flex gap-6 md:gap-8 py-10 border-b border-[#2C2C2C]/5 last:border-b-0"
              >
                <p className="text-[#C8A96B]/30 text-3xl md:text-4xl font-light font-[var(--font-zen-old-mincho)] flex-shrink-0 w-12">
                  {step.num}
                </p>
                <div>
                  <h3 className="text-lg font-bold text-[#2C2C2C] mb-2 tracking-wide">{step.title}</h3>
                  <p className="text-sm text-[#2C2C2C]/45 leading-[2] tracking-wide">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. TOTONOE APP ─── */}
      <section id="app" className="py-28 md:py-36 px-6 bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#C8A96B] text-[10px] tracking-[0.5em] uppercase mb-8 font-light">App</p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-white mb-5">
              トイレ掃除を、
              <br className="sm:hidden" />
              続く習慣へ。
            </h2>
            <p className="text-white/35 text-sm md:text-base leading-[2] tracking-wide">
              毎日の掃除を記録し、継続を可視化。
              <br />
              あなたの習慣化をサポートするアプリです。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-14">
            {[
              { icon: CheckCircle, title: "掃除記録", desc: "ワンタップで今日の掃除を記録" },
              { icon: Calendar, title: "継続カレンダー", desc: "掃除した日を一覧で可視化" },
              { icon: Bell, title: "リマインダー", desc: "毎日の習慣を優しく通知" },
              { icon: MessageCircle, title: "今日のメッセージ", desc: "心を整える一言を毎日お届け" },
              { icon: BookOpen, title: "開運ログ", desc: "良いことが起きたら記録しよう" },
              { icon: Sparkles, title: "達成バッジ", desc: "継続のマイルストーンを祝福" },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                variants={fade} initial="hidden" whileInView="visible" custom={i % 3}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/5 border border-white/5 p-6 md:p-7"
              >
                <f.icon className="w-5 h-5 text-[#C8A96B]/60 mb-3" strokeWidth={1.5} />
                <h3 className="font-bold text-white text-sm mb-1.5">{f.title}</h3>
                <p className="text-white/30 text-[13px] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="#"
              className="rounded-full bg-[#C8A96B] px-10 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-[#b89a5c] hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              無料で始める <span>&rarr;</span>
            </Link>
            <p className="text-white/20 text-xs mt-4 tracking-wide">iOS / Android 対応・無料</p>
          </motion.div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-28 md:py-36 px-6 bg-[#F7F3EC]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={fade} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}>
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-[1.6] tracking-[0.04em] text-[#2C2C2C]">
              人生を変えるきっかけは、
              <br />
              いつも小さな行動から。
            </h2>
            <p className="text-[#2C2C2C]/40 text-sm md:text-base leading-[2] tracking-wide mb-12">
              大きなことを始める必要はありません。
              <br />
              まず、目の前のトイレを
              <br className="sm:hidden" />
              1分だけ磨いてみてください。
            </p>
            <Link
              href="#app"
              className="rounded-full bg-[#2C2C2C] px-10 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-[#1a1a1a] hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              今日から整える <span>&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
