"use client";

import { useState, useEffect } from "react";
import { Booking } from "@/components/marketing/booking";
import { FadeIn } from "@/components/ui/fade-in";
import { Clock } from "lucide-react";
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
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <FadeIn className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
            Organisez votre rencontre
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez la durée de votre séance, puis sélectionnez le créneau qui vous convient.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          {options.map((option) => (
            <button
              key={option.link}
              onClick={() => setActiveCalLink(option.link)}
              className={`flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300 ${
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

        <FadeIn delay={0.2}>
          <div className="bg-white rounded-3xl p-4 md:p-8 shadow-xl border border-border/50 min-h-175">
            <Booking key={activeCalLink} calLink={activeCalLink} />
          </div>
        </FadeIn>
      </div>
    </main>
  );
}