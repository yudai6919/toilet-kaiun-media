"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

const testimonials = [
  {
    id: 1,
    image: "/images/testimonial-banner.png",
    tag: "30代・会社員",
    title: "朝の空気が、変わった気がした。",
    days: "継続 42日目",
  },
  {
    id: 2,
    image: "/images/testimonial-banner.png",
    tag: "40代・主婦",
    title: "忘れていたお金が、戻ってきた。",
    days: "継続 28日目",
  },
  {
    id: 3,
    image: "/images/testimonial-banner.png",
    tag: "20代・フリーランス",
    title: "小さな習慣が、自信になった。",
    days: "継続 67日目",
  },
];

export default function TestimonialBanner() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const cardWidth = el.firstElementChild
        ? (el.firstElementChild as HTMLElement).offsetWidth
        : 1;
      const gap = 16;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(index, testimonials.length - 1));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="testimonial" className="py-24 md:py-32 bg-[#F8F4EE]">
      {/* Section Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-14 px-6"
      >
        <p className="text-[#B68A3D]/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">
          Voices
        </p>
        <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl lg:text-[2.2rem] font-bold leading-[1.5] tracking-[0.04em] text-[#2B2118] mb-5">
          少しずつ、
          <br />
          流れが変わり始めた。
        </h2>
        <p className="text-[#2B2118]/50 text-sm md:text-base leading-relaxed tracking-wide">
          トイレ掃除を続けた人たちの、
          <br className="sm:hidden" />
          小さな変化の記録。
        </p>
      </motion.div>

      {/* Slide Cards */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: true }}
      >
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 md:px-[max(1.5rem,calc((100vw-64rem)/2))] pb-2 no-scrollbar"
        >
          {testimonials.map((item) => (
            <Link
              key={item.id}
              href="/voices"
              className="group flex-shrink-0 w-[72vw] sm:w-[55vw] md:w-[320px] lg:w-[340px] snap-start"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(min-width: 768px) 340px, 72vw"
                />
                {/* Subtle bottom vignette */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent" />
                {/* Days badge */}
                <div className="absolute bottom-4 left-4 bg-white/85 backdrop-blur-sm rounded-full px-3 py-1.5">
                  <span className="text-[10px] text-[#B68A3D] font-semibold tracking-wide">
                    {item.days}
                  </span>
                </div>
              </div>

              {/* Text */}
              <p className="text-[#B68A3D]/60 text-[10px] tracking-[0.3em] uppercase mb-2 font-light">
                {item.tag}
              </p>
              <h3 className="font-[var(--font-zen-old-mincho)] text-base sm:text-lg font-bold leading-[1.6] tracking-[0.02em] text-[#2B2118] group-hover:text-[#B68A3D] transition-colors duration-300">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = scrollRef.current;
                if (!el || !el.firstElementChild) return;
                const cardWidth = (el.firstElementChild as HTMLElement).offsetWidth;
                el.scrollTo({ left: i * (cardWidth + 16), behavior: "smooth" });
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 bg-[#B68A3D]"
                  : "w-1.5 bg-[#B68A3D]/20"
              }`}
              aria-label={`体験談 ${i + 1}`}
            />
          ))}
        </div>

        {/* "すべて見る" link */}
        <div className="text-center mt-10 px-6">
          <Link
            href="/voices"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#B68A3D] hover:text-[#2B2118] transition-colors duration-300"
          >
            すべての体験談を見る
            <span>&rarr;</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
