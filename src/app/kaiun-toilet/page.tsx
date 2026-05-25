import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "開運×トイレ掃除",
  description:
    "なぜトイレ掃除が運気を上げるのか。古来の知恵と現代の視点から紐解きます。",
};

export default function KaiunToiletPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-xs tracking-[0.3em] mb-4 text-center">
            KAIUN × TOILET
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 leading-tight">
            開運×トイレ掃除
          </h1>
          <p className="text-warm-gray text-center text-lg leading-relaxed mb-16">
            なぜ、多くの成功者がトイレ掃除を大切にするのか。
            <br />
            その本質に迫ります。
          </p>

          <div className="space-y-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                掃除と開運の歴史
              </h2>
              <p className="text-warm-gray leading-loose">
                日本には古くから「掃除は神事」という考え方があります。神社仏閣では、毎朝の掃除が最も大切な修行のひとつとされてきました。特にトイレは「烏枢沙摩明王（うすさまみょうおう）」が宿る場所として、清潔に保つことが福を呼ぶとされています。
              </p>
              <p className="text-warm-gray leading-loose mt-4">
                これは単なる迷信ではありません。場を清めるという行為は、自分の内面を整えることと深くつながっています。汚れた場所を放置する心理と、それを自ら清める心理は、まったく異なる精神状態を生み出します。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">
                成功者たちの共通点
              </h2>
              <p className="text-warm-gray leading-loose">
                経営者、アスリート、アーティスト。分野を超えて、卓越した成果を出す人々に共通する習慣のひとつが「トイレ掃除」です。彼らは口を揃えて言います。「トイレ掃除を始めてから、物事の流れが変わった」と。
              </p>
              <p className="text-warm-gray leading-loose mt-4">
                その理由は明快です。最も避けたい場所をあえて磨くことで、心の中の「面倒くさい」「やりたくない」という感情と向き合う力が養われます。この力は、仕事や人間関係のあらゆる場面で活きてきます。
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">
                運は「場」が呼ぶ
              </h2>
              <p className="text-warm-gray leading-loose">
                風水の世界では、トイレは家の中で最も「気」が滞りやすい場所とされます。水回りは陰の気が溜まりやすく、放置すると家全体のエネルギーバランスが崩れると考えられています。
              </p>
              <p className="text-warm-gray leading-loose mt-4">
                スピリチュアルな解釈を超えて考えても、清潔な空間が人の気分や行動に良い影響を与えることは科学的にも示されています。整った環境は判断力を高め、ストレスを軽減し、創造性を促進します。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold mb-6">
                まず、1回だけ磨いてみる
              </h2>
              <p className="text-warm-gray leading-loose">
                開運の第一歩は、今日のトイレ掃除です。難しく考える必要はありません。便座をひと拭きする。床を軽く掃く。たったそれだけで、空間は変わり、あなたの気持ちも変わります。
              </p>
              <p className="text-warm-gray leading-loose mt-4">
                「やろうかな」と思った今この瞬間が、流れを変えるチャンスです。
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <CtaButton href="/how-to-clean">掃除のやり方を見る</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
