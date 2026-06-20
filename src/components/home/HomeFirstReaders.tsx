"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fade } from "@/lib/animations";

const RECOMMENDED = [
  {
    num: "01",
    slug: "clean-toilet-when-life-not-going-well",
    title: "人生がうまくいかない時ほど、まずトイレを磨け。",
    desc: "TOTONOEの原点。なぜトイレ掃除から始めるのか。",
  },
  {
    num: "02",
    slug: "toilet-cleaning-luck",
    title: "トイレ掃除で運気は本当に変わる？人生が整い始めると言われる理由",
    desc: "風水や成功者の習慣から、整えの効果を考える。",
  },
  {
    num: "03",
    slug: "how-to-organize-your-mind",
    title: "心を整える方法｜人生を少し軽くする7つの習慣",
    desc: "空間だけでなく、心を整えるための実践的な習慣。",
  },
  {
    num: "04",
    slug: "habits-of-people-who-live-well",
    title: "人生がうまくいく人に共通する7つの習慣",
    desc: "整える習慣を、暮らし全体に広げるヒント。",
  },
];

export default function HomeFirstReaders() {
  return (
    <section className="py-24 md:py-32 px-6 bg-white" aria-label="TOTONOEを初めて読む方へ">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={fade} initial="hidden" whileInView="visible" custom={0}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">
            For First Readers
          </p>
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-charcoal mb-5">
            TOTONOEを
            <br className="sm:hidden" />
            初めて読む方へ
          </h2>
          <div className="w-10 h-px bg-gold/30 mx-auto mb-8" />
          <p className="text-sm text-charcoal/40 leading-[2.2] tracking-wide">
            この4つの記事を順に読むと、
            <br className="sm:hidden" />
            TOTONOEの世界観がわかります。
          </p>
        </motion.div>

        <div className="space-y-4">
          {RECOMMENDED.map((article, i) => (
            <motion.div
              key={article.slug}
              variants={fade} initial="hidden" whileInView="visible" custom={i}
              viewport={{ once: true }}
            >
              <Link
                href={`/note/${article.slug}`}
                aria-label={`${article.title}を読む`}
                className="group flex gap-5 md:gap-6 p-5 md:p-6 rounded-2xl bg-cream border border-border/40 hover:border-gold/30 hover:shadow-md transition-all duration-300"
              >
                <p className="text-gold/25 text-2xl md:text-3xl font-light font-[var(--font-zen-old-mincho)] flex-shrink-0 w-10 md:w-12">
                  {article.num}
                </p>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] md:text-base font-bold text-charcoal leading-[1.7] tracking-[0.02em] mb-1.5 group-hover:text-gold transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-[12px] text-charcoal/35 leading-[1.8] tracking-wide">
                    {article.desc}
                  </p>
                </div>
                <span className="text-gold/30 group-hover:text-gold transition-colors duration-300 flex-shrink-0 self-center text-sm">
                  &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
