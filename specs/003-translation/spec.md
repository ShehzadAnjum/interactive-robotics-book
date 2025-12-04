# Specification 003: Translation (Urdu)

**Feature Name**: translation  
**Status**: Draft  
**Created**: 2025-12-04

## Overview

Per-chapter translation to Urdu using Google Gemini API.

## Description

This feature enables users to read book content in Urdu while maintaining formatting and structure. Users can toggle between English and Urdu translations on any chapter page. Translations are cached client-side to avoid repeated API calls.

## Scope

### In Scope
- Language toggle button on each chapter page (EN/UR)
- On-demand translation of entire chapter to Urdu
- Client-side caching of translated content (sessionStorage/localStorage)
- Preserve Markdown formatting, code blocks, and structure
- Toggle back to English (bidirectional switching)
- Translation status indicator (loading, complete, error)
- Support for all 3 chapters
- Fallback to English if translation fails

### Out of Scope
- Additional languages beyond Urdu (future enhancement)
- Persistent server-side translation cache (requires backend)
- In-place editing of translations
- Community contributions of translations
- Machine learning-based optimization of translations
- Translation of UI elements (only book content)

## Success Criteria

- [ ] Toggle button visible on all chapter pages
- [ ] Translation preserves Markdown formatting (headers, lists, bold, italic)
- [ ] Code blocks remain in English (not translated)
- [ ] Mermaid diagrams remain in original language
- [ ] Toggle works bidirectionally (EN ↔ UR) without page reload
- [ ] Translation completes in < 10 seconds per chapter
- [ ] Translated content cached on client (no re-translation on toggle)
- [ ] Works offline once cached
- [ ] Mobile responsive toggle button
- [ ] Error handling with fallback to English

## Technical Requirements

### Frontend Components
- Language toggle button (EN/UR selector)
- Translation loading indicator (spinner/skeleton)
- Error banner with retry option
- Cached translation manager

### API Integration
- Google Gemini 2.0 Flash for translation
- Request format: Translate this Markdown to Urdu [chapter content]
- Response: Translated Markdown preserving structure

### State Management
- Current language (EN/UR)
- Cached translations per chapter
- Loading states
- Error handling

### Storage
- LocalStorage for persistent cache (survives page reload)
- SessionStorage fallback
- Cache invalidation strategy (version-based)

### Environment Variables
```
NEXT_PUBLIC_GEMINI_API_KEY=<api-key>
NEXT_PUBLIC_TRANSLATION_CACHE_VERSION=1
```

## File Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── LanguageToggle/
│   │   │   ├── LanguageToggle.tsx
│   │   │   ├── LanguageToggle.module.css
│   │   │   └── useTranslation.ts (custom hook)
│   │   └── ChapterContent.tsx (wrapper component)
│   └── lib/
│       ├── translation.ts (Gemini API)
│       ├── cache.ts (storage management)
│       └── markdownPreserver.ts (format preservation)
└── package.json
```

## Translation Request Format

```typescript
// Request to Gemini API
{
  "contents": [{
    "parts": [{
      "text": `Translate the following Markdown content to Urdu. 
IMPORTANT: Preserve all Markdown formatting (headers, lists, code blocks, etc.)
Do NOT translate code blocks or URLs. 
Return only the translated Markdown.

---
${chapterContent}
`
    }]
  }]
}

// Cache key format
translation-cache-{chapter-id}-{language}-v{version}
```

## Acceptance Criteria

### Translation Quality
1. Headers (# ## ###) remain in same format
2. Code blocks with ``` remain untranslated
3. Bold (**text**) and italic (*text*) preserved
4. Lists (-, *, 1.) remain intact
5. Links [text](url) structure preserved
6. URLs remain unchanged

### User Experience
1. Toggle button accessible from every chapter
2. Translation state persists during session
3. Loading indicator shows during translation
4. Error message is clear and actionable
5. Quick toggle between languages (< 200ms)

### Performance
1. First translation < 10 seconds
2. Cached translation loads instantly (< 100ms)
3. Cache size per chapter < 500KB
4. Total cache limit < 5MB (LocalStorage)

### Caching
1. Translation cached after first request
2. Cache survives page reload (LocalStorage)
3. Clear cache button available in settings
4. Cache auto-clears after 30 days (optional)

### Mobile
1. Toggle button works on touch devices
2. Loading state visible on small screens
3. Translated text readable on mobile
4. No horizontal scroll needed

## Error Handling

### Scenarios
1. API rate limit exceeded → Show retry button with countdown
2. API error → Fallback to English, show error message
3. Network timeout → Show offline mode message
4. Invalid response → Log error, show generic message

### Retry Logic
- Automatic retry with exponential backoff (1s, 2s, 4s)
- Maximum 3 retries
- Manual retry button available

## Cache Management

### Storage Strategy
```typescript
// Cache structure
{
  "translation-cache-001-ur-v1": {
    "content": "ترجمہ شدہ مواد...",
    "timestamp": 1701705600000,
    "version": 1
  }
}
```

### Invalidation
- Version bump in config → clears old cache
- Manual clear option
- Auto-delete after 30 days (optional TTL)

## Dependencies & Blockers

### Prerequisites
- Google Gemini API access
- API key configured
- Chapter content in frontend

### External Dependencies
- Google Generative AI API (subject to rate limits)

### Blockers
- None identified

## Timeline & Effort

**Estimated Effort**: 6-8 hours
- Component development: 2-3 hours
- API integration: 1-2 hours
- Caching system: 1-2 hours
- Testing & error handling: 1-2 hours

## Implementation Notes

- Use Claude/Gemini native streaming for real-time translation
- Test with various Markdown edge cases
- Monitor API costs (translation could be expensive at scale)
- Consider implementing user preferences for language choice
- Add analytics to track Urdu vs English usage
- Implement rate limiting on client-side to avoid API abuse

## Accessibility Considerations

- Toggle button has clear visual state (active language highlighted)
- Toggle has ARIA labels for screen readers
- Translated content maintains semantic HTML structure
- Language attribute on document (`lang="ur"` for Urdu)

## References

- [Google Generative AI Documentation](https://ai.google.dev/)
- [Markdown Specification](https://spec.commonmark.org/)
- [BCP 47 Language Tags](https://www.ietf.org/rfc/bcp47.txt)
- [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
