"use client";

import { Player, type PlayerRef } from "@remotion/player";
import type { ComponentType } from "react";
import { useEffect, useRef } from "react";

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
  const playerRef = useRef<PlayerRef>(null);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    // Browsers block unmuted autoplay — start muted, then play explicitly.
    player.setVolume(0);
    const id = window.requestAnimationFrame(() => {
      player.play();
    });

    return () => window.cancelAnimationFrame(id);
  }, [component, durationInFrames]);

  return (
    <div className="h-full w-full overflow-hidden">
      <Player
        ref={playerRef}
        component={component}
        durationInFrames={durationInFrames}
        fps={fps}
        compositionWidth={width}
        compositionHeight={height}
        style={{ width: "100%", height: "100%" }}
        inputProps={inputProps}
        controls
        loop
        autoPlay
        clickToPlay={false}
        initiallyMuted
        moveToBeginningWhenEnded
        showPosterWhenUnplayed={false}
        acknowledgeRemotionLicense
      />
    </div>
  );
}
