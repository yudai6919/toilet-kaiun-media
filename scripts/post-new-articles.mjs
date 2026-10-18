import { readFileSync } from 'fs';

const API_URL = 'https://toire.microcms.io/api/v1/blogs';
const API_KEY = '0ob3vKa4IPLqz2PwcCOAj4qokW9fXsNqJI0I';

const files = [
  'new-article-1.json',
  'new-article-2.json',
  'new-article-3.json',
  'new-article-4.json',
  'new-article-5.json',
];

const dir = 'C:/Users/Owner/Desktop/クロードコード/toilet-kaiun-media/scripts';

for (const file of files) {
  const data = JSON.parse(readFileSync(`${dir}/${file}`, 'utf-8'));
  console.log(`\nPOSTing: ${data.id} - ${data.title}`);

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MICROCMS-API-KEY': API_KEY,
      },
      body: JSON.stringify(data),
    });

    const text = await res.text();
    console.log(`Status: ${res.status}`);
    console.log(`Response: ${text}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}
