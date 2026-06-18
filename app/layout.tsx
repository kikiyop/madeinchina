import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const DESCRIPTION =
  "The premium, independent AI tool for international importers. Estimate factory-gate costs and discover China's leading manufacturing hubs in seconds.";

export const metadata: Metadata = {
  metadataBase: new URL("https://madeinchina.info"),
  title: "Industrial Supplier Cost Audit | MadeInChina.info",
  description: DESCRIPTION,
  applicationName: "MadeInChina",
  keywords: [
    "manufacturing cost",
    "made in china",
    "sourcing",
    "import",
    "production cost estimator",
    "trade audit",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://madeinchina.info" },
  openGraph: {
    title: "Industrial Supplier Cost Audit | MadeInChina.info",
    description: DESCRIPTION,
    url: "https://madeinchina.info",
    siteName: "MadeInChina",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Supplier Cost Audit | MadeInChina.info",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}

        <footer className="relative z-10 mt-auto border-t border-border">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-3 px-6 py-6 font-mono text-[11px] uppercase tracking-[0.18em] text-faint sm:flex-row sm:justify-between">
            <span>© MadeInChina.info — AI estimates, not verified quotes</span>
            <nav className="flex gap-6">
              <a className="transition-colors hover:text-accent-bright" href="/">
                Home
              </a>
              <a className="transition-colors hover:text-accent-bright" href="/about">
                About
              </a>
              <a className="transition-colors hover:text-accent-bright" href="/contact">
                Contact
              </a>
              <a className="transition-colors hover:text-accent-bright" href="/privacy">
                Privacy
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
