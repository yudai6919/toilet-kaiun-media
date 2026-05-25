import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "トイレ掃除のやり方",
  description:
    "1分でできるトイレ掃除の手順を、初心者向けにわかりやすく解説します。",
};

export default function HowToCleanPage() {
  const steps = [
    {
      num: "01",
      title: "便座を拭く",
      time: "20秒",
      desc: "トイレクリーナーシートで便座の表と裏をサッと拭きます。毎日触れる場所だからこそ、最も大切なステップです。",
    },
    {
      num: "02",
      title: "便器のフチを拭く",
      time: "20秒",
      desc: "便器の内側のフチ裏をシートで拭きます。汚れが溜まりやすい場所ですが、毎日やれば頑固な汚れになりません。",
    },
    {
      num: "03",
      title: "床をひと拭き",
      time: "20秒",
      desc: "便器の周り、特に根元部分をサッと拭きます。目に見えない飛び散りが臭いの原因になります。",
    },
  ];

  return (
    <>
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-xs tracking-[0.3em] mb-4 text-center">
            HOW TO CLEAN
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 leading-tight">
            トイレ掃除のやり方
          </h1>
          <p className="text-warm-gray text-center text-lg leading-relaxed mb-16">
            たった1分。3ステップで完了する、
            <br />
            毎日のトイレ掃除ルーティン。
          </p>

          <div className="space-y-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-sm"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <span className="text-gold text-3xl font-light">
                      {step.num}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="text-xl font-bold">{step.title}</h2>
                      <span className="text-xs text-warm-gray-light bg-cream-dark/50 rounded-full px-3 py-1">
                        {step.time}
                      </span>
                    </div>
                    <p className="text-warm-gray leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gold-pale rounded-2xl p-8 md:p-10 mt-12">
            <h2 className="text-xl font-bold mb-4">必要なもの</h2>
            <ul className="space-y-3 text-warm-gray">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-0.5">&#9679;</span>
                <span>トイレクリーナーシート（流せるタイプ）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-0.5">&#9679;</span>
                <span>トイレブラシ（週1回のしっかり掃除用）</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-0.5">&#9679;</span>
                <span>トイレ用中性洗剤（週1回のしっかり掃除用）</span>
              </li>
            </ul>
          </div>

          <div className="mt-16 space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                週1回のしっかり掃除
              </h2>
              <p className="text-warm-gray leading-loose mb-6">
                毎日の1分掃除に加えて、週に1回は5分程度のしっかり掃除を行いましょう。これだけで、トイレは常にピカピカの状態を保てます。
              </p>
              <div className="space-y-4">
                {[
                  "洗剤を便器の内側に塗布し、数分置く",
                  "ブラシで便器の内側全体をこする",
                  "タンク上部と手洗い部分を拭く",
                  "壁の低い部分をサッと拭く",
                  "床全体を水拭きする",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-gold text-sm font-semibold mt-0.5">
                      {i + 1}.
                    </span>
                    <p className="text-warm-gray">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">掃除のコツ</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "完璧を目指さない",
                    desc: "毎日の掃除は「サッと」で十分。完璧を求めると続かなくなります。",
                  },
                  {
                    title: "同じ時間にやる",
                    desc: "朝一番、または帰宅直後など、決まったタイミングに紐づけましょう。",
                  },
                  {
                    title: "道具を手の届く場所に",
                    desc: "シートはトイレ内に常備。手を伸ばせばすぐ始められる状態に。",
                  },
                  {
                    title: "記録する",
                    desc: "アプリやカレンダーに記録。連続記録が途切れたくない心理が味方になります。",
                  },
                ].map((tip) => (
                  <div
                    key={tip.title}
                    className="bg-white rounded-2xl p-6 shadow-sm"
                  >
                    <h3 className="font-bold mb-2">{tip.title}</h3>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      {tip.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <CtaButton href="/habit">習慣化のコツを見る</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
