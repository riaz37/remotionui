import { siteConfig } from "@/lib/site-config";

export function SidebarFooter() {
  return (
    <div className="space-y-3 px-2 py-4 text-xs text-fd-muted-foreground">
      <p className="font-medium text-fd-foreground">RemotionUI</p>
      <p>Copy-paste video components for Remotion.</p>
      <a
        href={siteConfig.npmUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center rounded-md border border-fd-border px-2 py-1 transition-colors hover:bg-fd-muted"
      >
        npm · remotion-ui
      </a>
    </div>
  );
}
