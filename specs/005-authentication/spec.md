# Specification 005: Authentication

**Feature Name**: authentication  
**Status**: Draft  
**Created**: 2025-12-04

## Overview

User authentication with email/password and Google OAuth using better-auth library.

## Description

This feature enables user registration and login through multiple methods: traditional email/password and Google OAuth. Users can create accounts, manage sessions, reset passwords, and access protected content.

## Scope

### In Scope
- Email/password registration and validation
- Email/password login
- Google OAuth 2.0 integration
- Email verification flow (optional for MVP, can be added later)
- Password reset via email
- Protected routes (profile, progress tracking)
- Session management using JWT tokens
- User profile page (view/edit basic info)
- Logout functionality
- Session persistence across browser restarts
- Better-auth library integration with Prisma

### Out of Scope
- Multi-factor authentication/2FA (future enhancement)
- Social login beyond Google (Facebook, GitHub, etc. - future)
- Role-based access control (all users have same permissions)
- Admin panel or user management dashboard
- Email confirmation for registration
- Account deletion/GDPR data export (future)

## Success Criteria

- [ ] User can register with email and password
- [ ] User can log in with email and password
- [ ] User can log in with Google OAuth
- [ ] Session persists across browser sessions (24+ hours)
- [ ] Protected routes redirect unauthenticated users to login
- [ ] Password reset flow works end-to-end
- [ ] User profile displays basic info (name, email, avatar)
- [ ] User can log out successfully
- [ ] Integration with Prisma + Neon PostgreSQL works
- [ ] Better-auth library properly configured

## Technical Requirements

### Frontend Authentication
- Next.js 16+ with App Router
- Client-side session verification
- Protected route wrapper component
- Login page (email/password form)
- Google OAuth button
- User profile page
- Password reset form (email input)

### Backend Authentication
- Better-auth library (`better-auth@^1.3.4`)
- API routes for auth endpoints
- Prisma ORM for database operations
- JWT token generation and validation
- Session storage in database

### Database Schema
- User model (id, email, name, image, emailVerified, createdAt, updatedAt)
- Session model (id, userId, token, expiresAt, ipAddress, userAgent)
- Account model (OAuth provider data)
- Timestamps for audit trail

### Environment Variables
```
# Database
DATABASE_URL=postgresql://[user]:[password]@[host]:5432/[database]

# OAuth
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REDIRECT_URI=http://localhost:3001/api/auth/callback/google

# Session
JWT_SECRET=random-secret-key-min-32-chars
SESSION_EXPIRY=86400000 (24 hours in ms)

# Email (for password reset)
RESEND_API_KEY=your-resend-key (or alternative email service)
```

## File Structure

```
backend/
├── api/
│   └── auth/
│       ├── route.ts (better-auth endpoints)
│       └── callback/
│           └── google/route.ts (OAuth callback)
├── lib/
│   ├── auth.ts (auth configuration)
│   └── db.ts (Prisma client)
├── prisma/
│   ├── schema.prisma (database schema)
│   └── migrations/
└── middleware.ts (session verification)

frontend/
├── app/
│   ├── auth/
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   ├── forgot-password/page.tsx
│   │   └── reset-password/page.tsx
│   ├── profile/page.tsx (protected)
│   └── layout.tsx
├── components/
│   ├── Auth/
│   │   ├── ProtectedRoute.tsx
│   │   ├── LoginForm.tsx
│   │   ├── RegisterForm.tsx
│   │   └── GoogleOAuthButton.tsx
│   └── User/
│       ├── ProfilePage.tsx
│       └── UserMenu.tsx
├── lib/
│   ├── auth-client.ts (client-side auth)
│   └── session.ts (session management)
└── middleware.ts (route protection)
```

## Authentication Flow

### Registration
1. User fills email/password form
2. Validate email format and password strength
3. Hash password with bcrypt
4. Create user in database
5. Auto-create session or prompt email verification
6. Redirect to profile or book

### Email/Password Login
1. User enters email and password
2. Query database for user by email
3. Compare password with bcrypt hash
4. If match: create session token, set HTTP-only cookie
5. Redirect to profile or requested page
6. If no match: show error message

### Google OAuth Flow
1. User clicks "Login with Google"
2. Redirect to Google consent screen
3. User authorizes access
4. Google redirects to callback with auth code
5. Exchange code for tokens with Google API
6. Create/update user in database
7. Create session in database
8. Redirect to profile or book

