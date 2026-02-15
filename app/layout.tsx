// app/layout.tsx

import "./globals.css";

export const metadata = {
  title: "Diététicien à Six-Fours-les-Plages | Robin Le Puill",
  description:
    "Suivi diététique à Six-Fours-les-Plages et alentours : perte de gras, mieux-être, habitudes (sommeil, pas) + visio toutes les 2 semaines. WhatsApp 7j/7.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <header className="site-header">
          <nav className="site-nav">
            <a href="/" className="site-brand">
              Robin LE PUILL • Diététicien
            </a>

            <div className="site-links">
              <a href="/accompagnement">Accompagnement</a>
              <a href="/methode">Méthode</a>
              <a href="/a-propos">À propos</a>
              <a href="/contact">Contact</a>
            </div>
          </nav>
        </header>

        <main className="site-main">{children}</main>

        <footer className="site-footer">
          <div className="site-footer__inner">
            © {new Date().getFullYear()} Robin LE PUILL — Diététicien • Six-Fours-les-Plages & alentours • Visio + à
            domicile
            <span style={{ marginLeft: 10 }}>
              •{" "}
              <a href="https://www.instagram.com/robindiet/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
