import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { enterProgress } from "@/remotion/lib/timing";

export type ProgressBarProps = {
  progress?: number;
  durationInFrames?: number;
  delayInFrames?: number;
  color?: string;
  trackColor?: string;
  height?: number;
  label?: string;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress = 1,
  durationInFrames = 60,
  delayInFrames = 0,
  color = "#3b82f6",
  trackColor = "#1e293b",
  height = 12,
  label,
}) => {
  const frame = useCurrentFrame();

  const eased = enterProgress(frame, delayInFrames, durationInFrames);
  const value = interpolate(eased, [0, 1], [0, progress]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
      }}
    >
      <div style={{ width: "80%" }}>
        {label ? (
          <p
            style={{
              color: "#94a3b8",
              fontSize: 14,
              fontFamily: "system-ui, sans-serif",
              marginBottom: 8,
            }}
          >
            {label}
          </p>
        ) : null}
        <div
          style={{
            width: "100%",
            height,
            backgroundColor: trackColor,
            borderRadius: height,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${value * 100}%`,
              height: "100%",
              backgroundColor: color,
              borderRadius: height,
            }}
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};
