# Phase 1: Foundation Setup - Command List

**Duration**: 2-3 hours
**Goal**: Create clean GitHub repository with proper structure, Constitution 2.0, and initial documentation
**Prerequisites**: GitHub account, Git installed, Node.js 18+ installed

---

## ⚠️ BEFORE YOU START

**Required Information** (have these ready):
1. Your GitHub username: `[YOUR_GITHUB_USERNAME]`
2. Your email (for git config): `[YOUR_EMAIL]`
3. Gemini API key (if not already have)
4. Neon database URL (if not already have)

**Time to allocate**: 2-3 hours of focused work

---

## 📋 PHASE 1 CHECKLIST

- [ ] Step 1: Create local directory and initialize git
- [ ] Step 2: Create .gitignore (CRITICAL - prevents mistakes)
- [ ] Step 3: Create initial documentation files
- [ ] Step 4: Create directory structure
- [ ] Step 5: Create GitHub repository
- [ ] Step 6: Push to GitHub
- [ ] Step 7: Verify repository structure

---

## 🚀 STEP 1: CREATE LOCAL DIRECTORY & INITIALIZE GIT

**Purpose**: Create fresh project directory with clean git history.

```bash
# Navigate to your development directory
cd ~/dev

# Create new project directory
mkdir interactive-robotics-book
cd interactive-robotics-book

# Initialize git repository
git init

# Configure git (replace with your info)
git config user.name "YOUR_NAME"
git config user.email "YOUR_EMAIL"

# Create initial branch (main)
git branch -M main
```

**Expected output**: `Initialized empty Git repository in /home/youruser/dev/interactive-robotics-book/.git/`

**Verify**:
```bash
pwd  # Should show: /home/youruser/dev/interactive-robotics-book
git status  # Should show: On branch main, No commits yet
```

---

## 🔒 STEP 2: CREATE .gitignore (CRITICAL - DO THIS FIRST!)

**Purpose**: Prevent committing build artifacts, secrets, node_modules.

**Why first?** Once files are committed to git, removing them is painful (requires git filter-branch).

```bash
# Create .gitignore file
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnp
.pnp.js
.yarn/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
build/
dist/
.next/
.docusaurus/
.cache/
out/

# Environment & Secrets
.env
.env.local
.env.*.local
.env.production

# Logs
*.log
logs/

# OS
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
.project
.classpath
.settings/

# Testing
coverage/
.nyc_output/
playwright-report/
test-results/
playwright/.cache/

# Misc
*.pyc
__pycache__/
.pytest_cache/
*.sqlite
*.sqlite3
.turbo

# Vercel
.vercel

# Prisma
prisma/dev.db
prisma/dev.db-journal
EOF

# Verify .gitignore created
cat .gitignore | head -20
```

**Expected output**: Should see first 20 lines of .gitignore content.

**Verify**:
```bash
git status  # Should show .gitignore as untracked file
```

---

## 📄 STEP 3: CREATE INITIAL DOCUMENTATION FILES

**Purpose**: Set up Constitution, README, PROJECT_STATUS before any code.

### 3a. Copy Constitution 2.0

```bash
# Copy Constitution from book_ai directory
cp ~/dev/book_ai/CONSTITUTION_2.0.md ./CONSTITUTION.md

# Verify file copied
ls -lh CONSTITUTION.md  # Should show ~45KB file
head -20 CONSTITUTION.md  # Preview first 20 lines
```

### 3b. Create README.md

```bash
cat > README.md << 'EOF'
# Interactive Robotics Book

**Physical AI & Humanoid Robotics Interactive Textbook Platform**

---

## 🎯 Project Overview

An AI-native interactive textbook platform for learning Physical AI and Humanoid Robotics, featuring:

- 📚 **3 Comprehensive Chapters** (expandable to 15)
- 🤖 **AI Chat Assistant** (powered by Google Gemini 2.0)
- 🌐 **Urdu Translation** (full chapter translation)
- 🔍 **Smart Search** (full-text search across all content)
- 🔐 **Authentication** (Email + Google OAuth)
- 📊 **Progress Tracking** (track learning journey)
- 🔖 **Bookmarks** (save important sections)
- ✨ **Personalization** (tailored learning experience)

---

## 🏗️ Architecture

**Monorepo Structure**:
- `frontend/` - Docusaurus 3.6.3 book (GitHub Pages)
- `backend/` - Next.js 16 API (Vercel Edge Runtime)
- `agents/` - Claude Code subagents (automation)
- `skills/` - Reusable Claude skills
- `specs/` - Feature specifications (SpecKit Plus)

**Tech Stack**:
- **Frontend**: Docusaurus, React 18, TypeScript, MDX
- **Backend**: Next.js 16, Prisma ORM, Vercel Edge
- **Database**: Neon Serverless PostgreSQL
- **AI**: Google Gemini 2.0 Flash
- **Auth**: better-auth 1.3.4
- **Testing**: Playwright, Jest, Lighthouse CI
- **CI/CD**: GitHub Actions

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL (or Neon account)
- Google Gemini API key

### Installation

```bash
# Clone repository
git clone https://github.com/YOUR_GITHUB_USERNAME/interactive-robotics-book.git
cd interactive-robotics-book

# Install dependencies (monorepo)
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Set up database
cd backend
npx prisma migrate dev
npx prisma db seed
cd ..

