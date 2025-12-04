# Specification 006: User Features

**Feature Name**: user-features  
**Status**: Draft  
**Created**: 2025-12-04

## Overview

Progress tracking, bookmarks, and personalization features for authenticated users.

## Description

This feature enables users to track their learning progress through the book, bookmark important sections for quick reference, and personalize their learning experience by adjusting difficulty levels and hints.

## Scope

### In Scope
- Progress tracking (automatic, as users read chapters)
- Completion percentage per chapter and overall
- Reading history (timestamp of last read, pages visited)
- Bookmark sections within chapters (title, URL, timestamp)
- View bookmarks in user profile
- Personalization settings (learning difficulty, show/hide hints)
- User dashboard showing:
  - Overall completion percentage
  - List of bookmarked sections
  - Recently read chapters
  - Learning statistics
- Data persistence in database (Neon PostgreSQL)
- Real-time progress updates (no page reload)

### Out of Scope
- Social features (sharing progress, comparing with others)
- Achievements/badges/gamification (future enhancement)
- Collaborative features (study groups, annotations)
- Spaced repetition or learning algorithms
- Progress export/reports
- Mobile app (web-only for MVP)
- Push notifications

## Success Criteria

- [ ] Progress automatically tracked as user reads chapters
- [ ] Completion percentage calculated correctly (0-100%)
- [ ] Users can bookmark any section with one click
- [ ] Bookmarks show title, location, and timestamp
- [ ] Dashboard displays all bookmarks in accessible format
- [ ] Personalization settings persist across sessions
- [ ] Progress visible on book sidebar (chapter progress bars)
- [ ] Works on mobile devices
- [ ] Data synced to database immediately
- [ ] No JavaScript errors when tracking progress

## Technical Requirements

### Frontend Components
- Progress bar (per chapter, overall)
- Bookmark button (appears in chapter sections)
- Bookmarks list/management
- User dashboard
- Personalization settings modal
- Reading history view

### Backend API Endpoints
- `POST /api/progress` - Update chapter progress
- `GET /api/progress` - Get user progress
- `POST /api/bookmarks` - Create bookmark
- `GET /api/bookmarks` - List user bookmarks
- `DELETE /api/bookmarks/:id` - Delete bookmark
- `PUT /api/preferences` - Update personalization settings
- `GET /api/preferences` - Get user preferences

### Database Models
- Progress model (userId, chapterId, percentage, lastReadAt)
- Bookmark model (userId, chapterId, sectionId, title, url)
- UserPreference model (userId, difficulty, showHints, theme)

### State Management
- Global user state (progress, bookmarks, preferences)
- Real-time updates via API
- Optimistic UI updates

## File Structure

```
backend/
├── api/
│   ├── progress/
│   │   └── route.ts (GET/POST progress)
│   ├── bookmarks/
│   │   └── route.ts (GET/POST bookmarks)
│   │   └── [id]/route.ts (DELETE bookmark)
│   └── preferences/
│       └── route.ts (GET/PUT preferences)
├── lib/
│   ├── progress.ts (progress logic)
│   ├── bookmarks.ts (bookmark logic)
│   └── preferences.ts (preference logic)
└── prisma/schema.prisma (updated models)

frontend/
├── app/
│   ├── dashboard/page.tsx (main dashboard)
│   ├── progress/page.tsx (progress details)
│   └── settings/preferences/page.tsx
├── components/
│   ├── Progress/
│   │   ├── ProgressBar.tsx
│   │   ├── ProgressIndicator.tsx
│   │   └── useProgress.ts
│   ├── Bookmarks/
│   │   ├── BookmarkButton.tsx
│   │   ├── BookmarksList.tsx
│   │   └── useBookmarks.ts
│   ├── Preferences/
│   │   ├── PreferencesModal.tsx
│   │   └── usePreferences.ts
│   └── Dashboard/
│       ├── DashboardOverview.tsx
│       ├── RecentlyRead.tsx
│       └── LearningStats.tsx
└── lib/
    ├── progress.ts (progress API client)
    ├── bookmarks.ts (bookmarks API client)
    └── preferences.ts (preferences API client)
```

## Progress Tracking

### How It Works
1. User scrolls through chapter
2. JavaScript detects scroll position
3. If user has read > 50% of chapter, mark as partially complete
4. If user scrolls to end, mark as 100% complete
5. Update backend with progress percentage
6. Calculate overall completion (avg of all chapters)

### Progress Events
```typescript
// Triggered on:
- Scroll to bottom of chapter → 100% complete
- Scroll past 50% → 50% complete
- First visit → 0% (auto-complete to 50% after 5 min reading)
- Every chapter scroll → update lastReadAt timestamp
```

### Storage Format
```typescript
interface Progress {
  id: string;
  userId: string;
  chapterId: string;
  percentage: number; // 0-100
  lastReadAt: DateTime;
  updatedAt: DateTime;
}

// Unique constraint: (userId, chapterId)
```

## Bookmarks

### Creating Bookmarks
1. User highlights text or clicks bookmark button
2. Section title extracted from nearest heading
3. URL captured (with anchor to section)
4. Bookmark saved with timestamp
5. UI confirmation (toast notification)

### Bookmark Structure
```typescript
interface Bookmark {
  id: string;
  userId: string;
  chapterId: string;
  sectionId: string; // heading ID for anchor link
  title: string; // section title
  customNotes?: string; // optional user notes
  createdAt: DateTime;
}
```

### Bookmark Actions
- Create: Click bookmark button (one-click)
- View: See all bookmarks in dashboard or sidebar
- Navigate: Click bookmark → jump to section
- Delete: Remove from bookmarks (with undo option)
- Search: Filter bookmarks by keyword

