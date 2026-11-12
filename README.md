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

- **Guide** opens at Tail Cave and remembers the last chapter you viewed. Reveal chapters as you reach them. Read each chapter straight through or jump to a section from **In this chapter**. Check off a step at the end of its paragraph.
- **Checklist** searches and filters the revealed route by location, chapter, category and completion. Checks sync with the guide and across categories. Open an item’s chapter link to read the directions in context.
- **Progress** shows completion by chapter and category, with separate manual Normal and Hero deathless logs. Check the death count on your Switch save selection screen.
- Use the sun or moon in the header to switch themes. Choose **Use device setting** under **Appearance** to follow your system. The theme is saved in this browser.
- Open **Progress saved** to change spoiler settings or back up your progress as JSON. Your progress belongs to this browser and site address. Export before switching devices or clearing browser data.

The completion total covers the walkthrough and its checklists. Optional amiibo panels and deathless clears are tracked separately. The chest list includes chests tied to story dungeons, the Color Dungeon, the Dream Shrine and a mountain route chest. Dungeon shells count in both the chest and shell categories. The Island Sweep includes map and statue checks. The site links to external sources for maps and alternate routes.

The walkthrough was checked against published Switch remake guides. The app was tested in a browser. Game directions were verified from references without a new console playthrough.

## Artwork and fonts

All nine chapter banners are original illustrations made with OpenAI’s built-in image generator. The art uses a handcrafted miniature diorama style. It illustrates the chapter setting and serves as decoration. Follow the walkthrough text and sourced maps for in-game directions.

The font licenses for DM Sans and Playfair Display are included in `public/fonts`. *The Legend of Zelda* and *Link’s Awakening* belong to Nintendo. This is an unofficial guide.

### Chapter art prompts

Illustrated background for a chapter banner in an unofficial Link’s Awakening Switch adventure journal. Use a tactile, detailed handcrafted 3D miniature diorama aesthetic: softly rounded stone forms, tiny individually modeled foliage, real-looking moss and stone textures, shallow depth of field, warm natural highlights and rich deep forest shadows. Beautiful editorial scene in the spirit of the 2019 toy-like Zelda remake, a little more realistic in material detail. Wide landscape; image will be center cropped into a 3.4:1 banner, so compose the focal object inside the middle 44% of the image vertically, with enough room for the complete central subject on the right. The left 44% is continuously dark, simple and low contrast for readable cream text added by the site. Only the environment. No people, no legible text, no logo, no interface, no graphic frame.

- Chapter 2. A small rounded ancient stone grotto entrance in the lush wetland of Koholint's Goponga Swamp, framed by thick reeds and pale violet lily flowers on dark reflective water. Dusk, jade and muted violet, with mist and a few warm fireflies. Place the entire mossy arch at x=75% and y=50%. The foreground on the left is low-contrast shaded marsh and blurred foliage.
- Chapter 3. An old stone Key Cavern doorway on a small raised grassy bank above a still pond in Koholint's sunny Ukuku Prairie. Low rolling grass, a few smooth stones, wildflowers and distant rounded trees. Warm honey afternoon light with muted spring green and olive. Place the pale gray recessed masonry entrance at x=75% and y=50%. The left half is a shaded green bank and lake, low contrast.
- Chapter 4. In Koholint's mountain foothills, a broad waterfall beside the Angler’s Tunnel rushes down layered stone cliffs into a deep jade pool. An old dark stone doorway is set into the cliff on the right beside the falling water, so the entrance itself reads clearly. Wet ferns and mist catch pale turquoise light. Keep the whole entrance at x=76%, y=50%, with the water and brightest highlights confined to the right half. The left half is a shaded, low-contrast evergreen rocky bank.
- Chapter 5. Koholint’s Martha’s Bay at late afternoon with a monumental old stone catfish head rising out of blue-green water on the right. Its big open mouth is a deep dark doorway above the waterline, with small weathered stone whiskers to suggest a catfish. Mossy banks and little reed clusters, amber sunlight on the water to the right. The head sits at x=74%, y=50%. The left half is shaded calm water and subtle dark reed reflections.
- Chapter 6. A weathered stone shrine in Koholint’s ancient ruins, dark recessed temple entry beneath a broad worn lintel, surrounded by low broken stone walls and fern-covered relief fragments. Soft morning fog, warm gray stone, moss and subdued bronze light from the right. Place the shrine's entrance at x=75%, y=50%. The left side is only shaded vegetation and softly blurred ruins, low contrast.
- Chapter 7. A tall, weathered medieval stone watchtower on a rocky mountain shelf overlooking Koholint. Its broad stone base and dark doorway are at x=75%, y=60%, and its crenellated upper portion must also be visible around the central horizontal crop. Dark conifers, wisps of cloud and soft dawn lighting on the right, dusty blue and warm ochre. The left half is a dark blurred cliff and distant pines, with no bright clouds or large focal objects there.
- Chapter 8. A colossal natural rock formation in the shape of a weathered turtle head, half buried in the western mountains of Koholint. A dark gap beneath its mouth suggests a cave. Warm rust-colored stone, a few hardy ferns, ember-colored late afternoon rays, and dark basalt foreground. Place the head at x=75%, y=50%. The left half is low-contrast shaded rock and dark vegetation. No combat, people, or glowing lava rivers.
- Chapter 9. A huge ivory egg with a few muted pink patches sits at the peak of Koholint’s Mount Tamaranch, glowing softly in the final golden light. It rests firmly on a moss-covered summit with small pines and a cloud layer behind it. Place the egg at x=74%, y=49% and show the full silhouette within the central horizontal band. The left half has shaded forested slopes and muted fog, dark and low-contrast. Just an iconic mountain landmark, no plot scenes.
