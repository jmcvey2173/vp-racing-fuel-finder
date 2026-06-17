# VP Racing Fuel Finder

An interactive landing page that turns the Motorcycle / ATV / UTV fuel
flowchart into a guided customer questionnaire. The customer answers a few
simple questions and receives a recommended VP Racing fuel or fuel group.

> **Sandbox / demo only.** This prototype does **not** connect to Shopify,
> any backend, or a database. It is built so marketing or web developers can
> later embed it into the VP Racing Shopify website. All fuel specs in this
> demo are **placeholders** — confirm every value with VP Racing before
> publishing.

---

## Tech stack

- **React** (UI)
- **Vite** (dev server + build)
- **Plain CSS** (no UI framework)
- No backend, no database, no Shopify integration (yet)
- Fully responsive (mobile-first) for phones, tablets, and desktop

---

## Run the project locally

You need [Node.js](https://nodejs.org/) 18+ installed.

From inside the `vp-racing-fuel-finder/` folder:

```bash
npm install     # install dependencies (run once)
npm run dev     # start the local dev server (hot reload)
npm run build   # create an optimized production build in /dist
```

- `npm run dev` prints a local URL (usually http://localhost:5173). Open it in
  your browser. Edits to the code reload automatically.
- `npm run build` outputs static files to the `dist/` folder, ready to host.
- `npm run preview` serves the built `dist/` folder locally to spot-check it.

---

## How to edit the decision tree

All questions and recommendations live in **`src/data/decisionTree.js`**.
There is **no branching logic hidden in the code** — change the data and the
website changes with it.

Each entry ("node") is either:

- a **question** (`type: "question"`) with a list of `options`. Each option has
  a `label` (the button text) and a `next` (the id of the node to go to when
  the customer picks it); or
- a **result** (`type: "result"`) with a `fuels` list of fuel codes plus an
  optional `headline` and `explanation`.

The wizard starts at the node named in `startNodeId`.

**Common edits:**

- Change a question's wording → edit its `question` text.
- Change a button → edit the option's `label`.
- Send a button somewhere else → change the option's `next` to another node id.
- Change what fuels a result recommends → edit its `fuels` list (use codes that
  exist in `fuelDatabase.js`).
- Add a new branch → add a new node with a unique `id` and point an option's
  `next` at it.

Keep all quotes, commas, and braces intact, then save.

---

## How to edit fuel data

All fuel products live in **`src/data/fuelDatabase.js`**, keyed by product code
(for example `C12`, `MS109`, `VP Moto R`).

Each fuel has:

| Field              | Meaning                                            |
| ------------------ | -------------------------------------------------- |
| `name`             | Full product name (card title)                     |
| `shortDescription` | One-line summary under the title                   |
| `leadedUnleaded`   | "Leaded", "Unleaded", or a short note              |
| `oxygenated`       | "Yes", "No", or a short note                       |
| `bestFor`          | Who / what application the fuel is for             |
| `notes`            | Extra detail (used to flag spec confirmations)     |

To **edit** a fuel: change the text inside the quotation marks.
To **add** a fuel: copy an existing block, give it a new code/key, then
reference that code in `decisionTree.js`.

> ⚠️ Every spec currently reads "confirm specs before publishing." These are
> placeholders for the demo. Replace them with verified VP Racing data before
> going live.

---

## File structure

```
vp-racing-fuel-finder/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx                  # app entry point
    ├── App.jsx                   # wizard state + layout
    ├── App.css                   # all styles (theme variables at top)
    ├── data/
    │   ├── decisionTree.js       # the questionnaire flow (edit me)
    │   └── fuelDatabase.js       # fuel specs & descriptions (edit me)
    └── components/
        ├── QuestionCard.jsx      # one question + answer buttons
        ├── ProgressBar.jsx       # progress indicator
        ├── ResultCard.jsx        # recommendation screen
        └── FuelBadge.jsx         # small attribute pill
```

---

## Moving this into Shopify later

This prototype is intentionally framework-light so it can move into Shopify a
few different ways. Pick whichever fits the team's workflow:

### Option A — Embedded widget (fastest)

1. Run `npm run build`. Vite outputs JS/CSS bundles into `dist/`.
2. Upload those built assets to Shopify (Files, or your CDN).
3. Add a `<div id="root"></div>` plus `<script type="module" src="...">`
   tags to a page template or a **Custom Liquid** block, pointing at the
   uploaded bundle. The widget mounts into that div.

This keeps the React app intact and treats it as a self-contained embed.

### Option B — Custom Liquid section

1. Build the app (Option A) and host the bundle.
2. In the Shopify theme editor, add a **Custom Liquid** section to the page
   where the Fuel Finder should appear.
3. Paste the mount `<div>` and `<script>` markup into that Custom Liquid block.
4. Optionally expose a few section settings (headline, subheadline) in the
   theme editor and pass them into the widget.

### Option C — Rebuilt natively into the theme

For the tightest integration, port the logic into the Shopify theme directly:

- Move `decisionTree.js` and `fuelDatabase.js` into theme assets (or model the
  fuels as Shopify **metaobjects** / products so merchandising and pricing can
  link up).
- Reimplement the wizard with the theme's existing JS approach (vanilla JS,
  Alpine, or Web Components) and Liquid templates.
- Replace the "Contact VP Racing" button with real product links, an add-to-cart
  flow, or a contact form.

Because the flow and the fuel data are already separated from the UI, Option C
mostly reuses the two `data/` files as the source of truth.

### Before any go-live

- Replace all placeholder specs in `fuelDatabase.js` with verified data.
- Confirm the decision tree against the current official VP Racing flowchart.
- Wire the "Contact VP Racing" CTA to the correct destination.
- Keep the **guide-only disclaimer** visible.
