import { AbsoluteFill } from "remotion";
import { FadeIn } from "@/remotion/primitives/fade-in";
import { SlideLeft } from "@/remotion/primitives/slide-left";

export type LowerThirdProps = {
  title: string;
  subtitle?: string;
  accentColor?: string;
};

export const LowerThird: React.FC<LowerThirdProps> = ({
  title,
  subtitle,
  accentColor = "#3b82f6",
}) => {
  return (
    <AbsoluteFill>
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 80,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <SlideLeft durationInFrames={20}>
          <FadeIn durationInFrames={15}>
            <div
              style={{
                backgroundColor: accentColor,
                color: "white",
                padding: "12px 20px",
                fontSize: 32,
                fontWeight: 700,
                fontFamily: "system-ui, sans-serif",
                borderRadius: 4,
              }}
            >
              {title}
            </div>
          </FadeIn>
        </SlideLeft>
        {subtitle ? (
          <SlideLeft durationInFrames={20} delayInFrames={8}>
            <FadeIn durationInFrames={15} delayInFrames={8}>
              <div
                style={{
                  color: "white",
                  fontSize: 22,
                  fontFamily: "system-ui, sans-serif",
                  textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                }}
              >
                {subtitle}
              </div>
            </FadeIn>
          </SlideLeft>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
