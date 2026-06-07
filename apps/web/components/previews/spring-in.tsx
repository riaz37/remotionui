"use client";

import { AbsoluteFill } from "remotion";
import { SpringIn } from "../registry-exports";

export const SpringInPreview: React.FC = () => (
  <SpringIn durationInFrames={40}>
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
      Spring In
    </AbsoluteFill>
  </SpringIn>
);
