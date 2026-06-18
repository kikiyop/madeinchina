import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}

        <footer className="mt-auto border-t border-border">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-6 py-8 text-xs text-faint sm:flex-row sm:justify-between">
            <span>
              © MadeInChina.{" "}
              <span className="text-faint/70">AI estimates, not verified quotes.</span>
            </span>
            <nav className="flex gap-5">
              <a className="transition-colors hover:text-foreground" href="/">
                Home
              </a>
              <a className="transition-colors hover:text-foreground" href="/about">
                About
              </a>
              <a className="transition-colors hover:text-foreground" href="/contact">
                Contact
              </a>
              <a className="transition-colors hover:text-foreground" href="/privacy">
                Privacy
              </a>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
