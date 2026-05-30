import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries, MicroCMSImage, MicroCMSDate } from "microcms-js-sdk";

// ──────────────────────────────────────────────
// Client
// ──────────────────────────────────────────────

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN ?? "";
const apiKey = process.env.MICROCMS_API_KEY ?? "";

if (!serviceDomain || !apiKey) {
  console.warn("⚠ microCMS環境変数が未設定です。記事データは空で表示されます。");
}

export const client =
  serviceDomain && apiKey
    ? createClient({ serviceDomain, apiKey })
    : null;

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────

export type Blog = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string[];
  eyecatch?: MicroCMSImage;
  body: string;
  publishedAt: string;
} & MicroCMSDate;

/** Get the first category's Japanese label */
export function getCategoryJa(category: string[]): string {
  if (!category || category.length === 0) return "";
  const jaName = category[0];
  return jaName;
}

/** Get category slug from Japanese name */
export function getCategorySlug(category: string[]): string {
  if (!category || category.length === 0) return "";
  const jaName = category[0];
  const cat = CATEGORIES.find((c) => c.ja === jaName);
  return cat?.slug ?? "";
}

/** Get category English name from Japanese name */
export function getCategoryEn(category: string[]): string {
  if (!category || category.length === 0) return "";
  const jaName = category[0];
  const cat = CATEGORIES.find((c) => c.ja === jaName);
  return cat?.en ?? "";
}

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

const emptyResponse: BlogListResponse = { contents: [], totalCount: 0, offset: 0, limit: 0 };

/** Fetch blog list */
export async function getBlogList(queries?: MicroCMSQueries): Promise<BlogListResponse> {
  if (!client) return emptyResponse;
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
  if (!client) return null;
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
  if (!client) return emptyResponse;
  return await client.get<BlogListResponse>({
    endpoint: "blogs",
    queries: {
      filters: `category[equals]${category}`,
      orders: "-publishedAt",
      ...queries,
    },
  });
}
