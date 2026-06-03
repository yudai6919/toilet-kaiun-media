import Link from "next/link";
import { popularPosts } from "@/lib/popularPosts";

type Props = {
  title?: string;
  excludeSlug?: string;
  bg?: "white" | "cream";
};

export default function PopularPosts({
  title = "まず読んでほしい記事",
  excludeSlug,
  bg = "white",
}: Props) {
  const posts = excludeSlug
    ? popularPosts.filter((p) => p.slug !== excludeSlug).slice(0, 5)
    : popularPosts;

  if (posts.length === 0) return null;

  const bgClass = bg === "white" ? "bg-white" : "bg-[#FAF7F2]";

  return (
    <section className={`py-20 md:py-28 px-6 ${bgClass}`} aria-label={title}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-5 font-light">
            Popular
          </p>
          <h2 className="font-[var(--font-zen-old-mincho)] text-xl md:text-2xl font-bold leading-[1.6] tracking-[0.04em] text-[#2C2C2C]">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/note/${post.slug}`}
              aria-label={`${post.title}を読む`}
              className={`group block h-full ${post.rank === 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <article
                className={`rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 h-full flex flex-col ${
                  post.rank === 1
                    ? "bg-[#2C2C2C] border-[#2C2C2C] text-white"
                    : "bg-[#FAF7F2] border-[#E8DDC8]/40"
                }`}
              >
                <div className="px-6 py-6 md:px-7 md:py-7 flex flex-col flex-1">
                  {/* Rank */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`font-[var(--font-zen-old-mincho)] text-2xl font-light ${
                        post.rank === 1 ? "text-[#C8A96B]" : "text-[#C8A96B]/30"
                      }`}
                    >
                      {String(post.rank).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${
                        post.rank === 1 ? "text-[#C8A96B]/70" : "text-[#C8A96B]"
                      }`}
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-[var(--font-zen-old-mincho)] text-[15px] md:text-base font-bold leading-[1.7] tracking-[0.02em] mb-3 flex-1 transition-colors duration-300 ${
                      post.rank === 1
                        ? "text-white group-hover:text-[#C8A96B]"
                        : "text-[#2C2C2C] group-hover:text-[#C8A96B]"
                    }`}
                  >
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-[12px] leading-[1.8] tracking-wide line-clamp-2 mb-4 ${
                      post.rank === 1 ? "text-white/40" : "text-[#2C2C2C]/35"
                    }`}
                  >
                    {post.description}
                  </p>

                  {/* Read link */}
                  <span
                    className={`text-[12px] font-semibold transition-colors duration-300 ${
                      post.rank === 1
                        ? "text-[#C8A96B]/50 group-hover:text-[#C8A96B]"
                        : "text-[#C8A96B]/50 group-hover:text-[#C8A96B]"
                    }`}
                  >
                    読む &rarr;
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
