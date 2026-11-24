import type { NextConfig } from "next";

// Détecte si on est en production (sur Vercel)
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Masque la version de Next.js
  poweredByHeader: false,

  async headers() {
    // En local, on ne met AUCUN header pour ne pas casser le HMR (Fast Refresh)
    if (!isProd) {
      return [];
    }

    // En production, on active le bouclier
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            // SAMEORIGIN est requis pour que l'iframe de Cal.com s'affiche
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Next.js a besoin de unsafe-eval/inline pour ses scripts, Cal.com aussi
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://app.cal.com",
              // Next.js et Google Fonts pour les styles
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Images du site et externes
              "img-src 'self' data: blob: https:",
              // Polices Google
              "font-src 'self' https://fonts.gstatic.com",
              // Autorise l'iframe de Cal.com
              "frame-src 'self' https://app.cal.com",
              // Autorise les appels API (Resend, Cal.com) et les Websockets en prod
              "connect-src 'self' wss: https:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;