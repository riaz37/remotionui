import { AbsoluteFill, useCurrentFrame } from "remotion";

export type TypewriterProps = {
  text: string;
  durationInFrames?: number;
  delayInFrames?: number;
  className?: string;
  style?: React.CSSProperties;
};

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  durationInFrames = 60,
  delayInFrames = 0,
  className,
  style,
}) => {
  const frame = useCurrentFrame();
  const effectiveFrame = Math.max(0, frame - delayInFrames);
  const charsToShow = Math.min(
    text.length,
    Math.floor((effectiveFrame / durationInFrames) * text.length),
  );

  return (
    <AbsoluteFill
      className={className}
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, sans-serif",
        fontSize: 48,
        color: "white",
        ...style,
      }}
    >
      {text.slice(0, charsToShow)}
    </AbsoluteFill>
  );
};
