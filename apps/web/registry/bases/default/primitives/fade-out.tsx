import type { ReactNode } from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export type FadeOutProps = {
  children: ReactNode;
  durationInFrames?: number;
  delayInFrames?: number;
};

export const FadeOut: React.FC<FadeOutProps> = ({
  children,
  durationInFrames = 30,
  delayInFrames = 0,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [delayInFrames, delayInFrames + durationInFrames],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill style={{ opacity }}>
      {children}
    </AbsoluteFill>
  );
};
