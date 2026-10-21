import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { siteUrl } from "@/lib/utils";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const title = "Κατασκευή Ιστοσελίδων, Eshop & Εφαρμογών | mCubedDevLabs";
const description =
  "Κατασκευή ιστοσελίδων, eshop (WooCommerce), web εφαρμογών και εφαρμογών κινητών (Flutter). Full-stack development & UI/UX design με 10+ χρόνια εμπειρία.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "mCubedDevLabs",
      description,
      inLanguage: "el-GR",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#organization`,
      name: "mCubedDevLabs",
      url: siteUrl,
      logo: `${siteUrl}/images/logo.webp`,
      image: `${siteUrl}/opengraph-image`,
      description,
      email: "p.mantas@mcubed.io",
      areaServed: { "@type": "Country", name: "Ελλάδα" },
      address: { "@type": "PostalAddress", addressCountry: "GR" },
      founder: { "@id": `${siteUrl}/#person` },
      employee: [{ "@id": `${siteUrl}/#person` }, { "@id": `${siteUrl}/#maria` }],
      sameAs: [
        "https://github.com/pagman/",
        "https://www.linkedin.com/in/panagiotis-mantas-968ba1188/",
      ],
      knowsAbout: [
        "Κατασκευή ιστοσελίδων",
        "Κατασκευή eshop",
        "WooCommerce",
        "Web εφαρμογές",
        "Εφαρμογές κινητών",
        "Flutter",
        "Next.js",
        "UI/UX Design",
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Παναγιώτης Μάντας",
      alternateName: "Panagiotis Mantas",
      url: siteUrl,
      image: `${siteUrl}/images/me.webp`,
      jobTitle: "Full-Stack Developer",
      worksFor: { "@id": `${siteUrl}/#organization` },
      sameAs: [
        "https://github.com/pagman/",
        "https://www.linkedin.com/in/panagiotis-mantas-968ba1188/",
      ],
      knowsAbout: ["React", "Next.js", "TypeScript", "Flutter", "WordPress"],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#maria`,
      name: "Μαρία Μαντά",
      image: `${siteUrl}/images/maria.webp`,
      jobTitle: "UI/UX Designer",
      worksFor: { "@id": `${siteUrl}/#organization` },
      knowsAbout: ["UI/UX Design", "Figma", "Design Systems", "Accessibility"],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Παναγιώτης Μάντας" }],
  creator: "Παναγιώτης Μάντας",
  publisher: "mCubedDevLabs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "el_GR",
    url: "/",
    siteName: "mCubedDevLabs",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
  icons: {
    icon: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P7QKGFMQF5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P7QKGFMQF5');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
