import { getBlogList, CATEGORIES, type Blog } from "@/lib/microcms";
import type { Metadata } from "next";
import NotePageClient from "./NotePageClient";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";

const SITE_URL = "https://totonoe-life.jp";

export const metadata: Metadata = {
  title: "整えノート | トイレ掃除・開運・習慣化の読みもの",
  description:
    "トイレ掃除、習慣、心、暮らし。人生を少しずつ整えるための読みもの。TOTONOEが届ける、小さな気づきと行動のヒント。",
  openGraph: {
    title: "整えノート | トイレ掃除・開運・習慣化の読みもの",
    description:
      "トイレ掃除、習慣、心、暮らし。人生を少しずつ整えるための読みもの。",
    url: `${SITE_URL}/note`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/note`,
  },
};

export default async function NotePage() {
  let blogs: Blog[] = [];
  let totalCount = 0;

  try {
    const data = await getBlogList({ limit: 50 });
    blogs = data.contents;
    totalCount = data.totalCount;
  } catch (e) {
    // microCMS未接続時はフォールバック（空配列）
    console.error("microCMS fetch error:", e);
  }

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "TOP", url: SITE_URL },
          { name: "整えノート", url: `${SITE_URL}/note` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "整えノート",
          description: "トイレ掃除、習慣、心、暮らし。人生を少しずつ整えるための読みもの。",
          url: `${SITE_URL}/note`,
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
      <NotePageClient
        blogs={blogs}
        totalCount={totalCount}
        categories={CATEGORIES as unknown as typeof CATEGORIES}
      />
    </>
  );
}
