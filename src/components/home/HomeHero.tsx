"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fade } from "@/lib/animations";

export default function HomeHero() {
  return (
    <section className="min-h-[100svh] flex flex-col items-center justify-center px-6 bg-white relative">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          variants={fade} initial="hidden" animate="visible" custom={0}
          className="mb-10"
        >
          <svg width="48" height="48" viewBox="0 0 512 512" className="mx-auto opacity-80" aria-hidden="true">
            <path d="M 180 100 A 170 170 0 0 0 100 340" fill="none" stroke="currentColor" strokeWidth="36" strokeLinecap="round"/>
            <line x1="256" y1="130" x2="256" y2="330" stroke="currentColor" strokeWidth="32" strokeLinecap="round"/>
            <line x1="160" y1="230" x2="352" y2="230" stroke="currentColor" strokeWidth="32" strokeLinecap="round"/>
            <circle cx="390" cy="380" r="38" fill="currentColor"/>
          </svg>
        </motion.div>

        <motion.h1
          variants={fade} initial="hidden" animate="visible" custom={1}
          className="font-[var(--font-zen-old-mincho)] text-[26px] md:text-4xl lg:text-[42px] font-bold leading-[1.6] tracking-[0.04em] text-charcoal mb-8"
        >
          人生変えたいなら、
          <br />
          まずトイレを磨け。
        </motion.h1>

        <motion.p
          variants={fade} initial="hidden" animate="visible" custom={2}
          className="text-sm md:text-base text-charcoal/40 leading-[2] tracking-wide mb-12"
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
            className="rounded-full bg-charcoal px-9 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-charcoal-dark hover:-translate-y-0.5"
          >
            今日から整える
          </Link>
          <Link
            href="/note"
            className="rounded-full border border-charcoal/15 px-9 py-4 text-sm font-semibold text-charcoal/70 tracking-wide transition-all duration-300 hover:border-gold hover:text-charcoal hover:-translate-y-0.5"
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
        <div className="w-px h-10 bg-charcoal/10 mx-auto mb-2" />
        <p className="text-[10px] text-charcoal/20 tracking-[0.3em] uppercase">Scroll</p>
      </motion.div>
    </section>
  );
}
