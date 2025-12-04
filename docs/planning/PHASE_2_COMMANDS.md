# Phase 2: Specifications & Workspace Setup - Command List

**Duration**: 6-8 hours
**Goal**: Create 6 feature specifications, set up frontend/backend workspaces, prepare for implementation
**Prerequisites**: Phase 1 complete (repository structure, Constitution 2.0, SpecKit Plus integrated)

---

## ⚠️ BEFORE YOU START

**Required Information** (have these ready):
1. Access to old project chapters (~/dev/robotics_book/docs/)
2. Gemini API key
3. Neon database URL (if not already have)
4. Google OAuth credentials (if implementing auth now)

**Time to allocate**: 6-8 hours of focused work (can split into 2-3 sessions)

**Constitutional Reminder**: Follow SpecKit Plus Journey (Specify → Plan → Tasks → Implement)

---

## 📋 PHASE 2 CHECKLIST

- [ ] Step 1: Create root package.json (monorepo configuration)
- [ ] Step 2: Create 6 feature specifications using `/sp.specify`
- [ ] Step 3: Set up frontend workspace (Docusaurus)
- [ ] Step 4: Set up backend workspace (Next.js + Prisma)
- [ ] Step 5: Configure shared types
- [ ] Step 6: Create initial Prisma schema
- [ ] Step 7: Test development environment
- [ ] Step 8: Commit and push workspace setup

---

## 🚀 STEP 1: CREATE ROOT PACKAGE.JSON (Monorepo)

**Purpose**: Set up npm workspaces for monorepo management.

```bash
# Navigate to project root
cd ~/dev/interactive-robotics-book

# Create root package.json
cat > package.json << 'EOF'
{
  "name": "interactive-robotics-book",
  "version": "1.0.0",
  "description": "Physical AI & Humanoid Robotics Interactive Textbook Platform",
  "private": true,
  "workspaces": [
    "frontend",
    "backend"
  ],
  "scripts": {
    "dev:frontend": "npm run start --workspace=frontend",
    "dev:backend": "npm run dev --workspace=backend",
    "dev": "concurrently \"npm run dev:frontend\" \"npm run dev:backend\"",
    "build:frontend": "npm run build --workspace=frontend",
    "build:backend": "npm run build --workspace=backend",
    "build": "npm run build:frontend && npm run build:backend",
    "test": "npm run test --workspaces",
    "test:frontend": "npm run test --workspace=frontend",
    "test:backend": "npm run test --workspace=backend",
    "lint": "npm run lint --workspaces",
    "typecheck": "npm run typecheck --workspaces",
    "clean": "rm -rf node_modules frontend/node_modules backend/node_modules frontend/.docusaurus frontend/build backend/.next"
  },
  "devDependencies": {
    "concurrently": "^8.2.2"
  },
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/ShehzadAnjum/interactive-robotics-book.git"
  },
  "keywords": [
    "robotics",
    "ai",
    "education",
    "docusaurus",
    "interactive-textbook"
  ],
  "author": "Anjum",
  "license": "MIT"
}
EOF

# Verify package.json created
cat package.json | head -20
```

**Expected output**: Should see package.json with workspaces configuration.

**Verify**:
```bash
npm --version  # Should be 9.0.0+
node --version # Should be 18.0.0+
```

---

## 📝 STEP 2: CREATE 6 FEATURE SPECIFICATIONS

**Purpose**: Create detailed specifications for each feature using SpecKit Plus methodology.

### **Constitutional Note**:
Per Principle IV (SpecKit Plus Journey), we MUST create specifications before any implementation.

### 2a. Specification 001: Book Platform

