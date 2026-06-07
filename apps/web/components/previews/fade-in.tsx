"use client";

import { AbsoluteFill } from "remotion";
import { FadeIn } from "../registry-exports";

export const FadeInPreview: React.FC = () => (
  <FadeIn>
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
      Fade In
    </AbsoluteFill>
  </FadeIn>
);
