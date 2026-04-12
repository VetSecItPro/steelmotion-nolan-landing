import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Steel Motion - AI Chief of Staff for Your Business",
  description: "A managed AI employee that runs on your own server, manages your tasks, processes your meetings, and sends you a briefing every morning. Veteran-owned. Security-first.",
  openGraph: {
    title: "Steel Motion - AI Chief of Staff",
    description: "Your AI Chief of Staff. Working 24/7. Managed AI employees for businesses.",
    type: "website",
    url: "https://steelmotionllc.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel Motion - AI Chief of Staff",
    description: "Your AI Chief of Staff. Working 24/7.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
