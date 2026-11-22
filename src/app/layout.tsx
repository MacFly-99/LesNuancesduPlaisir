import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// Configuration des polices
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans", // Police pour le texte normal
});

const fraunces = Fraunces({ 
  subsets: ["latin"],
  variable: "--font-serif", // Police pour les titres
});

export const metadata: Metadata = {
  title: "Les Nuances du Plaisir | Sexothérapie & Guérison",
  description: "Accompagnement en sexothérapie pour une vie intime épanouie. Séances individuelles, en couple, présentiel ou distanciel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}