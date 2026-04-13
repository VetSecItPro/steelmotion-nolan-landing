import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CommandPost - AI Chief of Staff for your business",
    template: "%s | CommandPost",
  },
  description:
    "A managed AI employee that runs on your own server, manages your tasks, processes your meetings, and sends you a briefing every morning. Veteran-owned. Security-first.",
  openGraph: {
    title: "CommandPost - AI Chief of Staff",
    description:
      "Your AI Chief of Staff. Working 24/7. Mission Control dashboard included.",
    type: "website",
    url: "https://aicommandpost.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "CommandPost - AI Chief of Staff",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