# Start development servers
npm run dev  # Starts frontend (3000) + backend (3001)
```

Frontend: http://localhost:3000
Backend API: http://localhost:3001

---

## 📖 Documentation

- **[Constitution](./CONSTITUTION.md)** - Project principles and governance
- **[Architecture](./docs/architecture/overview.md)** - System design
- **[Development Guide](./docs/development/setup.md)** - Developer setup
- **[Deployment Guide](./docs/deployment/)** - Production deployment
- **[Project Status](./PROJECT_STATUS.md)** - Current state & session handoff

---

## 🧪 Testing

```bash
# Run all tests
npm test

# Run frontend tests
npm run test --workspace=frontend

# Run backend tests
npm run test --workspace=backend

# Run E2E tests
cd frontend
npx playwright test
```

---

## 🚢 Deployment

**Frontend** (GitHub Pages):
- Automatic deployment on push to `main` branch
- Live URL: https://YOUR_GITHUB_USERNAME.github.io/interactive-robotics-book/

**Backend** (Vercel):
- Automatic deployment on push to `main` branch
- Live URL: https://interactive-robotics-book-api.vercel.app

---

## 🤖 Agents & Skills

**Phase 1 Agents** (Implemented):
- `content-validator` - Validates chapter quality (3-source rule, 70/30 balance)
- `deployment-agent` - Handles GitHub Pages + Vercel deployment
- `beta-tester-agent` - Automated testing and quality assurance

**Future Agents** (Chapters 4-15):
- `professor-agent` - Writes chapter content with pedagogical expertise
- `editor-agent` - Reviews and improves writing quality

**Skills**:
- `chapter-writer-skill` - Chapter writing methodology
- `code-example-generator` - Generates practical code examples
- `source-validator` - 3-source validation logic

---

## 📊 Project Status

**Version**: 1.0.0 (Foundation)
**Status**: 🟢 Active Development

**Completed**:
- ✅ Constitution 2.0 (enforced)
- ✅ Repository structure
- ✅ 3 chapters migrated
- ✅ [Add your progress here]

**In Progress**:
- 🔄 [Current work]

**Next**:
- ⏳ [Next priorities]

See [PROJECT_STATUS.md](./PROJECT_STATUS.md) for detailed status.

---

## 📜 License

[Your License Here - e.g., MIT]

---

## 🙏 Acknowledgments

Built with:
- [Claude Code](https://claude.com/claude-code) - AI development partner
- [SpecKit Plus](https://speckit.dev) - Development methodology
- [Docusaurus](https://docusaurus.io/) - Documentation framework
- [Google Gemini](https://ai.google.dev/) - AI capabilities

---

**Version**: 1.0.0 | **Last Updated**: 2025-12-04
EOF

# Verify README created
head -30 README.md
```

### 3c. Create PROJECT_STATUS.md

