import { AbsoluteFill, useVideoConfig } from "remotion";
import { FadeIn } from "@/remotion/primitives/fade-in";
import { ScaleIn } from "@/remotion/primitives/scale-in";
import { getSafeAreaPadding, scaleFont } from "@/remotion/lib/layout";

export type EndCardProps = {
  title: string;
  cta?: string;
  url?: string;
  backgroundColor?: string;
};

export const EndCard: React.FC<EndCardProps> = ({
  title,
  cta = "Learn more",
  url,
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
        alignItems: "center",
      }}
    >
      <ScaleIn durationInFrames={25}>
        <FadeIn durationInFrames={20}>
          <div style={{ textAlign: "center" }}>
            <h1
              style={{
                color: "white",
                fontSize: scaleFont(84, width),
                fontFamily: "system-ui, sans-serif",
                fontWeight: 700,
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                color: "#3b82f6",
                fontSize: scaleFont(44, width),
                fontFamily: "system-ui, sans-serif",
                marginTop: 20,
              }}
            >
              {cta}
            </p>
            {url ? (
              <p
                style={{
                  color: "#64748b",
                  fontSize: scaleFont(32, width),
                  fontFamily: "system-ui, sans-serif",
                  marginTop: 12,
                }}
              >
                {url}
              </p>
            ) : null}
          </div>
        </FadeIn>
      </ScaleIn>
    </AbsoluteFill>
  );
};
