import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/app/components/Analytics";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
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
  title: 'Sharo Bakery | Fresh Health Bread & Treats in Ulundi',
  description: 'Order premium health bread, cinnamon buns, and sandwiches from Sharo Bakery. Freshly baked daily in Ulundi, KZN. Delivery available.',
  keywords: ['bakery', 'health bread', 'Ulundi', 'KwaZulu-Natal', 'fresh bread', 'cinnamon buns', 'baking', 'order online'],
  authors: [{ name: 'Sharo Bakery' }],
  icons: {
    icon: '/sharo-logo.jpg',
    shortcut: '/sharo-logo.jpg',
    apple: '/sharo-logo.jpg',
  },
  openGraph: {
    title: 'Sharo Bakery | Fresh Health Bread & Treats',
    description: 'Premium artisan health bread and baked goods in Ulundi. Order via WhatsApp today!',
    url: 'https://sharobakery.co.za',
    siteName: 'Sharo Bakery',
    locale: 'en_ZA',
    type: 'website',
    images: [
      {
        url: '/sharo-logo.jpg', // Using logo as primary OG image for now
        width: 800,
        height: 800,
        alt: 'Sharo Bakery Logo',
      }
    ]
  },
  twitter: {
    card: 'summary',
    title: 'Sharo Bakery | Fresh Health Bread',
    description: 'Premium artisan health bread and baked goods in Ulundi.',
    images: ['/sharo-logo.jpg'],
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
