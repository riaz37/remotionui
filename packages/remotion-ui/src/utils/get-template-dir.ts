import fs from "fs-extra";
import path from "node:path";
import { fileURLToPath } from "node:url";

export function getTemplateDir(templateName: string): string {
  const currentDir = path.dirname(fileURLToPath(import.meta.url));

  const candidates = [
    // Bundled CLI: dist/index.js → packages/remotion-ui/templates
    path.resolve(currentDir, "../templates", templateName),
    // Dev / subpath: dist/utils/*.js
    path.resolve(currentDir, "../../templates", templateName),
    // Monorepo root: templates/
    path.resolve(currentDir, "../../../templates", templateName),
    path.resolve(currentDir, "../../../../templates", templateName),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  return candidates[0];
}
