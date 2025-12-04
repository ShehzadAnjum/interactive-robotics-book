# Interactive Robotics Book - Constitution 2.0

**Project**: Physical AI & Humanoid Robotics Interactive Textbook Platform
**Version**: 2.0.0
**Ratified**: 2025-12-04
**Status**: ACTIVE - Enforced with Automated Gates

---

## 🎯 CONSTITUTIONAL PURPOSE

This constitution governs the development of an AI-native interactive textbook platform. It codifies principles learned from extensive analysis (26-38 hours of waste, 220K-320K tokens lost) and establishes **enforceable mechanisms** to prevent repeated mistakes.

**Core Promise**: Build a production-grade platform with 3 chapters (expandable to 15) featuring AI chat, translation, authentication, personalization, and automated quality assurance—all while maintaining 75%+ development efficiency.

---

## ⚖️ CORE PRINCIPLES (NON-NEGOTIABLE)

### I. Three-Source Validation Rule ⚠️ CRITICAL

**Principle**: Every technical claim, code example, or concept must be validated against THREE independent authoritative sources before publication.

**Rationale**: Prevents misinformation in educational content. One source may be outdated, two may coincidentally agree on errors, three provides statistical confidence.

**Enforcement**:
```yaml
pre_commit:
  - run: python scripts/validate_sources.py
  - fail_on: source_count < 3 per technical claim

chapter_review:
  - agent: content-validator-agent
  - check: all code examples have 3+ source citations
  - block_merge: true if validation fails
```

**Examples**:
- ✅ "ROS uses publish-subscribe pattern" → Cited from: Official ROS Wiki, "Programming Robots with ROS" book, ROS 2 Design Docs
- ❌ "Transformers need 100M+ parameters" → Only one source, BLOCKED

---

### II. Smallest Viable Change Principle ⚠️ CRITICAL

**Principle**: Every pull request, feature, or task must be the **minimum change** to deliver value. No speculative work, no "while we're here" refactoring, no premature abstractions.

**Rationale**: Large changes create merge conflicts, hide bugs, delay feedback, and waste tokens on unused code.

**Enforcement**:
```yaml
pr_policy:
  - max_files_changed: 10 (except initial setup)
  - max_lines_changed: 500 (red flag at 300)
  - require: justification if exceeded

automated_check:
  - run: scripts/check_pr_size.sh
  - warn: lines > 300
  - block: lines > 500 without override approval
```

**Examples**:
- ✅ PR: "Add Chapter 4 content" → Changes 3 files (chapter doc, index, sidebar)
- ❌ PR: "Add Chapter 4 + refactor theme + update deps" → BLOCKED, split into 3 PRs

---

### III. Content-First Development Mandate ⚠️ CRITICAL

**Principle**: Complete ALL content chapters BEFORE adding platform features beyond the core (book + chat + translation + search).

**Rationale**: Prevents feature-driven development. Authentication, progress tracking, bookmarks are valueless without content to engage with.

**Enforcement**:
```yaml
quality_gate_1:
  name: "Content Foundation Gate"
  blocks: [authentication, progress-tracking, bookmarks, personalization]
  requires:
    - all_chapters_written: true (3 for v1.0, 15 for v2.0)
    - chapters_validated: true (3-source rule passed)
    - chapters_deployed: true
    - user_feedback: collected from ≥5 beta testers

automated_check:
  - run: scripts/check_chapter_count.sh
  - if: chapters < 3, block feature/* branches except core features
```

**Exceptions**: Core features (AI chat, translation, search) are parallel to content.

---

### IV. SpecKit Plus Journey (Planning Protocol) ⚠️ CRITICAL

**Principle**: ALL work follows: Constitution → Specify → Plan → Tasks → Implement → Review

**Rationale**: Prevents haphazard development. Previous project wasted 8-12 hours on out-of-sequence work.

**Enforcement**:
```yaml
branch_naming:
  - pattern: (feature|fix|docs)/<spec-id>-<description>
  - example: feature/003-ai-chat-widget
  - require: spec-id matches specs/{spec-id}/spec.md

pr_checklist:
  - [ ] Specification exists (specs/<id>/spec.md)
  - [ ] Plan document exists (specs/<id>/plan.md)
  - [ ] Tasks defined (specs/<id>/tasks.md)
  - [ ] All tasks completed (checked off in tasks.md)
  - [ ] Tests written and passing

automated_check:
  - run: scripts/validate_speckit_journey.sh
  - verify: spec.md → plan.md → tasks.md → PR changes align
  - block: true if spec missing or tasks incomplete
```

