export const metadata = {
  title: "Accompagnement nutritionnel 3–6 mois | Robin LE PUILL",
  description:
    "Accompagnement diététique à Six-Fours-les-Plages : plan personnalisé, tracker d’habitudes, visio toutes les 2 semaines, WhatsApp 7j/7.",
};

const WHATSAPP = "https://wa.me/33751013960";

export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
      <h1>Accompagnement nutritionnel (3 à 6 mois)</h1>

      <p>
        Un suivi pour <strong>perdre du gras</strong> et <strong>mieux se sentir</strong>, avec une approche durable
        (pas “parfait 2 semaines puis abandon”).
      </p>

      <h2>Ce qui est inclus (150€/mois)</h2>
      <ul>
        <li>Plan alimentaire personnalisé + ajustements</li>
        <li>Tracker d’habitudes : pas, sommeil, poids, ressentis</li>
        <li>Visio toutes les 2 semaines : bilan + décisions concrètes</li>
        <li>WhatsApp 7j/7 : support réactif + cadre clair</li>
        <li>Possible en visio + déplacements à domicile</li>
      </ul>

      <h2>Ce que tu vas obtenir</h2>
      <ol>
        <li>
          Un plan qui colle à ta vraie vie — contraintes, goûts, horaires, sorties.
        </li>
        <li>
          Des repères simples — pour arrêter de naviguer au hasard.
        </li>
        <li>
          Un système durable — moins “parfait”, plus tenable, donc efficace.
        </li>
      </ol>

      <h2>Comment on démarre</h2>
      <ol>
        <li>Tu m’écris sur WhatsApp avec ton objectif + tes contraintes</li>
        <li>On fait un premier échange (bilan)</li>
        <li>Je construis ton plan + ton tracker</li>
        <li>On ajuste toutes les 2 semaines</li>
      </ol>

      <p style={{ marginTop: 16 }}>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            padding: "10px 14px",
            border: "1px solid #ddd",
            borderRadius: 8,
            textDecoration: "none",
          }}
        >
          Me contacter sur WhatsApp
        </a>
      </p>
    </main>
  );
}
