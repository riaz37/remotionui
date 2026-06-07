import { execSync } from "node:child_process";
import fs from "fs-extra";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { addCommand } from "./add.js";

vi.mock("node:child_process", () => ({
  execSync: vi.fn(),
}));

const fixtureDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../test/fixtures/remotion-app",
);
const registryDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../test/fixtures/registry",
);

describe("addCommand", () => {
  let tempDir: string;

  beforeEach(async () => {
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "remotion-ui-add-"));
    await fs.copy(fixtureDir, tempDir, {
      filter: (src) => !src.includes("node_modules"),
    });
    vi.mocked(execSync).mockReset();
  });

  afterEach(async () => {
    await fs.remove(tempDir);
  });

  it("writes primitive files to the correct path", async () => {
    await addCommand(["fade-in"], {
      cwd: tempDir,
      registryUrl: registryDir,
    });

    const target = path.join(tempDir, "src/remotion/primitives/fade-in.tsx");
    expect(await fs.pathExists(target)).toBe(true);
    const content = await fs.readFile(target, "utf-8");
    expect(content).toContain("FadeIn");
  });

  it("installs registry dependencies in order", async () => {
    await addCommand(["lower-third"], {
      cwd: tempDir,
      registryUrl: registryDir,
    });

    expect(
      await fs.pathExists(
        path.join(tempDir, "src/remotion/primitives/fade-in.tsx"),
      ),
    ).toBe(true);
    expect(
      await fs.pathExists(
        path.join(tempDir, "src/remotion/primitives/slide-left.tsx"),
      ),
    ).toBe(true);
    expect(
      await fs.pathExists(
        path.join(tempDir, "src/remotion/scenes/lower-third/index.tsx"),
      ),
    ).toBe(true);
  });

  it("patches Root.tsx when adding a composition", async () => {
    await addCommand(["intro"], {
      cwd: tempDir,
      registryUrl: registryDir,
    });

    const root = await fs.readFile(
      path.join(tempDir, "src/Root.tsx"),
      "utf-8",
    );
    expect(root).toContain('id="Intro"');
    expect(
      await fs.pathExists(path.join(tempDir, "src/compositions/intro/index.tsx")),
    ).toBe(true);
  });
});
