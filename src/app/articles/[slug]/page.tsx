import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";
import CtaButton from "@/components/CtaButton";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
  };
}

const articleContent: Record<string, string[]> = {
  "toilet-souji-kaiun-riyu": [
    "「トイレ掃除をすると運気が上がる」——この言い伝えは、日本だけでなく世界中に存在します。インドではラクシュミー（富と幸運の女神）がトイレに宿るとされ、中国の風水でもトイレは財運に直結する場所とされています。",
    "では、なぜこれほど多くの文化圏で、トイレと運が結びつけられてきたのでしょうか。",
    "その答えのひとつは、「最も避けたい場所に向き合う」という行為の心理的な意味にあります。人は本能的に汚い場所を避けます。しかし、その場所をあえて自分の手で清めることは、自分の弱さや怠惰と正面から向き合うことと等しいのです。",
    "成功者たちがトイレ掃除を習慣にしているのは、運を「呼ぶ」ためではなく、運を「受け取れる自分」になるためです。場を整え、心を整え、判断を整える。その積み重ねが、結果として運が良いと感じられる人生を作り出しています。",
    "今日から始めてみてください。たった1分のトイレ掃除が、あなたの毎日を少しずつ変えていきます。",
  ],
  "mainichi-1pun-toilet": [
    "「毎日掃除なんて無理」と思うかもしれません。しかし、実際にやってみると、トイレ掃除は1分で終わります。むしろ、1分以上かかるのは「汚れを溜めた場合」だけです。",
    "毎日の1分ルーティンはシンプルです。トイレクリーナーシートを1枚取り、便座の表と裏を拭き、便器のフチをサッとなぞり、最後に床をひと拭き。これだけです。",
    "大切なのは「完璧にやること」ではなく「毎日触れること」です。完璧主義は習慣化の最大の敵。8割でいい、いや5割でもいい。やったという事実が、次のやる気を生みます。",
    "朝起きてトイレに行ったとき、帰宅してすぐ、お風呂に入る前。自分の生活リズムの中で、最も自然なタイミングを見つけてください。そして、そのタイミングに「トイレ掃除」を紐づけるのです。",
    "これを行動科学では「ハビット・スタッキング」と呼びます。既存の習慣に新しい習慣を重ねることで、定着率が格段に上がります。",
  ],
  "toilet-souji-kokoro": [
    "掃除が心に良いことは、多くの人が感覚的に知っています。散らかった部屋を片付けるとスッキリする。汚れた場所がピカピカになると気分が良い。この「感覚」には、しっかりとした科学的根拠があります。",
    "まず、掃除という反復的な身体動作は、マインドフルネスと同様の効果をもたらすことが研究で示されています。単純な動作に集中することで、脳のデフォルトモードネットワーク（雑念を生み出すネットワーク）の活動が抑制されます。",
    "また、環境心理学の研究では、清潔な環境にいる人は、乱雑な環境にいる人に比べて、より健康的な選択をし、より寛容で、より集中力が高いことが繰り返し報告されています。",
    "トイレ掃除の特殊な点は、「最も汚い場所」を「自分の手で」清めるという行為にあります。これは心理学で言う「自己効力感」を高める強力な体験です。「あの場所を綺麗にできた自分なら、他のこともできる」という感覚が、日常の様々な場面で力を発揮します。",
    "心を整えたいなら、まず手を動かすこと。トイレ掃除は、最も手軽で、最も効果的な心のメンテナンスです。",
  ],
  "keizokuryoku-toilet": [
    "習慣化に必要な日数は、実は「21日」とは限りません。2009年のロンドン大学の研究では、新しい習慣が自動的になるまでに平均66日かかることが示されました。",
    "しかし、この数字に怯える必要はありません。重要なのは「日数」ではなく「仕組み」です。正しい仕組みがあれば、21日目には確かな手応えを感じるはずです。",
    "最も効果的な仕組みは「トリガー × アクション × 報酬」のループを作ることです。トリガーは「朝トイレに入ったら」、アクションは「便座をひと拭き」、報酬は「アプリに記録して連続日数を確認」。このループが回り始めれば、意志の力は不要になります。",
    "もうひとつ大切なのは「ゼロの日を作らない」ことです。体調が悪くても、時間がなくても、便座をシートで1回だけ拭く。その最小限の行動が、習慣の鎖を途切れさせない防波堤になります。",
    "21日間をまず目指してみてください。21日目のあなたは、きっと「もう少し続けてみよう」と思えるはずです。",
  ],
  "seiketsukan-lifestyle": [
    "清潔感のある暮らしに憧れる人は多いでしょう。北欧インテリア、ミニマルな空間、ホテルのような水回り。しかし、清潔感の本質は、見た目の美しさではなく「日々の積み重ね」にあります。",
    "どれだけ素敵な家具を揃えても、トイレが汚れていれば、その家の清潔感は損なわれます。逆に、特別なインテリアがなくても、トイレがピカピカであれば、不思議と家全体に品格が漂います。",
    "トイレは家の中で最もプライベートな空間であり、同時に最も「本質」が出る場所です。来客時だけ慌てて掃除するのではなく、誰も見ていない日常の中で整えること。その姿勢が、暮らし全体の質を決めます。",
    "清潔感のある暮らしは、大掛かりなリフォームや高価な道具がなくても始められます。今日のトイレ掃除が、その第一歩です。",
  ],
  "souji-meiso": [
    "禅の世界では、掃除は座禅と並ぶ重要な修行です。特にトイレ掃除（禅語で「浄頭」）は、最も尊い作務のひとつとされています。",
    "その理由は、掃除が「動く瞑想」としての性質を持つからです。単純な動作を繰り返し、目の前の汚れだけに意識を向ける。これは、呼吸に集中するマインドフルネス瞑想と、本質的に同じ構造を持っています。",
    "現代のマインドフルネス研究でも、掃除のような反復動作が瞑想と同等のリラックス効果をもたらすことが確認されています。重要なのは「ながら掃除」ではなく、掃除そのものに没頭すること。",
    "水の流れる音を聞き、布が表面を滑る感触を感じ、汚れが落ちていく様子を見つめる。五感を使ってトイレ掃除に集中するとき、あなたの心は驚くほど静かになるはずです。",
    "忙しい毎日の中で、たった1分間の「動く瞑想」。トイレ掃除を、心を整える時間として取り入れてみてください。",
  ],
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const content = articleContent[slug] || [article.description];

  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <Link
            href="/articles"
            className="text-sm text-warm-gray-light hover:text-warm-gray transition-colors"
          >
            &#8592; コラム一覧に戻る
          </Link>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gold text-xs font-semibold">
              {article.category}
            </span>
            <span className="text-warm-gray-light text-xs">{article.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {article.title}
          </h1>
        </div>

        <div className="border-t border-cream-dark/50 pt-10 space-y-6">
          {content.map((paragraph, i) => (
            <p key={i} className="text-warm-gray leading-loose">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="border-t border-cream-dark/50 mt-16 pt-12">
          <div className="bg-gold-pale rounded-2xl p-8 text-center">
            <p className="font-bold mb-3">
              今日からトイレ掃除を始めてみませんか？
            </p>
            <p className="text-warm-gray text-sm mb-6">
              アプリで記録すれば、習慣が目に見えて続きます。
            </p>
            <CtaButton href="/app">アプリを見る</CtaButton>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-lg font-bold mb-6">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {articles
              .filter((a) => a.slug !== slug)
              .slice(0, 2)
              .map((a) => (
                <Link
                  key={a.slug}
                  href={`/articles/${a.slug}`}
                  className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="text-gold text-xs font-semibold mb-2">
                    {a.category}
                  </p>
                  <p className="font-bold text-sm group-hover:text-gold transition-colors leading-snug">
                    {a.title}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
