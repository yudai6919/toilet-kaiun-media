import { getBlogList, CATEGORIES, type Blog } from "@/lib/microcms";
import type { Metadata } from "next";
import NotePageClient from "./NotePageClient";

export const metadata: Metadata = {
  title: "整えノート",
  description:
    "トイレ掃除、習慣、心、暮らし。人生を少しずつ整えるための読みもの。TOTONOEが届ける、小さな気づきと行動のヒント。",
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
    <NotePageClient
      blogs={blogs}
      totalCount={totalCount}
      categories={CATEGORIES as unknown as typeof CATEGORIES}
    />
  );
}
