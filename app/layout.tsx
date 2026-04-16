import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "CommandPost - AI Chief of Staff for Your Business",
    template: "%s | CommandPost",
  },
  description:
    "Your AI-powered business operations center. Morning briefings, meeting prep, decision tracking, and a second brain that compounds - running 24/7 in your own isolated environment.",
  openGraph: {
    title: "CommandPost - AI Chief of Staff",
    description:
      "Morning briefings before coffee. Meetings prepped automatically. Every decision logged. Your AI Chief of Staff, running 24/7.",
    type: "website",
    url: "https://aicommandpost.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "CommandPost - AI Chief of Staff",
    description: "Morning briefings before coffee. Meetings prepped automatically. Every decision logged.",
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
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground font-body">
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
