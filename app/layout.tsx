import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://mcubeddevlabs.gr/#website",
      url: "https://mcubeddevlabs.gr",
      name: "mCubedDevLabs",
      description:
        "Δημιουργώ όμορφες εφαρμογές για κινητά, web εφαρμογές και ιστοσελίδες που κάνουν τη διαφορά",
      inLanguage: "el-GR",
      publisher: {
        "@id": "https://mcubeddevlabs.gr/#person",
      },
    },
    {
      "@type": "Person",
      "@id": "https://mcubeddevlabs.gr/#person",
      name: "Παναγιώτης Μάντας",
      alternateName: "Panagiotis Mantas",
      url: "https://mcubeddevlabs.gr",
      jobTitle: "Full-Stack Developer & UI/UX Designer",
      worksFor: {
        "@type": "Organization",
        name: "mCubedDevLabs",
      },
      address: {
        "@type": "PostalAddress",
        addressCountry: "GR",
        addressLocality: "Ελλάδα",
      },
      sameAs: [
        "https://github.com/pagman/",
        "https://www.linkedin.com/in/panagiotis-mantas-968ba1188/",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Flutter",
        "Mobile App Development",
        "Web Development",
        "WordPress",
        "UI/UX Design",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://mcubeddevlabs.gr/#profilepage",
      url: "https://mcubeddevlabs.gr",
      name: "Portfolio - Παναγιώτης Μάντας | mCubedDevLabs",
      isPartOf: {
        "@id": "https://mcubeddevlabs.gr/#website",
      },
      about: {
        "@id": "https://mcubeddevlabs.gr/#person",
      },
      mainEntity: {
        "@id": "https://mcubeddevlabs.gr/#person",
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mcubeddevlabs.gr"),
  title: "mCubedDevLabs - Δημιουργικός Προγραμματιστής & Σχεδιαστής",
  description:
    "Δημιουργώ όμορφες εφαρμογές για κινητά, web εφαρμογές και ιστοσελίδες που κάνουν τη διαφορά. Με έδρα την Ελλάδα, προσφέρω υπηρεσίες ανάπτυξης λογισμικού υψηλής ποιότητας.",
  keywords: [
    "προγραμματιστής",
    "portfolio",
    "ανάπτυξη ιστοσελίδων",
    "κατασκευή ιστοσελίδων",
    "εφαρμογές κινητών",
    "web εφαρμογές",
    "React",
    "Next.js",
    "Flutter",
    "Ελλάδα",
    "freelancer",
    "developer Greece",
  ],
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
    title: "mCubedDevLabs - Δημιουργικός Προγραμματιστής & Σχεδιαστής",
    description:
      "Δημιουργώ όμορφες εφαρμογές για κινητά, web εφαρμογές και ιστοσελίδες που κάνουν τη διαφορά",
    type: "website",
    locale: "el_GR",
    url: "https://mcubeddevlabs.gr",
    siteName: "mCubedDevLabs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Παναγιώτης Μάντας | mCubedDevLabs",
    description:
      "Δημιουργώ όμορφες εφαρμογές για κινητά, web εφαρμογές και ιστοσελίδες που κάνουν τη διαφορά",
  },
  alternates: {
    canonical: "https://mcubeddevlabs.gr",
    languages: {
      "el-GR": "/",
    },
  },
  category: "technology",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
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
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
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
