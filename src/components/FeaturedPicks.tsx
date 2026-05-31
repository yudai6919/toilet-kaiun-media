"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

const articles = [
  {
    slug: "toilet-cleaning-luck",
    category: "トイレ掃除 × 開運",
    title: "トイレ掃除で運気は本当に変わる？人生が整い始めると言われる理由",
    description:
      "風水や成功者の習慣、実際に感じやすい変化をもとに、人生が整い始める理由を解説します。",
  },
  {
    slug: "successful-people-clean-toilets",
    category: "トイレ掃除 × 開運",
    title: "なぜ成功者はトイレを磨くのか｜一流の人に共通する習慣",
    description:
      "トイレ掃除を大切にする理由や、一流の人に共通する習慣を解説します。",
  },
  {
    slug: "daily-toilet-cleaning-habits",
    category: "整える習慣",
    title: "毎日トイレ掃除する人の特徴｜人生が整う人に共通する7つの習慣",
    description:
      "人生が整う人に共通する習慣や、続けることで起きやすい変化を解説します。",
  },
  {
    slug: "toilet-cleaning-results",
    category: "体験談",
    title: "トイレ掃除を続けた結果。私の人生に起きた7つの変化",
    description:
      "朝の気分、部屋、人間関係。人生が少しずつ整い始める理由を解説します。",
  },
  {
    slug: "clean-toilet-when-life-not-going-well",
    category: "整える習慣",
    title: "人生がうまくいかない時ほど、まずトイレを磨け。",
    description:
      "空間・心・行動を整えることで、人生の流れが変わり始める理由を解説します。",
  },
];

export default function FeaturedPicks() {
  return (
    <section className="py-20 md:py-28 bg-[#F7F3EC]" aria-label="おすすめ記事">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">
            Pick Up
          </p>
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.5] tracking-[0.04em] text-[#2C2C2C] mb-4">
            まず読んでほしい、
            <br />
            整えの5記事
          </h2>
          <div className="w-10 h-px bg-[#C8A96B]/30 mx-auto mb-6" />
          <p className="text-sm text-[#2C2C2C]/40 leading-[2] tracking-wide">
            人生を整えたい日に読んでほしい、
            <br className="sm:hidden" />
            TOTONOEのはじまりの記事をまとめました。
          </p>
        </motion.div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i % 3}
              viewport={{ once: true }}
            >
              <Link
                href={`/note/${article.slug}`}
                aria-label={`${article.title}を読む`}
                className="group block h-full"
              >
                <article className="rounded-2xl bg-white border border-[#F7F3EC]/50 p-6 md:p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-[#C8A96B]/25 h-full flex flex-col">
                  {/* Category */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#C8A96B] text-[10px] font-semibold tracking-[0.2em] uppercase">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-[var(--font-zen-old-mincho)] text-[15px] md:text-base font-bold leading-[1.7] tracking-[0.02em] text-[#2C2C2C] mb-3 group-hover:text-[#C8A96B] transition-colors duration-300 flex-1">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[12px] text-[#2C2C2C]/35 leading-[1.8] tracking-wide line-clamp-2 mb-4">
                    {article.description}
                  </p>

                  {/* Read link */}
                  <span className="text-[12px] font-semibold text-[#C8A96B]/50 group-hover:text-[#C8A96B] transition-colors duration-300">
                    読む &rarr;
                  </span>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/note"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C8A96B]/25 bg-white/60 backdrop-blur-sm px-9 py-4 text-sm font-semibold text-[#2C2C2C]/80 transition-all duration-300 hover:bg-[#2C2C2C] hover:text-cream hover:border-transparent hover:-translate-y-0.5"
          >
            すべての記事を見る <span>&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
