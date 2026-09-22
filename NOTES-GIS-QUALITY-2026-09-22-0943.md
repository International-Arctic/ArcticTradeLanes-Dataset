# GIS Quality Loop — 2026-09-22 ~09:43 MSK

## Outcome
- **Densified ARC-SHIP-016 BAE Systems (Naval Ships)** off soft `55.8600,-4.2500` (Glasgow city) onto OSM **way/1310629676** Nominatim centroid `55.8816399,-4.3656145` (`industrial=shipyard` + `landuse=industrial`, name BAE Systems; Scotstoun / Blawarthill / Garscadden).
- Secondary note: Govan **way/133174308** is also named BAE Systems (`landuse=industrial` only — **no** `industrial=shipyard`); left as secondary, not densify target per standing tag bar.
- Location → **Glasgow (Scotstoun / Blawarthill)**.
- Tag `gis-densify-0943`. Softish (4-dec `.xx00`) shipyards **14→13**.

## Skips / blocked (unchanged)
- Wuchang ARC-SHIP-039 — need Yangluo/Shuangliu `industrial=shipyard`.
- Sembcorp ARC-SHIP-033 — way/1004233134 missing `industrial=shipyard`.
- Hyundai ARC-SHIP-034 — avoid dup vs ARC-SHIP-058 HD HHI Ulsan.
- Quarantine: PORT-034/069, SHIP-069, Zvezda, Wrangell, Ulstein #37, Naval Group #43.

## Atlas
- Rebuilt via `atlas-proj/build_atlas.py --dataset ArcticTradeLanes-Dataset`.
- `generated` **2026-09-22T06:51:31Z**, 1321 features / 70 shipyards / 156 ports. CRS primary EPSG:3996.
- Synced Dataset + atlas/ + www/public/dist/arctic-trade-lanes data paths — **no SPA redeploy / App.tsx / vite build**.
- Live verified: https://arctictradelanes.com/data/atlas.geojson ARC-SHIP-016 `[-4.365615, 55.88164]`.

## Next preferred
- Vigor ARC-SHIP-021 Seattle, VT Halter ARC-SHIP-022, Eastern ARC-SHIP-023, Waigaoqiao ARC-SHIP-036 (Nominatim way/168992087 needs tag check), Wuchang/Sembcorp if OSM tags appear.
