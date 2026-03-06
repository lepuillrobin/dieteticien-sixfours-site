import type { Metadata } from "next";
import Reveal from "../components/Reveal";

const siteUrl = "https://dieteticien-sixfours.fr";

export const metadata: Metadata = {
  title: "Méthode – diététicien à Six-Fours-les-Plages",
  description:
    "Méthode de suivi nutritionnel : cadre clair, repères simples, ajustements réguliers. Objectif : perte de gras durable, sans tout-ou-rien. Six-Fours-les-Plages.",
  alternates: { canonical: "/methode" },
  robots: { index: true, follow: true },
};

const WHATSAPP = "https://wa.me/33751013960";

function JsonLd() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${siteUrl}/methode#webpage`,
      url: `${siteUrl}/methode`,
      name: "Méthode – diététicien à Six-Fours-les-Plages",
      inLanguage: "fr-FR",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteUrl}/methode#service`,
      name: "Méthode de suivi nutritionnel",
      serviceType: "Suivi diététique",
      provider: {
        "@type": "Person",
        name: "Robin Le Puill",
        jobTitle: "Diététicien",
        url: siteUrl,
      },
      areaServed: [
        "Six-Fours-les-Plages",
        "Sanary-sur-Mer",
        "La Seyne-sur-Mer",
        "Toulon",
        "Ollioules",
      ],
      description:
        "Une méthode simple : cadre clair, repères stables et ajustements réguliers pour des résultats durables.",
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
    <div className="jq-pageMethode">
      <JsonLd />

      {/* HERO / INTRO (texte gauche + photo droite, rendu garanti) */}
      <section className="jq-hero jq-methodeHeroTop" style={{ minHeight: 520 }}>
        <div className="jq-hero__overlay" />

        <div className="jq-container">
          <div
            className="jq-methodeHeroGrid"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 420px)",
              gap: 28,
              alignItems: "center",
            }}
          >
            {/* TEXTE */}
            <div style={{ minWidth: 0 }}>
              <Reveal as="div">
                <div className="jq-kicker">MÉTHODE</div>

                <h1 className="jq-title" style={{ fontSize: 56 }}>
                  UNE STRATÉGIE <br />
                  <span className="jq-title--accent">QUI TIENT</span>
                </h1>

                <p className="jq-subtitle" style={{ maxWidth: 780 }}>
                  L’objectif n’est pas “être parfait”. L’objectif, c’est d’avoir un cadre clair et des repères simples —
                  pour avancer même quand la semaine est bancale.
                </p>

                <div className="jq-actions">
                  <a className="jq-btn jq-btn--primary" href="/accompagnement">
                    Voir l’accompagnement →
                  </a>
                  <a className="jq-btn jq-btn--ghost" href={WHATSAPP} target="_blank" rel="noreferrer">
                    M’écrire sur WhatsApp →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* PHOTO */}
            <div className="jq-methodeHeroPhoto" style={{ justifySelf: "end", width: "100%" }}>
              <Reveal as="div">
                <div
                  className="jq-methodeHeroPhotoWrap"
                  style={{
                    width: "100%",
                    maxWidth: 420,
                    aspectRatio: "3 / 4",
                    borderRadius: 22,
                    overflow: "hidden",
                    position: "relative",
                    border: "1px solid rgba(255,255,255,.10)",
                    background: "rgba(0,0,0,.25)",
                  }}
                >
                  <img
                    src="/robin-profil.jpg"
                    alt="Robin Le Puill, diététicien à Six-Fours-les-Plages — photo de profil"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "50% 35%",
                      display: "block",
                    }}
                  />

                  {/* petit fondu bas comme sur les visuels */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(0,0,0,.10) 0%, rgba(0,0,0,.55) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PILIERS */}
      <section className="jq-section">
        <div className="jq-container">
          <Reveal as="div">
            <h2 className="jq-h2">Les 4 piliers</h2>
            <p className="jq-p">La méthode est volontairement simple : moins de blabla, plus de décisions concrètes.</p>
          </Reveal>

          <Reveal as="div" className="jq-stagger">
            <div
              className="jq-methodePiliersGrid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 18,
              }}
            >
              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <div className="jq-card__icon">🧭</div>
                <h3 className="jq-card__title">Un cadre clair</h3>
                <p className="jq-card__text">Des règles simples (et utiles) plutôt que 36 contraintes impossibles à tenir.</p>
              </div>

              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <div className="jq-card__icon">📍</div>
                <h3 className="jq-card__title">Des repères</h3>
                <p className="jq-card__text">
                  Portions, protéines, faim/satiété : on construit des repères stables pour arrêter le hasard.
                </p>
              </div>

              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <div className="jq-card__icon">🔁</div>
                <h3 className="jq-card__title">Des ajustements</h3>
                <p className="jq-card__text">On teste, on mesure, on corrige. Pas de “plan parfait” figé pendant 3 mois.</p>
              </div>

              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <div className="jq-card__icon">✅</div>
                <h3 className="jq-card__title">Du durable</h3>
                <p className="jq-card__text">On vise le long terme : habitudes tenables, pas extrêmes.</p>
              </div>
            </div>
          </Reveal>

          <div className="jq-center" style={{ marginTop: 22 }}>
            <a className="jq-btn jq-btn--primary" href="/contact">
              Réserve un échange →
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="jq-section" style={{ background: "#070708" }}>
        <div className="jq-container">
          <Reveal as="div">
            <h2 className="jq-h2">Comment ça se passe</h2>
            <p className="jq-p">4 étapes. Simple. Et on avance.</p>
          </Reveal>

          <Reveal as="div">
            <div style={{ display: "grid", gap: 14 }}>
              <div className="jq-card" style={{ padding: 18 }}>
                <div className="jq-card__title">1) Bilan</div>
                <p className="jq-card__text" style={{ marginTop: 8 }}>
                  Objectif, contraintes, historique, rythme de vie. On clarifie le vrai problème à résoudre.
                </p>
              </div>

              <div className="jq-card" style={{ padding: 18 }}>
                <div className="jq-card__title">2) Plan + repères</div>
                <p className="jq-card__text" style={{ marginTop: 8 }}>
                  Un plan adapté à ta réalité + des repères simples (pas un truc “Instagram”).
                </p>
              </div>

              <div className="jq-card" style={{ padding: 18 }}>
                <div className="jq-card__title">3) Tracker d’habitudes</div>
                <p className="jq-card__text" style={{ marginTop: 8 }}>
                  Pas / sommeil / poids / ressenti : on suit ce qui compte, sans devenir esclave des chiffres.
                </p>
              </div>

              <div className="jq-card" style={{ padding: 18 }}>
                <div className="jq-card__title">4) Ajustements réguliers</div>
                <p className="jq-card__text" style={{ marginTop: 8 }}>
                  On ajuste toutes les 2 semaines : décisions concrètes, blocages réglés, progression visible.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="jq-center" style={{ marginTop: 22 }}>
            <a className="jq-btn jq-btn--ghost" href={WHATSAPP} target="_blank" rel="noreferrer">
              Envoyer mon objectif →
            </a>
          </div>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className="jq-section">
        <div className="jq-container">
          <Reveal as="div">
            <h2 className="jq-h2">Ce que tu dois retenir</h2>
            <p className="jq-p">Si tu veux une phrase : on fait moins “parfait”, mais plus tenable — donc plus efficace.</p>
          </Reveal>

          <Reveal as="div">
            <div style={{ display: "grid", gap: 12 }}>
              <div className="jq-card" style={{ padding: 18 }}>
                <div className="jq-card__title">On ne cherche pas la motivation</div>
                <p className="jq-card__text" style={{ marginTop: 8 }}>
                  On construit un système. La motivation varie, le système reste.
                </p>
              </div>

              <div className="jq-card" style={{ padding: 18 }}>
                <div className="jq-card__title">Tu gardes une vie sociale</div>
                <p className="jq-card__text" style={{ marginTop: 8 }}>
                  Le plan est fait pour ça. On prévoit, on ajuste, et on évite le “tout ou rien”.
                </p>
              </div>

              <div className="jq-card" style={{ padding: 18 }}>
                <div className="jq-card__title">Le résultat = habitudes</div>
                <p className="jq-card__text" style={{ marginTop: 8 }}>
                  Pas une “diète miracle”. Une routine réaliste qui tient sur des mois et des années.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="jq-center" style={{ marginTop: 22 }}>
            <a className="jq-btn jq-btn--primary" href="/accompagnement">
              Voir l’accompagnement →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
