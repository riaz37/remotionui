import type { ReactNode } from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export type BlurInProps = {
  children: ReactNode;
  durationInFrames?: number;
  delayInFrames?: number;
  maxBlur?: number;
};

export const BlurIn: React.FC<BlurInProps> = ({
  children,
  durationInFrames = 30,
  delayInFrames = 0,
  maxBlur = 10,
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
        filter: `blur(${(1 - progress) * maxBlur}px)`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
