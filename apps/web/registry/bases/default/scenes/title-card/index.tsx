import { AbsoluteFill } from "remotion";
import { FadeIn } from "@/remotion/primitives/fade-in";
import { ScaleIn } from "@/remotion/primitives/scale-in";

export type TitleCardProps = {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
};

export const TitleCard: React.FC<TitleCardProps> = ({
  title,
  subtitle,
  backgroundColor = "#0f172a",
}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScaleIn durationInFrames={25}>
        <FadeIn durationInFrames={20}>
          <div style={{ textAlign: "center", padding: 40 }}>
            <h1
              style={{
                color: "white",
                fontSize: 72,
                fontWeight: 800,
                fontFamily: "system-ui, sans-serif",
                margin: 0,
              }}
            >
              {title}
            </h1>
            {subtitle ? (
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: 28,
                  fontFamily: "system-ui, sans-serif",
                  marginTop: 16,
                }}
              >
                {subtitle}
              </p>
            ) : null}
          </div>
        </FadeIn>
      </ScaleIn>
    </AbsoluteFill>
  );
};
