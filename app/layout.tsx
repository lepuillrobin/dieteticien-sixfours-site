// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";

const siteUrl = "https://dieteticien-sixfours.fr";
const siteName = "Diététicien Six-Fours";
const defaultTitle = "Diététicien à Six-Fours-les-Plages | Robin Le Puill";
const defaultDescription =
  "Suivi diététique à Six-Fours-les-Plages et alentours : perte de gras, mieux-être, habitudes (sommeil, pas) + visio toutes les 2 semaines. WhatsApp 7j/7.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,

  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    locale: "fr_FR",
    images: [
      {
        url: "/og.jpg", // à créer dans /public (1200x630)
        width: 1200,
        height: 630,
        alt: defaultTitle,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FF6A00",
};

function JsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      inLanguage: "fr-FR",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Robin Le Puill",
      jobTitle: "Diététicien",
      url: siteUrl,
      sameAs: ["https://www.instagram.com/robindiet/"],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Robin Le Puill - Diététicien",
      url: siteUrl,
      telephone: "+33751013960",
      email: "lepuillrobin@gmail.com",
      sameAs: ["https://www.instagram.com/robindiet/"],
      areaServed: [
        "Six-Fours-les-Plages",
        "Sanary-sur-Mer",
        "La Seyne-sur-Mer",
        "Toulon",
        "Ollioules",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Six-Fours-les-Plages",
        addressRegion: "Var",
        addressCountry: "FR",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <JsonLd />
      </head>
      <body className="jq-body">
        <header className="jq-header">
          <div className="jq-container jq-header__inner">
            <a href="/" className="jq-brand">
              Robin LE PUILL • Diététicien
            </a>

            <nav className="jq-nav">
              <a className="jq-nav__link" href="/accompagnement">
                Accompagnement
              </a>
              <a className="jq-nav__link" href="/methode">
                Méthode
              </a>
              <a className="jq-nav__link" href="/a-propos">
                À propos
              </a>
              <a className="jq-nav__link" href="/contact">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main className="jq-main">{children}</main>

        <footer className="jq-footer">
          <div className="jq-container jq-footer__inner">
            © {new Date().getFullYear()} Robin LE PUILL — Diététicien • Six-Fours-les-Plages & alentours • Visio + à
            domicile
            <span className="jq-footer__sep">•</span>
            <a className="jq-footer__link" href="https://www.instagram.com/robindiet/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
