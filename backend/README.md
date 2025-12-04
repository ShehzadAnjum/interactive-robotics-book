# Backend - Next.js API

**Purpose**: Backend API for chat, translation, authentication, and user features.

**Tech Stack**:
- Next.js 16 (App Router)
- Prisma ORM 6.x
- TypeScript 5.6.2
- Vercel Edge Runtime
- Neon Serverless PostgreSQL

**Structure**:
- `app/api/` - API routes (chat, translate, auth, progress, bookmarks, user)
- `lib/` - Backend utilities (ai, auth, db, shared, utils)
- `prisma/` - Database schema & migrations
- `tests/` - Unit tests + integration tests

**Development**:
```bash
npm install
npm run dev  # http://localhost:3001
```

**Database**:
```bash
npx prisma migrate dev  # Apply migrations
npx prisma studio       # GUI for database
npx prisma db seed      # Seed data
```

**See Also**:
- [Next.js App Router](https://nextjs.org/docs/app)
- [Prisma Documentation](https://www.prisma.io/docs)
- [CLAUDE.md](./CLAUDE.md) - Backend-specific instructions
