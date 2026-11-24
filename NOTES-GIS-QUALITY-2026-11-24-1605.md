# GIS Quality Loop — 2026-11-24 16:05 MSK

## Drift check (vs 15:37 MSK baseline): NO DRIFT
- ATL `/` 200, 111124 B, md5 c24e5823; `/data/atlas.3996.geojson` md5 6f1a2927, 1317 features; `/data/ports.csv` md5 c6e72709; `/api/health` {"status":"ok"} (ts 2026-11-24T13:05:21Z = 16:05 MSK)
- UM (unicornsmap.com) bundle index-D072dq9N.js; `/api/stats.json` geoPinned 653 / peopleOnMap 537

## Fix (metadata-only, coords unchanged; no atlas rebuild/publish)
- ARC-PORT-160 Mjóeyrarhöfn (Reyðarfjörður; pin = Mjóeyrarbryggja quay face): max_depth_m 14.5 -> 14.2; last_verified 2026-11-24
  - Source: Fjarðabyggðarhafnir official page https://www.fjardabyggdarhafnir.is/is/fjardabyggdarhafnir/mjoeyrarhofn (checked 2026-11-24), HAFNARBAKKAR table: Mjóeyrarbryggja 383 m / 14,2 m / stálþil (single quay).
  - Same page intro says "Lengd bryggjukanta er 380 metrar og dýpi 14,5 metri" (general figure). The berth table value for the pinned quay is used, as for 143.

## Verified unchanged (official sources, checked 2026-11-24)
- ARC-PORT-163 Klaksvík: 12 = North Quay (Norðhavnin) 317 m / 12 m, portofklaksvik.com/quays
- ARC-PORT-015 Kirkenes: 13.8 = Dypvannskaia, kirkeneshavn.no/tjenester/kaier/ (note: the official PDF kaier-i-soer-varanger-kommune.pdf says 13 m; not changed)

## Flags / leads (not changed)
- ARC-PORT-087 Piteå 11.2: the official quay page (portofpitea.se/infrastruktur/kajplatser/) says max draught 11,20 m. The fairway page says "inseglingsdjup 11,2 m (12,5)", and the homepage says "12,5 meter djup". So 11.2 is a draught, and 12.5 is the depth (fairway or general). We need to decide whether max_depth_m should be 12.5.
- ARC-PORT-160: the official page has two figures (14.5 intro vs 14.2 quay table). Revert to 14.5 if the general figure is preferred.
- ARC-PORT-089 Grundarfjörður: not re-fetched this cycle.
