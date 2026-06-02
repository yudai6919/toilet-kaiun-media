/**
 * microCMS に17本目の記事を登録するスクリプト
 */

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

if (!SERVICE_DOMAIN || !API_KEY) {
  console.error("環境変数 MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を設定してください");
  process.exit(1);
}

const body = `
<p>「靴を揃えなさい」</p>

<p>子どもの頃に言われたことがある人も多いのではないでしょうか。</p>

<p>当時は理由もわからず、</p>

<p>ただ注意されるから揃えていた。</p>

<p>そんな人もいるかもしれません。</p>

<p>でも大人になって気づくことがあります。</p>

<p><strong>靴を揃える習慣は、単なるマナーではない</strong>ということです。</p>

<p>実は、整う人ほど足元を大切にしています。</p>

<p>この記事では、靴を揃える習慣にはどんな意味があるのか、なぜ心や行動に影響するのかをお話します。</p>

<h2>靴を揃える習慣で人生は変わるのか</h2>

<p>結論から言うと、</p>

<p>靴を揃えたから人生が劇的に変わるわけではありません。</p>

<p>でも、</p>

<p><strong>靴を揃える習慣がある人は、日々の行動が少しずつ整いやすくなります。</strong></p>

<p>人生は大きな決断だけで変わるものではありません。</p>

<p>小さな行動の積み重ねで形作られます。</p>

<p>靴を揃えることも、その小さな行動のひとつです。</p>

<h2>整う人は足元を整えている</h2>

<p>整う人には共通点があります。</p>

<p>それは、</p>

<p><strong>目立たない場所を大切にする</strong>ことです。</p>

<p>机の上。</p>

<p>玄関。</p>

<p>トイレ。</p>

<p>そして靴。</p>

<p>誰かに見せるためではなく、</p>

<p>自分のために整えている。</p>

<p>だから無理がありません。</p>

<p>整えることが特別なことではなく、自然な習慣になっているのです。</p>

<h2>靴が揃っていると気持ちが整う理由</h2>

<p>靴が乱れている玄関を見ると、</p>

<p>どこか落ち着かない気持ちになります。</p>

<p>逆に、</p>

<p>靴が揃っている玄関を見ると安心感があります。</p>

<p>理由は単純です。</p>

<p><strong>目に入る情報が少なくなる</strong>からです。</p>

<p>整った空間は、</p>

<p>心に余計な負荷をかけません。</p>

<p>小さな違いですが、毎日積み重なると大きな差になります。</p>

<h2>靴を揃える人が得られる3つの効果</h2>

<h3>1. 行動の切り替えが上手になる</h3>

<p>靴を揃える行為は、</p>

<p><strong>外から帰ってきた自分をリセットする行動</strong>です。</p>

<p>仕事モードから家モードへ。</p>

<p>慌ただしい時間から落ち着く時間へ。</p>

<p>小さな切り替えが自然にできるようになります。</p>

<h3>2. 玄関が整う</h3>

<p>靴を揃えるだけで玄関の印象は大きく変わります。</p>

<p>掃除をしていなくても、</p>

<p>整って見えることがあります。</p>

<p>玄関は家の入口です。</p>

<p><strong>入口が整うと、暮らし全体も整いやすくなります。</strong></p>

<h3>3. 自分との約束を守れる</h3>

<p>靴を揃えるのにかかる時間は数秒です。</p>

<p>でも、その数秒を毎日続けることに意味があります。</p>

<p><strong>小さな約束を守る。</strong></p>

<p>その積み重ねが、自信につながります。</p>

<h2>靴を揃える習慣が続かない理由</h2>

<p>続かない人の多くは、</p>

<p>完璧を目指しています。</p>

<p>毎回きっちり。</p>

<p>毎日必ず。</p>

<p>そう考えると苦しくなります。</p>

<p>大切なのは、</p>

<p><strong>気づいた時に揃えること</strong>です。</p>

<p>できなかった日があっても大丈夫。</p>

<p>また次に揃えればいいのです。</p>

<h2>靴を揃えるだけで玄関の空気は変わる</h2>

<p>実際にやってみるとわかります。</p>

<p>玄関の靴を揃えるだけで、</p>

<p><strong>空気が少し変わります。</strong></p>

<p>視界が整う。</p>

<p>気持ちが落ち着く。</p>

<p>家に帰ってきた時の安心感が変わる。</p>

<p>大げさではなく、</p>

<p>それだけの力があります。</p>

<h2>トイレ掃除と靴を揃える習慣は似ている</h2>

<p>TOTONOEでは、</p>

<p>トイレ掃除を整える習慣の入口として考えています。</p>

<p>靴を揃える習慣も同じです。</p>

<p>どちらも数分もかかりません。</p>

<p>でも、</p>

<ul>
<li>空間を整える。</li>
<li>心を整える。</li>
<li>行動を整える。</li>
</ul>

<p>という共通点があります。</p>

<p><strong>小さな習慣だからこそ続けやすい</strong>のです。</p>

<h2>整う人は大きなことをしていない</h2>

<p>整う人を見ると、</p>

<p>特別なことをしているように見えるかもしれません。</p>

<p>でも実際は違います。</p>

<ul>
<li>靴を揃える。</li>
<li>玄関を掃く。</li>
<li>トイレを拭く。</li>
<li>朝に深呼吸する。</li>
</ul>

<p>そんな小さな行動を大切にしています。</p>

<p><strong>人生を変えるのは、いつもこうした小さな習慣</strong>です。</p>

<h2>まとめ</h2>

<p>靴を揃える習慣で人生が劇的に変わるわけではありません。</p>

<p>でも、</p>

<p>靴を揃えることで、</p>

<ul>
<li>気持ちが整う。</li>
<li>玄関が整う。</li>
<li>行動が整う。</li>
</ul>

<p>そんな小さな変化は確かにあります。</p>

<p>そして人生は、</p>

<p>その<strong>小さな変化の積み重ね</strong>でできています。</p>

<p>もし今、</p>

<p>何となく落ち着かない。</p>

<p>気持ちを整えたい。</p>

<p>そう感じているなら、</p>

<p>まずは今日、</p>

<p><strong>玄関の靴をひとつ揃えてみてください。</strong></p>

<p>整う人の習慣は、</p>

<p>いつも足元から始まるのかもしれません。</p>
`.trim();

const article = {
  title: "靴を揃える習慣で人生は変わる？｜整う人に共通する小さな習慣",
  slug: "align-shoes-habit",
  category: ["丁寧な暮らし"],
  description: "靴を揃える習慣にはどんな意味があるのか。心や行動との関係、整う人に共通する小さな習慣について解説します。",
  body: body,
};

async function createArticle() {
  const url = `https://${SERVICE_DOMAIN}.microcms.io/api/v1/blogs`;

  console.log("記事を登録中...");
  console.log(`タイトル: ${article.title}`);
  console.log(`スラッグ: ${article.slug}`);
  console.log(`カテゴリ: ${article.category[0]}`);

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": API_KEY,
    },
    body: JSON.stringify(article),
  });

  if (!res.ok) {
    const errorBody = await res.text();
    console.error(`エラー: ${res.status} ${res.statusText}`);
    console.error(errorBody);
    process.exit(1);
  }

  const data = await res.json();
  console.log("\n✅ 記事を登録しました！");
  console.log(`ID: ${data.id}`);
  console.log(`URL: https://totonoe-life.jp/note/${article.slug}`);
}

createArticle().catch(console.error);
