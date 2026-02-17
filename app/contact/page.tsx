import Reveal from "../components/Reveal";

export const metadata = {
  title: "Contact | Robin LE PUILL",
  description:
    "Contacter Robin LE PUILL, diététicien à Six-Fours-les-Plages : WhatsApp, email, prise de rendez-vous et zone d’intervention.",
};

const WHATSAPP = "https://wa.me/33751013960";
const EMAIL = "mailto:lepuillrobin@gmail.com";

export default function Page() {
  return (
    <>
      {/* Styles locaux (pour garder la page propre + responsive) */}
      <style jsx>{`
        .contact-hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 28px;
          align-items: center;
        }

        .contact-photo {
          position: relative;
          width: 100%;
          max-width: 420px;
          margin-left: auto;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.25);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
        }

        /* Vignette / fondu comme sur la home */
        .contact-photo::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          /* double couche: vignette + léger voile */
          background:
            radial-gradient(
              120% 90% at 55% 40%,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.15) 45%,
              rgba(0, 0, 0, 0.55) 100%
            ),
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.55) 0%,
              rgba(0, 0, 0, 0.15) 40%,
              rgba(0, 0, 0, 0.45) 100%
            );
          z-index: 2;
        }

        /* léger fondu bas (comme la home) */
        .contact-photo::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 28%;
          pointer-events: none;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.55));
          z-index: 2;
        }

        .contact-photo img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          object-position: 65% 35%;
          display: block;
          transform: scale(1.02); /* micro “présence” comme sur la home */
          filter: saturate(1.02) contrast(1.02);
        }

        /* Mobile: stack */
        @media (max-width: 900px) {
          .contact-hero-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .contact-photo {
            max-width: 520px;
            margin: 10px 0 0;
          }
          .contact-photo img {
            height: 420px;
            object-position: 60% 30%;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="jq-hero" style={{ minHeight: 520 }}>
        <div className="jq-hero__overlay" />
        <div className="jq-container jq-hero__content">
          <Reveal as="div">
            <div className="contact-hero-grid">
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
              <div className="contact-photo" aria-hidden="true">
                <img src="/robin-contact.png" alt="Robin - contact" />
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
                gridTemplateColumns: "1fr 1fr",
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
