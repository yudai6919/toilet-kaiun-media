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
    url: "https://totonoe-life.jp",
    description:
      "トイレ掃除を、人生を整える習慣へ。たった1分の積み重ねが心と運を整える。開運・習慣化・丁寧な暮らしのためのメディアサイト。",
    publisher: {
      "@type": "Organization",
      name: "TOTONOE",
      url: "https://totonoe-life.jp",
      logo: {
        "@type": "ImageObject",
        url: "https://totonoe-life.jp/icon-512.png",
      },
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
    "@type": "Article",
    headline: title,
    description,
    url: `https://totonoe-life.jp/note/${slug}`,
    datePublished: publishedAt,
    dateModified: updatedAt ?? publishedAt,
    author: {
      "@type": "Organization",
      name: "TOTONOE",
      url: "https://totonoe-life.jp",
    },
    publisher: {
      "@type": "Organization",
      name: "TOTONOE",
      logo: {
        "@type": "ImageObject",
        url: "https://totonoe-life.jp/icon-512.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://totonoe-life.jp/note/${slug}`,
    },
    articleSection: category,
    ...(imageUrl && {
      image: {
        "@type": "ImageObject",
        url: imageUrl,
      },
    }),
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