```bash
cat > PROJECT_STATUS.md << 'EOF'
# Project Status - Interactive Robotics Book

**Last Updated**: 2025-12-04
**Session**: 001
**Developer**: Anjum
**AI Partner**: Claude Code (Sonnet 4.5)

---

## 📊 CURRENT STATE

**Phase**: Foundation Setup (Phase 1)
**Sprint**: Week 1 - Repository & Infrastructure
**Status**: 🟢 On Track

---

## ✅ COMPLETED TODAY (2025-12-04)

### Session 001 - Foundation Setup
- [x] Created Constitution 2.0 with enforcement mechanisms
- [x] Designed monorepo directory structure
- [x] Created .gitignore (prevents build artifact mistakes)
- [x] Created initial documentation (README, PROJECT_STATUS)
- [x] Initialized git repository
- [ ] **IN PROGRESS**: Creating directory structure
- [ ] **NEXT**: Push to GitHub

---

## 🔄 IN PROGRESS

**Current Task**: STEP 4 - Create directory structure
**Started**: 2025-12-04
**Blocker**: None

**Details**: Executing Phase 1 commands to set up monorepo structure with all directories and README.md files.

---

## 🚫 BLOCKERS

**None currently.**

---

## 📅 NEXT SESSION PRIORITIES

1. **Complete directory structure creation** (Steps 4-7)
2. **Create GitHub repository and push**
3. **Verify repository structure on GitHub**
4. **Start creating feature specifications** (6 granular specs)
5. **Set up frontend workspace (Docusaurus)**
6. **Set up backend workspace (Next.js + Prisma)**

---

## 🎯 SPRINT GOALS (Week 1)

- [ ] Repository structure complete
- [ ] Constitution 2.0 ratified and committed
- [ ] 6 feature specifications created
- [ ] Frontend workspace initialized (Docusaurus)
- [ ] Backend workspace initialized (Next.js + Prisma)
- [ ] Database schema designed (Prisma)
- [ ] .env.example created with all required variables
- [ ] Development environment working (npm run dev)

---

## 📈 METRICS

### Development Efficiency
- **Target**: 75%+
- **Current**: TBD (first session)
- **Measurement**: (Productive time) / (Total time)

### Context Load Time
- **Target**: < 10 minutes per session
- **Current**: 0 minutes (new project, no context yet)
- **Measurement**: Time from session start to first productive commit

### Token Usage
- **Target**: < 50K tokens per feature
- **Current Session**: ~55K tokens (foundation setup is one-time cost)
- **Budget Remaining**: 145K tokens

---

## 🧠 CONTEXT FOR NEXT SESSION

### What You Need to Know
1. **Constitution 2.0 is law** - All work must follow constitutional principles
2. **SpecKit Plus journey** - Always: Specify → Plan → Tasks → Implement
3. **Monorepo structure** - Frontend + Backend in same repo, shared types
4. **3 Chapters only** - Do not start chapters 4-15 yet (violates Content-First Mandate)
5. **Feature priority** - Core features first (book, chat, translate, search), then auth, then user features

### Critical Files Created Today
- `CONSTITUTION.md` - Project principles (45KB, 12 core principles)
- `DIRECTORY_STRUCTURE.md` - Complete monorepo layout
- `PHASE_1_COMMANDS.md` - Step-by-step setup commands
- `.gitignore` - Prevents build artifact mistakes (learned from 7.5MB bloat in v1)

### Decisions Made
- **Monorepo**: Frontend + Backend in same repo (easier type sharing)
- **Granular specs**: 6 feature specs instead of monolithic (better organization)
- **Milestone-based tasks**: 10-15 milestones per feature (vs 141 flat tasks)
- **Automated gates**: All constitutional checks automated in CI (no manual checklists)
- **Prisma ORM**: Added to tech stack for type-safe database access

---

## 📚 REFERENCE DOCUMENTS

### Must-Read Before Next Session
- [ ] `CONSTITUTION.md` - Principles & enforcement mechanisms
- [ ] `DIRECTORY_STRUCTURE.md` - Monorepo layout
- [ ] Previous project analysis:
  - `01_COMPLETE_PROJECT_UNDERSTANDING.md`
  - `02_POST_MORTEM_ANALYSIS.md`
  - `03_THE_WAY_FORWARD.md`

### Templates Available
- `.speckit/templates/spec-template.md` - Feature specification
- `.speckit/templates/plan-template.md` - Implementation plan
- `.speckit/templates/tasks-template.md` - Task breakdown
- `.speckit/templates/session-handoff-template.md` - This file's template

---

## 🎓 LESSONS LEARNED (This Session)

1. **Create .gitignore FIRST** - Before any code, prevents commit mistakes
2. **Documentation before code** - Constitution, README, PROJECT_STATUS set direction
3. **Directory structure matters** - Monorepo with README.md at every level prevents confusion
4. **Automation over discipline** - Enforce with scripts, not manual checklists
5. **Quality over speed** - Taking time to plan properly saves 20-30 hours later

---

## 🔮 UPCOMING MILESTONES

### Week 1: Foundation (Current)
- Day 1-2: Repository structure, Constitution 2.0, initial docs
- Day 3-4: Feature specifications (6 specs)
- Day 5-7: Workspace setup (Docusaurus + Next.js)

### Week 2-3: Core Features
- Book platform (Docusaurus configuration)
- AI chat widget (Gemini integration)
- Translation system (Urdu)
- Search functionality

### Week 4-5: Authentication & User Features
- Email + Google OAuth
- Progress tracking
- Bookmarks
- Personalization

### Week 6+: Testing & Deployment
- E2E tests (Playwright)
- CI/CD setup (GitHub Actions)
- Deploy to GitHub Pages + Vercel
- Beta testing

---

## 📝 NOTES

- **Timeline**: Quality over speed (no hard deadline)
- **Priority**: Working features (1), Clean structure (1), Documentation (1), Agents (3), CI/CD (4)
- **Success**: All 7 criteria from user's Q9.1 (3 chapters live, chat working, translation working, search working, clean repo, agents/skills created, deployed)

---

**END OF STATUS UPDATE**

*Next update: End of next session (or when significant milestone reached)*
EOF

# Verify PROJECT_STATUS.md created
head -40 PROJECT_STATUS.md
```

### 3d. Create .env.example

```bash
cat > .env.example << 'EOF'
# =============================================================================
# Environment Variables Template
# =============================================================================
# Copy this file to .env.local and fill in your actual values
# NEVER commit .env.local to git!
#
# Command: cp .env.example .env.local
# =============================================================================

# -----------------------------------------------------------------------------
# AI Configuration (Google Gemini)
# -----------------------------------------------------------------------------
# Get your API key: https://makersuite.google.com/app/apikey
GEMINI_API_KEY=your_gemini_api_key_here

# Optional: Model configuration
GEMINI_MODEL=gemini-2.0-flash-exp
GEMINI_TEMPERATURE=0.7
GEMINI_MAX_TOKENS=4096

# -----------------------------------------------------------------------------
# Database (Neon Serverless PostgreSQL)
# -----------------------------------------------------------------------------
# Get connection string from: https://console.neon.tech/
# Format: postgresql://[user]:[password]@[host]/[database]?sslmode=require
DATABASE_URL=postgresql://user:password@host.neon.tech/dbname?sslmode=require

# Prisma shadow database (for migrations)
SHADOW_DATABASE_URL=postgresql://user:password@host.neon.tech/dbname_shadow?sslmode=require

# -----------------------------------------------------------------------------
# Authentication (better-auth)
# -----------------------------------------------------------------------------
# Generate with: openssl rand -base64 32
BETTER_AUTH_SECRET=your_random_32_char_secret_here
BETTER_AUTH_URL=http://localhost:3001

# Google OAuth (optional, for Google sign-in)
# Get credentials: https://console.cloud.google.com/apis/credentials
GOOGLE_CLIENT_ID=your_google_client_id_here.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# -----------------------------------------------------------------------------
# Application URLs
# -----------------------------------------------------------------------------
# Development
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000

# Production (update after deployment)
# NEXT_PUBLIC_API_URL=https://your-api.vercel.app
# NEXT_PUBLIC_FRONTEND_URL=https://your-username.github.io/interactive-robotics-book

# -----------------------------------------------------------------------------
# Vercel (auto-populated by Vercel, no need to set manually)
# -----------------------------------------------------------------------------
# VERCEL=1
# VERCEL_ENV=production
# VERCEL_URL=your-deployment-url.vercel.app

# -----------------------------------------------------------------------------
# Optional: Monitoring & Analytics
# -----------------------------------------------------------------------------
# Sentry (error tracking)
# NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here

# Google Analytics 4
# NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# -----------------------------------------------------------------------------
# Development & Testing
# -----------------------------------------------------------------------------
# Node environment
NODE_ENV=development

# Enable debug logs (set to "true" for verbose logging)
DEBUG=false

# Skip authentication in development (set to "true" for testing without auth)
SKIP_AUTH=false
EOF

# Verify .env.example created
cat .env.example | head -30
```

