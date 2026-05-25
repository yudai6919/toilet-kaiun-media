"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Heart, Sun, CheckCircle, Calendar, Bell, MessageCircle, BookOpen, ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import TestimonialBanner from "@/components/TestimonialBanner";
import FocusArticles from "@/components/FocusArticles";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <>
      {/* 1. First View */}
      <HeroSection />

      {/* 2. Manga Section */}
      <section id="manga" className="py-24 md:py-32 px-6 bg-[#F8F4EE]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[#B68A3D] text-xs tracking-[0.3em] mb-4"
          >
            STORY
          </motion.p>
          <motion.h2
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#2B2118]"
          >
            私が変わったきっかけ
          </motion.h2>
          <motion.p
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-[#2B2118]/60 leading-relaxed text-base md:text-lg mb-12"
          >
            何も変わらないと思っていた毎日が、
            <br className="hidden sm:block" />
            たったひとつの小さな行動から動き出した。
          </motion.p>

          {/* PC: 6コマ全体画像 */}
          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="hidden md:block"
          >
            <Image
              src="/images/totonoe-manga.png"
              alt="TOTONOEストーリー漫画"
              width={1536}
              height={1024}
              className="rounded-2xl shadow-xl mx-auto"
              sizes="900px"
            />
          </motion.div>

          {/* Mobile: 1コマずつ縦スクロール表示 */}
          <div className="md:hidden flex flex-col gap-10">
            {[
              { src: "/images/manga/panel-1.png", alt: "第1話：変わらない毎日" },
              { src: "/images/manga/panel-2.png", alt: "第2話：SNSで見つけた投稿" },
              { src: "/images/manga/panel-3.png", alt: "第3話：人生変えたいなら" },
              { src: "/images/manga/panel-4.png", alt: "第4話：自宅のトイレを見て" },
              { src: "/images/manga/panel-5.png", alt: "第5話：無心で磨いた" },
              { src: "/images/manga/panel-6.png", alt: "第6話：人生が動き出した" },
            ].map((panel, i) => (
              <motion.div
                key={panel.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
                viewport={{ once: true, margin: "-40px" }}
                className="rounded-2xl shadow-lg overflow-hidden bg-white"
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

          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mt-12"
          >
            <Link
              href="#habit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C49A4A] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#B68A3D] hover:-translate-y-0.5"
            >
              小さな一歩を始める <span>&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2.5. Testimonial Banner */}
      <TestimonialBanner />

      {/* 3. Empathy Section */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#B68A3D] text-xs tracking-[0.3em] mb-4">FOR YOU</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#2B2118]">
              変わりたいのに、
              <br className="sm:hidden" />
              何から始めればいいか
              <br />
              わからないあなたへ。
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Heart, title: "部屋も心も、なんだか重い", desc: "散らかった空間は、心の状態を映す鏡。まず一か所だけ、整えてみませんか。" },
              { icon: Sun, title: "朝を変えたいのに続かない", desc: "大きな変化は要りません。たった1分の小さな行動が、毎朝を変えていきます。" },
              { icon: Sparkles, title: "運気を整える習慣がほしい", desc: "古来より伝わる「掃除と開運」。場を清めることで、良い流れが生まれます。" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeIn} initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-cream rounded-2xl p-8 md:p-10"
              >
                <item.icon className="w-6 h-6 text-[#B68A3D] mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-[#2B2118] mb-3">{item.title}</h3>
                <p className="text-sm text-[#2B2118]/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. About TOTONOE */}
      <section id="about" className="py-24 md:py-32 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[#B68A3D] text-xs tracking-[0.3em] mb-4">ABOUT</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight text-[#2B2118]">
              TOTONOEは、
              <br className="sm:hidden" />
              トイレ掃除を
              <br />
              &ldquo;人生を整える習慣&rdquo;に変える
              <br className="sm:hidden" />
              サービスです。
            </h2>
            <div className="w-10 h-px bg-[#B68A3D]/40 mx-auto mb-8" />
            <p className="text-[#2B2118]/60 leading-loose text-base md:text-lg">
              掃除のやり方を教えるだけではなく、
              <br />
              毎日の小さな行動を記録し、続けることで、
              <br />
              空間・心・運の流れを整えていく
              <br className="sm:hidden" />
              習慣化サポートです。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. Habit Section */}
      <section id="habit" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#B68A3D] text-xs tracking-[0.3em] mb-4">HABIT</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-[#2B2118]">
              毎日1分でいい。
              <br />
              整える人から、流れは変わる。
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              { num: "01", title: "気づく", desc: "自宅のトイレを見てみてください。その状態が、今のあなたの心を映しています。" },
              { num: "02", title: "磨く", desc: "たった1分、便器をひと拭き。完璧じゃなくていい。触れることが、整えの第一歩。" },
              { num: "03", title: "記録する", desc: "アプリで今日の掃除を記録。続いている実感が、明日のあなたを動かします。" },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                variants={fadeIn} initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-cream rounded-2xl p-8 md:p-10"
              >
                <p className="text-[#B68A3D] text-3xl font-light mb-4">{step.num}</p>
                <h3 className="text-xl font-bold text-[#2B2118] mb-3">{step.title}</h3>
                <p className="text-sm text-[#2B2118]/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5. Focus Articles */}
      <FocusArticles />

      {/* 6. App Section */}
      <section id="app" className="py-24 md:py-32 px-6 bg-[#2B2118] text-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#B68A3D] text-xs tracking-[0.3em] mb-4">APP</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              トイレ掃除を、
              <br className="sm:hidden" />
              続く開運習慣へ。
            </h2>
            <p className="text-cream/50 text-base md:text-lg leading-relaxed">
              毎日の掃除を記録し、継続を可視化。
              <br />
              あなたの習慣化をサポートするアプリです。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-14">
            {[
              { icon: CheckCircle, title: "掃除記録", desc: "ワンタップで今日の掃除を記録" },
              { icon: Calendar, title: "継続カレンダー", desc: "掃除した日を一覧で可視化" },
              { icon: Bell, title: "リマインダー", desc: "毎日の習慣を優しく通知" },
              { icon: MessageCircle, title: "今日の整えメッセージ", desc: "心を整える一言を毎日お届け" },
              { icon: BookOpen, title: "開運ログ", desc: "良いことが起きたら記録しよう" },
              { icon: Sparkles, title: "達成バッジ", desc: "継続のマイルストーンを祝福" },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeIn} initial="hidden" whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#3A2A1E] rounded-2xl p-6 md:p-8"
              >
                <f.icon className="w-5 h-5 text-[#B68A3D] mb-3" strokeWidth={1.5} />
                <h3 className="font-bold text-cream mb-1.5">{f.title}</h3>
                <p className="text-cream/40 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C49A4A] px-10 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#B68A3D] hover:-translate-y-0.5"
            >
              無料で始める <span>&rarr;</span>
            </Link>
            <p className="text-cream/30 text-xs mt-4">iOS / Android 対応・無料</p>
          </motion.div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-24 md:py-32 px-6 bg-gold-pale">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-[#2B2118]">
              人生を変えるきっかけは、
              <br />
              いつも小さな行動から。
            </h2>
            <p className="text-[#2B2118]/60 text-base md:text-lg leading-relaxed mb-10">
              大きなことを始める必要はありません。
              <br />
              まず、目の前のトイレを1分だけ磨いてみてください。
            </p>
            <Link
              href="#app"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C49A4A] px-10 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#B68A3D] hover:-translate-y-0.5"
            >
              今日から整える <span>&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
