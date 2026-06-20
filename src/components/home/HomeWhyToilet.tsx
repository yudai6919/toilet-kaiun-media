"use client";

import { motion } from "framer-motion";
import { fade } from "@/lib/animations";

const REASONS = [
  { num: "01", title: "空間が整う", desc: "毎日使う場所を整えることで、暮らし全体の空気が少しずつ変わり始めます。" },
  { num: "02", title: "心が整う", desc: "目の前を無心で磨く時間が、散らかった思考を静かに整理してくれます。" },
  { num: "03", title: "行動が整う", desc: "小さな習慣が次の行動を連れてきます。整える力は、人生を動かす力です。" },
];

export default function HomeWhyToilet() {
  return (
    <section className="py-28 md:py-36 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fade} initial="hidden" whileInView="visible" custom={0}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-gold text-[10px] tracking-[0.5em] uppercase mb-8 font-light">Why Toilet</p>
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-charcoal">
            なぜ、トイレ掃除なのか。
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {REASONS.map((item, i) => (
            <motion.div
              key={item.num}
              variants={fade} initial="hidden" whileInView="visible" custom={i}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <p className="text-gold/40 text-4xl md:text-5xl font-light mb-5 font-[var(--font-zen-old-mincho)]">
                {item.num}
              </p>
              <h3 className="text-lg font-bold text-charcoal mb-3 tracking-wide">{item.title}</h3>
              <p className="text-sm text-charcoal/45 leading-[2] tracking-wide">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
