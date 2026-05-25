"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.14, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

export default function HeroSection() {
  return (
    <section className="-mt-16 overflow-hidden bg-cream">
      {/* ===== PC: full-width background with refined overlay ===== */}
      <div className="hidden lg:block relative min-h-screen">
        <Image
          src="/images/hero-kaiun-toilet.png"
          alt="開運トイレ空間"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Premium gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(248,244,238,0.94) 0%, rgba(248,244,238,0.80) 38%, rgba(248,244,238,0.0) 72%)",
          }}
        />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center min-h-screen pl-16 xl:pl-24 2xl:pl-28 pr-8 pt-16">
          <div className="max-w-xl lg:max-w-[580px]">
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="text-[#B68A3D]/50 text-[10px] tracking-[0.5em] uppercase mb-8 lg:mb-10 font-light"
            >
              Toilet Cleaning Habit
            </motion.p>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="font-[var(--font-zen-old-mincho)] text-[3.2rem] lg:text-[3.6rem] xl:text-[4.2rem] font-bold leading-[1.3] tracking-[0.04em] text-[#2B2118] mb-5"
            >
              人生変えたいなら、
              <br />
              <span className="font-black tracking-[0.06em]">まずトイレを磨け。</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="font-[var(--font-zen-old-mincho)] text-lg lg:text-xl text-[#B68A3D] font-normal mb-10 tracking-[0.08em]"
            >
              トイレ掃除を、人生を整える習慣へ。
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="w-12 h-px bg-[#B68A3D]/30 mb-10"
            />

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="text-[15px] text-[#2B2118]/55 leading-[2.2] mb-14 tracking-wide"
            >
              <p>
                トイレは、幸運の入口。<br />
                綺麗にすることで、心も運も整い、<br />
                良い流れを引き寄せていきます。
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={4}
              className="flex flex-row items-center gap-5"
            >
              <Link
                href="#habit"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C49A4A] px-9 py-[18px] text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#B68A3D] hover:-translate-y-0.5 hover:shadow-xl"
              >
                今日から整える <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
              <Link
                href="#manga"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-[#C49A4A]/25 bg-white/60 backdrop-blur-sm px-9 py-[18px] text-sm font-semibold text-[#2B2118]/80 transition-all duration-300 hover:bg-[#2B2118] hover:text-cream hover:border-transparent hover:-translate-y-0.5"
              >
                漫画で読む <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ===== Mobile/Tablet: title overlaid on image ===== */}
      <div className="lg:hidden">
        {/* Hero image with overlaid title */}
        <div className="relative min-h-[75vh] md:min-h-[70vh] flex items-end pb-0">
          <Image
            src="/images/hero-kaiun-toilet.png"
            alt="開運トイレ空間"
            fill
            priority
            className="object-cover object-[65%_center]"
            sizes="100vw"
          />
          {/* Gradient overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(248,244,238,0) 0%, rgba(248,244,238,0.10) 30%, rgba(248,244,238,0.60) 50%, rgba(248,244,238,0.90) 70%, rgba(248,244,238,1) 85%)",
            }}
          />

          {/* Title overlay on image */}
          <div className="relative z-10 w-full px-7 sm:px-10 pb-10 text-center">
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="text-[#B68A3D]/60 text-[9px] tracking-[0.5em] uppercase mb-5 font-light"
            >
              Toilet Cleaning Habit
            </motion.p>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="font-[var(--font-zen-old-mincho)] text-[2.1rem] sm:text-[2.6rem] font-bold leading-[1.35] tracking-[0.04em] text-[#2B2118] mb-4"
            >
              人生変えたいなら、<br />
              <span className="font-black text-[2.4rem] sm:text-[2.9rem] tracking-[0.06em]">まずトイレを磨け。</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="font-[var(--font-zen-old-mincho)] text-base sm:text-lg text-[#B68A3D] font-normal tracking-[0.08em]"
            >
              トイレ掃除を、人生を整える習慣へ。
            </motion.p>
          </div>
        </div>

        {/* Text content below image */}
        <div className="px-7 py-10 sm:px-10 sm:py-14 text-center">
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="w-10 h-px bg-[#B68A3D]/30 mx-auto mb-8"
          />

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="text-sm text-[#2B2118]/55 leading-[2.2] mb-10 tracking-wide"
          >
            <p>
              トイレは、幸運の入口。<br />
              綺麗にすることで、心も運も整い、<br />
              良い流れを引き寄せていきます。
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={4}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
          >
            <Link
              href="#habit"
              className="flex items-center justify-center gap-2 rounded-full bg-[#C49A4A] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#B68A3D]"
            >
              今日から整える <span>&rarr;</span>
            </Link>
            <Link
              href="#manga"
              className="flex items-center justify-center gap-2 rounded-full border border-[#C49A4A]/25 bg-white/60 px-8 py-4 text-sm font-semibold text-[#2B2118]/80 transition-all duration-300 hover:bg-[#2B2118] hover:text-cream"
            >
              漫画で読む <span>&rarr;</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