---

### V. Human-as-Tool Strategy (Decision Protocol)

**Principle**: AI agents MUST invoke human input for: (1) Ambiguous requirements, (2) Architectural decisions with tradeoffs, (3) Unforeseen dependencies, (4) Major milestone completions.

**Rationale**: Humans provide domain expertise, business priorities, and quality judgment that AI cannot replicate.

**Enforcement**:
```yaml
agent_protocol:
  - before: starting new feature
    ask: "Confirm scope, constraints, and success criteria"

  - before: architectural decision
    ask: "Present 2-3 options with tradeoffs, get user choice"

  - after: milestone completion
    ask: "Review deliverables, confirm next priorities"

  - on: error/blocker
    ask: "Report issue, propose 2-3 solutions, get direction"
```

**Examples**:
- ✅ Agent: "For authentication, option A: better-auth (faster setup), option B: NextAuth (more features). Which do you prefer?"
- ❌ Agent proceeds to implement authentication without asking about user preferences

---

### VI. Session Handoff Protocol (Context Preservation) ⚠️ CRITICAL

**Principle**: At the END of every development session, update `PROJECT_STATUS.md` with current state, blockers, and next actions.

**Rationale**: Prevents 30-60 minute context reload tax per session (cumulative savings: 25-55 min/session).

**Enforcement**:
```yaml
end_of_session:
  - automated_reminder: "Session ending. Update PROJECT_STATUS.md"
  - required_sections:
      - completed_today: list of finished tasks
      - in_progress: current work (must be only 1 task)
      - blockers: list any issues
      - next_session: top 3 priorities
      - context_notes: any critical context for next session

git_hook:
  - pre_push: check PROJECT_STATUS.md updated in last 2 hours
  - warn: if not updated, "Did you forget session handoff?"
```

**Template**: See `.speckit/templates/PROJECT_STATUS.md`

---

### VII. Test-First Development (Red-Green-Refactor)

**Principle**: Write failing tests BEFORE implementation. No PR merges without tests.

**Rationale**: Prevents regressions, clarifies requirements, enables confident refactoring.

**Enforcement**:
```yaml
pr_policy:
  - require: test files present
  - require: all tests passing (CI must be green)
  - block: if PR adds code without corresponding tests

test_coverage:
  - minimum: 70% line coverage
  - critical_paths: 90% coverage (auth, chat, translation)
  - automated: Codecov report on every PR
```

**Test Types Required**:
- Unit tests: Core logic, utilities, helpers
- Integration tests: API endpoints, database queries
- E2E tests: User flows (signup → read chapter → chat → bookmark)
- Visual regression: Playwright screenshots

---

### VIII. Practical-First Balance (70/30 Rule)

**Principle**: Every chapter must be 70% hands-on practical content, 30% theory.

**Rationale**: Learners prefer building over reading. Theory without practice is forgotten.

**Enforcement**:
```yaml
chapter_validator:
  - run: scripts/check_practical_balance.py
  - analyze:
      - code_blocks: count executable examples
      - exercises: count hands-on activities
      - theory_sections: count explanation-only content
  - require: (code_blocks + exercises) ≥ 70% of chapter word count
  - warn: if theory > 35%
```

**Examples**:
- ✅ Chapter 3: Hardware (6,229 words) → 12 code examples + 8 exercises = 72% practical
- ❌ Chapter X: Theory-heavy math proofs with 1 code example = 15% practical → BLOCKED

---

### IX. Reusable Intelligence Mandate

**Principle**: Build agents and skills that work across chapters and (future) across books. No single-use, chapter-specific agents.

**Rationale**: Prevents duplication. Agent development is expensive; reuse amortizes cost.

