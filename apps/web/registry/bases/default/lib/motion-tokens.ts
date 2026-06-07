import { Easing } from "remotion";
import { secondsToFrames } from "./timing";

/** Named frame durations — pair with `springs.ts` or `enterProgress()` */
export const DURATION = {
  fast: secondsToFrames(0.4),
  normal: secondsToFrames(0.8),
  slow: secondsToFrames(1.2),
} as const;

export const DELAY = {
  none: 0,
  short: secondsToFrames(0.15),
  medium: secondsToFrames(0.3),
} as const;

export const STAGGER = {
  tight: 4,
  normal: 8,
  relaxed: 12,
} as const;

/** Copy-paste Bézier curves from Remotion timing guidance */
export const EASING = {
  /** Strong ease-out — entrances, decelerates into place */
  enter: Easing.bezier(0.16, 1, 0.3, 1),
  /** Balanced ease-in-out — editorial holds */
  editorial: Easing.bezier(0.45, 0, 0.55, 1),
  /** Slight overshoot — emphasis pops */
  pop: Easing.bezier(0.34, 1.56, 0.64, 1),
} as const;
