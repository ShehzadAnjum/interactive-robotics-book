# Interactive Robotics Book - Directory Structure

**Version**: 1.0.0
**Created**: 2025-12-04
**Purpose**: Complete monorepo structure with .md documentation at every level

---

## 🏗️ COMPLETE DIRECTORY TREE

```
interactive-robotics-book/
├── .github/                              # GitHub configuration
│   ├── workflows/                        # CI/CD pipelines
│   │   ├── frontend-ci.yml              # Frontend tests & build
│   │   ├── backend-ci.yml               # Backend tests & build
│   │   ├── deploy-frontend.yml          # Deploy to GitHub Pages
│   │   ├── deploy-backend.yml           # Deploy to Vercel
│   │   └── quality-gates.yml            # Constitutional compliance checks
│   ├── ISSUE_TEMPLATE/                  # Issue templates
│   ├── PULL_REQUEST_TEMPLATE.md         # PR template with checklist
│   └── README.md                        # GitHub Actions documentation
│
├── .speckit/                            # SpecKit Plus configuration
│   ├── config.yaml                      # SpecKit settings
│   ├── constitution.md                  # Symlink to root CONSTITUTION.md
│   ├── templates/                       # Reusable templates
│   │   ├── spec-template.md            # Feature specification template
│   │   ├── plan-template.md            # Implementation plan template
│   │   ├── tasks-template.md           # Task breakdown template
│   │   ├── phr-template.md             # Prompt History Record template
│   │   ├── adr-template.md             # Architecture Decision Record template
│   │   ├── session-handoff-template.md # Session handoff template
│   │   └── README.md                   # Templates documentation
│   ├── scripts/                         # Automation scripts
│   │   ├── bash/                       # Shell scripts
│   │   │   ├── create-phr.sh          # Auto-create PHR
│   │   │   ├── validate-speckit.sh    # Validate SpecKit journey
│   │   │   ├── check-pr-size.sh       # Enforce PR size limits
│   │   │   ├── check-forbidden-files.sh # Block build artifacts
│   │   │   └── README.md
│   │   ├── python/                     # Python validators
│   │   │   ├── validate_sources.py    # 3-source rule validator
│   │   │   ├── check_practical_balance.py # 70/30 rule checker
│   │   │   ├── analyze_efficiency.py   # Token efficiency tracker
│   │   │   └── README.md
│   │   └── README.md
│   └── README.md                        # SpecKit configuration docs
│
├── specs/                                # Feature specifications
│   ├── 001-book-platform/               # Core book infrastructure
│   │   ├── spec.md                     # Requirements & success criteria
│   │   ├── plan.md                     # Architecture & implementation plan
│   │   ├── tasks.md                    # Milestone-based task breakdown
│   │   ├── constitution.md             # Feature-specific principles
│   │   └── README.md                   # Feature overview
│   ├── 002-ai-chat-widget/              # AI assistant integration
│   │   ├── spec.md
│   │   ├── plan.md
│   │   ├── tasks.md
│   │   ├── constitution.md
│   │   └── README.md
│   ├── 003-translation/                 # Urdu translation system
│   │   ├── spec.md
│   │   ├── plan.md
│   │   ├── tasks.md
│   │   ├── constitution.md
│   │   └── README.md
│   ├── 004-search/                      # Search functionality
│   │   ├── spec.md
│   │   ├── plan.md
│   │   ├── tasks.md
│   │   ├── constitution.md
│   │   └── README.md
│   ├── 005-authentication/              # Email + Google OAuth
│   │   ├── spec.md
│   │   ├── plan.md
│   │   ├── tasks.md
│   │   ├── constitution.md
│   │   └── README.md
│   ├── 006-user-features/               # Progress, bookmarks, personalization
│   │   ├── spec.md
│   │   ├── plan.md
│   │   ├── tasks.md
│   │   ├── constitution.md
│   │   └── README.md
│   ├── 007-deployment/                  # CI/CD & hosting
│   │   ├── spec.md
│   │   ├── plan.md
│   │   ├── tasks.md
│   │   ├── constitution.md
│   │   └── README.md
│   └── README.md                        # Specs index
│
├── frontend/                             # Docusaurus book application
│   ├── docs/                            # Chapter content (Markdown)
│   │   ├── intro.md                    # Landing page
│   │   ├── chapter-01/                 # Chapter 1: Introduction
│   │   │   ├── index.md               # Chapter intro
│   │   │   ├── 01-what-is-physical-ai.md
│   │   │   ├── 02-humanoid-robotics-overview.md
│   │   │   ├── 03-why-learn-physical-ai.md
│   │   │   ├── 04-course-objectives.md
│   │   │   └── README.md
│   │   ├── chapter-02/                 # Chapter 2: AI Foundations
│   │   │   ├── index.md
│   │   │   ├── 01-machine-learning-basics.md
│   │   │   ├── 02-neural-networks.md
│   │   │   ├── 03-training-models.md
│   │   │   ├── 04-ai-for-robotics.md
│   │   │   └── README.md
│   │   ├── chapter-03/                 # Chapter 3: Hardware Fundamentals
│   │   │   ├── index.md
│   │   │   ├── 01-actuators-sensors.md
│   │   │   ├── 02-microcontrollers.md
│   │   │   ├── 03-power-systems.md
│   │   │   ├── 04-mechanical-design.md
│   │   │   └── README.md
│   │   └── README.md                   # Chapters index
│   ├── src/                             # React components & logic
│   │   ├── components/                 # Reusable UI components
│   │   │   ├── ChatWidget/            # AI chat assistant
│   │   │   │   ├── ChatWidget.tsx
│   │   │   │   ├── ChatWidget.module.css
│   │   │   │   ├── ChatMessage.tsx
│   │   │   │   ├── ChatInput.tsx
│   │   │   │   └── README.md
│   │   │   ├── TranslationToggle/     # Language switcher
│   │   │   │   ├── TranslationToggle.tsx
│   │   │   │   ├── TranslationToggle.module.css
│   │   │   │   └── README.md
│   │   │   ├── ProgressTracker/       # User progress UI
│   │   │   │   ├── ProgressTracker.tsx
│   │   │   │   └── README.md
│   │   │   ├── BookmarkButton/        # Bookmark UI
│   │   │   │   ├── BookmarkButton.tsx
│   │   │   │   └── README.md
│   │   │   └── README.md
│   │   ├── hooks/                      # Custom React hooks
│   │   │   ├── useChat.ts             # Chat state management
│   │   │   ├── useTranslation.ts      # Translation logic
│   │   │   ├── useAuth.ts             # Authentication state
│   │   │   ├── useProgress.ts         # Progress tracking
│   │   │   └── README.md
│   │   ├── lib/                        # Frontend utilities
│   │   │   ├── api-client.ts          # Backend API wrapper
│   │   │   ├── storage.ts             # LocalStorage helpers
│   │   │   ├── constants.ts           # Frontend constants
│   │   │   └── README.md
│   │   ├── types/                      # TypeScript types
│   │   │   ├── index.ts               # Re-exports from backend/lib/shared
│   │   │   └── README.md
│   │   ├── theme/                      # Docusaurus theme customization
│   │   │   ├── Root.tsx               # Root wrapper (auth, chat init)
│   │   │   ├── DocItem/               # Custom doc page layout
│   │   │   └── README.md
│   │   └── pages/                      # Custom pages
│   │       ├── index.tsx              # Landing page
│   │       ├── auth/                  # Auth pages
│   │       │   ├── signin.tsx
│   │       │   ├── signup.tsx
│   │       │   └── README.md
│   │       └── README.md
│   ├── static/                          # Static assets
│   │   ├── img/                        # Images
│   │   ├── diagrams/                   # Mermaid diagrams (exported)
│   │   └── README.md
│   ├── tests/                           # Frontend tests
│   │   ├── unit/                       # Jest unit tests
│   │   ├── e2e/                        # Playwright E2E tests
│   │   │   ├── chapter-reading.spec.ts
│   │   │   ├── chat-interaction.spec.ts
│   │   │   ├── translation.spec.ts
│   │   │   ├── authentication.spec.ts
│   │   │   └── README.md
│   │   └── README.md
│   ├── docusaurus.config.ts             # Docusaurus configuration
│   ├── sidebars.ts                      # Sidebar navigation
│   ├── package.json                     # Frontend dependencies
│   ├── tsconfig.json                    # TypeScript config
│   ├── .eslintrc.js                     # ESLint rules
│   ├── .prettierrc                      # Code formatting
│   ├── CLAUDE.md                        # Frontend-specific Claude instructions
│   ├── constitution.md                  # References root CONSTITUTION.md
│   └── README.md                        # Frontend documentation
│
├── backend/                              # Next.js API (Vercel Edge)
│   ├── app/                             # Next.js 13+ App Router
│   │   ├── api/                        # API routes
│   │   │   ├── chat/                  # AI chat endpoints
│   │   │   │   ├── route.ts          # POST /api/chat (streaming)
│   │   │   │   └── README.md
│   │   │   ├── translate/             # Translation endpoints
│   │   │   │   ├── route.ts          # POST /api/translate
│   │   │   │   └── README.md
│   │   │   ├── auth/                  # Authentication endpoints
│   │   │   │   ├── signin/route.ts
│   │   │   │   ├── signup/route.ts
│   │   │   │   ├── signout/route.ts
│   │   │   │   ├── google/route.ts   # Google OAuth callback
│   │   │   │   └── README.md
│   │   │   ├── progress/              # Progress tracking
│   │   │   │   ├── route.ts          # GET/POST /api/progress
│   │   │   │   └── README.md
│   │   │   ├── bookmarks/             # Bookmarks CRUD
│   │   │   │   ├── route.ts          # GET/POST /api/bookmarks
│   │   │   │   ├── [id]/route.ts     # DELETE /api/bookmarks/:id
│   │   │   │   └── README.md
│   │   │   ├── user/                  # User profile
│   │   │   │   ├── route.ts          # GET/PATCH /api/user
│   │   │   │   └── README.md
│   │   │   └── README.md
│   │   └── README.md
│   ├── lib/                             # Backend utilities
│   │   ├── ai/                         # AI integration
│   │   │   ├── gemini.ts              # Gemini API wrapper
│   │   │   ├── prompts.ts             # System prompts
│   │   │   ├── streaming.ts           # SSE streaming helpers
│   │   │   └── README.md
│   │   ├── auth/                       # Authentication logic
│   │   │   ├── better-auth.ts         # better-auth configuration
│   │   │   ├── session.ts             # Session management
│   │   │   └── README.md
│   │   ├── db/                         # Database utilities
│   │   │   ├── client.ts              # Prisma client singleton
│   │   │   ├── seed.ts                # Database seeding
│   │   │   └── README.md
│   │   ├── shared/                     # Shared with frontend
│   │   │   ├── types.ts               # TypeScript types
│   │   │   ├── constants.ts           # Shared constants
│   │   │   ├── validators.ts          # Zod schemas
│   │   │   └── README.md
│   │   ├── utils/                      # Generic utilities
│   │   │   ├── errors.ts              # Error handling
│   │   │   ├── logger.ts              # Logging helpers
│   │   │   └── README.md
│   │   └── README.md
│   ├── prisma/                          # Database schema & migrations
│   │   ├── schema.prisma               # Prisma schema definition
│   │   ├── migrations/                 # Migration history
│   │   │   └── README.md
│   │   ├── seed.ts                     # Seed script
│   │   └── README.md
│   ├── tests/                           # Backend tests
│   │   ├── unit/                       # Jest unit tests
│   │   ├── integration/                # API integration tests
│   │   │   ├── chat.test.ts
│   │   │   ├── auth.test.ts
│   │   │   ├── bookmarks.test.ts
│   │   │   └── README.md
│   │   └── README.md
│   ├── package.json                     # Backend dependencies
│   ├── tsconfig.json                    # TypeScript config
│   ├── .eslintrc.js                     # ESLint rules
│   ├── vercel.json                      # Vercel configuration
│   ├── CLAUDE.md                        # Backend-specific Claude instructions
│   ├── constitution.md                  # References root CONSTITUTION.md
│   └── README.md                        # Backend documentation
│
├── agents/                               # Claude Code subagents
│   ├── content-validator/               # Validates chapter quality
│   │   ├── SPEC.md                     # Agent specification
│   │   ├── agent.yaml                  # Agent configuration
│   │   ├── prompts/                    # Agent prompt templates
│   │   │   ├── system-prompt.md
│   │   │   └── README.md
│   │   ├── tools/                      # Agent-specific tools
│   │   │   └── README.md
│   │   ├── constitution.md             # Agent principles
│   │   └── README.md                   # Agent documentation
│   ├── deployment-agent/                # Handles deployment workflows
│   │   ├── SPEC.md
│   │   ├── agent.yaml
│   │   ├── prompts/
│   │   ├── constitution.md
│   │   └── README.md
│   ├── beta-tester-agent/               # Automated beta testing
│   │   ├── SPEC.md
│   │   ├── agent.yaml
│   │   ├── prompts/
│   │   ├── test-scenarios/             # Test scenario definitions
│   │   │   ├── chapter-comprehension.yaml
│   │   │   ├── code-validation.yaml
│   │   │   └── README.md
│   │   ├── constitution.md
│   │   └── README.md
│   ├── professor-agent/                 # Chapter content writer (future)
│   │   ├── SPEC.md
│   │   ├── agent.yaml
│   │   ├── constitution.md
│   │   └── README.md
│   ├── editor-agent/                    # Content reviewer (future)
│   │   ├── SPEC.md
│   │   ├── agent.yaml
│   │   ├── constitution.md
│   │   └── README.md
│   └── README.md                        # Agents index
│
├── skills/                               # Reusable Claude skills
│   ├── chapter-writer-skill/            # Chapter writing methodology
│   │   ├── skill.yaml                  # Skill metadata
│   │   ├── prompts/                    # Skill prompt templates
│   │   ├── constitution.md
│   │   └── README.md
│   ├── code-example-generator/          # Generates code examples
│   │   ├── skill.yaml
│   │   ├── templates/                  # Code templates
│   │   ├── constitution.md
│   │   └── README.md
│   ├── source-validator/                # 3-source validation logic
│   │   ├── skill.yaml
│   │   ├── constitution.md
│   │   └── README.md
│   └── README.md                        # Skills index
│
├── docs/                                 # Project documentation (not book content)
│   ├── architecture/                    # Architecture docs
│   │   ├── overview.md                 # System architecture
│   │   ├── frontend-architecture.md
│   │   ├── backend-architecture.md
│   │   ├── database-schema.md
│   │   ├── api-contracts.md
│   │   └── README.md
│   ├── development/                     # Developer guides
│   │   ├── setup.md                    # Local development setup
│   │   ├── workflow.md                 # Git workflow
│   │   ├── testing.md                  # Testing guide
│   │   ├── debugging.md
│   │   └── README.md
│   ├── deployment/                      # Deployment docs
│   │   ├── github-pages.md             # Frontend deployment
│   │   ├── vercel.md                   # Backend deployment
│   │   ├── database.md                 # Neon Postgres setup
│   │   ├── secrets.md                  # Environment variables
│   │   └── README.md
│   ├── agents/                          # Agent usage guides
│   │   ├── using-agents.md
│   │   ├── creating-agents.md
│   │   └── README.md
│   ├── post-mortems/                    # Post-mortem analyses
│   │   ├── 2025-12-04-v1-analysis.md  # Original project analysis
│   │   └── README.md
│   └── README.md                        # Documentation index
│
├── history/                              # Project history
│   ├── prompts/                         # Prompt History Records (PHRs)
│   │   ├── constitution/               # Constitution-related prompts
│   │   │   └── README.md
│   │   ├── general/                    # General prompts
│   │   │   └── README.md
│   │   ├── 001-book-platform/          # Feature-specific prompts
│   │   │   └── README.md
│   │   ├── 002-ai-chat-widget/
│   │   │   └── README.md
│   │   └── README.md                   # PHR index
│   ├── adr/                             # Architecture Decision Records
│   │   ├── 0001-monorepo-structure.md
│   │   ├── 0002-docusaurus-choice.md
│   │   ├── 0003-prisma-orm.md
│   │   ├── template.md                 # ADR template
│   │   └── README.md                   # ADR index
│   ├── beta-tests/                      # Beta test reports
│   │   └── README.md
│   └── README.md                        # History index
│
├── .gitignore                            # Git ignore rules (CRITICAL - Day 1)
├── .gitattributes                        # Git attributes
├── .editorconfig                         # Editor configuration
├── .env.example                          # Environment variables template
├── docker-compose.yml                    # Local development (Postgres)
├── package.json                          # Root package.json (workspaces)
├── turbo.json                            # Turborepo config (optional)
├── CLAUDE.md                             # Root Claude Code instructions
├── CONSTITUTION.md                       # Constitution 2.0 (this is the law)
├── PROJECT_STATUS.md                     # Session handoff tracker
├── README.md                             # Public-facing documentation
├── LICENSE                               # Project license
└── CHANGELOG.md                          # Version history
```

