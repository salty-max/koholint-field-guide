# Koholint Field Guide

A responsive companion for *The Legend of Zelda: Link’s Awakening* on Nintendo Switch (2019).

## Run it locally

From this project folder, run `python3 -m http.server 8000 --directory dist` and visit [localhost:8000](http://localhost:8000). The project uses plain HTML, CSS and JavaScript. It needs no build step or packages. You can host the contents of `dist` on any static web host.

## Use the guide

- **Guide** opens at Tail Cave and remembers the last chapter you viewed. Reveal chapters as you reach them. Use **Resume route** to find the first unchecked step.
- **Checklist** searches and filters the revealed route by location, chapter, category and completion. A check carries across views and categories.
- **Progress** shows completion by chapter and category, with separate manual Normal and Hero deathless logs. Check the death count on your Switch save selection screen.
- Use the sun or moon in the header to switch themes. Choose **Use device setting** under **Appearance** to follow your system. The theme is saved in this browser.
- Open **Progress saved** to change spoiler settings or back up your progress as JSON. Your progress belongs to this browser and site address. Export before switching devices or clearing browser data.

The completion total covers the walkthrough and its checklists. Optional amiibo panels and deathless clears are tracked separately. The chest list includes chests tied to story dungeons, the Color Dungeon, the Dream Shrine and a mountain route chest. Dungeon shells count in both the chest and shell categories. The Island Sweep includes map and statue checks. The site links to external sources for maps and alternate routes.

The walkthrough was checked against published Switch remake guides. The app was tested in a browser. Game directions were verified from references without a new console playthrough.

## Artwork and fonts

The Tail Cave banner is an original illustration made with OpenAI’s built-in image generator. It depicts a moss-covered stone arch on the right of a dark forest diorama, with warm sunbeams and foreground foliage. It is decorative and isn’t intended for in-game navigation.

The font licenses for DM Sans and Playfair Display are included in `dist/assets`. *The Legend of Zelda* and *Link’s Awakening* belong to Nintendo. This is an unofficial guide.
