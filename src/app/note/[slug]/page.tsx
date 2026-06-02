import { getBlogBySlug, getBlogList, CATEGORIES } from "@/lib/microcms";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd, { articleJsonLd, breadcrumbJsonLd } from "@/components/JsonLd";

const SITE_URL = "https://totonoe-life.jp";

// ──────────────────────────────────────────────
// Dynamic metadata
// ──────────────────────────────────────────────

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: "記事が見つかりません" };

  const categoryLabel = getCategoryLabel(blog.category);
  const pageUrl = `${SITE_URL}/note/${slug}`;

  return {
    title: blog.title,
    description: blog.description || `${blog.title} - TOTONOEの整えノート`,
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.description || `${blog.title} - TOTONOEの整えノート`,
      url: pageUrl,
      siteName: "TOTONOE | 整え。",
      publishedTime: blog.publishedAt,
      section: categoryLabel.ja,
      ...(blog.eyecatch && {
        images: [
          {
            url: blog.eyecatch.url,
            width: blog.eyecatch.width,
            height: blog.eyecatch.height,
            alt: blog.title,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description || `${blog.title} - TOTONOEの整えノート`,
      ...(blog.eyecatch && { images: [blog.eyecatch.url] }),
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

// ──────────────────────────────────────────────
// Static params (optional pre-render)
// ──────────────────────────────────────────────

export async function generateStaticParams() {
  try {
    const data = await getBlogList({ limit: 100, fields: "slug" });
    return data.contents.map((blog) => ({ slug: blog.slug }));
  } catch {
    return [];
  }
}

// ──────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

function getCategoryLabel(category: string[]): { ja: string; en: string } {
  if (!category || category.length === 0) return { ja: "", en: "" };
  const jaName = category[0];
  const cat = CATEGORIES.find((c) => c.ja === jaName);
  return { ja: jaName, en: cat?.en ?? "" };
}

/** Recommended articles map — curated internal link flow */
const RECOMMENDED_SLUGS: Record<string, string[]> = {
  "toilet-cleaning-luck": [
    "successful-people-clean-toilets",
    "daily-toilet-cleaning-habits",
    "toilet-cleaning-results",
  ],
  "successful-people-clean-toilets": [
    "daily-toilet-cleaning-habits",
    "clean-toilet-when-life-not-going-well",
    "toilet-cleaning-luck",
  ],
  "daily-toilet-cleaning-habits": [
    "clean-toilet-when-life-not-going-well",
    "toilet-cleaning-luck",
    "toilet-cleaning-results",
  ],
  "toilet-cleaning-results": [
    "toilet-cleaning-luck",
    "successful-people-clean-toilets",
    "clean-toilet-when-life-not-going-well",
  ],
  "clean-toilet-when-life-not-going-well": [
    "toilet-cleaning-luck",
    "daily-toilet-cleaning-habits",
    "messy-room-messy-mind",
  ],
  "messy-room-messy-mind": [
    "morning-reset-habit",
    "toilet-cleaning-results",
    "clean-toilet-when-life-not-going-well",
    "daily-toilet-cleaning-habits",
  ],
  "morning-reset-habit": [
    "messy-room-messy-mind",
    "wanted-to-feel-lighter",
    "clean-toilet-when-life-not-going-well",
    "daily-toilet-cleaning-habits",
  ],
  "wanted-to-feel-lighter": [
    "tears-while-cleaning-toilet",
    "messy-room-messy-mind",
    "morning-reset-habit",
    "clean-toilet-when-life-not-going-well",
  ],
  "tears-while-cleaning-toilet": [
    "wanted-to-feel-lighter",
    "toilet-cleaning-small-changes",
    "messy-room-messy-mind",
    "morning-reset-habit",
  ],
  "toilet-cleaning-small-changes": [
    "toilet-cleaning-results",
    "wanted-to-feel-lighter",
    "messy-room-messy-mind",
    "morning-reset-habit",
  ],
  "toilet-cleaning-everyday": [
    "daily-toilet-cleaning-habits",
    "toilet-cleaning-small-changes",
    "clean-toilet-when-life-not-going-well",
    "toilet-cleaning-luck",
  ],
  "toilet-cleaning-calm-mind": [
    "tears-while-cleaning-toilet",
    "messy-room-messy-mind",
    "morning-reset-habit",
    "toilet-cleaning-everyday",
  ],
  "bad-luck-reset-habits": [
    "toilet-cleaning-luck",
    "clean-toilet-when-life-not-going-well",
    "messy-room-messy-mind",
    "toilet-cleaning-calm-mind",
  ],
  "clean-toilet-before-room": [
    "messy-room-messy-mind",
    "toilet-cleaning-everyday",
    "daily-toilet-cleaning-habits",
    "toilet-cleaning-calm-mind",
  ],
  "morning-toilet-cleaning-one-month": [
    "morning-reset-habit",
    "toilet-cleaning-small-changes",
    "daily-toilet-cleaning-habits",
    "toilet-cleaning-everyday",
  ],
  "entrance-cleaning-luck": [
    "align-shoes-habit",
    "toilet-cleaning-luck",
    "bad-luck-reset-habits",
    "clean-toilet-before-room",
  ],
  "align-shoes-habit": [
    "entrance-cleaning-luck",
    "clean-toilet-before-room",
    "daily-toilet-cleaning-habits",
    "toilet-cleaning-calm-mind",
  ],
  "reduce-smartphone-time": [
    "tears-while-cleaning-toilet",
    "messy-room-messy-mind",
    "toilet-cleaning-calm-mind",
    "morning-reset-habit",
  ],
};

// ──────────────────────────────────────────────
// Page component
// ──────────────────────────────────────────────

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();

  const categoryLabel = getCategoryLabel(blog.category);

  // Fetch related articles — use curated map, fallback to recent
  let relatedBlogs: typeof blog[] = [];
  try {
    const data = await getBlogList({ limit: 10 });
    const recommendedSlugs = RECOMMENDED_SLUGS[slug];
    if (recommendedSlugs) {
      // Use curated order
      relatedBlogs = recommendedSlugs
        .map((s) => data.contents.find((b) => b.slug === s))
        .filter((b): b is NonNullable<typeof b> => b != null);
    } else {
      // Fallback: show other articles
      relatedBlogs = data.contents
        .filter((b) => b.slug !== slug)
        .slice(0, 4);
    }
  } catch {
    // fallback
  }

  return (
    <>
      {/* JSON-LD Structured Data */}
      <JsonLd
        data={articleJsonLd({
          title: blog.title,
          description: blog.description,
          slug: blog.slug,
          publishedAt: blog.publishedAt,
          updatedAt: blog.updatedAt,
          imageUrl: blog.eyecatch?.url,
          category: categoryLabel.ja,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "TOP", url: SITE_URL },
          { name: "整えノート", url: `${SITE_URL}/note` },
          { name: blog.title, url: `${SITE_URL}/note/${blog.slug}` },
        ])}
      />

      {/* ========== Hero / Header ========== */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-6 bg-[#F8F4EE]">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="パンくずリスト"
            className="flex items-center gap-2 text-[11px] text-[#2B2118]/30 tracking-wide mb-8"
          >
            <Link href="/" className="hover:text-[#B68A3D] transition-colors">
              TOP
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/note" className="hover:text-[#B68A3D] transition-colors">
              整えノート
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#2B2118]/50 truncate max-w-[200px]">
              {blog.title}
            </span>
          </nav>

          {/* Category + Date */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#B68A3D] text-[10px] font-semibold tracking-[0.2em] uppercase">
              {categoryLabel.ja}
            </span>
            <span className="text-[#2B2118]/15 text-[10px]">|</span>
            <time dateTime={blog.publishedAt} className="text-[11px] text-[#2B2118]/30 tracking-wide">
              {formatDate(blog.publishedAt)}
            </time>
          </div>

          {/* Title */}
          <h1 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.5] tracking-[0.03em] text-[#2B2118] mb-6">
            {blog.title}
          </h1>

          {/* Description */}
          {blog.description && (
            <p className="text-sm md:text-base text-[#2B2118]/45 leading-[2] tracking-wide">
              {blog.description}
            </p>
          )}
        </div>
      </section>

      {/* ========== Eyecatch ========== */}
      {blog.eyecatch && (
        <div className="px-6 bg-[#F8F4EE] pb-12 md:pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={blog.eyecatch.url}
                alt={blog.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 896px, (min-width: 768px) 720px, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* ========== Article Body ========== */}
      <article className="py-12 md:py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: blog.body }}
          />
        </div>
      </article>

      {/* ========== Related Articles ========== */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 md:py-24 px-6 bg-[#F8F4EE]" aria-label="関連記事">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-8 h-px bg-[#B68A3D]/30" />
              <p className="text-[#B68A3D]/60 text-[10px] font-semibold tracking-[0.3em] uppercase">
                Related
              </p>
            </div>
            <h2 className="font-[var(--font-zen-old-mincho)] text-xl md:text-2xl font-bold text-[#2B2118] mb-8 tracking-[0.03em]">
              あわせて読みたい
            </h2>
            <div className="space-y-4">
              {relatedBlogs.map((related) => (
                <Link
                  key={related.id}
                  href={`/note/${related.slug}`}
                  aria-label={`${related.title}を読む`}
                  className="group block p-5 md:p-6 rounded-2xl bg-white border border-[#E8DDC8]/50 hover:border-[#B68A3D]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] text-[#B68A3D] font-semibold tracking-[0.15em] uppercase">
                      {getCategoryLabel(related.category).ja}
                    </span>
                  </div>
                  <h3 className="text-[15px] md:text-base font-bold text-[#2B2118] leading-[1.7] group-hover:text-[#B68A3D] transition-colors duration-300 mb-2">
                    {related.title}
                  </h3>
                  {related.description && (
                    <p className="text-[12px] text-[#2B2118]/35 leading-[1.8] tracking-wide line-clamp-2 mb-2">
                      {related.description}
                    </p>
                  )}
                  <span className="text-[12px] font-semibold text-[#B68A3D]/50 group-hover:text-[#B68A3D] transition-colors duration-300">
                    読む &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== Back to list ========== */}
      <section className="py-12 md:py-16 px-6 bg-[#F8F4EE]">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/note"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C49A4A]/25 bg-white/60 backdrop-blur-sm px-9 py-4 text-sm font-semibold text-[#2B2118]/80 transition-all duration-300 hover:bg-[#2B2118] hover:text-cream hover:border-transparent hover:-translate-y-0.5"
          >
            <span>&larr;</span> 整えノートに戻る
          </Link>
        </div>
      </section>

      {/* ========== Final CTA ========== */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold mb-5 leading-[1.5] tracking-[0.04em] text-[#2B2118]">
            人生を変えるきっかけは、
            <br />
            いつも小さな行動から。
          </h2>
          <p className="text-[#2B2118]/45 text-sm md:text-base leading-relaxed tracking-wide mb-10">
            TOTONOEは、トイレ掃除を
            <br className="sm:hidden" />
            毎日の整える習慣に変えるための
            <br className="sm:hidden" />
            サービスです。
          </p>
          <Link
            href="/#habit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C49A4A] px-10 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#B68A3D] hover:-translate-y-0.5"
          >
            今日から整える <span>&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