```bash
# Use Claude Code slash command
/sp.specify Create specification for book platform feature.

Feature name: book-platform
Description: Core Docusaurus-based book infrastructure with 3 chapters, navigation, and MDX support.

Scope:
- Docusaurus 3.6.3 setup and configuration
- 3 chapters (copied from existing work, no modifications)
- Table of contents and navigation
- Code syntax highlighting
- Mermaid diagram support
- Mobile-responsive design
- Static site generation

Out of scope (for this feature):
- AI chat widget (separate feature)
- Translation (separate feature)
- Search (separate feature)
- User authentication (separate feature)

Success criteria:
- Docusaurus builds without errors
- All 3 chapters render correctly
- Navigation works (prev/next, sidebar)
- Code examples display with syntax highlighting
- Mermaid diagrams render
- Mobile responsive (Lighthouse mobile score ≥ 90)
- Build time < 60 seconds
```

**User Action Required**: Execute `/sp.specify` command in Claude Code terminal. Answer any clarification questions.

**Expected Output**: `specs/001-book-platform/spec.md` created

---

### 2b. Specification 002: AI Chat Widget

```bash
/sp.specify Create specification for AI chat widget feature.

Feature name: ai-chat-widget
Description: Floating AI assistant powered by Google Gemini 2.0 Flash for answering questions about book content.

Scope:
- Floating chat widget UI (bottom-right corner)
- Integration with Google Gemini 2.0 Flash API
- Full-text search across all 3 chapters (NOT vector search yet)
- Streaming responses (Server-Sent Events)
- Text selection → Ask AI feature
- Conversation history (per session, client-side)
- Loading states and error handling
- Mobile-friendly chat interface

Out of scope (for this feature):
- Vector search / RAG (future enhancement)
- User-specific chat history persistence (requires auth)
- Voice input/output (future enhancement)

Success criteria:
- Chat widget renders on all pages
- Successfully queries Gemini API
- Responses stream in real-time (SSE)
- Text selection triggers chat with context
- Error handling for API failures
- Works on mobile devices
- Response time < 3 seconds for typical query
```

**User Action Required**: Execute `/sp.specify` command.

**Expected Output**: `specs/002-ai-chat-widget/spec.md` created

---

### 2c. Specification 003: Translation

```bash
/sp.specify Create specification for Urdu translation feature.

Feature name: translation
Description: Per-chapter translation to Urdu using Google Gemini API.

Scope:
- Language toggle button on each chapter page
- Translate entire chapter to Urdu (on-demand)
- Cache translated content (client-side)
- Preserve formatting, code blocks, and diagrams
- Toggle back to English
- Translation status indicator (loading, complete)

Out of scope (for this feature):
- Additional languages beyond Urdu
- Persistent translation cache (requires backend)
- In-place editing of translations

Success criteria:
- Toggle button visible on all chapter pages
- Translation preserves markdown formatting
- Code blocks remain in English (not translated)
- Diagrams remain in original language
- Toggle works bidirectionally (EN ↔ UR)
- Translation completes in < 10 seconds per chapter
- Cached on client (no re-translation on toggle)
```

**User Action Required**: Execute `/sp.specify` command.

**Expected Output**: `specs/003-translation/spec.md` created

---

### 2d. Specification 004: Search

```bash
/sp.specify Create specification for search functionality.

Feature name: search
Description: Full-text search across all book content using Docusaurus search plugin.

Scope:
- Search bar in header/navigation
- Index all 3 chapters
- Search results with context preview
- Keyboard shortcuts (Ctrl+K / Cmd+K)
- Highlight search terms in results
- Navigate to exact section on click
- Works offline (indexed during build)

Out of scope (for this feature):
- Vector/semantic search (future enhancement)
- Search across user notes/bookmarks (requires auth)
- Search filters (by chapter, topic, etc.)

Success criteria:
- Search bar accessible from all pages
- Returns relevant results for queries
- Results link to exact chapter section
- Search index < 500KB (fast loading)
- Search results appear in < 500ms
- Works in offline mode
```

**User Action Required**: Execute `/sp.specify` command.

**Expected Output**: `specs/004-search/spec.md` created

---

### 2e. Specification 005: Authentication

