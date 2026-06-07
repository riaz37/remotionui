import fs from "fs-extra";
import path from "node:path";
import { fetchRegistryIndex } from "../registry/fetch-index.js";

export type SearchOptions = {
  query?: string;
  registryUrl?: string;
};

export async function searchCommand(
  options: SearchOptions = {},
): Promise<void> {
  const index = await fetchRegistryIndex(options.registryUrl);
  const query = options.query?.toLowerCase().trim();

  const results = index.items.filter((item) => {
    if (!query) return true;
    return (
      item.name.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query) ||
      item.type.toLowerCase().includes(query)
    );
  });

  if (results.length === 0) {
    console.log("No components found.");
    return;
  }

  for (const item of results) {
    const desc = item.description ? ` — ${item.description}` : "";
    console.log(`${item.name} (${item.type})${desc}`);
  }

  console.log(`\n${results.length} result(s)`);
}
