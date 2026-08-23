import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const title = "Enfants déportés 1939-1945";
const description =
  "Un mémorial numérique consacré aux enfants déportés pendant la Seconde Guerre mondiale, à leurs visages, leurs familles et leurs histoires.";
const siteUrl = "https://enfants-deportes-1939-1945.fdhrddsveg.chatgpt.site";
const githubPagesUrl = "https://victeams.github.io/enfants-deportes-1939-1945/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · " + title,
  },
  description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: title,
    images: [
      {
        url: "/social-card.jpg",
        width: 1200,
        height: 628,
        alt: "Enfants déportés 1939-1945 — Leurs visages. Leurs histoires. Notre mémoire.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/social-card.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <header className="site-header">
          <Link className="site-brand" href="/" aria-label="Accueil du mémorial">
            <span className="site-brand__mark" aria-hidden="true">✦</span>
            <span>Enfants déportés</span>
          </Link>
          <nav aria-label="Navigation principale">
            <Link href="/#portraits">Portraits</Link>
            <Link href="/galerie">Galerie</Link>
            <Link href="/#comprendre">Comprendre</Link>
            <Link href="/#hommages">Hommages</Link>
            <Link href="/#soutenir">Soutenir</Link>
            <a
              className="site-switch"
              href={githubPagesUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Pages <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </header>
        <div id="contenu">{children}</div>
        <footer className="site-footer">
          <p>Enfants déportés 1939-1945 · Mémoire, documentation, transmission.</p>
          <p>
            <a href={githubPagesUrl}>Version GitHub Pages</a>
            <span aria-hidden="true"> · </span>
            Aucune publicité. Aucun profilage publicitaire.
          </p>
        </footer>
      </body>
    </html>
  );
}
