"use client";

import { ScaleIn } from "../registry-exports";
import { PreviewFrame, PreviewLabel } from "./preview-frame";

export const ScaleInPreview: React.FC = () => (
  <PreviewFrame>
    <ScaleIn>
      <PreviewLabel>Scale In</PreviewLabel>
    </ScaleIn>
  </PreviewFrame>
);
