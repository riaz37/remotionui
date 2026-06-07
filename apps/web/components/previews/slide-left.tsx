"use client";

import { AbsoluteFill } from "remotion";
import { SlideLeft } from "../registry-exports";

export const SlideLeftPreview: React.FC = () => (
  <SlideLeft>
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
      Slide Left
    </AbsoluteFill>
  </SlideLeft>
);
