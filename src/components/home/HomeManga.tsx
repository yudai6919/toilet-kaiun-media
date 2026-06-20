"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fade } from "@/lib/animations";

const PANELS = [
  { src: "/images/manga/panel-1.png", alt: "第1話：変わらない毎日" },
  { src: "/images/manga/panel-2.png", alt: "第2話：SNSで見つけた投稿" },
  { src: "/images/manga/panel-3.png", alt: "第3話：人生変えたいなら" },
  { src: "/images/manga/panel-4.png", alt: "第4話：自宅のトイレを見て" },
  { src: "/images/manga/panel-5.png", alt: "第5話：無心で磨いた" },
  { src: "/images/manga/panel-6.png", alt: "第6話：人生が動き出した" },
];

export default function HomeManga() {
  return (
    <section id="manga" className="py-28 md:py-36 px-6 bg-cream-alt">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={fade} initial="hidden" whileInView="visible" custom={0}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-gold text-[10px] tracking-[0.5em] uppercase mb-8 font-light">Story</p>
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-charcoal mb-5">
            私が変わったきっかけ
          </h2>
          <p className="text-sm text-charcoal/40 leading-[2] tracking-wide">
            何も変わらないと思っていた毎日が、
            <br className="sm:hidden" />
            たったひとつの行動から動き出した。
          </p>
        </motion.div>

        <motion.div
          variants={fade} initial="hidden" whileInView="visible" custom={1}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <Image
            src="/images/totonoe-manga.png"
            alt="TOTONOEストーリー漫画"
            width={1536}
            height={1024}
            className="rounded-2xl mx-auto"
            sizes="900px"
          />
        </motion.div>

        <div className="md:hidden flex flex-col gap-8">
          {PANELS.map((panel) => (
            <motion.div
              key={panel.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
              viewport={{ once: true, margin: "-40px" }}
              className="rounded-2xl overflow-hidden bg-white shadow-sm"
            >
              <Image
                src={panel.src}
                alt={panel.alt}
                width={768}
                height={341}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 406px"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
