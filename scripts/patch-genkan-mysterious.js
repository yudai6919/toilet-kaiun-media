const fs = require('fs');
const path = require('path');

const API_KEY = '0ob3vKa4IPLqz2PwcCOAj4qokW9fXsNqJI0I';
const patch = JSON.parse(fs.readFileSync(path.join(__dirname, 'genkan-patch-mysterious.json'), 'utf8'));

async function main() {
  const slug = patch.slug;
  const res = await fetch(`https://toire.microcms.io/api/v1/blogs?filters=slug[equals]${slug}&fields=id`, {
    headers: { 'X-MICROCMS-API-KEY': API_KEY }
  });
  const d = await res.json();
  if (d.contents.length === 0) {
    console.log('NOT FOUND: ' + slug);
    return;
  }
  const id = d.contents[0].id;
  console.log('Found: ' + slug + ' (id: ' + id + ')');

  const data = {};
  if (patch.title) data.title = patch.title;
  if (patch.description) data.description = patch.description;
  if (patch.body) data.body = patch.body;

  const patchRes = await fetch(`https://toire.microcms.io/api/v1/blogs/${id}`, {
    method: 'PATCH',
    headers: { 'X-MICROCMS-API-KEY': API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (patchRes.status === 200) {
    console.log('PATCHED OK: ' + slug);
  } else {
    const text = await patchRes.text();
    console.log('PATCH FAIL ' + patchRes.status + ': ' + text);
  }
}

main().catch(console.error);
