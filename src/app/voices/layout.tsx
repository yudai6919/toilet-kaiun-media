import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

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
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
    siteName: "TOTONOE | 整え。",
  },
  twitter: {
    card: "summary_large_image",
    title: "体験談 | トイレ掃除を続けた人たちの変化の記録",
    description:
      "トイレ掃除を続けた人たちの、小さな変化の記録。TOTONOEユーザーのリアルな体験談。",
    images: [`${SITE_URL}/og-image.png`],
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
