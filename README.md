# Dalitso Portfolio

A colourful, responsive Next.js portfolio starter inspired by the approved desktop/mobile sketch.

## Requirements
- Node.js 20.9+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Before publishing
1. Confirm the portrait in `public/images/` is the version you want. The page currently references the included portrait asset.
2. Update `hello@dalitso.dev` in `components/portfolio-home.tsx` to your real email.
3. Replace the generic GitHub and LinkedIn links with your profiles.
4. Replace the illustrative project preview SVGs in `public/images/` with real screenshots when available.
5. Update project links and case study status in `data/projects.ts`.
6. Add your CV as `public/Dalitso-CV.pdf` and connect the Download CV button if you want one.
7. Update metadata in `app/layout.tsx` and add your custom domain when ready.

## Notes
- Uses Next.js App Router, TypeScript, CSS, and Lucide icons.
- Responsive navigation works on mobile.
- Includes keyboard focus styling and `prefers-reduced-motion` support.
- Project preview artwork is illustrative, not a claim that each shown UI is a shipped product.
