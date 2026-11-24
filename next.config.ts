import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // On masque la version de Next.js
  poweredByHeader: false,
  
  /* 
   ⚠️ SÉCURITÉ EN ATTENTE :
   Les headers de sécurité (CSP, HSTS, etc.) seront configurés 
   directement sur Vercel lors du déploiement pour ne pas 
   casser l'environnement de développement local.
  */
};

export default nextConfig;