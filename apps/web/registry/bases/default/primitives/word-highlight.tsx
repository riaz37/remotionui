import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { springSmooth } from "@/remotion/lib/springs";

export type WordHighlightProps = {
  text: string;
  highlightWord: string;
  durationInFrames?: number;
  delayInFrames?: number;
  color?: string;
  highlightColor?: string;
  fontSize?: number;
  fontWeight?: number;
};

const HighlightWipe: React.FC<{
  word: string;
  color: string;
  delayInFrames: number;
  durationInFrames: number;
}> = ({ word, color, delayInFrames, durationInFrames }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const highlightProgress = spring({
    fps,
    frame,
    config: springSmooth,
    delay: delayInFrames,
    durationInFrames,
  });
  const scaleX = Math.max(0, Math.min(1, highlightProgress));

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "50%",
          height: "1.05em",
          transform: `translateY(-50%) scaleX(${scaleX})`,
          transformOrigin: "left center",
          backgroundColor: color,
          borderRadius: "0.18em",
          zIndex: 0,
        }}
      />
      <span style={{ position: "relative", zIndex: 1 }}>{word}</span>
    </span>
  );
};

export const WordHighlight: React.FC<WordHighlightProps> = ({
  text,
  highlightWord,
  durationInFrames = 18,
  delayInFrames = 0,
  color = "white",
  highlightColor = "#fbbf24",
  fontSize = 48,
  fontWeight = 600,
}) => {
  const index = text.toLowerCase().indexOf(highlightWord.toLowerCase());

  if (index === -1) {
    return (
      <span
        style={{
          color,
          fontSize,
          fontWeight,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {text}
      </span>
    );
  }

  const before = text.slice(0, index);
  const word = text.slice(index, index + highlightWord.length);
  const after = text.slice(index + highlightWord.length);

  return (
    <span
      style={{
        color,
        fontSize,
        fontWeight,
        fontFamily: "system-ui, sans-serif",
        lineHeight: 1.3,
      }}
    >
      {before}
      <HighlightWipe
        word={word}
        color={highlightColor}
        delayInFrames={delayInFrames}
        durationInFrames={durationInFrames}
      />
      {after}
    </span>
  );
};
