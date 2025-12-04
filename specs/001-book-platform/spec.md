# Specification 001: Book Platform

**Feature Name**: book-platform  
**Status**: Draft  
**Created**: 2025-12-04

## Overview

Core Docusaurus-based book infrastructure with 3 chapters, navigation, and MDX support.

## Description

This feature establishes the foundational book platform using Docusaurus 3.6.3. It provides the infrastructure for hosting and displaying interactive educational content with professional navigation, code highlighting, and diagram support.

## Scope

### In Scope
- Docusaurus 3.6.3 setup and configuration
- 3 chapters (copied from existing work, no modifications)
- Table of contents and navigation (sidebar with category grouping)
- Code syntax highlighting with Prism React Renderer
- Mermaid diagram support for technical visualizations
- Mobile-responsive design with CSS customization
- Static site generation and deployment to GitHub Pages
- Search indexing capability (local search plugin)

### Out of Scope
- AI chat widget integration (separate feature: 002)
- Translation functionality (separate feature: 003)
- Full-text search implementation (separate feature: 004)
- User authentication system (separate feature: 005)
- User progress tracking (separate feature: 006)
- Custom theme development beyond Docusaurus defaults

## Success Criteria

- [ ] Docusaurus builds without errors (`npm run build`)
- [ ] All 3 chapters render correctly with proper formatting
- [ ] Navigation works: prev/next buttons, sidebar navigation, breadcrumbs
- [ ] Code examples display with syntax highlighting for multiple languages
- [ ] Mermaid diagrams render correctly in all chapters
- [ ] Mobile responsive design (Lighthouse mobile score ≥ 90)
- [ ] Build time < 60 seconds for cold builds
- [ ] Static assets load efficiently (CSS, JS optimized)
- [ ] Dark mode support enabled
- [ ] GitHub Pages deployment works correctly

## Technical Requirements

### Dependencies
- `@docusaurus/core@^3.6.3`
- `@docusaurus/preset-classic@^3.6.3`
- `@docusaurus/theme-mermaid@^3.6.3`
- `@easyops-cn/docusaurus-search-local@^0.52.2`
- `prism-react-renderer@^2.3.0`
- React 18.2.0, React DOM 18.2.0

### Configuration Files
- `docusaurus.config.ts` - Main Docusaurus configuration
- `sidebars.ts` - Sidebar navigation structure
- `tsconfig.json` - TypeScript configuration
- `src/css/custom.css` - Custom styling

### Directory Structure
```
frontend/
├── docs/
│   ├── intro.md
│   ├── chapter-01/
│   │   ├── index.md
│   │   ├── what-is-physical-ai.md
│   │   ├── humanoid-robotics-overview.md
│   │   ├── why-learn-physical-ai.md
│   │   └── course-objectives.md
│   ├── chapter-02/
│   │   ├── index.md
│   │   ├── machine-learning-basics.md
│   │   ├── neural-networks.md
│   │   ├── training-models.md
│   │   └── ai-for-robotics.md
│   └── chapter-03/
│       ├── index.md
│       ├── actuators-sensors.md
│       ├── microcontrollers.md
│       ├── power-systems.md
│       └── mechanical-design.md
├── src/
│   ├── css/custom.css
│   └── components/
├── static/
│   ├── img/
│   │   └── logo.svg
│   └── diagrams/
├── docusaurus.config.ts
├── sidebars.ts
├── tsconfig.json
└── package.json
```

## Acceptance Criteria

### Build & Deployment
1. `npm install` succeeds without errors
2. `npm run build` completes in < 60 seconds
3. `npm run start` launches development server on port 3000
4. `npm run serve` serves built site without errors

### Content Rendering
1. All 3 chapters display with correct Markdown formatting
2. Code blocks show syntax highlighting
3. Links between chapters work (internal navigation)
4. Images and static assets load correctly

### User Experience
1. Mobile view is usable and readable (viewport < 600px)
2. Dark mode toggle works
3. Sidebar navigation is accessible and responsive
4. Search feature indexes all content correctly

### Performance
1. Lighthouse mobile score ≥ 90
2. Lighthouse desktop score ≥ 95
3. First contentful paint (FCP) < 2 seconds
4. Total bundle size < 2MB

## Dependencies & Blockers

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0
- Content files from old project available
- GitHub repository set up

### Blockers
- None identified

## Timeline & Effort

**Estimated Effort**: 4-6 hours
- Setup: 1-2 hours
- Content migration: 1-2 hours
- Configuration & testing: 1-2 hours
- Deployment: 0.5-1 hour

## Implementation Notes

- Use Docusaurus Classic preset for simplicity
- Enable TypeScript support for type safety
- Configure GitHub Pages deployment in config
- Set up search indexing for offline support
- Use Mermaid 10+ for diagram support

## References

- [Docusaurus 3.x Documentation](https://docusaurus.io)
- [Mermaid Diagram Syntax](https://mermaid.js.org)
- [Prism React Renderer](https://github.com/FormidableLabs/prism-react-renderer)
