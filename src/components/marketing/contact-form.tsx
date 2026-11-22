"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  name: z.string().min(2, { message: "Votre nom est requis." }),
  email: z.string().email({ message: "Adresse email invalide." }),
  message: z.string().min(10, { message: "Votre message doit faire au moins 10 caractères." }),
});

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  
  // On récupère le paramètre "service" de l'URL
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");

  // On génère le message pré-rempli s'il y a un service dans l'URL
  const defaultMessage = serviceParam 
    ? `Bonjour, je souhaite avoir plus d'informations concernant la prestation : "${serviceParam}".`
    : "";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: defaultMessage,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'envoi');

      toast.success("Message envoyé avec succès !", {
        description: "Je vous répondrai dans les plus brefs délais.",
      });
      reset(); // On vide le formulaire
    } catch (error) {
      toast.error("Une erreur est survenue", {
        description: "Veuillez réessayer ou me contacter par téléphone.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      
      {/* Champ Nom */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground/80 font-medium">Nom complet</Label>
        <Input 
          id="name" 
          placeholder="Votre nom" 
          className="bg-white border-border rounded-xl h-12 shadow-sm focus-visible:ring-sage" 
          {...register("name")} 
        />
        {errors.name && (
          <p className="text-sm text-red-500 font-medium">{errors.name.message}</p>
        )}
      </div>

      {/* Champ Email */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground/80 font-medium">Adresse Email</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="vous@exemple.com" 
          className="bg-white border-border rounded-xl h-12 shadow-sm focus-visible:ring-sage" 
          {...register("email")} 
        />
        {errors.email && (
          <p className="text-sm text-red-500 font-medium">{errors.email.message}</p>
        )}
      </div>

      {/* Champ Message */}
      <div className="space-y-2">
        <Label htmlFor="message" className="text-foreground/80 font-medium">Message</Label>
        <Textarea 
          id="message" 
          placeholder="Partagez avec moi ce qui vous amène..." 
          className="bg-white border-border rounded-xl min-h-37.5 resize-none shadow-sm focus-visible:ring-sage p-4" 
          {...register("message")} 
        />
        {errors.message && (
          <p className="text-sm text-red-500 font-medium">{errors.message.message}</p>
        )}
      </div>

      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base shadow-md hover:shadow-lg transition-all"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer le message"
        )}
      </Button>
    </form>
  );
}