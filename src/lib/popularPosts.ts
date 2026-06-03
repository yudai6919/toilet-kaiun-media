export type PopularPost = {
  rank: number;
  slug: string;
  title: string;
  description: string;
  category: string;
};

export const popularPosts: PopularPost[] = [
  {
    rank: 1,
    slug: "clean-toilet-when-life-not-going-well",
    title: "人生がうまくいかない時ほど、まずトイレを磨け。",
    description:
      "人生がうまくいかない時、なぜトイレ掃除なのか。空間・心・行動を整えることで、人生の流れが変わり始める理由を解説します。",
    category: "整える習慣",
  },
  {
    rank: 2,
    slug: "toilet-cleaning-luck",
    title: "トイレ掃除で運気は本当に変わる？人生が整い始めると言われる理由",
    description:
      "風水や成功者の習慣、実際に感じやすい変化をもとに、人生が整い始める理由を解説します。",
    category: "トイレ掃除 × 開運",
  },
  {
    rank: 3,
    slug: "how-to-organize-your-mind",
    title: "心を整える方法｜人生を少し軽くする7つの習慣",
    description:
      "心を整える方法を探している人へ。朝、空間、言葉、スマホとの距離など、人生を少し軽くする7つの習慣を紹介します。",
    category: "心を整える",
  },
  {
    rank: 4,
    slug: "habits-of-people-who-live-well",
    title: "人生がうまくいく人に共通する7つの習慣",
    description:
      "人生がうまくいく人に共通する習慣とは。朝、空間、言葉、スマホ時間、掃除など、毎日を整える7つの小さな習慣を紹介します。",
    category: "整える習慣",
  },
  {
    rank: 5,
    slug: "why-anxiety-never-stops",
    title: "不安が止まらないのはなぜ？｜心が少し軽くなる習慣",
    description:
      "不安が止まらない時にどうすればいいのか。不安との向き合い方と、心を少し軽くするための小さな習慣を紹介します。",
    category: "心を整える",
  },
];