### 3e. Create .editorconfig

```bash
cat > .editorconfig << 'EOF'
# EditorConfig helps maintain consistent coding styles
# https://editorconfig.org

root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[*.{yml,yaml}]
indent_size = 2

[*.py]
indent_size = 4

[Makefile]
indent_style = tab
EOF

# Verify .editorconfig created
cat .editorconfig
```

**Expected output**: Should see all configuration files created.

**Verify**:
```bash
ls -la  # Should see .gitignore, .env.example, .editorconfig, CONSTITUTION.md, README.md, PROJECT_STATUS.md
```

---

## 📁 STEP 4: CREATE DIRECTORY STRUCTURE

**Purpose**: Create all directories and README.md files following the monorepo structure.

**Important**: This creates the complete directory tree from `DIRECTORY_STRUCTURE.md`.

### 4a. Create core directories

```bash
# Create top-level directories
mkdir -p .github/workflows
mkdir -p .github/ISSUE_TEMPLATE
mkdir -p .speckit/{templates,scripts/{bash,python}}
mkdir -p specs
mkdir -p frontend/{docs,src,static,tests}
mkdir -p backend/{app,lib,prisma,tests}
mkdir -p agents
mkdir -p skills
mkdir -p docs/{architecture,development,deployment,agents,post-mortems}
mkdir -p history/{prompts/{constitution,general},adr,beta-tests}

# Verify directories created
tree -L 2 -d  # Shows directory structure (if tree installed)
# OR
find . -type d -maxdepth 2 | sort  # Alternative if tree not installed
```

### 4b. Create .speckit/ structure and README files

```bash
# Create .speckit README
cat > .speckit/README.md << 'EOF'
# SpecKit Plus Configuration

**Purpose**: Central configuration for SpecKit Plus methodology.

**Contents**:
- `config.yaml` - SpecKit settings
- `templates/` - Document templates (spec, plan, tasks, PHR, ADR)
- `scripts/` - Automation scripts (bash + python)
- `constitution.md` - Symlink to root CONSTITUTION.md

**See Also**:
- [SpecKit Plus Documentation](https://speckit.dev)
- [Root CONSTITUTION.md](../CONSTITUTION.md)
EOF

# Create templates README
cat > .speckit/templates/README.md << 'EOF'
# SpecKit Templates

**Purpose**: Reusable templates for specifications, plans, tasks, PHRs, and ADRs.

**Templates**:
- `spec-template.md` - Feature specification
- `plan-template.md` - Implementation plan
- `tasks-template.md` - Task breakdown
- `phr-template.md` - Prompt History Record
- `adr-template.md` - Architecture Decision Record
- `session-handoff-template.md` - Session handoff

**Usage**: Copy template, fill placeholders, follow SpecKit journey.
EOF

# Create scripts README
cat > .speckit/scripts/README.md << 'EOF'
# Automation Scripts

**Purpose**: Scripts for constitutional enforcement and quality checks.

**Bash Scripts** (`bash/`):
- `create-phr.sh` - Auto-create Prompt History Record
- `validate-speckit.sh` - Validate SpecKit journey (spec → plan → tasks)
- `check-pr-size.sh` - Enforce PR size limits (<500 lines)
- `check-forbidden-files.sh` - Block build artifacts from git

**Python Scripts** (`python/`):
- `validate_sources.py` - 3-source rule validator
- `check_practical_balance.py` - 70/30 rule checker
- `analyze_efficiency.py` - Token efficiency tracker

**Usage**: Called by git hooks and GitHub Actions for automated enforcement.
EOF

cat > .speckit/scripts/bash/README.md << 'EOF'
# Bash Scripts

Shell scripts for git hooks and CI/CD automation.

**All scripts must be**:
- Idempotent (safe to run multiple times)
- Well-documented (header comment explaining purpose)
- Tested locally before committing
EOF

cat > .speckit/scripts/python/README.md << 'EOF'
# Python Scripts

Python validators for constitutional compliance.

**Requirements**: Python 3.9+

**Installation**:
```bash
pip install -r requirements.txt
```

**Usage**: Called by pre-commit hooks and GitHub Actions.
EOF

# Create config.yaml
cat > .speckit/config.yaml << 'EOF'
# SpecKit Plus Configuration
version: "1.0.0"
project:
  name: "Interactive Robotics Book"
  description: "Physical AI & Humanoid Robotics Interactive Textbook Platform"
  version: "1.0.0"

spec_format:
  template: "templates/spec-template.md"
  sections:
    - overview
    - requirements
    - user_stories
    - success_criteria
    - constraints
    - dependencies

plan_format:
  template: "templates/plan-template.md"
  sections:
    - architecture
    - implementation_strategy
    - milestones
    - risks
    - dependencies

tasks_format:
  template: "templates/tasks-template.md"
  structure: "milestone-based"  # Not flat 141 tasks
  max_milestones: 15
  max_tasks_per_milestone: 10

enforcement:
  pre_commit_hooks:
    - "scripts/bash/check-forbidden-files.sh"
    - "scripts/bash/check-pr-size.sh"

  github_actions:
    - "scripts/python/validate_sources.py"
    - "scripts/python/check_practical_balance.py"

constitution:
  path: "../CONSTITUTION.md"
  version: "2.0.0"
  enforcement: "automated"
EOF
```

