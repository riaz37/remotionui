"use client";

import { AbsoluteFill } from "remotion";
import { SlideUp } from "../registry-exports";

export const SlideUpPreview: React.FC = () => (
  <SlideUp>
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
      Slide Up
    </AbsoluteFill>
  </SlideUp>
);
