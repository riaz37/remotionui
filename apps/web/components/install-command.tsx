export function InstallCommand({ name }: { name: string }) {
  return (
    <pre className="rounded-lg bg-fd-muted p-4 text-sm">
      <code>npx remotion-ui@latest add {name}</code>
    </pre>
  );
}
