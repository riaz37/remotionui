"use client";

import { Player } from "@remotion/player";
import type { ComponentType } from "react";

type RemotionPreviewProps = {
  component: ComponentType<Record<string, unknown>>;
  durationInFrames?: number;
  fps?: number;
  width?: number;
  height?: number;
  inputProps?: Record<string, unknown>;
};

export function RemotionPreview({
  component,
  durationInFrames = 90,
  fps = 30,
  width = 960,
  height = 540,
  inputProps = {},
}: RemotionPreviewProps) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-fd-border">
      <Player
        component={component}
        durationInFrames={durationInFrames}
        fps={fps}
        compositionWidth={width}
        compositionHeight={height}
        style={{ width: "100%" }}
        inputProps={inputProps}
        controls
        loop
        acknowledgeRemotionLicense
      />
    </div>
  );
}
