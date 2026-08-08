import type { MetadataRoute } from "next";
import { getBlogList, CATEGORIES } from "@/lib/microcms";
import { articles } from "@/lib/articles";
import { SITE_URL } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: "2026-08-09",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/note`,
      lastModified: "2026-08-09",
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/stories`,
      lastModified: "2026-08-09",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/kaiun-toilet`,
      lastModified: "2026-08-09",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/how-to-clean`,
      lastModified: "2026-08-09",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/habit`,
      lastModified: "2026-08-09",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: "2026-08-09",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/voice`,
      lastModified: "2026-08-09",
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/search`,
      lastModified: "2026-08-09",
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/category/${cat.slug}`,
    lastModified: "2026-08-09",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    let offset = 0;
    const limit = 100;
    while (true) {
      const data = await getBlogList({ limit, offset, fields: "slug,updatedAt,publishedAt" });
      blogPages.push(
        ...data.contents.map((blog) => ({
          url: `${SITE_URL}/note/${blog.slug}`,
          lastModified: new Date(blog.updatedAt ?? blog.publishedAt),
          changeFrequency: "weekly" as const,
          priority: 0.8,
        }))
      );
      if (blogPages.length >= data.totalCount) break;
      offset += limit;
    }
  } catch {
    // microCMS未接続時はスキップ
  }

  const articlePages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/articles`,
      lastModified: "2025-05-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...articles.map((a) => ({
      url: `${SITE_URL}/articles/${a.slug}`,
      lastModified: a.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${SITE_URL}/privacy`,
      lastModified: "2025-05-01",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: "2025-05-01",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  return [...staticPages, ...categoryPages, ...blogPages, ...articlePages];
}
