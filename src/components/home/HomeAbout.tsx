"use client";

import { motion } from "framer-motion";
import { fade } from "@/lib/animations";

export default function HomeAbout() {
  return (
    <section id="about" className="py-28 md:py-36 px-6 bg-cream-alt">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div variants={fade} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}>
          <p className="text-gold text-[10px] tracking-[0.5em] uppercase mb-8 font-light">About</p>
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.6] tracking-[0.04em] text-charcoal mb-8">
            TOTONOEは、
            <br />
            トイレ掃除を
            <br className="sm:hidden" />
            &ldquo;人生を整える習慣&rdquo;に
            <br />
            変えるメディアです。
          </h2>
          <div className="w-10 h-px bg-gold/30 mx-auto mb-8" />
          <p className="text-charcoal/45 text-sm md:text-base leading-[2.2] tracking-wide">
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
  );
}
