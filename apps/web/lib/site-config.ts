export const siteConfig = {
  name: "RemotionUI",
  tagline: "The shadcn/ui of Remotion — copy-paste video components you own.",
  description:
    "Production-ready Remotion components distributed as source. Install via CLI, own the code.",
  githubUrl: "https://github.com/riaz37/remotionui",
  npmUrl: "https://www.npmjs.com/package/remotion-ui",
  docsUrl: "/docs",
} as const;

export const navLinks = [
  { text: "Documentation", url: "/docs", active: "nested-url" as const },
  { text: "Components", url: "/docs/primitives/fade-in", active: "nested-url" as const },
  { text: "CLI", url: "/docs/cli", active: "url" as const },
] as const;
