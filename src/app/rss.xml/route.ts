import { getBlogList } from "@/lib/microcms";

const SITE_URL = "https://totonoe-life.jp";
const SITE_TITLE = "TOTONOE | 整え。";
const SITE_DESCRIPTION =
  "トイレ掃除を、人生を整える習慣へ。たった1分の積み重ねが心と運を整える。開運・習慣化・丁寧な暮らしのためのメディアサイト。";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  let items = "";

  try {
    const data = await getBlogList({ limit: 50 });
    items = data.contents
      .map(
        (blog) => `
    <item>
      <title>${escapeXml(blog.title)}</title>
      <link>${SITE_URL}/note/${blog.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/note/${blog.slug}</guid>
      <description>${escapeXml(blog.description || "")}</description>
      <pubDate>${new Date(blog.publishedAt).toUTCString()}</pubDate>
      <category>${escapeXml(blog.category?.[0] || "")}</category>
    </item>`
      )
      .join("\n");
  } catch {
    // microCMS未接続時は空
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>ja</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
