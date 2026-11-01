const fs = require('fs');
const path = require('path');

const API_KEY = '0ob3vKa4IPLqz2PwcCOAj4qokW9fXsNqJI0I';
const ENDPOINT = 'https://toire.microcms.io/api/v1/blogs';

const batch1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'toilet-fengshui-articles-1.json'), 'utf8'));
const batch2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'toilet-fengshui-articles-2.json'), 'utf8'));
const articles = [...batch1, ...batch2];

async function postArticle(article, index, total) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'X-MICROCMS-API-KEY': API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: article.title,
      body: article.body,
      description: article.description,
      slug: article.slug,
      category: article.category
    })
  });
  const status = res.status;
  const text = await res.text();
  if (status === 201) {
    let id = '';
    try { id = JSON.parse(text).id; } catch(e) {}
    console.log(`[${index}/${total}] OK: ${article.slug} (id: ${id})`);
    return { slug: article.slug, id, ok: true };
  } else {
    console.log(`[${index}/${total}] FAIL ${status}: ${article.slug} - ${text}`);
    return { slug: article.slug, ok: false, error: text };
  }
}

async function main() {
  console.log(`Posting ${articles.length} toilet feng shui articles...`);
  const results = [];
  for (let i = 0; i < articles.length; i++) {
    const result = await postArticle(articles[i], i + 1, articles.length);
    results.push(result);
    if (i < articles.length - 1) await new Promise(r => setTimeout(r, 1500));
  }
  const ok = results.filter(r => r.ok).length;
  console.log(`\nDone: ${ok}/${articles.length} posted`);
  fs.writeFileSync(path.join(__dirname, 'toilet-fengshui-post-results.json'), JSON.stringify(results, null, 2));
}

main().catch(console.error);
