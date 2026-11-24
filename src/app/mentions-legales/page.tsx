import { FadeIn } from "@/components/ui/fade-in";

export const metadata = {
  title: "Mentions Légales | Les Nuances du Plaisir",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-10 text-center">
            Mentions Légales
          </h1>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border/50 space-y-8 text-foreground/80 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-serif font-semibold text-secondary mb-4">1. Éditeur du site</h2>
              <p>
                Le site "Les Nuances du Plaisir" est édité par :<br />
                <strong>BERAL Isaac</strong><br />
                Statut : <br />
                Adresse : 9 Route des Terments, 01260 Haut Valromey<br />
                Téléphone : +33 6 51 40 34 15<br />
                Email : isaacpro.beral@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-secondary mb-4">2. Hébergement</h2>
              <p>
                Ce site est hébergé par :<br />
                <strong>Vercel Inc.</strong><br />
                440 N Barranca Ave #4133 Covina, CA 91723<br />
                États-Unis<br />
                Site web : vercel.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-secondary mb-4">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, logos, structure) est la propriété exclusive de BERAL Isaac, sauf mention contraire. Toute reproduction, distribution, modification ou utilisation de ces éléments sans autorisation écrite préalable est strictement interdite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-secondary mb-4">4. Responsabilité</h2>
              <p>
                Les informations fournies sur ce site sont présentées à titre indicatif et ne sauraient constituer un avis médical ou un diagnostic. En cas de trouble persistant, il est recommandé de consulter un professionnel de santé (médecin, psychologue, etc.). L'éditeur ne saurait être tenu responsable d'une mauvaise interprétation des informations diffusées.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-secondary mb-4">5. Conditions d'annulation et de remboursement</h2>
              <p>
                Le paiement des séances s'effectue au moment de la réservation en ligne via notre partenaire sécurisé (Stripe / Cal.com). 
              </p>
              <p className="mt-2">
                Toute annulation doit être notifiée au moins <strong>48 heures</strong> avant l'heure du rendez-vous pour pouvoir prétendre à un remboursement ou à un report. 
                En cas d'absence non justifiée (no-show) ou d'annulation tardive, la prestation est due dans son intégralité et aucun remboursement ne sera effectué.
              </p>
            </section>

          </div>
        </FadeIn>
      </div>
    </main>
  );
}