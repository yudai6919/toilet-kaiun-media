/**
 * microCMS に12本目の記事を登録するスクリプト
 */

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

if (!SERVICE_DOMAIN || !API_KEY) {
  console.error("環境変数 MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を設定してください");
  process.exit(1);
}

const body = `
<p>トイレ掃除をしたあと、</p>

<p><strong>なぜか気持ちが少し落ち着く。</strong></p>

<p>そんな経験はありませんか？</p>

<p>悩みが消えたわけではない。</p>

<p>問題が解決したわけでもない。</p>

<p>それでも、</p>

<p>目の前の空間が整うと、心まで少し静かになることがあります。</p>

<p>この記事では、なぜトイレ掃除をすると気持ちが落ち着くのか、心と空間の関係についてお話します。</p>

<h2>掃除をすると気持ちが落ち着くのはなぜ？</h2>

<p>掃除をすると気持ちが落ち着く理由は、<strong>目に入る情報が減る</strong>からです。</p>

<p>散らかった空間にいると、私たちは無意識のうちに多くの情報を受け取っています。</p>

<p>汚れ。</p>

<p>におい。</p>

<p>置きっぱなしの物。</p>

<p>気になっているのに放置している場所。</p>

<p>それらは小さなストレスとして、心に残り続けます。</p>

<p>掃除をすると、その情報が減ります。</p>

<p>だから心が少し静かになるのです。</p>

<h2>トイレは毎日使う小さな空間</h2>

<p>トイレは家の中でも特別な場所です。</p>

<p>毎日必ず使います。</p>

<p>一人になれる場所でもあります。</p>

<p>だからこそ、トイレが汚れていると無意識に気になります。</p>

<p>逆に、トイレが整っていると、<strong>毎日の中で小さな安心感が生まれます。</strong></p>

<p>たった一畳ほどの空間でも、心に与える影響は小さくありません。</p>

<h2>心が乱れている時ほど、空間も乱れやすい</h2>

<p>心に余裕がない時ほど、掃除は後回しになります。</p>

<p>疲れている。</p>

<p>不安がある。</p>

<p>焦っている。</p>

<p>そんな時は、目の前を整える余裕がなくなります。</p>

<p>すると空間が乱れる。</p>

<p>空間が乱れると、さらに心が重くなる。</p>

<p>この流れが続くと、毎日が少しずつ苦しくなっていきます。</p>

<h2>トイレ掃除は心を整える小さな行動</h2>

<p>トイレ掃除は、難しいことではありません。</p>

<ul>
<li>床を拭く。</li>
<li>便座を拭く。</li>
<li>ゴミを捨てる。</li>
</ul>

<p>それだけでも空間は少し変わります。</p>

<p>そして空間が変わると、<strong>心も少し変わります。</strong></p>

<p>大切なのは、完璧に掃除することではありません。</p>

<p>目の前を少し整えることです。</p>

<h2>無心で手を動かす時間が心を静かにする</h2>

<p>トイレ掃除をしている間は、手を動かします。</p>

<p>拭く。</p>

<p>磨く。</p>

<p>流す。</p>

<p>その単純な動作が、<strong>頭の中の考え事を少し静かにしてくれます。</strong></p>

<p>スマホを見ない。</p>

<p>誰とも比べない。</p>

<p>ただ目の前を整える。</p>

<p>その時間が、心に余白を作ってくれるのです。</p>

<h2>トイレ掃除で気持ちが落ち着く人に起きる変化</h2>

<h3>朝の気分が軽くなる</h3>

<p>朝、綺麗なトイレを見るだけで気持ちが少し変わります。</p>

<p>一日の始まりに、整った空間がある。</p>

<p>それだけで安心感があります。</p>

<h3>部屋も整えたくなる</h3>

<p>トイレが整うと、他の場所も気になり始めます。</p>

<p>洗面台。</p>

<p>玄関。</p>

<p>机の上。</p>

<p><strong>小さな整えが、次の整えにつながります。</strong></p>

<h3>自分を責める時間が減る</h3>

<p>掃除をしたという小さな達成感は、自分を責める時間を少し減らしてくれます。</p>

<p>完璧ではなくても、できたことがある。</p>

<p>その感覚が心を支えてくれます。</p>

<h2>気持ちが落ち着かない日にできる1分掃除</h2>

<p>気持ちが落ち着かない日は、大きなことをしなくて大丈夫です。</p>

<p>まずは<strong>1分だけ</strong>で十分です。</p>

<ul>
<li>便座を拭く</li>
<li>床を拭く</li>
<li>鏡を拭く</li>
<li>ゴミを捨てる</li>
</ul>

<p>ひとつだけ選んでやってみてください。</p>

<p>それだけで、少し呼吸がしやすくなることがあります。</p>

<h2>まとめ</h2>

<p>トイレ掃除をすると気持ちが落ち着くのは、</p>

<p><strong>空間が整うことで、心に入ってくる情報が減る</strong>からです。</p>

<p>そして、</p>

<p>目の前を整える行動そのものが、心を静かにしてくれます。</p>

<p>心を変えようとするのは難しい。</p>

<p>でも、空間を少し整えることはできます。</p>

<p>もし今、</p>

<p>気持ちが落ち着かない。</p>

<p>心がざわざわする。</p>

<p>そう感じているなら、</p>

<p>まずは<strong>1分だけトイレを整えてみてください。</strong></p>

<p>心を整える入口は、</p>

<p>意外と目の前の小さな場所にあるのかもしれません。</p>
`.trim();

const article = {
  title: "トイレ掃除をすると気持ちが落ち着く理由｜心と空間の関係",
  slug: "toilet-cleaning-calm-mind",
  category: ["心を整える"],
  description: "トイレ掃除をすると気持ちが落ち着くのはなぜか。空間を整えることが心に与える影響や、心を整える小さな習慣について解説します。",
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