**Enforcement**:
```yaml
agent_design:
  - require: agent specification document (agents/<name>/SPEC.md)
  - require: input/output contracts defined
  - require: "reusability scope" documented (chapter-level, book-level, domain-level)
  - review: before agent creation, confirm it's not duplicating existing agent

skill_design:
  - require: skill can be invoked with different chapter content
  - require: no hardcoded chapter numbers or titles
  - require: parameterized inputs (chapter_content, topic, difficulty_level)
```

**Examples**:
- ✅ Content Validator Agent: Takes any chapter, validates sources/code/links
- ❌ Chapter3Validator Agent: Hardcoded for Chapter 3 only → BLOCKED

---

### X. Repository Hygiene (Clean Git)

**Principle**: NEVER commit build artifacts, secrets, node_modules, or IDE configs. Use .gitignore from Day 1.

**Rationale**: Previous project: 7.5MB build artifacts caused repo bloat, required git filter-branch.

**Enforcement**:
```yaml
pre_commit_hook:
  - run: scripts/check_forbidden_files.sh
  - block: if detects build/, dist/, .env, node_modules/
  - list_forbidden:
      - "build/**"
      - "dist/**"
      - ".next/**"
      - "node_modules/**"
      - ".env*"
      - "*.log"
      - ".DS_Store"
      - "*.pyc"

automated:
  - github_action: run on every push
  - fail_build: if forbidden files detected
```

**Setup**: Copy `.gitignore.template` on Day 1, commit before any code.

---

### XI. Automated Quality Gates

**Principle**: No manual "remember to check X" checklists. All quality checks must be automated in CI/CD.

**Rationale**: Humans forget. Machines don't. Automation prevents regressions.

**Enforcement**:
```yaml
github_actions:
  - on: pull_request
    jobs:
      - lint: Run ESLint, Prettier, Ruff
      - typecheck: TypeScript, Pyright
      - test: Playwright, Jest, Pytest
      - build: Docusaurus build, Next.js build
      - validate: 3-source rule, practical balance, link checker
      - security: Dependabot, SAST scan

  - require: all jobs pass before merge
  - no_bypass: only repo owner can override (emergency only)
```

**Gate Levels**:
- 🟢 **Level 1** (Every PR): Lint, typecheck, unit tests, build
- 🟡 **Level 2** (Before deploy): E2E tests, visual regression, performance
- 🔴 **Level 3** (Before release): Security scan, accessibility audit, beta tester validation

---

### XII. Branch Strategy (Feature Branch + PR)

**Principle**: No direct commits to `main`. All work via feature branches and pull requests with review.

**Rationale**: Prevents broken main branch, enables rollback, creates audit trail.

**Enforcement**:
```yaml
github_settings:
  - branch_protection:
      - branch: main
      - require_pull_request: true
      - require_review: 1 (self-review acceptable for solo dev)
      - require_status_checks: all CI jobs pass
      - no_force_push: true
      - no_delete: true

branch_naming:
  - pattern: <type>/<spec-id>-<description>
  - types: [feature, fix, docs, chore, test]
  - examples:
      - feature/002-ai-chat-widget
      - fix/003-translation-encoding
      - docs/001-add-readme
```

**Workflow**:
1. Create branch from main: `git checkout -b feature/002-ai-chat`
2. Implement (following spec → plan → tasks)
3. Commit with clear messages: `git commit -m "feat(chat): add streaming response"`
4. Push and create PR: `git push origin feature/002-ai-chat`
5. Wait for CI to pass (automated checks)
6. Self-review PR (for solo dev) or request review
7. Merge only after all checks green
8. Delete feature branch

---

## 🏛️ ARCHITECTURE PRINCIPLES

### A. Separation of Concerns

**Principle**: Frontend, backend, agents, specs, and documentation are separate directories with clear boundaries.

