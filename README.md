# nature-guide

nature-guide is a Next.js field guide to 95 species found in Korea, organized by the Linnaean ranks (kingdom, phylum, class, order, family, genus, species). Each entry has Korean, English and scientific names, a habitat, a list of characteristics, a short note, a Wikimedia Commons thumbnail and the full seven-rank classification in Latin and Korean. Thirteen fish entries also carry sushi information (Japanese name, sushi name, season, taste). The app has a searchable card grid with a detail modal and a separate page that explains binomial nomenclature and renders the whole collection as a collapsible taxonomy tree.

It is for someone learning the names and classification of common Korean animals, birds, fish, trees, flowers and mushrooms. The interface text is Korean.

The Korean version of this document is in `README.ko.md`.

## Features

Home page (`/`)

- 95 entries in six categories: 20 animals (mammals, amphibians, a reptile, insects), 15 birds, 15 fish and other sea life, 15 trees, 15 flowers and herbs, 15 mushrooms. By kingdom: 50 Animalia, 30 Plantae, 15 Fungi.
- Search box that matches Korean name, English name, scientific name, family (Latin and Korean), order (Latin and Korean) and the Japanese sushi name.
- Category tabs (all, animals, birds, fish, trees, flowers, mushrooms).
- Sushi mode: restricts the grid to fish, highlights entries with sushi data, dims the rest, and shows the best season on each highlighted card.
- "Creature of the day": one entry chosen deterministically from the date, shown above the grid and clickable.
- Cards show the image (or the emoji if the image fails to load), category tag, names, family and the first characteristic.
- Detail modal with the seven-rank taxonomy table (indented per rank), habitat, characteristics, the note, and the sushi panel when present. Closes on backdrop click or Escape, and locks page scroll while open.
- Count of matching entries and an empty-state message.

Taxonomy page (`/taxonomy`)

- An explainer on Carl Linnaeus and binomial nomenclature, the seven ranks with Latin names and one-line descriptions, a worked example, and four reasons the system matters.
- Statistics row: number of distinct kingdoms, phyla, classes, orders, families, genera and species in the dataset.
- A tree built at render time from the taxonomy of every entry, Kingdom down to Species, with per-node counts, a color per rank, collapsible branches and an "expand all / collapse all" button.

Styling

- Tailwind CSS v4 via `@tailwindcss/postcss`, plus a small set of custom classes in `globals.css` (card grid, category colors, tags, modal, sushi glow, tab buttons). Dark color scheme.

## How it works

```
src/data/types.ts         Category, Taxonomy, SushiNeta, Creature types;
                          categoryMeta (labels, emoji, CSS class); taxonomyLevels
src/data/creatures.ts     the 95 entries as a typed array (static, bundled)
src/app/page.tsx          client component: search, filters, sushi mode,
                          daily pick, CreatureCard, CreatureModal, TaxonomyTable
src/app/taxonomy/page.tsx client component: buildTree() nests entries by rank,
                          TreeNodeView renders it; LinnaeusInfo; TaxonomyStats
src/app/layout.tsx        root layout and metadata; imports globals.css
```

All data is a TypeScript array compiled into the bundle. There is no API, database or server-side logic; filtering, searching and tree building happen in the browser with `useMemo`. Images are plain `<img>` elements pointing at Wikimedia Commons thumbnail URLs with an `onError` fallback to the entry's emoji. `next.config.ts` sets `images.unoptimized: true`.

## Requirements

- Node.js 18 or later and npm.
- Internet access at view time for the thumbnails, since they are hotlinked from Wikimedia Commons.

`package.json` pins Next.js, React, TypeScript, Tailwind and PostCSS to `latest`; `package-lock.json` records the versions the author installed.

## Installation and running

```bash
git clone https://github.com/choisen-hub/nature-guide.git
cd nature-guide
npm install
npm run dev
```

Open http://localhost:3000 for the guide and http://localhost:3000/taxonomy for the tree. Production build:

```bash
npm run build
npm start
```

## Configuration

