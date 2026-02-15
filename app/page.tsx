import Reveal from "./components/Reveal";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="jq-hero">
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
                  Suivi diététique personnalisé pour perdre du gras et mieux se sentir — avec une approche durable.
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
                <div className="jq-hero__portrait jq-hero__portrait--ph">TA PHOTO</div>

                {/*
                  Quand tu as ta photo : remplace le bloc au-dessus par:
                  <img
                    className="jq-hero__portrait"
                    src="/robin-hero.jpg"
                    alt="Robin"
                  />
                  et mets l’image dans /public/robin-hero.jpg
                */}
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

      {/* GRAND VISUEL + CTA */}
      <section
        className="jq-hero"
        style={{
          minHeight: 520,
          background:
            'linear-gradient(180deg, rgba(0,0,0,.70), rgba(0,0,0,.85)), url("/coaching.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="jq-hero__overlay" />
        <div className="jq-container jq-hero__content">
          <Reveal as="div">
            <h2 className="jq-title" style={{ fontSize: 52 }}>
              RÉSERVE TON <br />
              <span className="jq-title--accent">ACCOMPAGNEMENT</span>
            </h2>

            <p className="jq-subtitle">
              Un suivi clair, humain et personnalisé pour des résultats visibles et durables.
            </p>

            <div className="jq-actions">
              <a className="jq-btn jq-btn--primary" href="/contact">
                Me contacter →
              </a>
            </div>
          </Reveal>
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

          {/* ✅ 3 transformations */}
          <Reveal as="div" className="jq-carousel">
            {/* Transformation 1 */}
            <div className="jq-slide">
              <div className="jq-beforeafter">
                <div className="jq-photo jq-photo--ph">AVANT</div>
                <div className="jq-photo jq-photo--ph">APRÈS</div>
              </div>
              <div className="jq-quote">
                “+20kg secs en 3 ans”
                <span className="jq-quote__name">— Robin</span>
              </div>
            </div>

            {/* Transformation 2 */}
            <div className="jq-slide">
              <div className="jq-beforeafter">
                <div className="jq-photo jq-photo--ph">AVANT</div>
                <div className="jq-photo jq-photo--ph">APRÈS</div>
              </div>
              <div className="jq-quote">
                “+10kg secs en 1 an”
                <span className="jq-quote__name">— Pierre</span>
              </div>
            </div>

            {/* Transformation 3 */}
            <div className="jq-slide">
              <div className="jq-beforeafter">
                <div className="jq-photo jq-photo--ph">AVANT</div>
                <div className="jq-photo jq-photo--ph">APRÈS</div>
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
