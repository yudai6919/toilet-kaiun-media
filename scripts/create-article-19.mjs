/**
 * microCMS に19本目の記事を登録するスクリプト
 */

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

if (!SERVICE_DOMAIN || !API_KEY) {
  console.error("環境変数 MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を設定してください");
  process.exit(1);
}

const body = `
<p>人生がうまくいく人には、特別な才能があるように見えることがあります。</p>

<p>でも実際は、<strong>毎日の小さな習慣を大切にしている人</strong>が多いです。</p>

<p>朝を整える。</p>

<p>空間を整える。</p>

<p>言葉を整える。</p>

<p>時間を整える。</p>

<p>どれも大きなことではありません。</p>

<p>でも、小さな習慣の積み重ねが、人生の流れを少しずつ変えていきます。</p>

<p>この記事では、人生がうまくいく人に共通する7つの習慣を紹介します。</p>

<h2>人生がうまくいく人は、毎日を整えている</h2>

<p>人生がうまくいく人は、急に大きなことを変えているわけではありません。</p>

<p>むしろ、<strong>日々の小さな行動を大切にしています。</strong></p>

<p>朝の過ごし方。</p>

<p>部屋の状態。</p>

<p>使う言葉。</p>

<p>人との関わり方。</p>

<p>スマホとの距離。</p>

<p>そうした小さなことが、心と行動を整えていきます。</p>

<h2>習慣1：朝を整える</h2>

<p>人生がうまくいく人は、<strong>朝の時間を大切にしています。</strong></p>

<p>朝から完璧に動く必要はありません。</p>

<p>まずは、</p>

<ul>
<li>カーテンを開ける</li>
<li>水を飲む</li>
<li>深呼吸する</li>
<li>トイレを軽く掃除する</li>
</ul>

<p>それだけでも十分です。</p>

<p>朝を整えると、一日の流れが少し変わります。</p>

<h2>習慣2：空間を整える</h2>

<p>空間は心に影響します。</p>

<p>部屋が散らかっていると、気持ちも落ち着きにくくなります。</p>

<p>逆に、空間が整っていると、<strong>心にも余白が生まれます。</strong></p>

<p>まずは小さな場所で大丈夫です。</p>

<p>トイレ。</p>

<p>玄関。</p>

<p>机の上。</p>

<p>床。</p>

<p>ひとつ整えるだけで、気持ちは少し変わります。</p>

<h2>習慣3：靴を揃える</h2>

<p>靴を揃えることは、小さな習慣です。</p>

<p>でも、<strong>足元を整えることは、暮らしを整えることにつながります。</strong></p>

<p>玄関に入った時、靴が揃っている。</p>

<p>それだけで、家の空気は少し変わります。</p>

<p>人生がうまくいく人ほど、こうした小さな整えを大切にしています。</p>

<h2>習慣4：スマホとの距離を整える</h2>

<p>スマホは便利です。</p>

<p>でも、ずっと見続けていると心が疲れます。</p>

<p>SNSを見る。</p>

<p>誰かと比べる。</p>

<p>ニュースで不安になる。</p>

<p>気づけば、心に余白がなくなっていることがあります。</p>

<p>人生がうまくいく人は、<strong>情報との距離を整えています。</strong></p>

<ul>
<li>朝起きてすぐは見ない。</li>
<li>寝る前は少し離す。</li>
<li>トイレには持ち込まない。</li>
</ul>

<p>そんな小さなルールで十分です。</p>

<h2>習慣5：使う言葉を整える</h2>

<p>言葉は、思っている以上に心に影響します。</p>

<p>「どうせ無理」</p>

<p>「また失敗した」</p>

<p>「私はだめだ」</p>

<p>そんな言葉を使い続けると、心は重くなります。</p>

<p>無理にポジティブになる必要はありません。</p>

<p>でも、</p>

<p>「今日はここまでできた」</p>

<p>「少しだけ整えた」</p>

<p>「また戻ればいい」</p>

<p>そんな言葉に変えるだけで、<strong>自分への向き合い方は変わります。</strong></p>

<h2>習慣6：小さく始める</h2>

<p>人生がうまくいく人は、最初から大きく始めません。</p>

<p><strong>小さく始めます。</strong></p>

<ul>
<li>1分だけ掃除する。</li>
<li>5分だけ歩く。</li>
<li>1つだけ片付ける。</li>
</ul>

<p>完璧を目指さない。</p>

<p>だから続けられるのです。</p>

<p>大きな変化は、小さな習慣から始まります。</p>

<h2>習慣7：自分を責めずに戻ってくる</h2>

<p>習慣は、毎日完璧に続けることが大切なのではありません。</p>

<p><strong>できない日があっても、また戻ってくることが大切</strong>です。</p>

<p>疲れている日もあります。</p>

<p>落ち込む日もあります。</p>

<p>何もできない日もあります。</p>

<p>そんな時に自分を責めない。</p>

<p>また小さく整える。</p>

<p>それが、人生を整える人に共通する考え方です。</p>

<h2>人生を整える習慣は、特別なことではない</h2>

<p>人生を変えると聞くと、大きな決断が必要に感じます。</p>

<p>転職。</p>

<p>引っ越し。</p>

<p>新しい挑戦。</p>

<p>もちろんそれも大切です。</p>

<p>でも、<strong>毎日の小さな習慣にも人生を変える力があります。</strong></p>

<p>朝を整える。</p>

<p>空間を整える。</p>

<p>言葉を整える。</p>

<p>小さく始める。</p>

<p>その積み重ねが、人生の流れを少しずつ整えていきます。</p>

<h2>まとめ</h2>

<p>人生がうまくいく人に共通する7つの習慣は、</p>

<ul>
<li>朝を整える</li>
<li>空間を整える</li>
<li>靴を揃える</li>
<li>スマホとの距離を整える</li>
<li>使う言葉を整える</li>
<li>小さく始める</li>
<li>自分を責めずに戻ってくる</li>
</ul>

<p>です。</p>

<p>どれも特別なことではありません。</p>

<p>でも、<strong>続けることで心と行動が少しずつ変わります。</strong></p>

<p>もし今、</p>

<p>人生を少し整えたい。</p>

<p>毎日をもう少し軽くしたい。</p>

<p>そう感じているなら、</p>

<p>まずは今日、<strong>ひとつだけ整えてみてください。</strong></p>

<p>人生は、小さな習慣から静かに変わり始めます。</p>
`.trim();

const article = {
  title: "人生がうまくいく人に共通する7つの習慣",
  slug: "habits-of-people-who-live-well",
  category: ["整える習慣"],
  description: "人生がうまくいく人に共通する習慣とは。朝、空間、言葉、スマホ時間、掃除など、毎日を整える7つの小さな習慣を紹介します。",
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
