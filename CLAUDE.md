# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (runs on port 8080)
- **Build**: `npm run build` (builds to `dist/` directory)
- **Development build**: `npm run build:dev` 
- **Lint**: `npm run lint`
- **Preview**: `npm run preview`

## Architecture

This is a React + TypeScript single-page application for "Fundo de Quintal", a restaurant and pousada (inn) business in Pontal do Paraná, Brazil. Built with Vite and uses shadcn/ui components with Tailwind CSS.

### Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build tool**: Vite with SWC
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix primitives)
- **Routing**: React Router DOM
- **State**: React hooks, TanStack Query for server state
- **Forms**: React Hook Form with Zod validation
- **Date handling**: date-fns with Portuguese locale
- **Icons**: Lucide React

### Project Structure
- `src/pages/`: Route components (Index.tsx for restaurant, Pousada.tsx for inn, NotFound.tsx)
- `src/components/`: Reusable components including complete shadcn/ui library
- `src/components/ui/`: shadcn/ui components with custom variants
- `src/hooks/`: Custom React hooks
- `src/lib/`: Utilities (utils.ts with cn helper)
- `src/assets/`: Images and static assets

### Key Components
- **Navbar**: Responsive navigation with mobile menu, links to restaurant/pousada pages
- **DateRangePicker**: Calendar component for selecting check-in/out dates
- **WhatsAppButton**: Generates WhatsApp URLs with booking messages
- Custom button variants with restaurant branding

### Design System
- Custom color palette based on restaurant branding (burgundy, warm red, orange, gold)
- CSS variables defined in `src/index.css` with restaurant-specific colors
- Custom gradients and shadows for elegant restaurant aesthetic
- Portuguese locale throughout (date formatting, etc.)

### Business Context
The application serves a dual-purpose business:
1. **Restaurant**: Shows menu/services, hours, contact info
2. **Pousada (Inn)**: Room booking interface with date selection and WhatsApp integration

### Deployment
- Builds to `dist/` directory
- Configured for GitHub Pages deployment via `.github/workflows/release.yml`
- Auto-deploys on pushes to main branch
- **GitHub Pages routing**: Uses BrowserRouter with SPA redirect workaround
  - `vite.config.ts` sets base path to `/fundo-quintal-pontal-reservas/` in production
  - `public/404.html` redirects client-side routes to work with GitHub Pages
  - `index.html` includes script to handle redirected routes

### Path Aliases
```
@/ → src/
@/components → src/components
@/lib → src/lib  
@/hooks → src/hooks
@/ui → src/components/ui
```