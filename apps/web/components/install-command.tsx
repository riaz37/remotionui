import { CopyButton } from "./copy-button";

export function InstallCommand({ name }: { name: string }) {
  const command = `npx remotion-ui@latest add ${name}`;

  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-sm">
      <div className="flex items-center justify-between border-b border-fd-border px-4 py-2.5">
        <span className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
          Install
        </span>
        <CopyButton text={command} />
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="font-mono text-fd-foreground">{command}</code>
      </pre>
    </div>
  );
}

export function InitCommand() {
  const command = "npx remotion-ui@latest init my-video";

  return (
    <div className="not-prose overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-sm">
      <div className="flex items-center justify-between border-b border-fd-border px-4 py-2.5">
        <span className="text-xs font-medium uppercase tracking-wider text-fd-muted-foreground">
          Quick start
        </span>
        <CopyButton text={command} />
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="font-mono text-fd-foreground">{command}</code>
      </pre>
    </div>
  );
}
