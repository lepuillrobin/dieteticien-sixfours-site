const items = [
  { name: "Client 1", quote: "Résultats visibles, cadre clair, et je tiens enfin sur la durée." },
  { name: "Client 2", quote: "Simple, ajusté, et surtout faisable avec un boulot sédentaire." },
  { name: "Client 3", quote: "Moins de prise de tête, plus de constance. Ça change tout." },
];

export default function ResultsCarousel() {
  return (
    <section className="jq-results">
      <div className="jq-container">
        <h2 className="jq-h2 jq-h2--white">
          REJOINS CEUX QUI ONT <span className="jq-outline">ATTEINT</span> LEURS OBJECTIFS
        </h2>

        <div className="jq-carousel">
          {items.map((it) => (
            <article className="jq-slide" key={it.name}>
              <div className="jq-beforeafter">
                <div className="jq-photo jq-photo--ph">AVANT</div>
                <div className="jq-photo jq-photo--ph">APRÈS</div>
              </div>

              <div className="jq-quote">
                <p>“{it.quote}”</p>
                <span className="jq-quote__name">{it.name}</span>
              </div>
            </article>
          ))}
        </div>

        <p className="jq-hint">Glisse horizontalement →</p>
      </div>
    </section>
  );
}
