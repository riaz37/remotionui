import type { ReactNode } from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { enterProgress } from "@/remotion/lib/timing";

export type RotateInProps = {
  children: ReactNode;
  durationInFrames?: number;
  delayInFrames?: number;
  degrees?: number;
};

export const RotateIn: React.FC<RotateInProps> = ({
  children,
  durationInFrames = 30,
  delayInFrames = 0,
  degrees = -12,
}) => {
  const frame = useCurrentFrame();

  const progress = enterProgress(frame, delayInFrames, durationInFrames);
  const rotation = interpolate(progress, [0, 1], [degrees, 0]);

  return (
    <AbsoluteFill
      style={{
        opacity: progress,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
