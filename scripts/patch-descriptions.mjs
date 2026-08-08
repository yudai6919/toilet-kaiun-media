const API_KEY = "0ob3vKa4IPLqz2PwcCOAj4qokW9fXsNqJI0I";
const BASE = "https://toire.microcms.io/api/v1/blogs";

async function patch(id, description) {
  const res = await fetch(`${BASE}/${id}`, {
    method: "PATCH",
    headers: { "X-MICROCMS-API-KEY": API_KEY, "Content-Type": "application/json" },
    body: JSON.stringify({ description }),
  });
  if (!res.ok) throw new Error(`PATCH ${id} failed: ${res.status} ${await res.text()}`);
  console.log(`✅ PATCHED ${id}: ${description.slice(0, 50)}...`);
}

async function main() {
  // New article 1: 待ち受け
  await patch("7p769hvq_t",
    "烏枢沙摩明王の待ち受け画像が開運に効くとされる理由を心理学（プライミング効果）と風水の両面から解説。画像の選び方、ロック画面への設定方法、設定に最適なタイミング、併せて実践したい習慣まで網羅。"
  );

  // New article 2: 真言
  await patch("4tysi0rdyi8",
    "烏枢沙摩明王の真言「オン クロダノウ ウンジャク」の意味・正しい唱え方・トイレ掃除中の実践方法を解説。身口意の三業一致やマインドフルネス効果など、掃除×真言が最強の浄化習慣になる理由がわかります。"
  );

  // New article 3: トイレの神様ガイド
  await patch("lsw6yf6oup_2",
    "トイレの神様・烏枢沙摩明王とは何者か。密教の明王としての由来、インドから日本への信仰の歴史、5つのご利益（浄化・金運・安産・厄払い・健康）、参拝できる全国の寺院4選、自宅でのお札の祀り方まで徹底解説。"
  );

  // Existing article: お札の貼り方 (description was title repeat)
  await patch("0681plk5q",
    "烏枢沙摩明王のお札をトイレに正しく貼る方法を解説。目線より高い位置に貼る理由、方角の考え方、画鋲を使わない貼り方の手順、お札が手に入る全国の寺院5選、交換時期の目安まで。賃貸でもできる方法も紹介。"
  );

  console.log("\n✅ All descriptions patched!");
}

main().catch(e => { console.error("ERROR:", e.message); process.exit(1); });
