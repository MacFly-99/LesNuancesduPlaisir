import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Section Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[75vh] px-4 py-20 md:py-32 text-center">
        
        {/* Petit tag au dessus */}
        <span className="mb-6 inline-block rounded-full bg-sage-light px-4 py-1.5 text-xs md:text-sm font-medium text-sage-dark">
          Sexothérapie & Guérison
        </span>

        {/* Le gros titre */}
        <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-7xl font-bold text-secondary mb-6 leading-[1.15] md:leading-tight">
          Révélez vos désirs, <br className="hidden md:block" />
          <span className="text-primary italic font-light">libérez votre authenticité.</span>
        </h1>

        {/* Le sous-titre */}
        <p className="max-w-2xl text-base md:text-xl text-muted-foreground mb-10 px-2 md:px-0">
          Un accompagnement bienveillant pour votre vie intime, alliant spiritualité et sexualité. 
          Séances en présentiel ou en distanciel.
        </p>

        {/* Les boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Link href="/rendez-vous" className="w-full sm:w-auto">
            <Button size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Organiser votre rencontre
            </Button>
          </Link>
          <Link href="/accompagnements" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full rounded-full border-sage text-sage-dark hover:bg-sage-light hover:text-sage-dark transition-colors">
              Découvrir les séances
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}