```bash
/sp.specify Create specification for authentication feature.

Feature name: authentication
Description: User authentication with email/password and Google OAuth using better-auth.

Scope:
- Email/password registration and login
- Google OAuth integration
- Email verification (optional for MVP)
- Password reset flow
- Protected routes (profile, progress)
- Session management (JWT)
- User profile page

Out of scope (for this feature):
- Multi-factor authentication (future)
- Social login beyond Google (Facebook, GitHub, etc.)
- Role-based access control (all users have same permissions)

Success criteria:
- User can sign up with email/password
- User can log in with Google OAuth
- Session persists across browser sessions
- Protected routes redirect to login
- Password reset flow works
- User profile displays basic info
- Works with Prisma + Neon PostgreSQL
```

**User Action Required**: Execute `/sp.specify` command.

**Expected Output**: `specs/005-authentication/spec.md` created

---

### 2f. Specification 006: User Features

```bash
/sp.specify Create specification for user features (progress tracking, bookmarks, personalization).

Feature name: user-features
Description: Progress tracking, bookmarks, and personalization features for authenticated users.

Scope:
- Progress tracking (chapters read, completion percentage)
- Bookmark sections within chapters
- Reading history
- Personalization (adjust learning difficulty, show/hide hints)
- User dashboard showing progress

Out of scope (for this feature):
- Social features (sharing, commenting)
- Achievements/badges system
- Collaborative features (study groups)

Success criteria:
- Progress automatically tracked as user reads
- Users can bookmark any section
- Dashboard shows completion percentage
- Bookmarks accessible from user profile
- Personalization settings persist
- Works on mobile devices
```

**User Action Required**: Execute `/sp.specify` command.

**Expected Output**: `specs/006-user-features/spec.md` created

---

### 2g. Verify All Specifications Created

```bash
# Check all specifications exist
cd ~/dev/interactive-robotics-book
find specs -name "spec.md" -type f

# Expected output:
# specs/001-book-platform/spec.md
# specs/002-ai-chat-widget/spec.md
# specs/003-translation/spec.md
# specs/004-search/spec.md
# specs/005-authentication/spec.md
# specs/006-user-features/spec.md

# Count specifications
find specs -name "spec.md" -type f | wc -l
# Should output: 6
```

**If count ≠ 6**: Re-run missing `/sp.specify` commands above.

---

## 🎨 STEP 3: SET UP FRONTEND WORKSPACE (Docusaurus)

**Purpose**: Initialize Docusaurus workspace with proper configuration.

### 3a. Create Frontend Package.json

```bash
cd ~/dev/interactive-robotics-book/frontend

# Create package.json
cat > package.json << 'EOF'
{
  "name": "frontend",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start --port 3000",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve --port 3000",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids",
    "typecheck": "tsc",
    "lint": "eslint . --ext .ts,.tsx",
    "test": "jest"
  },
  "dependencies": {
    "@docusaurus/core": "^3.6.3",
    "@docusaurus/preset-classic": "^3.6.3",
    "@docusaurus/theme-mermaid": "^3.6.3",
    "@easyops-cn/docusaurus-search-local": "^0.52.2",
    "@mdx-js/react": "^3.0.0",
    "clsx": "^2.0.0",
    "prism-react-renderer": "^2.3.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@docusaurus/module-type-aliases": "^3.6.3",
    "@docusaurus/tsconfig": "^3.6.3",
    "@docusaurus/types": "^3.6.3",
    "@types/jest": "^29.5.0",
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "eslint": "^8.50.0",
    "eslint-plugin-react": "^7.33.0",
    "jest": "^29.7.0",
    "typescript": "~5.6.2"
  },
  "browserslist": {
    "production": [
      ">0.5%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 3 chrome version",
      "last 3 firefox version",
      "last 5 safari version"
    ]
  },
  "engines": {
    "node": ">=18.0"
  }
}
EOF

# Verify package.json
cat package.json | head -20
```

---

### 3b. Create Docusaurus Configuration

