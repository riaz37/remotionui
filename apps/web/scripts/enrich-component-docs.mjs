#!/usr/bin/env node
/**
 * Rewrites primitive/scene/composition MDX pages to use <ComponentPage>.
 * Run: node apps/web/scripts/enrich-component-docs.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DOCS = path.join(ROOT, "content/docs");

const DURATIONS = {
  intro: 150,
  showcase: 240,
  "feature-list": 90,
  counter: 90,
  "stagger-children": 90,
  "stat-card": 75,
  "quote-card": 75,
};

const NO_PREVIEW = new Set(["transition-fade", "transition-slide"]);

function toPascalCase(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;
  const body = match[2].trim();
  const title = match[1].match(/^title:\s*(.+)$/m)?.[1]?.trim();
  const description = match[1].match(/^description:\s*(.+)$/m)?.[1]?.trim();
  return { title, description, body };
}

function extractDuration(body, slug) {
  const fromBody = body.match(/durationInFrames=\{(\d+)\}/)?.[1];
  if (fromBody) return Number(fromBody);
  return DURATIONS[slug] ?? 60;
}

function extractProse(body) {
  const lines = body
    .split("\n")
    .filter(
      (line) =>
        !line.startsWith("import ") &&
        !line.includes("<InstallCommand") &&
        !line.includes("<RemotionPreview") &&
        !line.includes("<ComponentPage") &&
        line.trim() !== "",
    );

  const prose = lines
    .filter((line) => !line.startsWith("```"))
    .join("\n")
    .trim();

  return prose.replace(/^Exports .+$/m, "").trim();
}

function enrichFile(category, slug) {
  const filePath = path.join(DOCS, category, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return;

  const raw = fs.readFileSync(filePath, "utf-8");
  const parsed = parseFrontmatter(raw);
  if (!parsed?.title) return;

  const duration = extractDuration(parsed.body, slug);
  const prose =
    extractProse(parsed.body) || parsed.description || "";

  let content = `---
title: ${parsed.title}
description: ${parsed.description ?? parsed.title}
---

`;

  if (NO_PREVIEW.has(slug)) {
    content += `<ComponentPage name="${slug}">

${prose}

</ComponentPage>
`;
  } else {
    const previewName = `${toPascalCase(slug)}Preview`;
    content += `import { ${previewName} } from '@/components/previews/${slug}';

<ComponentPage name="${slug}" preview={${previewName}} durationInFrames={${duration}}>

${prose}

</ComponentPage>
`;
  }

  fs.writeFileSync(filePath, content);
  console.log(`updated ${category}/${slug}.mdx`);
}

for (const category of ["primitives", "scenes", "compositions"]) {
  const metaPath = path.join(DOCS, category, "meta.json");
  if (!fs.existsSync(metaPath)) continue;
  const { pages } = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
  for (const slug of pages) {
    enrichFile(category, slug);
  }
}

console.log("Done.");
