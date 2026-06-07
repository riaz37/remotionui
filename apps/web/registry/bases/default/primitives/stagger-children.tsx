import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { staggerDelay } from "@/remotion/lib/timing";

export type StaggerChildrenProps = {
  children: ReactNode;
  staggerInFrames?: number;
  baseDelayInFrames?: number;
};

export const StaggerChildren: React.FC<StaggerChildrenProps> = ({
  children,
  staggerInFrames = 8,
  baseDelayInFrames = 0,
}) => {
  return (
    <>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return child;
        }

        const delayInFrames = staggerDelay(
          index,
          staggerInFrames,
          baseDelayInFrames,
        );

        const existingDelay =
          typeof child.props === "object" &&
          child.props !== null &&
          "delayInFrames" in child.props
            ? Number((child.props as { delayInFrames?: number }).delayInFrames)
            : 0;

        return cloneElement(child, {
          delayInFrames: existingDelay + delayInFrames,
        } as Record<string, unknown>);
      })}
    </>
  );
};
