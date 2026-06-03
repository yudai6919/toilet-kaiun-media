import Link from "next/link";

type Props = {
  bg?: "white" | "cream";
};

export default function VoiceBanner({ bg = "cream" }: Props) {
  const bgClass = bg === "white" ? "bg-white" : "bg-[#FAF7F2]";

  return (
    <section className={`py-16 md:py-20 px-6 ${bgClass}`}>
      <div className="max-w-3xl mx-auto">
        <div className="rounded-2xl bg-[#2C2C2C] p-8 md:p-10 text-center">
          <p className="text-[#C8A96B]/50 text-[10px] tracking-[0.5em] uppercase mb-4 font-light">
            Voice
          </p>
          <h3 className="font-[var(--font-zen-old-mincho)] text-lg md:text-xl font-bold text-white leading-[1.6] tracking-[0.04em] mb-3">
            今日の整えを記録しませんか？
          </h3>
          <p className="text-white/35 text-[13px] leading-[2] tracking-wide mb-6">
            小さな一歩を共有する場所があります。
          </p>
          <Link
            href="/voice"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#2C2C2C] tracking-wide transition-all duration-300 hover:bg-[#C8A96B] hover:text-white hover:-translate-y-0.5"
          >
            整えを記録する <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
