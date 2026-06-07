import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export type CounterProps = {
  from?: number;
  to: number;
  durationInFrames?: number;
  delayInFrames?: number;
  suffix?: string;
  style?: React.CSSProperties;
};

export const Counter: React.FC<CounterProps> = ({
  from = 0,
  to,
  durationInFrames = 60,
  delayInFrames = 0,
  suffix = "",
  style,
}) => {
  const frame = useCurrentFrame();

  const value = Math.floor(
    interpolate(
      frame,
      [delayInFrames, delayInFrames + durationInFrames],
      [from, to],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      },
    ),
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, sans-serif",
        fontSize: 72,
        fontWeight: 700,
        color: "white",
        ...style,
      }}
    >
      {value}
      {suffix}
    </AbsoluteFill>
  );
};
