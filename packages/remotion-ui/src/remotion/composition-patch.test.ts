import fs from "fs-extra";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { patchRootTsx } from "./composition-patch.js";

describe("patchRootTsx", () => {
  let tempDir: string;
  let rootPath: string;

  beforeEach(async () => {
    tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "remotion-ui-"));
    rootPath = path.join(tempDir, "Root.tsx");
    await fs.writeFile(
      rootPath,
      `import { Composition } from "remotion";

export const RemotionRoot: React.FC = () => {
  return (
    <>
    </>
  );
};
`,
      "utf-8",
    );
  });

  afterEach(async () => {
    await fs.remove(tempDir);
  });

  it("registers a new composition", async () => {
    await patchRootTsx(rootPath, {
      id: "Intro",
      component: "Intro",
      durationInFrames: 150,
      fps: 30,
      width: 1920,
      height: 1080,
      importPath: "@/compositions/intro/index",
    });

    const content = await fs.readFile(rootPath, "utf-8");
    expect(content).toContain('import { Intro } from "@/compositions/intro/index"');
    expect(content).toContain('id="Intro"');
    expect(content).toContain("durationInFrames={150}");
  });

  it("skips duplicate composition ids", async () => {
    await patchRootTsx(rootPath, {
      id: "Intro",
      component: "Intro",
      durationInFrames: 150,
      fps: 30,
      width: 1920,
      height: 1080,
    });
    const first = await fs.readFile(rootPath, "utf-8");

    await patchRootTsx(rootPath, {
      id: "Intro",
      component: "Intro",
      durationInFrames: 150,
      fps: 30,
      width: 1920,
      height: 1080,
    });
    const second = await fs.readFile(rootPath, "utf-8");

    expect(second).toBe(first);
  });
});
