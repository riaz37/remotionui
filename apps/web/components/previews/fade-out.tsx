"use client";

import { AbsoluteFill } from "remotion";
import { FadeOut } from "../registry-exports";

export const FadeOutPreview: React.FC = () => (
  <FadeOut>
    <AbsoluteFill
      style={{
        backgroundColor: "#0f172a",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: 48,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      Fade Out
    </AbsoluteFill>
  </FadeOut>
);
