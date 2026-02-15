const WHATSAPP = "https://wa.me/33751013960";

export default function Hero() {
  return (
    <section className="jq-hero">
      <div className="jq-hero__overlay" />
      <div className="jq-container jq-hero__content">
        <p className="jq-kicker">ACCOMPAGNEMENT</p>

        <h1 className="jq-title">
          PLUS QU&apos;UNE DIÈTE
          <br />
          <span className="jq-title--accent">UN MODE DE VIE</span>
        </h1>

        <p className="jq-subtitle">
          Suivi diététique personnalisé pour perdre du gras et mieux se sentir — avec une approche durable.
        </p>

        <div className="jq-actions">
          <a className="jq-btn jq-btn--primary" href="/accompagnement">
            Voir l’accompagnement →
          </a>
          <a className="jq-btn jq-btn--ghost" href={WHATSAPP} target="_blank" rel="noreferrer">
            WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
