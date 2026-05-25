import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSImage, MicroCMSDate } from "microcms-js-sdk";

// ──────────────────────────────────────────────
// Client
// ──────────────────────────────────────────────

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────

export type Blog = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  eyecatch?: MicroCMSImage;
  body: string;
  publishedAt: string;
} & MicroCMSDate;

export type BlogListResponse = {
  contents: Blog[];
  totalCount: number;
  offset: number;
  limit: number;
};

// ──────────────────────────────────────────────
// Categories
// ──────────────────────────────────────────────

export const CATEGORIES = [
  { slug: "habit", ja: "整える習慣", en: "DAILY RESET" },
  { slug: "kaiun", ja: "トイレ掃除 × 開運", en: "FLOW & CLEAN" },
  { slug: "mind", ja: "心を整える", en: "INNER RESET" },
  { slug: "stories", ja: "体験談", en: "STORIES" },
  { slug: "life", ja: "丁寧な暮らし", en: "QUIET LIFE" },
] as const;

// ──────────────────────────────────────────────
// API Functions
// ──────────────────────────────────────────────

/** Fetch blog list */
export async function getBlogList(queries?: MicroCMSQueries): Promise<BlogListResponse> {
  return await client.get<BlogListResponse>({
    endpoint: "blogs",
    queries: {
      orders: "-publishedAt",
      ...queries,
    },
  });
}

/** Fetch single blog by slug */
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const data = await client.get<BlogListResponse>({
    endpoint: "blogs",
    queries: {
      filters: `slug[equals]${slug}`,
      limit: 1,
    },
  });

  return data.contents[0] ?? null;
}

/** Fetch blogs filtered by category */
export async function getBlogsByCategory(
  category: string,
  queries?: MicroCMSQueries
): Promise<BlogListResponse> {
  return await client.get<BlogListResponse>({
    endpoint: "blogs",
    queries: {
      filters: `category[equals]${category}`,
      orders: "-publishedAt",
      ...queries,
    },
  });
}
