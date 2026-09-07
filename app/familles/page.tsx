import type { Metadata } from "next";
import Link from "next/link";
import { families } from "../../data/families";

export const metadata: Metadata = {
  title: "Familles juives déportées",
  description: "Portraits documentés de familles juives de Lyon déportées à Auschwitz-Birkenau.",
  alternates: { canonical: "/familles" },
};

export default function FamiliesPage() {
  return (
    <main className="families-page">
      <header className="families-hero">
        <div><p className="eyebrow">Lyon et sa région · Mémoire familiale</p><h1>Des familles entières déportées</h1></div>
        <div className="families-hero__copy">
          <p>Derrière chaque nom se trouvait un foyer : des parents, des enfants, une adresse, un métier, une école et des projets. Cette rubrique rassemble les parcours familiaux établis par les archives.</p>
          <p className="families-hero__warning">Quand la cause ou la date exacte d’un décès ne sont pas connues, nous le signalons clairement.</p>
        </div>
      </header>

      <nav className="family-index" aria-label="Familles présentées">
        {families.map((family) => <a key={family.slug} href={`#${family.slug}`}><span>{family.city}</span><strong>{family.name}</strong></a>)}
      </nav>

      <div className="family-stories">
        {families.map((family) => (
          <article className="family-story" id={family.slug} key={family.slug}>
            <header className="family-story__header">
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={family.imageUrl} alt={family.imageAlt} loading="lazy" />
                <figcaption>{family.imageCredit}</figcaption>
              </figure>
              <div>
                <p className="eyebrow">{family.city} · Famille documentée</p><h2>{family.name}</h2>
                <p className="family-story__lead">{family.excerpt}</p>
                <dl className="family-facts">
                  <div><dt>Adresse</dt><dd>{family.address}</dd></div>
                  <div><dt>Déportation</dt><dd>{family.deportation}</dd></div>
                  <div><dt>Destination</dt><dd>{family.camp}</dd></div>
                </dl>
              </div>
            </header>
            <section className="family-members" aria-label={`Membres de la ${family.name}`}>
              {family.members.map((member) => (
                <div className="family-member" key={member.name}>
                  <span>{member.role}</span><h3>{member.name}</h3><p>{member.birth}</p><strong>{member.age}</strong><p className="family-member__fate">{member.fate}</p>
                </div>
              ))}
            </section>
            <section className="family-story__text">
              {family.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {family.archivalNote ? <aside><strong>Précision des archives</strong>{family.archivalNote}</aside> : null}
              <p className="family-source">{family.imageCredit}. <a href={family.sourceUrl} target="_blank" rel="noreferrer">Consulter les documents d’archives ↗</a></p>
            </section>
          </article>
        ))}
      </div>
      <div className="families-back"><Link className="button button--outline" href="/#portraits">Revenir aux portraits d’enfants</Link></div>
    </main>
  );
}
