import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// ============================================
// SITE METADATA
// ============================================
const SITE_URL = "https://tungnguyen.tech";
const SITE_NAME = "Tung Nguyen Portfolio";
const SITE_DESCRIPTION =
  "Portfolio các dự án chuyên sâu về Phân tích nghiệp vụ & Kiểm thử phần mềm.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nguyễn Hoàng Tùng | BA & QA Portfolio",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: "Nguyễn Hoàng Tùng | BA & QA Portfolio",
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "vi_VN",
    alternateLocale: "en_US",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nguyen Hoang Tung Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Hoàng Tùng | BA & QA Portfolio",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// ============================================
// JSON-LD STRUCTURED DATA
// ============================================
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: ["vi", "en"],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Nguyen Hoang Tung",
      url: SITE_URL,
      jobTitle: "Business Analyst",
      sameAs: [
        // Add social profiles here when available
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col pt-24`}
        suppressHydrationWarning
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
