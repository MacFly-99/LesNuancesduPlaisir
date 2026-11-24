<div align="center">

# 🌿 Les Nuances du Plaisir

**Site vitrine & prise de rendez-vous d'un cabinet de sexothérapie**
*Un accompagnement bienveillant, sans tabous ni jugements.*

[![Site en ligne](https://img.shields.io/badge/🌐_Voir_le_site-lesnuancesduplaisir.vercel.app-C97B63?style=for-the-badge)](https://lesnuancesduplaisir.vercel.app/)

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat-square&logo=shadcnui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Cal.com](https://img.shields.io/badge/Cal.com-111827?style=flat-square&logo=caldotcom&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-000000?style=flat-square&logo=resend&logoColor=white)
![Vercel](https://img.shields.io/badge/Déployé_sur-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white)
![License](https://img.shields.io/badge/Licence-Tous_droits_réservés-lightgrey?style=flat-square)

</div>

---

## 📖 À propos du projet

**Les Nuances du Plaisir** est le site web d'un sexothérapeute / guérisseur qui propose un accompagnement alliant **spiritualité et sexualité**, en séances individuelles, en couple ou en groupe, en présentiel ou en distanciel.

Le site a été pensé comme un espace **rassurant, sensoriel et élégant** : une direction artistique chaleureuse, des animations douces, et un parcours simple pour contacter le praticien ou réserver une séance.

👉 **Démo en ligne : [lesnuancesduplaisir.vercel.app](https://lesnuancesduplaisir.vercel.app/)**

---

## ✨ Fonctionnalités

- 🎨 **Direction artistique soignée** : palette chaude (crème, terracotta, aubergine, doré, vert sauge), titres en serif, design responsive
- 🎞️ **Animations fluides** avec Framer Motion
- 🏠 **Page d'accueil** : héro, présentation, aperçu des accompagnements
- 👤 **Page À propos**
- 🧘 **Page Accompagnements** : détail des séances, tarifs et durées
- 📅 **Prise de rendez-vous** via **Cal.com** (widget intégré)
- ✉️ **Formulaire de contact** validé (React Hook Form + Zod), avec envoi d'e-mails via **Resend** et pré-sélection de la séance via l'URL (`/contact?service=...`)
- ⚖️ **Pages légales** : mentions légales et politique de confidentialité
- 🔒 **Sécurité renforcée** : CSP, HSTS, en-têtes de sécurité, rate limiting, honeypot anti-bots
- 🔎 **SEO complet** : JSON-LD, sitemap, robots.txt, Open Graph / Twitter Cards
- 📈 **Analytics** respectueux via Vercel Analytics

---

## 🛠️ Stack technique

| Catégorie | Technologies |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) · [React 19](https://react.dev/) |
| **Langage** | [TypeScript](https://www.typescriptlang.org/) |
| **Style** | [Tailwind CSS 4](https://tailwindcss.com/) · [shadcn/ui](https://ui.shadcn.com/) · Radix UI · Base UI · `class-variance-authority` · `tailwind-merge` · `tw-animate-css` |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Formulaires** | [React Hook Form](https://react-hook-form.com/) · [Zod](https://zod.dev/) |
| **Réservation** | [Cal.com](https://cal.com/) (`@calcom/embed-react`) |
| **E-mails** | [Resend](https://resend.com/) |
| **UI / UX** | [Lucide](https://lucide.dev/) (icônes) · [Sonner](https://sonner.emilkowal.ski/) (toasts) · `next-themes` |
| **Analytics** | [Vercel Analytics](https://vercel.com/analytics) |
| **Qualité** | ESLint 9 · `eslint-config-next` |
| **Gestionnaire de paquets** | [pnpm](https://pnpm.io/) |
| **Hébergement** | [Vercel](https://vercel.com/) |

---

## 🗂️ Structure du projet

```
les-nuances-du-plaisir/
├── public/                 # Assets statiques (logo, images, favicon…)
├── src/
│   ├── app/                # Routes (App Router), layouts, API routes, sitemap, robots
│   ├── components/         # Composants React (UI, sections, formulaires…)
│   ├── data/               # Données statiques (séances, tarifs, contenus…)
│   └── lib/                # Utilitaires (validation, rate limiting, helpers…)
├── components.json         # Configuration shadcn/ui
├── next.config.ts          # Config Next.js + en-têtes de sécurité (CSP, HSTS…)
├── postcss.config.mjs      # Config PostCSS / Tailwind
├── eslint.config.mjs       # Config ESLint
├── tsconfig.json           # Config TypeScript
└── package.json
```

---

## 🚀 Démarrage rapide

### Prérequis

- [Node.js](https://nodejs.org/) **20.9+**
- [pnpm](https://pnpm.io/installation)
- Un compte [Resend](https://resend.com/) (clé API pour le formulaire de contact)

### Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/MacFly-99/LesNuancesduPlaisir.git
cd LesNuancesduPlaisir

# 2. Installer les dépendances
pnpm install

# 3. Configurer les variables d'environnement
cp .env.example .env.local   # ou crée le fichier à la main (voir ci-dessous)

# 4. Lancer le serveur de développement
pnpm dev
```

Le site est alors disponible sur **http://localhost:3000**.

### 🔐 Variables d'environnement

Crée un fichier `.env.local` à la racine du projet :

```env
# Clé API Resend (envoi des e-mails du formulaire de contact)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
```

### 📜 Scripts disponibles

| Commande | Description |
|---|---|
| `pnpm dev` | Lance le serveur de développement (Turbopack) |
| `pnpm build` | Compile l'application pour la production |
| `pnpm start` | Lance le serveur de production (après `build`) |
| `pnpm lint` | Analyse le code avec ESLint |

---

## 🛡️ Sécurité

La sécurité a été traitée comme un sujet à part entière (formulaire de contact exposé au public, données sensibles) :

- **Content Security Policy (CSP)** stricte, adaptée à la production
- **HSTS** (HTTP Strict Transport Security)
- **En-têtes de sécurité** supplémentaires configurés dans `next.config.ts`
- **Rate limiting** sur la route d'API du formulaire de contact
- **Honeypot** anti-bots dans le formulaire de contact
- **Validation côté serveur** des données avec Zod
- Secrets stockés dans des variables d'environnement, jamais dans le code

---

## 🔎 SEO

- **Métadonnées** complètes (title, description, mots-clés, locale `fr_FR`)
- **Open Graph** & **Twitter Cards** pour des partages soignés
- **Données structurées JSON-LD** pour les moteurs de recherche
- **`sitemap.xml`** et **`robots.txt`** générés
- Site référencé sur **Google Search Console** et **Google Business Profile**

---

## 🎨 Design system

Les couleurs et les rayons sont définis comme tokens Tailwind dans `src/app/globals.css`.

| Rôle | Token | Valeur |
|---|---|---|
| Fond | `background` | `hsl(30 33% 96%)` |
| Texte | `foreground` | `hsl(345 15% 15%)` |
| Primaire (terracotta) | `primary` | `hsl(14 49% 59%)` |
| Secondaire (aubergine) | `secondary` | `hsl(330 26% 23%)` |
| Accent (doré) | `accent` | `hsl(43 48% 58%)` |
| Vert sauge | `sage` | `hsl(135 20% 55%)` |
| Neutre doux | `muted` | `hsl(30 20% 90%)` |

Les titres (`h1`–`h6`) utilisent une police **serif** avec un léger resserrement des lettres pour un rendu élégant.

---

## ☁️ Déploiement

Le projet est déployé sur **[Vercel](https://vercel.com/)** avec déploiement continu depuis la branche principale.

1. Importer le dépôt sur Vercel
2. Ajouter la variable d'environnement `RESEND_API_KEY`
3. Déployer 🚀

---

## 🗺️ Historique du développement

Le projet a été organisé en issues GitHub, toutes terminées :

`Dépendances` → `Direction artistique` → `Layout` → `Animations` → `Page Contact` → `Réservation` → `Page À propos` → `Page Accompagnements` → `Pages légales` → `Sécurité` → `Security headers` → `SEO`

---

## 📄 Licence

© 2026 Les Nuances du Plaisir. **Tous droits réservés.**
Le code source et les contenus (textes, images, logo) ne peuvent être ni copiés, ni réutilisés, ni redistribués sans autorisation écrite.

---

## 👨‍💻 Auteur

Développé par **[MacFly-99](https://github.com/MacFly-99)**.

<div align="center">

*Fait avec 🌿 et beaucoup de nuances.*

</div>
