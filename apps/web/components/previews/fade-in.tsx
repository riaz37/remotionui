"use client";

import { FadeIn } from "../registry-exports";
import { PreviewFrame, PreviewLabel } from "./preview-frame";

export const FadeInPreview: React.FC = () => (
  <PreviewFrame>
    <FadeIn>
      <PreviewLabel>Fade In</PreviewLabel>
    </FadeIn>
  </PreviewFrame>
);
