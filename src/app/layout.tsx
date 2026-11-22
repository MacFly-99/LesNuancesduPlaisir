import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({ 
  subsets: ["latin"],
  variable: "--font-serif",
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
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased flex min-h-screen flex-col bg-background text-foreground`}>
        <Header />
        {/* flex-1 permet de pousser le footer tout en bas même si la page est courte */}
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}