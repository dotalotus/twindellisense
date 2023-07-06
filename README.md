# Twindellisense

This is a small plugin for **[Fresh](https://fresh.deno.dev/)** that adds a
compatibility layer between VSCode's
**[Tailwind Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)**
plugin and **[Twind](https://twind.dev/)**.

## Usage

To add this plugin to your **Fresh** project, just add the following line into
your `dev.ts` file.

```diff
#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";

+ import "https://deno.land/x/twindellisense@v1.0.0/load.ts";

await dev(import.meta.url, "./main.ts");
```

This will automatically generate a `tailwind.config.js` file based on your
`twind.config.js` file, providing you with autcomplete for not only the
**Tailwind** classes available, but any custom classes you define inside of your
**Twind** config.