**Structure**:
```
interactive-robotics-book/
├── .speckit/                    # SpecKit configuration
│   ├── config.yaml
│   ├── templates/
│   └── scripts/
├── specs/                       # Feature specifications
│   ├── 001-book-platform/
│   │   ├── spec.md
│   │   ├── plan.md
│   │   └── tasks.md
│   ├── 002-ai-chat-widget/
│   ├── 003-translation/
│   ├── 004-search/
│   ├── 005-authentication/
│   └── 006-deployment/
├── frontend/                    # Docusaurus book
│   ├── docs/                   # 3 chapters
│   ├── src/
│   ├── CLAUDE.md               # Frontend-specific instructions
│   └── constitution.md         # References root constitution
├── backend/                     # Next.js API
│   ├── app/
│   ├── lib/
│   ├── prisma/
│   ├── CLAUDE.md
│   └── constitution.md
├── agents/                      # Claude Code subagents
│   ├── content-validator/
│   │   ├── SPEC.md
│   │   ├── agent.yaml
│   │   └── constitution.md
│   ├── deployment-agent/
│   └── beta-tester/
├── skills/                      # Reusable skills
│   ├── chapter-writer-skill/
│   ├── code-example-generator/
│   └── source-validator/
├── docs/                        # Project documentation
│   ├── architecture/
│   ├── deployment/
│   └── development/
├── history/                     # PHRs and ADRs
│   ├── prompts/
│   └── adr/
├── CLAUDE.md                    # Root instructions
├── CONSTITUTION.md              # This file
├── PROJECT_STATUS.md            # Session handoff tracker
├── README.md                    # Public-facing docs
└── docker-compose.yml
```

**Enforcement**: PR blocked if files added outside designated directories without justification.

---

### B. Database Schema as Code (Prisma)

**Principle**: All database schema changes via Prisma migrations. No manual SQL (except emergencies).

**Rationale**: Prevents schema drift, enables rollback, documents changes in version control.

**Workflow**:
```bash
# 1. Update schema
vim backend/prisma/schema.prisma

# 2. Create migration
npx prisma migrate dev --name add_bookmarks_table

# 3. Commit migration files
git add backend/prisma/migrations/
git commit -m "db: add bookmarks table"

# 4. Apply to production
npx prisma migrate deploy
```

**Enforcement**:
- Pre-commit hook warns if `schema.prisma` changed without migration
- CI fails if migrations not applied (`prisma migrate diff` detects drift)

---

### C. Environment Configuration (No Secrets in Code)

**Principle**: All secrets in `.env.local`, never committed. All config via environment variables.

**Enforcement**:
```yaml
pre_commit_hook:
  - scan: all files for patterns
  - patterns:
      - "GEMINI_API_KEY = \".*\""
      - "DATABASE_URL = \"postgresql://.*\""
      - "sk-[a-zA-Z0-9]{32,}"  # OpenAI key pattern
      - "AIza[a-zA-Z0-9]{35}"  # Google API key pattern
  - block: if match found
  - message: "SECRET DETECTED! Move to .env.local"

template:
  - provide: .env.example (safe to commit)
  - instruct: "Copy to .env.local and fill in secrets"
```

---

### D. Monorepo with Shared Types

**Principle**: Frontend and backend share TypeScript types via `@shared` package.

**Rationale**: Prevents API contract mismatches, enables refactoring with confidence.

**Implementation**:
```
backend/lib/shared/
├── types.ts          # Shared types (User, Chapter, Bookmark)
├── constants.ts      # Shared constants
└── validators.ts     # Shared Zod schemas

frontend/src/types/
└── index.ts          # Re-exports from backend/lib/shared
```

**Enforcement**: E2E tests catch type mismatches (API returns wrong shape → frontend TypeScript error).

---

## 🧪 TESTING REQUIREMENTS

### Test Coverage Mandate

**Minimum Coverage**:
- Overall: 70% line coverage
- Critical paths: 90% (authentication, chat, translation, bookmarks)
- New code: 80% (enforced on PR diffs)

**Required Test Types**:

| Type | Tool | Scope | Examples |
|------|------|-------|----------|
| Unit | Jest/Vitest | Pure functions, utilities | `validateEmail()`, `formatDate()` |
| Integration | Playwright API | API endpoints, DB queries | POST `/api/bookmarks` saves to DB |
| E2E | Playwright | Full user flows | Signup → Read Ch1 → Bookmark → Logout |
| Visual | Playwright | UI consistency | Screenshot diffs for chapters |
| Performance | Lighthouse CI | Page load, bundle size | First Contentful Paint < 1.5s |
| Accessibility | axe-core | WCAG compliance | No missing alt text, color contrast |

**Enforcement**:
```yaml
github_actions:
  - name: "Test Suite"
    steps:
      - run: npm test -- --coverage
      - fail_if: coverage < 70%
      - upload: coverage report to Codecov

  - name: "E2E Tests"
    steps:
      - run: npx playwright test
      - fail_if: any test fails
      - upload: screenshots and videos on failure
```

