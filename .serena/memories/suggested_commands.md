# Suggested Development Commands

## Essential Commands

### Development
- `npm run dev` - Start development server (runs on port 8080)
- `npm run build` - Production build (outputs to dist/)
- `npm run build:dev` - Development build
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run lint` - Run ESLint for code linting
- `npm install` - Install dependencies

## System Commands (Linux)
- `git` - Version control operations
- `ls` - List files and directories  
- `cd` - Change directory
- `grep` / `rg` (ripgrep) - Search in files
- `find` - Find files and directories

## Package Management
- `npm install <package>` - Install new dependencies
- `npm install <package> --save-dev` - Install development dependencies
- `npm update` - Update dependencies

## Deployment
- Automatic deployment via GitHub Actions on push to main branch
- Manual build: `npm run build` then deploy dist/ folder

## Notes
- No testing framework configured currently
- No formatting tools (Prettier) configured
- ESLint config allows unused variables and parameters
- Server runs on port 8080 (configured in vite.config.ts)