---

## 📁 DIRECTORY PURPOSE & PRINCIPLES

### Root Level Files

| File | Purpose | Owner | Update Frequency |
|------|---------|-------|------------------|
| `CONSTITUTION.md` | Project principles & enforcement | All | Quarterly (amendments) |
| `PROJECT_STATUS.md` | Session handoff & current state | Human + Claude | Every session end |
| `README.md` | Public-facing docs, quick start | Human | Major milestones |
| `CLAUDE.md` | Root AI instructions | Human | When workflow changes |
| `.gitignore` | Prevent build artifacts in git | Setup once | Rarely |
| `.env.example` | Environment variable template | Setup once | When adding new secrets |

---

### `.speckit/` - SpecKit Plus Configuration

**Purpose**: Central location for SpecKit methodology configuration, templates, and automation scripts.

**Key Files**:
- `config.yaml`: SpecKit settings (project name, version, spec format)
- `templates/`: All templates (spec, plan, tasks, PHR, ADR, session handoff)
- `scripts/bash/`: Shell scripts for automation
- `scripts/python/`: Python validators (3-source rule, 70/30 balance)

**Principles**:
- Templates are the source of truth for document structure
- Scripts must be idempotent (safe to run multiple times)
- Every script has a corresponding README.md

---

### `specs/` - Feature Specifications

