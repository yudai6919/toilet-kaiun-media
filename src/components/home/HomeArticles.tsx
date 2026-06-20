"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fade } from "@/lib/animations";
import type { Blog } from "@/lib/microcms";
import ArticleCard from "@/components/ArticleCard";

type CategorySection = {
  slug: string;
  ja: string;
  en: string;
  blogs: Blog[];
};

type Props = {
  latestBlogs: Blog[];
  categorySections: CategorySection[];
};

export default function HomeArticles({ latestBlogs, categorySections }: Props) {
  return (
    <>
      {/* 新着記事 */}
      {latestBlogs.length > 0 && (
        <section className="py-20 md:py-28 px-6 bg-cream-alt" aria-label="新着記事">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={fade} initial="hidden" whileInView="visible" custom={0}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="text-gold/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">New</p>
              <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.5] tracking-[0.04em] text-charcoal mb-4">
                新着記事
              </h2>
              <div className="w-10 h-px bg-gold/30 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {latestBlogs.slice(0, 6).map((blog, i) => (
                <motion.div
                  key={blog.id}
                  variants={fade} initial="hidden" whileInView="visible" custom={i % 3}
                  viewport={{ once: true }}
                >
                  <ArticleCard blog={blog} />
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fade} initial="hidden" whileInView="visible" custom={0}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href="/note"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/25 bg-white/60 backdrop-blur-sm px-9 py-4 text-sm font-semibold text-charcoal/80 transition-all duration-300 hover:bg-charcoal hover:text-cream hover:border-transparent hover:-translate-y-0.5"
              >
                すべての記事を見る <span>&rarr;</span>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* カテゴリ別セクション */}
      {categorySections.filter((s) => s.blogs.length > 0).map((section, sIdx) => (
        <section
          key={section.slug}
          className={`py-20 md:py-28 px-6 ${sIdx % 2 === 0 ? "bg-white" : "bg-cream-alt"}`}
          aria-label={section.ja}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={fade} initial="hidden" whileInView="visible" custom={0}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <p className="text-gold/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">
                {section.en}
              </p>
              <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.5] tracking-[0.04em] text-charcoal mb-4">
                {section.ja}
              </h2>
              <div className="w-10 h-px bg-gold/30 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {section.blogs.slice(0, 3).map((blog, i) => (
                <motion.div
                  key={blog.id}
                  variants={fade} initial="hidden" whileInView="visible" custom={i % 3}
                  viewport={{ once: true }}
                >
                  <ArticleCard blog={blog} />
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fade} initial="hidden" whileInView="visible" custom={0}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <Link
                href={`/category/${section.slug}`}
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-gold hover:text-charcoal transition-colors duration-300"
              >
                「{section.ja}」をもっと読む <span>&rarr;</span>
              </Link>
            </motion.div>
          </div>
        </section>
      ))}
    </>
  );
}
