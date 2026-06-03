import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import VoiceClient from "./VoiceClient";

const SITE_URL = "https://totonoe-life.jp";

export const metadata: Metadata = {
  title: "みんなの整えの記録 | TOTONOE",
  description:
    "TOTONOEの読者が共有する、小さな整えの記録。今日整えたことを記録して、静かな一歩を共有しましょう。",
  openGraph: {
    title: "みんなの整えの記録 | TOTONOE",
    description:
      "TOTONOEの読者が共有する、小さな整えの記録。今日整えたことを記録して、静かな一歩を共有しましょう。",
    url: `${SITE_URL}/voice`,
    type: "website",
    siteName: "TOTONOE | 整え。",
  },
  alternates: {
    canonical: `${SITE_URL}/voice`,
  },
};

export default function VoicePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "みんなの整えの記録",
          description:
            "TOTONOEの読者が共有する、小さな整えの記録。",
          url: `${SITE_URL}/voice`,
          isPartOf: {
            "@type": "WebSite",
            name: "TOTONOE | 整え。",
            url: SITE_URL,
          },
        }}
      />

      <section className="pt-28 pb-4 md:pt-36 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            items={[
              { label: "TOP", href: "/" },
              { label: "みんなの整えの記録", href: "/voice" },
            ]}
          />
        </div>
      </section>

      <VoiceClient />
    </>
  );
}
