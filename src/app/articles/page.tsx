import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "コラム一覧｜トイレ掃除・開運・習慣化の読みもの",
  description:
    "トイレ掃除と開運の関係、習慣化のコツ、心を整える方法に関するコラム記事の一覧。TOTONOEが厳選した読みものを通じて、暮らしを少しずつ整えるヒントをお届けします。",
  openGraph: {
    type: "website",
    title: "コラム一覧 | TOTONOE",
    description: "トイレ掃除と開運の関係、習慣化のコツ、心を整える方法に関するコラム記事の一覧。",
    url: `${SITE_URL}/articles`,
    siteName: "TOTONOE | 整え。",
    locale: "ja_JP",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "コラム一覧 - TOTONOE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "コラム一覧 | TOTONOE",
    description: "トイレ掃除と開運の関係、習慣化のコツに関するコラム記事の一覧。",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: `${SITE_URL}/articles`,
  },
};

export default function ArticlesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "TOP", url: SITE_URL },
          { name: "コラム", url: `${SITE_URL}/articles` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "コラム一覧",
          description: "トイレ掃除と開運の関係、習慣化のコツ、心を整える方法に関するコラム記事の一覧。",
          url: `${SITE_URL}/articles`,
          isPartOf: { "@type": "WebSite", name: "TOTONOE | 整え。", url: SITE_URL },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: articles.length,
            itemListElement: articles.map((a, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE_URL}/articles/${a.slug}`,
              name: a.title,
            })),
          },
        }}
      />
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
    </>
  );
}
