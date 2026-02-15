// app/page.tsx
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
                  PLUS QU&apos;UNE DIÈTE <br />
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

            {/* VISUEL À DROITE */}
            <div className="jq-hero__right">
              <Reveal as="div">
                <div className="jq-hero__portrait jq-hero__portrait--ph">TA PHOTO</div>

                {/*
                  Quand tu as ton image:
                  <img className="jq-hero__portrait" src="/robin-hero.jpg" alt="Robin" />
                  et tu mets /public/robin-hero.jpg
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

      {/* GRAND VISUEL + CTA (SANS "VOIR LE DÉTAIL") */}
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

            {/* Phrase "propre" (celle d'avant) */}
            <p className="jq-subtitle">
              Un suivi clair, humain, et piloté — pour avancer sans te perdre dans le “tout ou rien”.
            </p>

            {/* ✅ un seul bouton */}
            <div className="jq-actions">
              <a className="jq-btn jq-btn--primary" href="/contact">
                Me contacter →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RÉSULTATS (3 transformations, centrées, sans scroll horizontal) */}
      <section className="jq-results">
        <div className="jq-container">
          <Reveal as="div" className="jq-results__head">
            <h2 className="jq-h2 jq-h2--white">
              <span className="jq-outline">RÉSULTATS</span>
              <br />
              Transformations réelles
            </h2>
            <p className="jq-p" style={{ color: "rgba(255,255,255,.70)", marginLeft: "auto", marginRight: "auto" }}>
              (Tu remplaceras les placeholders par tes photos avant / après.)
            </p>
          </Reveal>

          <Reveal as="div">
            <div className="jq-resultsGrid">
              {/* 1 */}
              <div className="jq-slide">
                <div className="jq-beforeafter">
                  <div className="jq-photo jq-photo--ph">AVANT</div>
                  <div className="jq-photo jq-photo--ph">APRÈS</div>
                </div>
                <div className="jq-quote">
                  “Prise de masse / sèche — suivi structuré, sans yoyo.”
                  <span className="jq-quote__name">— Robin</span>
                </div>
              </div>

              {/* 2 */}
              <div className="jq-slide">
                <div className="jq-beforeafter">
                  <div className="jq-photo jq-photo--ph">AVANT</div>
                  <div className="jq-photo jq-photo--ph">APRÈS</div>
                </div>
                <div className="jq-quote">
                  “Progression nette, habitudes qui tiennent.”
                  <span className="jq-quote__name">— Prénom</span>
                </div>
              </div>

              {/* 3 */}
              <div className="jq-slide">
                <div className="jq-beforeafter">
                  <div className="jq-photo jq-photo--ph">AVANT</div>
                  <div className="jq-photo jq-photo--ph">APRÈS</div>
                </div>
                <div className="jq-quote">
                  “Résultat propre, sans extrême.”
                  <span className="jq-quote__name">— Prénom</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
