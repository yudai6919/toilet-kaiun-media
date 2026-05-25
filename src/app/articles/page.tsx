import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "コラム一覧",
  description:
    "トイレ掃除・開運・習慣化に関するコラム記事の一覧。",
};

export default function ArticlesPage() {
  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-gold text-xs tracking-[0.3em] mb-4 text-center">
          ARTICLES
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-16 leading-tight">
          コラム
        </h1>

        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group block bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-gold text-xs font-semibold">
                      {article.category}
                    </span>
                    <span className="text-warm-gray-light text-xs">
                      {article.date}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold group-hover:text-gold transition-colors mb-2">
                    {article.title}
                  </h2>
                  <p className="text-warm-gray text-sm leading-relaxed">
                    {article.description}
                  </p>
                </div>
                <span className="text-warm-gray-light text-sm flex-shrink-0 hidden md:block">
                  &#8594;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
