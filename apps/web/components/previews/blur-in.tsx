"use client";

import { BlurIn } from "../registry-exports";
import { PreviewFrame, PreviewLabel } from "./preview-frame";

export const BlurInPreview: React.FC = () => (
  <PreviewFrame>
    <BlurIn>
      <PreviewLabel>Blur In</PreviewLabel>
    </BlurIn>
  </PreviewFrame>
);
