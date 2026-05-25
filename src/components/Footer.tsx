import Link from "next/link";
import { Sparkles, Droplets, CalendarCheck, Smartphone, BookOpen } from "lucide-react";

const contentLinks = [
  { href: "/kaiun-toilet", label: "開運×トイレ掃除", icon: Sparkles },
  { href: "/how-to-clean", label: "掃除のやり方", icon: Droplets },
  { href: "/habit", label: "習慣化", icon: CalendarCheck },
  { href: "/articles", label: "コラム", icon: BookOpen },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream-dark/70 mt-auto">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block">
              <p className="text-2xl font-bold text-cream tracking-wider mb-1">
                TOTONOE
              </p>
              <p className="text-gold text-[10px] tracking-[0.3em]">
                TOILET CLEANING HABIT
              </p>
            </Link>
            <p className="text-sm leading-relaxed mt-5 max-w-xs">
              トイレ掃除を、人生を整える習慣へ。
              <br />
              たった1分の積み重ねが、心と運を整えます。
            </p>

            {/* CTA in footer */}
            <Link
              href="/habit"
              className="inline-flex items-center gap-2 mt-6 rounded-full bg-gold/10 border border-gold/20 px-5 py-2.5 text-xs font-semibold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              今日から整える
              <span>&rarr;</span>
            </Link>
          </div>

          {/* Content links */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold text-cream tracking-[0.15em] uppercase mb-5">
              Contents
            </p>
            <ul className="space-y-3">
              {contentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 text-sm hover:text-cream transition-colors duration-200"
                  >
                    <link.icon
                      className="w-3.5 h-3.5 text-gold/50 group-hover:text-gold transition-colors duration-200"
                      strokeWidth={1.5}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App column */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold text-cream tracking-[0.15em] uppercase mb-5">
              App
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/app"
                  className="group flex items-center gap-3 text-sm hover:text-cream transition-colors duration-200"
                >
                  <Smartphone
                    className="w-3.5 h-3.5 text-gold/50 group-hover:text-gold transition-colors duration-200"
                    strokeWidth={1.5}
                  />
                  アプリ紹介
                </Link>
              </li>
            </ul>

            {/* App badge mockup */}
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 rounded-lg bg-charcoal-light/80 border border-cream-dark/10 px-4 py-2.5">
                <span className="text-gold text-lg">&#10022;</span>
                <div>
                  <p className="text-cream text-xs font-bold leading-none">TOTONOE</p>
                  <p className="text-cream-dark/40 text-[10px] mt-0.5">無料ダウンロード</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream-dark/10 mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-cream-dark/30">
            &copy; 2026 TOTONOE All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-cream-dark/30">
            <Link href="#" className="hover:text-cream-dark/60 transition-colors">
              プライバシーポリシー
            </Link>
            <span className="w-px h-3 bg-cream-dark/15" />
            <Link href="#" className="hover:text-cream-dark/60 transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
