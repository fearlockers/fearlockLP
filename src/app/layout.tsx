import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fearlock | ASPM × Active Insurance セキュリティ実行プラットフォーム",
  description:
    "Fearlockはセキュリティリスクの可視化とActive Insuranceを統合した次世代ASPM。外部アタックサーフェス管理、リスクスコアリング、サイバー保険連携で、セキュリティSaaSの新しい形を提供します。",
  keywords: [
    "ASPM",
    "セキュリティ可視化",
    "サイバー保険",
    "セキュリティSaaS",
    "アタックサーフェス管理",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