**Purpose**: Granular specifications for each feature, following SpecKit Plus format.

**Structure**: Each feature has its own directory:
```
specs/00X-feature-name/
├── spec.md           # Requirements, user stories, success criteria
├── plan.md           # Architecture, implementation strategy
├── tasks.md          # Milestone-based task breakdown
├── constitution.md   # Feature-specific principles (if needed)
└── README.md         # Feature overview (1-paragraph summary)
```

**Naming Convention**: `00X-kebab-case-feature-name` (e.g., `001-book-platform`)

**Principles**:
- One spec per feature (granular, not monolithic)
- Spec → Plan → Tasks → Implement (enforced via CI)
- Tasks use milestone-based structure (10-15 milestones, not 141 flat tasks)

---

### `frontend/` - Docusaurus Book Application

**Purpose**: Public-facing interactive textbook built with Docusaurus.

**Key Subdirectories**:

#### `docs/` - Chapter Content
- **Structure**: `chapter-XX/` directories, each with `index.md` + section files
- **Naming**: `01-kebab-case-section-name.md` (numbered for order)
- **Principle**: Content is pure Markdown (no JSX unless necessary)

#### `src/components/` - React Components
- **Structure**: One directory per component with `.tsx`, `.module.css`, `README.md`
- **Principle**: Reusable, documented, self-contained components

