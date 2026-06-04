# Chychkan — Mountain Retreat website

A fast, beautiful, **trilingual (English / Russian / Kyrgyz)** front-end for the
family business in the Chychkan Gorge, Talas Province, Kyrgyzstan.

No build step, no framework, no dependencies — just static files.
Built for an older, non-technical audience: large text, big buttons, and a
3-step reservation flow that takes about a minute.

## Design

- **Nature-first:** a hand-drawn layered mountain hero (pine / cream / amber
  palette), atmospheric mist, sun-glow and a subtle film grain.
- **Authentic Kyrgyz touches, kept minimal:**
  - a **kochkor-müyüz** (ram's-horn) felt motif under each section title;
  - a quiet **"tracks in the snow"** divider — a snow leopard's (ак илбирс)
    paw trail crossing a horse's track — under *“Snow leopard country”*.
- **Smooth:** sections fade up on scroll, the nav highlights the current
  section, gentle hover and entrance motion (all disabled for users who ask
  for reduced motion).

## Performance

- **Self-hosted, script-subset fonts** (`assets/fonts/`). No Google Fonts /
  third-party request. An English visitor never downloads the Cyrillic glyphs,
  and a Russian/Kyrgyz visitor never downloads Latin — each script loads on
  demand. `font-display: swap` shows text instantly.
- All artwork is **SVG** (vector, tiny) — mountains, ornament, tracks.
- Total payload is a few hundred KB, most of it fonts loaded lazily.

## Run it locally

```bash
cd chychkan-site
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish on GitHub Pages

The repo is **github.com/itemiral/Chychkan**. To turn on Pages:

1. Push these files to the `main` branch (see below).
2. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a
   branch → Branch: `main` / `/ (root)` → Save.**
3. A minute later the site is live at
   `https://itemiral.github.io/Chychkan/`.
4. (Optional) add a custom domain like `chychkan.kg` under the same Pages
   settings.

Served over GitHub's global CDN with gzip/brotli + HTTP/2 — fast everywhere,
including weak mobile connections in Talas.

## File map

```
index.html        the whole page (sections, structure)
css/styles.css    the design — colours/fonts at the top in :root, @font-face rules
js/data.js        rooms, prices & availability  ← edit your rooms here
js/i18n.js        all text in EN / RU / KY        ← edit your copy here
js/main.js        reservation flow + scroll motion
assets/           SVG artwork (ornament, tracks) + self-hosted fonts
```

## Make it yours (mostly no coding)

1. **Photos** — drop images into `assets/`, then:
   - Hero: in `css/styles.css` set `.hero { background-image: url('../assets/hero.jpg'); }`
     and remove the `<div class="hero-bg">…</div>` SVG block in `index.html`.
   - Rooms: in `js/data.js`, change a room's `gradient:` to `photo: 'assets/room-x.jpg'`.
   - Gallery: set each `.gallery-tile` background in `css/styles.css`.
2. **Rooms & prices** — `js/data.js`, top of the file. Prices are in som (KGS).
3. **Contact details** — phone, WhatsApp, email, address in `index.html`
   (search for `+996`, `wa.me`, `hello@chychkan.kg`).
4. **Map** — paste a Google Maps / 2GIS `<iframe>` into the `.contact-map` block.
5. **Wording** — every line of text lives in `js/i18n.js`.

> ⚠️ Please have a native speaker proofread the **Russian** and especially the
> **Kyrgyz** copy in `js/i18n.js` before going live.

## Reservations & the backend (later)

Reservations are validated, shown on-screen with a reference number, and saved
in the visitor's browser (`localStorage`) so nothing is lost. Availability is
checked against mock bookings in `js/data.js`.

When you're ready for **real availability + saving bookings to a server**, you
change only **two functions** in `js/data.js`:

- `Availability.check(roomId, checkIn, checkOut)` → call your API.
- `Availability.saveReservation(reservation)` → `POST` it to your server.

The whole UI keeps working unchanged — that's the only seam to wire up.
