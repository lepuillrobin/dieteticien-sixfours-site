import type { Metadata } from "next";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Accompagnement nutritionnel 3–6 mois | Robin LE PUILL",
  description:
    "Accompagnement diététique à Six-Fours-les-Plages : plan personnalisé, tracker d’habitudes, visio toutes les 2 semaines, WhatsApp 7j/7.",
};

const WHATSAPP = "https://wa.me/33751013960";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section
        className="jq-hero"
        style={{
          background:
            'radial-gradient(80% 70% at 20% 20%, rgba(255,122,0,.10), transparent 55%), linear-gradient(180deg, rgba(0,0,0,.65), rgba(0,0,0,.85)), url("/coaching.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="jq-hero__overlay" />
        <div className="jq-container">
          <div className="jq-hero__grid">
            <div className="jq-hero__left">
              <Reveal as="div">
                <div className="jq-kicker">ACCOMPAGNEMENT</div>

                <h1 className="jq-title">
                  <span className="jq-title__line1">ACCOMPAGNEMENT</span>
                  <br />
                  <span className="jq-title--accent">3 À 6 MOIS</span>
                </h1>

                <p className="jq-subtitle">
                  Un suivi pour <strong>perdre du gras</strong> et{" "}
                  <strong>mieux se sentir</strong>, avec une approche durable
                  (pas “parfait 2 semaines puis abandon”).
                </p>

                <div className="jq-actions">
                  <a
                    className="jq-btn jq-btn--primary"
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Me contacter sur WhatsApp →
                  </a>

                  <a className="jq-btn jq-btn--ghost" href="/contact">
                    Passer par le formulaire →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Petit bloc info à droite (sans toucher au CSS global) */}
            <div className="jq-hero__right">
              <Reveal as="div">
                <div
                  className="jq-card"
                  style={{
                    maxWidth: 420,
                    width: "100%",
                    background: "rgba(18,18,20,.55)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="jq-card__corner" />
                  <div className="jq-card__stripes" />
                  <h3 className="jq-card__title">150€ / mois</h3>
                  <p className="jq-card__text" style={{ fontSize: 15 }}>
                    Durée recommandée : <strong>3 à 6 mois</strong> pour ancrer
                    des habitudes (et pas juste “faire un effort”).
                  </p>

                  <div
                    style={{
                      marginTop: 14,
                      display: "grid",
                      gap: 8,
                      color: "rgba(255,255,255,.82)",
                      fontSize: 14,
                    }}
                  >
                    <div>
                      ✅ Plan personnalisé (diète/entraînements) + ajustements
                      réguliers
                    </div>
                    <div>✅ Tracker d’habitudes</div>
                    <div>✅ Visio toutes les 2 semaines</div>
                    <div>✅ WhatsApp 7j/7</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CE QUI EST INCLUS */}
      <section className="jq-section">
        <div className="jq-container">
          <Reveal as="div">
            <h2 className="jq-h2">Ce qui est inclus</h2>
            <p className="jq-p">
              Un cadre simple, des décisions concrètes, et une progression
              régulière.
            </p>
          </Reveal>

          <Reveal as="div" className="jq-stagger">
            <div className="jq-cards">
              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <div className="jq-card__icon">🥗</div>
                <h3 className="jq-card__title">
                  Plan alimentaire/entraînements personnalisés
                </h3>
                <p className="jq-card__text">
                  Un plan qui colle à ta vraie vie (contraintes, goûts,
                  horaires) + ajustements.
                </p>
              </div>

              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <div className="jq-card__icon">📊</div>
                <h3 className="jq-card__title">Tracker d’habitudes</h3>
                <p className="jq-card__text">
                  Pas, sommeil, poids, ressentis… pour arrêter de naviguer au
                  hasard.
                </p>
              </div>

              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <div className="jq-card__icon">🎥</div>
                <h3 className="jq-card__title">Visio toutes les 2 semaines</h3>
                <p className="jq-card__text">
                  Bilan + décisions concrètes : on ajuste ce qui compte
                  vraiment.
                </p>
              </div>

              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <div className="jq-card__icon">💬</div>
                <h3 className="jq-card__title">WhatsApp 7j/7</h3>
                <p className="jq-card__text">
                  Support réactif + cadre clair. L’objectif : avancer même quand
                  c’est imparfait.
                </p>
              </div>

              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <div className="jq-card__icon">📍</div>
                <h3 className="jq-card__title">Visio + possible à domicile</h3>
                <p className="jq-card__text">
                  Suivi possible en visio + déplacements à domicile selon
                  contexte.
                </p>
              </div>

              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <div className="jq-card__icon">✅</div>
                <h3 className="jq-card__title">Approche durable</h3>
                <p className="jq-card__text">
                  Moins “parfait”, plus tenable, donc efficace.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="jq-center">
            <a
              className="jq-btn jq-btn--primary"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              Démarrer sur WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* POUR QUI / PAS POUR QUI */}
      <section className="jq-section">
        <div className="jq-container">
          <Reveal as="div">
            <h2 className="jq-h2">Pour qui ?</h2>
            <p className="jq-p">
              On gagne du temps : si tu veux un truc extrême “rapide”, ce n’est
              pas le bon endroit.
            </p>
          </Reveal>

          <Reveal as="div">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 18,
              }}
            >
              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <h3 className="jq-card__title">✅ C’est pour toi si…</h3>
                <ul
                  style={{
                    margin: "12px 0 0",
                    paddingLeft: 18,
                    color: "var(--muted)",
                  }}
                >
                  <li>Tu veux perdre du gras sans repartir dans les régimes.</li>
                  <li>Tu veux un plan adapté à ta vraie vie.</li>
                  <li>Tu veux un cadre simple + un suivi régulier.</li>
                  <li>Tu veux construire des habitudes tenables.</li>
                </ul>
              </div>

              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <h3 className="jq-card__title">❌ Pas pour toi si…</h3>
                <ul
                  style={{
                    margin: "12px 0 0",
                    paddingLeft: 18,
                    color: "var(--muted)",
                  }}
                >
                  <li>Tu veux faire un "régime" qui va finir en effet yoyo.</li>
                  <li>Tu veux du “-5 kg en 10 jours”.</li>
                  <li>Tu ne veux pas suivre un minimum de structure.</li>
                  <li>Tu veux juste une liste d’aliments sans accompagnement.</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="jq-section" style={{ background: "var(--panel2)" }}>
        <div className="jq-container">
          <Reveal as="div">
            <h2 className="jq-h2">Comment on démarre</h2>
            <p className="jq-p">Simple. Et surtout : actionnable.</p>
          </Reveal>

          <Reveal as="div">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 14,
              }}
            >
              {[
                {
                  n: "1",
                  t: "Message WhatsApp",
                  d: "Tu m’écris avec ton objectif + tes contraintes.",
                },
                {
                  n: "2",
                  t: "Premier échange (bilan)",
                  d: "On fait le point : habitudes, rythme, blocages.",
                },
                {
                  n: "3",
                  t: "Plan + tracker",
                  d: "Je construis ton plan + ton tracker d’habitudes.",
                },
                {
                  n: "4",
                  t: "Ajustements réguliers",
                  d: "On ajuste toutes les 2 semaines en visio.",
                },
              ].map((s) => (
                <div key={s.n} className="jq-card" style={{ padding: 18 }}>
                  <div
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 999,
                      display: "grid",
                      placeItems: "center",
                      background: "rgba(255,122,0,.16)",
                      color: "white",
                      fontWeight: 900,
                      marginBottom: 10,
                    }}
                  >
                    {s.n}
                  </div>
                  <h3 className="jq-card__title" style={{ marginBottom: 6 }}>
                    {s.t}
                  </h3>
                  <p className="jq-card__text">{s.d}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="jq-center" style={{ marginTop: 22 }}>
            <a
              className="jq-btn jq-btn--primary"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              Envoyer mon objectif →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="jq-section">
        <div className="jq-container">
          <Reveal as="div">
            <h2 className="jq-h2">FAQ</h2>
            <p className="jq-p">Les questions qui reviennent le plus.</p>
          </Reveal>

          <Reveal as="div">
            <div style={{ display: "grid", gap: 12 }}>
              <details className="jq-card" style={{ padding: 18 }}>
                <summary style={{ cursor: "pointer", fontWeight: 800 }}>
                  Est-ce que je dois peser tous mes aliments ?
                </summary>
                <p className="jq-card__text" style={{ marginTop: 10 }}>
                  Au début, oui. On utilise la balance comme un outil pour créer
                  des repères simples et on adapte selon ton niveau et ton
                  contexte.
                  <br />
                  L’objectif : que ça tienne dans le temps et que tu n'ai plus
                  besoin de la balance ensuite.
                </p>
              </details>

              <details className="jq-card" style={{ padding: 18 }}>
                <summary style={{ cursor: "pointer", fontWeight: 800 }}>
                  Et si j’ai des repas sociaux / sorties ?
                </summary>
                <p className="jq-card__text" style={{ marginTop: 10 }}>
                  Justement : le plan est construit pour ça. On prévoit, on
                  ajuste, et on évite le mode “tout ou rien”.
                  <br />
                  C'est pourquoi la balance est un super outil pour créer des
                  repères afin de mieux gérer les sorties.
                </p>
              </details>

              <details className="jq-card" style={{ padding: 18 }}>
                <summary style={{ cursor: "pointer", fontWeight: 800 }}>
                  Pourquoi 3 à 6 mois ?
                </summary>
                <p className="jq-card__text" style={{ marginTop: 10 }}>
                  Parce que le vrai résultat, c’est l’habitude. En dessous, tu
                  peux “faire attention”, mais pas forcément
                  <br />
                  consolider de bonnes habitudes et une nouvelle hygiène de vie.
                </p>
              </details>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL (avec photo à droite comme la Home) */}
      <section className="jq-hero" style={{ minHeight: 520 }}>
        <div className="jq-hero__overlay" />
        <div className="jq-container">
          <div className="jq-hero__grid">
            {/* TEXTE À GAUCHE */}
            <div className="jq-hero__left">
              <Reveal as="div">
                <h2 className="jq-title" style={{ fontSize: 52 }}>
                  PRÊT À <br />
                  <span className="jq-title--accent">DÉMARRER ?</span>
                </h2>

                <p className="jq-subtitle">
                  Tu m’envoies ton objectif + tes contraintes, et on fait simple.
                </p>

                <div className="jq-actions">
                  <a
                    className="jq-btn jq-btn--primary"
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Me contacter sur WhatsApp →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* PHOTO À DROITE (même rendu que la home/contact) */}
            <div className="jq-hero__right">
              <Reveal as="div">
                <div className="jq-hero__photoWrap">
                  <img
                    className="jq-hero__portrait"
                    src="/robin-physique-actuel.jpg"
                    alt="Robin - physique actuel"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
