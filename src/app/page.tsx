import { JsonLd } from "@/components/seo/json-ld";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { services } from "@/data/services";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Home() {
  // Les données structurées pour le SEO Local
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Les Nuances du Plaisir",
    "image": "https://lesnuancesduplaisir.vercel.app/logo.png",
    "description": "Accompagnement en sexothérapie pour une vie intime épanouie. Séances individuelles, en couple, présentiel ou distanciel.",
    "url": "https://lesnuancesduplaisir.vercel.app",
    "telephone": "+33651403415",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9 Route des Terments",
      "addressLocality": "Haut Valromey",
      "postalCode": "01260",
      "addressCountry": "FR"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  return (
    <main className="flex flex-col overflow-hidden">
            <JsonLd data={jsonLd} />
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex flex-col items-center justify-center min-h-[75vh] px-4 py-20 md:py-32 text-center">
        <FadeIn>
          <span className="mb-6 inline-block rounded-full bg-sage-light px-4 py-1.5 text-xs md:text-sm font-medium text-sage-dark">
            Sexothérapie & Guérison
          </span>
          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-7xl font-bold text-secondary mb-6 leading-[1.15] md:leading-tight">
            Révélez vos désirs, <br className="hidden md:block" />
            <span className="text-primary italic font-light">libérez votre authenticité.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-xl text-muted-foreground mb-10 px-2 md:px-0">
            Un accompagnement bienveillant pour votre vie intime, alliant spiritualité et sexualité. 
            Séances en présentiel ou en distanciel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Link href="/rendez-vous" className="w-full sm:w-auto">
              <Button size="lg" className="w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Organiser votre rencontre
              </Button>
            </Link>
            <Link href="#services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full rounded-full border-sage text-sage-dark hover:bg-sage-light transition-colors">
                Découvrir les séances
              </Button>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ================= SECTION À PROPOS ================= */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image abstraite (Asymétrique) */}
            <FadeIn delay={0.2} className="relative h-100 md:h-150 w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/abstract.jpg" 
                alt="Univers sensoriel et abstrait" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay"></div>
            </FadeIn>

            {/* Texte À propos */}
            <FadeIn delay={0.4} className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
                À propos
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                "Apporter mon aide aux autres dans leur quête de plaisir et de désir mais aussi dans leur envie de guérir m'est primordial."
              </p>
              <p className="text-foreground/80 leading-relaxed mb-8">
                Je suis un sexothérapeute/guérisseur passionné par mon métier. J'aime travailler en alliant spiritualité et sexualité afin de libérer l'authenticité de mes patient(e)s. J'estime que tout un chacun a le droit à une sexualité plus qu'épanouie et participer à cet essor dans la vie d'autrui est pour moi une évidence. Depuis mes 16 ans, l'envie de partager des moments personnalisés avec l'humanité m'a semblé être plus qu'une vocation.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="w-5 h-5 text-sage" /> Un espace sans tabous ni jugements
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="w-5 h-5 text-sage" /> Une approche holistique (corps & esprit)
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle2 className="w-5 h-5 text-sage" /> En présentiel ou en distanciel
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ================= SECTION SERVICES ================= */}
      <section id="services" className="py-20 md:py-32 bg-background relative">
        <div className="container mx-auto px-4 md:px-8">
          
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">
              Mes accompagnements
            </h2>
            <p className="text-lg text-muted-foreground">
              Des séances conçues pour vous, seul(e), en couple, ou en groupe, pour explorer vos désirs et votre bien-être intime.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={0.2 + index * 0.2} className="h-full">
                {/* On enveloppe la carte dans un Link avec le paramètre URL */}
                <Link 
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-sage rounded-3xl"
                >
                  <div className="group h-full bg-white p-8 md:p-10 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 flex flex-col cursor-pointer">
                    <h3 className="text-2xl font-semibold text-secondary mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                      {service.description}
                    </p>
                    
                    {/* Badges Tarif / Durée */}
                    <div className="flex items-center justify-between pt-6 border-t border-border mt-auto mb-4">
                      <span className="font-serif text-2xl font-medium text-primary">
                        {service.price}
                      </span>
                      <span className="bg-sage-light text-sage-dark px-3 py-1 rounded-full text-sm font-medium">
                        {service.duration}
                      </span>
                    </div>

                    {/* Indication visuelle de clic */}
                    <div className="flex items-center text-sm font-medium text-sage-dark mt-2 group-hover:text-primary transition-colors">
                      Se renseigner sur cette séance
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}