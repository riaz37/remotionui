"use client";

import { FeatureList } from "../registry-exports";

export const FeatureListPreview: React.FC = () => (
  <FeatureList
    title="Built for developers"
    items={["Copy-paste components", "Registry CLI", "Live previews"]}
  />
);
