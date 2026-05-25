import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "アプリ紹介",
  description:
    "トイレ掃除を記録・習慣化するアプリ「TOTONOE」の機能紹介。無料でダウンロード。",
};

export default function AppPage() {
  const features = [
    {
      title: "ワンタップ記録",
      desc: "掃除が終わったらボタンをタップするだけ。わずか1秒で記録完了。余計な入力は一切ありません。",
    },
    {
      title: "カレンダー表示",
      desc: "掃除した日がカレンダー上に可視化されます。連続記録が伸びていく様子が一目でわかります。",
    },
    {
      title: "リマインダー",
      desc: "設定した時間に優しく通知。「今日もサッと磨きましょう」の一言が、習慣の定着を後押しします。",
    },
    {
      title: "達成バッジ",
      desc: "3日、7日、21日、100日。継続のマイルストーンごとにバッジを獲得。小さな達成感が次へのモチベーションに。",
    },
    {
      title: "21日チャレンジ",
      desc: "科学に基づいた21日間の習慣化プログラム。日ごとのガイドで、無理なくトイレ掃除を習慣にできます。",
    },
    {
      title: "統計・振り返り",
      desc: "週・月・年単位で掃除の頻度を振り返り。データで自分の成長を実感できます。",
    },
  ];

  return (
    <>
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs tracking-[0.3em] mb-4">APP</p>
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            TOTONOE
          </h1>
          <p className="text-warm-gray text-lg leading-relaxed mb-4">
            トイレ掃除を記録し、習慣にするアプリ。
          </p>
          <p className="text-warm-gray-light text-sm mb-16">
            iOS / Android 対応・無料
          </p>

          <div className="bg-charcoal rounded-3xl p-8 md:p-16 max-w-sm mx-auto mb-20 shadow-2xl">
            <div className="aspect-[9/16] bg-charcoal-light rounded-2xl flex items-center justify-center border border-cream-dark/10">
              <div className="text-center px-6 space-y-6">
                <p className="text-gold text-5xl">&#10022;</p>
                <div>
                  <p className="text-cream text-2xl font-bold mb-1">
                    TOTONOE
                  </p>
                  <p className="text-cream-dark/50 text-xs">
                    TOTONOE
                  </p>
                </div>
                <div className="bg-charcoal rounded-xl p-4 text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-cream-dark/70 text-xs">
                      連続記録
                    </span>
                    <span className="text-gold text-sm font-bold">
                      21日
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cream-dark/70 text-xs">
                      今月の掃除
                    </span>
                    <span className="text-cream text-sm font-bold">
                      14回
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-cream-dark/70 text-xs">
                      獲得バッジ
                    </span>
                    <span className="text-gold text-sm font-bold">5</span>
                  </div>
                </div>
                <div className="bg-gold text-charcoal rounded-full py-3 px-6 text-sm font-bold">
                  今日の掃除を記録
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-xs tracking-[0.3em] mb-4">FEATURES</p>
            <h2 className="text-3xl md:text-4xl font-bold">機能紹介</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-cream rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-bold mb-3">{f.title}</h3>
                <p className="text-warm-gray text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 bg-gold-pale">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            今日から始めよう
          </h2>
          <p className="text-warm-gray text-lg leading-relaxed mb-10">
            ダウンロードは無料。
            <br />
            まずは1日目の記録をつけてみてください。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="inline-block rounded-full px-8 py-4 text-sm font-semibold tracking-wide bg-charcoal text-cream hover:bg-charcoal-light transition-all duration-300 shadow-lg"
            >
              App Store
            </Link>
            <Link
              href="#"
              className="inline-block rounded-full px-8 py-4 text-sm font-semibold tracking-wide bg-charcoal text-cream hover:bg-charcoal-light transition-all duration-300 shadow-lg"
            >
              Google Play
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
