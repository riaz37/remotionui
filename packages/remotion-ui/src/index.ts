import { Command } from "commander";
import { addCommand } from "./commands/add.js";
import { initCommand } from "./commands/init.js";
import { searchCommand } from "./commands/search.js";
import { viewCommand } from "./commands/view.js";

const program = new Command();

program
  .name("remotion-ui")
  .description("Add Remotion video components to your project")
  .version("0.1.0");

program
  .command("init")
  .description("Initialize a new Remotion project with RemotionUI")
  .argument("[project-name]", "project directory name", "my-video")
  .option("-y, --yes", "Skip confirmation prompts")
  .action(async (projectName: string, options: { yes?: boolean }) => {
    try {
      await initCommand(projectName, { yes: options.yes });
    } catch (error) {
      console.error(
        error instanceof Error ? error.message : "Failed to initialize project",
      );
      process.exit(1);
    }
  });

program
  .command("add")
  .description("Add a component to your project")
  .argument("[components...]", "component names to add")
  .option(
    "-r, --registry-url <url>",
    "Registry base URL or local path to public/r/",
  )
  .option("--preset <preset>", "Registry preset", "default")
  .option("-y, --yes", "Skip confirmation prompts")
  .action(async (components: string[], options) => {
    try {
      await addCommand(components, {
        registryUrl: options.registryUrl,
        preset: options.preset,
        yes: options.yes,
      });
    } catch (error) {
      console.error(
        error instanceof Error ? error.message : "Failed to add components",
      );
      process.exit(1);
    }
  });

program
  .command("search")
  .description("Search the component registry")
  .option("-q, --query <query>", "search query")
  .option(
    "-r, --registry-url <url>",
    "Registry base URL or local path to public/r/",
  )
  .action(async (options: { query?: string; registryUrl?: string }) => {
    try {
      await searchCommand({
        query: options.query,
        registryUrl: options.registryUrl,
      });
    } catch (error) {
      console.error(
        error instanceof Error ? error.message : "Search failed",
      );
      process.exit(1);
    }
  });

program
  .command("view")
  .description("View registry item details")
  .argument("<name>", "component name")
  .option(
    "-r, --registry-url <url>",
    "Registry base URL or local path to public/r/",
  )
  .option("--preset <preset>", "Registry preset", "default")
  .action(async (name: string, options) => {
    try {
      await viewCommand(name, {
        registryUrl: options.registryUrl,
        preset: options.preset,
      });
    } catch (error) {
      console.error(
        error instanceof Error ? error.message : "View failed",
      );
      process.exit(1);
    }
  });

program
  .command("build")
  .description("Build a custom registry")
  .argument("[registry]", "path to registry.json")
  .action((registry?: string) => {
    console.log("build:", registry ?? "registry.json");
    console.log("build: coming soon");
  });

program.parse();