### Session Management
1. JWT token stored in HTTP-only cookie (secure)
2. Token contains userId and expiration
3. On each request, verify token signature
4. Check expiration and update if needed
5. User ID available in request context

### Password Reset
1. User enters email on reset form
2. Generate reset token (random, 32 chars)
3. Send reset link via email (with token)
4. User clicks link and enters new password
5. Verify token is valid and not expired (15 min TTL)
6. Hash new password and update in database
7. Invalidate old sessions (force re-login)

## Prisma Schema

```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  emailVerified Boolean   @default(false)
  name          String?
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  sessions  Session[]
  accounts  Account[]

  @@index([email])
}

model Session {
  id        String   @id @default(cuid())
  userId    String
  expiresAt DateTime
  token     String   @unique

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([token])
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
  @@index([userId])
}

model PasswordReset {
  id        String   @id @default(cuid())
  email     String
  token     String   @unique
  expiresAt DateTime
  createdAt DateTime @default(now())

  @@index([email])
  @@index([token])
}
```

## Better-auth Configuration

```typescript
// lib/auth.ts
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { prisma } from './db';

export const auth = betterAuth({
  database: prismaAdapter(prisma),
  secret: process.env.JWT_SECRET,
  
  plugins: [],
  
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      redirectURL: process.env.GOOGLE_REDIRECT_URI,
    },
  },
  
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false, // MVP: disable verification
  },
});
```

## Acceptance Criteria

### Registration
1. Email format validated
2. Password strength checked (min 8 chars, complexity)
3. Duplicate email rejected
4. User created in database
5. Session created automatically
6. Redirect successful

### Login (Email/Password)
1. Correct credentials allow login
2. Wrong password shows error
3. Non-existent email shows generic error (security)
4. Session token created and stored
5. Session persists on browser restart

### Login (Google OAuth)
1. Google button visible on login page
2. OAuth flow completes successfully
3. User created in database on first login
4. Session created
5. Existing user can login again
6. User info (name, photo) from Google synced

### Protected Routes
1. Unauthenticated user redirected to login
2. Authenticated user can access
3. Session expires after 24 hours
4. Expired session redirects to login
5. /profile page shows user info

### User Profile
1. Profile page displays user name and email
2. User can edit name (optional)
3. Google photo displayed (if OAuth)
4. Logout button works
5. After logout, user cannot access protected routes

### Password Reset
1. User enters email on reset page
2. Email sent (can be verified in test)
3. Reset link valid for 15 minutes
4. Clicking link shows password form
5. New password sets successfully
6. Old sessions invalidated
7. User must login with new password

## Dependencies & Blockers

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0
- Neon PostgreSQL database set up
- Google OAuth credentials (from Google Cloud Console)
- Email service configured (Resend, SendGrid, etc.)

### External Dependencies
- Better-auth library
- Prisma ORM
- Next.js 16+
- Google OAuth API
- Neon PostgreSQL

### Blockers
- Google OAuth setup (requires manual console config)
- Email service configuration

## Timeline & Effort

**Estimated Effort**: 10-12 hours
- Frontend setup: 3-4 hours
- Backend API setup: 2-3 hours
- Google OAuth integration: 2-3 hours
- Password reset flow: 1-2 hours
- Testing: 1-2 hours

## Implementation Notes

- Use HTTP-only cookies for token storage (more secure)
- Implement CSRF protection with SameSite cookie attribute
- Hash passwords with bcrypt (better-auth handles this)
- Validate input on both frontend and backend
- Implement rate limiting on auth endpoints (prevent brute force)
- Log auth events for security audit trail
- Test with real Google OAuth (development credentials)
- Use environment variables for all secrets

## Security Considerations

- Never log passwords or tokens
- Use HTTPS in production
- Implement rate limiting (5 failed logins → 15 min lockout)
- CSRF tokens for state-changing operations
- Session timeout (24 hours)
- Secure password reset tokens (random, single-use)
- Validate email format server-side
- Sanitize user input to prevent injection

## References

- [Better-auth Documentation](https://www.better-auth.com/docs)
- [Prisma Adapter for Better-auth](https://www.better-auth.com/docs/adapters/prisma)
- [Google OAuth 2.0](https://developers.google.com/identity/protocols/oauth2)
- [OWASP Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
