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
  title: "Panagiotis Mantas | mCubedDevLabs - Creative Developer & Designer",
  description:
    "Building beautiful mobile apps, web applications, and websites that make a difference",
  keywords: ["developer", "portfolio", "web development", "mobile apps", "React", "Next.js"],
  authors: [{ name: "Panagiotis Mantas" }],
  openGraph: {
    title: "Panagiotis Mantas | mCubedDevLabs",
    description: "Building beautiful mobile apps, web applications, and websites that make a difference",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panagiotis Mantas | mCubedDevLabs",
    description: "Building beautiful mobile apps, web applications, and websites that make a difference",
  },
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
      </body>
    </html>
  );
}
