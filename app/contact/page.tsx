import Reveal from "../components/Reveal";

export const metadata = {
  title: "Contact | Robin LE PUILL",
  description:
    "Contacter Robin LE PUILL, diététicien à Six-Fours-les-Plages : WhatsApp, email, prise de rendez-vous et zone d’intervention.",
};

const WHATSAPP = "https://wa.me/33751013960";
const EMAIL = "mailto:lepuillrobin@gmail.com";

export default function Page() {
  // ✅ Responsive sans CSS: s’empile tout seul quand l’écran est trop étroit
  const heroGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gap: 28,
    alignItems: "center",
  };

  // ✅ Cadre image façon home
  const photoWrap = {
    position: "relative",
    width: "100%",
    maxWidth: 440,
    marginLeft: "auto",
    borderRadius: 18,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,.10)",
    background: "rgba(0,0,0,.25)",
    boxShadow: "0 10px 40px rgba(0,0,0,.35)",
  };

  const photoImg = {
    width: "100%",
    height: 520,
    objectFit: "cover",
    objectPosition: "65% 35%",
    display: "block",
    transform: "scale(1.02)",
    filter: "saturate(1.02) contrast(1.02)",
  };

  // ✅ Vignette / fondu (au-dessus de l’image)
  const vignette = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 2,
    background:
      "radial-gradient(120% 90% at 55% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,.15) 45%, rgba(0,0,0,.55) 100%)," +
      "linear-gradient(90deg, rgba(0,0,0,.55) 0%, rgba(0,0,0,.15) 40%, rgba(0,0,0,.45) 100%)",
  };

  const fadeBottom = {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "28%",
    pointerEvents: "none",
    zIndex: 2,
    background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.55))",
  };

  return (
    <>
      {/* HERO */}
      <section className="jq-hero" style={{ minHeight: 520 }}>
        <div className="jq-hero__overlay" />
        <div className="jq-container jq-hero__content">
          <Reveal as="div">
            <div style={heroGrid}>
              {/* TEXTE */}
              <div>
                <div className="jq-kicker">CONTACT</div>

                <h1 className="jq-title" style={{ fontSize: 56 }}>
                  ON FAIT <br />
                  <span className="jq-title--accent">SIMPLE</span>
                </h1>

                <p className="jq-subtitle" style={{ maxWidth: 760 }}>
                  Le plus efficace : tu m’écris sur <strong>WhatsApp</strong> avec ton objectif + tes contraintes. Je te
                  réponds et on cale un premier échange.
                </p>

                <div className="jq-actions">
                  <a className="jq-btn jq-btn--primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                    Me contacter sur WhatsApp →
                  </a>
                  <a className="jq-btn jq-btn--ghost" href={EMAIL}>
                    Envoyer un email →
                  </a>
                </div>
              </div>

              {/* PHOTO (façon home) */}
              <div style={photoWrap} aria-hidden="true">
                <img src="/robin-contact.png" alt="Robin - contact" style={photoImg} />
                <div style={vignette} />
                <div style={fadeBottom} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INFOS */}
      <section className="jq-section">
        <div className="jq-container">
          <Reveal as="div">
            <h2 className="jq-h2">Infos pratiques</h2>
            <p className="jq-p">Zone, format, et moyens de contact.</p>
          </Reveal>

          <Reveal as="div">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 18,
              }}
            >
              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <h3 className="jq-card__title">Coordonnées</h3>

                <div style={{ marginTop: 10, display: "grid", gap: 10, color: "var(--muted)" }}>
                  <div>
                    <strong style={{ color: "var(--text)" }}>WhatsApp :</strong> 07 51 01 39 60 (7j/7)
                  </div>
                  <div>
                    <strong style={{ color: "var(--text)" }}>Email :</strong> lepuillrobin@gmail.com
                  </div>
                </div>

                <div className="jq-actions" style={{ marginTop: 16 }}>
                  <a className="jq-btn jq-btn--primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                    WhatsApp →
                  </a>
                  <a className="jq-btn jq-btn--ghost" href={EMAIL}>
                    Email →
                  </a>
                </div>
              </div>

              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <h3 className="jq-card__title">Zone & format</h3>

                <div style={{ marginTop: 10, display: "grid", gap: 10, color: "var(--muted)" }}>
                  <div>
                    <strong style={{ color: "var(--text)" }}>Zone :</strong> Six-Fours-les-Plages & alentours
                    (La Seyne-sur-Mer, Sanary-sur-Mer, Ollioules, Toulon, Bandol, Saint-Mandrier-sur-Mer…)
                  </div>
                  <div>
                    <strong style={{ color: "var(--text)" }}>Format :</strong> visio + déplacements à domicile possibles
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="jq-hero" style={{ minHeight: 420 }}>
        <div className="jq-hero__overlay" />
        <div className="jq-container jq-hero__content">
          <Reveal as="div">
            <h2 className="jq-title" style={{ fontSize: 52 }}>
              ENVOIE TON <br />
              <span className="jq-title--accent">OBJECTIF</span>
            </h2>

            <p className="jq-subtitle" style={{ maxWidth: 720 }}>
              Objectif + contraintes + emploi du temps. Je te réponds avec une stratégie simple.
            </p>

            <div className="jq-actions">
              <a className="jq-btn jq-btn--primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                WhatsApp →
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
