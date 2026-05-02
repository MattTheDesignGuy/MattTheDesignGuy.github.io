# thedesignguy.com.au

Single-page portfolio and lead-generation site for The Design Guy, built with Vite + React + TypeScript + Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds and deploys to GitHub Pages. The custom domain `thedesignguy.com.au` is configured via `public/CNAME`.

## Open items

- [ ] Add gallery screenshots to `public/gallery/`
- [ ] Supply Formspree form ID (replace `TODO` in `src/components/Contact.tsx`)
- [ ] Supply starting price for pricing section
- [ ] Supply testimonials (section hidden behind feature flag until provided)
- [ ] Confirm URLs for A&C Landmark, Afterhours, BtB Capital
- [ ] Configure DNS A records at registrar to point to GitHub Pages
