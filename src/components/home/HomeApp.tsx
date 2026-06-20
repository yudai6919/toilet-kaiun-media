"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fade } from "@/lib/animations";
import { CheckCircle, Calendar, Bell, MessageCircle, BookOpen, Sparkles } from "lucide-react";

const FEATURES = [
  { icon: CheckCircle, title: "掃除記録", desc: "ワンタップで今日の掃除を記録" },
  { icon: Calendar, title: "継続カレンダー", desc: "掃除した日を一覧で可視化" },
  { icon: Bell, title: "リマインダー", desc: "毎日の習慣を優しく通知" },
  { icon: MessageCircle, title: "今日のメッセージ", desc: "心を整える一言を毎日お届け" },
  { icon: BookOpen, title: "開運ログ", desc: "良いことが起きたら記録しよう" },
  { icon: Sparkles, title: "達成バッジ", desc: "継続のマイルストーンを祝福" },
];

export default function HomeApp() {
  return (
    <section id="app" className="py-28 md:py-36 px-6 bg-charcoal">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fade} initial="hidden" whileInView="visible" custom={0}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold text-[10px] tracking-[0.5em] uppercase mb-8 font-light">App</p>
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
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fade} initial="hidden" whileInView="visible" custom={i % 3}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/5 border border-white/5 p-6 md:p-7"
            >
              <f.icon className="w-5 h-5 text-gold/60 mb-3" strokeWidth={1.5} />
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
            href="/app"
            className="rounded-full bg-gold px-10 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-gold-mid hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            無料で始める <span aria-hidden="true">&rarr;</span>
          </Link>
          <p className="text-white/20 text-xs mt-4 tracking-wide">iOS / Android 対応・無料</p>
        </motion.div>
      </div>
    </section>
  );
}
