"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fade } from "@/lib/animations";

export default function HomeCTA() {
  return (
    <section className="py-28 md:py-36 px-6 bg-cream-alt">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div variants={fade} initial="hidden" whileInView="visible" custom={0} viewport={{ once: true }}>
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-[1.6] tracking-[0.04em] text-charcoal">
            人生を変えるきっかけは、
            <br />
            いつも小さな行動から。
          </h2>
          <p className="text-charcoal/40 text-sm md:text-base leading-[2] tracking-wide mb-12">
            大きなことを始める必要はありません。
            <br />
            まず、目の前のトイレを
            <br className="sm:hidden" />
            1分だけ磨いてみてください。
          </p>
          <Link
            href="#app"
            className="rounded-full bg-charcoal px-10 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-charcoal-dark hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            今日から整える <span>&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
