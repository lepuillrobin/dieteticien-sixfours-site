export const metadata = {
  title: "Contact | Robin LE PUILL",
  description:
    "Contacter Robin LE PUILL, diététicien à Six-Fours-les-Plages : WhatsApp, email, prise de rendez-vous et zone d’intervention.",
};

const WHATSAPP = "https://wa.me/33751013960";
const EMAIL = "mailto:lepuillrobin@gmail.com";

export default function Page() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 20px" }}>
      <h1>Contact</h1>

      <p>
        Le plus simple : tu m’écris sur <strong>WhatsApp</strong> avec ton objectif
        + tes contraintes. Je te réponds et on cale un premier échange.
      </p>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
        <a href={WHATSAPP} style={{ padding: "10px 14px", border: "1px solid #ddd", borderRadius: 8 }}>
          Me contacter sur WhatsApp
        </a>
        <a href={EMAIL} style={{ padding: "10px 14px", border: "1px solid #ddd", borderRadius: 8 }}>
          Envoyer un email
        </a>
      </div>

      <h2 style={{ marginTop: 28 }}>Infos pratiques</h2>
      <ul>
        <li>
          <strong>WhatsApp :</strong> 07 51 01 39 60 (7j/7)
        </li>
        <li>
          <strong>Email :</strong> lepuillrobin@gmail.com
        </li>
        <li>
          <strong>Zone :</strong> Six-Fours-les-Plages & alentours (La Seyne-sur-Mer,
          Sanary-sur-Mer, Ollioules, Toulon, Bandol, Saint-Mandrier-sur-Mer…)
        </li>
        <li>
          <strong>Format :</strong> visio + déplacements à domicile possibles
        </li>
      </ul>
    </main>
  );
}
