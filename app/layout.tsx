import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import JSON data directly
import companyData from '../app_data.json';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${companyData.companyName} - ${companyData.tagline}`,
  description: companyData.tagline,
  keywords: "ai chatbots, customer support automation, lead generation, conversational ai, chatbot platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: 'var(--brand-dark)', color: 'var(--brand-text-light)' }}
      >
        {children}
      </body>
    </html>
  );
}
