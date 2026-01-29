import "./globals.css";

export const metadata = {
  title: "Centre de publication",
  description: "Plateforme de publication pour tous, toutes les langues"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
          <header style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <a href="/" style={{ fontWeight: 700, textDecoration: "none" }}>
              Centre de publication
            </a>
            <nav style={{ marginLeft: "auto", display: "flex", gap: 12 }}>
              <a href="/publish">Publier</a>
              <a href="/auth">Connexion</a>
            </nav>
          </header>
          <hr style={{ margin: "16px 0" }} />
          {children}
        </div>
      </body>
    </html>
  );
}
