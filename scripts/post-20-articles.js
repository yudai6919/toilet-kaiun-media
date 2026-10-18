const fs = require('fs');
const path = require('path');

const API_KEY = '0ob3vKa4IPLqz2PwcCOAj4qokW9fXsNqJI0I';
const ENDPOINT = 'https://toire.microcms.io/api/v1/blogs';

async function postArticle(article, index) {
  const body = JSON.stringify({
    title: article.title,
    body: article.content,
    description: article.description,
    slug: article.slug,
    category: article.category
  });

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'X-MICROCMS-API-KEY': API_KEY,
      'Content-Type': 'application/json'
    },
    body
  });

  const status = res.status;
  const text = await res.text();

  if (status === 201) {
    let id = '';
    try { id = JSON.parse(text).id; } catch(e) {}
    console.log(`[${index + 1}/20] OK: ${article.slug} (id: ${id})`);
    return { slug: article.slug, id, ok: true };
  } else {
    console.log(`[${index + 1}/20] FAIL ${status}: ${article.slug} - ${text}`);
    return { slug: article.slug, status, ok: false, error: text };
  }
}

async function main() {
  const articles = JSON.parse(fs.readFileSync(path.join(__dirname, 'articles-batch-20.json'), 'utf8'));
  console.log(`Posting ${articles.length} articles to microCMS...`);

  const results = [];
  for (let i = 0; i < articles.length; i++) {
    const result = await postArticle(articles[i], i);
    results.push(result);
    // Rate limit: wait 1.5 seconds between posts
    if (i < articles.length - 1) {
      await new Promise(r => setTimeout(r, 1500));
    }
  }

  const ok = results.filter(r => r.ok).length;
  const fail = results.filter(r => !r.ok).length;
  console.log(`\nDone: ${ok} success, ${fail} failed`);

  if (fail > 0) {
    console.log('Failed articles:');
    results.filter(r => !r.ok).forEach(r => console.log(`  ${r.slug}: ${r.error}`));
  }

  // Save results
  fs.writeFileSync(path.join(__dirname, 'post-results.json'), JSON.stringify(results, null, 2));
  console.log('Results saved to scripts/post-results.json');
}

main().catch(console.error);
