import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const title = "Enfants déportés 1939-1945";
const description =
  "Un mémorial numérique consacré aux enfants déportés pendant la Seconde Guerre mondiale, à leurs visages, leurs familles et leurs histoires.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: "%s · " + title,
  },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "fr_FR",
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
          </nav>
        </header>
        <div id="contenu">{children}</div>
        <footer className="site-footer">
          <p>Enfants déportés 1939-1945 · Mémoire, documentation, transmission.</p>
          <p>Aucune publicité. Aucun profilage publicitaire.</p>
        </footer>
      </body>
    </html>
  );
}
