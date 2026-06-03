import { getBlogsByCategory, getBlogList, CATEGORIES, getCategoryBySlug, type Blog } from "@/lib/microcms";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PopularPosts from "@/components/PopularPosts";

const SITE_URL = "https://totonoe-life.jp";

const RECOMMENDED_SLUGS = [
  "clean-toilet-when-life-not-going-well",
  "toilet-cleaning-luck",
  "daily-toilet-cleaning-habits",
];

type CategoryNav = {
  slug: string;
  ja: string;
  href: string;
};

const CATEGORY_NAV: CategoryNav[] = [
  { slug: "habit", ja: "整える習慣", href: "/category/habit" },
  { slug: "mind", ja: "心を整える", href: "/category/mind" },
  { slug: "kaiun", ja: "トイレ掃除 × 開運", href: "/category/kaiun" },
  { slug: "life", ja: "丁寧な暮らし", href: "/category/life" },
  { slug: "stories", ja: "体験談", href: "/stories" },
];

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return CATEGORIES.filter((c) => c.slug !== "stories").map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat || cat.slug === "stories") return { title: "カテゴリが見つかりません" };

  const pageUrl = `${SITE_URL}/category/${slug}`;

  return {
    title: `${cat.ja} | 整えノート - TOTONOE`,
    description: cat.description,
    openGraph: {
      title: `${cat.ja} | 整えノート - TOTONOE`,
      description: cat.description,
      url: pageUrl,
      type: "website",
      siteName: "TOTONOE | 整え。",
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${cat.ja} - TOTONOE`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cat.ja} | 整えノート - TOTONOE`,
      description: cat.description,
      images: [`${SITE_URL}/og-image.png`],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat || cat.slug === "stories") notFound();

  let blogs: Blog[] = [];
  let totalCount = 0;

  try {
    const data = await getBlogsByCategory(cat.ja, { limit: 50 });
    blogs = data.contents;
    totalCount = data.totalCount;
  } catch (e) {
    console.error("microCMS fetch error:", e);
  }

  let recommendedBlogs: Blog[] = [];
  try {
    const data = await getBlogList({ limit: 50 });
    recommendedBlogs = RECOMMENDED_SLUGS
      .map((s) => data.contents.find((b) => b.slug === s))
      .filter((b): b is Blog => b != null);
  } catch {
    // fallback
  }

  return (
    <>
      {/* JSON-LD: CollectionPage */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: cat.ja,
          description: cat.description,
          url: `${SITE_URL}/category/${slug}`,
          isPartOf: {
            "@type": "WebSite",
            name: "TOTONOE | 整え。",
            url: SITE_URL,
          },
          publisher: {
            "@type": "Organization",
            name: "TOTONOE",
            url: SITE_URL,
            logo: {
              "@type": "ImageObject",
              url: `${SITE_URL}/icon-512.png`,
            },
          },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: totalCount,
            itemListElement: blogs.slice(0, 10).map((blog, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE_URL}/note/${blog.slug}`,
              name: blog.title,
            })),
          },
        }}
      />

      {/* ═══════ Hero ═══════ */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-18 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            items={[
              { label: "TOP", href: "/" },
              { label: "整えノート", href: "/note" },
              { label: cat.ja, href: `/category/${slug}` },
            ]}
          />

          <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-6 font-light">
            {cat.en}
          </p>
          <h1 className="font-[var(--font-zen-old-mincho)] text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.4] tracking-[0.04em] text-[#2C2C2C] mb-6">
            {cat.ja}
          </h1>
          <div className="w-10 h-px bg-[#C8A96B]/30 mb-6" />
          <p className="text-sm md:text-base text-[#2C2C2C]/45 leading-[2.2] tracking-wide max-w-lg">
            {cat.description}
          </p>
        </div>
      </section>

      {/* ═══════ Category Navigation ═══════ */}
      <section className="py-5 px-6 bg-white border-t border-[#E8DDC8]/40">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {CATEGORY_NAV.map((c) => (
              <Link
                key={c.slug}
                href={c.href}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                  c.slug === slug
                    ? "bg-[#2C2C2C] text-white shadow-md"
                    : "bg-[#FAF7F2] border border-[#E8DDC8]/60 text-[#2C2C2C]/55 hover:border-[#C8A96B]/40 hover:text-[#2C2C2C]"
                }`}
              >
                {c.ja}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ Article Grid ═══════ */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {blogs.length > 0 ? (
            <>
              <p className="text-[12px] text-[#2C2C2C]/25 tracking-wide mb-10 text-center">
                {totalCount}件の記事
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {blogs.map((blog) => (
                  <ArticleCard key={blog.id} blog={blog} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-24">
              <div className="w-10 h-px bg-[#C8A96B]/20 mx-auto mb-8" />
              <p className="text-[#2C2C2C]/30 text-sm tracking-wide mb-3">
                まだ記事がありません
              </p>
              <p className="text-[#2C2C2C]/20 text-xs tracking-wide">
                このカテゴリの記事は準備中です。
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════ まず読んでほしい記事 ═══════ */}
      {recommendedBlogs.length > 0 && (
        <section className="py-20 md:py-28 px-6 bg-[#FAF7F2]" aria-label="まず読んでほしい記事">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">
                Pick Up
              </p>
              <h2 className="font-[var(--font-zen-old-mincho)] text-xl md:text-2xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C]">
                まず読んでほしい記事
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {recommendedBlogs.map((blog) => (
                <ArticleCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════ Popular Posts ═══════ */}
      <PopularPosts bg="cream" />

      {/* ═══════ Other Categories ═══════ */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">
              Categories
            </p>
            <h2 className="font-[var(--font-zen-old-mincho)] text-xl md:text-2xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C]">
              ほかのカテゴリを読む
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CATEGORY_NAV.filter((c) => c.slug !== slug).map((c) => {
              const catData = getCategoryBySlug(c.slug);
              return (
                <Link
                  key={c.slug}
                  href={c.href}
                  className="group rounded-2xl bg-[#FAF7F2] border border-[#E8DDC8]/40 p-6 hover:border-[#C8A96B]/30 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-sm font-bold text-[#2C2C2C] mb-2 group-hover:text-[#C8A96B] transition-colors duration-300">
                    {c.ja}
                  </h3>
                  {catData && (
                    <p className="text-[11px] text-[#2C2C2C]/35 leading-[1.8] line-clamp-2">
                      {catData.description}
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="py-24 md:py-32 px-6 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold mb-6 leading-[1.6] tracking-[0.04em] text-[#2C2C2C]">
            読むだけで終わらせない。
            <br />
            今日、ひとつ整える。
          </h2>
          <p className="text-[#2C2C2C]/40 text-sm md:text-base leading-[2] tracking-wide mb-12">
            TOTONOEは、トイレ掃除を
            <br className="sm:hidden" />
            毎日の整える習慣に変えるための
            <br className="sm:hidden" />
            メディアです。
          </p>
          <Link
            href="/note"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2C2C2C] px-10 py-4 text-sm font-semibold text-white tracking-wide transition-all duration-300 hover:bg-[#1a1a1a] hover:-translate-y-0.5"
          >
            すべての記事を見る <span>&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
