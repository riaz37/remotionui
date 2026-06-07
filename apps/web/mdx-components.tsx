import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { ComponentPage } from "@/components/component-page";
import { InitCommand, InstallCommand } from "@/components/install-command";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ComponentPage,
    InstallCommand,
    InitCommand,
    ...components,
  };
}
