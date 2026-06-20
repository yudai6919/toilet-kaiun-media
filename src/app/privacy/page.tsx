import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "TOTONOEのプライバシーポリシー。個人情報の取り扱いについて。",
  openGraph: {
    type: "website",
    title: "プライバシーポリシー | TOTONOE",
    description: "TOTONOEのプライバシーポリシー。個人情報の取り扱いについて。",
    url: `${SITE_URL}/privacy`,
    siteName: "TOTONOE | 整え。",
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "プライバシーポリシー | TOTONOE",
    description: "TOTONOEのプライバシーポリシー。個人情報の取り扱いについて。",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-10 text-ink">
          プライバシーポリシー
        </h1>

        <div className="space-y-8 text-ink/70 text-sm leading-[2]">
          <section>
            <h2 className="text-lg font-bold text-ink mb-3">1. 個人情報の収集について</h2>
            <p>
              当サイト「TOTONOE」（以下「当サイト」）では、お問い合わせやサービスのご利用にあたり、お名前、メールアドレス等の個人情報をご提供いただく場合がございます。取得した個人情報は、必要な範囲でのみ利用いたします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink mb-3">2. 個人情報の利用目的</h2>
            <p>当サイトでは、取得した個人情報を以下の目的で利用いたします。</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>お問い合わせへの対応</li>
              <li>サービスの提供・改善</li>
              <li>メールマガジン等の配信（ご希望された場合）</li>
              <li>当サイトの利用状況の分析・改善</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink mb-3">3. アクセス解析ツールについて</h2>
            <p>
              当サイトでは、Googleによるアクセス解析ツール「Google Analytics」を利用しています。Google Analyticsはデータの収集にCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
            </p>
            <p className="mt-2">
              この機能はCookieを無効にすることで収集を拒否することが可能です。お使いのブラウザの設定をご確認ください。Google Analyticsの利用規約については、Google Analyticsサービス利用規約をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink mb-3">4. 個人情報の第三者提供</h2>
            <p>
              当サイトでは、法令に基づく場合を除き、取得した個人情報を事前の同意なく第三者に提供することはありません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink mb-3">5. Cookieの使用について</h2>
            <p>
              当サイトでは、ユーザーの利便性向上のためにCookieを使用する場合があります。Cookieの使用を望まない場合は、ブラウザの設定からCookieを無効にすることが可能です。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-ink mb-3">6. プライバシーポリシーの変更</h2>
            <p>
              当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当サイトに掲載された時点から効力を生じるものとします。
            </p>
          </section>

          <p className="text-xs text-ink/40 pt-4">制定日：2026年1月1日</p>
        </div>
      </div>
    </section>
  );
}
