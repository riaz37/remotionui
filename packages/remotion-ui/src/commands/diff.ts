import fs from "fs-extra";
import path from "node:path";
import { fetchRegistryItem } from "../registry/fetch-item.js";
import { getConfig, resolveInstallPath } from "../utils/get-config.js";

export type DiffOptions = {
  cwd?: string;
  registryUrl?: string;
  preset?: string;
};

function printUnifiedDiff(
  filePath: string,
  installed: string,
  registry: string,
): void {
  const installedLines = installed.split("\n");
  const registryLines = registry.split("\n");
  const max = Math.max(installedLines.length, registryLines.length);

  console.log(`--- ${filePath} (installed)`);
  console.log(`+++ ${filePath} (registry)`);

  for (let i = 0; i < max; i++) {
    const a = installedLines[i];
    const b = registryLines[i];

    if (a === b) {
      continue;
    }

    if (a !== undefined) {
      console.log(`-${a}`);
    }
    if (b !== undefined) {
      console.log(`+${b}`);
    }
  }
}

export async function diffCommand(
  name: string,
  options: DiffOptions = {},
): Promise<void> {
  const cwd = path.resolve(options.cwd ?? process.cwd());
  const config = await getConfig(cwd);
  const preset = options.preset ?? config.preset;

  const item = await fetchRegistryItem(name, {
    registryUrl: options.registryUrl,
    preset,
  });

  let hasDiff = false;

  for (const file of item.files) {
    if (!file.content) {
      console.warn(`  ⚠ No registry content for ${file.path}`);
      continue;
    }

    const targetPath = resolveInstallPath(cwd, config, file);
    const relativePath = path.relative(cwd, targetPath);

    if (!(await fs.pathExists(targetPath))) {
      console.log(`\n${relativePath}: not installed`);
      hasDiff = true;
      continue;
    }

    const installed = await fs.readFile(targetPath, "utf-8");

    if (installed.trim() !== file.content.trim()) {
      console.log(`\nDiff for ${relativePath}:`);
      printUnifiedDiff(relativePath, installed, file.content);
      hasDiff = true;
    }
  }

  if (!hasDiff) {
    console.log(`${name}: no differences (installed matches registry)`);
  }
}
