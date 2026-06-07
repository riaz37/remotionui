# remotion-ui

CLI for adding Remotion video components to your project — the [shadcn/ui](https://ui.shadcn.com) of Remotion.

## Quick start

```bash
npx remotion-ui@latest init my-video
cd my-video
npx remotion-ui@latest add fade-in
npx remotion-ui@latest add intro
```

Components are copied into your project as source files. You own the code.

## Commands

| Command | Description |
|---------|-------------|
| `remotion-ui init [name]` | Scaffold a new Remotion project |
| `remotion-ui add <name>` | Add component(s) from the registry |
| `remotion-ui search -q <query>` | Search the registry |
| `remotion-ui view <name>` | View registry item metadata |

## Configuration

Create `remotion-ui.json` in your project root (included by `init`):

```json
{
  "preset": "default",
  "aliases": {
    "primitives": "@/remotion/primitives",
    "scenes": "@/remotion/scenes",
    "compositions": "@/compositions",
    "lib": "@/remotion/lib"
  }
}
```

## Registry

Default registry: `https://remotionui.com/r`

Override with `--registry-url` or `REMOTION_UI_REGISTRY_URL`.

## Programmatic API

```ts
import { fetchRegistryItem } from "remotion-ui/registry";
import { remotionUiConfigSchema } from "remotion-ui/schema";
```

## Docs

https://remotionui.com/docs
