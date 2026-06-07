#!/usr/bin/env node
/**
 * Re-apply RemotionUI docs-mirror section to skills/remotion/SKILL.md after upstream sync.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SKILL = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../skills/remotion/SKILL.md",
);

const DOCS_SECTION = `## Official docs mirror (read first)

Before building or changing components, read the mirrored official docs in **[docs/INDEX.md](docs/INDEX.md)**.
They are fetched from \`remotion-dev/remotion\` MDX (same source as [remotion.dev/docs](https://www.remotion.dev/docs)).

Refresh the mirror: \`pnpm docs:remotion\`

Key pages for RemotionUI:

- [docs/sequence.md](docs/sequence.md) — \`layout="none"\`, timing children
- [docs/absolute-fill.md](docs/absolute-fill.md) — full-frame layering only
- [docs/animating-properties.md](docs/animating-properties.md) — \`useCurrentFrame()\` + \`interpolate()\`
- [docs/transitions-transitionseries.md](docs/transitions-transitionseries.md) — scene transitions

`;

let content = fs.readFileSync(SKILL, "utf-8");

if (content.includes("## Official docs mirror")) {
  console.log("skills/remotion/SKILL.md already has docs mirror section");
  process.exit(0);
}

const marker = "## When to use";
const idx = content.indexOf(marker);
if (idx === -1) {
  console.error("Could not find '## When to use' in SKILL.md");
  process.exit(1);
}

const afterWhenToUse = content.indexOf("\n## ", idx + marker.length);
const insertAt = afterWhenToUse === -1 ? content.length : afterWhenToUse;

content =
  content.slice(0, insertAt) + "\n" + DOCS_SECTION + content.slice(insertAt);

fs.writeFileSync(SKILL, content);
console.log("Patched skills/remotion/SKILL.md with docs mirror section");
