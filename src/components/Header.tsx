"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Sparkles, BookImage, CalendarCheck, Smartphone, MessageCircle, FileText, Heart, Leaf } from "lucide-react";

const navLinks = [
  { href: "/note", label: "整えノート", icon: FileText, desc: "すべての記事を読む" },
  { href: "/stories", label: "体験談", icon: MessageCircle, desc: "変化の記録を読む" },
  { href: "/category/habit", label: "整える習慣", icon: CalendarCheck, desc: "毎日1分の整え習慣" },
  { href: "/category/kaiun", label: "開運", icon: Sparkles, desc: "トイレ掃除×開運" },
  { href: "/category/mind", label: "心を整える", icon: Heart, desc: "掃除は動く瞑想" },
  { href: "/category/life", label: "丁寧な暮らし", icon: Leaf, desc: "暮らし全体を整える" },
];

const mobileNavLinks = [
  { href: "#about", label: "TOTONOEとは", icon: Sparkles, desc: "サービスの紹介" },
  { href: "#manga", label: "漫画で読む", icon: BookImage, desc: "ストーリーで体験する" },
  { href: "/note", label: "整えノート", icon: FileText, desc: "すべての記事を読む" },
  { href: "/stories", label: "体験談", icon: MessageCircle, desc: "変化の記録を読む" },
  { href: "/category/habit", label: "整える習慣", icon: CalendarCheck, desc: "毎日1分の整え習慣" },
  { href: "/category/kaiun", label: "開運", icon: Sparkles, desc: "トイレ掃除×開運" },
  { href: "/category/mind", label: "心を整える", icon: Heart, desc: "掃除は動く瞑想" },
  { href: "/category/life", label: "丁寧な暮らし", icon: Leaf, desc: "暮らし全体を整える" },
  { href: "#app", label: "アプリ", icon: Smartphone, desc: "無料で記録・継続サポート" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-cream-dark/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <Link href="/" className="relative z-[70] flex items-baseline gap-2">
          <span className="text-lg font-bold tracking-wider text-charcoal">TOTONOE</span>
          <span className="text-[10px] text-warm-gray tracking-wide hidden sm:inline">整え。</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-warm-gray hover:text-charcoal transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#app"
            className="rounded-full bg-charcoal text-cream px-5 py-2 text-xs font-semibold hover:bg-charcoal-light transition-colors"
          >
            無料で始める
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative z-[70] flex flex-col gap-1.5 p-2"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        >
          <span className={`block w-5 h-0.5 bg-charcoal transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-charcoal transition-all duration-300 ${open ? "opacity-0 scale-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-charcoal transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      {open && (
        <div
          className="md:hidden fixed left-0 right-0 z-[60] overflow-y-auto"
          style={{ backgroundColor: "#FAF7F2", top: "64px", height: "calc(100vh - 64px)" }}
        >
          <nav className="flex flex-col h-full px-6 pt-8 pb-10">
            <div className="flex-1 space-y-1">
              {mobileNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-200 hover:bg-gold-pale active:bg-gold-pale"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-pale text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-200">
                    <link.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-charcoal">{link.label}</p>
                    <p className="text-xs text-warm-gray mt-0.5">{link.desc}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="space-y-3 pt-6 border-t border-cream-dark/30">
              <Link
                href="#app"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-gold/20"
              >
                無料で始める <span>&rarr;</span>
              </Link>
              <p className="text-center text-[10px] text-warm-gray-light tracking-[0.3em]">TOTONOE</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
