"use client";

import { AbsoluteFill } from "remotion";
import { FadeIn, StaggerChildren } from "../registry-exports";

export const StaggerChildrenPreview: React.FC = () => (
  <AbsoluteFill
    style={{
      backgroundColor: "#0f172a",
      justifyContent: "center",
      alignItems: "center",
      gap: 16,
    }}
  >
    <StaggerChildren staggerInFrames={12}>
      {["First", "Second", "Third"].map((label) => (
        <FadeIn key={label} durationInFrames={20}>
          <div
            style={{
              color: "white",
              fontSize: 36,
              fontFamily: "system-ui, sans-serif",
              textAlign: "center",
              marginBottom: 12,
            }}
          >
            {label}
          </div>
        </FadeIn>
      ))}
    </StaggerChildren>
  </AbsoluteFill>
);
