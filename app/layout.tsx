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
