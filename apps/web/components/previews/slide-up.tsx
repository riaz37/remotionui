"use client";

import { SlideUp } from "../registry-exports";
import { PreviewFrame, PreviewLabel } from "./preview-frame";

export const SlideUpPreview: React.FC = () => (
  <PreviewFrame>
    <SlideUp>
      <PreviewLabel>Slide Up</PreviewLabel>
    </SlideUp>
  </PreviewFrame>
);
