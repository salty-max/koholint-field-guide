# Koholint Field Guide

A responsive companion for *The Legend of Zelda: Link’s Awakening* on Nintendo Switch (2019).

## Run it locally

The app is a React 19 + TypeScript single-page app built with Vite. You need Node 20+ and pnpm.

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # typecheck + production build into dist/
pnpm preview    # serve the production build
pnpm test       # Vitest unit and component tests
pnpm lint
pnpm icons      # regenerate public/icons from the compass motif
```

Routes are real paths (`/guide/3`, `/checklist/heart`, `/dashboard/deathless`, `/sources`), so any static host needs a fallback to `index.html`. Old hash links such as `#guide/3` still redirect. The app is an installable PWA (vite-plugin-pwa): it precaches the shell, fonts and banners, works offline, and asks before swapping in a new version. Walkthrough content lives in `src/data`; progress state is in `src/store`.

## Deploy

Hosted on Vercel from `main`. `vercel.json` sets the build (`pnpm build` → `dist`), a catch-all rewrite to `index.html`, a strict CSP (no inline scripts), security headers, and cache rules: `no-cache` for `index.html`, `sw.js`, `theme-init.js` and the manifest, and one-year `immutable` for hashed `/assets`. Check header changes against a real preview deployment, not just locally.

## Use the guide

- **Guide** opens at Tail Cave and remembers the last chapter you viewed. Reveal chapters as you reach them. Read each chapter straight through or jump to a section from **In this chapter**. Click a step’s opening sentence to check it off.
- **Checklist** searches and filters the revealed route by location, chapter, category and completion. Checks sync with the guide and across categories. Open an item’s chapter link to read the directions in context.
- **Progress** shows completion by chapter and category, with separate manual Normal and Hero deathless logs. Check the death count on your Switch save selection screen.
- Use the sun or moon in the header to switch themes. Choose **Use device setting** under **Appearance** to follow your system. The theme is saved in this browser.
- Open **Progress saved** to change spoiler settings or back up your progress as JSON. Your progress belongs to this browser and site address. Export before switching devices or clearing browser data.

The completion total covers the walkthrough and its checklists. Optional amiibo panels and deathless clears are tracked separately. The chest list includes chests tied to story dungeons, the Color Dungeon, the Dream Shrine and a mountain route chest. Dungeon shells count in both the chest and shell categories. The Island Sweep includes map and statue checks. The site links to external sources for maps and alternate routes.

Directions come from published Switch remake guides and haven't been played through end to end. Open questions are in `docs/facts-to-verify.md`.

## Missable entries

A "Don't miss" strip appears on a chapter when `src/data/missables.ts` flags an unchecked entry there. An entry is flagged only when two independent sources agree on the exact condition. Today nothing qualifies for the Switch remake, since you can reload the clear save after the ending, so the strip says that and links the sources. Open questions are in `docs/facts-to-verify.md`.

## Artwork and fonts

The chapter banners in `src/assets` are decorative. DM Sans and Playfair Display are bundled with their licenses in `public/fonts`. *The Legend of Zelda* and *Link’s Awakening* belong to Nintendo. This is an unofficial guide.
