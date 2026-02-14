export const metadata = {
  title: "À propos | Robin LE PUILL",
  description:
    "À propos de Robin LE PUILL, diététicien à Six-Fours-les-Plages : approche durable, personnalisation, suivi en visio et déplacements à domicile.",
};

export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 20px" }}>
      <h1>À propos</h1>

      <p>
        Je m’appelle <strong>Robin LE PUILL</strong>, diététicien. J’accompagne
        principalement les personnes qui veulent <strong>perdre du gras</strong>{" "}
        et <strong>mieux se sentir</strong>, avec une approche{" "}
        <strong>durable</strong> (pas “parfait 2 semaines puis abandon”).
      </p>

      <h2>Mon approche</h2>
      <ul>
        <li>
          <strong>Personnalisation</strong> : on construit un plan qui colle à ta
          vraie vie (contraintes, goûts, horaires, sorties).
        </li>
        <li>
          <strong>Durabilité</strong> : simple, tenable, et ajusté au fil du
          temps.
        </li>
        <li>
          <strong>Tracker d’habitudes</strong> : pas, sommeil, poids, ressentis.
        </li>
      </ul>

      <h2>Où je consulte</h2>
      <ul>
        <li>En visio</li>
        <li>Et je peux aussi me déplacer à domicile</li>
      </ul>

      <p>
        Tu peux aussi retrouver mon contenu sur{" "}
        <a href="https://www.instagram.com/robindiet/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        .
      </p>
    </main>
  );
}
