import type { ReactNode } from "react";
import { AbsoluteFill } from "remotion";

export const previewTextStyle: React.CSSProperties = {
  color: "white",
  fontSize: 48,
  fontFamily: "system-ui, sans-serif",
  textAlign: "center",
};

/** Full-frame scene root — primitives wrap only the label, not AbsoluteFill. */
export const PreviewFrame: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <AbsoluteFill
    style={{
      backgroundColor: "#0f172a",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </AbsoluteFill>
);

export const PreviewLabel: React.FC<{ children: ReactNode }> = ({
  children,
}) => <div style={previewTextStyle}>{children}</div>;
