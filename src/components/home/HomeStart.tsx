"use client";

import { motion } from "framer-motion";
import { fade } from "@/lib/animations";

const STEPS = [
  { num: "01", title: "気づく", desc: "自宅のトイレを見てみてください。その状態が、今のあなたの心を映しています。" },
  { num: "02", title: "磨く", desc: "たった1分、便器をひと拭き。完璧じゃなくていい。触れることが、整えの第一歩。" },
  { num: "03", title: "記録する", desc: "今日の掃除をアプリで記録。続いている実感が、明日のあなたを動かします。" },
];

export default function HomeStart() {
  return (
    <section id="start" className="py-28 md:py-36 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={fade} initial="hidden" whileInView="visible" custom={0}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold text-[10px] tracking-[0.5em] uppercase mb-8 font-light">Start</p>
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-charcoal mb-5">
            毎日1分でいい。
            <br />
            整える人から、
            <br className="sm:hidden" />
            流れは変わる。
          </h2>
        </motion.div>

        <div className="space-y-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fade} initial="hidden" whileInView="visible" custom={i}
              viewport={{ once: true }}
              className="flex gap-6 md:gap-8 py-10 border-b border-charcoal/5 last:border-b-0"
            >
              <p className="text-gold/30 text-3xl md:text-4xl font-light font-[var(--font-zen-old-mincho)] flex-shrink-0 w-12">
                {step.num}
              </p>
              <div>
                <h3 className="text-lg font-bold text-charcoal mb-2 tracking-wide">{step.title}</h3>
                <p className="text-sm text-charcoal/45 leading-[2] tracking-wide">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
