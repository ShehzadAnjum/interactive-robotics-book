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
