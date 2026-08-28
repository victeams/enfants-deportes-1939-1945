import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { portraits } from "../data/portraits.ts";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const portraitsDirectory = join(projectRoot, "portraits");
const githubBase = "https://victeams.github.io/enfants-deportes-1939-1945";
const formerSiteBase = "https://enfants-deportes-1939-1945.fdhrddsveg.chatgpt.site";

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

function portraitPage(portrait) {
  const canonical = `${githubBase}/portraits/${portrait.slug}.html`;
  const facts = [
    ["Naissance", `${portrait.birthDate}, ${portrait.birthPlace}`],
    ["Âge", portrait.ageLabel],
    ["Déportation", portrait.camp],
    ["Destin", portrait.outcome],
    portrait.deathDate
      ? ["Décès", `${portrait.deathDate}${portrait.deathPlace ? `, ${portrait.deathPlace}` : ""}`]
      : null,
  ].filter(Boolean);

  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(portrait.name)} · Enfants déportés 1939-1945</title>
    <meta name="description" content="${escapeHtml(portrait.excerpt)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:title" content="${escapeHtml(portrait.name)}" />
    <meta property="og:description" content="${escapeHtml(portrait.excerpt)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${escapeHtml(portrait.imageUrl)}" />
    <style>
      :root { color-scheme: dark; --paper:#11110f; --raised:#191815; --ink:#eeeae1; --muted:#b7b0a4; --line:#37332d; --gold:#d7bd8d; --wine:#5b2428; }
      * { box-sizing:border-box; }
      body { margin:0; background:var(--paper); color:var(--ink); font-family:Inter,system-ui,-apple-system,"Segoe UI",sans-serif; line-height:1.7; }
      a { color:inherit; }
      header, main, footer { width:min(980px,calc(100% - 1.4rem)); margin-inline:auto; }
      .site-header { display:flex; justify-content:space-between; align-items:center; min-height:64px; border-bottom:1px solid var(--line); }
      .brand, .back { color:var(--gold); text-decoration:none; }
      main { padding:clamp(2rem,7vw,5rem) 0; }
      article { overflow:hidden; border:1px solid var(--line); background:var(--raised); }
      .hero { display:grid; grid-template-columns:minmax(280px,.8fr) minmax(0,1.2fr); }
      figure { display:grid; place-items:center; margin:0; padding:1.2rem; background:#0d0d0b; }
      figure img { width:100%; max-height:620px; object-fit:contain; }
      .identity { padding:clamp(1.5rem,5vw,3.5rem); }
      .eyebrow { color:var(--gold); font-size:.72rem; font-weight:700; letter-spacing:.16em; text-transform:uppercase; }
      h1 { margin:.6rem 0 1rem; font-family:Georgia,serif; font-size:clamp(2.7rem,7vw,5.5rem); font-weight:400; line-height:1.05; }
      .lead { color:#d1cbc0; font-family:Georgia,serif; font-size:1.15rem; }
      dl { display:grid; gap:.7rem; margin:2rem 0 0; }
      dl div { display:grid; grid-template-columns:110px 1fr; gap:1rem; padding-top:.7rem; border-top:1px solid var(--line); }
      dt { color:var(--muted); font-size:.72rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; }
      dd { margin:0; }
      .story { padding:clamp(1.5rem,5vw,3.5rem); border-top:1px solid var(--line); }
      .story p { max-width:760px; margin:0 auto 1.15rem; font-family:Georgia,serif; font-size:clamp(1.05rem,2vw,1.2rem); }
      .source { max-width:760px; margin:2rem auto 0; padding-top:1rem; border-top:1px solid var(--line); color:var(--muted); font-size:.85rem; }
      .source a { color:var(--gold); }
      footer { padding:2rem 0; border-top:1px solid var(--line); color:var(--muted); font-size:.8rem; }
      @media (max-width:720px) { .hero { grid-template-columns:1fr; } dl div { grid-template-columns:1fr; gap:.2rem; } }
    </style>
  </head>
  <body>
    <header class="site-header">
      <a class="brand" href="../">✦ Enfants déportés</a>
      <a class="back" href="../#portraits">← Tous les portraits</a>
    </header>
    <main>
      <article>
        <section class="hero">
          <figure><img src="${escapeHtml(portrait.imageUrl)}" alt="${escapeHtml(portrait.imageAlt)}" /></figure>
          <div class="identity">
            <p class="eyebrow">Portrait documenté</p>
            <h1>${escapeHtml(portrait.name)}</h1>
            <p class="lead">${escapeHtml(portrait.excerpt)}</p>
            <dl>${facts.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl>
          </div>
        </section>
        <section class="story">
          ${portrait.biography.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("\n          ")}
          <p class="source">${escapeHtml(portrait.imageCredit)}. <a href="${escapeHtml(portrait.sourceUrl)}" target="_blank" rel="noreferrer">Consulter la notice d’archive</a></p>
        </section>
      </article>
    </main>
    <footer>Enfants déportés 1939-1945 · Mémoire, documentation, transmission.</footer>
  </body>
</html>\n`;
}

await mkdir(portraitsDirectory, { recursive: true });

for (const portrait of portraits) {
  await writeFile(
    join(portraitsDirectory, `${portrait.slug}.html`),
    portraitPage(portrait),
    "utf8",
  );
}

const indexPath = join(projectRoot, "index.html");
let indexHtml = await readFile(indexPath, "utf8");
indexHtml = indexHtml
  .replaceAll(`${formerSiteBase}/social-card.jpg`, `${githubBase}/social-card.jpg`)
  .replaceAll(`${formerSiteBase}/galerie`, `${githubBase}/#portraits`)
  .replaceAll(`${formerSiteBase}/#hommages`, `${githubBase}/#memoire`)
  .replaceAll(`${formerSiteBase}/#soutenir`, `${githubBase}/#memoire`)
  .replace(
    new RegExp(`${formerSiteBase.replaceAll(".", "\\.")}/portraits/([a-z0-9-]+)`, "g"),
    `${githubBase}/portraits/$1.html`,
  )
  .replaceAll(formerSiteBase, `${githubBase}/`)
  .replace('<section class="memory">', '<section class="memory" id="memoire">');
await writeFile(indexPath, indexHtml, "utf8");

const portraitFiles = (await readdir(portraitsDirectory))
  .filter((name) => name.endsWith(".html"))
  .sort((a, b) => a.localeCompare(b, "fr"));
const urls = [
  `${githubBase}/`,
  ...portraitFiles.map((name) => `${githubBase}/portraits/${name}`),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((url) => `  <url><loc>${escapeHtml(url)}</loc></url>`)
  .join("\n")}\n</urlset>\n`;

await writeFile(join(projectRoot, "sitemap.xml"), sitemapXml, "utf8");
await writeFile(join(projectRoot, "sitemap-google.txt"), `${urls.join("\n")}\n`, "utf8");

console.log(`GitHub Pages prêt : ${portraits.length} portraits de bébés, ${urls.length} URL dans les sitemaps.`);
