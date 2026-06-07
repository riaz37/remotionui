"use client";

import { FadeOut } from "../registry-exports";
import { PreviewFrame, PreviewLabel } from "./preview-frame";

export const FadeOutPreview: React.FC = () => (
  <PreviewFrame>
    <FadeOut>
      <PreviewLabel>Fade Out</PreviewLabel>
    </FadeOut>
  </PreviewFrame>
);
