import Reveal from "../components/Reveal";

export const metadata = {
  title: "À propos | Robin LE PUILL",
  description:
    "À propos de Robin LE PUILL, diététicien à Six-Fours-les-Plages : approche durable, personnalisation, suivi en visio et déplacements à domicile.",
};

const WHATSAPP = "https://wa.me/33751013960";
const INSTAGRAM = "https://www.instagram.com/robindiet/";

function FadedCardBackground({
  src,
  alt,
  objectPosition = "right center",
  opacity = 0.5,
}: {
  src: string;
  alt: string;
  objectPosition?: string;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        overflow: "hidden",
        borderRadius: 18,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition,
          opacity,
          filter: "blur(1px) saturate(1.05) contrast(1.05)",
          transform: "scale(1.03)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,.90) 0%, rgba(0,0,0,.70) 48%, rgba(0,0,0,.35) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,.20) 0%, rgba(0,0,0,.65) 100%)",
        }}
      />
    </div>
  );
}

export default function Page() {
  return (
    <>
      {/* HERO (comme Home/Contact : texte à gauche + photo à droite) */}
      <section className="jq-hero" style={{ minHeight: 520 }}>
        <div className="jq-hero__overlay" />

        <div className="jq-container">
          <div className="jq-hero__grid">
            {/* TEXTE À GAUCHE */}
            <div className="jq-hero__left">
              <Reveal as="div">
                <div className="jq-kicker">À PROPOS</div>

                <h1 className="jq-title" style={{ fontSize: 56 }}>
                  UN CADRE <br />
                  <span className="jq-title--accent">QUI TIENT</span>
                </h1>

                <p className="jq-subtitle" style={{ maxWidth: 820 }}>
                  Je m’appelle <strong>Robin LE PUILL</strong>, diététicien.
                  J’accompagne surtout les <strong>hommes de 28 à 40 ans</strong>{" "}
                  (souvent occupés) qui veulent <strong>perdre du poids</strong>{" "}
                  ou faire une <strong>recomposition corporelle</strong> — sans
                  retomber dans le schéma “parfait 2 semaines puis abandon”.
                </p>

                <div className="jq-actions">
                  <a className="jq-btn jq-btn--primary" href="/accompagnement">
                    Voir l’accompagnement →
                  </a>
                  <a
                    className="jq-btn jq-btn--ghost"
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                  >
                    M’écrire sur WhatsApp →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* PHOTO À DROITE (même rendu que la Home) */}
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

      {/* POUR QUI / OBJECTIF */}
      <section className="jq-section">
        <div className="jq-container">
          <Reveal as="div">
            <h2 className="jq-h2">Ce que je fais (concrètement)</h2>
            <p className="jq-p">
              Tu veux un résultat visible, mais tu n’as pas le temps (ni l’envie)
              de vivre comme un moine. Normal.
            </p>
          </Reveal>

          <Reveal as="div" className="jq-stagger">
            <div className="jq-cards">
              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <div className="jq-card__icon">🎯</div>
                <h3 className="jq-card__title">Objectif</h3>
                <p className="jq-card__text">
                  Typiquement <strong>-5 à -10 kg en ~3 mois</strong> (selon ton
                  point de départ), puis on continue sur une recomposition
                  corporelle stable.
                </p>
              </div>

              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <div className="jq-card__icon">🧱</div>
                <h3 className="jq-card__title">Cadre & repères</h3>
                <p className="jq-card__text">
                  Un plan qui colle à ta vraie vie + des repères simples. Pas une
                  liste d’aliments “parce que c’est healthy”.
                </p>
              </div>

              <div className="jq-card">
                <div className="jq-card__corner" />
                <div className="jq-card__stripes" />
                <div className="jq-card__icon">🔁</div>
                <h3 className="jq-card__title">Ajustements</h3>
                <p className="jq-card__text">
                  On ajuste régulièrement : c’est ça qui fait tenir. Le “plan
                  parfait” figé, ça ne marche pas.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal as="div">
            <div className="jq-card" style={{ padding: 18, marginTop: 18 }}>
              <div className="jq-card__corner" />
              <div className="jq-card__stripes" />
              <h3 className="jq-card__title">❌ Ce que je ne fais pas</h3>
              <ul
                style={{
                  margin: "10px 0 0",
                  paddingLeft: 18,
                  color: "var(--muted)",
                }}
              >
                <li>Le “-5 kg en 10 jours”.</li>
                <li>
                  Les plans extrêmes (zéro gras / zéro glucides / 2 entraînements
                  par jour…).
                </li>
                <li>Le tout-ou-rien qui finit en effet yoyo.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STORY */}
      <section className="jq-section" style={{ background: "var(--panel2)" }}>
        <div className="jq-container">
          <Reveal as="div">
            <h2 className="jq-h2">Pourquoi je fais ça</h2>
            <p className="jq-p">
              Parce que j’ai changé ma vie avec des choses très simples :{" "}
              <strong>un cadre</strong>, des <strong>repères</strong>, et de la{" "}
              <strong>progressivité</strong>. Et surtout… parce que j’ai commencé
              exactement comme beaucoup : mal.
            </p>
          </Reveal>

          <Reveal as="div">
            {/* 1) AVANT : grand bloc pleine largeur */}
            <div
              className="jq-card"
              style={{ padding: 18, position: "relative", overflow: "hidden" }}
            >
              <div
                className="jq-card__corner"
                style={{ zIndex: 2, pointerEvents: "none" }}
              />
              {/* IMPORTANT : stripes au-dessus de la photo, MAIS sous le texte */}
              <div
                className="jq-card__stripes"
                style={{ zIndex: 2, pointerEvents: "none" }}
              />

              <div
                style={{
                  marginTop: 10,
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) 290px",
                  gap: 12,
                  alignItems: "start",
                }}
              >
                {/* TEXTE : au-dessus de tout */}
                <div style={{ position: "relative", zIndex: 3, minWidth: 0 }}>
                  <h3 className="jq-card__title">Le “avant” (le vrai)</h3>

                  <p className="jq-card__text" style={{ marginTop: 10 }}>
                    Lycée : j’étais fumeur (cigarettes + shit), je buvais
                    quasiment pas d’eau, et mon alimentation c’était souvent le
                    combo “macdo 1x/semaine + kebab 1x/semaine + le reste au
                    feeling”.
                    <br />
                    <br />
                    Le détail qui résume bien : à la place de l’eau, j’étais
                    plutôt <strong>Oasis / Ice Tea</strong>. Et niveau sommeil :
                    horaires éclatés, parfois nuit blanche à jouer. Résultat :{" "}
                    <strong>je me sentais mal</strong>, j’étais complexé, et
                    j’avais <strong>un cardio catastrophique</strong>… alors que
                    j’avais fait du sport toute ma vie.
                  </p>

                  {/* Déclic + Erreurs à l’intérieur du même bloc */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 12,
                      marginTop: 14,
                    }}
                  >
                    <div
                      className="jq-card"
                      style={{
                        padding: 14,
                        background: "rgba(0,0,0,.20)",
                        border: "1px solid rgba(255,255,255,.08)",
                      }}
                    >
                      <h4
                        className="jq-card__title"
                        style={{ fontSize: 16, marginBottom: 6 }}
                      >
                        Déclic
                      </h4>
                      <p className="jq-card__text" style={{ margin: 0 }}>
                        Le confinement a été mon point de bascule : j’en avais
                        marre de me sentir nul dans mon corps. J’ai voulu me
                        “reprendre en main” — et j’ai fait comme tout le monde :
                        à fond… trop vite, trop fort, trop extrême.
                      </p>
                    </div>

                    <div
                      className="jq-card"
                      style={{
                        padding: 14,
                        background: "rgba(0,0,0,.20)",
                        border: "1px solid rgba(255,255,255,.08)",
                      }}
                    >
                      <h4
                        className="jq-card__title"
                        style={{ fontSize: 16, marginBottom: 6 }}
                      >
                        Mes erreurs (classiques)
                      </h4>
                      <ul
                        style={{
                          margin: 0,
                          paddingLeft: 18,
                          color: "var(--muted)",
                        }}
                      >
                        <li>Régimes extrêmes, “tout propre” du jour au lendemain.</li>
                        <li>Suppression totale d’un macro (gras, puis glucides…).</li>
                        <li>Obsession des protéines comme si ça réglait tout.</li>
                        <li>Entraînements trop fréquents, pas assez de récupération.</li>
                        <li>“Si je lâche 1 jour, j’ai tout foutu en l’air.”</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* PHOTO : sous le cercle orange */}
                <div
                  style={{
                    justifySelf: "end",
                    width: 290,
                    aspectRatio: "3 / 4",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,.10)",
                    background: "rgba(0,0,0,.25)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <img
                    src="/robin-avant-alcool.png"
                    alt="Robin - avant : mauvaises habitudes"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      objectPosition: "50% 25%",
                    }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PREUVES */}
      <section className="jq-section">
        <div className="jq-container">
          <Reveal as="div">
            <h2 className="jq-h2">Crédibilité</h2>
            <p className="jq-p">Des faits. Pas des “promesses”.</p>
          </Reveal>

          {/* EXPÉRIENCE & PREUVES */}
          <Reveal as="div">
            <div className="jq-card" style={{ padding: 18, marginTop: 18 }}>
              <div className="jq-card__corner" />
              <div className="jq-card__stripes" />
              <h3 className="jq-card__title">Expérience & preuves</h3>

              <ul
                style={{
                  margin: "10px 0 0",
                  paddingLeft: 18,
                  color: "var(--muted)",
                }}
              >
                <li>Coaching “terrain” depuis mes 16 ans, officiellement depuis 2023.</li>
                <li>
                  Environ{" "}
                  <strong style={{ color: "var(--text)" }}>30+ transformations</strong>{" "}
                  (hommes principalement).
                </li>
                <li>
                  Transformation perso :{" "}
                  <strong style={{ color: "var(--text)" }}>+20 kg secs en 3 ans</strong>{" "}
                  et{" "}
                  <strong style={{ color: "var(--text)" }}>-10 kg en 3 mois</strong>.
                </li>
                <li>
                  <strong style={{ color: "var(--text)" }}>8e Français aviron indoor</strong>{" "}
                  (2026) — senior poids léger (-75 kg).
                </li>
              </ul>
            </div>
          </Reveal>

          {/* SPORT : pourquoi j’en parle (et pourquoi ça compte) */}
          <Reveal as="div">
            <div
              className="jq-card"
              style={{
                padding: 18,
                marginTop: 18,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div className="jq-card__corner" style={{ zIndex: 3, pointerEvents: "none" }} />
              <div className="jq-card__stripes" style={{ zIndex: 3, pointerEvents: "none" }} />

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.35fr .65fr",
                  gap: 16,
                  alignItems: "start",
                }}
              >
                <div style={{ position: "relative", zIndex: 4 }}>
                  <h3 className="jq-card__title">
                    Sport : pourquoi j’en parle (et pourquoi ça compte)
                  </h3>

                  <p className="jq-card__text" style={{ marginTop: 10 }}>
                    Parce que je sais ce que c’est de construire un corps et des
                    performances dans le monde réel : emploi du temps chargé,
                    fatigue, imprévus. Le but ici n’est pas de faire de toi un
                    athlète pro — mais d’être <strong>en forme</strong>,{" "}
                    <strong>solide</strong>, et <strong>constant</strong>.
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
                      ✅ <strong>8e Français aviron indoor</strong> (2026) —
                      senior poids léger (-75 kg)
                    </div>
                    <div>
                      ✅ Streetlifting : <strong>175 kg squat</strong> •{" "}
                      <strong>100 kg dips</strong> •{" "}
                      <strong>65 kg tractions</strong> •{" "}
                      <strong>+10 kg muscle up</strong>
                    </div>
                    <div>
                      ✅ Streetworkout : <strong>straddle planche</strong> •{" "}
                      <strong>front lever</strong> • <strong>handstand</strong>
                    </div>
                    <div>
                      ✅ Endurance : <strong>100 km vélo</strong> •{" "}
                      <strong>semi-marathon</strong> (~5’44/km)
                    </div>
                    <div>✅ Passif multi-sports : foot (+10 ans), natation, MMA, tennis…</div>
                  </div>

                  <p className="jq-card__text" style={{ marginTop: 12 }}>
                    Tout ça pour dire : je connais le terrain. Et je sais surtout
                    que ce qui fait la différence, ce n’est pas une semaine
                    parfaite — c’est un cadre que tu répètes.
                  </p>
                </div>

                <div
                  style={{
                    justifySelf: "end",
                    width: "100%",
                    maxWidth: 320,
                    aspectRatio: "3 / 4",
                    borderRadius: 16,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,.10)",
                    background: "rgba(0,0,0,.25)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,.10) 0%, rgba(0,0,0,.40) 100%)",
                      pointerEvents: "none",
                      zIndex: 1,
                    }}
                  />

                  <img
                    src="/robin-20kg-apres.jpg"
                    alt="Robin - physique actuel"
                    style={{
                      position: "relative",
                      zIndex: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "50% 85%",
                      display: "block",
                      transform: "scale(1.08)",
                      filter: "drop-shadow(0 18px 40px rgba(0,0,0,.55))",
                      opacity: 0.95,
                    }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMMENT DÉMARRER */}
      <section className="jq-section" style={{ background: "var(--panel2)" }}>
        <div className="jq-container">
          <Reveal as="div">
            <h2 className="jq-h2">Comment on démarre</h2>
            <p className="jq-p">Simple. Actionnable. Et on avance.</p>
          </Reveal>

          <Reveal as="div">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
              {[
                { n: "1", t: "Message WhatsApp", d: "Tu m’écris avec ton objectif + tes contraintes + ton rythme de vie." },
                { n: "2", t: "Premier échange (bilan)", d: "On clarifie le vrai problème : habitudes, blocages, emploi du temps, priorités." },
                { n: "3", t: "Plan + tracker", d: "Je construis ton plan + ton tracker d’habitudes (sommeil, pas, etc.)." },
                { n: "4", t: "Ajustements réguliers", d: "On ajuste toutes les 2 à 4 semaines : décisions simples, progression visible." },
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
            <a className="jq-btn jq-btn--primary" href={WHATSAPP} target="_blank" rel="noreferrer">
              Envoyer mon objectif →
            </a>
          </div>
        </div>
      </section>

            {/* CTA FINAL (même rendu que Home/Contact : texte à gauche + photo à droite) */}
      <section className="jq-hero" style={{ minHeight: 420 }}>
        <div className="jq-hero__overlay" />

        <div className="jq-container">
          <div className="jq-hero__grid">
            {/* TEXTE À GAUCHE */}
            <div className="jq-hero__left">
              <Reveal as="div">
                <h2 className="jq-title" style={{ fontSize: 52 }}>
                  TU VEUX UN <br />
                  <span className="jq-title--accent">PLAN QUI TIENT ?</span>
                </h2>

                <p className="jq-subtitle" style={{ maxWidth: 760 }}>
                  Tu m’écris ton objectif + tes contraintes, et on part sur quelque
                  chose de simple et actionnable.
                </p>

                <div className="jq-actions">
                  <a
                    className="jq-btn jq-btn--primary"
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                  >
                    M’écrire sur WhatsApp →
                  </a>
                  <a
                    className="jq-btn jq-btn--ghost"
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Voir Instagram →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* PHOTO À DROITE */}
            <div className="jq-hero__right">
              <Reveal as="div">
                <div className="jq-hero__photoWrap jq-hero__photoWrap--aproposCta">
  <img
    className="jq-hero__portrait"
    src="/robin-plan.jpg"
    alt="Robin - plan qui tient"
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
