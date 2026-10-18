const fs = require('fs');
const path = require('path');

const API_KEY = '0ob3vKa4IPLqz2PwcCOAj4qokW9fXsNqJI0I';

async function patchArticle(slug, data, index, total) {
  const res = await fetch(`https://toire.microcms.io/api/v1/blogs?filters=slug[equals]${slug}&fields=id`, {
    headers: { 'X-MICROCMS-API-KEY': API_KEY }
  });
  const d = await res.json();
  if (d.contents.length === 0) {
    console.log(`[${index}/${total}] NOT FOUND: ${slug}`);
    return false;
  }
  const id = d.contents[0].id;

  const patchRes = await fetch(`https://toire.microcms.io/api/v1/blogs/${id}`, {
    method: 'PATCH',
    headers: {
      'X-MICROCMS-API-KEY': API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const status = patchRes.status;
  if (status === 200) {
    console.log(`[${index}/${total}] OK: ${slug}`);
    return true;
  } else {
    const text = await patchRes.text();
    console.log(`[${index}/${total}] FAIL ${status}: ${slug} - ${text}`);
    return false;
  }
}

async function main() {
  const patches = JSON.parse(fs.readFileSync(path.join(__dirname, 'seo-patches.json'), 'utf8'));
  console.log(`Patching ${patches.length} articles...`);
  let ok = 0;
  for (let i = 0; i < patches.length; i++) {
    const p = patches[i];
    const data = {};
    if (p.description) data.description = p.description;
    if (p.body) data.body = p.body;
    if (p.title) data.title = p.title;
    const success = await patchArticle(p.slug, data, i + 1, patches.length);
    if (success) ok++;
    if (i < patches.length - 1) await new Promise(r => setTimeout(r, 1200));
  }
  console.log(`Done: ${ok}/${patches.length} patched`);
}

main().catch(console.error);
