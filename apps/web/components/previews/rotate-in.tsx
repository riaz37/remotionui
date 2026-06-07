"use client";

import { AbsoluteFill } from "remotion";
import { RotateIn } from "../registry-exports";

export const RotateInPreview: React.FC = () => (
  <RotateIn durationInFrames={30} degrees={-15}>
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
      Rotate In
    </AbsoluteFill>
  </RotateIn>
);
