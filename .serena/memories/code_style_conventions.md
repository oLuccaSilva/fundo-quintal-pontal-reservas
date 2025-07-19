# Code Style and Conventions

## File Organization
```
src/
├── pages/           # Route components (Index.tsx, Pousada.tsx, NotFound.tsx)
├── components/      # Reusable components
│   └── ui/         # shadcn/ui components with custom variants
├── hooks/          # Custom React hooks
├── lib/            # Utilities (utils.ts with cn helper)
└── assets/         # Images and static assets
```

## TypeScript Configuration
- **Relaxed Settings**: noImplicitAny, noUnusedParameters, noUnusedLocals set to false
- **Null Checks**: strictNullChecks disabled
- **Path Aliases**: @ mapped to src/, @/components, @/lib, @/hooks, @/ui
- **allowJs**: true for JavaScript files

## React Patterns
- **Functional Components**: Using arrow functions with TypeScript
- **Hooks**: useState, useEffect, custom hooks in hooks/ directory
- **Props**: TypeScript interfaces for component props (e.g., WhatsAppButtonProps)

## Styling Conventions
- **Tailwind CSS**: Utility-first CSS with custom classes
- **CSS Variables**: All colors defined in HSL format in index.css
- **Design System**: Custom restaurant branding colors (burgundy, warm red, orange, gold)
- **Responsive**: Mobile-first approach with responsive design

## ESLint Rules
- React hooks rules enforced
- React refresh for development
- TypeScript unused variables disabled
- Allows constant exports for components

## Naming Conventions
- **Components**: PascalCase (e.g., DateRangePicker, WhatsAppButton)
- **Files**: PascalCase for components, camelCase for utilities
- **Variables**: camelCase (e.g., especialidades, horarios)
- **Constants**: camelCase for local, UPPER_CASE for module exports

## Import/Export Patterns
- Default exports for main components
- Named exports for utilities and multiple exports
- Relative imports with @ alias for src/ directory