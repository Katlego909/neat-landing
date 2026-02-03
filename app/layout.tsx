// app/layout.tsx
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from '../components/Header'
import Footer from '../components/Footer'
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Neat – Home Services Landing Page",
  description: "Find and book trusted home service professionals—cleaning, repairs, gardening and more—in just a few taps.",
  keywords: ["home services", "cleaning", "gardening", "plumbing", "handyman", "service provider", "book online"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Neat – Home Services Landing Page",
    description: "Find and book trusted home service professionals—cleaning, repairs, gardening and more—in just a few taps.",
    url: "https://your-domain.com",
    siteName: "Neat",
    images: [
      {
        url: "https://your-domain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Neat Home Services – Book Trusted Pros",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neat – Home Services Landing Page",
    description: "Find and book trusted home service professionals—cleaning, repairs, gardening and more—in just a few taps.",
    images: ["https://your-domain.com/og-image.png"],
    site: "@YourTwitterHandle",
  }
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-sans antialiased bg-white text-gray-800`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
