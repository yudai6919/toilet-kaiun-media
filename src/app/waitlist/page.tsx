import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import WaitlistClient from "./WaitlistClient";

const SITE_URL = "https://totonoe-life.jp";

export const metadata: Metadata = {
  title: "TOTONOEアプリ開発中｜先行案内受付中",
  description:
    "トイレ掃除や小さな習慣を記録し、人生を少しずつ整えるTOTONOEアプリ。先行案内受付中。",
  openGraph: {
    title: "TOTONOEアプリ開発中｜先行案内受付中",
    description:
      "トイレ掃除や小さな習慣を記録し、人生を少しずつ整えるTOTONOEアプリ。先行案内受付中。",
    url: `${SITE_URL}/waitlist`,
    type: "website",
    siteName: "TOTONOE | 整え。",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "TOTONOEアプリ先行案内",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOTONOEアプリ開発中｜先行案内受付中",
    description:
      "トイレ掃除や小さな習慣を記録し、人生を少しずつ整えるTOTONOEアプリ。先行案内受付中。",
  },
  alternates: {
    canonical: `${SITE_URL}/waitlist`,
  },
};

export default function WaitlistPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "TOTONOEアプリ先行案内",
          description:
            "トイレ掃除や小さな習慣を記録し、人生を少しずつ整えるTOTONOEアプリ。",
          url: `${SITE_URL}/waitlist`,
          isPartOf: {
            "@type": "WebSite",
            name: "TOTONOE | 整え。",
            url: SITE_URL,
          },
        }}
      />

      <Breadcrumb
        items={[
          { label: "TOP", href: "/" },
          { label: "アプリ先行案内", href: "/waitlist" },
        ]}
      />

      <WaitlistClient />
    </>
  );
}