#### `src/hooks/` - Custom React Hooks
- **Examples**: `useChat`, `useAuth`, `useTranslation`, `useProgress`
- **Principle**: Business logic extracted from components

#### `src/lib/` - Frontend Utilities
- **Examples**: `api-client.ts` (backend API wrapper), `storage.ts` (LocalStorage)
- **Principle**: Pure functions, no side effects

#### `tests/` - Frontend Tests
- **Structure**: `unit/` (Jest) + `e2e/` (Playwright)
- **Principle**: Every component has tests, every user flow has E2E test

**Key Files**:
- `CLAUDE.md`: Frontend-specific instructions (e.g., "Use Docusaurus plugins, not custom webpack")
- `constitution.md`: References root CONSTITUTION.md

---

### `backend/` - Next.js API (Vercel Edge)

**Purpose**: Backend API for chat, translation, authentication, user features.

**Key Subdirectories**:

#### `app/api/` - API Routes (Next.js 13+ App Router)
- **Structure**: Each route has `route.ts` (handler) + `README.md` (docs)
- **Example**: `app/api/chat/route.ts` → POST `/api/chat` (streaming SSE)
- **Principle**: Thin routes, business logic in `lib/`

#### `lib/ai/` - AI Integration
- **Files**: `gemini.ts` (API wrapper), `prompts.ts` (system prompts), `streaming.ts` (SSE)
- **Principle**: AI provider abstraction (easy to swap Gemini for OpenAI)

