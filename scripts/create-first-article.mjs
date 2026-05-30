/**
 * microCMS に最初の記事を登録するスクリプト
 *
 * 使い方:
 *   MICROCMS_SERVICE_DOMAIN=xxx MICROCMS_API_KEY=xxx node scripts/create-first-article.mjs
 */

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

if (!SERVICE_DOMAIN || !API_KEY) {
  console.error("環境変数 MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を設定してください");
  process.exit(1);
}

const body = `
<p>「トイレ掃除をすると運気が上がる」</p>

<p>そんな話を聞いたことがある人は多いかもしれません。</p>

<p>一方で、</p>

<p>「本当にそんなことで人生が変わるの？」<br>「ただの迷信では？」</p>

<p>と思う人もいるでしょう。</p>

<p>私も最初はそう思っていました。</p>

<p>しかし、トイレ掃除を習慣にしている人の話を聞いたり、自分自身で続けたりする中で、ひとつ確信したことがあります。</p>

<p>それは、</p>

<p><strong>トイレ掃除は運気を変えるというより、人生の流れを整える行動である。</strong></p>

<p>ということです。</p>

<p>今回は、なぜトイレ掃除が「運気が上がる」と言われるのか、その理由を掘り下げてみます。</p>

<h2>トイレ掃除で運気が上がると言われるのはなぜ？</h2>

<h3>風水でトイレが重要視される理由</h3>

<p>風水では、トイレは家の中でも特に重要な場所とされています。</p>

<p>なぜなら、トイレは<strong>不要なものを流す場所</strong>だからです。</p>

<p>空間が汚れていると、悪い気が溜まりやすくなると言われています。</p>

<p>逆に、綺麗な状態を保つことで空気が整い、良い流れが生まれると考えられています。</p>

<p>もちろん科学的に証明されているわけではありません。</p>

<p>しかし、汚れた場所より綺麗な場所の方が気持ちが良いのは事実です。</p>

<h3>神社やお寺が掃除を大切にする理由</h3>

<p>神社やお寺を訪れると、驚くほど綺麗に掃除されていることがあります。</p>

<p>掃除は単なる美化活動ではありません。</p>

<p><strong>「場を整える」</strong></p>

<p>という意味があります。</p>

<p>場所を整えることで、自分自身の心も整う。</p>

<p>昔から日本ではその考え方が大切にされてきました。</p>

<h3>成功者がトイレ掃除を習慣にする理由</h3>

<p>多くの経営者や成功者がトイレ掃除を重視していることで知られています。</p>

<p>彼らが見ているのは便器ではありません。</p>

<p><strong>「見えない場所をどう扱うか」</strong></p>

<p>です。</p>

<p>誰も見ていない場所を整えられる人は、仕事や人間関係でも丁寧な行動ができる。</p>

<p>だからこそ、トイレ掃除を習慣にする人が多いのです。</p>

<h2>私たちはなぜ「運気が変わった」と感じるのか</h2>

<h3>空間が整うと心が整う</h3>

<p>不思議なことに、部屋が散らかっている時ほど気持ちも重くなります。</p>

<p>逆に、綺麗な空間にいると心が落ち着きます。</p>

<p>トイレは毎日必ず使う場所です。</p>

<p>だからこそ、その空間が整うと<strong>無意識に安心感</strong>を得られます。</p>

<h3>心が整うと行動が変わる</h3>

<p>心が整うと、自然と行動も変わります。</p>

<ul>
<li>朝少し早く起きる</li>
<li>部屋を片付ける</li>
<li>身だしなみを整える</li>
<li>人に優しくなる</li>
</ul>

<p>こうした小さな変化は、一見すると運気とは関係ありません。</p>

<p>しかし人生は、こうした<strong>小さな行動の積み重ね</strong>でできています。</p>

<h3>行動が変わると人生の流れも変わる</h3>

<p>運気が変わったと感じる人の多くは、</p>

<p>実際には<strong>「行動」</strong>が変わっています。</p>

<p>行動が変わると、</p>

<ul>
<li>出会う人</li>
<li>仕事の結果</li>
<li>お金の使い方</li>
<li>健康状態</li>
</ul>

<p>が少しずつ変化していきます。</p>

<p>それを人は、</p>

<p>「運が良くなった」</p>

<p>と感じるのかもしれません。</p>

<h2>実際にトイレ掃除を続けた人に起きた変化</h2>

<p>TOTONOEに寄せられる体験談にも、共通点があります。</p>

<h3>朝の気持ちが軽くなった</h3>

<p>毎朝トイレを整えることで、一日のスタートが変わった。</p>

<p>そんな声は少なくありません。</p>

<h3>部屋まで片付けたくなった</h3>

<p>トイレが綺麗になると、他の場所の汚れも気になるようになります。</p>

<p>結果として、家全体が整い始めます。</p>

<h3>人間関係のストレスが減った</h3>

<p>空間が整うと気持ちに余裕が生まれます。</p>

<p>余裕が生まれると、人との接し方も変わります。</p>

<h3>臨時収入が入った</h3>

<p>忘れていたポイントや返金、思わぬ仕事の依頼。</p>

<p>そんな出来事を「運気が上がった」と感じる人もいます。</p>

<p>ただし、それがトイレ掃除のおかげかどうかは誰にもわかりません。</p>

<p>それでも、<strong>人生の流れが良くなったと感じる人は多い</strong>のです。</p>

<h2>今日からできる簡単なトイレ掃除習慣</h2>

<p>難しいことは必要ありません。</p>

<p>まずは<strong>1分で十分</strong>です。</p>

<ul>
<li>床を拭く</li>
<li>便座を拭く</li>
<li>鏡を磨く</li>
<li>ゴミを捨てる</li>
</ul>

<p>これだけでも空気は変わります。</p>

<p>大切なのは完璧にやることではなく、<strong>続けること</strong>です。</p>

<h2>トイレ掃除で運気は本当に変わるのか？</h2>

<p>結論として、</p>

<p>トイレ掃除そのものが運気を上げるかどうかはわかりません。</p>

<p>しかし、</p>

<ul>
<li>空間が整う</li>
<li>心が整う</li>
<li>行動が整う</li>
</ul>

<p>この流れは確実にあります。</p>

<p>そして、</p>

<p><strong>行動が変われば人生は変わります。</strong></p>

<p>だから私は、</p>

<p>運気を上げたいからトイレを磨くのではなく、<br><strong>人生を整えたいからトイレを磨く。</strong></p>

<p>その考え方の方がしっくりきます。</p>

<p>もし最近、</p>

<p>「なんとなくうまくいかない」</p>

<p>と感じているなら、</p>

<p>まずは今日、<strong>1分だけトイレを磨いてみてください。</strong></p>

<p>人生を変えるきっかけは、いつも小さな行動から始まります。</p>
`.trim();

const article = {
  title: "トイレ掃除で運気は本当に変わる？人生が整い始めると言われる理由",
  slug: "toilet-cleaning-luck",
  category: ["kaiun"],
  description: "トイレ掃除で運気は本当に変わるのか。風水や成功者の習慣、実際に感じやすい変化をもとに、人生が整い始める理由を解説します。",
  body: body,
};

async function createArticle() {
  const url = `https://${SERVICE_DOMAIN}.microcms.io/api/v1/blogs`;

  console.log("記事を登録中...");
  console.log(`タイトル: ${article.title}`);
  console.log(`スラッグ: ${article.slug}`);
  console.log(`カテゴリ: ${article.category}`);
  console.log(`URL: ${url}`);

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
