import { AbsoluteFill, useVideoConfig } from "remotion";
import { Counter } from "@/remotion/primitives/counter";
import { SpringIn } from "@/remotion/primitives/spring-in";
import { scaleFont } from "@/remotion/lib/layout";

export type StatCardProps = {
  value: number;
  label: string;
  suffix?: string;
  backgroundColor?: string;
};

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  suffix = "",
  backgroundColor = "#0f172a",
}) => {
  const { width } = useVideoConfig();

  return (
    <AbsoluteFill
      style={{
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SpringIn durationInFrames={35}>
        <div style={{ textAlign: "center" }}>
          <Counter
            from={0}
            to={value}
            suffix={suffix}
            durationInFrames={45}
          />
          <p
            style={{
              color: "#94a3b8",
              fontSize: scaleFont(28, width),
              fontFamily: "system-ui, sans-serif",
              marginTop: 16,
            }}
          >
            {label}
          </p>
        </div>
      </SpringIn>
    </AbsoluteFill>
  );
};
