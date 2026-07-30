import type { Metadata } from "next";
import Link from "next/link";
import CtaButton from "@/components/CtaButton";
import JsonLd, { breadcrumbJsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "トイレ掃除で開運｜運気が上がる理由と効果的なやり方",
  description:
    "トイレ掃除で開運できる理由を風水・烏枢沙摩明王・心理学の視点から徹底解説。金運・健康運・恋愛運別の効果、成功者の実践例、具体的な掃除方法、やってはいけないNG行動まで網羅した完全ガイド。",
  openGraph: {
    type: "article",
    title: "トイレ掃除で開運｜運気が上がる理由と効果的なやり方",
    description:
      "トイレ掃除で開運できる理由を風水・心理学の視点から徹底解説。金運・健康運・恋愛運別の効果、成功者の実践例、具体的な掃除方法まで網羅。",
    url: `${SITE_URL}/kaiun-toilet`,
    siteName: "TOTONOE | 整え。",
    locale: "ja_JP",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "トイレ掃除で開運 - TOTONOE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "トイレ掃除で開運｜運気が上がる理由と効果的なやり方",
    description:
      "トイレ掃除で開運できる理由を風水・心理学の視点から徹底解説。金運・健康運・恋愛運別の効果と具体的なやり方。",
    images: [`${SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: `${SITE_URL}/kaiun-toilet`,
  },
};

const faqs = [
  {
    question: "トイレ掃除で本当に開運できますか？",
    answer:
      "風水では水回りは「気」の流れに直結する場所とされ、清潔に保つことで良い気が循環すると考えられています。また心理学的にも、環境を整える行為が自己効力感を高め、前向きな行動を引き出すことが研究で示されています。直接的に「運」を操作するというより、掃除によって生まれる心の変化が好循環を生むという仕組みです。",
  },
  {
    question: "トイレ掃除はどのくらいの頻度でやるべきですか？",
    answer:
      "毎日1分でも触れることが理想です。便座・便器の内側・床の3箇所を軽く拭くだけでも十分です。週に1回の大掃除より、毎日の軽い掃除を習慣にするほうが、清潔さの維持にも心理的な効果にも優れています。",
  },
  {
    question: "トイレ掃除で金運が上がるのはなぜですか？",
    answer:
      "風水では、トイレは金運と深く関わる「水」の気を持つ場所です。ここが汚れていると金運が流れ出ると考えられています。また、最も面倒な場所を自ら磨く行為は「損して得取れ」の精神に通じ、ビジネスで成功する人の共通マインドセットとも言われています。",
  },
  {
    question: "トイレ掃除と開運の関係は科学的に証明されていますか？",
    answer:
      "「開運」そのものの科学的証明はありませんが、環境心理学の研究では清潔な環境が意思決定力・集中力・ストレス耐性を向上させることが示されています。また、小さな達成感の積み重ねが自己効力感を高めるという心理学的メカニズムは広く認められています。",
  },
  {
    question: "トイレ掃除で開運するためにやってはいけないことは？",
    answer:
      "トイレのフタを開けっぱなしにする、換気をしない、掃除道具を汚れたまま放置する、トイレに不要な物を置きすぎるなどがNG行動です。また、嫌々やると効果が半減するとも言われています。感謝の気持ちで取り組むことが大切です。",
  },
];

export default function KaiunToiletPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "TOP", url: SITE_URL },
          { name: "トイレ掃除で開運", url: `${SITE_URL}/kaiun-toilet` },
        ])}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "トイレ掃除で開運｜運気が上がる理由と効果的なやり方",
          description:
            "トイレ掃除で開運できる理由を風水・烏枢沙摩明王・心理学の視点から徹底解説。",
          url: `${SITE_URL}/kaiun-toilet`,
          datePublished: "2025-06-01",
          dateModified: "2026-07-30",
          author: {
            "@type": "Organization",
            name: "TOTONOE",
            url: SITE_URL,
          },
          publisher: {
            "@type": "Organization",
            name: "TOTONOE",
            url: SITE_URL,
            logo: {
              "@type": "ImageObject",
              url: `${SITE_URL}/icon-512.png`,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_URL}/kaiun-toilet`,
          },
          image: {
            "@type": "ImageObject",
            url: `${SITE_URL}/og-image.png`,
            width: 1200,
            height: 630,
          },
        }}
      />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />

      {/* ═══════ Hero ═══════ */}
      <section className="pt-28 pb-14 md:pt-36 md:pb-20 px-6 bg-cream-warm">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="パンくずリスト" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-charcoal/40">
              <li>
                <Link href="/" className="hover:text-charcoal transition-colors">
                  TOP
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-charcoal/70">トイレ掃除で開運</li>
            </ol>
          </nav>

          <p className="text-gold/50 text-[10px] tracking-[0.5em] uppercase mb-6 font-light">
            KAIUN × TOILET CLEANING
          </p>
          <h1 className="font-[var(--font-zen-old-mincho)] text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.4] tracking-[0.04em] text-charcoal mb-6">
            トイレ掃除で開運｜
            <br className="hidden md:block" />
            運気が上がる理由と
            <br className="hidden md:block" />
            効果的なやり方
          </h1>
          <div className="w-10 h-px bg-gold/30 mb-6" />
          <p className="text-sm md:text-base text-charcoal/50 leading-[2.2] tracking-wide max-w-lg">
            なぜ多くの成功者がトイレ掃除を大切にするのか。風水・烏枢沙摩明王・心理学の3つの視点から「トイレ掃除と開運」の関係を徹底解説します。金運・健康運・恋愛運・仕事運別の効果から、今日から実践できる具体的な方法まで。
          </p>
        </div>
      </section>

      {/* ═══════ 目次 ═══════ */}
      <section className="py-10 px-6 bg-white border-b border-border/40">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-charcoal/40 tracking-wide mb-4">
            この記事の内容
          </p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-charcoal/70">
            <li>
              <a href="#fusui" className="hover:text-gold transition-colors">
                1. 風水から見るトイレ掃除の開運効果
              </a>
            </li>
            <li>
              <a href="#ususama" className="hover:text-gold transition-colors">
                2. 烏枢沙摩明王とトイレの神様
              </a>
            </li>
            <li>
              <a href="#psychology" className="hover:text-gold transition-colors">
                3. 心理学・科学が裏付ける効果
              </a>
            </li>
            <li>
              <a href="#famous" className="hover:text-gold transition-colors">
                4. 成功者たちのトイレ掃除習慣
              </a>
            </li>
            <li>
              <a href="#fortune-types" className="hover:text-gold transition-colors">
                5. 運気別の開運効果
              </a>
            </li>
            <li>
              <a href="#how-to" className="hover:text-gold transition-colors">
                6. 開運につながる掃除のやり方
              </a>
            </li>
            <li>
              <a href="#ng" className="hover:text-gold transition-colors">
                7. やってはいけないNG行動
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-gold transition-colors">
                8. よくある質問
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* ═══════ 本文 ═══════ */}
      <article className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-20">
          {/* Section 1: 風水 */}
          <section id="fusui">
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold mb-8 leading-[1.5] tracking-[0.04em] text-charcoal">
              風水から見るトイレ掃除の開運効果
            </h2>
            <div className="space-y-5 text-charcoal/65 leading-[2] tracking-wide text-[15px]">
              <p>
                風水では、家の中を流れる「気」のバランスが運気を左右すると考えます。中でもトイレは「水」の気が集中する場所であり、家全体のエネルギー循環に大きな影響を与えるとされています。
              </p>
              <p>
                五行思想（木・火・土・金・水）において、水は「財」を象徴します。トイレの水が汚れていれば財の気が濁り、清潔であれば良い財の気が循環する。これが「トイレ掃除で金運が上がる」という風水の基本的な考え方です。
              </p>
              <p>
                また、風水ではトイレは「陰の気」が溜まりやすい場所とされます。陰の気が過剰になると、家全体のエネルギーバランスが崩れ、住む人の健康や人間関係にも悪影響が出ると考えられています。こまめな掃除と換気によって陰の気を払い、良い気を取り込むことが開運の基本です。
              </p>
              <p>
                風水の観点から特に重要なのは、トイレのフタを閉めること、換気を十分にすること、そして明るさを保つことの3点です。これらを日々の掃除と合わせて実践することで、家全体の運気の流れが整います。
              </p>
            </div>
          </section>

          {/* Section 2: 烏枢沙摩明王 */}
          <section id="ususama">
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold mb-8 leading-[1.5] tracking-[0.04em] text-charcoal">
              烏枢沙摩明王 ── トイレの神様と開運の信仰
            </h2>
            <div className="space-y-5 text-charcoal/65 leading-[2] tracking-wide text-[15px]">
              <p>
                日本には古くから「トイレには神様がいる」という信仰があります。その神様が、烏枢沙摩明王（うすさまみょうおう）です。密教における明王のひとりで、「不浄を浄化する力」を持つとされています。
              </p>
              <p>
                烏枢沙摩明王は、あらゆる不浄なものを炎で焼き尽くし、清浄に変える力を持つ仏として信仰されてきました。トイレという最も不浄な場所を守護する存在として、全国各地の寺院でお祀りされています。特に有名なのが、静岡県の可睡斎（かすいさい）で、巨大な烏枢沙摩明王像が安置されています。
              </p>
              <p>
                この信仰が示しているのは、「最も避けたい場所をあえて清めることに、特別な力が宿る」という思想です。汚れた場所を自らの手で磨くという行為は、単なる清掃ではなく、心の修行として位置づけられてきました。
              </p>
              <p>
                禅寺では今でも「作務（さむ）」と呼ばれる掃除が最も重要な修行のひとつです。特にトイレ掃除は「東司（とうす）の清め」として、悟りへの道を磨く実践とされています。修行僧にとってトイレ掃除は、自分の心の汚れと向き合う大切な時間なのです。
              </p>
            </div>
          </section>

          {/* Section 3: 心理学・科学 */}
          <section id="psychology">
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold mb-8 leading-[1.5] tracking-[0.04em] text-charcoal">
              心理学・科学が裏付けるトイレ掃除の開運メカニズム
            </h2>
            <div className="space-y-5 text-charcoal/65 leading-[2] tracking-wide text-[15px]">
              <p>
                スピリチュアルな解釈を超えて、トイレ掃除が人生にポジティブな変化をもたらすメカニズムは、現代の心理学でも説明できます。
              </p>
              <p>
                <strong className="text-charcoal">環境心理学の知見：</strong>プリンストン大学の研究チームは、散らかった環境が脳の情報処理能力を低下させることを発見しました。整理された空間では集中力と意思決定力が向上し、ストレスホルモン（コルチゾール）の分泌も抑制されます。トイレという毎日使う空間を清潔に保つことは、日々のストレス軽減に直結します。
              </p>
              <p>
                <strong className="text-charcoal">自己効力感の向上：</strong>心理学者アルバート・バンデューラが提唱した「自己効力感」は、「自分はできる」という信念です。トイレ掃除という小さなタスクを毎日やり遂げることで、この自己効力感が少しずつ強化されます。すると他の面倒なタスクにも取り組めるようになり、結果として「運が良くなった」と感じる好循環が生まれます。
              </p>
              <p>
                <strong className="text-charcoal">割れ窓理論：</strong>犯罪学者ジョージ・ケリングが提唱したこの理論は、「小さな荒れを放置すると、全体が荒れていく」というものです。逆に言えば、トイレという小さな空間を清潔に保つことが、生活全体の質を引き上げるきっかけになります。
              </p>
              <p>
                つまり「トイレ掃除で開運する」とは、掃除という行為を通じて心理状態が改善され、行動が変わり、その結果として良い出来事が増えるという、科学的にも説明可能なメカニズムなのです。
              </p>
            </div>
          </section>

          {/* Section 4: 成功者 */}
          <section id="famous">
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold mb-8 leading-[1.5] tracking-[0.04em] text-charcoal">
              成功者たちのトイレ掃除と開運エピソード
            </h2>
            <div className="space-y-5 text-charcoal/65 leading-[2] tracking-wide text-[15px]">
              <p>
                分野を問わず、卓越した成果を出した人々の中には、トイレ掃除を習慣としていた方が数多くいます。
              </p>
              <p>
                <strong className="text-charcoal">松下幸之助（パナソニック創業者）</strong>は、社長になってからもトイレ掃除を自ら行っていたことで知られています。「掃除ひとつできない人間に、大きな仕事はできない」という言葉を残しました。
              </p>
              <p>
                <strong className="text-charcoal">本田宗一郎（本田技研工業創業者）</strong>もまた、トイレ掃除の重要性を説いた経営者です。工場のトイレの美しさがその会社の品質を表すと考え、自ら率先して清掃していました。
              </p>
              <p>
                <strong className="text-charcoal">ビートたけし（映画監督・タレント）</strong>は、若い頃から「トイレ掃除をすると運が向いてくる」という信念を持ち、ロケ先でもトイレ掃除をすることで知られています。
              </p>
              <p>
                <strong className="text-charcoal">鍵山秀三郎（イエローハット創業者）</strong>は、「凡事徹底」を掲げ、40年以上にわたって毎朝のトイレ掃除を続けてきました。その活動は「日本を美しくする会」として全国に広がっています。
              </p>
              <p>
                これらの成功者に共通するのは、最も人が嫌がる仕事を自ら進んで行う姿勢です。その姿勢が周囲の信頼を集め、結果として「運」を引き寄せているのかもしれません。
              </p>
            </div>
          </section>

          {/* Section 5: 運気別 */}
          <section id="fortune-types">
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold mb-8 leading-[1.5] tracking-[0.04em] text-charcoal">
              トイレ掃除の開運効果を運気別に解説
            </h2>
            <div className="space-y-8">
              <div className="rounded-2xl bg-cream p-6 md:p-8">
                <h3 className="text-lg font-bold text-charcoal mb-3">金運アップ</h3>
                <p className="text-charcoal/65 leading-[2] tracking-wide text-[15px]">
                  風水では「水の気」は財運と直結します。トイレの水回りを清潔に保ち、フタを閉めて財の気が流れ出るのを防ぐことが金運アップの基本。さらに、トイレに黄色やゴールド系の小物を置くと金運を強化できるとされています。成功者がトイレ掃除を重視する理由のひとつが、この金運との関係です。
                </p>
              </div>
              <div className="rounded-2xl bg-cream p-6 md:p-8">
                <h3 className="text-lg font-bold text-charcoal mb-3">健康運アップ</h3>
                <p className="text-charcoal/65 leading-[2] tracking-wide text-[15px]">
                  トイレは「不浄の気」が溜まりやすい場所。細菌やカビの繁殖を防ぐ衛生面はもちろん、風水的にも不浄の気が家族の健康に影響すると考えられています。毎日の掃除と換気で清潔な空間を維持することが、家族全員の健康運を守る基本です。
                </p>
              </div>
              <div className="rounded-2xl bg-cream p-6 md:p-8">
                <h3 className="text-lg font-bold text-charcoal mb-3">恋愛運・人間関係運アップ</h3>
                <p className="text-charcoal/65 leading-[2] tracking-wide text-[15px]">
                  トイレの清潔さは、その人の「内面」を映す鏡とも言われます。他人が見ない場所まで丁寧に整えられる人は、人間関係においても細やかな配慮ができる人。トイレ掃除を通じて身につく「場を整える力」は、恋愛や人間関係を好転させる土台になります。
                </p>
              </div>
              <div className="rounded-2xl bg-cream p-6 md:p-8">
                <h3 className="text-lg font-bold text-charcoal mb-3">仕事運アップ</h3>
                <p className="text-charcoal/65 leading-[2] tracking-wide text-[15px]">
                  「面倒な仕事を自ら進んでやる力」は、ビジネスにおける最強のスキルのひとつです。トイレ掃除で鍛えられる「先延ばしにしない力」「細部に気を配る力」「嫌なことから逃げない力」は、すべて仕事のパフォーマンスに直結します。多くの経営者がトイレ掃除を日課にしているのは偶然ではありません。
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: やり方 */}
          <section id="how-to">
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold mb-8 leading-[1.5] tracking-[0.04em] text-charcoal">
              開運につながるトイレ掃除のやり方
            </h2>
            <div className="space-y-5 text-charcoal/65 leading-[2] tracking-wide text-[15px]">
              <p>
                トイレ掃除で開運効果を高めるには、ただ汚れを落とすだけでなく、「気持ち」と「習慣」がポイントです。
              </p>
              <ol className="list-decimal list-inside space-y-4 pl-2">
                <li>
                  <strong className="text-charcoal">毎日1分、便座と便器の内側を拭く</strong>
                  ──完璧を求めず「触れる」ことが大切。トイレクリーナーで便座の表裏と便器の縁を拭くだけでOK。
                </li>
                <li>
                  <strong className="text-charcoal">床を軽く拭く</strong>
                  ──床はホコリと水滴が溜まりやすい場所。週に2〜3回、サッと拭くだけで清潔さが格段に上がります。
                </li>
                <li>
                  <strong className="text-charcoal">使用後はフタを閉めてから流す</strong>
                  ──風水では「気が流れ出る」のを防ぐ意味があり、衛生面でも飛沫拡散を防ぎます。
                </li>
                <li>
                  <strong className="text-charcoal">換気を忘れない</strong>
                  ──陰の気を追い出し、良い気を取り込むために。窓がなければ換気扇を回し続けましょう。
                </li>
                <li>
                  <strong className="text-charcoal">感謝の気持ちで磨く</strong>
                  ──「きれいになってくれてありがとう」と心の中で唱えながら。嫌々やるより、感謝で磨くほうが効果的とされています。
                </li>
              </ol>
              <p>
                さらに詳しい掃除の手順は、
                <Link href="/how-to-clean" className="text-gold font-semibold hover:underline">
                  トイレ掃除のやり方｜たった1分・3ステップで完了
                </Link>
                をご覧ください。習慣として定着させたい方は
                <Link href="/habit" className="text-gold font-semibold hover:underline">
                  トイレ掃除の習慣化ガイド
                </Link>
                も参考にしてください。
              </p>
            </div>
          </section>

          {/* Section 7: NG行動 */}
          <section id="ng">
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold mb-8 leading-[1.5] tracking-[0.04em] text-charcoal">
              トイレ掃除で開運を逃すNG行動
            </h2>
            <div className="space-y-5 text-charcoal/65 leading-[2] tracking-wide text-[15px]">
              <p>
                せっかくトイレ掃除をしても、以下のような行動があると開運効果が薄れてしまいます。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
                  <span><strong className="text-charcoal">フタを開けっぱなしにする</strong> ── 良い気が流れ出てしまうとされます。風水の基本中の基本です。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
                  <span><strong className="text-charcoal">換気をしない</strong> ── 陰の気が滞留し、家全体の運気を下げる原因になります。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
                  <span><strong className="text-charcoal">物を置きすぎる</strong> ── トイレに本・雑誌・不要な装飾品を置くと気の流れが滞ります。必要最小限に。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
                  <span><strong className="text-charcoal">掃除道具を汚れたまま放置</strong> ── ブラシやクリーナーの汚れは不浄の気の温床。こまめに洗浄・交換を。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
                  <span><strong className="text-charcoal">暗いまま放置する</strong> ── 暗いトイレは陰の気が倍増。明るい照明や暖色系のマットで改善できます。</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-0.5 shrink-0">✕</span>
                  <span><strong className="text-charcoal">嫌々掃除する</strong> ── ネガティブな気持ちで磨くと効果半減。「ありがとう」の気持ちがポイントです。</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 8: FAQ */}
          <section id="faq">
            <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold mb-8 leading-[1.5] tracking-[0.04em] text-charcoal">
              トイレ掃除と開運に関するよくある質問
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl bg-cream p-6 md:p-8">
                  <h3 className="text-base font-bold text-charcoal mb-3">
                    Q. {faq.question}
                  </h3>
                  <p className="text-charcoal/65 leading-[2] tracking-wide text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 関連記事：トイレ掃除×開運 */}
          <section className="border-t border-border/40 pt-16">
            <h2 className="font-[var(--font-zen-old-mincho)] text-xl md:text-2xl font-bold mb-4 leading-[1.5] tracking-[0.04em] text-charcoal">
              トイレ掃除×開運をもっと深く知る
            </h2>
            <p className="text-sm text-charcoal/40 mb-8">トイレ掃除と開運に関する記事を目的別にまとめました。</p>

            <div className="space-y-10">
              <div>
                <p className="text-xs font-semibold text-gold/60 tracking-[0.2em] uppercase mb-4">体験談・実例</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link href="/note/toilet-cleaning-mysterious-experiences" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                    <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">トイレ掃除の不思議体験7選</h3>
                    <p className="text-[11px] text-charcoal/35 leading-[1.8]">「掃除を始めたら人生が変わった」実話集</p>
                  </Link>
                  <Link href="/note/toilet-cleaning-money-luck-stories" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                    <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">トイレ掃除で金運アップした体験談5選</h3>
                    <p className="text-[11px] text-charcoal/35 leading-[1.8]">臨時収入・昇給など金運が変わった実話</p>
                  </Link>
                  <Link href="/note/toilet-cleaning-celebrities" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                    <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">トイレ掃除で成功した有名人10選</h3>
                    <p className="text-[11px] text-charcoal/35 leading-[1.8]">ビートたけし・松下幸之助の習慣</p>
                  </Link>
                  <Link href="/note/toilet-cleaning-love-luck" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                    <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">トイレ掃除で恋愛運アップ？</h3>
                    <p className="text-[11px] text-charcoal/35 leading-[1.8]">風水と心理学で読み解く開運の仕組み</p>
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-gold/60 tracking-[0.2em] uppercase mb-4">よくある疑問</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link href="/note/toilet-cleaning-uso" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                    <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">トイレ掃除で開運は嘘？本当？</h3>
                    <p className="text-[11px] text-charcoal/35 leading-[1.8]">効果がない人に共通する特徴を解説</p>
                  </Link>
                  <Link href="/note/toilet-cleaning-effects-timeline" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                    <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">トイレ掃除の効果はいつから？</h3>
                    <p className="text-[11px] text-charcoal/35 leading-[1.8]">1日目〜半年の変化タイムライン</p>
                  </Link>
                  <Link href="/note/toilet-cleaning-morning-night" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                    <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">トイレ掃除は朝と夜どっちが効果的？</h3>
                    <p className="text-[11px] text-charcoal/35 leading-[1.8]">風水・習慣化の視点で解説</p>
                  </Link>
                  <Link href="/note/toilet-cleaning-spiritual-meaning" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                    <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">トイレ掃除のスピリチュアルな意味</h3>
                    <p className="text-[11px] text-charcoal/35 leading-[1.8]">浄化・波動・感謝の本質</p>
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-gold/60 tracking-[0.2em] uppercase mb-4">風水・烏枢沙摩明王</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link href="/note/toilet-ng-items-feng-shui" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                    <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">トイレに置いてはいけないもの5選</h3>
                    <p className="text-[11px] text-charcoal/35 leading-[1.8]">風水で運気を下げるNG行動と改善法</p>
                  </Link>
                  <Link href="/note/toilet-feng-shui-direction" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                    <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">トイレの風水｜方角別の色・対策</h3>
                    <p className="text-[11px] text-charcoal/35 leading-[1.8]">鬼門の正しい対処法</p>
                  </Link>
                  <Link href="/note/ususama-myouou-toilet" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                    <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">烏枢沙摩明王とトイレ掃除</h3>
                    <p className="text-[11px] text-charcoal/35 leading-[1.8]">開運の守護尊が教える浄化の習慣</p>
                  </Link>
                  <Link href="/note/ususama-ofuda-how-to-place" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                    <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">烏枢沙摩明王のお札の貼り方</h3>
                    <p className="text-[11px] text-charcoal/35 leading-[1.8]">正しい位置・方角・注意点</p>
                  </Link>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold text-gold/60 tracking-[0.2em] uppercase mb-4">玄関掃除×開運</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link href="/note/entrance-cleaning-luck" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                    <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">玄関掃除で運気アップ</h3>
                    <p className="text-[11px] text-charcoal/35 leading-[1.8]">効果がすごい理由と正しいやり方</p>
                  </Link>
                  <Link href="/note/genkan-cleaning-unki-effects" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                    <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">玄関掃除を続けた結果がすごい</h3>
                    <p className="text-[11px] text-charcoal/35 leading-[1.8]">運気が変わる7つの理由</p>
                  </Link>
                  <Link href="/note/genkan-cleaning-mysterious-experiences" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                    <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">玄関掃除の不思議体験5選</h3>
                    <p className="text-[11px] text-charcoal/35 leading-[1.8]">人生が変わった人に起きたこと</p>
                  </Link>
                  <Link href="/note/genkan-ng-items-feng-shui" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                    <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">玄関に置いてはいけないもの7選</h3>
                    <p className="text-[11px] text-charcoal/35 leading-[1.8]">風水で運気を下げるNG習慣</p>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* お風呂・キッチン掃除×開運 */}
          <section className="border-t border-border/40 pt-16">
            <h2 className="font-[var(--font-zen-old-mincho)] text-xl md:text-2xl font-bold mb-4 leading-[1.5] tracking-[0.04em] text-charcoal">
              掃除×開運を他の場所にも広げる
            </h2>
            <p className="text-sm text-charcoal/40 mb-8">トイレ以外の場所も整えて、家全体の運気を底上げしましょう。</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/note/ofuro-cleaning-kaiun" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">お風呂掃除で開運できる？</h3>
                <p className="text-[11px] text-charcoal/35 leading-[1.8]">浴室の浄化習慣と運気アップの方法</p>
              </Link>
              <Link href="/note/kitchen-cleaning-feng-shui" className="group rounded-2xl bg-cream border border-border/40 p-5 hover:border-gold/30 hover:shadow-md transition-all duration-300">
                <h3 className="text-sm font-bold text-charcoal mb-1 group-hover:text-gold transition-colors">キッチン掃除で金運アップ</h3>
                <p className="text-[11px] text-charcoal/35 leading-[1.8]">風水が教える台所の開運ポイント</p>
              </Link>
            </div>
          </section>

          {/* ガイドページへのリンク */}
          <section className="border-t border-border/40 pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/how-to-clean"
                className="group rounded-2xl bg-cream border border-border/40 p-6 hover:border-gold/30 hover:shadow-md transition-all duration-300"
              >
                <p className="text-[10px] text-gold/50 tracking-[0.3em] uppercase mb-2">
                  HOW TO
                </p>
                <h3 className="text-sm font-bold text-charcoal mb-2 group-hover:text-gold transition-colors">
                  トイレ掃除のやり方
                </h3>
                <p className="text-[11px] text-charcoal/35 leading-[1.8]">
                  たった1分・3ステップで完了する具体的な手順
                </p>
              </Link>
              <Link
                href="/habit"
                className="group rounded-2xl bg-cream border border-border/40 p-6 hover:border-gold/30 hover:shadow-md transition-all duration-300"
              >
                <p className="text-[10px] text-gold/50 tracking-[0.3em] uppercase mb-2">
                  HABIT
                </p>
                <h3 className="text-sm font-bold text-charcoal mb-2 group-hover:text-gold transition-colors">
                  トイレ掃除の習慣化ガイド
                </h3>
                <p className="text-[11px] text-charcoal/35 leading-[1.8]">
                  21日間で身につく継続のコツ
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* ═══════ CTA ═══════ */}
      <section className="py-24 md:py-32 px-6 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[var(--font-zen-old-mincho)] text-2xl md:text-3xl font-bold mb-6 leading-[1.6] tracking-[0.04em] text-charcoal">
            開運の第一歩は、
            <br />
            今日のトイレ掃除から。
          </h2>
          <p className="text-charcoal/40 text-sm md:text-base leading-[2] tracking-wide mb-12">
            難しく考える必要はありません。
            <br />
            便座をひと拭きする。それだけで、
            <br className="sm:hidden" />
            空間が変わり、気持ちが変わります。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CtaButton href="/how-to-clean">掃除のやり方を見る</CtaButton>
            <Link
              href="/habit"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/20 px-10 py-4 text-sm font-semibold text-charcoal tracking-wide transition-all duration-300 hover:bg-charcoal hover:text-white hover:-translate-y-0.5"
            >
              習慣化ガイドを読む <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
