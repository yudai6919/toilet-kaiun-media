import type { MetadataRoute } from "next";
import { getBlogList } from "@/lib/microcms";

const SITE_URL = "https://totonoe-life.jp";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/note`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/voices`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/stories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/kaiun-toilet`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/how-to-clean`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/habit`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Dynamic blog pages
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const data = await getBlogList({ limit: 100 });
    blogPages = data.contents.map((blog) => ({
      url: `${SITE_URL}/note/${blog.slug}`,
      lastModified: new Date(blog.updatedAt ?? blog.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch {
    // microCMS未接続時はスキップ
  }

  return [...staticPages, ...blogPages];
}