### 4c. Create specs/ structure

```bash
# Create specs README
cat > specs/README.md << 'EOF'
# Feature Specifications

**Purpose**: Granular specifications for each feature following SpecKit Plus format.

**Structure**: Each feature has its own directory:
```
specs/00X-feature-name/
├── spec.md           # Requirements, user stories, success criteria
├── plan.md           # Architecture, implementation strategy
├── tasks.md          # Milestone-based task breakdown
├── constitution.md   # Feature-specific principles (if needed)
└── README.md         # Feature overview
```

**Features** (7 specs):
1. `001-book-platform` - Core Docusaurus book infrastructure
2. `002-ai-chat-widget` - AI assistant integration (Gemini)
3. `003-translation` - Urdu translation system
4. `004-search` - Search functionality (full-text)
5. `005-authentication` - Email + Google OAuth (better-auth)
6. `006-user-features` - Progress tracking, bookmarks, personalization
7. `007-deployment` - CI/CD, GitHub Pages, Vercel

**See Also**: [SpecKit Templates](../.speckit/templates/)
EOF

# Create placeholder directories for each spec (will fill later)
for i in {1..7}; do
  mkdir -p "specs/00$i-placeholder"
  cat > "specs/00$i-placeholder/README.md" << EOF
# Spec 00$i - [Feature Name]

**Status**: 📝 Specification Pending

**Purpose**: [To be defined]

**See Also**:
- [Spec Template](../../.speckit/templates/spec-template.md)
- [Plan Template](../../.speckit/templates/plan-template.md)
- [Tasks Template](../../.speckit/templates/tasks-template.md)
EOF
done

# Rename placeholders (do this later after creating actual specs)
```

### 4d. Create frontend/ structure

```bash
# Create frontend README
cat > frontend/README.md << 'EOF'
# Frontend - Docusaurus Book

**Purpose**: Public-facing interactive textbook built with Docusaurus 3.6.3.

**Tech Stack**:
- Docusaurus 3.6.3
- React 18
- TypeScript 5.6.2
- MDX (Markdown + JSX)

**Structure**:
- `docs/` - Chapter content (Markdown)
- `src/` - React components, hooks, utilities
- `static/` - Static assets (images, diagrams)
- `tests/` - Unit tests (Jest) + E2E tests (Playwright)

**Development**:
```bash
npm install
npm start  # http://localhost:3000
```

**Build**:
```bash
npm run build  # Outputs to build/
npm run serve  # Preview production build
```

**See Also**:
- [Docusaurus Documentation](https://docusaurus.io/docs)
- [CLAUDE.md](./CLAUDE.md) - Frontend-specific instructions
EOF

# Create docs README
cat > frontend/docs/README.md << 'EOF'
# Chapter Content

**Purpose**: Markdown source for all book chapters.

**Structure**:
```
docs/
├── intro.md          # Landing page
├── chapter-01/       # Introduction to Physical AI
├── chapter-02/       # AI Foundations
├── chapter-03/       # Hardware Fundamentals
└── README.md         # This file
```

**Writing Guidelines**:
1. Use Markdown (not JSX unless necessary)
2. Follow 70/30 practical balance (code examples + exercises ≥ 70%)
3. Validate with 3-source rule (cite 3+ sources for technical claims)
4. Include code examples with explanations
5. Add Mermaid diagrams for complex concepts

**See Also**: [Constitution Section VIII - Practical-First Balance](../../CONSTITUTION.md)
EOF

# Create src subdirectories
mkdir -p frontend/src/{components,hooks,lib,types,theme,pages}

cat > frontend/src/README.md << 'EOF'
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
EOF

cat > frontend/src/components/README.md << 'EOF'
# React Components

**Purpose**: Reusable UI components for the book platform.

**Structure**: Each component has its own directory:
```
ComponentName/
├── ComponentName.tsx         # Component logic
├── ComponentName.module.css  # Scoped styles
├── ComponentName.test.tsx    # Unit tests
└── README.md                 # Component documentation
```

**Components**:
- `ChatWidget/` - AI chat assistant (floating widget)
- `TranslationToggle/` - Language switcher (English/Urdu)
- `ProgressTracker/` - User progress visualization
- `BookmarkButton/` - Bookmark UI

**Principles**:
- Prefer function components over class components
- Use TypeScript for all props
- CSS Modules for styling (no global CSS)
- Document props in README.md
EOF

# Create other frontend subdirectories
for dir in hooks lib types theme pages tests/unit tests/e2e static/img static/diagrams; do
  mkdir -p "frontend/$dir"
  cat > "frontend/$dir/README.md" << EOF
# $(basename $dir)

**Purpose**: [To be defined during implementation]

**See Also**: [Frontend README](../README.md)
EOF
done
```

### 4e. Create backend/ structure

