import { getBlogList, getBlogsByCategory, CATEGORIES, type Blog } from "@/lib/microcms";
import HomeClient from "./HomeClient";

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

  try {
    const data = await getBlogList({ limit: 50 });
    latestBlogs = data.contents;
    storyBlogs = data.contents.filter(
      (b) => b.category && b.category.includes("体験談")
    );
  } catch {
    // microCMS未接続時はフォールバック
  }

  const targetCategories = CATEGORIES.filter((c) => c.slug !== "stories");
  for (const cat of targetCategories) {
    try {
      const data = await getBlogsByCategory(cat.ja, { limit: 6 });
      categorySections.push({
        slug: cat.slug,
        ja: cat.ja,
        en: cat.en,
        blogs: data.contents,
      });
    } catch {
      categorySections.push({
        slug: cat.slug,
        ja: cat.ja,
        en: cat.en,
        blogs: [],
      });
    }
  }

  return (
    <HomeClient
      latestBlogs={latestBlogs}
      storyBlogs={storyBlogs}
      categorySections={categorySections}
    />
  );
}
