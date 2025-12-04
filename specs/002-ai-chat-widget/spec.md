# Specification 002: AI Chat Widget

**Feature Name**: ai-chat-widget  
**Status**: Draft  
**Created**: 2025-12-04

## Overview

Floating AI assistant powered by Google Gemini 2.0 Flash for answering questions about book content.

## Description

This feature provides an interactive AI chat widget that helps users learn by answering questions about the robotics and AI content. The widget uses Google Gemini 2.0 Flash with streaming responses and allows users to ask questions or select text to get AI-powered explanations.

## Scope

### In Scope
- Floating chat widget UI (bottom-right corner, draggable)
- Integration with Google Gemini 2.0 Flash API
- Full-text search across all 3 chapters for context
- Streaming responses using Server-Sent Events (SSE)
- Text selection → Ask AI feature (context-aware)
- Conversation history (per session, client-side storage)
- Loading states and error handling
- Mobile-friendly chat interface with responsive design
- Rate limiting and request throttling
- Conversation clearing and reset functionality

### Out of Scope
- Vector search / RAG / semantic search (future enhancement)
- User-specific persistent chat history (requires authentication)
- Voice input/output (future enhancement)
- Multi-language support for chat responses
- Chat history export/sharing
- Integration with multiple AI providers

## Success Criteria

- [ ] Chat widget renders on all pages without blocking content
- [ ] Successfully connects to Google Gemini API
- [ ] Responses stream in real-time using SSE
- [ ] Text selection on page triggers chat with selected context
- [ ] Handles API failures gracefully with user-friendly error messages
- [ ] Works on mobile devices (responsive, touch-friendly)
- [ ] Response time < 3 seconds for typical query (initial token)
- [ ] Conversation history preserved during session
- [ ] Widget can be minimized/maximized and repositioned
- [ ] CSS doesn't conflict with book content styles

## Technical Requirements

### Frontend Components
- Floating widget container (React component)
- Chat message list with auto-scroll
- Text input field with send button
- Text selection handler with context extraction
- Loading indicator and error boundary

### API Integration
- Google Gemini 2.0 Flash API endpoint: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent`
- Authentication: API key from environment variable
- Request format: JSON with role-based messages
- Response format: Server-Sent Events stream

### State Management
- Conversation history (client-side array)
- Loading state for responses
- Error state with retry capability
- Widget visibility state (open/closed)

### Environment Variables
```
NEXT_PUBLIC_GEMINI_API_KEY=<your-api-key>
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000 (dev) or production URL
```

### Dependencies
- React 18.2.0
- React hooks for state management
- Fetch API for streaming responses
- CSS Modules or Tailwind CSS for styling

## File Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── ChatWidget/
│   │   │   ├── ChatWidget.tsx (main component)
│   │   │   ├── ChatWidget.module.css
│   │   │   ├── MessageList.tsx
│   │   │   ├── ChatInput.tsx
│   │   │   └── useChatWidget.ts (custom hook)
│   │   └── RootLayout.tsx (embed widget)
│   └── lib/
│       ├── gemini.ts (API integration)
│       ├── textSelection.ts (context extraction)
│       └── searchContent.ts (full-text search)
└── package.json
```

## API Request Format

```typescript
// Request
POST /api/chat
{
  "messages": [
    {
      "role": "user",
      "content": "What is humanoid robotics?"
    }
  ],
  "selectedText": "...", // optional context
  "chapterContext": "Chapter 1: Introduction"
}

// Response (SSE Stream)
data: {"text": "Humanoid robotics..."}
data: {"text": " is the field of "}
data: {"text": "designing robots..."}
```

## Acceptance Criteria

### Functionality
1. Widget appears on all book pages after page load
2. Chat input accepts user messages
3. Gemini API returns responses correctly
4. Streaming responses display character by character
5. Text selection → Ask AI works with proper context
6. Error messages display user-friendly text

### Performance
1. Widget initialization < 500ms
2. First response token appears < 2 seconds
3. Full response streams at > 10 chars/second
4. Memory usage stays < 50MB for 100-message conversation
5. No page layout shift when widget opens

### Mobile Experience
1. Widget fits on mobile screens (< 600px width)
2. Keyboard doesn't overlap input field
3. Touch scrolling in chat list works smoothly
4. Text selection works on mobile

### Error Handling
1. Network errors show retry button
2. API rate limits handled gracefully
3. Invalid responses don't crash widget
4. Session recovery after page reload

## Dependencies & Blockers

### Prerequisites
- Google Cloud project with Gemini API enabled
- API key created and available
- Frontend environment configured
- Chapter content available for search indexing

### External Dependencies
- Google Gemini 2.0 Flash API (may have rate limits)
- SSE support in browser (all modern browsers support)

### Blockers
- None identified, but requires Google Cloud setup

## Timeline & Effort

**Estimated Effort**: 8-10 hours
- Setup & integration: 2-3 hours
- UI/component development: 3-4 hours
- Streaming & error handling: 2-3 hours
- Testing & mobile optimization: 1-2 hours

## Implementation Notes

- Use React Context for widget state instead of props drilling
- Implement debouncing for rapid user inputs
- Store conversation in sessionStorage for session persistence
- Use CSS Grid/Flexbox for responsive design
- Implement accessibility features (ARIA labels, keyboard navigation)
- Consider using Tailwind CSS for consistent styling
- Add unit tests for API integration and text selection logic

## References

- [Google Generative AI Documentation](https://ai.google.dev/tutorials/rest_quickstart)
- [Server-Sent Events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)
- [React Streaming with Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)
