import { ContactForm } from "@/components/marketing/contact-form";
import { MapPin, Phone, Clock } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata = {
  title: "Contact | Les Nuances du Plaisir",
  description: "Prenez contact pour toute question ou pour organiser votre première séance de sexothérapie.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background py-20 md:py-32 relative overflow-hidden">
      
      {/* Éléments décoratifs en arrière-plan (taches de couleur) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-sage-light/30 blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          
          <FadeIn className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">Contactez-moi</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Bienvenue dans un monde de possibilités illimitées, où nous voyagerons ensemble à travers vos particularités pour une vie épanouie.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-start">
            
            {/* Colonne de gauche : Infos */}
            <FadeIn delay={0.2} className="lg:col-span-2 space-y-8">
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-border/50 shadow-sm">
                <h2 className="text-2xl font-serif font-semibold text-secondary mb-6">
                  Informations pratiques
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-sage-light p-3 rounded-full text-sage-dark shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Adresse</p>
                      <p className="text-muted-foreground text-sm mt-1">9 Route des Terments<br />01260 Haut Valromey</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-sage-light p-3 rounded-full text-sage-dark shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Horaires</p>
                      <p className="text-muted-foreground text-sm mt-1">Lundi au Vendredi<br />9h00 - 17h00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-sage-light p-3 rounded-full text-sage-dark shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Téléphone</p>
                      <p className="text-muted-foreground text-sm mt-1">+33 6 51 40 34 15</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Colonne de droite : Formulaire */}
            <FadeIn delay={0.4} className="lg:col-span-3">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-border/40">
                <ContactForm />
              </div>
            </FadeIn>

          </div>
        </div>
      </div>
    </main>
  );
}