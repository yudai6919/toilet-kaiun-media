import { getBlogBySlug, getBlogList, CATEGORIES } from "@/lib/microcms";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd, { articleJsonLd } from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleCard from "@/components/ArticleCard";
import EditorProfile from "@/components/EditorProfile";
import PopularPosts from "@/components/PopularPosts";
import VoiceBanner from "@/components/VoiceBanner";

const SITE_URL = "https://totonoe-life.jp";

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

export async function generateStaticParams() {
  try {
    const data = await getBlogList({ limit: 100, fields: "slug" });
    return data.contents.map((blog) => ({ slug: blog.slug }));
  } catch {
    return [];
  }
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

function getCategoryLabel(category: string[]): { ja: string; en: string; slug: string } {
  if (!category || category.length === 0) return { ja: "", en: "", slug: "" };
  const jaName = category[0];
  const cat = CATEGORIES.find((c) => c.ja === jaName);
  return { ja: jaName, en: cat?.en ?? "", slug: cat?.slug ?? "" };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();

  const categoryLabel = getCategoryLabel(blog.category);

  let relatedBlogs: typeof blog[] = [];
  try {
    const data = await getBlogList({ limit: 50 });
    const allOther = data.contents.filter((b) => b.slug !== slug);

    const sameCat = allOther.filter(
      (b) => b.category && blog.category && b.category.some((c) => blog.category.includes(c))
    );
    const diffCat = allOther.filter(
      (b) => !b.category || !blog.category || !b.category.some((c) => blog.category.includes(c))
    );

    relatedBlogs = [...sameCat.slice(0, 3), ...diffCat.slice(0, 1)].slice(0, 4);

    if (relatedBlogs.length < 3) {
      relatedBlogs = allOther.slice(0, 4);
    }
  } catch {
    // fallback
  }

  return (
    <>
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

      {/* Hero / Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-6 bg-[#F8F4EE]">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            items={[
              { label: "TOP", href: "/" },
              { label: "整えノート", href: "/note" },
              ...(categoryLabel.slug
                ? [{ label: categoryLabel.ja, href: `/category/${categoryLabel.slug}` }]
                : []),
              { label: blog.title, href: `/note/${blog.slug}` },
            ]}
          />

          <div className="flex items-center gap-3 mb-4">
            {categoryLabel.slug ? (
              <Link
                href={`/category/${categoryLabel.slug}`}
                className="text-[#B68A3D] text-[10px] font-semibold tracking-[0.2em] uppercase hover:text-[#2B2118] transition-colors"
              >
                {categoryLabel.ja}
              </Link>
            ) : (
              <span className="text-[#B68A3D] text-[10px] font-semibold tracking-[0.2em] uppercase">
                {categoryLabel.ja}
              </span>
            )}
            <span className="text-[#2B2118]/15 text-[10px]">|</span>
            <time dateTime={blog.publishedAt} className="text-[11px] text-[#2B2118]/30 tracking-wide">
              {formatDate(blog.publishedAt)}
            </time>
          </div>

          <h1 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.5] tracking-[0.03em] text-[#2B2118] mb-6">
            {blog.title}
          </h1>

          {blog.description && (
            <p className="text-sm md:text-base text-[#2B2118]/45 leading-[2] tracking-wide">
              {blog.description}
            </p>
          )}
        </div>
      </section>

      {/* Eyecatch */}
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

      {/* Article Body */}
      <article className="py-12 md:py-20 px-6 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto">
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: blog.body }}
          />

          {/* Editor Profile (E-E-A-T) */}
          <EditorProfile />
        </div>
      </article>

      {/* Popular Posts */}
      <PopularPosts excludeSlug={slug} bg="white" />

      {/* Related Articles — Card Style */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 md:py-24 px-6 bg-[#F8F4EE]" aria-label="関連記事">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#B68A3D]/30" />
              <p className="text-[#B68A3D]/60 text-[10px] font-semibold tracking-[0.3em] uppercase">
                Related
              </p>
            </div>
            <h2 className="font-[var(--font-zen-old-mincho)] text-xl md:text-2xl font-bold text-[#2B2118] mb-8 tracking-[0.03em]">
              あわせて読みたい
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedBlogs.map((related) => (
                <ArticleCard key={related.id} blog={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Link */}
      {categoryLabel.slug && (
        <section className="py-10 md:py-14 px-6 bg-[#F8F4EE] border-t border-[#E8DDC8]/50">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href={`/category/${categoryLabel.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C49A4A]/25 bg-white/60 backdrop-blur-sm px-9 py-4 text-sm font-semibold text-[#2B2118]/80 transition-all duration-300 hover:bg-[#2B2118] hover:text-[#FAF7F2] hover:border-transparent hover:-translate-y-0.5"
            >
              「{categoryLabel.ja}」の記事をもっと見る <span>&rarr;</span>
            </Link>
          </div>
        </section>
      )}

      {/* Voice Banner */}
      <VoiceBanner bg="white" />

      {/* Back to list */}
      <section className="py-12 md:py-16 px-6 bg-[#F8F4EE]">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/note"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C49A4A]/25 bg-white/60 backdrop-blur-sm px-9 py-4 text-sm font-semibold text-[#2B2118]/80 transition-all duration-300 hover:bg-[#2B2118] hover:text-[#FAF7F2] hover:border-transparent hover:-translate-y-0.5"
          >
            <span>&larr;</span> 整えノートに戻る
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 px-6 bg-[#FAF7F2]">
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
            href="/#app"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C49A4A] px-10 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#B68A3D] hover:-translate-y-0.5"
          >
            今日から整える <span>&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
