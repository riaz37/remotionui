import fs from "fs-extra";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { getTemplateDir } from "./get-template-dir.js";

describe("getTemplateDir", () => {
  it("resolves the packaged template from dist/", () => {
    const distDir = path.resolve(
      path.dirname(fileURLToPath(import.meta.url)),
      "../../dist",
    );
    const bundledEntry = path.join(distDir, "index.js");

    expect(fs.existsSync(bundledEntry)).toBe(true);

    const templateDir = getTemplateDir("remotion-app");
    expect(fs.existsSync(path.join(templateDir, "package.json"))).toBe(true);
    expect(fs.existsSync(path.join(templateDir, "remotion-ui.json"))).toBe(true);
  });
});
