"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fade } from "@/lib/animations";

type VoiceEntry = {
  id: string;
  name: string;
  content: string;
  mood: string;
  moodEmoji: string;
  moodLabel: string;
  createdAt: string;
};

const VOICE_STORAGE_KEY = "totonoe-voices";

const SAMPLE_VOICES = [
  { emoji: "😊", mood: "少し軽くなった", text: "トイレを3分だけ掃除した。\n少し気持ちが落ち着いた。", name: "匿名" },
  { emoji: "🙂", mood: "普通", text: "朝5分だけ散歩した。", name: "ゆう" },
  { emoji: "😌", mood: "落ち着いた", text: "玄関を掃除した。\n空気が変わった気がする。", name: "匿名" },
];

export default function HomeVoices() {
  const [voiceEntries, setVoiceEntries] = useState<VoiceEntry[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(VOICE_STORAGE_KEY);
      if (raw) {
        const entries: VoiceEntry[] = JSON.parse(raw);
        setVoiceEntries(entries.slice(0, 3));
      }
    } catch {
      // ignore
    }
  }, []);

  const displayVoices = voiceEntries.length > 0
    ? voiceEntries.map((e) => ({
        emoji: e.moodEmoji,
        mood: e.moodLabel,
        text: e.content,
        name: e.name || "匿名",
      }))
    : SAMPLE_VOICES;

  return (
    <section className="py-24 md:py-32 px-6 bg-white" aria-label="みんなの整えの記録">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fade} initial="hidden" whileInView="visible" custom={0}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">
            Voices of Totonoe
          </p>
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-charcoal mb-6">
            みんなの整えの記録
          </h2>
          <div className="w-10 h-px bg-gold/30 mx-auto mb-8" />
          <p className="text-sm text-charcoal/40 leading-[2.2] tracking-wide">
            人生は突然変わらない。
            <br />
            でも、小さく整えることから
            <br className="sm:hidden" />
            少しずつ変わり始める。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-14">
          {displayVoices.map((voice, i) => (
            <motion.div
              key={i}
              variants={fade} initial="hidden" whileInView="visible" custom={i}
              viewport={{ once: true }}
              className="rounded-2xl bg-cream border border-border/40 p-6 md:p-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl" role="img" aria-label={voice.mood}>{voice.emoji}</span>
                <span className="text-xs font-semibold text-gold tracking-wide">{voice.mood}</span>
              </div>
              <p className="text-sm text-charcoal/70 leading-[2] tracking-wide whitespace-pre-line mb-5">
                {voice.text}
              </p>
              <p className="text-[11px] text-charcoal/25 tracking-wide">
                by {voice.name}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fade} initial="hidden" whileInView="visible" custom={0}
          viewport={{ once: true }}
          className="text-center space-y-5"
        >
          <Link
            href="/voice"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/25 bg-white/60 backdrop-blur-sm px-9 py-4 text-sm font-semibold text-charcoal/80 transition-all duration-300 hover:bg-charcoal hover:text-cream hover:border-transparent hover:-translate-y-0.5"
          >
            みんなの整えを見る <span>&rarr;</span>
          </Link>
          <div>
            <p className="text-[12px] text-charcoal/30 leading-[2] tracking-wide mb-3">
              あなたの整えも残してみませんか？
            </p>
            <Link
              href="/voice"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-gold hover:text-charcoal transition-colors duration-300"
            >
              整えを記録する <span>&rarr;</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
