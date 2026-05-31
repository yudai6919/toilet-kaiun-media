import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Zen_Old_Mincho } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const SITE_URL = "https://totonoe-life.jp";
const SITE_NAME = "TOTONOE | 整え。";
const SITE_DESCRIPTION =
  "トイレ掃除を、人生を整える習慣へ。たった1分の積み重ねが心と運を整える。開運・習慣化・丁寧な暮らしのためのメディアサイト。";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const zenOldMincho = Zen_Old_Mincho({
  variable: "--font-zen-old-mincho",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F8F4EE",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TOTONOE | 人生変えたいなら、まずトイレを磨け。",
    template: "%s | TOTONOE",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "トイレ掃除",
    "開運",
    "習慣化",
    "整える",
    "丁寧な暮らし",
    "運気アップ",
    "掃除習慣",
    "TOTONOE",
  ],
  authors: [{ name: "TOTONOE" }],
  creator: "TOTONOE",
  publisher: "TOTONOE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "TOTONOE | 人生変えたいなら、まずトイレを磨け。",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TOTONOE - トイレ掃除で人生を整える",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TOTONOE | 人生変えたいなら、まずトイレを磨け。",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${zenOldMincho.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "TOTONOE | 整え。",
              url: SITE_URL,
              description: SITE_DESCRIPTION,
              publisher: {
                "@type": "Organization",
                name: "TOTONOE",
                url: SITE_URL,
                logo: {
                  "@type": "ImageObject",
                  url: `${SITE_URL}/icon-512.png`,
                },
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
