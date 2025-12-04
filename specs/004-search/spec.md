# Specification 004: Search

**Feature Name**: search  
**Status**: Draft  
**Created**: 2025-12-04

## Overview

Full-text search across all book content using Docusaurus search plugin.

## Description

This feature provides users with a powerful full-text search capability to find relevant content across all 3 chapters. Search works offline (indexed during build), supports keyboard shortcuts, and highlights results with context preview.

## Scope

### In Scope
- Search bar in header/navigation (always accessible)
- Index all 3 chapters at build time
- Search results with context preview (100 chars around match)
- Keyboard shortcuts (Ctrl+K / Cmd+K on Mac)
- Highlight search terms in results
- Direct navigation to exact section on result click
- Works in offline mode (indexed during build)
- Responsive design for mobile and desktop
- Search result relevance ranking
- Multiple result types (chapters, sections, etc.)

### Out of Scope
- Vector/semantic search (future enhancement)
- Search across user notes/bookmarks (requires authentication)
- Search filters by chapter, difficulty, topic (future enhancement)
- Real-time search suggestions/autocomplete
- Search analytics (separate feature)
- Full-page search modal (unless necessary)

## Success Criteria

- [ ] Search bar accessible and visible on all pages
- [ ] Returns relevant results for common queries
- [ ] Results link directly to exact chapter section
- [ ] Search index < 500KB (for fast loading)
- [ ] Search results appear in < 500ms
- [ ] Works in offline/disconnected mode
- [ ] Keyboard shortcut (Ctrl+K / Cmd+K) opens search
- [ ] Mobile search works with touch interface
- [ ] Search terms highlighted in results
- [ ] Context preview shows surrounding text

## Technical Requirements

### Integration
- Use `@easyops-cn/docusaurus-search-local` plugin
- Index built at build time (no runtime overhead)
- No external API calls required
- Client-side only (no backend needed)

### Configuration
- Language: English
- Index all documentation (not blog/pages)
- Hashed index for better performance
- Custom CSS for search styling

### Search Behavior
- Case-insensitive matching
- Partial word matching (e.g., "robot" matches "robotics")
- Phrase matching with quotes (e.g., "humanoid robot")
- Boolean operators (AND/OR implicit)

### Index Structure
```
{
  "docs": [
    {
      "id": "chapter-01/what-is-physical-ai",
      "title": "What is Physical AI?",
      "content": "Physical AI is...",
      "url": "/docs/chapter-01/what-is-physical-ai"
    },
    ...
  ]
}
```

## File Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.tsx
│   │   │   └── SearchBar.module.css
│   │   └── SearchResults/
│   │       ├── SearchResults.tsx
│   │       └── SearchResults.module.css
│   └── lib/
│       └── search.ts (search utilities)
├── docusaurus.config.ts (plugin config)
└── package.json
```

## Docusaurus Configuration

```typescript
// In docusaurus.config.ts
plugins: [
  [
    require.resolve('@easyops-cn/docusaurus-search-local'),
    {
      hashed: true,
      language: ['en'],
      indexDocs: true,
      indexBlog: false,
      indexPages: false,
      docsRouteBasePath: '/',
      highlightSearchTermsOnTargetPage: true,
      searchResultLimits: 8,
      explicitSearchResultPath: true,
    },
  ],
],
```

## Search Result Display

```typescript
interface SearchResult {
  id: string;
  title: string;
  section?: string;
  url: string;
  context: string; // preview text with highlights
  relevance: number; // 0-1 score
}

// Example UI
- Result Title (Chapter Section)
  context preview: "...In humanoid robotics, [search term] is 
    essential for movement..."
  [Click to go to section]
```

## Keyboard Shortcuts

- **Ctrl+K** (Windows/Linux) or **Cmd+K** (Mac): Focus search bar
- **Esc**: Close search/clear results
- **Enter**: Navigate to first result
- **Arrow Up/Down**: Navigate between results

## Acceptance Criteria

### Search Functionality
1. Typing in search bar filters results in real-time
2. Search index contains all chapters and sections
3. Results are ranked by relevance (title matches rank higher)
4. Partial matches work (e.g., "neural net" finds "neural networks")
5. Special characters are handled correctly

### User Interface
1. Search bar always visible in header
2. Search results display in dropdown or modal
3. Results show title, section, and context preview
4. Clicking result navigates to exact section
5. Search bar has clear focus state

### Performance
1. Search index builds in < 30 seconds (full build)
2. Search query returns results in < 500ms
3. Index is gzip compressed (< 500KB)
4. No network requests for search
5. Client-side indexing uses < 50MB memory

### Mobile Experience
1. Search bar accessible on mobile (might be in hamburger menu)
2. Results readable on small screens
3. Touch-friendly result selection
4. No horizontal scroll needed

### Offline & Caching
1. Search works without internet (after initial load)
2. Index cached in browser (localStorage/cache API)
3. Works after page refresh
4. Updated index on page load if new content

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari 14+
- Chrome Android 90+

## Dependencies & Blockers

### Prerequisites
- Docusaurus 3.6.3+
- @easyops-cn/docusaurus-search-local@^0.52.2
- All chapters indexed in sidebars.ts

### Blockers
- None identified

## Timeline & Effort

**Estimated Effort**: 3-4 hours
- Integration & config: 1 hour
- Testing: 1 hour
- Styling & UX: 1-2 hours
- Mobile optimization: 0.5-1 hour

## Implementation Notes

- Search index is built at build time (no runtime overhead)
- Use Docusaurus built-in search plugin for simplicity
- Consider custom CSS for consistent branding
- Test search with various query types
- Monitor index size to ensure it stays < 500KB

## Search Query Examples

```
// Exact match
"humanoid robotics"

// Partial match
neural

// Multiple terms (implicit AND)
robotics AI

// Title-weighted search
title:Introduction

// Chapter-specific (if supported)
chapter:01
```

## Future Enhancements

- Vector embeddings for semantic search
- Search filters (by chapter, difficulty, topic)
- Search history/saved searches
- Search analytics (popular queries)
- AI-powered search suggestions
- Advanced query syntax (filters, boolean operators)

## References

- [Docusaurus Search Documentation](https://docusaurus.io/docs/search)
- [@easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local)
- [Full-text Search Algorithms](https://en.wikipedia.org/wiki/Full-text_search)