---

### Beta Tester Agent Requirements

**Purpose**: Automated agent that simulates real student behavior to validate chapters.

**Capabilities**:
1. **Content Validation**: Reads chapter, identifies unclear explanations
2. **Code Example Testing**: Runs all code examples, reports errors
3. **Link Checking**: Verifies all internal and external links
4. **Difficulty Assessment**: Estimates chapter difficulty, suggests adjustments
5. **Question Generation**: Generates 10 comprehension questions per chapter

**Invocation**:
```bash
# Test single chapter
npm run beta-test -- --chapter=1

# Test all chapters
npm run beta-test -- --all

# Generate report
npm run beta-test -- --chapter=2 --report=detailed
```

**Output**: Markdown report in `history/beta-tests/<chapter>-<date>.md`

**Enforcement**: Chapter cannot be marked "complete" until Beta Tester Agent approves.

---

## 📊 QUALITY METRICS & MONITORING

### Success Metrics (Quantified)

**Development Efficiency**:
- ✅ Target: 75%+ (vs. previous 24-48%)
- Measured: (Productive time) / (Total time)
- Tracked: Weekly in `PROJECT_STATUS.md`

**Context Loss Prevention**:
- ✅ Target: < 10 minutes per session (vs. previous 30-60 min)
- Measured: Time from session start to first productive commit
- Tracked: Self-reported in session handoff

**Token Efficiency**:
- ✅ Target: < 50K tokens per feature (vs. previous waste of 220K-320K)
- Measured: Sum of Claude API tokens per feature branch
- Tracked: Log in PR description

**Code Quality**:
- ✅ Test coverage: 70%+ overall, 90%+ critical paths
- ✅ Build time: < 60 seconds (Docusaurus + Next.js)
- ✅ Page load: < 2 seconds (Lighthouse score ≥ 90)
- ✅ Accessibility: WCAG AA compliance (axe-core score 100)

**Feature Delivery**:
- ✅ PR cycle time: < 3 days (from branch creation to merge)
- ✅ Rollback rate: < 5% (indicates stable releases)
- ✅ Bug escape rate: < 2 bugs per feature (indicates good testing)

---

### Monitoring & Observability

**Required Instrumentation**:
```yaml
frontend:
  - analytics: Google Analytics 4 (user engagement)
  - errors: Sentry (JavaScript errors, React errors)
  - performance: Lighthouse CI (page load, bundle size)

backend:
  - logs: Vercel logs (API response times, errors)
  - errors: Sentry (500 errors, unhandled exceptions)
  - database: Neon metrics (query time, connection pool)

ci_cd:
  - build_times: GitHub Actions metrics
  - test_results: Playwright reports (pass/fail rates)
  - deployment: Vercel deployment logs (success/failure)
```

**Alerts** (via GitHub Issues):
- Critical: API error rate > 5% (auto-create issue)
- Warning: Page load > 3 seconds (weekly digest)
- Info: Test coverage drops below 70% (comment on PR)

---

## 🛡️ GOVERNANCE & ENFORCEMENT

### Constitutional Supremacy

**Principle**: This Constitution supersedes all other documentation, practices, and personal preferences.

