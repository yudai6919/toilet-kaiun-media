import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "習慣化",
  description:
    "トイレ掃除を21日間で習慣にするための科学的アプローチと実践的なテクニック。",
};

export default function HabitPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-xs tracking-[0.3em] mb-4 text-center">
            HABIT
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 leading-tight">
            続く仕組みをつくる
          </h1>
          <p className="text-warm-gray text-center text-lg leading-relaxed mb-16">
            意志の力に頼らない。
            <br />
            科学に基づいた習慣化メソッド。
          </p>

          <div className="space-y-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                なぜ習慣は続かないのか
              </h2>
              <p className="text-warm-gray leading-loose">
                多くの人が掃除を「やらなきゃ」と思いながらも続けられません。その原因は意志の弱さではなく、仕組みの欠如にあります。人間の脳は、新しい行動を起こすたびにエネルギーを消費します。毎回「やるかやらないか」を判断していては、いつか必ず電池切れを起こします。
              </p>
              <p className="text-warm-gray leading-loose mt-4">
                習慣化とは、その判断コストをゼロにすること。歯磨きのように「考えなくてもやる」状態を目指します。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">
                21日間プログラム
              </h2>
              <div className="space-y-6">
                {[
                  {
                    week: "Week 1（1〜7日目）",
                    title: "とにかく触れる",
                    items: [
                      "1日1回、トイレに入ったらシートを1枚手に取る",
                      "便座だけ拭く（20秒で終わってOK）",
                      "完了したらアプリに記録する",
                    ],
                  },
                  {
                    week: "Week 2（8〜14日目）",
                    title: "範囲を広げる",
                    items: [
                      "便座＋フチまで拭く（40秒）",
                      "時間を固定する（朝 or 帰宅後）",
                      "連続記録を意識し始める",
                    ],
                  },
                  {
                    week: "Week 3（15〜21日目）",
                    title: "定着させる",
                    items: [
                      "便座＋フチ＋床（1分）",
                      "トリガー（きっかけ）が自然に発動する",
                      "やらないと違和感を感じ始める",
                    ],
                  },
                ].map((phase) => (
                  <div
                    key={phase.week}
                    className="bg-white rounded-2xl p-8 shadow-sm"
                  >
                    <p className="text-gold text-xs font-semibold mb-2">
                      {phase.week}
                    </p>
                    <h3 className="text-lg font-bold mb-4">{phase.title}</h3>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-warm-gray text-sm"
                        >
                          <span className="text-gold mt-0.5">&#9679;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">
                習慣化の4つの法則
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "明確にする",
                    desc: "「いつ」「どこで」「何を」するかを明文化する。曖昧さが最大の敵。",
                  },
                  {
                    title: "魅力的にする",
                    desc: "掃除後の清潔感、記録が伸びる達成感。ご褒美を可視化する。",
                  },
                  {
                    title: "簡単にする",
                    desc: "1分だけ。道具はトイレ内に常備。始めるハードルを極限まで下げる。",
                  },
                  {
                    title: "満足できるものにする",
                    desc: "アプリに記録し、連続日数を見る。小さな達成の積み重ねが快感になる。",
                  },
                ].map((law) => (
                  <div
                    key={law.title}
                    className="bg-gold-pale rounded-2xl p-6"
                  >
                    <h3 className="font-bold mb-2">{law.title}</h3>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      {law.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-charcoal text-cream rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-6">
                アプリで習慣を可視化する
              </h2>
              <p className="text-cream-dark/70 leading-loose mb-6">
                「TOTONOE」アプリは、トイレ掃除の習慣化に特化した記録アプリです。ワンタップで記録、カレンダーで振り返り、バッジで達成感。21日チャレンジモードで、あなたの習慣化を全力でサポートします。
              </p>
              <CtaButton
                href="/app"
                className="bg-gold text-charcoal hover:bg-gold-light"
              >
                アプリの詳細を見る
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
