import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Next01 Labs - Your end-to-end technology partner for founders and enterprises",
    template: "%s | Next01 Labs",
  },
  description: "Next01 Labs provides end-to-end technology solutions for founders and enterprises. Expert services in AI/ML, web development, mobile apps, cloud infrastructure, and more.",
  keywords: ["technology partner", "software development", "AI/ML", "cloud computing", "web development", "mobile apps", "enterprise solutions"],
  authors: [{ name: "Next01 Labs" }],
  creator: "Next01 Labs",
  publisher: "Next01 Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://next01labs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://next01labs.com",
    siteName: "Next01 Labs",
    title: "Next01 Labs - Your end-to-end technology partner",
    description: "Expert technology solutions for founders and enterprises",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Next01 Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next01 Labs - Your end-to-end technology partner",
    description: "Expert technology solutions for founders and enterprises",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

