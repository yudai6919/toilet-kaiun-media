export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
};

export const articles: Article[] = [
  {
    slug: "toilet-souji-kaiun-riyu",
    title: "なぜトイレ掃除が運気を上げるのか？その本質を探る",
    description:
      "成功者たちが口を揃えて語る「トイレ掃除と運気」の関係。その本質は、自分と向き合う静かな時間にあります。",
    category: "開運",
    date: "2026-05-10",
  },
  {
    slug: "mainichi-1pun-toilet",
    title: "毎日1分でできるトイレ掃除ルーティン",
    description:
      "忙しい毎日でも続けられる、1分間トイレ掃除の具体的なやり方を紹介します。",
    category: "習慣化",
    date: "2026-05-08",
  },
  {
    slug: "toilet-souji-kokoro",
    title: "トイレ掃除が心を整える科学的な理由",
    description:
      "掃除と精神的な安定の関係について、心理学と脳科学の観点から解説します。",
    category: "コラム",
    date: "2026-05-05",
  },
  {
    slug: "keizokuryoku-toilet",
    title: "続かない人へ。トイレ掃除を21日間続ける仕組み",
    description:
      "習慣化の科学に基づいた、トイレ掃除を無理なく定着させる方法を解説します。",
    category: "習慣化",
    date: "2026-05-01",
  },
  {
    slug: "seiketsukan-lifestyle",
    title: "清潔感のある暮らしは、トイレから始まる",
    description:
      "住まいの清潔感を根本から変えるための、トイレ掃除を起点としたアプローチ。",
    category: "コラム",
    date: "2026-04-28",
  },
  {
    slug: "souji-meiso",
    title: "掃除は動く瞑想。マインドフルネスとしてのトイレ掃除",
    description:
      "トイレ掃除を瞑想的に行うことで得られる、心の静けさと集中力について。",
    category: "開運",
    date: "2026-04-25",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
