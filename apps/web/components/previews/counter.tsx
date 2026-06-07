"use client";

import { AbsoluteFill } from "remotion";
import { Counter } from "../registry-exports";

export const CounterPreview: React.FC = () => (
  <AbsoluteFill
    style={{
      backgroundColor: "#0f172a",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Counter from={0} to={100} suffix="%" durationInFrames={90} />
  </AbsoluteFill>
);
