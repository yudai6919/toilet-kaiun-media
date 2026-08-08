import { SITE_URL } from "@/lib/constants";

type JsonLdProps = {
  data: Record<string, unknown>;
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Website schema for top page */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TOTONOE | 整え。",
    url: SITE_URL,
    description:
      "トイレ掃除を、人生を整える習慣へ。たった1分の積み重ねが心と運を整える。開運・習慣化・丁寧な暮らしのためのメディアサイト。",
    publisher: {
      "@type": "Organization",
      name: "TOTONOE",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon-512.png`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/note?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Article schema for blog detail pages */
export function articleJsonLd({
  title,
  description,
  slug,
  publishedAt,
  updatedAt,
  imageUrl,
  category,
}: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  updatedAt?: string;
  imageUrl?: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${SITE_URL}/note/${slug}`,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: {
      "@type": "Organization",
      name: "TOTONOE",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "TOTONOE",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon-512.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/note/${slug}`,
    },
    articleSection: category,
    image: {
      "@type": "ImageObject",
      url: imageUrl || `${SITE_URL}/og-image.png`,
      width: 1200,
      height: 630,
    },
  };
}

/** BreadcrumbList schema */
export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
