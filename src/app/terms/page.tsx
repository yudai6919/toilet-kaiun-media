import type { Metadata } from "next";

const SITE_URL = "https://totonoe-life.jp";

export const metadata: Metadata = {
  title: "利用規約",
  description: "TOTONOEの利用規約。サービスの利用条件について。",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};

export default function TermsPage() {
  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-10 text-[#2B2118]">
          利用規約
        </h1>

        <div className="space-y-8 text-[#2B2118]/70 text-sm leading-[2]">
          <section>
            <h2 className="text-lg font-bold text-[#2B2118] mb-3">第1条（適用）</h2>
            <p>
              本規約は、当サイト「TOTONOE」（以下「当サイト」）の利用条件を定めるものです。利用者の皆さまには、本規約に従って当サイトをご利用いただきます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2B2118] mb-3">第2条（禁止事項）</h2>
            <p>利用者は、当サイトの利用にあたり、以下の行為をしてはなりません。</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>法令または公序良俗に違反する行為</li>
              <li>当サイトのコンテンツを無断で複製・転載する行為</li>
              <li>当サイトの運営を妨害する行為</li>
              <li>他の利用者または第三者の権利を侵害する行為</li>
              <li>不正アクセスやそれを試みる行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2B2118] mb-3">第3条（コンテンツの知的財産権）</h2>
            <p>
              当サイトに掲載されているテキスト、画像、デザイン等のコンテンツに関する著作権その他の知的財産権は、当サイトまたは正当な権利者に帰属します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2B2118] mb-3">第4条（免責事項）</h2>
            <p>
              当サイトの情報は、可能な限り正確な情報を提供するよう努めておりますが、その正確性や完全性を保証するものではありません。当サイトの情報を利用したことにより生じた損害について、当サイトは一切の責任を負いかねます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2B2118] mb-3">第5条（リンクについて）</h2>
            <p>
              当サイトへのリンクは、原則として自由です。ただし、当サイトの内容を誤解させるような形でのリンクはお断りいたします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#2B2118] mb-3">第6条（規約の変更）</h2>
            <p>
              当サイトは、必要に応じて本規約を変更することがあります。変更後の規約は、当サイトに掲載された時点から効力を生じるものとします。
            </p>
          </section>

          <p className="text-xs text-[#2B2118]/40 pt-4">制定日：2026年1月1日</p>
        </div>
      </div>
    </section>
  );
}
