"use client";

import { StatCard } from "../registry-exports";

export const StatCardPreview: React.FC = () => (
  <StatCard value={98} label="Satisfaction" suffix="%" />
);