```bash
# Create backend README
cat > backend/README.md << 'EOF'
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
EOF

# Create app/api subdirectories
mkdir -p backend/app/api/{chat,translate,auth,progress,bookmarks,user}

cat > backend/app/api/README.md << 'EOF'
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
EOF

# Create lib subdirectories
mkdir -p backend/lib/{ai,auth,db,shared,utils}

cat > backend/lib/README.md << 'EOF'
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
EOF

for dir in ai auth db shared utils; do
  cat > "backend/lib/$dir/README.md" << EOF
# $(basename $dir)

**Purpose**: [To be defined during implementation]

**See Also**: [Backend README](../../README.md)
EOF
done

# Create prisma directory
cat > backend/prisma/README.md << 'EOF'
# Database Schema & Migrations

**Purpose**: Prisma schema definition and migration history.

**Files**:
- `schema.prisma` - Database schema (tables, relations, indexes)
- `migrations/` - Migration history (auto-generated by Prisma)
- `seed.ts` - Database seeding script

**Workflow**:
```bash
# 1. Update schema.prisma
vim schema.prisma

# 2. Create migration
npx prisma migrate dev --name add_bookmarks_table

# 3. Commit migration files
git add prisma/migrations/
git commit -m "db: add bookmarks table"

# 4. Apply to production
npx prisma migrate deploy
```

**Principles**:
- Schema as code (no manual SQL)
- Migrations tracked in git
- Never edit migration files manually
- Use camelCase for field names (not snake_case)

**See Also**: [Prisma Documentation](https://www.prisma.io/docs)
EOF

mkdir -p backend/prisma/migrations
cat > backend/prisma/migrations/README.md << 'EOF'
# Prisma Migrations

**Purpose**: Auto-generated migration files. DO NOT edit manually.

**Migration Naming**: `YYYYMMDDHHMMSS_migration_name/`

**See Also**: [Prisma Migrate Documentation](https://www.prisma.io/docs/concepts/components/prisma-migrate)
EOF

# Create tests subdirectories
mkdir -p backend/tests/{unit,integration}

cat > backend/tests/README.md << 'EOF'
# Backend Tests

**Purpose**: Unit tests + integration tests for API endpoints.

**Structure**:
- `unit/` - Jest unit tests (pure functions, utilities)
- `integration/` - API integration tests (endpoints + database)

**Running Tests**:
```bash
npm test              # All tests
npm test -- --watch   # Watch mode
npm test -- --coverage  # Coverage report
```

**Principles**:
- Test coverage ≥ 70% overall, ≥ 90% critical paths
- Integration tests use test database
- Mock external APIs (Gemini, OAuth)
EOF
```

### 4f. Create agents/ and skills/ structure

```bash
# Create agents README
cat > agents/README.md << 'EOF'
# Claude Code Subagents

**Purpose**: Reusable autonomous agents for specific tasks.

**Structure**: Each agent has its own directory:
```
agent-name/
├── SPEC.md           # Agent specification (inputs, outputs, capabilities)
├── agent.yaml        # Agent configuration (model, tools, constraints)
├── prompts/          # Prompt templates
├── tools/            # Agent-specific tools (if any)
├── constitution.md   # Agent-specific principles
└── README.md         # Agent documentation & usage
```

**Phase 1 Agents** (Immediate):
- `content-validator/` - Validates chapters (3-source rule, 70/30 balance, links)
- `deployment-agent/` - Handles GitHub Pages + Vercel deployment
- `beta-tester-agent/` - Automated testing (comprehension, code validation)

**Future Agents** (Chapters 4-15):
- `professor-agent/` - Writes chapter content with pedagogical expertise
- `editor-agent/` - Reviews and improves writing quality

**Principles**:
- Agents are reusable (no hardcoded chapter numbers)
- Agents have clear input/output contracts
- Agents document capabilities in SPEC.md

**See Also**: [Claude Code Agent SDK](https://docs.anthropic.com/claude/agent-sdk)
EOF

# Create placeholder agent directories
for agent in content-validator deployment-agent beta-tester-agent professor-agent editor-agent; do
  mkdir -p "agents/$agent/prompts"
  cat > "agents/$agent/README.md" << EOF
# $(echo $agent | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g') Agent

**Status**: 📝 Specification Pending

**Purpose**: [To be defined]

**Capabilities**: [To be defined]

**See Also**: [Agents README](../README.md)
EOF
done

# Create skills README
cat > skills/README.md << 'EOF'
# Reusable Claude Skills

**Purpose**: Installable skills that provide domain knowledge and workflows.

**Structure**: Each skill has its own directory:
```
skill-name/
├── skill.yaml        # Skill metadata (name, description, version)
├── prompts/          # Skill prompt templates
├── templates/        # Skill-specific templates
├── constitution.md   # Skill-specific principles
└── README.md         # Skill documentation & usage
```

**Skills**:
- `chapter-writer-skill/` - Chapter writing methodology (70/30 balance, 3-source)
- `code-example-generator/` - Generates practical code examples
- `source-validator/` - 3-source validation logic

**Principles**:
- Skills are parameterized (work with different content)
- Skills are composable (can be used together)
- Skills document inputs and outputs

**See Also**: [Claude Code Skills Documentation](https://docs.anthropic.com/claude/skills)
EOF

# Create placeholder skill directories
for skill in chapter-writer-skill code-example-generator source-validator; do
  mkdir -p "skills/$skill/prompts"
  cat > "skills/$skill/README.md" << EOF
# $(echo $skill | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g')

**Status**: 📝 Specification Pending

**Purpose**: [To be defined]

**See Also**: [Skills README](../README.md)
EOF
done
```

### 4g. Create docs/ structure

