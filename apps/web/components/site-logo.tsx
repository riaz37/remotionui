/** Logo mark only — parent nav (Fumadocs HomeLayout/DocsLayout) wraps this in its own link. */
export function SiteLogo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 font-semibold tracking-tight ${className}`}
    >
      <span
        aria-hidden
        className="flex size-8 items-center justify-center rounded-md bg-fd-primary text-sm font-bold text-fd-primary-foreground shadow-sm"
      >
        R
      </span>
      <span className="font-[family-name:var(--font-display)] text-[1.05rem]">
        RemotionUI
      </span>
    </span>
  );
}
