# Project Structure

## Root Directory
```
fundo-quintal-pontal-reservas/
├── .github/workflows/    # GitHub Actions CI/CD
├── .serena/             # Serena configuration  
├── .claude/             # Claude configuration
├── public/              # Static assets
├── src/                 # Source code
├── dist/                # Build output (generated)
├── node_modules/        # Dependencies
└── Configuration files
```

## Configuration Files
- `package.json` - Dependencies and scripts
- `vite.config.ts` - Vite build configuration with GitHub Pages support
- `tsconfig.json` - TypeScript project references
- `tsconfig.app.json` - Application TypeScript config
- `tsconfig.node.json` - Node.js TypeScript config
- `eslint.config.js` - ESLint configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `components.json` - shadcn/ui configuration
- `CLAUDE.md` - Claude development instructions

## Source Structure
```
src/
├── main.tsx            # Application entry point
├── App.tsx             # Main app component with routing
├── index.css           # Global styles and design system
├── vite-env.d.ts       # Vite type definitions
├── pages/              # Route components
│   ├── Index.tsx       # Restaurant landing page
│   ├── Pousada.tsx     # Inn booking page
│   └── NotFound.tsx    # 404 error page
├── components/         # Reusable components
│   ├── Navbar.tsx      # Navigation component
│   ├── DateRangePicker.tsx  # Date selection widget
│   ├── WhatsAppButton.tsx   # WhatsApp integration
│   └── ui/             # shadcn/ui component library
├── hooks/              # Custom React hooks
│   ├── use-toast.ts    # Toast notifications
│   └── use-mobile.tsx  # Mobile detection
├── lib/                # Utility functions
│   └── utils.ts        # Common utilities (cn helper)
└── assets/             # Images and media
    ├── logo-fundo-quintal.png
    ├── restaurante-hero.jpg
    └── quarto-*.jpg    # Room images
```

## Key Components
- **Pages**: Route-level components for different sections
- **Navbar**: Responsive navigation with mobile menu
- **DateRangePicker**: Calendar for inn bookings
- **WhatsAppButton**: Generates WhatsApp booking URLs
- **UI Components**: Complete shadcn/ui library with custom variants