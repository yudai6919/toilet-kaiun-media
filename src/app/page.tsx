import type { Metadata } from "next";
import { getBlogList, getBlogsByCategory, CATEGORIES, type Blog } from "@/lib/microcms";
import { SITE_URL } from "@/lib/constants";
import HomeClient from "./HomeClient";

export const revalidate = 60;

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
};

export default async function Home() {
  let latestBlogs: Blog[] = [];
  let storyBlogs: Blog[] = [];

  type CategorySection = {
    slug: string;
    ja: string;
    en: string;
    blogs: Blog[];
  };

  const categorySections: CategorySection[] = [];

  const targetCategories = CATEGORIES.filter((c) => c.slug !== "stories");

  try {
    const [latestData, ...categoryResults] = await Promise.all([
      getBlogList({ limit: 50 }),
      ...targetCategories.map((cat) => getBlogsByCategory(cat.ja, { limit: 6 })),
    ]);

    latestBlogs = latestData.contents;
    storyBlogs = latestData.contents.filter(
      (b) => b.category && b.category.includes("体験談")
    );

    targetCategories.forEach((cat, i) => {
      categorySections.push({
        slug: cat.slug,
        ja: cat.ja,
        en: cat.en,
        blogs: categoryResults[i]?.contents ?? [],
      });
    });
  } catch {
    targetCategories.forEach((cat) => {
      categorySections.push({ slug: cat.slug, ja: cat.ja, en: cat.en, blogs: [] });
    });
  }

  return (
    <HomeClient
      latestBlogs={latestBlogs}
      storyBlogs={storyBlogs}
      categorySections={categorySections}
    />
  );
}
