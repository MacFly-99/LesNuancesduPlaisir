import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
        
        {/* Bloc Identité */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <p className="font-serif text-xl font-semibold text-secondary mb-2">Les Nuances du Plaisir</p>
          <p className="text-sm text-muted-foreground">Sexothérapie & Guérison</p>
        </div>

        {/* Bloc Infos Contact */}
        <div className="flex flex-col items-center text-sm text-muted-foreground gap-1 text-center">
          <p>9 Route des Terments</p>
          <p>01260 Haut Valromey</p>
          <p>Lundi-Vendredi : 9h - 17h</p>
          <p className="font-medium text-foreground mt-2">+33 6 51 40 34 15</p>
        </div>

        {/* Bloc Légal */}
        <div className="flex flex-col items-center md:items-end text-sm text-muted-foreground gap-2 text-center md:text-right">
          <Link href="/mentions-legales" className="hover:text-primary transition-colors">Mentions légales</Link>
          <Link href="/confidentialite" className="hover:text-primary transition-colors">Politique de confidentialité</Link>
          <p className="mt-2 text-xs">© {new Date().getFullYear()} Tous droits réservés.</p>
        </div>

      </div>
    </footer>
  );
}