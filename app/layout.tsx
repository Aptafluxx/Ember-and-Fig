import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emberandfig.example"),
  title: {
    default: "Ember & Fig — Fire, Field & Season",
    template: "%s — Ember & Fig",
  },
  description:
    "An intimate neighborhood restaurant cooking over live fire with seasonal produce, coastal catch, and generous plates.",
  keywords: [
    "restaurant",
    "live fire cooking",
    "seasonal dining",
    "Ember & Fig",
    "fine dining",
  ],
  openGraph: {
    title: "Ember & Fig — Fire, Field & Season",
    description:
      "Live-fire cooking, seasonal produce and generous plates in the heart of the city.",
    type: "website",
    siteName: "Ember & Fig",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
