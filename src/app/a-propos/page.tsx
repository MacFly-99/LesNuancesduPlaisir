import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { Heart, Sparkles, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "À propos | Les Nuances du Plaisir",
  description: "Découvrez mon parcours, ma philosophie et mon approche de la sexothérapie.",
};

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      
      {/* EN-TÊTE DE PAGE */}
      <section className="relative py-20 md:py-32 text-center px-4">
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-secondary mb-6 leading-tight">
            À propos de <br className="hidden md:block"/>
            <span className="text-primary italic font-light">mon parcours</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Un cheminement personnel et professionnel dédié à l'humain, au plaisir et à la guérison.
          </p>
        </FadeIn>
      </section>

      {/* SECTION CONTENU PRINCIPAL */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Texte */}
            <FadeIn delay={0.2} className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Une vocation née d'une évidence
              </h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Depuis mes 16 ans, j'ai tout de suite été attiré par l'aide que je pouvais apporter aux autres. Mes proches me voyaient comme quelqu'un à qui poser des questions diverses et en tout genre semblait facile.
                </p>
                <p>
                  Naturellement, l'envie de partager des moments personnalisés avec l'humanité m'a semblé être plus qu'une vocation. Je me suis alors renseigné sur tous les métiers possibles en accord avec ma personnalité et mes talents, ayant toujours été un jeune homme sans tabous ni jugement.
                </p>
                <p>
                  Je me suis alors consacré à renforcer les bases déjà acquises en autodidacte afin d'élargir mes compétences pour accompagner un plus grand nombre de personnes sur des sujets bien plus précis.
                </p>
              </div>

              <div className="mt-10 p-6 bg-sage-light/30 rounded-2xl border-l-4 border-sage">
                <p className="text-secondary italic font-medium text-lg">
                  "J'estime que tout un chacun a le droit à une sexualité plus qu'épanouie et participer à cet essor dans la vie d'autrui est pour moi une évidence."
                </p>
              </div>
            </FadeIn>

            {/* Image (On réutilise abstract.jpg ou une autre) */}
            <FadeIn delay={0.4} className="order-1 lg:order-2 relative h-100 md:h-150 rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/abstract.jpg" 
                alt="Approche sensorielle et spirituelle" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* SECTION PHILOSOPHIE (3 piliers) */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
              Ma philosophie
            </h2>
            <p className="text-lg text-muted-foreground">
              La sexothérapie que je propose s'articule autour de trois grands piliers pour vous accompagner vers l'harmonie.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 h-full text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Bienveillance</h3>
                <p className="text-muted-foreground">
                  Un espace sans tabous, sans hontes et sans jugements, où vous pouvez vous exprimer en toute sécurité.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 h-full text-center">
                <div className="mx-auto w-16 h-16 bg-sage-light text-sage-dark rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Spiritualité</h3>
                <p className="text-muted-foreground">
                  Une approche holistique qui unit le corps et l'esprit pour libérer votre authenticité et vos désirs.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 h-full text-center">
                <div className="mx-auto w-16 h-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Confidentialité</h3>
                <p className="text-muted-foreground">
                  Des séances en présentiel ou en distanciel, dans le strict respect de votre intimité et de votre vie privée.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-secondary text-center px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Prêt(e) à écrire une nouvelle page ?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Que vous soyez seul(e) ou en couple, je vous accompagne dans votre quête d'harmonie.
          </p>
          <Link href="/rendez-vous" className="cursor-pointer">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg cursor-pointer">
              Prendre rendez-vous
            </Button>
          </Link>
        </FadeIn>
      </section>

    </main>
  );
}