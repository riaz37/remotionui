"use client";

import { SlideLeft } from "../registry-exports";
import { PreviewFrame, PreviewLabel } from "./preview-frame";

export const SlideLeftPreview: React.FC = () => (
  <PreviewFrame>
    <SlideLeft>
      <PreviewLabel>Slide Left</PreviewLabel>
    </SlideLeft>
  </PreviewFrame>
);
