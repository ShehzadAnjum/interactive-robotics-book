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
