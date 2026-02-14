export const metadata = {
  title: "Diététicien à Six-Fours-les-Plages | Robin Le Puill",
  description:
    "Suivi diététique à Six-Fours-les-Plages et alentours : perte de gras, mieux-être, habitudes (sommeil, pas) + visio toutes les 2 semaines. WhatsApp 7j/7.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
        <header style={{ borderBottom: "1px solid #eee" }}>
          <nav
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              padding: "14px 20px",
              display: "flex",
              gap: 14,
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <a href="/" style={{ textDecoration: "none", color: "inherit", fontWeight: 700 }}>
              Robin LE PUILL • Diététicien
            </a>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/accompagnement">Accompagnement</a>
              <a href="/methode">Méthode</a>
              <a href="/a-propos">À propos</a>
              <a href="/contact">Contact</a>
            </div>
          </nav>
        </header>

        <main style={{ maxWidth: 1000, margin: "0 auto", padding: "36px 20px" }}>{children}</main>

        <footer style={{ borderTop: "1px solid #eee", marginTop: 40 }}>
          <div style={{ maxWidth: 1000, margin: "0 auto", padding: "18px 20px", fontSize: 14, opacity: 0.85 }}>
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
