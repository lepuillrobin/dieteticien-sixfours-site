import type { Metadata } from "next";
import Reveal from "../components/Reveal";

const siteUrl = "https://dieteticien-sixfours.fr";

export const metadata: Metadata = {
  title: "Contact – diététicien à Six-Fours-les-Plages",
  description:
    "Contacter Robin Le Puill, diététicien à Six-Fours-les-Plages : WhatsApp, email, prise de rendez-vous et zone d’intervention (Six-Fours, Sanary, La Seyne, Toulon…).",
  alternates: { canonical: "/contact" },
  robots: { index: true, follow: true },
};

const WHATSAPP = "https://wa.me/33751013960";
const EMAIL = "mailto:lepuillrobin@gmail.com";
const INSTAGRAM = "https://www.instagram.com/robindiet/";

function JsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${siteUrl}/contact#contactpage`,
      url: `${siteUrl}/contact`,
      name: "Contact – diététicien à Six-Fours-les-Plages",
      inLanguage: "fr-FR",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Robin Le Puill - Diététicien",
      url: siteUrl,
      telephone: "+33751013960",
      email: "lepuillrobin@gmail.com",
      sameAs: [INSTAGRAM],
      areaServed: [
        "Six-Fours-les-Plages",
        "La Seyne-sur-Mer",
        "Sanary-sur-Mer",
        "Ollioules",
        "Toulon",
        "Bandol",
        "Saint-Mandrier-sur-Mer",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Six-Fours-les-Plages",
        addressRegion: "Var",
        addressCountry: "FR",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+33751013960",
          contactType: "customer support",
          availableLanguage: ["fr"],
        },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function Page() {
  return (
    <div className="jq-pageContact">
      <JsonLd />

      {/* HERO (même structure que la Home) */}
      <section className="jq-hero jq-hero--home jq-contactHero" style={{ minHeight: 520 }}>
        <div className="jq-hero__overlay" />
        <div className="jq-container">
          <div className="jq-hero__grid">
            {/* TEXTE À GAUCHE */}
            <div className="jq-hero__left">
              <Reveal as="div">
                <div className="jq-kicker">CONTACT</div>

                <h1 className="jq-title">
                  ON FAIT <br />
                  <span className="jq-title--accent">SIMPLE</span>
                </h1>

                <p className="jq-subtitle">
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
              </Reveal>
            </div>

            {/* VISUEL À DROITE */}
            <div className="jq-hero__right">
              <Reveal as="div">
                <div className="jq-hero__photoWrap jq-hero__photoWrap--contactHero">
                  <img
                    className="jq-hero__portrait"
                    src="/robin-contact.jpg"
                    alt="Robin Le Puill, diététicien à Six-Fours-les-Plages — contact"
                  />
                </div>
              </Reveal>
            </div>
          </div>
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
            <div className="jq-contactInfosGrid">
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
                    <strong style={{ color: "var(--text)" }}>Zone :</strong> Six-Fours-les-Plages & alentours (La
                    Seyne-sur-Mer, Sanary-sur-Mer, Ollioules, Toulon, Bandol, Saint-Mandrier-sur-Mer…)
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
      <section className="jq-hero jq-hero--home jq-contactHero jq-contactHero--cta" style={{ minHeight: 420 }}>
        <div className="jq-hero__overlay" />

        <div className="jq-container">
          <div className="jq-hero__grid">
            {/* TEXTE À GAUCHE */}
            <div className="jq-hero__left">
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
                  <a className="jq-btn jq-btn--ghost" href={EMAIL}>
                    Email →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* PHOTO À DROITE */}
            <div className="jq-hero__right">
              <Reveal as="div">
                <div className="jq-hero__photoWrap jq-hero__photoWrap--contactCta">
                  <img
                    className="jq-hero__portrait"
                    src="/robin-plan.jpg"
                    alt="Robin Le Puill — prise de contact et plan de suivi (photo)"
                    style={{ objectPosition: "55% 35%" }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
