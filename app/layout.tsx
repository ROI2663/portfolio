import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-gamma-red-79.vercel.app"),
  title: "飲食店・カフェの経費・レシート入力をAIで自動化 | 安田慶一",
  description:
    "飲食店・カフェ専門で、レシート・領収書の入力をAIで自動化します。写真を撮って送るだけで費目ごとに自動で仕分け・記帳。業務自動化・チャットボット・データ化も業種を問わずご相談いただけます。まずはレシート数枚で無料サンプルを。",
  openGraph: {
    title: "閉店後のレシート入力、AIにまるごとお任せ。｜安田慶一",
    description:
      "飲食店・カフェ専門｜経費・レシート入力をAIで自動化。レシート数枚で無料サンプルをお試しいただけます。",
    url: "https://portfolio-gamma-red-79.vercel.app",
    siteName: "安田慶一 ポートフォリオ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/images/og-cover.png",
        width: 1200,
        height: 630,
        alt: "飲食店・カフェの経費・レシート入力をAIで自動化",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "閉店後のレシート入力、AIにまるごとお任せ。｜安田慶一",
    description:
      "飲食店・カフェ専門｜経費・レシート入力をAIで自動化。レシート数枚で無料サンプルを。",
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
