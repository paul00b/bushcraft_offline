# Bushcraft Field Guide — Claude Context

## Project

Mobile-first offline PWA for bushcraft reference. Installable on Android. Pure vanilla HTML/CSS/JS — zero dependencies. OLED pure black theme (`#000000`) to save battery.

GitHub: https://github.com/paul00b/bushcraft_offline.git

Dev server: `npx serve -p 3333 C:/Users/brous/Desktop/Dev/OfflineBushcraft` (absolute path required)

---

## File structure

```
/index.html          — single shell, <div id="app">, registers SW
/manifest.json       — PWA manifest, theme #000000
/sw.js               — service worker (cache-first static, network-first Wikimedia)
/css/main.css        — full design system, OLED theme CSS variables
/js/app.js           — bootstrap, all renderers, search, UI logic
/js/db.js            — IndexedDB layer (notes, photos, mediaCache stores)
/js/router.js        — hash router (#home, #cat/:id, #cat/:id/:subId, #card/:id, #settings)
/data/content.js     — all content: CATEGORIES, CARDS, search index helpers
/icons/              — icon-192.svg, icon-512.svg
```

---

## Architecture

**Router** — hash-based SPA. Routes: `#home`, `#cat/:catId`, `#cat/:catId/:subId`, `#card/:cardId`, `#settings`. Uses `history.pushState` + `popstate` for native Android back button.

**Renderers** — `renderHome()`, `renderCategory()`, `renderCard()`, `renderSettings()` inject HTML into `#app`. No Virtual DOM.

**Search** — in-memory full-text index built at init (title + summary + tags + steps). Debounce 200ms. Live overlay with highlight.

**IndexedDB** (db.js) — 3 stores:
- `notes`: `{ cardId, text, updatedAt }`
- `photos`: `{ cardId, dataUrl, createdAt }`
- `mediaCache`: `{ cardId, mediaUrl, blob }` (Wikimedia images downloaded manually)

**Service Worker** — `CACHE_VERSION = 'bushcraft-v1'`, `MEDIA_CACHE = 'bushcraft-media-v1'`. Cache-first for static assets, network-first + fallback for wikimedia/wikipedia domains.

---

## Design system (css/main.css)

```
--bg: #000000              pure OLED black
--surface: rgba(255,255,255,0.04)   glassmorphism cards
--border: rgba(255,255,255,0.08)    subtle borders
--text: #f0f0f0
--text-muted: #888
--accent: #4a7c59          dark natural green
--danger: #8b1a1a          dark red (dangerous confusions)
--warn: #7a5c00            amber (attention points)
--max-w: 680px             centered content max-width
```

Cards use `backdrop-filter: blur(8px)`. Safe-area padding for notched phones. Both `.home-header` and `.page` use the same `max-width` + padding so search bar and category grid align.

---

## Content (data/content.js)

Exports: `CATEGORIES` (10), `CARDS` (86+), `buildSearchIndex()`, `getCard()`, `getCategory()`, `getCardsByCategory()`, `getCategoryLabel()`.

Card types:
- `technique` — `steps[], attention[], needs[], conditions[], svgIllustration?`
- `naturel` (plant/mushroom/track) — `tags[], nameLatin?, photo?, confusions[], certitude?`
- `noeud` — `photo?, usages[], steps[], attention[]`

Categories: Feu (subcats: Techniques, Types, Amadou), Eau, Abri, Plantes, Champignons, Pistes, Fabrication, Navigation, Premiers secours, Nœuds.

---

## Key conventions

- ES modules (`type="module"`) throughout — no bundler
- Global callbacks attached to `window` for inline HTML handlers: `window.goCategory`, `window.goCard`, `window.router`, `window.deletePhoto`
- `showToast(msg)` for user feedback
- SW cache must be cleared in dev to see JS/CSS changes (SW intercepts everything). Use DevTools > Application > Storage > Clear site data, or the in-app "Vérifier les mises à jour" button in Settings.
- All text is in French
