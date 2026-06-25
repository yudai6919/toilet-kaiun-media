import type { Metadata } from "next";
import { searchBlogs, getBlogList, type Blog } from "@/lib/microcms";
import SearchPageClient from "./SearchPageClient";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "検索",
  description: "TOTONOEの記事を検索。トイレ掃除・開運・習慣化に関する記事を探せます。",
  openGraph: {
    type: "website",
    title: "検索 | TOTONOE",
    description: "TOTONOEの記事を検索。トイレ掃除・開運・習慣化に関する記事を探せます。",
    url: `${SITE_URL}/search`,
    siteName: "TOTONOE | 整え。",
    locale: "ja_JP",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "検索 - TOTONOE" }],
  },
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${SITE_URL}/search`,
  },
};

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const keyword = q?.trim() ?? "";

  let results: Blog[] = [];
  let totalCount = 0;

  if (keyword) {
    try {
      const data = await searchBlogs(keyword, { limit: 50 });
      results = data.contents;
      totalCount = data.totalCount;
    } catch {
      // fallback
    }
  }

  let popularBlogs: Blog[] = [];
  try {
    const data = await getBlogList({ limit: 6 });
    popularBlogs = data.contents;
  } catch {
    // fallback
  }

  return (
    <SearchPageClient
      keyword={keyword}
      results={results}
      totalCount={totalCount}
      popularBlogs={popularBlogs}
    />
  );
}
