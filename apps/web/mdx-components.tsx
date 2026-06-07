import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { InstallCommand } from "@/components/install-command";
import { RemotionPreview } from "@/components/remotion-preview";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    InstallCommand,
    RemotionPreview,
    ...components,
  };
}
