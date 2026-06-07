import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-fd-border bg-fd-card/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-sm font-semibold">
            {siteConfig.name}
          </p>
          <p className="mt-1 max-w-sm text-sm text-fd-muted-foreground">
            Copy-paste Remotion components. Own the source.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-fd-muted-foreground">
          <Link href="/docs" className="hover:text-fd-foreground">
            Docs
          </Link>
          <Link href="/docs/cli" className="hover:text-fd-foreground">
            CLI
          </Link>
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-fd-foreground"
          >
            GitHub
          </a>
          <a
            href={siteConfig.npmUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-fd-foreground"
          >
            npm
          </a>
        </div>
      </div>
    </footer>
  );
}
