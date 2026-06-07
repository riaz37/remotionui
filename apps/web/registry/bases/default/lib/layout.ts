/** Video-layout safe area — 80px sides / 100px vertical at 1080p reference */
const REFERENCE_WIDTH = 1080;
const REFERENCE_HEIGHT = 1080;
const HORIZONTAL_SAFE = 80;
const VERTICAL_SAFE = 100;

export type SafePaddingOptions = {
  width: number;
  height: number;
  ratio?: number;
};

export type SafeAreaPadding = {
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
};

/** Per-edge safe area from video-layout guidance */
export function getSafeAreaPadding({
  width,
  height,
}: {
  width: number;
  height: number;
}): SafeAreaPadding {
  const horizontal = Math.round((HORIZONTAL_SAFE / REFERENCE_WIDTH) * width);
  const vertical = Math.round((VERTICAL_SAFE / REFERENCE_HEIGHT) * height);

  return {
    paddingLeft: horizontal,
    paddingRight: horizontal,
    paddingTop: vertical,
    paddingBottom: vertical,
  };
}

/** Uniform padding — max of horizontal/vertical safe insets */
export function getSafePadding({
  width,
  height,
  ratio,
}: SafePaddingOptions): number {
  if (ratio !== undefined) {
    return Math.round(Math.min(width, height) * ratio);
  }

  const { paddingLeft, paddingTop } = getSafeAreaPadding({ width, height });
  return Math.max(paddingLeft, paddingTop);
}

/**
 * Scale a font size defined at 1080p width to any composition width.
 * Skill minimums at 1080: headline 84, supporting 44, label 32.
 */
export function scaleFont(
  sizeAt1080: number,
  width: number,
  referenceWidth = REFERENCE_WIDTH,
): number {
  return Math.round(sizeAt1080 * (width / referenceWidth));
}
