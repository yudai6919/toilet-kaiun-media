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

const articles = [
  {
    id: 1,
    image: "/images/testimonial-banner.png",
    category: "開運コラム",
    title: "なぜ成功者はトイレ掃除をするのか？その本当の理由",
    href: "#",
  },
  {
    id: 2,
    image: "/images/testimonial-banner.png",
    category: "習慣化",
    title: "「たった1分」が人生を変える。最小習慣の科学",
    href: "#",
  },
  {
    id: 3,
    image: "/images/testimonial-banner.png",
    category: "体験談",
    title: "掃除を始めて3ヶ月。夫婦関係が変わった話",
    href: "#",
  },
  {
    id: 4,
    image: "/images/testimonial-banner.png",
    category: "風水・開運",
    title: "風水師が教える、運気が上がるトイレの整え方",
    href: "#",
  },
  {
    id: 5,
    image: "/images/testimonial-banner.png",
    category: "マインド",
    title: "「場」を整えると、心が整う。空間と心理の関係",
    href: "#",
  },
];

export default function FocusArticles() {
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
      setActiveIndex(Math.min(index, articles.length - 1));
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="column" className="py-20 md:py-28 bg-white">
      {/* Header row */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ once: true }}
        className="flex items-baseline justify-between px-6 md:px-[max(1.5rem,calc((100vw-64rem)/2))] mb-8 md:mb-10"
      >
        <div className="flex items-baseline gap-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-[#2B2118]">
            FOCUS
          </h2>
          <span className="text-sm text-[#2B2118]/40 tracking-wide hidden sm:inline">
            注目記事
          </span>
        </div>
        <Link
          href="/note"
          className="text-sm font-semibold text-[#B68A3D] hover:text-[#2B2118] transition-colors duration-300 flex items-center gap-1.5"
        >
          すべて見る
          <span>&rarr;</span>
        </Link>
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
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.href}
              className="group flex-shrink-0 w-[68vw] sm:w-[45vw] md:w-[280px] lg:w-[300px] snap-start"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-3">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  sizes="(min-width: 768px) 300px, 68vw"
                />
              </div>

              {/* Category */}
              <p className="text-[#B68A3D] text-[11px] font-semibold tracking-wide mb-1.5">
                {article.category}
              </p>

              {/* Title */}
              <h3 className="text-[15px] font-bold leading-[1.7] text-[#2B2118] group-hover:text-[#B68A3D] transition-colors duration-300">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* Dot indicators (mobile only) */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {articles.map((_, i) => (
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
                  ? "w-5 bg-[#B68A3D]"
                  : "w-1.5 bg-[#B68A3D]/20"
              }`}
              aria-label={`記事 ${i + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
