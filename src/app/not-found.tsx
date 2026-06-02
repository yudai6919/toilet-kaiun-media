import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 bg-white">
      <div className="text-center max-w-md">
        <p className="text-[#C8A96B]/40 text-[10px] tracking-[0.5em] uppercase mb-6 font-light">
          404
        </p>
        <h1 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C] mb-5">
          ページが
          <br />
          見つかりませんでした
        </h1>
        <div className="w-10 h-px bg-[#C8A96B]/30 mx-auto mb-6" />
        <p className="text-sm text-[#2C2C2C]/40 leading-[2] tracking-wide mb-10">
          お探しのページは移動または
          <br className="sm:hidden" />
          削除された可能性があります。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-[#2C2C2C] px-8 py-3.5 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-[#1a1a1a] hover:-translate-y-0.5"
          >
            トップに戻る
          </Link>
          <Link
            href="/note"
            className="rounded-full border border-[#2C2C2C]/15 px-8 py-3.5 text-sm font-semibold text-[#2C2C2C]/60 tracking-wide transition-all duration-300 hover:border-[#C8A96B] hover:text-[#2C2C2C] hover:-translate-y-0.5"
          >
            整えノートを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
