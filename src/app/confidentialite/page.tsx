import { FadeIn } from "@/components/ui/fade-in";

export const metadata = {
  title: "Politique de Confidentialité | Les Nuances du Plaisir",
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-10 text-center">
            Politique de Confidentialité
          </h1>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-border/50 space-y-8 text-foreground/80 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-serif font-semibold text-secondary mb-4">1. Collecte des données</h2>
              <p>
                Nous collectons uniquement les données strictement nécessaires à la gestion de vos demandes. Les données collectées via notre formulaire de contact sont :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Nom complet</li>
                <li>Adresse email</li>
                <li>Contenu du message</li>
              </ul>
              <p className="mt-4">
                Concernant la prise de rendez-vous, celle-ci est gérée par la plateforme <strong>Cal.com</strong>. Les données que vous y renseignez (nom, email, notes) sont soumises à leur propre politique de confidentialité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-secondary mb-4">2. Utilisation des données</h2>
              <p>
                Vos données sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Répondre à vos messages via le formulaire de contact.</li>
                <li>Gérer la planification de vos rendez-vous.</li>
              </ul>
              <p className="mt-4">
                <strong>Aucune donnée n'est vendue, louée ou transmise à des tiers à des fins commerciales.</strong> L'accès à ces données est strictement réservé au praticien.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-secondary mb-4">3. Durée de conservation</h2>
              <p>
                Les messages reçus via le formulaire de contact sont conservés pendant une durée maximale de 3 ans à compter du dernier contact, puis supprimés. Les données liées aux rendez-vous sont conservées selon les obligations légales en vigueur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-secondary mb-4">4. Vos droits (RGPD)</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données. 
              </p>
              <p className="mt-2">
                Pour exercer ces droits, vous pouvez nous contacter par email à l'adresse suivante : <strong>isaacpro.beral@gmail.com</strong>. 
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (www.cnil.fr).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold text-secondary mb-4">5. Cookies</h2>
              <p>
                Ce site n'utilise pas de cookies publicitaires ou de traçage. Seuls des cookies strictement nécessaires au fonctionnement technique du site (ou de l'outil de réservation Cal.com) peuvent être déposés sur votre navigateur lors de votre visite.
              </p>
            </section>

          </div>
        </FadeIn>
      </div>
    </main>
  );
}