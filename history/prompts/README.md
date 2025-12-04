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