```bash
cd ~/dev/interactive-robotics-book/frontend

# Create docusaurus.config.ts
cat > docusaurus.config.ts << 'EOF'
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Interactive Textbook for Physical AI Learning',
  favicon: 'img/favicon.ico',

  // Production URL
  url: 'https://shehzadanjum.github.io',
  baseUrl: '/interactive-robotics-book/',

  // GitHub Pages deployment
  organizationName: 'ShehzadAnjum',
  projectName: 'interactive-robotics-book',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/ShehzadAnjum/interactive-robotics-book/tree/main/frontend/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Physical AI & Robotics',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },
        {
          href: 'https://github.com/ShehzadAnjum/interactive-robotics-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Introduction',
              to: '/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ShehzadAnjum/interactive-robotics-book',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  // Mermaid for diagrams
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Search plugin
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
      },
    ],
  ],
};

export default config;
EOF

# Verify config created
head -20 docusaurus.config.ts
```

---

### 3c. Create TypeScript Configuration

```bash
cd ~/dev/interactive-robotics-book/frontend

# Create tsconfig.json
cat > tsconfig.json << 'EOF'
{
  "extends": "@docusaurus/tsconfig",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@site/*": ["./*"]
    }
  }
}
EOF

# Verify tsconfig created
cat tsconfig.json
```

---

### 3d. Create Sidebar Configuration

```bash
cd ~/dev/interactive-robotics-book/frontend

# Create sidebars.ts
cat > sidebars.ts << 'EOF'
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Chapter 1: Introduction to Physical AI',
      items: [
        'chapter-01/index',
        'chapter-01/what-is-physical-ai',
        'chapter-01/humanoid-robotics-overview',
        'chapter-01/why-learn-physical-ai',
        'chapter-01/course-objectives',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 2: AI Foundations',
      items: [
        'chapter-02/index',
        'chapter-02/machine-learning-basics',
        'chapter-02/neural-networks',
        'chapter-02/training-models',
        'chapter-02/ai-for-robotics',
      ],
    },
    {
      type: 'category',
      label: 'Chapter 3: Hardware Fundamentals',
      items: [
        'chapter-03/index',
        'chapter-03/actuators-sensors',
        'chapter-03/microcontrollers',
        'chapter-03/power-systems',
        'chapter-03/mechanical-design',
      ],
    },
  ],
};

export default sidebars;
EOF

# Verify sidebars created
cat sidebars.ts
```

---

## ⚙️ STEP 4: SET UP BACKEND WORKSPACE (Next.js + Prisma)

**Purpose**: Initialize Next.js API workspace with Prisma ORM.

### 4a. Create Backend Package.json

```bash
cd ~/dev/interactive-robotics-book/backend

# Create package.json
cat > package.json << 'EOF'
{
  "name": "backend",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3001",
    "build": "next build",
    "start": "next start -p 3001",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test": "jest",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:deploy": "prisma migrate deploy",
    "prisma:studio": "prisma studio",
    "prisma:seed": "tsx prisma/seed.ts"
  },
  "dependencies": {
    "@prisma/client": "^6.0.0",
    "better-auth": "^1.3.4",
    "next": "^16.0.6",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "zod": "^3.22.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "16.0.6",
    "jest": "^29.7.0",
    "prisma": "^6.0.0",
    "tsx": "^4.7.0",
    "typescript": "~5.6.2"
  }
}
EOF

# Verify package.json
cat package.json | head -20
```

---

### 4b. Create Next.js Configuration

```bash
cd ~/dev/interactive-robotics-book/backend

# Create next.config.js
cat > next.config.mjs << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // API routes configuration
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: process.env.FRONTEND_URL || 'http://localhost:3000' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization' },
        ],
      },
    ];
  },
};

export default nextConfig;
EOF

# Verify config created
cat next.config.mjs
```

---

### 4c. Create TypeScript Configuration (Backend)

