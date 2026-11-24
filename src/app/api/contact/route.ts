import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialisation de Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// --- CONFIGURATION DU RATE LIMITING ---
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const LIMIT = 5; // Max 5 requêtes
const WINDOW_MS = 15 * 60 * 1000; // Par tranche de 15 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (now - record.lastReset > WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= LIMIT) {
    return true;
  }

  record.count++;
  return false;
}

// --- CONFIGURATION DE LA VALIDATION (ZOD) ---
const contactSchema = z.object({
  name: z.string().min(2, { message: "Le nom est trop court." }),
  email: z.string().email({ message: "L'adresse email est invalide." }),
  message: z.string().min(10, { message: "Le message est trop court." }),
  website: z.string().optional(), // Le champ piège (honeypot)
});

export async function POST(req: Request) {
  try {
    // 1. VÉRIFICATION DU RATE LIMITING (IP)
    const ip = req.headers.get('x-forwarded-for') ?? 'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Trop de requêtes. Veuillez réessayer dans 15 minutes.' }, 
        { status: 429 }
      );
    }

    // 2. RÉCUPÉRATION DES DONNÉES
    const body = await req.json();

    // 3. VÉRIFICATION DU HONEYPOT (ANTI-BOT)
    // Si le champ "website" est rempli, c'est un bot. On fait semblant d'accepter.
    if (body.website && body.website.length > 0) {
      return NextResponse.json({ success: true, message: "Message envoyé" });
    }

    // 4. VALIDATION STRICTE DES DONNÉES
    const parsedData = contactSchema.safeParse(body);
    if (!parsedData.success) {
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 });
    }

    const { name, email, message } = parsedData.data;

    // 5. ENVOI DE L'EMAIL VIA RESEND
    const { data, error } = await resend.emails.send({
      from: 'Formulaire Les Nuances <onboarding@resend.dev>', 
      to: ['isaacpro.beral@gmail.com'], 
      subject: `Nouveau message de ${name} via le site`,
      html: `
        <h2>Nouveau message depuis le site Les Nuances du Plaisir</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erreur Serveur:", error);
    return NextResponse.json({ error: "Erreur interne du serveur" }, { status: 500 });
  }
}