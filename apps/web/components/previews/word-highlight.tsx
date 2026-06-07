"use client";

import { AbsoluteFill } from "remotion";
import { WordHighlight } from "../registry-exports";

export const WordHighlightPreview: React.FC = () => (
  <AbsoluteFill
    style={{
      backgroundColor: "#0f172a",
      justifyContent: "center",
      alignItems: "center",
      padding: 40,
    }}
  >
    <WordHighlight
      text="Motion should feel effortless"
      highlightWord="effortless"
      durationInFrames={45}
    />
  </AbsoluteFill>
);