```bash
cd ~/dev/interactive-robotics-book/backend

# Create tsconfig.json
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

# Verify tsconfig created
cat tsconfig.json
```

---

## 🔗 STEP 5: CONFIGURE SHARED TYPES

**Purpose**: Set up shared types between frontend and backend.

```bash
cd ~/dev/interactive-robotics-book/backend/lib

# Create shared directory
mkdir -p shared

# Create shared/types.ts
cat > shared/types.ts << 'EOF'
// Shared TypeScript types between frontend and backend

export interface User {
  id: string;
  email: string;
  name: string | null;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  slug: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Bookmark {
  id: string;
  userId: string;
  chapterId: string;
  sectionId: string | null;
  title: string;
  createdAt: Date;
}

export interface Progress {
  id: string;
  userId: string;
  chapterId: string;
  completed: boolean;
  percentage: number;
  lastReadAt: Date;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatResponse {
  message: string;
  sources?: string[];
}
EOF

# Verify types created
cat shared/types.ts
```

---

## 🗄️ STEP 6: CREATE INITIAL PRISMA SCHEMA

**Purpose**: Define database schema for authentication and user features.

```bash
cd ~/dev/interactive-robotics-book/backend/prisma

# Create schema.prisma
cat > schema.prisma << 'EOF'
// Prisma schema for Interactive Robotics Book

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// User model (better-auth compatible)
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  emailVerified Boolean   @default(false)
  name          String?
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  // Relations
  sessions      Session[]
  accounts      Account[]
  bookmarks     Bookmark[]
  progress      Progress[]

  @@index([email])
}

// Session model (better-auth)
model Session {
  id        String   @id @default(cuid())
  userId    String
  expiresAt DateTime
  token     String   @unique
  ipAddress String?
  userAgent String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([token])
}

// Account model (OAuth providers)
model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
  @@index([userId])
}

// Bookmark model
model Bookmark {
  id        String   @id @default(cuid())
  userId    String
  chapterId String
  sectionId String?
  title     String
  url       String
  createdAt DateTime @default(now())

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([chapterId])
}

// Progress tracking model
model Progress {
  id         String   @id @default(cuid())
  userId     String
  chapterId  String
  completed  Boolean  @default(false)
  percentage Int      @default(0)
  lastReadAt DateTime @default(now())
  updatedAt  DateTime @updatedAt

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId, chapterId])
  @@index([userId])
}
EOF

# Verify schema created
cat schema.prisma
```

**⚠️ IMPORTANT**: Do NOT run `prisma migrate` yet. Wait until you have DATABASE_URL configured.

---

## 🧪 STEP 7: TEST DEVELOPMENT ENVIRONMENT

**Purpose**: Verify workspaces are set up correctly.

```bash
# Go to root
cd ~/dev/interactive-robotics-book

# Install dependencies (this will take 5-10 minutes)
npm install

# Verify installations
echo "=== Checking Frontend ==="
npm list --workspace=frontend | grep docusaurus

echo "=== Checking Backend ==="
npm list --workspace=backend | grep next

echo "=== Verifying TypeScript ==="
npm run typecheck --workspace=frontend
npm run typecheck --workspace=backend
```

**Expected Output**:
- Docusaurus packages installed in frontend
- Next.js packages installed in backend
- TypeScript compilation succeeds (no errors)

**If errors occur**: Review error messages and fix missing dependencies.

---

## 💾 STEP 8: COMMIT AND PUSH WORKSPACE SETUP

**Purpose**: Save Phase 2 progress to git.

