# Backend Utilities

**Purpose**: Backend business logic, AI integration, auth, database utilities.

**Structure**:
- `ai/` - Google Gemini integration (chat, translation)
- `auth/` - better-auth configuration, session management
- `db/` - Prisma client singleton, seeding
- `shared/` - Shared with frontend (types, constants, validators)
- `utils/` - Generic utilities (errors, logging)

**Principles**:
- Business logic here, not in routes
- Reusable functions (DRY principle)
- Type-safe (TypeScript strict mode)
- Well-documented (JSDoc comments)
