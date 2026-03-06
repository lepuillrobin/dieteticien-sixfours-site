import type { Metadata } from "next";
import Reveal from "./components/Reveal";

export const metadata: Metadata = {
  title: "Diététicien à Six-Fours-les-Plages",
  description:
    "Diététicien à Six-Fours-les-Plages : accompagnement nutritionnel pour perte de gras et recomposition, avec une approche durable. Visio + suivi WhatsApp.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="jq-hero jq-hero--home jq-homeHero">
        <div className="jq-hero__overlay" />
        <div className="jq-container">
          <div className="jq-hero__grid">
            {/* TEXTE À GAUCHE */}
            <div className="jq-hero__left">
              <Reveal as="div">
                <div className="jq-kicker">ACCOMPAGNEMENT</div>

                <h1 className="jq-title">
                  <span className="jq-title__line1">PLUS QU&apos;UNE DIÈTE</span>
                  <br />
                  <span className="jq-title--accent">UN MODE DE VIE</span>
                </h1>

                <p className="jq-subtitle">
                  Suivi diététique personnalisé pour perdre du gras et mieux te sentir avec une approche durable.
                </p>

                <div className="jq-actions">
                  <a className="jq-btn jq-btn--primary" href="/accompagnement">
                    Voir l&apos;accompagnement →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* VISUEL À DROITE (ta photo) */}
            <div className="jq-hero__right">
              <Reveal as="div">
                <div className="jq-hero__photoWrap">
                  <img
                    className="jq-hero__portrait"
                    src="/robin-hero.png"
                    alt="Robin Le Puill, diététicien à Six-Fours-les-Plages"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3 CARTES */}
      <section className="jq-section">
        <div className="jq-container">
          <Reveal as="div">
            <h2 className="jq-h2">Prêt à transformer ton physique ?</h2>
            <p className="jq-p">
              Une structure simple, un cadre clair, et des ajustements réguliers. Pas “parfait 2 semaines puis abandon”.
            </p>
          </Reveal>

          <Reveal as="div" className="jq-stagger">
            <div className="jq-cards">
              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <div className="jq-card__icon">🏋️</div>
                <h3 className="jq-card__title">Coaching sur-mesure</h3>
                <p className="jq-card__text">Un plan adapté à ton niveau, tes contraintes, ton rythme.</p>
              </div>

              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <div className="jq-card__icon">📱</div>
                <h3 className="jq-card__title">Suivi structuré</h3>
                <p className="jq-card__text">Des points réguliers + un cadre simple pour rester constant.</p>
              </div>

              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <div className="jq-card__icon">✅</div>
                <h3 className="jq-card__title">Résultats durables</h3>
                <p className="jq-card__text">On vise de nouvelles habitudes tenables, pas « extrême » donc efficaces.</p>
              </div>
            </div>
          </Reveal>

          <div className="jq-center">
            <a className="jq-btn jq-btn--primary" href="/contact">
              Réserve ton accompagnement →
            </a>
          </div>
        </div>
      </section>

      {/* GRAND VISUEL + CTA (texte gauche + photo droite) */}
      <section className="jq-hero jq-hero--home jq-homeReserve" style={{ minHeight: 520 }}>
        <div className="jq-hero__overlay" />

        <div className="jq-container">
          <div className="jq-hero__grid">
            {/* TEXTE À GAUCHE */}
            <div className="jq-hero__left">
              <Reveal as="div">
                <h2 className="jq-title" style={{ fontSize: 52 }}>
                  RÉSERVE TON <br />
                  <span className="jq-title--accent">ACCOMPAGNEMENT</span>
                </h2>

                <p className="jq-subtitle" style={{ maxWidth: 760 }}>
                  Un suivi clair, humain et personnalisé pour des résultats visibles et durables.
                </p>

                <div className="jq-actions">
                  <a className="jq-btn jq-btn--primary" href="/contact">
                    Me contacter →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* PHOTO À DROITE (même rendu que la Home) */}
            <div className="jq-hero__right">
              <Reveal as="div">
                <div className="jq-hero__photoWrap">
                  <img
                    className="jq-hero__portrait"
                    src="/robin-suivi.jpg"
                    alt="Suivi diététique personnalisé avec Robin Le Puill, diététicien à Six-Fours-les-Plages"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* RÉSULTATS */}
      <section className="jq-results">
        <div className="jq-container">
          <Reveal as="div">
            <h2 className="jq-h2 jq-h2--white">
              <span className="jq-outline">RÉSULTATS</span>
              <br />
              Transformations physiques
            </h2>
          </Reveal>

          {/* ✅ transformations (scroll horizontal) */}
          <Reveal as="div" className="jq-carousel jq-carousel--peek">
            {/* Transformation 1 */}
            <div className="jq-slide">
              <div className="jq-beforeafter">
                <img className="jq-photo" src="/robin-20kg-avant.jpg" alt="Transformation Robin : avant (+20 kg)" />
                <img className="jq-photo" src="/robin-20kg-apres.jpg" alt="Transformation Robin : après (+20 kg)" />
              </div>
              <div className="jq-quote">
                “+20kg secs en 3 ans”
                <span className="jq-quote__name">— Robin</span>
              </div>
            </div>

            {/* Transformation 2 (Madison) */}
            <div className="jq-slide">
              <div className="jq-beforeafter">
                <img className="jq-photo" src="/madison-avant.jpg" alt="Transformation Madison : avant (-60 kg)" />
                <img className="jq-photo" src="/madison-apres.jpg" alt="Transformation Madison : après (-60 kg)" />
              </div>
              <div className="jq-quote">
                “-60kg en 1 an”
                <span className="jq-quote__name">— Madison</span>
              </div>
            </div>

            {/* Transformation 3 (Pierre) */}
            <div className="jq-slide">
              <div className="jq-beforeafter">
                <img className="jq-photo" src="/pierre-10kg-avant.jng.png" alt="Transformation Pierre : avant (+10 kg)" />
                <img className="jq-photo" src="/pierre-10kg-apres.jng.png" alt="Transformation Pierre : après (+10 kg)" />
              </div>
              <div className="jq-quote">
                “+10kg secs en 1 an”
                <span className="jq-quote__name">— Pierre</span>
              </div>
            </div>

            {/* Transformation 4 */}
            <div className="jq-slide">
              <div className="jq-beforeafter">
                <img className="jq-photo" src="/robin-10kg-avant.jpg" alt="Transformation Robin : avant (-10 kg)" />
                <img className="jq-photo" src="/robin-10kg-apres.jpg" alt="Transformation Robin : après (-10 kg)" />
              </div>
              <div className="jq-quote">
                “-10kg en 3 mois”
                <span className="jq-quote__name">— Robin</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
