import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { services } from "@/data/services";
import { ArrowRight, Heart, Sparkles, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
  title: "Accompagnements | Les Nuances du Plaisir",
  description: "Découvrez mes séances de sexothérapie : individuel, couple, en présentiel ou distanciel.",
};

export default function AccompagnementsPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      
      {/* EN-TÊTE DE PAGE */}
      <section className="relative py-20 md:py-32 text-center px-4">
        <FadeIn>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-secondary mb-6 leading-tight">
            Mes <span className="text-primary italic font-light">accompagnements</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Des séances sur-mesure pour vous reconnecter à vos désirs et retrouver l'harmonie intérieure. 
            En présentiel (Haut Valromey) ou en distanciel.
          </p>
        </FadeIn>
      </section>

      {/* SECTION SERVICES DÉTAILLÉS */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={0.1 * index} className="h-full">
                
                {/* CARTE CLIQUABLE */}
                <Link 
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="block h-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-sage rounded-3xl"
                >
                  <div className="flex flex-col h-full bg-white rounded-3xl border border-border/60 shadow-sm overflow-hidden group hover:shadow-[0_20px_40px_-15px_rgba(74,44,63,0.1)] hover:border-primary/30 transition-all duration-300 hover:-translate-y-2">
                    
                    {/* Header de la carte */}
                    <div className="p-8 pb-6 border-b border-border/40 bg-white relative overflow-hidden">
                      {/* Effet de halo au survol en arrière-plan */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors duration-500"></div>
                      
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                        {index === 0 ? <Heart className="w-6 h-6" /> : index === 1 ? <Sparkles className="w-6 h-6" /> : <Users className="w-6 h-6" />}
                      </div>
                      <h3 className="text-2xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm font-medium mt-4">
                        <span className="bg-secondary text-white px-3 py-1 rounded-full group-hover:bg-primary transition-colors duration-300">
                          {service.price}
                        </span>
                        <span className="text-muted-foreground">{service.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="p-8 pt-6 flex-1 flex flex-col bg-white">
                      <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center text-sm font-semibold text-primary transition-colors">
                        Se renseigner sur cette séance
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION FAQ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
              Questions fréquentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tout ce que vous devez savoir avant de franchir le pas.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Accordion className="w-full space-y-4">
              
              <AccordionItem value="item-1" className="bg-white px-6 md:px-8 rounded-2xl border border-border/60 shadow-sm">
                <AccordionTrigger className="text-left font-serif text-lg md:text-xl font-medium hover:text-primary transition-colors py-6 cursor-pointer">
                  Pourquoi consulter un(e) sexothérapeute ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  Un(e) sexothérapeute est une personne en capacité de vous apporter des renseignements précis sur votre vie sexuelle, vos désirs et plaisirs. Il/elle peut vous aider à déchiffrer des traumatismes qu'ils soient aussi bien liés à l'enfance, qu'à l'adolescence, mais aussi dans la période adulte.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white px-6 md:px-8 rounded-2xl border border-border/60 shadow-sm">
                <AccordionTrigger className="text-left font-serif text-lg md:text-xl font-medium hover:text-primary transition-colors py-6 cursor-pointer">
                  La différence entre sexothérapeute et thérapeute ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  Un(e) sexothérapeute est tout simplement un(e) thérapeute spécialisé(e) dans la sexualité et la sensualité. Il/elle a pour but d'interpréter et d'analyser ce que certains comportements corporels ou verbaux peuvent traduire. Il/elle est aussi là pour vous sublimer dans votre quête d'harmonie intérieure face à votre vie intime sous tous ses aspects.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white px-6 md:px-8 rounded-2xl border border-border/60 shadow-sm">
                <AccordionTrigger className="text-left font-serif text-lg md:text-xl font-medium hover:text-primary transition-colors py-6 cursor-pointer">
                  Comment se déroule la première séance ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  Lors de la première séance, ce qu'il est important de savoir c'est que vous pouvez venir aussi bien seul(e) qu'accompagné(e). Le rôle du sexothérapeute sera d'être à l'écoute et observateur. Il/elle aura pour but que vous puissiez communiquer aisément, de ce fait, il/elle pourra vous aider en analysant ce que vous lui transmettez par les mots mais aussi par le langage corporel. À la fin de ce premier rendez-vous, vous aurez un récapitulatif des points à travailler, si tant est qu'il y en ait, et la possibilité de reprendre une séance si vous en êtes motivé(e).
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-secondary text-center px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Franchissez le pas</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
            Réservez votre première séance en toute confidentialité.
          </p>
          <Link href="/rendez-vous" className="cursor-pointer">
            <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg cursor-pointer">
              Voir les disponibilités
            </Button>
          </Link>
        </FadeIn>
      </section>

    </main>
  );
}