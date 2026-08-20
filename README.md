# DevKit

Small browser tools I use often enough to keep in one place.

[Open DevKit](https://tools.aqutte.co.ke)

## Included tools

- Generate UUIDs in bulk and copy them.
- Turn text into a URL-safe slug.
- Compare two URLs by origin, path, query parameters, and hash.
- Normalise URLs before storing or comparing them.
- Format prices for a chosen locale and currency.
- Look up common Git commands without digging through a longer cheat sheet.

Everything except the Git reference runs in the browser. There are no accounts, database, or required environment variables.

## Run it locally

```bash
bun install
bun run dev
```

Open `http://localhost:3000`.

## Checks

```bash
bun run lint
bun run build
```

The app uses Next.js, React, Tailwind CSS, and Bun. `vercel.json` keeps the Vercel install and build steps on Bun as well.
