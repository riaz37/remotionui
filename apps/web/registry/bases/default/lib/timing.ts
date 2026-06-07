export const DEFAULT_FPS = 30;

export function secondsToFrames(seconds: number, fps = DEFAULT_FPS): number {
  return Math.round(seconds * fps);
}

export function framesToSeconds(frames: number, fps = DEFAULT_FPS): number {
  return frames / fps;
}

export function staggerDelay(
  index: number,
  staggerInFrames: number,
  baseDelayInFrames = 0,
): number {
  return baseDelayInFrames + index * staggerInFrames;
}
