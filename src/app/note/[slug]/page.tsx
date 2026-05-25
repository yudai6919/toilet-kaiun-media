import { getBlogBySlug, getBlogList, CATEGORIES } from "@/lib/microcms";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// ──────────────────────────────────────────────
// Dynamic metadata
// ──────────────────────────────────────────────

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: "記事が見つかりません" };

  return {
    title: `${blog.title} | 整えノート`,
    description: blog.description || `${blog.title} - TOTONOEの整えノート`,
    openGraph: {
      title: blog.title,
      description: blog.description,
      ...(blog.eyecatch && { images: [{ url: blog.eyecatch.url }] }),
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

function getCategoryLabel(slug: string): { ja: string; en: string } {
  const cat = CATEGORIES.find((c) => c.slug === slug);
  return { ja: cat?.ja ?? slug, en: cat?.en ?? "" };
}

// ──────────────────────────────────────────────
// Page component
// ──────────────────────────────────────────────

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();

  const categoryLabel = getCategoryLabel(blog.category);

  return (
    <>
      {/* ========== Hero / Header ========== */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-6 bg-[#F8F4EE]">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[11px] text-[#2B2118]/30 tracking-wide mb-8">
            <Link href="/" className="hover:text-[#B68A3D] transition-colors">
              TOP
            </Link>
            <span>/</span>
            <Link href="/note" className="hover:text-[#B68A3D] transition-colors">
              整えノート
            </Link>
            <span>/</span>
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
            <time className="text-[11px] text-[#2B2118]/30 tracking-wide">
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
      <section className="py-12 md:py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: blog.body }}
          />
        </div>
      </section>

      {/* ========== Footer Navigation ========== */}
      <section className="py-16 md:py-24 px-6 bg-[#F8F4EE]">
        <div className="max-w-3xl mx-auto">
          {/* Divider */}
          <div className="w-10 h-px bg-[#B68A3D]/30 mx-auto mb-12" />

          {/* Back to list */}
          <div className="text-center">
            <Link
              href="/note"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C49A4A]/25 bg-white/60 backdrop-blur-sm px-9 py-4 text-sm font-semibold text-[#2B2118]/80 transition-all duration-300 hover:bg-[#2B2118] hover:text-cream hover:border-transparent hover:-translate-y-0.5"
            >
              <span>&larr;</span> 整えノートに戻る
            </Link>
          </div>
        </div>
      </section>

      {/* ========== Final CTA ========== */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold mb-5 leading-[1.5] tracking-[0.04em] text-[#2B2118]">
            読むだけで終わらせない。
            <br />
            今日、ひとつ整える。
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