#### `lib/auth/` - Authentication Logic
- **Files**: `better-auth.ts` (config), `session.ts` (session management)
- **Principle**: Centralized auth logic, not scattered in routes

#### `lib/db/` - Database Utilities
- **Files**: `client.ts` (Prisma singleton), `seed.ts` (seeding)
- **Principle**: Single Prisma client instance (prevents connection pool exhaustion)

#### `lib/shared/` - Shared with Frontend
- **Files**: `types.ts`, `constants.ts`, `validators.ts` (Zod schemas)
- **Principle**: Shared types prevent API contract mismatches

#### `prisma/` - Database Schema & Migrations
- **Files**: `schema.prisma` (schema), `migrations/` (auto-generated)
- **Principle**: Schema as code, migrations tracked in git

**Key Files**:
- `CLAUDE.md`: Backend-specific instructions (e.g., "Use Prisma for DB queries, no raw SQL")
- `vercel.json`: Vercel configuration (edge runtime, CORS)

---

### `agents/` - Claude Code Subagents

**Purpose**: Reusable autonomous agents for specific tasks.

**Structure**: Each agent has its own directory:
```
agents/agent-name/
├── SPEC.md           # Agent specification (inputs, outputs, capabilities)
├── agent.yaml        # Agent configuration (model, tools, constraints)
├── prompts/          # Prompt templates
│   ├── system-prompt.md
│   └── README.md
├── tools/            # Agent-specific tools (if any)
├── constitution.md   # Agent-specific principles
└── README.md         # Agent documentation & usage
```

