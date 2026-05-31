/**
 * microCMS に14本目の記事を登録するスクリプト
 */

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

if (!SERVICE_DOMAIN || !API_KEY) {
  console.error("環境変数 MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を設定してください");
  process.exit(1);
}

const body = `
<p>「部屋を片付けたいけど、どこから手をつければいいかわからない」</p>

<p>そんな時はありませんか？</p>

<p>洗濯物。</p>

<p>机の上。</p>

<p>キッチン。</p>

<p>床に置いたままの荷物。</p>

<p>部屋全体を見渡すと、やることが多すぎて、逆に動けなくなることがあります。</p>

<p>そんな時、TOTONOEでは<strong>部屋より先にトイレを整えること</strong>をおすすめしています。</p>

<p>理由は、トイレが一番小さく始めやすい場所だからです。</p>

<h2>部屋全体を片付けようとすると疲れてしまう</h2>

<p>部屋を片付けようと思っても、最初から全部やろうとすると疲れてしまいます。</p>

<p>クローゼットを整理する。</p>

<p>床を片付ける。</p>

<p>キッチンを掃除する。</p>

<p>洗濯物を畳む。</p>

<p>どれも大切ですが、一気にやろうとするとハードルが高くなります。</p>

<p>そして結局、</p>

<p>「今日は無理」</p>

<p>となってしまうことがあります。</p>

<h2>トイレは小さく始められる場所</h2>

<p>トイレは、家の中でも<strong>小さな空間</strong>です。</p>

<p>掃除する場所も限られています。</p>

<p>便座。</p>

<p>床。</p>

<p>便器。</p>

<p>鏡。</p>

<p>ゴミ箱。</p>

<p>やることが明確なので、始めやすいのです。</p>

<p>部屋全体を整える気力がなくても、<strong>トイレなら1分で変えられます。</strong></p>

<h2>まずトイレを掃除すると達成感が生まれる</h2>

<p>トイレ掃除の良いところは、<strong>変化がわかりやすい</strong>ことです。</p>

<p>床を拭く。</p>

<p>便座を拭く。</p>

<p>ゴミを捨てる。</p>

<p>それだけで、空間が少し変わります。</p>

<p>小さくても、</p>

<p>「できた」</p>

<p>という感覚が生まれます。</p>

<p>この小さな達成感が、次の行動につながります。</p>

<h2>小さな整えが、次の整えを連れてくる</h2>

<p>トイレが整うと、不思議と他の場所も気になり始めます。</p>

<p>洗面台を拭こうかな。</p>

<p>玄関の靴を揃えようかな。</p>

<p>机の上だけ片付けようかな。</p>

<p>そんなふうに、<strong>小さな行動が次の行動を連れてきます。</strong></p>

<p>最初から部屋全体を変えようとしなくてもいいのです。</p>

<p>まずはひとつ整える。</p>

<p>それで十分です。</p>

<h2>部屋よりトイレを先に整える3つの理由</h2>

<h3>1. 範囲が小さいから続けやすい</h3>

<p>トイレは狭い空間なので、短時間で掃除できます。</p>

<p>疲れている日でも、1分だけなら始めやすいです。</p>

<h3>2. 毎日使う場所だから変化を感じやすい</h3>

<p>トイレは毎日必ず使う場所です。</p>

<p>だからこそ、整えた変化を毎日感じられます。</p>

<h3>3. 人に見せない場所だから本音が出る</h3>

<p>トイレは、誰かに見せるための場所ではありません。</p>

<p>だからこそ、そこを整えることは、<strong>自分自身を大切に扱う感覚</strong>につながります。</p>

<h2>掃除は大きく始めなくていい</h2>

<p>掃除を習慣にしたい時、</p>

<p>最初から完璧を目指す必要はありません。</p>

<p>部屋全部を片付けなくていい。</p>

<p>毎日長時間掃除しなくていい。</p>

<p>まずは、</p>

<ul>
<li>便座を拭く</li>
<li>床を拭く</li>
<li>ゴミを捨てる</li>
</ul>

<p>これだけで大丈夫です。</p>

<p><strong>小さく始めるからこそ、続けられます。</strong></p>

<h2>部屋を整える前に、自分を責めない</h2>

<p>部屋が散らかっていると、</p>

<p>「自分はだらしない」</p>

<p>「また片付けられなかった」</p>

<p>そう責めてしまうことがあります。</p>

<p>でも、自分を責めても部屋は片付きません。</p>

<p>必要なのは、責めることではなく、<strong>小さく戻る場所を作ること</strong>です。</p>

<p>トイレ掃除は、その戻る場所になってくれます。</p>

<h2>まとめ</h2>

<p>部屋より先にトイレを掃除する理由は、</p>

<p><strong>トイレが小さく始められる場所</strong>だからです。</p>

<p>部屋全体を片付けようとすると大変でも、</p>

<p>トイレなら1分で整えられます。</p>

<p>その小さな達成感が、次の行動につながります。</p>

<p>空間が整う。</p>

<p>心が整う。</p>

<p>行動が整う。</p>

<p>そして少しずつ、暮らし全体が整い始める。</p>

<p>もし今、</p>

<p>部屋を片付けたいのに動けない。</p>

<p>どこから始めればいいかわからない。</p>

<p>そう感じているなら、</p>

<p>まずは<strong>トイレを1分だけ整えてみてください。</strong></p>

<p>大きく変えなくていい。</p>

<p>小さく整えることから、流れは変わり始めます。</p>
`.trim();

const article = {
  title: "部屋より先にトイレを掃除する理由｜小さく整える習慣",
  slug: "clean-toilet-before-room",
  category: ["整える習慣"],
  description: "部屋全体を片付けるのがつらい時は、まずトイレから。小さく整える習慣が、空間・心・行動を変えていく理由を解説します。",
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
