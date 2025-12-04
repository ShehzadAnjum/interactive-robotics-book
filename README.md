# Interactive Robotics Book

**Physical AI & Humanoid Robotics Interactive Textbook Platform**

[![GitHub](https://img.shields.io/badge/github-interactive--robotics--book-blue)](https://github.com/ShehzadAnjum/interactive-robotics-book)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Constitution](https://img.shields.io/badge/governed%20by-Constitution%202.0-purple)](.specify/memory/constitution.md)

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
```
interactive-robotics-book/
├── .specify/           # SpecKit Plus configuration
├── specs/              # Feature specifications (SpecKit format)
├── frontend/           # Docusaurus book (GitHub Pages)
├── backend/            # Next.js API (Vercel Edge Runtime)
├── agents/             # Claude Code subagents (automation)
├── skills/             # Reusable Claude skills
├── docs/               # Architecture, development, deployment guides
└── history/            # PHRs (Prompt History Records) & ADRs
```

**Tech Stack**:
- **Frontend**: Docusaurus 3.6.3, React 18, TypeScript, MDX
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
git clone https://github.com/ShehzadAnjum/interactive-robotics-book.git
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

**Frontend**: http://localhost:3000
**Backend API**: http://localhost:3001

---

## 📖 Documentation

- **[Constitution](.specify/memory/constitution.md)** - Project principles and governance (v2.0.0)
- **[Architecture](./docs/architecture/)** - System design
- **[Development Guide](./docs/development/)** - Developer setup
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
- Live URL: https://shehzadanjum.github.io/interactive-robotics-book/

**Backend** (Vercel):
- Automatic deployment on push to `main` branch
- Live URL: TBD (after deployment)

---

## 🤖 Agents & Skills

**Phase 1 Agents** (To be implemented):
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

**Version**: 1.0.0 (Foundation Phase)
**Status**: 🟡 Phase 1 Complete, Phase 2 Starting

**Completed**:
- ✅ Repository structure (monorepo with 40+ directories)
- ✅ Constitution 2.0 ratified (12 principles, enforced)
- ✅ SpecKit Plus integrated (.specify/ directory)
- ✅ Git repository with proper .gitignore
- ✅ Documentation structure
- ✅ PHR system initialized (Prompt History Records)

**In Progress**:
- 🔄 Phase 2: Feature specifications

**Next**:
- ⏳ Create 6 granular feature specifications
- ⏳ Set up frontend workspace (Docusaurus)
- ⏳ Set up backend workspace (Next.js + Prisma)
- ⏳ Migrate 3 existing chapters
- ⏳ Build Phase 1 agents

See [PROJECT_STATUS.md](./PROJECT_STATUS.md) for detailed status.

---

## 📜 Constitutional Governance

This project is governed by **Constitution 2.0** with 12 enforced principles:

1. ⚠️ **Three-Source Validation Rule** - Every technical claim validated against 3 sources
2. ⚠️ **Smallest Viable Change** - PR size limits (<500 lines)
3. ⚠️ **Content-First Development** - No auth before chapters complete
4. ⚠️ **SpecKit Plus Journey** - Specify → Plan → Tasks → Implement
5. **Human-as-Tool Strategy** - AI asks for clarification
6. ⚠️ **Session Handoff Protocol** - Prevents context loss
7. **Test-First Development** - 70%+ coverage required
8. **70/30 Practical Balance** - Chapters must be 70% hands-on
9. **Reusable Intelligence** - Agents work across chapters
10. **Repository Hygiene** - No build artifacts in git
11. **Automated Quality Gates** - All checks automated
12. **Branch Strategy** - Feature branches + PR workflow

**Efficiency Targets**:
- ✅ 75%+ development efficiency (vs. previous 24-48%)
- ✅ <10 min context reload per session (vs. previous 30-60 min)
- ✅ <50K tokens per feature (vs. previous waste of 220K-320K)

See [.specify/memory/constitution.md](.specify/memory/constitution.md) for full details.

---

## 🤝 Contributing

This is currently a solo development project governed by SpecKit Plus methodology. All development follows the constitutional workflow:

1. Read Constitution (.specify/memory/constitution.md)
2. Create Specification (`/sp.specify`)
3. Create Plan (`/sp.plan`)
4. Create Tasks (`/sp.tasks`)
5. Implement (`/sp.implement`)
6. Create PR with tests

---

## 📝 License

[Choose License - MIT recommended]

---

## 🙏 Acknowledgments

Built with:
- [Claude Code](https://claude.com/claude-code) - AI development partner
- [SpecKit Plus](https://speckit.dev) - Development methodology
- [Docusaurus](https://docusaurus.io/) - Documentation framework
- [Google Gemini](https://ai.google.dev/) - AI capabilities

**Learned from**: 26-38 hours of waste and 220K-320K lost tokens from v1.0 project.
**Governed by**: Constitution 2.0 - ensuring 75%+ efficiency.

---

**Version**: 1.0.0 | **Last Updated**: 2025-12-04 | **Status**: Foundation Complete
