"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Blog } from "@/lib/microcms";
import ArticleCard from "@/components/ArticleCard";
import PopularPosts from "@/components/PopularPosts";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

type Category = { slug: string; ja: string; en: string; description: string };

type Props = {
  blogs: Blog[];
  totalCount: number;
  categories: readonly Category[];
};

function EmptyState() {
  return (
    <div className="text-center py-20">
      <p className="text-[#2B2118]/30 text-sm tracking-wide mb-2">
        まだ記事がありません
      </p>
      <p className="text-[#2B2118]/20 text-xs">
        microCMSに記事を追加すると、ここに表示されます。
      </p>
    </div>
  );
}

export default function NotePageClient({ blogs, totalCount, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredBlogs = activeCategory
    ? blogs.filter((b) => b.category?.includes(activeCategory))
    : blogs;

  return (
    <>
      {/* ========== 1. Hero ========== */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-[#F8F4EE]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="text-[#B68A3D]/50 text-[10px] tracking-[0.5em] uppercase mb-6 font-light"
          >
            Note
          </motion.p>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="font-[var(--font-zen-old-mincho)] text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.4] tracking-[0.04em] text-[#2B2118] mb-5"
          >
            整えノート
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="font-[var(--font-zen-old-mincho)] text-base md:text-lg text-[#B68A3D] font-normal tracking-[0.06em] mb-8"
          >
            トイレ掃除、習慣、心、暮らし。
            <br className="sm:hidden" />
            人生を少しずつ整えるための読みもの。
          </motion.p>
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="w-10 h-px bg-[#B68A3D]/30 mx-auto mb-8"
          />
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="text-sm text-[#2B2118]/45 leading-[2.2] tracking-wide"
          >
            変わりたい日も、立ち止まりたい日も。
            <br />
            小さな気づきと行動が、
            <br className="sm:hidden" />
            毎日の流れを静かに変えていきます。
          </motion.p>
        </div>
      </section>

      {/* ========== 2. Category Navigation ========== */}
      <section className="py-12 md:py-16 px-6 bg-white" aria-label="カテゴリから探す">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-[#B68A3D]/50 text-[10px] tracking-[0.5em] uppercase mb-4 font-light">
              Categories
            </p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-xl md:text-2xl font-bold leading-[1.6] tracking-[0.04em] text-[#2B2118]">
              カテゴリから探す
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" custom={1}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4"
          >
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group rounded-2xl bg-[#F8F4EE] border border-[#E8DDC8]/50 p-5 hover:border-[#B68A3D]/30 hover:shadow-md transition-all duration-300 text-center"
              >
                <p className="text-[#B68A3D]/50 text-[8px] tracking-[0.3em] uppercase mb-1.5 font-light">
                  {cat.en}
                </p>
                <h3 className="text-[13px] font-bold text-[#2B2118] group-hover:text-[#B68A3D] transition-colors duration-300">
                  {cat.ja}
                </h3>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== 3. Category Filter + Articles ========== */}
      <section className="py-16 md:py-24 px-6 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-[var(--font-zen-old-mincho)] text-xl md:text-2xl font-bold leading-[1.6] tracking-[0.04em] text-[#2B2118]">
              すべての記事
            </h2>
            <p className="text-[12px] text-[#2B2118]/30 tracking-wide mt-2">
              {totalCount}件の記事
            </p>
          </motion.div>

          {/* Category pills */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16"
          >
            <button
              onClick={() => setActiveCategory(null)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                activeCategory === null
                  ? "bg-[#2B2118] text-[#FAF7F2] shadow-md"
                  : "bg-white border border-[#E8DDC8] text-[#2B2118]/60 hover:border-[#B68A3D]/40 hover:text-[#2B2118]"
              }`}
            >
              すべて
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() =>
                  setActiveCategory(activeCategory === cat.ja ? null : cat.ja)
                }
                className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeCategory === cat.ja
                    ? "bg-[#2B2118] text-[#FAF7F2] shadow-md"
                    : "bg-white border border-[#E8DDC8] text-[#2B2118]/60 hover:border-[#B68A3D]/40 hover:text-[#2B2118]"
                }`}
              >
                {cat.ja}
              </button>
            ))}
          </motion.div>

          {/* Article grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {filteredBlogs.map((blog, i) => (
                <motion.div
                  key={blog.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  custom={i % 3}
                  viewport={{ once: true }}
                >
                  <ArticleCard blog={blog} />
                </motion.div>
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>

      {/* ========== Popular Posts ========== */}
      <PopularPosts title="人気の記事" bg="white" />

      {/* ========== 4. Testimonial Banner ========== */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
          >
            <p className="text-[#B68A3D]/50 text-[10px] tracking-[0.5em] uppercase mb-6 font-light">
              Voices
            </p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.5] tracking-[0.04em] text-[#2B2118] mb-5">
              少しずつ、
              <br />
              流れが変わり始めた。
            </h2>
            <p className="text-[#2B2118]/45 text-sm md:text-base leading-relaxed tracking-wide mb-10">
              トイレ掃除を続けた人たちの、
              <br className="sm:hidden" />
              小さな変化の記録。
            </p>
            <Link
              href="/stories"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C49A4A]/25 bg-[#F8F4EE]/60 backdrop-blur-sm px-9 py-4 text-sm font-semibold text-[#2B2118]/80 transition-all duration-300 hover:bg-[#2B2118] hover:text-[#FAF7F2] hover:border-transparent hover:-translate-y-0.5"
            >
              体験談を読む <span>&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== 5. Final CTA ========== */}
      <section className="py-24 md:py-32 px-6 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
          >
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-[1.5] tracking-[0.04em] text-[#2B2118]">
              読むだけで終わらせない。
              <br />
              今日、ひとつ整える。
            </h2>
            <p className="text-[#2B2118]/45 text-sm md:text-base leading-relaxed tracking-wide mb-10">
              TOTONOEは、トイレ掃除を
              <br className="sm:hidden" />
              毎日の整える習慣に変えるための
              <br className="sm:hidden" />
              サービスです。
            </p>
            <Link
              href="/#app"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C49A4A] px-10 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#B68A3D] hover:-translate-y-0.5"
            >
              今日から整える <span>&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
