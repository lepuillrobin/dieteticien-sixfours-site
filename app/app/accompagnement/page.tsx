export const metadata = {
  title: "Accompagnement nutritionnel 3–6 mois | Robin LE PUILL",
  description:
    "Accompagnement diététique à Six-Fours-les-Plages : plan personnalisé, tracker d’habitudes, visio toutes les 2 semaines, WhatsApp 7j/7. 150€/mois.",
};

const WHATSAPP = "https://wa.me/33751013960";

export default function Page() {
  return (
    <>
      <h1>Accompagnement nutritionnel (3 à 6 mois)</h1>
      <p>
        Un suivi pour <strong>perdre du gras</strong> et <strong>mieux se sentir</strong> avec une stratégie durable.
      </p>

      <h2>Ce qui est inclus (150€/mois)</h2>
      <ul>
        <li>Plan alimentaire personnalisé + ajustements</li>
        <li>Tracker d’habitudes : pas, sommeil, poids, ressentis</li>
        <li>Visio toutes les 2 semaines : bilan + décisions concrètes</li>
        <li>WhatsApp 7j/7 : support réactif + cadre</li>
      </ul>

      <h2>Comment on démarre</h2>
      <ol>
        <li>Message WhatsApp (objectif + contraintes)</li>
        <li>Premier échange + collecte d’infos</li>
        <li>Mise en place du plan + tracker</li>
        <li>Suivi régulier et ajustements</li>
      </ol>

      <p>
        <a href={WHATSAPP}>👉 Me contacter sur WhatsApp</a>
      </p>
    </>
  );
}
