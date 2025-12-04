# API Routes

**Purpose**: Next.js 13+ App Router API endpoints.

**Structure**: Each route has `route.ts` (handler) + `README.md` (docs):
```
route-name/
├── route.ts   # GET/POST/PATCH/DELETE handlers
└── README.md  # Endpoint documentation (request/response)
```

**Routes**:
- `chat/` - POST /api/chat (streaming SSE response)
- `translate/` - POST /api/translate (chapter translation)
- `auth/` - POST /api/auth/signin, /signup, /signout, /google
- `progress/` - GET/POST /api/progress (user progress tracking)
- `bookmarks/` - GET/POST/DELETE /api/bookmarks (bookmark CRUD)
- `user/` - GET/PATCH /api/user (profile management)

**Principles**:
- Thin routes (business logic in `lib/`)
- Validate input with Zod (shared validators)
- Error handling with proper HTTP status codes
- Authentication middleware for protected routes
