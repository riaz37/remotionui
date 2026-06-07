import fs from "fs-extra";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { diffCommand } from "./diff.js";

describe("diffCommand", () => {
  let tempDir: string;
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  const fixtureDir = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../../test/fixtures/remotion-app",
  );
  const registryDir = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../../test/fixtures/registry",
  );

  beforeEach(async () => {
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "remotion-ui-diff-"));
    await fs.copy(fixtureDir, tempDir, {
      filter: (src) => !src.includes("node_modules"),
    });
    consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(async () => {
    await fs.remove(tempDir);
    vi.restoreAllMocks();
  });

  it("reports no differences when files match", async () => {
    await fs.writeFile(
      path.join(tempDir, "src/remotion/primitives/fade-in.tsx"),
      "export const FadeIn = () => null;\n",
      "utf-8",
    );

    await diffCommand("fade-in", {
      cwd: tempDir,
      registryUrl: registryDir,
    });

    expect(consoleSpy).toHaveBeenCalledWith(
      "fade-in: no differences (installed matches registry)",
    );
  });

  it("reports diff when installed file differs", async () => {
    await fs.writeFile(
      path.join(tempDir, "src/remotion/primitives/fade-in.tsx"),
      "export const Old = () => null;\n",
      "utf-8",
    );

    await diffCommand("fade-in", {
      cwd: tempDir,
      registryUrl: registryDir,
    });

    const output = consoleSpy.mock.calls.flat().join("\n");
    expect(output).toContain("Diff for");
    expect(output).toContain("-export const Old");
    expect(output).toContain("+export const FadeIn");
  });
});
