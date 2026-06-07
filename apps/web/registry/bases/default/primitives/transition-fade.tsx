import { fade } from "@remotion/transitions/fade";
import { linearTiming, springTiming } from "@remotion/transitions";
import { springSmooth } from "@/remotion/lib/springs";

export type TransitionFadeConfig = {
  durationInFrames?: number;
  /** `spring` uses organic motion; `linear` is constant speed */
  variant?: "linear" | "spring";
};

/** Fade transition config for use with TransitionSeries.Transition */
export function transitionFade({
  durationInFrames = 15,
  variant = "linear",
}: TransitionFadeConfig = {}) {
  return {
    presentation: fade(),
    timing:
      variant === "spring"
        ? springTiming({ config: springSmooth, durationInFrames })
        : linearTiming({ durationInFrames }),
  };
}

/** Total overlap frames consumed by a transition (for composition duration math) */
export function getTransitionFadeDuration(
  config: TransitionFadeConfig = {},
  fps: number,
): number {
  return transitionFade(config).timing.getDurationInFrames({ fps });
}
