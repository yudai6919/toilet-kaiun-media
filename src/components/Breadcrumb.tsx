import Link from "next/link";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";

const SITE_URL = "https://totonoe-life.jp";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: Props) {
  const jsonLdItems = items.map((item) => ({
    name: item.label,
    url: item.href.startsWith("http") ? item.href : `${SITE_URL}${item.href}`,
  }));

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(jsonLdItems)} />
      <nav
        aria-label="パンくずリスト"
        className="flex items-center gap-2 text-[11px] text-[#2B2118]/30 tracking-wide mb-8 flex-wrap"
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <span key={item.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span className="text-[#2B2118]/50 truncate max-w-[200px]">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#B68A3D] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
