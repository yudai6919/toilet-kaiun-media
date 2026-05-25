"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

const voices = [
  {
    id: 1,
    image: "/images/testimonial-banner.png",
    tag: "30代・会社員",
    title: "朝の空気が、変わった気がした。",
    days: "継続 42日目",
    body: "毎朝トイレを磨くようになって、不思議と部屋全体を整えたくなった。気づいたら、朝の気持ちが軽くなっていた。最初は「本当に効果あるの？」と半信半疑だったけれど、2週間続けたあたりから、朝起きるのが少しだけ楽しみになった。",
    changes: ["朝の気分が軽くなった", "部屋全体を片付けるようになった", "早起きが習慣になった"],
  },
  {
    id: 2,
    image: "/images/testimonial-banner.png",
    tag: "40代・主婦",
    title: "忘れていたお金が、戻ってきた。",
    days: "継続 28日目",
    body: "掃除を始めて2週間、忘れていた返金の通知が届いた。偶然かもしれない。でも、何かが動き始めた気がする。トイレを綺麗にすると、不思議と気持ちも整って、家全体の空気が変わった気がします。",
    changes: ["忘れていた返金が届いた", "家族に褒められるようになった", "気持ちに余裕が生まれた"],
  },
  {
    id: 3,
    image: "/images/testimonial-banner.png",
    tag: "20代・フリーランス",
    title: "小さな習慣が、自信になった。",
    days: "継続 67日目",
    body: "続けられない自分が嫌だった。でもトイレ掃除だけは続いた。たった1分が、自分を信じるきっかけになった。何かを「毎日続けている」という事実が、仕事にも良い影響を与えている気がする。",
    changes: ["自己肯定感が上がった", "仕事の集中力が増した", "他の習慣も続くようになった"],
  },
  {
    id: 4,
    image: "/images/testimonial-banner.png",
    tag: "50代・経営者",
    title: "経営の流れが、整い始めた。",
    days: "継続 90日目",
    body: "経営者仲間に勧められて始めた。最初は半信半疑だったが、毎朝トイレを磨く時間が、一日の最初の「整え」になった。不思議と判断が冴えるようになり、良い縁が巡ってくるようになった。",
    changes: ["朝の判断力が上がった", "新しい取引先と繋がった", "社員との関係が良くなった"],
  },
  {
    id: 5,
    image: "/images/testimonial-banner.png",
    tag: "30代・看護師",
    title: "夜勤明けの自分を、労われるようになった。",
    days: "継続 35日目",
    body: "夜勤が多く、生活リズムが乱れがちだった。トイレ掃除を「帰宅後の最初の行動」にしたら、どんなに疲れていても「今日も一つ、やり遂げた」と思えるようになった。",
    changes: ["生活にリズムが生まれた", "疲れていても達成感がある", "自分を大切にする意識が芽生えた"],
  },
  {
    id: 6,
    image: "/images/testimonial-banner.png",
    tag: "60代・定年後",
    title: "毎日に、小さな張り合いが生まれた。",
    days: "継続 120日目",
    body: "定年後、やることがなく漫然と過ごしていた。妻に勧められてトイレ掃除を始めたら、毎日の記録が楽しみになった。今では朝一番の日課。孫に「おじいちゃん、トイレいつもピカピカだね」と言われたのが嬉しかった。",
    changes: ["毎日に目的ができた", "家族との会話が増えた", "健康意識が高まった"],
  },
];

export default function VoicesPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 bg-[#F8F4EE]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="text-[#B68A3D]/50 text-[10px] tracking-[0.5em] uppercase mb-6 font-light"
          >
            Voices
          </motion.p>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="font-[var(--font-zen-old-mincho)] text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.4] tracking-[0.04em] text-[#2B2118] mb-6"
          >
            少しずつ、
            <br />
            流れが変わり始めた。
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-[#2B2118]/50 text-sm md:text-base leading-relaxed tracking-wide"
          >
            トイレ掃除を続けた人たちの、小さな変化の記録。
            <br />
            特別なことは何もしていない。ただ、毎日1分、磨いただけ。
          </motion.p>
        </div>
      </section>

      {/* Voice Cards */}
      <section className="py-16 md:py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {voices.map((voice, i) => (
              <motion.article
                key={voice.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                custom={i % 2}
                viewport={{ once: true, margin: "-40px" }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-[#B68A3D]/[0.06] transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={voice.image}
                    alt={voice.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/40 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm rounded-full px-3 py-1.5">
                    <span className="text-[10px] text-[#B68A3D] font-semibold tracking-wide">
                      {voice.days}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-7 py-7 sm:px-8 sm:py-8">
                  <p className="text-[#B68A3D]/60 text-[10px] tracking-[0.3em] uppercase mb-3 font-light">
                    {voice.tag}
                  </p>
                  <h2 className="font-[var(--font-zen-old-mincho)] text-lg sm:text-xl font-bold leading-[1.6] tracking-[0.03em] text-[#2B2118] mb-4">
                    {voice.title}
                  </h2>
                  <div className="w-8 h-px bg-[#B68A3D]/20 mb-4" />
                  <p className="text-[13px] text-[#2B2118]/50 leading-[2] tracking-wide mb-6">
                    {voice.body}
                  </p>

                  {/* Changes list */}
                  <div className="bg-[#F8F4EE] rounded-2xl px-5 py-4">
                    <p className="text-[10px] text-[#B68A3D]/60 tracking-[0.3em] uppercase mb-3 font-light">
                      変化の記録
                    </p>
                    <ul className="space-y-2">
                      {voice.changes.map((change) => (
                        <li
                          key={change}
                          className="flex items-start gap-2 text-[13px] text-[#2B2118]/60 leading-relaxed"
                        >
                          <span className="text-[#B68A3D] mt-0.5 text-xs">+</span>
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 px-6 bg-[#F8F4EE]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
          >
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.5] tracking-[0.04em] text-[#2B2118] mb-5">
              次は、あなたの番かもしれない。
            </h2>
            <p className="text-[#2B2118]/50 text-sm md:text-base leading-relaxed tracking-wide mb-10">
              大きなことは何も要りません。
              <br />
              まず今日、目の前のトイレを1分だけ磨いてみてください。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link
                href="/#habit"
                className="flex items-center justify-center gap-2 rounded-full bg-[#C49A4A] px-9 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#B68A3D] hover:-translate-y-0.5"
              >
                今日から整える <span>&rarr;</span>
              </Link>
              <Link
                href="/"
                className="flex items-center justify-center gap-2 rounded-full border border-[#C49A4A]/25 bg-white/60 px-9 py-4 text-sm font-semibold text-[#2B2118]/80 transition-all duration-300 hover:bg-[#2B2118] hover:text-cream"
              >
                トップに戻る
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
