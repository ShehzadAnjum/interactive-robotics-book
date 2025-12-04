# Project Specification

**Physical AI & Humanoid Robotics Interactive Textbook Platform**

---

## 1. PROJECT SCOPE

Build an AI-native interactive textbook platform for the course **Physical AI & Humanoid Robotics** with:

* A web-based technical book
* Embedded AI assistant for in-book learning
* Retrieval-based answering from book content
* Optional personalization and translation
* Optional authentication and learner profiling
* Deployable on GitHub Pages or Vercel

The platform must support modular expansion for future books and reuse of AI intelligence.

---

## 2. CORE REQUIREMENTS

### 2.1 Book Platform

* Authoring and publishing system for technical textbooks
* Web-hosted static book with AI extensions
* Fully navigable chapters and sections
* Deployed publicly
* Version-controlled in GitHub

---

### 2.2 RAG Chatbot System (Mandatory)

* Embedded in book UI
* Answers based only on:

  * Book content
  * User-selected text (scoped queries)

Functional scope:

* Ask questions about entire book
* Ask questions about selected text
* Highlight-to-query support
* Context-aware querying
* Multi-turn conversational memory per session
* Graceful error handling
* Loading states
* Timeout handling

---

### 2.3 AI Intelligence Framework (Optional Bonus Feature)

Reusable AI intelligence layer including:

* Claude Code Subagents
* Intelligence Skills
* Modular design for future reuse
* Skill-based workflows inside book generation
* Automated content reasoning support
* AI orchestration using Spec-Kit Plus

---

### 2.4 User Authentication (Optional Bonus Feature)

Account system with:

* Signup and login
* Credential management
* Session handling
* Secure user storage

At registration ask:

* Software background
* AI experience
* Robotics exposure
* Hardware availability

Store for personalization services.

---

### 2.5 Content Personalization (Optional Bonus Feature)

Per-user:

* Chapter customization
* Learning difficulty adjustments
* Toolchain recommendations
* Experience-based hints

Triggered from:

* Button at chapter start
* Profile-based user data

---

### 2.6 Language Translation (Optional Bonus Feature)

* Per-chapter translation
* Language toggle
* Urdu translation supported
* Triggered via chapter button
* AI-generated translation

---

## 3. FUNCTIONAL FEATURES

### 3.1 Book Engine

* Static site generation
* Markdown-based chapters
* Table of contents
* Navigation
* Code blocks
* Diagrams
* Math support

---

### 3.2 AI Chat UI

* Floating chat widget
* Section-based assistant
* Text selection support
* Minimal UI
* Mobile responsive design

---

### 3.3 RAG Features

* Vector search query engine
* Chunk-based embedding
* Ranked retrieval
* Source grounding

---

### 3.4 User System (Optional)

* Profile storage
* Background data ingestion
* Session memory
* User-specific context passed to LLM

---

### 3.5 Personalization Engine (Optional)

* Per-chapter adaptation
* Learner profile awareness
* Intelligent prompting
* Skill-level tuning

---

### 3.6 Translation System (Optional)

* On-demand translation
* Inline content replacement
* AI-driven localization

---

### 3.7 Intelligence Infrastructure (Optional)

* Claude Code Subagents
* Intelligence workflows
* Skills registry
* Subagent orchestration
* Spec-driven behavior

---

## 4. TECH STACK

### 4.1 Frontend

* Docusaurus
* React (via Docusaurus)
* Static deployment on:

  * GitHub Pages or
  * Vercel

---

### 4.2 Backend

* FastAPI
* REST API endpoints
* Session handling
* Request validation

---

### 4.3 AI Stack

* Claude Code
* Spec-Kit Plus
* OpenAI Agents / ChatKit SDK
* Whisper (for voice support if implemented)
* Claude Subagents
* Claude Skills

---

### 4.4 Vector Store

* Qdrant Cloud (Free Tier)
* Embeddings for:

  * All book chapters
  * All content blocks
  * Metadata tagging

---

### 4.5 Database

* Neon Serverless Postgres
* User profiles
* Chat history
* Session metadata
* Preferences

---

### 4.6 Authentication (Optional)

* Better-Auth
* Token-based login
* Secure session management

---

### 4.7 Hosting

* Frontend:

  * GitHub Pages or Vercel
* Backend API:

  * Any cloud deployment compatible with FastAPI
* Database:

  * Neon Cloud
* Vector Search:

  * Qdrant Cloud

---

## 5. DELIVERABLES

Mandatory:

* Public GitHub Repository
* Deployed book URL
* Working RAG chatbot
* Embedded UI controls

Optional:

* Auth system
* Content personalization
* Chapter translation
* AI sub-agents and skills
* Demo video (≤ 90 seconds)

---

## 6. NON-FUNCTIONAL REQUIREMENTS

* Fast page loads
* Reliable vector search
* Robust exception handling
* Scalable architecture
* Modular AI logic
* Code separation of concerns
* Clear folder structure