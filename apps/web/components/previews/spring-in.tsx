"use client";

import { SpringIn } from "../registry-exports";
import { PreviewFrame, PreviewLabel } from "./preview-frame";

export const SpringInPreview: React.FC = () => (
  <PreviewFrame>
    <SpringIn durationInFrames={40}>
      <PreviewLabel>Spring In</PreviewLabel>
    </SpringIn>
  </PreviewFrame>
);
