"use client";

import { useState, useEffect } from "react";
import { Booking } from "@/components/marketing/booking";
import { FadeIn } from "@/components/ui/fade-in";
import { Clock, Info } from "lucide-react"; // Ajout de Info
import { toast } from "sonner";

export default function RendezVousPage() {
  const [activeCalLink, setActiveCalLink] = useState("isaac-beral-wisyap/consultation-de-1h");

  // ÉCOUTEUR D'ÉVÉNEMENT GLOBAL POUR LA NOTIFICATION
  useEffect(() => {
    const handleBookingSuccess = () => {
      toast.success("Rendez-vous confirmé !", {
        description: "Un email de confirmation vient de vous être envoyé.",
      });
    };

    window.addEventListener("bookingSuccessful", handleBookingSuccess);
    return () => window.removeEventListener("bookingSuccessful", handleBookingSuccess);
  }, []);

  const options = [
    { label: "Séance de 1h", duration: "60 min", link: "isaac-beral-wisyap/consultation-de-1h" },
    { label: "Séance de 1h30", duration: "90 min", link: "isaac-beral-wisyap/consultation-de-1h30" },
  ];

  return (
    <main className="min-h-screen bg-background py-20 md:py-32 relative overflow-hidden">
      {/* Taches de couleurs en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-sage-light/40 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <FadeIn className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Organisez votre rencontre
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez la durée de votre séance, puis sélectionnez le créneau qui vous convient. La prise de rendez-vous se fait en toute confidentialité.
          </p>
        </FadeIn>

        {/* Sélecteur de prestation */}
        <FadeIn delay={0.1} className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          {options.map((option) => (
            <button
              key={option.link}
              onClick={() => setActiveCalLink(option.link)}
              className={`flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeCalLink === option.link
                  ? "bg-primary text-primary-foreground border-primary shadow-md scale-105"
                  : "bg-white text-foreground border-border hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              <Clock className={`w-5 h-5 ${activeCalLink === option.link ? "text-white" : "text-primary"}`} />
              <div className="text-left">
                <span className="block font-semibold">{option.label}</span>
                <span className={`text-sm ${activeCalLink === option.link ? "text-white/80" : "text-muted-foreground"}`}>
                  {option.duration}
                </span>
              </div>
            </button>
          ))}
        </FadeIn>

        {/* ENCART D'INFORMATION POUR LE PAIEMENT / NO-SHOW */}
        <FadeIn delay={0.15} className="mb-10 max-w-3xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 md:p-5 flex gap-4 items-start">
            <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="text-sm text-foreground/80 leading-relaxed">
              <strong className="text-secondary block mb-1">Conditions de réservation</strong>
              Le règlement de la séance s'effectue directement lors de la prise de rendez-vous. 
              Toute annulation doit être effectuée au moins <strong>48 heures à l'avance</strong>. 
              En cas d'absence non justifiée (no-show), la séance ne sera ni reportée ni remboursée.
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          {/* Conteneur stylisé pour Cal.com */}
          <div className="bg-white rounded-3xl p-4 md:p-8 shadow-xl border border-border/50 min-h-175">
            <Booking key={activeCalLink} calLink={activeCalLink} />
          </div>
        </FadeIn>
      </div>
    </main>
  );
}