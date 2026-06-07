export type RegistryFile = {
  path: string;
  type: string;
  target?: string;
  content?: string;
};

export type CompositionMetaJson = {
  id: string;
  component: string;
  durationInFrames: number;
  fps: number;
  width: number;
  height: number;
  importPath?: string;
};

export type RegistryItemJson = {
  name: string;
  type: string;
  description?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  composition?: CompositionMetaJson;
  files: RegistryFile[];
};

export {
  DEFAULT_REGISTRY_URL,
  fetchRegistryItem,
} from "./fetch-item.js";
export type { FetchRegistryOptions } from "./fetch-item.js";
