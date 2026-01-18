import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@/app/components/Analytics";
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
  title: 'Sharo Bakery | Premium Health Bread in Ulundi, KZN',
  description: 'Fresh artisan health bread, cinnamon buns, and healthy sandwiches. Black woman-owned bakery in Ulundi, KwaZulu-Natal. Order now!',
  keywords: ['bakery', 'health bread', 'Ulundi', 'KwaZulu-Natal', 'fresh bread', 'gluten-free'],
  authors: [{ name: 'Sharo Bakery' }],
  openGraph: {
    title: 'Sharo Bakery | Premium Health Bread',
    description: 'Fresh artisan health bread baked daily in Ulundi',
    url: 'https://sharobakery.co.za',
    siteName: 'Sharo Bakery',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sharo Bakery | Premium Health Bread',
    description: 'Fresh artisan health bread baked daily in Ulundi'
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
