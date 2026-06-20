import Link from "next/link";

export default function EditorProfile() {
  return (
    <aside
      className="mt-16 pt-10 border-t border-border"
      aria-label="TOTONOE編集部について"
    >
      <div className="rounded-2xl bg-cream-warm p-7 md:p-9">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-bold tracking-wider">T</span>
          </div>
          <div>
            <p className="text-sm font-bold text-ink tracking-wide">
              TOTONOE編集部
            </p>
            <p className="text-[10px] text-gold-dark/60 tracking-[0.2em] uppercase font-light">
              Editorial Team
            </p>
          </div>
        </div>
        <p className="text-[13px] text-ink/55 leading-[2.2] tracking-wide mb-5">
          この記事はTOTONOE編集部が執筆しました。
        </p>
        <p className="font-[var(--font-zen-old-mincho)] text-[14px] text-ink/70 leading-[2] tracking-wide mb-5">
          TOTONOEは、
          <br />
          「人生変えたいなら、まずトイレを磨け。」
          <br />
          をテーマに、空間・心・習慣を整えるための
          <br className="sm:hidden" />
          読みものを発信しています。
        </p>
        <p className="text-[13px] text-ink/45 leading-[2] tracking-wide">
          掃除を単なる家事ではなく、
          <br className="sm:hidden" />
          人生を整える小さな習慣として届けています。
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link
            href="/note"
            className="rounded-full border border-border bg-white px-4 py-2 text-[11px] font-semibold text-ink/60 tracking-wide hover:border-gold-dark/40 hover:text-ink transition-all duration-300"
          >
            整えノートを見る
          </Link>
          <Link
            href="/stories"
            className="rounded-full border border-border bg-white px-4 py-2 text-[11px] font-semibold text-ink/60 tracking-wide hover:border-gold-dark/40 hover:text-ink transition-all duration-300"
          >
            体験談を読む
          </Link>
        </div>
      </div>
    </aside>
  );
}
