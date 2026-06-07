"use client";

import { AbsoluteFill } from "remotion";
import { BlurIn } from "../registry-exports";

export const BlurInPreview: React.FC = () => (
  <BlurIn>
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
      Blur In
    </AbsoluteFill>
  </BlurIn>
);
