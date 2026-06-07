import Link from "next/link";

const primitives = [
  { name: "Fade In", slug: "fade-in" },
  { name: "Fade Out", slug: "fade-out" },
  { name: "Slide Up", slug: "slide-up" },
  { name: "Slide Left", slug: "slide-left" },
  { name: "Scale In", slug: "scale-in" },
  { name: "Typewriter", slug: "typewriter" },
  { name: "Counter", slug: "counter" },
  { name: "Blur In", slug: "blur-in" },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-16">
      <h1 className="text-4xl font-bold tracking-tight">RemotionUI</h1>
      <p className="mt-3 text-lg text-fd-muted-foreground">
        The shadcn/ui of Remotion — copy-paste video components you own.
      </p>

      <pre className="mt-8 rounded-lg bg-fd-muted p-4 text-sm">
        <code>npx remotion-ui@latest init my-video</code>
      </pre>

      <div className="mt-12">
        <h2 className="text-xl font-semibold">Primitives</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {primitives.map((item) => (
            <Link
              key={item.slug}
              href={`/docs/primitives/${item.slug}`}
              className="rounded-lg border border-fd-border px-4 py-3 transition-colors hover:bg-fd-muted"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <Link
          href="/docs"
          className="rounded-lg bg-fd-primary px-4 py-2 text-fd-primary-foreground"
        >
          Documentation
        </Link>
        <Link
          href="/docs/installation"
          className="rounded-lg border border-fd-border px-4 py-2"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
