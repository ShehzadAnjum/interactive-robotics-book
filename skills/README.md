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
