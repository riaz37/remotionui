import { AbsoluteFill, useVideoConfig } from "remotion";
import { FadeIn } from "@/remotion/primitives/fade-in";
import { SlideLeft } from "@/remotion/primitives/slide-left";
import { StaggerChildren } from "@/remotion/primitives/stagger-children";
import { getSafeAreaPadding, scaleFont } from "@/remotion/lib/layout";
import { STAGGER } from "@/remotion/lib/motion-tokens";

export type FeatureListProps = {
  title?: string;
  items: string[];
  accentColor?: string;
  backgroundColor?: string;
};

export const FeatureList: React.FC<FeatureListProps> = ({
  title = "Features",
  items,
  accentColor = "#3b82f6",
  backgroundColor = "#0f172a",
}) => {
  const { width, height } = useVideoConfig();
  const safeArea = getSafeAreaPadding({ width, height });

  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        ...safeArea,
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          color: "white",
          fontSize: scaleFont(64, width),
          fontFamily: "system-ui, sans-serif",
          fontWeight: 700,
          marginBottom: 32,
          lineHeight: 1.1,
        }}
      >
        {title}
      </h2>
      <StaggerChildren staggerInFrames={STAGGER.normal}>
        {items.map((item) => (
          <SlideLeft key={item} durationInFrames={20}>
            <FadeIn durationInFrames={15}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: accentColor,
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    color: "#e2e8f0",
                    fontSize: scaleFont(44, width),
                    fontFamily: "system-ui, sans-serif",
                    lineHeight: 1.3,
                  }}
                >
                  {item}
                </span>
              </div>
            </FadeIn>
          </SlideLeft>
        ))}
      </StaggerChildren>
    </AbsoluteFill>
  );
};
