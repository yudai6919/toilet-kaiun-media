"use client";

import { motion } from "framer-motion";
import { CheckCircle, Calendar, Sparkles, BarChart3, MessageCircle } from "lucide-react";
import LineIcon from "@/components/LineIcon";
import { fade } from "@/lib/animations";
import { LINE_URL } from "@/lib/constants";

const features = [
  {
    icon: CheckCircle,
    title: "トイレ掃除記録",
    desc: "ワンタップで今日の掃除を記録。毎日の小さな達成感を可視化します。",
  },
  {
    icon: Calendar,
    title: "朝習慣記録",
    desc: "朝のルーティンを記録。カーテンを開ける、水を飲む、深呼吸する。",
  },
  {
    icon: Sparkles,
    title: "整えの記録",
    desc: "掃除以外の「整えた瞬間」も記録。靴を揃えた、玄関を整えた、など。",
  },
  {
    icon: BarChart3,
    title: "継続日数表示",
    desc: "続けた日数をカレンダーで可視化。途切れても、また戻ればOK。",
  },
];

const lineDeliveries = [
  "アプリのリリース情報",
  "新しい記事のお知らせ",
  "整える習慣のヒント",
  "限定コンテンツ",
];

const faqs = [
  {
    q: "いつリリース予定ですか？",
    a: "現在開発準備中です。LINE登録者へ優先的にご案内します。",
  },
  {
    q: "登録は無料ですか？",
    a: "無料です。",
  },
  {
    q: "配信内容は？",
    a: "アプリ情報、新着記事、整える習慣のヒントを予定しています。",
  },
];

export default function WaitlistClient() {
  return (
    <>
      {/* ═══════ 1. Hero ═══════ */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fade} initial="hidden" animate="visible" custom={0}
            className="inline-flex items-center gap-2 rounded-full bg-cream border border-border/50 px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-[11px] text-charcoal/50 font-semibold tracking-wide">
              開発中
            </span>
          </motion.div>

          <motion.p
            variants={fade} initial="hidden" animate="visible" custom={0}
            className="text-gold/50 text-[10px] tracking-[0.5em] uppercase mb-6 font-light"
          >
            App
          </motion.p>

          <motion.h1
            variants={fade} initial="hidden" animate="visible" custom={1}
            className="font-[var(--font-zen-old-mincho)] text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.4] tracking-[0.04em] text-charcoal mb-6"
          >
            TOTONOEアプリ開発中
          </motion.h1>

          <motion.div
            variants={fade} initial="hidden" animate="visible" custom={2}
            className="w-10 h-px bg-gold/30 mx-auto mb-8"
          />

          <motion.p
            variants={fade} initial="hidden" animate="visible" custom={2}
            className="font-[var(--font-zen-old-mincho)] text-lg md:text-xl text-gold font-normal tracking-[0.06em] leading-[1.8] mb-8"
          >
            人生変えたいなら、
            <br />
            まずトイレを磨け。
          </motion.p>

          <motion.p
            variants={fade} initial="hidden" animate="visible" custom={3}
            className="text-sm md:text-base text-charcoal/45 leading-[2.2] tracking-wide"
          >
            小さな習慣を記録し、
            <br className="sm:hidden" />
            人生を少しずつ整えるアプリを準備しています。
          </motion.p>
        </div>
      </section>

      {/* ═══════ 2. Features ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-gold/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">
              Features
            </p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-charcoal">
              できること
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fade} initial="hidden" whileInView="visible" custom={i % 2}
                viewport={{ once: true }}
                className="rounded-2xl bg-white border border-border/40 p-7 md:p-8"
              >
                <f.icon className="w-5 h-5 text-gold/60 mb-4" strokeWidth={1.5} />
                <h3 className="text-base font-bold text-charcoal mb-2 tracking-wide">
                  {f.title}
                </h3>
                <p className="text-[13px] text-charcoal/45 leading-[2] tracking-wide">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 3. LINE CTA ═══════ */}
      <section id="line" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
          >
            <p className="text-gold/50 text-[10px] tracking-[0.5em] uppercase mb-6 font-light">
              LINE
            </p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-charcoal mb-5">
              先行案内はLINEで
              <br className="sm:hidden" />
              お届けします
            </h2>
            <div className="w-10 h-px bg-gold/30 mx-auto mb-10" />

            {/* Delivery contents */}
            <div className="rounded-2xl bg-cream border border-border/40 p-7 md:p-8 mb-10">
              <p className="text-[10px] text-gold/60 tracking-[0.3em] uppercase mb-5 font-light">
                配信内容
              </p>
              <ul className="space-y-3">
                {lineDeliveries.map((item) => (
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

            {/* LINE Button */}
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-line-green px-10 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-line-green-hover hover:-translate-y-0.5 shadow-lg shadow-line-green/20 mb-6"
            >
              <LineIcon className="w-5 h-5" />
              LINEで登録する
            </a>

            <p className="text-[11px] text-charcoal/20 tracking-wide mb-10">
              無料で登録できます
            </p>

            {/* QR Code area */}
            <div className="hidden md:block">
              <p className="text-[11px] text-charcoal/25 tracking-wide mb-4">
                スマホでQRコードを読み取って登録
              </p>
              <div className="w-36 h-36 mx-auto rounded-2xl bg-cream border border-border/40 flex items-center justify-center overflow-hidden">
                {/* TODO: LINE QRコード画像を配置後、下のコメントを解除 */}
                {/* <Image src={LINE_QR_IMAGE} alt="LINE友だち追加QRコード" width={144} height={144} /> */}
                <div className="text-center">
                  <MessageCircle className="w-8 h-8 text-gold/20 mx-auto mb-2" strokeWidth={1.5} />
                  <p className="text-[10px] text-charcoal/20 tracking-wide">QR Code</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ 4. FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-gold/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">
              FAQ
            </p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-charcoal">
              よくある質問
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                variants={fade} initial="hidden" whileInView="visible" custom={i}
                viewport={{ once: true }}
                className="rounded-2xl bg-white border border-border/40 p-7 md:p-8"
              >
                <h3 className="text-sm font-bold text-charcoal mb-3 tracking-wide">
                  {faq.q}
                </h3>
                <p className="text-[13px] text-charcoal/45 leading-[2] tracking-wide">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 5. Final CTA ═══════ */}
      <section className="py-28 md:py-36 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
          >
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
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-line-green px-10 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-line-green-hover hover:-translate-y-0.5 shadow-lg shadow-line-green/20"
            >
              <LineIcon className="w-5 h-5" />
              LINEで先行案内を受け取る
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
