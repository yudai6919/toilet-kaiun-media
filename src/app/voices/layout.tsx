import type { Metadata } from "next";

const SITE_URL = "https://totonoe-life.jp";

export const metadata: Metadata = {
  title: "体験談 | トイレ掃除を続けた人たちの変化の記録",
  description:
    "トイレ掃除を続けた人たちの、小さな変化の記録。朝の気分が変わった、お金が戻ってきた、夫婦関係が改善した。TOTONOEユーザーのリアルな体験談。",
  openGraph: {
    title: "体験談 | トイレ掃除を続けた人たちの変化の記録",
    description:
      "トイレ掃除を続けた人たちの、小さな変化の記録。TOTONOEユーザーのリアルな体験談。",
    url: `${SITE_URL}/voices`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/voices`,
  },
};

export default function VoicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
