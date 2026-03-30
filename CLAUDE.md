@AGENTS.md
# Project Overview
Next.js 14 app with TypeScript and Tailwind CSS.
 
# Commands
- `npm run dev` — start dev server (port 3000)
- `npm run build` — production build
- `npm run lint` — run ESLint
 
# Architecture
- `app/` — App Router (Next.js 14)
  - `page.tsx` — main page
  - `layout.tsx` — root layout
  - `globals.css` — global styles
- `components/` — reusable UI components
  - All components are typed with TypeScript
  - One component per file, filename = component name (e.g. `Button.tsx`)
- `public/` — static assets
 
# Code conventions
- Use TypeScript strictly, no `any`
- Tailwind for all styling, no inline styles
- Functional components only, no class components
- Named exports preferred
- Components go in `components/`, never directly in `app/` unless it's a page
 
# Important rules
- Never modify `next.config.ts` without asking
- Always run lint before committing
- Do not install new packages without asking
 