"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="pt-32 pb-24 px-6 text-center">
      <div className="max-w-md mx-auto">
        <p className="text-gold-mid text-xs tracking-[0.3em] mb-4">ERROR</p>
        <h1 className="text-2xl font-bold mb-4 text-ink">
          エラーが発生しました
        </h1>
        <p className="text-ink/60 text-sm leading-relaxed mb-8">
          申し訳ございません。ページの読み込み中にエラーが発生しました。
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="rounded-full bg-gold-mid px-8 py-3 text-sm font-semibold text-white hover:bg-gold-dark transition-colors"
          >
            もう一度試す
          </button>
          <Link
            href="/"
            className="rounded-full border border-gold-mid/25 px-8 py-3 text-sm font-semibold text-ink/80 hover:bg-ink hover:text-white transition-colors"
          >
            トップに戻る
          </Link>
        </div>
      </div>
    </section>
  );
}