**Phase 1 Agents** (Immediate):
1. **content-validator**: Validates chapters (3-source rule, 70/30 balance, link checking)
2. **deployment-agent**: Handles GitHub Pages + Vercel deployment
3. **beta-tester-agent**: Automated testing (comprehension, code validation)

**Future Agents** (Chapters 4-15):
4. **professor-agent**: Writes chapter content with pedagogical expertise
5. **editor-agent**: Reviews and improves writing quality

**Principles**:
- Agents are reusable (no hardcoded chapter numbers)
- Agents have clear input/output contracts
- Agents document their capabilities in SPEC.md

---

### `skills/` - Reusable Claude Skills

**Purpose**: Installable skills that provide domain knowledge and workflows.

**Structure**: Each skill has its own directory:
```
skills/skill-name/
├── skill.yaml        # Skill metadata (name, description, version)
├── prompts/          # Skill prompt templates
├── templates/        # Skill-specific templates (e.g., code templates)
├── constitution.md   # Skill-specific principles
└── README.md         # Skill documentation & usage
```

**Examples**:
1. **chapter-writer-skill**: Methodology for writing chapters (70/30 balance, 3-source validation)
2. **code-example-generator**: Generates practical code examples with explanations
3. **source-validator**: 3-source validation logic

**Principles**:
- Skills are parameterized (can work with different content)
- Skills are composable (can be used together)
- Skills document their inputs and outputs

---

### `docs/` - Project Documentation

**Purpose**: Documentation for developers (not book content).

**Key Subdirectories**:

#### `architecture/` - System Design Docs
- **Files**: `overview.md`, `frontend-architecture.md`, `backend-architecture.md`, `database-schema.md`, `api-contracts.md`
- **Principle**: Living documentation (update with code changes)

