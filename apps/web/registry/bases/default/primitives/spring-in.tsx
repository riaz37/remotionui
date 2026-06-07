import type { ReactNode } from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { MotionWrapper } from "@/remotion/lib/motion-wrapper";
import { springSnappy } from "@/remotion/lib/springs";

export type SpringInProps = {
  children: ReactNode;
  durationInFrames?: number;
  delayInFrames?: number;
};

export const SpringIn: React.FC<SpringInProps> = ({
  children,
  durationInFrames = 30,
  delayInFrames = 0,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame,
    fps,
    config: springSnappy,
    delay: delayInFrames,
    durationInFrames,
  });

  return (
    <MotionWrapper
      style={{
        opacity: progress,
        transform: `scale(${progress})`,
        transformOrigin: "center center",
      }}
    >
      {children}
    </MotionWrapper>
  );
};
