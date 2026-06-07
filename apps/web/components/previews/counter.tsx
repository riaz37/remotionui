"use client";

import { Counter } from "../registry-exports";

export const CounterPreview: React.FC = () => (
  <Counter from={0} to={100} suffix="%" durationInFrames={90} />
);
