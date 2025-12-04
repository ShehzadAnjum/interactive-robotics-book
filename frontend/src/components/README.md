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
