type Heading = { id: string; text: string };

export default function ArticleSummary({ headings }: { headings: Heading[] }) {
  const points = headings.slice(0, 3).map((h) => h.text);

  if (points.length === 0) return null;

  return (
    <div className="bg-white rounded-xl border-l-[3px] border-gold-mid px-6 py-6 md:px-8 md:py-7 mb-8 md:mb-10">
      <p className="font-[var(--font-zen-old-mincho)] text-[15px] font-bold text-ink tracking-wide mb-4">
        この記事でわかること
      </p>
      <ul className="space-y-3">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-ink/70 leading-relaxed tracking-wide">
            <span aria-hidden="true" className="text-gold-mid text-[13px] mt-[2px] shrink-0">✓</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