## Personalization Settings

### Available Preferences
```typescript
interface UserPreference {
  id: string;
  userId: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced'; // default: intermediate
  showHints: boolean; // default: true
  theme: 'light' | 'dark' | 'auto'; // default: auto
  fontSize: 'small' | 'normal' | 'large'; // default: normal
  language: string; // default: en
}
```

### UI Impact
- **Difficulty**: Shows/hides supplementary content markers
  - Beginner: Show all hints and definitions
  - Intermediate: Show some hints
  - Advanced: Hide hints, show advanced topics
  
- **Theme**: Docusaurus dark mode setting
  
- **Font Size**: CSS variable for body font-size
  - small: 14px
  - normal: 16px
  - large: 18px

## User Dashboard

### Dashboard Layout
```
┌─────────────────────────────────────┐
│ User Profile: Name | Avatar | Logout │
├─────────────────────────────────────┤
│                                       │
│ Progress Overview                     │
│ ████████░░ 80% Complete (4/5 chapters) │
│                                       │
│ ─────────────────────────────────────│
│ Recently Read                         │
│ • Chapter 2: AI Foundations (2h ago)  │
│ • Chapter 1: Introduction (1d ago)    │
│                                       │
│ ─────────────────────────────────────│
│ Bookmarks (12 total)                  │
│ • Section 1: Neural Networks          │
│ • Section 2: Actuators & Sensors      │
│ [...see all]                          │
│                                       │
│ ─────────────────────────────────────│
│ [Preferences] [Download Progress]    │
└─────────────────────────────────────┘
```

## API Endpoints

### Progress API
```typescript
// GET /api/progress
// Returns: { chapters: Progress[], overall: number }

// POST /api/progress
// Body: { chapterId: string, percentage: number }
// Returns: { success: boolean, progress: Progress }

// GET /api/progress/:chapterId
// Returns: Progress object
```

### Bookmarks API
```typescript
// GET /api/bookmarks
// Returns: Bookmark[]

// POST /api/bookmarks
// Body: { chapterId: string, sectionId: string, title: string }
// Returns: Bookmark

// DELETE /api/bookmarks/:id
// Returns: { success: boolean }
```

### Preferences API
```typescript
// GET /api/preferences
// Returns: UserPreference

// PUT /api/preferences
// Body: Partial<UserPreference>
// Returns: UserPreference
```

## Acceptance Criteria

### Progress Tracking
1. Progress updates as user scrolls chapter
2. Completion percentage calculated correctly
3. Overall progress shows average of all chapters
4. Last read timestamp updates on each visit
5. Progress persists across sessions
6. Works on mobile devices

### Bookmarks
1. Bookmark button appears on all sections
2. One-click bookmarking works
3. Bookmarks list shows all user bookmarks
4. Bookmarks are clickable (navigate to section)
5. Delete bookmarks works
6. Bookmarks persist in database

### Personalization
1. Difficulty setting changes visible content
2. Theme setting applies to book
3. Font size setting changes text size
4. Settings persist across sessions
5. Reset to defaults option works

### Dashboard
1. Dashboard loads without errors
2. Shows overall progress percentage
3. Lists recently read chapters
4. Shows all bookmarks
5. Mobile responsive
6. Performance: loads in < 2 seconds

### Data Persistence
1. All data synced to Neon database
2. Data survives page reload
3. Data survives browser restart
4. Multiple devices can sync (if user logs in elsewhere)

## Database Schema

```prisma
// Add to existing Prisma schema

model Progress {
  id        String   @id @default(cuid())
  userId    String
  chapterId String
  percentage Int     @default(0)
  lastReadAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId, chapterId])
  @@index([userId])
}

model Bookmark {
  id        String   @id @default(cuid())
  userId    String
  chapterId String
  sectionId String
  title     String
  notes     String?
  createdAt DateTime @default(now())

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([chapterId])
}

model UserPreference {
  id        String   @id @default(cuid())
  userId    String   @unique
  difficulty String  @default("intermediate")
  showHints Boolean  @default(true)
  theme     String   @default("auto")
  fontSize  String   @default("normal")
  language  String   @default("en")
  updatedAt DateTime @updatedAt

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
}

// Update User model
model User {
  // ... existing fields ...
  bookmarks       Bookmark[]
  progress        Progress[]
  preferences     UserPreference?
}
```

## Dependencies & Blockers

### Prerequisites
- User authentication working (Feature 005)
- Neon PostgreSQL database configured
- Prisma migrations up to date
- Backend API routes established

### Blockers
- None identified

## Timeline & Effort

**Estimated Effort**: 8-10 hours
- Backend API setup: 2-3 hours
- Frontend components: 3-4 hours
- Progress tracking logic: 1-2 hours
- Testing and optimization: 1-2 hours

## Implementation Notes

- Debounce progress updates (max 1 per 5 seconds) to reduce API calls
- Use React Context for user data state
- Implement optimistic UI updates (update locally first)
- Cache bookmarks in sessionStorage for quick access
- Auto-save preferences 1 second after change
- Implement retry logic for API failures

## Performance Optimization

- Pagination for bookmarks list (show 10 at a time)
- Lazy-load dashboard components
- Cache progress data in localStorage
- Debounce scroll events for progress tracking
- Index database queries on (userId, chapterId)

## References

- [Prisma Relations Documentation](https://www.prisma.io/docs/concepts/relations)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [React Hooks Best Practices](https://react.dev/reference/react/hooks)
- [IndexedDB vs LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
