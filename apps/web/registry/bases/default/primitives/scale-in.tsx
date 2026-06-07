import type { ReactNode } from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export type ScaleInProps = {
  children: ReactNode;
  durationInFrames?: number;
  delayInFrames?: number;
};

export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  durationInFrames = 30,
  delayInFrames = 0,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [delayInFrames, delayInFrames + durationInFrames],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill
      style={{
        opacity: progress,
        transform: `scale(${0.8 + progress * 0.2})`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