**Precedence**:
1. Constitution 2.0 (this document)
2. Feature specifications (specs/*/spec.md)
3. Project README.md
4. Code comments and docstrings

**Conflict Resolution**: If contradiction found, Constitution wins. Update conflicting docs.

---

### Amendment Process

**Requirements** for constitutional changes:
1. Identify principle to amend (with rationale)
2. Propose amendment in GitHub Discussion
3. Prototype enforcement mechanism (script, CI check, etc.)
4. User approval required (for solo dev: self-approval with 24hr cooling-off period)
5. Update Constitution, increment minor version (2.0 → 2.1)
6. Update dependent templates, scripts, and docs
7. Announce in PROJECT_STATUS.md

**Example**:
```markdown
## Constitutional Amendment Proposal

**Principle**: V. Human-as-Tool Strategy
**Proposed Change**: Reduce required human invocations from 4 to 2 scenarios
**Rationale**: Current principle too verbose, slows development
**Enforcement**: Update agent_protocol in Section V
**Version**: 2.0.0 → 2.1.0
**Status**: DRAFT (awaiting 24hr review)
```

---

### Compliance Checks

**Automated** (every PR):
- ✅ SpecKit journey followed (spec → plan → tasks → PR)
- ✅ Tests present and passing
- ✅ No forbidden files (.env, build/, node_modules/)
- ✅ PR size reasonable (< 500 lines)
- ✅ Session handoff updated (if session-ending commit)

**Manual** (weekly review):
- ✅ Development efficiency ≥ 75%
- ✅ All chapters follow 70/30 practical balance
- ✅ All agents/skills are reusable (no single-use agents)
- ✅ PROJECT_STATUS.md reflects reality

**Quarterly Audit**:
- Review all principles for relevance
- Check enforcement mechanisms working
- Update based on lessons learned
- Increment patch version if minor fixes (2.0.0 → 2.0.1)

---

### Emergency Override Protocol

**When**: Critical production bug, security vulnerability, or compliance deadline.

**Authorization**: Only repository owner can override constitutional checks.

**Process**:
1. Document emergency in GitHub Issue
2. Use `git commit --no-verify` (bypasses pre-commit hooks)
3. Merge PR with `[EMERGENCY]` tag
4. Within 24 hours:
   - Fix root cause
   - Add test to prevent recurrence
   - Update Constitution if principle was wrong
5. Post-mortem required (document in `history/post-mortems/`)

**Limits**: Max 2 emergency overrides per quarter. Third override triggers constitutional review.

---

## 📚 APPENDICES

### A. Glossary

- **SpecKit Plus**: Development methodology (Constitution → Specify → Plan → Tasks → Implement)
- **PHR**: Prompt History Record (log of AI interactions)
- **ADR**: Architecture Decision Record (documents significant decisions)
- **Quality Gate**: Automated checkpoint blocking progress until criteria met
- **Session Handoff**: End-of-session context preservation protocol
- **Constitutional Violation**: Breaking a NON-NEGOTIABLE principle (blocks PR merge)

---

### B. Related Documents

- `PROJECT_STATUS.md` - Current state and session handoff
- `README.md` - Public-facing project documentation
- `.speckit/templates/` - Templates for specs, plans, tasks, PHRs
- `specs/*/spec.md` - Feature specifications following SpecKit format
- `history/adr/` - Architecture Decision Records
- `CLAUDE.md` - Root instructions for Claude Code
- `frontend/CLAUDE.md` - Frontend-specific instructions
- `backend/CLAUDE.md` - Backend-specific instructions

---

### C. Quick Reference

**Before Starting Work**:
1. Read Constitution 2.0 (this doc)
2. Check `PROJECT_STATUS.md` for current state
3. Create/update specification in `specs/<id>/spec.md`
4. Create plan and tasks
5. Create feature branch
6. Update PROJECT_STATUS.md (mark task in_progress)

**Before Ending Session**:
1. Commit all work in progress
2. Update `PROJECT_STATUS.md` with completed/blockers/next
3. Push branch to GitHub
4. Set reminder for next session priorities

**Before Merging PR**:
1. All CI checks pass (green)
2. Tests written and passing (70%+ coverage)
3. Self-review completed
4. SESSION_HANDOFF.md updated if relevant
5. Squash commits for clean history

---

## 🚀 CONSTITUTIONAL COMMITMENT

By committing this Constitution to the repository, all contributors (human and AI) agree to:

1. **Follow** all NON-NEGOTIABLE principles without exception
2. **Respect** quality gates and automated checks
3. **Document** all decisions, context, and rationale
4. **Measure** efficiency and continuously improve
5. **Enforce** via automation, not manual checklists
6. **Amend** the Constitution when principles proven wrong
7. **Prioritize** quality over speed, sustainability over shortcuts

**Signed**: Anjum (Project Owner)
**Witnessed**: Claude Code (AI Development Partner)
**Date**: 2025-12-04
**Version**: 2.0.0

---

**END OF CONSTITUTION 2.0**

*This constitution learned from 26-38 hours of waste and 220K-320K lost tokens. May it guide us to 75%+ efficiency and A-class product quality.*
