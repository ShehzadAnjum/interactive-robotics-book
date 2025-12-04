# Frontend - Docusaurus Book

**Purpose**: Public-facing interactive textbook built with Docusaurus 3.6.3.

**Tech Stack**:
- Docusaurus 3.6.3
- React 18
- TypeScript 5.6.2
- MDX (Markdown + JSX)

**Structure**:
- `docs/` - Chapter content (Markdown)
- `src/` - React components, hooks, utilities
- `static/` - Static assets (images, diagrams)
- `tests/` - Unit tests (Jest) + E2E tests (Playwright)

**Development**:
```bash
npm install
npm start  # http://localhost:3000
```

**Build**:
```bash
npm run build  # Outputs to build/
npm run serve  # Preview production build
```

**See Also**:
- [Docusaurus Documentation](https://docusaurus.io/docs)
- [CLAUDE.md](./CLAUDE.md) - Frontend-specific instructions
