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
