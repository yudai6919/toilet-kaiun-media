/**
 * microCMS に11本目の記事を登録するスクリプト
 */

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;

if (!SERVICE_DOMAIN || !API_KEY) {
  console.error("環境変数 MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を設定してください");
  process.exit(1);
}

const body = `
<p>「トイレ掃除は毎日しないと意味がないの？」</p>

<p>そう思ったことはありませんか。</p>

<p>トイレ掃除を始めようと思っても、</p>

<p>毎日続けなきゃいけない。</p>

<p>できなかったら意味がない。</p>

<p>そう考えると、始める前から少し苦しくなってしまいます。</p>

<p>でも結論から言うと、</p>

<p><strong>トイレ掃除は毎日完璧にしなくても大丈夫です。</strong></p>

<p>大切なのは、毎日ピカピカにすることではありません。</p>

<p>自分の暮らしの中に、<strong>無理なく整える時間を作ること</strong>です。</p>

<h2>トイレ掃除は毎日しないと意味がないのか</h2>

<p>トイレ掃除は毎日できるなら理想的です。</p>

<p>毎日少し整えることで、汚れが溜まりにくくなり、空間も気持ちも整いやすくなります。</p>

<p>ただし、毎日できないからといって意味がないわけではありません。</p>

<p><strong>週に数回でも、1日30秒でも、十分に意味があります。</strong></p>

<p>続けるうえで大切なのは、完璧さよりも<strong>戻ってこられること</strong>です。</p>

<h2>続けられない人ほど、最初から頑張りすぎている</h2>

<p>トイレ掃除が続かない人は、意志が弱いわけではありません。</p>

<p><strong>最初から頑張りすぎている</strong>ことが多いのです。</p>

<p>便器も床も壁も棚も、全部きれいにしようとする。</p>

<p>毎日10分やろうとする。</p>

<p>道具を揃えて完璧に始めようとする。</p>

<p>でも、それだと疲れている日にはできません。</p>

<p>そして一度できない日があると、</p>

<p>「やっぱり自分は続かない」</p>

<p>と思ってしまいます。</p>

<h2>まずは30秒だけでいい</h2>

<p>最初は<strong>30秒で十分</strong>です。</p>

<p>たとえば、</p>

<ul>
<li>便座だけ拭く</li>
<li>床だけ拭く</li>
<li>鏡だけ拭く</li>
<li>ゴミだけ捨てる</li>
</ul>

<p>これだけでも、昨日より少し整います。</p>

<p>小さすぎるくらいでちょうどいいのです。</p>

<p>習慣は、大きく始めるより、<strong>小さく続ける方が長続き</strong>します。</p>

<h2>おすすめのトイレ掃除頻度</h2>

<h3>毎日できる人</h3>

<p>毎日できる人は、<strong>1分だけ整える</strong>のがおすすめです。</p>

<p>便座を拭く。</p>

<p>床を軽く拭く。</p>

<p>ゴミを捨てる。</p>

<p>この程度で十分です。</p>

<h3>週に2〜3回の人</h3>

<p>無理なく続けたい人は、<strong>週に2〜3回</strong>でも大丈夫です。</p>

<p>曜日を決めておくと習慣にしやすくなります。</p>

<h3>疲れている人</h3>

<p>心や体が疲れている時は、掃除を頑張る必要はありません。</p>

<p>便座を1回拭くだけ。</p>

<p>それだけでも十分です。</p>

<p>大切なのは、<strong>自分を責めないこと</strong>です。</p>

<h2>トイレ掃除を続けるコツ</h2>

<h3>やる場所をひとつに決める</h3>

<p>今日は床だけ。</p>

<p>今日は便座だけ。</p>

<p>このように場所をひとつに絞ると続けやすくなります。</p>

<h3>時間を決める</h3>

<p>朝起きた後。</p>

<p>寝る前。</p>

<p>外出前。</p>

<p>タイミングを決めると、習慣になりやすくなります。</p>

<h3>完璧を目指さない</h3>

<p>毎日できなくても大丈夫です。</p>

<p>できなかった日は、また次の日に戻ればいいだけです。</p>

<p><strong>習慣は途切れないことより、戻ってこられることの方が大切</strong>です。</p>

<h2>トイレ掃除が続く人の考え方</h2>

<p>トイレ掃除が続く人は、掃除を義務にしていません。</p>

<p><strong>自分を整える時間</strong>として考えています。</p>

<p>汚れを落とすだけではなく、</p>

<p>空間を整える。</p>

<p>心を整える。</p>

<p>今日を整える。</p>

<p>そんな感覚で続けているのです。</p>

<p>だから無理がありません。</p>

<h2>毎日できない自分を責めなくていい</h2>

<p>トイレ掃除を習慣にしようとすると、</p>

<p>できなかった日が気になるかもしれません。</p>

<p>でも、できない日があるのは自然なことです。</p>

<p>忙しい日もあります。</p>

<p>疲れている日もあります。</p>

<p>気持ちが沈む日もあります。</p>

<p>そんな日は、休んでも大丈夫です。</p>

<p><strong>また整えたくなった時に戻ればいい</strong>のです。</p>

<h2>まとめ</h2>

<p>トイレ掃除は毎日しないと意味がないわけではありません。</p>

<p>毎日できれば理想。</p>

<p>でも、毎日できなくても大丈夫。</p>

<p><strong>30秒でも、週に数回でも、十分に意味があります。</strong></p>

<p>大切なのは、</p>

<p>完璧に掃除することではなく、</p>

<p>自分の暮らしに<strong>小さな整える時間を作ること。</strong></p>

<p>もし続けられないと感じているなら、</p>

<p>まずは今日、便座を一度拭くだけで大丈夫です。</p>

<p>その小さな行動が、</p>

<p>人生を整える最初の一歩になるかもしれません。</p>
`.trim();

const article = {
  title: "トイレ掃除は毎日しないと意味がない？｜続けられない人へ",
  slug: "toilet-cleaning-everyday",
  category: ["整える習慣"],
  description: "トイレ掃除は毎日しないと意味がないのか。続けられない人でも無理なく始められる頻度や、習慣化のコツをTOTONOEの視点で解説します。",
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
