"use client";

import { ProgressBar } from "../registry-exports";

export const ProgressBarPreview: React.FC = () => (
  <ProgressBar
    progress={1}
    durationInFrames={60}
    label="Rendering frames…"
  />
);
