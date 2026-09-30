import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://tj-elektrovorbereitung.de";

export const metadata: Metadata = {
  title: {
    default: "TJ Elektrovorbereitung – Saubere Vorarbeiten im Bau",
    template: "%s | TJ Elektrovorbereitung",
  },
  description:
    "Schlitzen, Fräsen, Stemmen, Kernbohrungen – wir machen die Vorarbeit für Elektriker. Festpreis, sauber, staubarm.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "TJ Elektrovorbereitung",
    url: "/",
    title: "TJ Elektrovorbereitung – Saubere Vorarbeiten im Bau",
    description:
      "Schlitzen, Fräsen, Stemmen, Kernbohrungen – wir machen die Vorarbeit für Elektriker. Festpreis, sauber, staubarm.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TJ Elektrovorbereitung – Schlitzen, Kernbohrungen, Abbrucharbeiten in Flensburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TJ Elektrovorbereitung – Saubere Vorarbeiten im Bau",
    description:
      "Schlitzen, Fräsen, Stemmen, Kernbohrungen – wir machen die Vorarbeit für Elektriker.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Elektrovorbereitung",
    "Schlitzen",
    "Fräsen",
    "Stemmen",
    "Kernbohrung",
    "Wandsägen",
    "Rohbau",
    "Elektroinstallation",
    "Vorarbeiten",
    "Flensburg",
    "TJ Elektrovorbereitung",
  ],
};

export const viewport: Viewport = {
  themeColor: "#002d4b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Preconnect: Browser baut Verbindung frühzeitig auf → reduziert Netzwerkverzögerung */}
        <link rel="preconnect" href="https://tj-elektrovorbereitung.de" />
        <link rel="dns-prefetch" href="https://tj-elektrovorbereitung.de" />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "TJ Elektrovorbereitung",
              url: "https://tj-elektrovorbereitung.de",
              telephone: "+4915734403463",
              email: "info@tj-elektrovorbereitung.de",
              image: "https://tj-elektrovorbereitung.de/og-image.jpg",
              logo: "https://tj-elektrovorbereitung.de/Logo.webp",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Flensburg",
                addressRegion: "Schleswig-Holstein",
                addressCountry: "DE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 54.7920,
                longitude: 9.4368,
              },
              description:
                "Schlitzen, Fräsen, Stemmen, Kernbohrungen – saubere Vorarbeiten für Elektriker in Flensburg und Umgebung. Festpreis, staubarm.",
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 54.7920,
                  longitude: 9.4368,
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Leistungen",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Elektrovorbereitung" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kernbohrung" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Abbrucharbeiten" } },
                ],
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61577684893823",
              ],
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
