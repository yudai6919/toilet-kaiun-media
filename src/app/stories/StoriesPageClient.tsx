"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Blog } from "@/lib/microcms";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

const changeTags = [
  "朝が少し楽になった",
  "部屋を片付けられた",
  "気持ちが軽くなった",
  "早起きできた",
  "人と比べなくなった",
  "自分を責めなくなった",
];

type Props = {
  stories: Blog[];
};

export default function StoriesPageClient({ stories }: Props) {
  return (
    <>
      {/* ========== Hero ========== */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            variants={fade} initial="hidden" animate="visible" custom={0}
            className="text-[#C8A96B] text-[10px] tracking-[0.5em] uppercase mb-8 font-light"
          >
            Stories
          </motion.p>
          <motion.h1
            variants={fade} initial="hidden" animate="visible" custom={1}
            className="font-[var(--font-zen-old-mincho)] text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.5] tracking-[0.04em] text-[#2C2C2C] mb-8"
          >
            整えの記録
          </motion.h1>
          <motion.div
            variants={fade} initial="hidden" animate="visible" custom={2}
            className="w-10 h-px bg-[#C8A96B]/30 mx-auto mb-8"
          />
          <motion.p
            variants={fade} initial="hidden" animate="visible" custom={2}
            className="text-sm md:text-base text-[#2C2C2C]/40 leading-[2.2] tracking-wide"
          >
            人生は突然変わらない。
            <br />
            <br className="sm:hidden" />
            小さな習慣の積み重ねで、
            <br className="sm:hidden" />
            少しずつ整っていく。
            <br />
            <br className="sm:hidden" />
            そんな体験談を集めました。
          </motion.p>
        </div>
      </section>

      {/* ========== Change Tags ========== */}
      <section className="py-16 md:py-20 px-6 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-[#C8A96B] text-[10px] tracking-[0.5em] uppercase mb-5 font-light">
              Changes
            </p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-xl md:text-2xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C]">
              こんな変化がありました
            </h2>
          </motion.div>

          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={1}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {changeTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white border border-[#C8A96B]/15 px-5 py-2.5 text-[13px] text-[#2C2C2C]/55 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== Story Cards ========== */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          {stories.length > 0 ? (
            <div className="space-y-6">
              {stories.map((story, i) => (
                <motion.div
                  key={story.id}
                  variants={fade}
                  initial="hidden"
                  whileInView="visible"
                  custom={i % 3}
                  viewport={{ once: true }}
                >
                  <Link
                    href={`/note/${story.slug}`}
                    aria-label={`${story.title}を読む`}
                    className="group block"
                  >
                    <article className="rounded-2xl bg-[#FAF7F2] border border-[#FAF7F2] hover:border-[#C8A96B]/20 p-7 md:p-9 transition-all duration-300 hover:shadow-sm">
                      {/* Date */}
                      <time
                        dateTime={story.publishedAt}
                        className="text-[11px] text-[#2C2C2C]/25 tracking-wide block mb-3"
                      >
                        {formatDate(story.publishedAt)}
                      </time>

                      {/* Title */}
                      <h3 className="font-[var(--font-zen-old-mincho)] text-[17px] md:text-lg font-bold leading-[1.7] tracking-[0.02em] text-[#2C2C2C] mb-3 group-hover:text-[#C8A96B] transition-colors duration-300">
                        {story.title}
                      </h3>

                      {/* Description */}
                      {story.description && (
                        <p className="text-[13px] text-[#2C2C2C]/35 leading-[1.9] tracking-wide line-clamp-2 mb-4">
                          {story.description}
                        </p>
                      )}

                      {/* Read link */}
                      <span className="text-[12px] font-semibold text-[#C8A96B]/40 group-hover:text-[#C8A96B] transition-colors duration-300">
                        続きを読む &rarr;
                      </span>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-[#2C2C2C]/30 text-sm tracking-wide">
                まだ体験談がありません
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-24 md:py-32 px-6 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
          >
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold mb-5 leading-[1.6] tracking-[0.04em] text-[#2C2C2C]">
              あなたの人生も、
              <br />
              少しずつ整い始める
              <br className="sm:hidden" />
              かもしれません。
            </h2>
            <p className="text-[#2C2C2C]/40 text-sm md:text-base leading-[2] tracking-wide mb-12">
              大きなことを始める必要はありません。
              <br />
              まず、目の前のトイレを
              <br className="sm:hidden" />
              1分だけ磨いてみてください。
            </p>
            <Link
              href="/#start"
              className="rounded-full bg-[#2C2C2C] px-10 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-[#1a1a1a] hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              今日から整える <span>&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
