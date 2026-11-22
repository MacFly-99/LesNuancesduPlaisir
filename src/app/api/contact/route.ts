import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// On initialise Resend avec la clé API
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      // ⚠️ IMPORTANT : L'adresse "from" doit être un domaine vérifié sur Resend.
      // En attendant, on utilise le domaine de test de Resend.
      from: 'Formulaire Les Nuances <onboarding@resend.dev>', 
      // L'EMAIL DU CLIENT
      to: ['isaacpro.beral@gmail.com'], 
      subject: `Nouveau message de ${name} via le site`,
      // On peut utiliser du HTML simple ou un template React Email
      html: `
        <h2>Nouveau message depuis le site Les Nuances du Plaisir</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 });
  }
}