```bash
# Create docs README
cat > docs/README.md << 'EOF'
# Project Documentation

**Purpose**: Documentation for developers (not book content).

**Structure**:
- `architecture/` - System design docs (overview, frontend, backend, database, API)
- `development/` - Developer guides (setup, workflow, testing, debugging)
- `deployment/` - Deployment guides (GitHub Pages, Vercel, database, secrets)
- `agents/` - Agent usage guides (using agents, creating agents)
- `post-mortems/` - Project analyses (lessons learned)

**Principles**:
- Living documentation (update with code changes)
- Onboarding-friendly (new contributor productive in <1 hour)
- Deployment repeatable (no "tribal knowledge")
EOF

# Create subdirectory READMEs
for dir in architecture development deployment agents post-mortems; do
  cat > "docs/$dir/README.md" << EOF
# $(echo $dir | sed 's/-/ /g' | sed 's/\b\(.\)/\u\1/g')

**Purpose**: [To be defined]

**See Also**: [Documentation Index](../README.md)
EOF
done

# Copy analysis documents to post-mortems
cp ~/dev/book_ai/01_COMPLETE_PROJECT_UNDERSTANDING.md docs/post-mortems/
cp ~/dev/book_ai/02_POST_MORTEM_ANALYSIS.md docs/post-mortems/
cp ~/dev/book_ai/03_THE_WAY_FORWARD.md docs/post-mortems/

cat > docs/post-mortems/README.md << 'EOF'
# Post-Mortem Analyses

**Purpose**: Document lessons learned from project failures and successes.

**Files**:
- `01_COMPLETE_PROJECT_UNDERSTANDING.md` - Original project analysis (40+ pages)
- `02_POST_MORTEM_ANALYSIS.md` - Forensic analysis of mistakes (35+ pages)
- `03_THE_WAY_FORWARD.md` - Rebuild guide with best practices (100+ pages)

**Lessons Learned**:
- 26-38 hours wasted due to lack of process
- 220K-320K tokens wasted on out-of-sequence work
- 24-48% efficiency (50-75% waste)
- Constitution violations (started auth before content complete)
- Context loss (30-60 min per session)
- Repository bloat (7.5MB build artifacts)

**See Also**: [Constitution 2.0](../../CONSTITUTION.md)
EOF
```

### 4h. Create history/ structure

```bash
# Create history README
cat > history/README.md << 'EOF'
# Project History

**Purpose**: Audit trail of decisions and AI interactions.

**Structure**:
- `prompts/` - Prompt History Records (PHRs)
- `adr/` - Architecture Decision Records (ADRs)
- `beta-tests/` - Beta test reports

**Principles**:
- PHRs logged for every significant AI interaction
- ADRs created for architecturally significant decisions
- Beta test feedback documented for future reference
EOF

# Create prompts subdirectories
cat > history/prompts/README.md << 'EOF'
# Prompt History Records (PHRs)

**Purpose**: Log of all AI interactions for traceability and learning.

**Structure**:
```
prompts/
├── constitution/       # Constitution-related prompts
├── general/            # General prompts
├── 001-book-platform/  # Feature-specific prompts
├── 002-ai-chat-widget/
└── ...
```

**Naming**: `<ID>-<slug>.<stage>.prompt.md`
- Example: `001-create-constitution.constitution.prompt.md`
- Example: `042-implement-chat-widget.green.prompt.md`

**Stages**: constitution, spec, plan, tasks, red, green, refactor, explainer, misc, general

**See Also**: [PHR Template](../../.speckit/templates/phr-template.md)
EOF

cat > history/prompts/constitution/README.md << 'EOF'
# Constitution-Related Prompts

PHRs for Constitution creation, amendments, and governance discussions.
EOF

cat > history/prompts/general/README.md << 'EOF'
# General Prompts

PHRs for general-purpose interactions not tied to specific features.
EOF

# Create ADR structure
cat > history/adr/README.md << 'EOF'
# Architecture Decision Records (ADRs)

**Purpose**: Document significant architectural decisions with context and rationale.

**Naming**: `XXXX-kebab-case-title.md` (e.g., `0001-monorepo-structure.md`)

**Format**:
```markdown
# ADR XXXX: Title

**Status**: Accepted | Proposed | Deprecated | Superseded
**Date**: YYYY-MM-DD
**Deciders**: [List of people involved]