```bash
cd ~/dev/interactive-robotics-book

# Stage all changes
git add .

# Check what will be committed
git status

# Commit with constitutional compliance
git commit -m "$(cat <<'EOF'
feat(phase2): create specifications and workspace setup

Specifications Created (6 features):
- 001-book-platform: Docusaurus book infrastructure
- 002-ai-chat-widget: AI chat with Gemini integration
- 003-translation: Urdu translation system
- 004-search: Full-text search functionality
- 005-authentication: Email + Google OAuth (better-auth)
- 006-user-features: Progress tracking, bookmarks, personalization

Workspace Setup:
- Root package.json with npm workspaces configuration
- Frontend workspace (Docusaurus 3.6.3, React 18, TypeScript)
- Backend workspace (Next.js 16, Prisma ORM, better-auth)
- Shared types between frontend and backend
- Initial Prisma schema (User, Session, Bookmark, Progress models)
- TypeScript configurations for both workspaces
- Development scripts (dev, build, test, lint)

Constitutional Principles Applied:
- SpecKit Plus Journey (Principle IV): Created specs before code
- Monorepo with Shared Types (Architecture Principle D)
- Database Schema as Code (Architecture Principle B): Prisma schema
- Smallest Viable Change (Principle II): Workspace setup only

Phase 2 Status: Specifications & Workspace Complete ✅
Next: Phase 3 - Content Migration

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

# Push to GitHub
git push origin main

# Verify push
git log --oneline -3
```

**Expected output**: Commit created and pushed successfully.

---

## ✅ PHASE 2 COMPLETE - VERIFICATION

Run this verification checklist:

```bash
cd ~/dev/interactive-robotics-book

echo "=== PHASE 2 VERIFICATION ==="
echo ""
echo "📝 SPECIFICATIONS:"
find specs -name "spec.md" -type f | wc -l
echo "   (Should be 6)"
echo ""
echo "📦 WORKSPACES:"
ls -d frontend backend package.json
echo ""
echo "🔧 FRONTEND:"
ls -1 frontend/package.json frontend/docusaurus.config.ts frontend/sidebars.ts frontend/tsconfig.json
echo ""
echo "⚙️ BACKEND:"
ls -1 backend/package.json backend/next.config.mjs backend/tsconfig.json backend/prisma/schema.prisma
echo ""
echo "🔗 SHARED TYPES:"
ls -1 backend/lib/shared/types.ts
echo ""
echo "🗂️ NODE_MODULES:"
[ -d "node_modules" ] && echo "✅ Root node_modules installed" || echo "❌ Root node_modules MISSING"
[ -d "frontend/node_modules" ] && echo "✅ Frontend node_modules installed" || echo "❌ Frontend node_modules MISSING"
[ -d "backend/node_modules" ] && echo "✅ Backend node_modules installed" || echo "❌ Backend node_modules MISSING"
echo ""
echo "🔗 GIT:"
git log --oneline -1
echo ""
echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║              PHASE 2: ✅ COMPLETE                             ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
```

**If all checks pass**: Phase 2 complete! Move to Phase 3.

**If checks fail**: Review error messages and fix issues before proceeding.

---

## 🔜 NEXT: PHASE 3

**Phase 3 Focus**: Content Migration & Configuration
- Migrate 3 existing chapters from old project
- Create intro.md (landing page)
- Add static assets (images, diagrams)
- Configure Mermaid diagrams
- Test book builds locally

**Estimated Time**: 2-3 hours

**Command List**: See `PHASE_3_COMMANDS.md` (will be created after Phase 2 complete)

---

## 📝 NOTES

**Token Efficiency**:
- Phase 2 uses specifications (reusable documentation)
- Workspace setup is one-time cost
- Shared types prevent duplication

**Time Management**:
- Specifications can be created in parallel (run multiple `/sp.specify` in separate sessions)
- Workspace setup can be done after all specs complete
- npm install takes 5-10 minutes (good break time)

**Constitutional Compliance**:
- ✅ SpecKit Plus Journey followed (Specify before Implement)
- ✅ Smallest Viable Change (workspace setup only, no implementation)
- ✅ Database Schema as Code (Prisma migrations)
- ✅ Monorepo with Shared Types (Architecture Principle D)

---

**END OF PHASE 2 COMMANDS**

*Next: Execute these commands, then proceed to Phase 3 (Content Migration)*
