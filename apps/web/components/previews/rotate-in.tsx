"use client";

import { RotateIn } from "../registry-exports";
import { PreviewFrame, PreviewLabel } from "./preview-frame";

export const RotateInPreview: React.FC = () => (
  <PreviewFrame>
    <RotateIn durationInFrames={30} degrees={-15}>
      <PreviewLabel>Rotate In</PreviewLabel>
    </RotateIn>
  </PreviewFrame>
);
