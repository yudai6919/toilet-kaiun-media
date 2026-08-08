import { getBlogBySlug, getBlogList, CATEGORIES } from "@/lib/microcms";
import type { Metadata } from "next";

export const revalidate = 60;
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd, { articleJsonLd, breadcrumbJsonLd } from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleCard from "@/components/ArticleCard";
import EditorProfile from "@/components/EditorProfile";
import PopularPosts from "@/components/PopularPosts";
import VoiceBanner from "@/components/VoiceBanner";
import ArticleSummary from "@/components/ArticleSummary";
import TableOfContents from "@/components/TableOfContents";
import { SITE_URL } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: "記事が見つかりません" };

  const categoryLabel = getCategoryLabel(blog.category);
  const pageUrl = `${SITE_URL}/note/${slug}`;

  return {
    title: blog.title,
    description: blog.description || generateFallbackDescription(blog.title, blog.body),
    openGraph: {
      type: "article",
      locale: "ja_JP",
      title: blog.title,
      description: blog.description || generateFallbackDescription(blog.title, blog.body),
      url: pageUrl,
      siteName: "TOTONOE | 整え。",
      publishedTime: blog.publishedAt,
      modifiedTime: blog.updatedAt,
      section: categoryLabel.ja,
      images: [
        blog.eyecatch
          ? {
              url: blog.eyecatch.url,
              width: blog.eyecatch.width,
              height: blog.eyecatch.height,
              alt: blog.title,
            }
          : {
              url: `${SITE_URL}/og-image.png`,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description || generateFallbackDescription(blog.title, blog.body),
      images: [blog.eyecatch?.url || `${SITE_URL}/og-image.png`],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export async function generateStaticParams() {
  try {
    const slugs: { slug: string }[] = [];
    let offset = 0;
    const limit = 100;
    while (true) {
      const data = await getBlogList({ limit, offset, fields: "slug" });
      slugs.push(...data.contents.map((blog) => ({ slug: blog.slug })));
      if (slugs.length >= data.totalCount) break;
      offset += limit;
    }
    return slugs;
  } catch {
    return [];
  }
}

function generateFallbackDescription(title: string, body: string): string {
  const text = body.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const firstSentence = text.match(/^(.{40,120}?[。！？])/);
  if (firstSentence) return firstSentence[1];
  return text.slice(0, 120) + "…";
}

function getCategoryLabel(category: string[]): { ja: string; en: string; slug: string } {
  if (!category || category.length === 0) return { ja: "", en: "", slug: "" };
  const jaName = category[0];
  const cat = CATEGORIES.find((c) => c.ja === jaName);
  return { ja: jaName, en: cat?.en ?? "", slug: cat?.slug ?? "" };
}

function extractHeadings(html: string): { id: string; text: string }[] {
  const results: { id: string; text: string }[] = [];
  const re = /<h2([^>]*)>(.*?)<\/h2>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const attrs = m[1];
    const text = m[2].replace(/<[^>]+>/g, "");
    const idMatch = attrs.match(/id="([^"]*)"/);
    const id = idMatch ? idMatch[1] : `h2-${results.length}`;
    results.push({ id, text });
  }
  return results;
}

function ensureHeadingIds(html: string): string {
  let count = 0;
  return html.replace(/<h2([^>]*)>/gi, (match, attrs) => {
    if (/id="/.test(attrs)) return match;
    return `<h2${attrs} id="h2-${count++}">`;
  });
}

function extractFaqs(html: string): { question: string; answer: string }[] {
  const faqSectionMatch = html.match(/<h2[^>]*>.*?よくある質問.*?<\/h2>([\s\S]*?)(?=<h2[\s>]|$)/i);
  if (!faqSectionMatch) return [];
  const section = faqSectionMatch[1];
  const faqs: { question: string; answer: string }[] = [];
  const re = /<h3[^>]*>(.*?)<\/h3>([\s\S]*?)(?=<h3[\s>]|$)/gi;
  let m;
  while ((m = re.exec(section)) !== null) {
    const question = m[1].replace(/<[^>]+>/g, "").trim();
    const answerHtml = m[2];
    const answer = answerHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (question && answer) faqs.push({ question, answer });
  }
  return faqs;
}

function splitIntroAndBody(html: string): { intro: string; body: string } {
  const firstH2 = html.search(/<h2[\s>]/i);
  if (firstH2 === -1) return { intro: "", body: html };
  return { intro: html.slice(0, firstH2), body: html.slice(firstH2) };
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

  const faqs = extractFaqs(blog.body);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "TOP", url: SITE_URL },
          { name: "整えノート", url: `${SITE_URL}/note` },
          ...(categoryLabel.slug
            ? [{ name: categoryLabel.ja, url: `${SITE_URL}/category/${categoryLabel.slug}` }]
            : []),
          { name: blog.title, url: `${SITE_URL}/note/${blog.slug}` },
        ])}
      />
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
      {faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }}
        />
      )}
      {/* Hero / Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-6 bg-cream-warm">
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
                className="text-gold-dark text-[10px] font-semibold tracking-[0.2em] uppercase hover:text-ink transition-colors"
              >
                {categoryLabel.ja}
              </Link>
            ) : (
              <span className="text-gold-dark text-[10px] font-semibold tracking-[0.2em] uppercase">
                {categoryLabel.ja}
              </span>
            )}
            <span className="text-ink/15 text-[10px]">|</span>
            <time dateTime={blog.publishedAt} className="text-[11px] text-ink/30 tracking-wide">
              {formatDate(blog.publishedAt)}
            </time>
          </div>

          <h1 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.5] tracking-[0.03em] text-ink mb-6">
            {blog.title}
          </h1>

          {blog.description && (
            <p className="text-sm md:text-base text-ink/45 leading-[2] tracking-wide">
              {blog.description}
            </p>
          )}
        </div>
      </section>

      {/* Eyecatch */}
      {blog.eyecatch && (
        <div className="px-6 bg-cream-warm pb-12 md:pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-sm bg-cream-warm">
              <Image
                src={blog.eyecatch.url}
                alt={blog.title}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 896px, (min-width: 768px) 720px, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Article Body */}
      <article className="py-12 md:py-20 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          {(() => {
            const processedBody = ensureHeadingIds(blog.body);
            const headings = extractHeadings(processedBody);
            const { intro, body } = splitIntroAndBody(processedBody);
            return (
              <>
                {intro && (
                  <div
                    className="article-body mb-8 md:mb-10"
                    dangerouslySetInnerHTML={{ __html: intro }}
                  />
                )}
                <ArticleSummary headings={headings} />
                <TableOfContents headings={headings} />
                <div
                  className="article-body"
                  dangerouslySetInnerHTML={{ __html: body }}
                />
              </>
            );
          })()}

          {/* Editor Profile (E-E-A-T) */}
          <EditorProfile />
        </div>
      </article>

      {/* Popular Posts */}
      <PopularPosts excludeSlug={slug} bg="white" />

      {/* Related Articles — Card Style */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 md:py-24 px-6 bg-cream-warm" aria-label="関連記事">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-gold-dark/30" />
              <p className="text-gold-dark/60 text-[10px] font-semibold tracking-[0.3em] uppercase">
                Related
              </p>
            </div>
            <h2 className="font-[var(--font-zen-old-mincho)] text-xl md:text-2xl font-bold text-ink mb-8 tracking-[0.03em]">
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
        <section className="py-10 md:py-14 px-6 bg-cream-warm border-t border-border/50">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href={`/category/${categoryLabel.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-mid/25 bg-white/60 backdrop-blur-sm px-9 py-4 text-sm font-semibold text-ink/80 transition-all duration-300 hover:bg-ink hover:text-cream hover:border-transparent hover:-translate-y-0.5"
            >
              「{categoryLabel.ja}」の記事をもっと見る <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      )}

      {/* Voice Banner */}
      <VoiceBanner bg="white" />

      {/* Back to list */}
      <section className="py-12 md:py-16 px-6 bg-cream-warm">
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/note"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-mid/25 bg-white/60 backdrop-blur-sm px-9 py-4 text-sm font-semibold text-ink/80 transition-all duration-300 hover:bg-ink hover:text-cream hover:border-transparent hover:-translate-y-0.5"
          >
            <span aria-hidden="true">&larr;</span> 整えノートに戻る
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold mb-5 leading-[1.5] tracking-[0.04em] text-ink">
            人生を変えるきっかけは、
            <br />
            いつも小さな行動から。
          </h2>
          <p className="text-ink/45 text-sm md:text-base leading-relaxed tracking-wide mb-10">
            TOTONOEは、トイレ掃除を
            <br className="sm:hidden" />
            毎日の整える習慣に変えるための
            <br className="sm:hidden" />
            サービスです。
          </p>
          <Link
            href="/#app"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-mid px-10 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-gold-dark hover:-translate-y-0.5"
          >
            今日から整える <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </section>
    </>
  );
}