There are no environment variables or runtime configuration files.

- Add or edit species in `src/data/creatures.ts`. Every entry must satisfy the `Creature` interface in `src/data/types.ts`: `id`, `koreanName`, `englishName`, `scientificName`, `category`, `subcategory`, `emoji`, `imageUrl`, `habitat`, `characteristics[]`, `funFact`, `taxonomy` (seven Latin ranks plus six Korean rank names), and optionally `sushiNeta`.
- Category labels, emoji and CSS classes are in `categoryMeta`; the rank descriptions shown on the taxonomy page are in `taxonomyLevels`.
- Rank colors and emoji for the tree are the `levelColors` and `levelEmojis` arrays in `src/app/taxonomy/page.tsx`.
- `next.config.ts` only disables image optimization; `postcss.config.mjs` registers the Tailwind plugin; `tsconfig.json` maps `@/*` to `src/*`.

## Project structure

```
nature-guide/
  src/
    app/
      layout.tsx            root layout, metadata, global stylesheet import
      globals.css           Tailwind import and custom component classes
      page.tsx              guide: search, tabs, sushi mode, daily pick, cards, modal
      taxonomy/
        page.tsx            Linnaeus explainer, statistics, collapsible tree
    data/
      types.ts              data types, category metadata, rank list
      creatures.ts          the 95 entries
  next.config.ts            images.unoptimized = true
  postcss.config.mjs        @tailwindcss/postcss
  tsconfig.json             TypeScript configuration with the @/ alias
  package.json              scripts: dev, build, start
  LICENSE
  README.md                 this file
  README.ko.md              Korean version
```

## Usage examples

- Type part of a name in any of the supported languages, for example a family name such as `Ursidae` or its Korean equivalent, to narrow the grid; click a card for the full entry.
- Press the sushi tab to see which fish entries have sushi data and their seasons; click one to read the Japanese name, sushi name, season and taste profile.
- Open `/taxonomy`, collapse everything, and expand one kingdom at a time to see how the entries distribute across orders and families.

Adding an entry:

```ts
// src/data/creatures.ts
{
  id: 'b16', koreanName: '...', englishName: '...', scientificName: 'Genus species',
  category: 'birds', subcategory: '...', emoji: '🐦',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/.../200px-....jpg',
  habitat: '...', characteristics: ['...', '...'], funFact: '...',
  taxonomy: {
    kingdom: 'Animalia', phylum: 'Chordata', class: 'Aves', order: '...', family: '...',
    genus: '...', species: 'G. species',
    kingdomKo: '동물계', phylumKo: '척삭동물문', classKo: '조강', orderKo: '...', familyKo: '...', genusKo: '...',
  },
},
```

The taxonomy tree and the statistics update automatically because they are derived from the array.

## Data, licensing and attribution

- Species descriptions, habitats, characteristics and notes were written by the author from general reference material and have not been reviewed by a biologist. Figures such as population counts, protected-status designations and body weights may be out of date.
- Images are not stored in this repository. Each `imageUrl` points at a thumbnail on Wikimedia Commons, where every file carries its own license (public domain, CC BY, CC BY-SA, and others). If you redistribute or display the images elsewhere, check and credit each file on its Commons page.
- Scientific names follow common usage at the time of writing and may differ from the latest taxonomic revisions.
- The code in this repository is MIT licensed; the license does not cover the hotlinked images.

## Known limitations and roadmap

- Korean interface only; English and Japanese appear only inside the data (names and sushi terms).
- The dataset is small and hand-written; there is no way to add entries without editing the source file.
- Hotlinked thumbnails depend on Wikimedia Commons availability and on the exact file paths staying valid; a renamed file shows the emoji fallback instead.
- In the taxonomy tree, "expand all" currently re-mounts the tree but child nodes below the phylum level still start collapsed, so deeper branches must be opened by hand.
- The "creature of the day" index is computed from year, month and day with fixed multipliers; it is deterministic but not uniformly distributed across entries.

## License

MIT. See [LICENSE](LICENSE).
