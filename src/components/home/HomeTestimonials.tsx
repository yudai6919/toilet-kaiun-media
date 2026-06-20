"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fade } from "@/lib/animations";
import type { Blog } from "@/lib/microcms";

const FALLBACK_VOICES = [
  { slug: "toilet-cleaning-results", tag: "30代・会社員", quote: "朝の空気が変わった気がした。毎朝トイレを磨くようになって、不思議と部屋全体を整えたくなった。", days: "継続 42日目" },
  { slug: "messy-room-messy-mind", tag: "40代・主婦", quote: "散らかった部屋を見て「心も散らかってたんだ」と気づいた。まずトイレから始めたら、少しずつ楽になれた。", days: "継続 28日目" },
  { slug: "wanted-to-feel-lighter", tag: "20代・フリーランス", quote: "人生を変えたかったわけじゃない。ただ楽になりたかった。トイレ掃除は、そのための小さな入口だった。", days: "継続 67日目" },
];

type Props = {
  storyBlogs: Blog[];
};

export default function HomeTestimonials({ storyBlogs }: Props) {
  return (
    <section id="testimonial" className="py-28 md:py-36 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={fade} initial="hidden" whileInView="visible" custom={0}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold text-[10px] tracking-[0.5em] uppercase mb-8 font-light">Voices</p>
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-charcoal mb-5">
            少しずつ、
            <br />
            流れが変わり始めた。
          </h2>
          <p className="text-sm text-charcoal/40 leading-[2] tracking-wide">
            トイレ掃除を続けた人たちの、
            <br className="sm:hidden" />
            小さな変化の記録。
          </p>
        </motion.div>

        {storyBlogs.length > 0 ? (
          <div className="space-y-6">
            {storyBlogs.slice(0, 3).map((story, i) => (
              <motion.div
                key={story.id}
                variants={fade} initial="hidden" whileInView="visible" custom={i}
                viewport={{ once: true }}
              >
                <Link
                  href={`/note/${story.slug}`}
                  aria-label={`${story.title}を読む`}
                  className="group block p-6 md:p-8 rounded-2xl bg-cream-alt/60 border border-cream-alt hover:border-gold/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] text-gold font-semibold tracking-[0.15em] uppercase">
                      体験談
                    </span>
                    <span className="text-charcoal/10 text-[10px]">|</span>
                    <time dateTime={story.publishedAt} className="text-[10px] text-charcoal/25 tracking-wide">
                      {new Date(story.publishedAt).toLocaleDateString("ja-JP")}
                    </time>
                  </div>
                  <h3 className="font-[var(--font-zen-old-mincho)] text-[15px] md:text-base text-charcoal/70 leading-[2] tracking-wide mb-2">
                    {story.title}
                  </h3>
                  {story.description && (
                    <p className="text-[12px] text-charcoal/35 leading-[1.8] line-clamp-2 mb-3">
                      {story.description}
                    </p>
                  )}
                  <span className="text-[12px] font-semibold text-gold/40 group-hover:text-gold transition-colors duration-300">
                    体験談を読む &rarr;
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {FALLBACK_VOICES.map((voice, i) => (
              <motion.div key={voice.slug} variants={fade} initial="hidden" whileInView="visible" custom={i} viewport={{ once: true }}>
                <Link
                  href={`/note/${voice.slug}`}
                  className="group block p-6 md:p-8 rounded-2xl bg-cream-alt/60 border border-cream-alt hover:border-gold/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] text-gold font-semibold tracking-[0.15em] uppercase">{voice.tag}</span>
                    <span className="text-charcoal/10 text-[10px]">|</span>
                    <span className="text-[10px] text-charcoal/25 tracking-wide">{voice.days}</span>
                  </div>
                  <p className="font-[var(--font-zen-old-mincho)] text-[15px] md:text-base text-charcoal/70 leading-[2] tracking-wide mb-3">
                    &ldquo;{voice.quote}&rdquo;
                  </p>
                  <span className="text-[12px] font-semibold text-gold/40 group-hover:text-gold transition-colors duration-300">
                    体験談を読む &rarr;
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          variants={fade} initial="hidden" whileInView="visible" custom={0}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/stories"
            className="rounded-full border border-charcoal/12 px-9 py-4 text-sm font-semibold text-charcoal/60 tracking-wide transition-all duration-300 hover:border-gold/40 hover:text-charcoal hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            すべての体験談を見る <span>&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
