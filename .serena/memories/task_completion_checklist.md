# Task Completion Checklist

## Before Considering a Task Complete

### Code Quality Checks
1. **Linting**: Always run `npm run lint` to check for code issues
2. **Build**: Run `npm run build` to ensure the project builds successfully
3. **Type Checking**: TypeScript compilation should pass without errors

### Testing and Validation
- **Note**: No testing framework is currently configured in this project
- **Manual Testing**: Test functionality in development server (`npm run dev`)
- **Cross-browser**: Verify functionality works across different browsers
- **Responsive**: Check mobile and desktop layouts

### Code Review Checklist
- [ ] Code follows project conventions and style
- [ ] TypeScript types are properly defined
- [ ] Components are responsive and accessible
- [ ] Portuguese localization is maintained where appropriate
- [ ] Restaurant branding colors and design system are used
- [ ] No console errors or warnings
- [ ] Imports use proper path aliases (@/ for src/)

### Deployment Considerations
- [ ] Changes work with GitHub Pages routing setup
- [ ] Static assets are properly referenced
- [ ] Build process completes successfully
- [ ] No hardcoded development URLs or paths

### Business Logic Validation
- [ ] Restaurant information is accurate
- [ ] WhatsApp integration generates correct URLs
- [ ] Date picker works for inn bookings
- [ ] Navigation between restaurant and pousada sections works

## Required Commands After Changes
1. `npm run lint` - Fix any linting issues
2. `npm run build` - Ensure successful production build
3. Test in browser via `npm run dev`

## Git and Deployment
- Commits to main branch trigger automatic GitHub Pages deployment
- Check GitHub Actions for deployment status
- Verify live site after deployment