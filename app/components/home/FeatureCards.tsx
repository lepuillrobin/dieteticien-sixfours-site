export default function FeatureCards() {
  return (
    <section className="jq-section">
      <div className="jq-container">
        <h2 className="jq-h2">Prêt à transformer ton physique ?</h2>
        <p className="jq-p">
          Une structure simple, un cadre clair, et des ajustements réguliers. Pas “parfait 2 semaines puis abandon”.
        </p>

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
            <div className="jq-card__icon">📋</div>
            <h3 className="jq-card__title">Suivi structuré</h3>
            <p className="jq-card__text">Des points réguliers + un cadre simple pour rester constant.</p>
          </div>

          <div className="jq-card">
            <div className="jq-card__corner" />
            <div className="jq-card__stripes" />
            <div className="jq-card__icon">✅</div>
            <h3 className="jq-card__title">Résultats durables</h3>
            <p className="jq-card__text">On vise tenable, pas “extrême”. Donc efficace.</p>
          </div>
        </div>

        <div className="jq-center">
          <a className="jq-btn jq-btn--primary" href="/contact">
            Réserve ton coaching →
          </a>
        </div>
      </div>
    </section>
  );
}
