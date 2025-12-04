# Frontend Source Code

**Purpose**: React components, hooks, and utilities for the book platform.

**Structure**:
- `components/` - Reusable UI components (ChatWidget, TranslationToggle, etc.)
- `hooks/` - Custom React hooks (useChat, useAuth, useTranslation)
- `lib/` - Frontend utilities (api-client, storage, constants)
- `types/` - TypeScript types (re-exported from backend/lib/shared)
- `theme/` - Docusaurus theme customization
- `pages/` - Custom pages (index, auth pages)

**Principles**:
- Components are self-contained (one directory per component)
- Business logic in hooks, not components
- API calls via `lib/api-client.ts` (centralized)
- Types shared with backend (no duplication)
