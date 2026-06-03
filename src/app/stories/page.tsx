import { getBlogList, type Blog } from "@/lib/microcms";
import type { Metadata } from "next";
import StoriesPageClient from "./StoriesPageClient";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";

const SITE_URL = "https://totonoe-life.jp";

export const metadata: Metadata = {
  title: "整えの記録 | 体験談",
  description:
    "トイレ掃除を続けた人たちの、小さな変化の記録。朝が楽になった、部屋を片付けられた、気持ちが軽くなった。人生が少しずつ整い始めた体験談を集めました。",
  openGraph: {
    title: "整えの記録 | 体験談",
    description:
      "トイレ掃除を続けた人たちの、小さな変化の記録。人生が少しずつ整い始めた体験談。",
    url: `${SITE_URL}/stories`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/stories`,
  },
};

export default async function StoriesPage() {
  let stories: Blog[] = [];

  try {
    const data = await getBlogList({ limit: 50 });
    stories = data.contents.filter(
      (b) => b.category && b.category.includes("体験談")
    );
  } catch (e) {
    console.error("microCMS fetch error:", e);
  }

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "TOP", url: SITE_URL },
          { name: "整えの記録", url: `${SITE_URL}/stories` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "整えの記録 | 体験談",
          description:
            "トイレ掃除を続けた人たちの、小さな変化の記録。人生が少しずつ整い始めた体験談を集めました。",
          url: `${SITE_URL}/stories`,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: stories.length,
            itemListElement: stories.slice(0, 10).map((blog, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${SITE_URL}/note/${blog.slug}`,
              name: blog.title,
            })),
          },
        }}
      />
      <StoriesPageClient stories={stories} />
    </>
  );
}
