export const metadata = {
  title: "Diététicien à Six-Fours-les-Plages | Perte de gras & mieux-être",
  description:
    "Robin LE PUILL, diététicien : suivi nutritionnel personnalisé à Six-Fours-les-Plages et alentours. Visio toutes les 2 semaines, tracker d’habitudes, WhatsApp 7j/7.",
};

const WHATSAPP = "https://wa.me/33751013960";
const EMAIL = "mailto:lepuillrobin@gmail.com";

export default function Home() {
  return (
    <>
      <section style={{ display: "grid", gap: 14, paddingBottom: 18 }}>
        <h1 style={{ fontSize: 42, margin: 0 }}>Diététicien à Six-Fours-les-Plages</h1>
        <p style={{ fontSize: 18, margin: 0 }}>
          Suivi diététique <strong>personnalisé</strong> pour <strong>perdre du gras</strong> et{" "}
          <strong>mieux se sentir</strong> — avec une approche durable (pas “parfait 2 semaines puis abandon”).
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
          <a
            href={WHATSAPP}
            style={{ padding: "12px 14px", border: "1px solid #111", borderRadius: 10, textDecoration: "none" }}
          >
            Me contacter sur WhatsApp
          </a>
          <a
            href="/accompagnement"
            style={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: 10, textDecoration: "none" }}
          >
            Voir l’accompagnement
          </a>
          <a
            href={EMAIL}
            style={{ padding: "12px 14px", border: "1px solid #ccc", borderRadius: 10, textDecoration: "none" }}
          >
            Envoyer un email
          </a>
        </div>

        <p style={{ marginTop: 10, opacity: 0.85 }}>
          📍 Six-Fours-les-Plages & alentours (La Seyne-sur-Mer, Sanary-sur-Mer, Ollioules, Toulon, Bandol,
          Saint-Mandrier-sur-Mer…) • Suivi en visio + déplacements à domicile possibles.
        </p>
      </section>

      <section style={{ borderTop: "1px solid #eee", paddingTop: 22, display: "grid", gap: 12 }}>
        <h2 style={{ margin: 0 }}>Accompagnement 3 à 6 mois — 150€/mois</h2>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>Plan alimentaire personnalisé (perte de gras / mieux-être / hygiène de vie)</li>
          <li>Tracker d’habitudes : pas, sommeil, poids, ressentis</li>
          <li>Visio toutes les 2 semaines : bilan + ajustements</li>
          <li>WhatsApp 7j/7 : support réactif + cadre clair</li>
        </ul>
        <p style={{ margin: 0 }}>
          <strong>Diplôme :</strong> BTS Diététique (2023). Je mets en avant ce pour quoi je suis diplômé : la nutrition.
        </p>
      </section>

      <section style={{ borderTop: "1px solid #eee", paddingTop: 22, display: "grid", gap: 10 }}>
        <h2 style={{ margin: 0 }}>Ce que tu vas obtenir</h2>
        <div style={{ display: "grid", gap: 10 }}>
          <div>
            <strong>1) Un plan qui colle à ta vraie vie</strong> — contraintes, goûts, horaires, sorties.
          </div>
          <div>
            <strong>2) Des repères simples</strong> — pour arrêter de naviguer au hasard.
          </div>
          <div>
            <strong>3) Un système durable</strong> — moins “parfait”, plus tenable, donc efficace.
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid #eee", paddingTop: 22, display: "grid", gap: 10 }}>
        <h2 style={{ margin: 0 }}>Contenu & pédagogie</h2>
        <p style={{ margin: 0 }}>
          Je partage des analyses de recettes, des repères de consommation et des extraits d’émissions (radio/podcast)
          sur{" "}
          <a href="https://www.instagram.com/robindiet/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          .
        </p>
      </section>

      <section style={{ borderTop: "1px solid #eee", paddingTop: 22 }}>
        <h2>FAQ</h2>
        <details>
          <summary>Est-ce que je dois faire du sport ?</summary>
          <p>Non. La stratégie alimentaire est la base. L’activité peut être un levier, mais on adapte à ton contexte.</p>
        </details>
        <details>
          <summary>Ça ressemble à un “régime” ?</summary>
          <p>Non : l’objectif est un cadre efficace et durable, pas une restriction intenable.</p>
        </details>
        <details>
          <summary>Tu fais uniquement en visio ?</summary>
          <p>Visio + déplacements à domicile possibles selon zone et organisation.</p>
        </details>

        <p style={{ marginTop: 14 }}>
          <a href={WHATSAPP} style={{ textDecoration: "none" }}>
            👉 Démarrer : m’écrire sur WhatsApp
          </a>
        </p>
      </section>
    </>
  );
}
