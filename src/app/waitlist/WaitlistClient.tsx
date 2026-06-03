"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, Sparkles, BarChart3, MessageCircle } from "lucide-react";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

// TODO: LINE公式アカウントURL — 開設後に差し替え
const LINE_URL = "https://lin.ee/XXXXXXXXX";
// TODO: LINE QRコード画像 — public/images/line-qr.png に配置後に有効化
const LINE_QR_IMAGE = "/images/line-qr.png";

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

function LineIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

export default function WaitlistClient() {
  return (
    <>
      {/* ═══════ 1. Hero ═══════ */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fade} initial="hidden" animate="visible" custom={0}
            className="inline-flex items-center gap-2 rounded-full bg-[#FAF7F2] border border-[#E8DDC8]/50 px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#C8A96B] animate-pulse" />
            <span className="text-[11px] text-[#2C2C2C]/50 font-semibold tracking-wide">
              開発中
            </span>
          </motion.div>

          <motion.p
            variants={fade} initial="hidden" animate="visible" custom={0}
            className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-6 font-light"
          >
            App
          </motion.p>

          <motion.h1
            variants={fade} initial="hidden" animate="visible" custom={1}
            className="font-[var(--font-zen-old-mincho)] text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.4] tracking-[0.04em] text-[#2C2C2C] mb-6"
          >
            TOTONOEアプリ開発中
          </motion.h1>

          <motion.div
            variants={fade} initial="hidden" animate="visible" custom={2}
            className="w-10 h-px bg-[#C8A96B]/30 mx-auto mb-8"
          />

          <motion.p
            variants={fade} initial="hidden" animate="visible" custom={2}
            className="font-[var(--font-zen-old-mincho)] text-lg md:text-xl text-[#C8A96B] font-normal tracking-[0.06em] leading-[1.8] mb-8"
          >
            人生変えたいなら、
            <br />
            まずトイレを磨け。
          </motion.p>

          <motion.p
            variants={fade} initial="hidden" animate="visible" custom={3}
            className="text-sm md:text-base text-[#2C2C2C]/45 leading-[2.2] tracking-wide"
          >
            小さな習慣を記録し、
            <br className="sm:hidden" />
            人生を少しずつ整えるアプリを準備しています。
          </motion.p>
        </div>
      </section>

      {/* ═══════ 2. Features ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">
              Features
            </p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C]">
              できること
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fade} initial="hidden" whileInView="visible" custom={i % 2}
                viewport={{ once: true }}
                className="rounded-2xl bg-white border border-[#E8DDC8]/40 p-7 md:p-8"
              >
                <f.icon className="w-5 h-5 text-[#C8A96B]/60 mb-4" strokeWidth={1.5} />
                <h3 className="text-base font-bold text-[#2C2C2C] mb-2 tracking-wide">
                  {f.title}
                </h3>
                <p className="text-[13px] text-[#2C2C2C]/45 leading-[2] tracking-wide">
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
            <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-6 font-light">
              LINE
            </p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C] mb-5">
              先行案内はLINEで
              <br className="sm:hidden" />
              お届けします
            </h2>
            <div className="w-10 h-px bg-[#C8A96B]/30 mx-auto mb-10" />

            {/* Delivery contents */}
            <div className="rounded-2xl bg-[#FAF7F2] border border-[#E8DDC8]/40 p-7 md:p-8 mb-10">
              <p className="text-[10px] text-[#C8A96B]/60 tracking-[0.3em] uppercase mb-5 font-light">
                配信内容
              </p>
              <ul className="space-y-3">
                {lineDeliveries.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[13px] text-[#2C2C2C]/60 tracking-wide"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C8A96B]/40 flex-shrink-0" />
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
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#06C755] px-10 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-[#05b34c] hover:-translate-y-0.5 shadow-lg shadow-[#06C755]/20 mb-6"
            >
              <LineIcon className="w-5 h-5" />
              LINEで登録する
            </a>

            <p className="text-[11px] text-[#2C2C2C]/20 tracking-wide mb-10">
              無料で登録できます
            </p>

            {/* QR Code area */}
            <div className="hidden md:block">
              <p className="text-[11px] text-[#2C2C2C]/25 tracking-wide mb-4">
                スマホでQRコードを読み取って登録
              </p>
              <div className="w-36 h-36 mx-auto rounded-2xl bg-[#FAF7F2] border border-[#E8DDC8]/40 flex items-center justify-center overflow-hidden">
                {/* TODO: LINE QRコード画像を配置後、下のコメントを解除 */}
                {/* <Image src={LINE_QR_IMAGE} alt="LINE友だち追加QRコード" width={144} height={144} /> */}
                <div className="text-center">
                  <MessageCircle className="w-8 h-8 text-[#C8A96B]/20 mx-auto mb-2" strokeWidth={1.5} />
                  <p className="text-[10px] text-[#2C2C2C]/20 tracking-wide">QR Code</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ 4. FAQ ═══════ */}
      <section className="py-20 md:py-28 px-6 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">
              FAQ
            </p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C]">
              よくある質問
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                variants={fade} initial="hidden" whileInView="visible" custom={i}
                viewport={{ once: true }}
                className="rounded-2xl bg-white border border-[#E8DDC8]/40 p-7 md:p-8"
              >
                <h3 className="text-sm font-bold text-[#2C2C2C] mb-3 tracking-wide">
                  {faq.q}
                </h3>
                <p className="text-[13px] text-[#2C2C2C]/45 leading-[2] tracking-wide">
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
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-[1.6] tracking-[0.04em] text-[#2C2C2C]">
              毎日の整えを、
              <br />
              記録する習慣へ。
            </h2>
            <p className="text-[#2C2C2C]/40 text-sm md:text-base leading-[2] tracking-wide mb-12">
              TOTONOEアプリで、
              <br className="sm:hidden" />
              小さな習慣を続ける力を。
            </p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#06C755] px-10 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-[#05b34c] hover:-translate-y-0.5 shadow-lg shadow-[#06C755]/20"
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
