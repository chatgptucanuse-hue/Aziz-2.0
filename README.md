# Thaza Digital Services — Demo Next.js Site

This workspace contains a minimal Next.js scaffold demonstrating the Thaza Digital Services homepage with production-ready JSON-LD schema components.

Quick start:

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

Files of interest:
- `react-schema/components/SchemaScripts.jsx` — Reusable JSON-LD components (Organization, LocalBusiness, WebSite, WebPage, Service, FAQ, Breadcrumb, ContactPoint).
- `pages/index.jsx` — Example homepage integrating schema and components.
- `components/*` — Header, Hero, Services, About, Contact, Footer.

Notes:
- Replace `https://example.com` and social profile URLs with real production URLs.
- Validate pages with Google Rich Results Test after deploying.
