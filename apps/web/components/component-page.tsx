import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import { getComponentReference } from "@/lib/component-reference";
import { InstallCommand } from "./install-command";
import { PreviewPanel } from "./preview-panel";
import { PropsTable } from "./props-table";
import { RemotionPreview } from "./remotion-preview";

const categoryLabels = {
  primitive: "Primitive",
  scene: "Scene",
  composition: "Composition",
  utility: "Utility",
} as const;

type ComponentPageProps = {
  name: string;
  preview?: ComponentType<Record<string, unknown>>;
  durationInFrames?: number;
  inputProps?: Record<string, unknown>;
  children?: ReactNode;
};

export function ComponentPage({
  name,
  preview,
  durationInFrames = 90,
  inputProps,
  children,
}: ComponentPageProps) {
  const reference = getComponentReference(name);

  return (
    <>
      {reference ? (
        <div className="not-prose mb-4">
          <span className="inline-flex items-center rounded-full border border-fd-border bg-fd-muted px-3 py-1 text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
            {categoryLabels[reference.category]}
          </span>
        </div>
      ) : null}

      {preview ? (
        <div className="not-prose mb-8 w-full max-w-2xl">
          <PreviewPanel>
            <RemotionPreview
              component={preview}
              durationInFrames={durationInFrames}
              inputProps={inputProps}
            />
          </PreviewPanel>
        </div>
      ) : null}

      <InstallCommand name={name} />

      {children ? (
        <div className="text-fd-muted-foreground">{children}</div>
      ) : null}

      {reference?.note ? (
        <blockquote className="my-6 border-l-2 border-fd-primary pl-4 text-sm text-fd-muted-foreground">
          {reference.note}
        </blockquote>
      ) : null}

      {reference ? (
        <>
          <h2 className="mt-10 scroll-m-20 text-xl font-semibold tracking-tight">
            Usage
          </h2>
          <pre className="overflow-x-auto rounded-xl border border-fd-border bg-fd-muted/40 p-4 text-sm">
            <code className="font-mono leading-relaxed">{reference.usage}</code>
          </pre>

          <h2 className="mt-10 scroll-m-20 text-xl font-semibold tracking-tight">
            API Reference
          </h2>
          <PropsTable props={reference.props} />

          {reference.related && reference.related.length > 0 ? (
            <>
              <h2 className="mt-10 scroll-m-20 text-xl font-semibold tracking-tight">
                Related
              </h2>
              <div className="not-prose flex flex-wrap gap-2">
                {reference.related.map((slug) => (
                  <Link
                    key={slug}
                    href={`/docs/${guessCategory(slug)}/${slug}`}
                    className="rounded-lg border border-fd-border px-3 py-1.5 text-sm transition-colors hover:bg-fd-muted"
                  >
                    {slug}
                  </Link>
                ))}
              </div>
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
}

function guessCategory(slug: string): string {
  const ref = getComponentReference(slug);
  if (!ref) return "primitives";
  if (ref.category === "scene") return "scenes";
  if (ref.category === "composition") return "compositions";
  return "primitives";
}
