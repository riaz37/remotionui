import type * as PageTree from "fumadocs-core/page-tree";
import { source } from "./source";

export type ComponentLink = {
  name: string;
  slug: string;
  url: string;
  description?: string;
};

export type ComponentSection = {
  title: string;
  basePath: string;
  items: ComponentLink[];
};

function isFolder(node: PageTree.Node): node is PageTree.Folder {
  return node.type === "folder";
}

function folderChildren(folder: PageTree.Folder): ComponentLink[] {
  return folder.children
    .filter((node): node is PageTree.Item => node.type === "page")
    .map((page) => ({
      name: typeof page.name === "string" ? page.name : String(page.name),
      slug: page.url.split("/").pop() ?? page.url,
      url: page.url,
      description:
        typeof page.description === "string" ? page.description : undefined,
    }));
}

const sectionFolders = ["primitives", "scenes", "compositions"] as const;

export function getComponentSections(): ComponentSection[] {
  const sections: ComponentSection[] = [];

  for (const child of source.pageTree.children) {
    if (!isFolder(child)) continue;
    const folderLabel =
      typeof child.name === "string" ? child.name : String(child.index ?? "");
    const folderName = folderLabel.toLowerCase();
    if (!sectionFolders.includes(folderName as (typeof sectionFolders)[number])) {
      continue;
    }

    sections.push({
      title: folderLabel,
      basePath: `/docs/${folderName}`,
      items: folderChildren(child),
    });
  }

  return sections;
}
