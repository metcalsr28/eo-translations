# eo-translations

Source for **Ludoj en Esperanto** — a hub listing Esperanto fan
translations of retro games and offering each one's patch as a download.
Served via GitHub Pages at `https://metcalsr28.github.io/eo-translations/`.

This is the only repository that touches GitHub. The individual game
translation projects live and build locally; each one hands its verified
`.ips` patches to a folder here.

## Layout

```
index.html          hub landing page (lists projects)
assets/
  style.css         shared theme (hub + every project page)
  site.js           shared EO/EN language toggle
pokemon_g1/         Pokémon Ruĝa & Blua (Gen 1)
  index.html        project page
  *.ips             patches (from the pokemon_g1 project's `make site`)
.nojekyll           serve files as-is (no Jekyll build)
```

Scope is deliberate: it **provides patches and links to third-party
patchers**. It performs no patching and hosts no ROMs.

## Updating

A game project refreshes its patches here with `make site` (from that
project's repo), which rebuilds + retail-SHA-1-verifies and copies the
`.ips` into the matching folder. Then, in this repo:

```
git add -A && git commit -m "…" && git push
```

The live site updates a minute or two after the push.

## Adding a game

1. `assets/` is shared — new pages just `<link>` `../assets/style.css`.
2. Create `<game>/index.html` (copy `pokemon_g1/index.html` as a template:
   keep the `../assets/style.css` link, the `../` back-link, and a
   disclaimer; swap in the game's text, downloads, and base-ROM SHA-1s).
3. Put that game's verified `.ips` in `<game>/`.
4. Add one `<a class="project" href="<game>/">…</a>` card to `index.html`.
