import Link from "next/link";
import Image from "next/image";
import type { Blog } from "@/lib/microcms";

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}

function getDisplayCategory(category: string[]): string {
  if (!category || category.length === 0) return "";
  return category[0];
}

type Props = {
  blog: Blog;
  showImage?: boolean;
};

export default function ArticleCard({ blog, showImage = true }: Props) {
  return (
    <Link
      href={`/note/${blog.slug}`}
      aria-label={`${blog.title}を読む`}
      className="group block h-full"
    >
      <article className="rounded-2xl bg-[#FAF7F2] border border-[#E8DDC8]/40 overflow-hidden transition-all duration-400 hover:shadow-lg hover:-translate-y-0.5 h-full flex flex-col">
        {showImage && (
          blog.eyecatch ? (
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={blog.eyecatch.url}
                alt={blog.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
          ) : (
            <div className="aspect-[16/9] bg-gradient-to-br from-[#F8F4EE] to-[#E8DDC8]/40 flex items-center justify-center">
              <span className="text-[#B68A3D]/20 text-3xl font-light tracking-widest">
                TOTONOE
              </span>
            </div>
          )
        )}

        <div className="px-6 py-5 md:px-7 md:py-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="text-[#B68A3D] text-[10px] font-semibold tracking-[0.2em] uppercase">
              {getDisplayCategory(blog.category)}
            </span>
            <span className="text-[#2B2118]/15 text-[10px]">|</span>
            <time
              dateTime={blog.publishedAt}
              className="text-[11px] text-[#2B2118]/25 tracking-wide"
            >
              {formatDate(blog.publishedAt)}
            </time>
          </div>
          <h3 className="font-[var(--font-zen-old-mincho)] text-[15px] md:text-base font-bold leading-[1.7] tracking-[0.02em] text-[#2B2118] mb-2 group-hover:text-[#B68A3D] transition-colors duration-300 flex-1">
            {blog.title}
          </h3>
          {blog.description && (
            <p className="text-[12px] text-[#2B2118]/35 leading-[1.8] tracking-wide line-clamp-2 mb-3">
              {blog.description}
            </p>
          )}
          <span className="text-[12px] font-semibold text-[#B68A3D]/50 group-hover:text-[#B68A3D] transition-colors duration-300">
            読む &rarr;
          </span>
        </div>
      </article>
    </Link>
  );
}
