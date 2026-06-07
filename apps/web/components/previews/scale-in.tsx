"use client";

import { AbsoluteFill } from "remotion";
import { ScaleIn } from "../registry-exports";

export const ScaleInPreview: React.FC = () => (
  <ScaleIn>
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
      Scale In
    </AbsoluteFill>
  </ScaleIn>
);
