import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "手書きアンケート・紙書類のデータ化代行 | 安田慶一",
  description:
    "手書きアンケートやレシートなど、紙書類のデータ化を代行します。写真やスキャンを送るだけで、AIが一枚ずつ正確にExcel化し、集計まで仕上げてお返しします。業務自動化・チャットボットもご相談可能。まずはアンケート10枚まで無料でお試しいただけます。",
  openGraph: {
    title: "手書きアンケートの山、送るだけでExcelに。｜安田慶一",
    description:
      "紙・手書き書類のデータ化代行。写真を送るだけで、Excel化から集計まで仕上げてお返しします。まずは10枚無料。",
    url: SITE_URL,
    siteName: "安田慶一 ポートフォリオ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "手書きアンケート・紙書類のデータ化代行",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "手書きアンケートの山、送るだけでExcelに。｜安田慶一",
    description:
      "紙・手書き書類のデータ化代行。写真を送るだけで、Excel化から集計まで。まずは10枚無料。",
    images: ["/images/og-cover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