## Context
[What is the issue that we're seeing that is motivating this decision?]

## Decision
[What is the change that we're proposing or have agreed to implement?]

## Consequences
[What becomes easier or more difficult to do because of this change?]

## Alternatives Considered
[What other options were considered and why were they rejected?]
```

**See Also**: [ADR Template](../../.speckit/templates/adr-template.md)
EOF

cat > history/beta-tests/README.md << 'EOF'
# Beta Test Reports

**Purpose**: User feedback and testing results from beta testers.

**Naming**: `chapter-<X>-<YYYY-MM-DD>.md`

**See Also**: [Beta Tester Agent](../../agents/beta-tester-agent/)
EOF
```

**Expected output**: Complete directory structure with README.md files.

**Verify**:
```bash
# Count README.md files (should be 40+)
find . -name "README.md" | wc -l

# Show directory tree (if tree installed)
tree -L 3 -d

# OR show all directories
find . -type d | sort | head -50
```

---

## 📦 STEP 5: CREATE GITHUB REPOSITORY

**Purpose**: Create new GitHub repository and configure it.

### 5a. Create repository on GitHub

**Option A - Via GitHub Web UI** (Recommended):

1. Go to https://github.com/new
2. Repository name: `interactive-robotics-book`
3. Description: `Physical AI & Humanoid Robotics Interactive Textbook Platform`
4. Visibility: **Public** (required for GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

**Option B - Via GitHub CLI** (if installed):

```bash
gh repo create interactive-robotics-book \
  --public \
  --description "Physical AI & Humanoid Robotics Interactive Textbook Platform" \
  --confirm
```

**Expected output**: New repository created at `https://github.com/YOUR_USERNAME/interactive-robotics-book`

---

## 🔗 STEP 6: COMMIT AND PUSH TO GITHUB

**Purpose**: Commit initial structure and push to GitHub.

### 6a. Stage and commit files

```bash
# Stage all files
git add .

# Verify what will be committed
git status  # Should show many new files, NO build/ or node_modules/

# Commit with constitutional message
git commit -m "feat(foundation): initial repository setup with Constitution 2.0

- Add Constitution 2.0 with 12 enforced principles
- Create monorepo structure (frontend, backend, agents, skills)
- Add comprehensive documentation (README, PROJECT_STATUS, DIRECTORY_STRUCTURE)
- Set up .gitignore (prevents build artifact mistakes)
- Create SpecKit Plus configuration
- Add placeholder directories for 7 feature specs
- Include post-mortem analyses from v1.0 project

Constitutional principles enforced:
- Smallest Viable Change (initial setup only)
- Repository Hygiene (no build artifacts)
- Documentation at every level (README.md in all directories)

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"

# Verify commit
git log --oneline  # Should show 1 commit
```

### 6b. Add remote and push

```bash
# Add GitHub remote (replace YOUR_GITHUB_USERNAME)
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/interactive-robotics-book.git

# Verify remote added
git remote -v  # Should show origin pointing to your GitHub repo

# Push to GitHub
git push -u origin main

# Expected output: Objects written, branch 'main' set up to track remote
```

**If push fails with authentication**:
```bash
# If using HTTPS, you need a Personal Access Token
# Generate at: https://github.com/settings/tokens
# Then use:
git push -u origin main
# Enter username and token (not password)

# OR switch to SSH:
git remote set-url origin git@github.com:YOUR_GITHUB_USERNAME/interactive-robotics-book.git
git push -u origin main
```

---

## ✅ STEP 7: VERIFY REPOSITORY STRUCTURE

**Purpose**: Verify everything pushed correctly to GitHub.

### 7a. Check GitHub repository

Visit: `https://github.com/YOUR_GITHUB_USERNAME/interactive-robotics-book`

**Verify**:
- [ ] README.md displays on repository homepage
- [ ] CONSTITUTION.md visible in file list
- [ ] Directory structure matches `DIRECTORY_STRUCTURE.md`
- [ ] No `build/`, `node_modules/`, or `.env` files visible
- [ ] Commit message shows constitutional compliance
- [ ] Repository is public (required for GitHub Pages later)

### 7b. Clone in fresh directory (test)

```bash
# In a different directory, test cloning
cd /tmp
git clone https://github.com/YOUR_GITHUB_USERNAME/interactive-robotics-book.git test-clone
cd test-clone

# Verify structure
ls -la  # Should see CONSTITUTION.md, README.md, PROJECT_STATUS.md, etc.
find . -name "README.md" | wc -l  # Should match original count

# Clean up
cd ..
rm -rf test-clone
```

---

## 🎉 PHASE 1 COMPLETE!

**Congratulations!** You've successfully completed Phase 1: Foundation Setup.

### ✅ Completed Checklist

- [x] Created local directory and initialized git
- [x] Created .gitignore (prevents build artifact mistakes)
- [x] Created initial documentation (CONSTITUTION.md, README.md, PROJECT_STATUS.md)
- [x] Created complete directory structure (40+ directories, 50+ README.md files)
- [x] Created GitHub repository
- [x] Pushed to GitHub
- [x] Verified repository structure

### 📊 What We've Built

**Files Created**: 60+
**Directories Created**: 40+
**Documentation**: CONSTITUTION.md (45KB), README.md, PROJECT_STATUS.md, DIRECTORY_STRUCTURE.md, 50+ README.md files
**Lines of Documentation**: ~2,500 lines
**Time Saved** (from proper planning): 20-30 hours (avoided mistakes from v1.0)

---

## 🔜 NEXT: PHASE 2

**Phase 2: Specifications & Planning**

You'll create:
1. 6 granular feature specifications (spec.md, plan.md, tasks.md for each)
2. Frontend workspace setup (Docusaurus)
3. Backend workspace setup (Next.js + Prisma)
4. Database schema (Prisma)
5. Initial agents (Content Validator, Deployment Agent, Beta Tester Agent)

**Estimated time**: 4-6 hours

**Command list**: See `PHASE_2_COMMANDS.md` (will be created next)

---

## 📝 UPDATE PROJECT_STATUS.md

Before ending this session, update PROJECT_STATUS.md:

```bash
# Open PROJECT_STATUS.md
vim PROJECT_STATUS.md

# Update these sections:
# - COMPLETED TODAY: Add all Phase 1 tasks
# - IN PROGRESS: Change to "Phase 1 complete, starting Phase 2"
# - NEXT SESSION PRIORITIES: List Phase 2 tasks

# Commit the update
git add PROJECT_STATUS.md
git commit -m "docs: update PROJECT_STATUS after Phase 1 completion"
git push
```

---

**END OF PHASE 1 COMMANDS**

*You're now ready to start Phase 2: Specifications & Planning.*
*Take a break, then come back for the next set of commands.*

**Session Handoff**: See [PROJECT_STATUS.md](./PROJECT_STATUS.md) for current state and next priorities.
