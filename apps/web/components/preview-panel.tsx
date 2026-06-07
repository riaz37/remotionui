import type { ReactNode } from "react";

export function PreviewPanel({
  title = "Preview",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-sm">
      <div className="flex items-center gap-2 border-b border-fd-border px-4 py-2.5">
        <span className="size-2 rounded-full bg-fd-primary" aria-hidden />
        <span className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
          {title}
        </span>
      </div>
      <div className="aspect-video w-full bg-[oklch(0.12_0.015_265)]">
        {children}
      </div>
    </div>
  );
}
