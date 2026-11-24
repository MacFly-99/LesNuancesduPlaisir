import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  // On définit une URL de base pour que les liens relatifs fonctionnent bien
  metadataBase: new URL("https://lesnuancesduplaisir.vercel.app"),
  title: {
    default: "Les Nuances du Plaisir | Sexothérapie & Guérison",
    template: "%s | Les Nuances du Plaisir", // Ajoute le nom du site sur les autres pages
  },
  description: "Accompagnement en sexothérapie pour une vie intime épanouie. Séances individuelles, en couple, présentiel ou distanciel.",
  keywords: ["sexothérapie", "sexothérapeute", "thérapie de couple", "guérison", "bien-être intime", "Haut Valromey"],
  authors: [{ name: "Les Nuances du Plaisir" }],
  creator: "Les Nuances du Plaisir",
  
  // --- OPEN GRAPH (Partage sur les réseaux sociaux) ---
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lesnuancesduplaisir.vercel.app",
    title: "Les Nuances du Plaisir | Sexothérapie & Guérison",
    description: "Un accompagnement bienveillant pour votre vie intime, alliant spiritualité et sexualité.",
    siteName: "Les Nuances du Plaisir",
    images: [
      {
        url: "/logo.png", // On utilise le logo comme image de partage
        width: 1200,
        height: 630,
        alt: "Les Nuances du Plaisir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Les Nuances du Plaisir | Sexothérapie",
    description: "Un accompagnement bienveillant pour votre vie intime.",
    images: ["/logo.png"],
  },
  
  // --- VÉRIFICATION GOOGLE SEARCH CONSOLE ---
  verification: {
    google: "U49wJMUJn_r5yIm-OmTaELvfNxc8FvBSlUQG7TD4KV4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased flex min-h-screen flex-col bg-background text-foreground`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}