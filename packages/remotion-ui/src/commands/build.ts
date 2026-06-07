import path from "node:path";
import { buildRegistry } from "../registry/build-registry.js";

export type BuildOptions = {
  cwd?: string;
  outputDir?: string;
  preset?: string;
};

export async function buildCommand(
  registryPath = "registry.json",
  options: BuildOptions = {},
): Promise<void> {
  const cwd = path.resolve(options.cwd ?? process.cwd());
  const resolvedRegistry = path.resolve(cwd, registryPath);
  const outputDir =
    options.outputDir ?? path.join(path.dirname(resolvedRegistry), "public", "r");

  console.log("Building registry...");
  const result = await buildRegistry({
    registryPath: resolvedRegistry,
    outputDir,
    preset: options.preset,
  });

  console.log(`\nRegistry built: ${result.itemCount} item(s)`);
  console.log(`Output: ${result.outputDir}`);
}