#### `development/` - Developer Guides
- **Files**: `setup.md` (local dev), `workflow.md` (git workflow), `testing.md`, `debugging.md`
- **Principle**: Onboarding docs (new contributor should be productive in < 1 hour)

#### `deployment/` - Deployment Guides
- **Files**: `github-pages.md`, `vercel.md`, `database.md`, `secrets.md`
- **Principle**: Deployment should be repeatable (no "tribal knowledge")

#### `post-mortems/` - Project Analyses
- **Example**: `2025-12-04-v1-analysis.md` (the 3 analysis docs from original project)
- **Principle**: Learn from mistakes, document for future reference

---

### `history/` - Project History

**Purpose**: Audit trail of decisions and AI interactions.

**Key Subdirectories**:

#### `prompts/` - Prompt History Records (PHRs)
- **Structure**: `constitution/`, `general/`, `00X-feature-name/`
- **Naming**: `<ID>-<slug>.<stage>.prompt.md` (e.g., `001-create-constitution.constitution.prompt.md`)
- **Principle**: Every significant AI interaction logged

#### `adr/` - Architecture Decision Records
- **Naming**: `XXXX-kebab-case-title.md` (e.g., `0001-monorepo-structure.md`)
- **Principle**: Document significant decisions with context, options, and rationale

#### `beta-tests/` - Beta Test Reports
- **Naming**: `chapter-<X>-<YYYY-MM-DD>.md`
- **Principle**: User feedback documented for future reference

---

## 🎯 README.md AT EVERY LEVEL

**Principle**: Every directory has a README.md explaining its purpose, contents, and principles.

**Minimum README.md Content**:
```markdown
# [Directory Name]

**Purpose**: [1-2 sentences explaining why this directory exists]

**Contents**: [Brief list of what's inside]

**Principles**: [Key principles governing this directory, if any]

**See Also**: [Links to related docs]
```

**Examples**:
- `frontend/src/components/README.md`: "Reusable React components. Each component has .tsx + .module.css + README.md"
- `backend/lib/shared/README.md`: "TypeScript types and Zod validators shared with frontend. Changes here affect both frontend and backend."
- `agents/README.md`: "Claude Code subagents for automation. Phase 1: content-validator, deployment-agent, beta-tester. Phase 2: professor-agent, editor-agent."

---

## 🔒 .gitignore (CRITICAL - Day 1)

**Purpose**: Prevent committing build artifacts, secrets, dependencies.

**Contents** (must include):
```gitignore
# Dependencies
node_modules/
.pnp
.pnp.js

# Build outputs
build/
dist/
.next/
.docusaurus/
.cache/

# Environment & Secrets
.env
.env.local
.env.*.local

# Logs
*.log
npm-debug.log*
yarn-debug.log*

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# Testing
coverage/
.nyc_output/
playwright-report/

# Misc
*.pyc
__pycache__/
```

**Principle**: Commit `.gitignore` BEFORE any code (prevents mistakes).

---

## 📦 package.json (Monorepo Workspaces)

**Purpose**: Manage frontend + backend as a monorepo with shared dependencies.

**Root `package.json`**:
```json
{
  "name": "interactive-robotics-book",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "frontend",
    "backend"
  ],
  "scripts": {
    "dev:frontend": "npm run start --workspace=frontend",
    "dev:backend": "npm run dev --workspace=backend",
    "dev": "npm run dev:frontend & npm run dev:backend",
    "build:frontend": "npm run build --workspace=frontend",
    "build:backend": "npm run build --workspace=backend",
    "build": "npm run build:frontend && npm run build:backend",
    "test": "npm run test --workspaces",
    "lint": "npm run lint --workspaces"
  }
}
```

**Principle**: Single `node_modules/` at root, shared dependencies managed centrally.

---

## 🚀 NEXT STEPS

This directory structure is designed for:
- ✅ Clean separation of concerns
- ✅ Scalability (easy to add chapters 4-15)
- ✅ Reusability (agents/skills work across features)
- ✅ Documentation at every level (no "tribal knowledge")
- ✅ Constitutional enforcement (automated checks)

**Phase 1 Setup**: See `PHASE_1_COMMANDS.md` for step-by-step commands to create this structure.
