"use client";

import { useState } from "react";

type Heading = { id: string; text: string };

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [open, setOpen] = useState(true);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="目次" className="bg-cream border border-border rounded-xl px-6 py-5 md:px-8 md:py-6 mb-10 md:mb-14">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full text-left"
        aria-expanded={open}
        aria-controls="toc-list"
      >
        <p className="font-[var(--font-zen-old-mincho)] text-[15px] font-bold text-ink tracking-wide">
          目次
        </p>
        <span
          className={`text-gold-dark/60 text-xs transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          ▼
        </span>
      </button>
      <ul
        id="toc-list"
        className={`overflow-hidden transition-all duration-300 ${open ? "mt-4 max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        {headings.map((h, i) => (
          <li key={h.id} className="border-b border-border/60 last:border-b-0">
            <a
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(h.id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                  history.replaceState(null, "", `#${h.id}`);
                }
              }}
              className="flex items-start gap-3 py-3 text-sm text-ink/65 leading-relaxed tracking-wide hover:text-gold-dark transition-colors"
            >
              <span className="text-gold-mid/50 text-xs mt-[3px] shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{h.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
