"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

type Mood = {
  emoji: string;
  label: string;
  value: string;
};

const moods: Mood[] = [
  { emoji: "😊", label: "少し軽くなった", value: "light" },
  { emoji: "🙂", label: "普通", value: "normal" },
  { emoji: "😌", label: "落ち着いた", value: "calm" },
  { emoji: "🥲", label: "まだつらい", value: "tough" },
];

type VoiceEntry = {
  id: string;
  name: string;
  content: string;
  mood: string;
  moodEmoji: string;
  moodLabel: string;
  createdAt: string;
};

const STORAGE_KEY = "totonoe-voices";

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function loadEntries(): VoiceEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveEntries(entries: VoiceEntry[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

// TODO: 将来的にAPIに差し替え
// async function submitToAPI(entry: VoiceEntry) { ... }

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

function ShareButtons({ content }: { content: string }) {
  const shareText = `今日の整え\n\n${content}\n\n#TOTONOE\n#整えの記録`;
  const shareUrl = "https://totonoe-life.jp/voice";

  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;

  return (
    <div className="flex items-center gap-3 mt-4">
      <span className="text-[11px] text-[#2C2C2C]/25 tracking-wide">シェアする</span>
      <a
        href={xUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E8DDC8]/40 text-[#2C2C2C]/40 hover:bg-[#2C2C2C] hover:text-white hover:border-transparent transition-all duration-300"
        aria-label="Xでシェアする"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
      <a
        href={lineUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E8DDC8]/40 text-[#06C755]/60 hover:bg-[#06C755] hover:text-white hover:border-transparent transition-all duration-300"
        aria-label="LINEでシェアする"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596a.626.626 0 01-.199.031c-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595a.62.62 0 01.194-.033c.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
      </a>
    </div>
  );
}

export default function VoiceClient() {
  const [entries, setEntries] = useState<VoiceEntry[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [lastEntry, setLastEntry] = useState<VoiceEntry | null>(null);

  useEffect(() => {
    setEntries(loadEntries());
  }, []);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!content.trim() || !selectedMood) return;

      const entry: VoiceEntry = {
        id: generateId(),
        name: name.trim() || "名前なし",
        content: content.trim(),
        mood: selectedMood.value,
        moodEmoji: selectedMood.emoji,
        moodLabel: selectedMood.label,
        createdAt: new Date().toISOString(),
      };

      const updated = [entry, ...entries];
      setEntries(updated);
      saveEntries(updated);
      setLastEntry(entry);
      setSubmitted(true);
      setName("");
      setContent("");
      setSelectedMood(null);
    },
    [name, content, selectedMood, entries]
  );

  const handleReset = () => {
    setSubmitted(false);
    setLastEntry(null);
  };

  return (
    <>
      {/* ═══════ Hero ═══════ */}
      <section className="pt-8 pb-20 md:pt-12 md:pb-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            variants={fade} initial="hidden" animate="visible" custom={0}
            className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-6 font-light"
          >
            Voice
          </motion.p>
          <motion.h1
            variants={fade} initial="hidden" animate="visible" custom={1}
            className="font-[var(--font-zen-old-mincho)] text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.4] tracking-[0.04em] text-[#2C2C2C] mb-6"
          >
            みんなの整えの記録
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
            でも、小さく整えることから
            <br className="sm:hidden" />
            少しずつ変わり始める。
          </motion.p>
        </div>
      </section>

      {/* ═══════ Form ═══════ */}
      <section className="py-16 md:py-20 px-6 bg-[#FAF7F2]">
        <div className="max-w-xl mx-auto">
          {submitted && lastEntry ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl bg-white border border-[#E8DDC8]/40 p-8 md:p-10 text-center">
                <p className="text-3xl mb-4">{lastEntry.moodEmoji}</p>
                <p className="font-[var(--font-zen-old-mincho)] text-lg font-bold text-[#2C2C2C] mb-2">
                  記録しました
                </p>
                <p className="text-sm text-[#2C2C2C]/40 leading-[2] tracking-wide mb-6">
                  今日の整え、お疲れさまでした。
                </p>

                <div className="rounded-xl bg-[#FAF7F2] p-5 text-left mb-6">
                  <p className="text-[13px] text-[#2C2C2C]/60 leading-[2] tracking-wide">
                    {lastEntry.content}
                  </p>
                </div>

                <ShareButtons content={lastEntry.content} />

                <button
                  onClick={handleReset}
                  className="mt-8 rounded-full border border-[#E8DDC8] px-8 py-3 text-sm font-semibold text-[#2C2C2C]/60 tracking-wide hover:border-[#C8A96B]/40 hover:text-[#2C2C2C] transition-all duration-300"
                >
                  もうひとつ記録する
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              variants={fade} initial="hidden" whileInView="visible" custom={0}
              viewport={{ once: true }}
            >
              <div className="text-center mb-10">
                <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-4 font-light">
                  Record
                </p>
                <h2 className="font-[var(--font-zen-old-mincho)] text-xl md:text-2xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C]">
                  今日の整えを記録する
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="voice-name"
                    className="block text-[12px] text-[#2C2C2C]/40 tracking-wide mb-2"
                  >
                    ハンドルネーム（任意）
                  </label>
                  <input
                    id="voice-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="名前なし"
                    maxLength={20}
                    className="w-full rounded-xl border border-[#E8DDC8] bg-white px-5 py-3.5 text-sm text-[#2C2C2C] placeholder:text-[#2C2C2C]/20 tracking-wide outline-none focus:border-[#C8A96B]/50 transition-colors"
                  />
                </div>

                {/* Content */}
                <div>
                  <label
                    htmlFor="voice-content"
                    className="block text-[12px] text-[#2C2C2C]/40 tracking-wide mb-2"
                  >
                    今日整えたこと
                  </label>
                  <textarea
                    id="voice-content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="例：朝、トイレを30秒だけ磨いた。"
                    maxLength={200}
                    rows={3}
                    className="w-full rounded-xl border border-[#E8DDC8] bg-white px-5 py-3.5 text-sm text-[#2C2C2C] placeholder:text-[#2C2C2C]/20 tracking-wide outline-none focus:border-[#C8A96B]/50 transition-colors resize-none"
                  />
                  <p className="text-right text-[10px] text-[#2C2C2C]/20 mt-1">
                    {content.length}/200
                  </p>
                </div>

                {/* Mood */}
                <div>
                  <p className="text-[12px] text-[#2C2C2C]/40 tracking-wide mb-3">
                    今日の気持ち
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {moods.map((mood) => (
                      <button
                        key={mood.value}
                        type="button"
                        onClick={() => setSelectedMood(mood)}
                        className={`rounded-xl border p-3 text-center transition-all duration-300 ${
                          selectedMood?.value === mood.value
                            ? "bg-[#2C2C2C] border-[#2C2C2C] text-white shadow-md"
                            : "bg-white border-[#E8DDC8] hover:border-[#C8A96B]/40"
                        }`}
                      >
                        <span className="text-xl block mb-1">{mood.emoji}</span>
                        <span
                          className={`text-[11px] tracking-wide ${
                            selectedMood?.value === mood.value
                              ? "text-white/70"
                              : "text-[#2C2C2C]/40"
                          }`}
                        >
                          {mood.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!content.trim() || !selectedMood}
                  className="w-full rounded-full bg-[#2C2C2C] py-4 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-[#1a1a1a] hover:-translate-y-0.5 disabled:opacity-30 disabled:hover:translate-y-0"
                >
                  記録を残す
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══════ Entries ═══════ */}
      {entries.length > 0 && (
        <section className="py-20 md:py-28 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">
                Records
              </p>
              <h2 className="font-[var(--font-zen-old-mincho)] text-xl md:text-2xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C]">
                みんなの記録
              </h2>
            </div>

            <div className="space-y-4">
              {entries.map((entry, i) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-2xl bg-[#FAF7F2] border border-[#E8DDC8]/40 p-6 md:p-7"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0 mt-0.5">
                      {entry.moodEmoji}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[12px] font-semibold text-[#2C2C2C]/60 tracking-wide">
                          {entry.name}
                        </span>
                        <span className="text-[#2C2C2C]/10 text-[10px]">|</span>
                        <time className="text-[11px] text-[#2C2C2C]/25 tracking-wide">
                          {formatDate(entry.createdAt)}
                        </time>
                      </div>
                      <p className="text-[13px] text-[#2C2C2C]/60 leading-[2] tracking-wide">
                        {entry.content}
                      </p>
                      <p className="text-[11px] text-[#C8A96B]/50 mt-2 tracking-wide">
                        {entry.moodLabel}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════ CTA ═══════ */}
      <section className="py-24 md:py-32 px-6 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            variants={fade} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
          >
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold mb-6 leading-[1.6] tracking-[0.04em] text-[#2C2C2C]">
              小さな整えが、
              <br />
              誰かの勇気になるかもしれない。
            </h2>
            <p className="text-[#2C2C2C]/40 text-sm md:text-base leading-[2] tracking-wide mb-12">
              あなたの「今日の整え」が、
              <br className="sm:hidden" />
              同じように立ち止まっている誰かの
              <br className="sm:hidden" />
              小さなきっかけになります。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/note"
                className="rounded-full bg-[#2C2C2C] px-9 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-[#1a1a1a] hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                記事を読む <span>&rarr;</span>
              </Link>
              <Link
                href="/stories"
                className="rounded-full border border-[#2C2C2C]/15 px-9 py-4 text-sm font-semibold text-[#2C2C2C]/70 tracking-wide transition-all duration-300 hover:border-[#C8A96B] hover:text-[#2C2C2C] hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                体験談を読む <span>&rarr;</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
