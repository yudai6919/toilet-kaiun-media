"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Blog } from "@/lib/microcms";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";

type Props = {
  keyword: string;
  results: Blog[];
  totalCount: number;
  popularBlogs: Blog[];
};

export default function SearchPageClient({ keyword, results, totalCount, popularBlogs }: Props) {
  const router = useRouter();
  const [query, setQuery] = useState(keyword);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  }

  return (
    <>
      {/* Hero + Search */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-6 bg-cream-warm">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gold-dark/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">
            Search
          </p>
          <h1 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold leading-[1.5] tracking-[0.04em] text-ink mb-8">
            記事を検索
          </h1>

          <form onSubmit={handleSubmit} className="relative max-w-lg mx-auto">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="キーワードで記事を探す..."
              className="w-full rounded-full border border-border bg-white px-6 py-4 pr-14 text-sm text-ink placeholder-ink/30 outline-none focus:border-gold-mid focus:ring-2 focus:ring-gold-mid/20 transition-all"
              autoFocus
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-ink p-2.5 text-white hover:bg-gold-mid transition-colors"
              aria-label="検索"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 md:py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          {keyword ? (
            <>
              <div className="mb-8 md:mb-12">
                <p className="text-sm text-ink/50 tracking-wide">
                  「<span className="font-bold text-ink/80">{keyword}</span>」の検索結果
                  <span className="ml-2 text-gold-dark">{totalCount}件</span>
                </p>
              </div>

              {results.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                  {results.map((blog) => (
                    <ArticleCard key={blog.id} blog={blog} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-ink/40 text-lg mb-3">
                    該当する記事が見つかりませんでした
                  </p>
                  <p className="text-ink/25 text-sm mb-8">
                    別のキーワードでお試しください
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {["トイレ掃除", "開運", "習慣", "風水", "掃除 コツ"].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => {
                          setQuery(tag);
                          router.push(`/search?q=${encodeURIComponent(tag)}`);
                        }}
                        className="rounded-full border border-border bg-white px-4 py-2 text-xs text-ink/60 hover:border-gold-mid hover:text-gold-mid transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {/* No keyword yet — show suggestions + popular */}
              <div className="text-center mb-10">
                <p className="text-ink/40 text-sm tracking-wide mb-6">
                  人気のキーワード
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["トイレ掃除", "開運", "習慣化", "風水", "金運", "掃除 やり方", "マインドフルネス", "運気"].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => {
                        setQuery(tag);
                        router.push(`/search?q=${encodeURIComponent(tag)}`);
                      }}
                      className="rounded-full border border-border bg-white px-5 py-2.5 text-sm text-ink/60 hover:border-gold-mid hover:text-gold-mid transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {popularBlogs.length > 0 && (
                <div className="mt-12">
                  <h2 className="font-[var(--font-zen-old-mincho)] text-xl font-bold text-ink mb-6 text-center">
                    新着の記事
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {popularBlogs.map((blog) => (
                      <ArticleCard key={blog.id} blog={blog} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Back link */}
          <div className="text-center mt-12">
            <Link
              href="/note"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-mid/25 bg-white/60 px-8 py-3 text-sm font-semibold text-ink/80 hover:bg-ink hover:text-white transition-all"
            >
              <span aria-hidden="true">&larr;</span> 整えノートに戻る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
