# GIS Quality Loop — 2026-09-22 ~10:25 MSK

## Outcome
- **No densify this cycle** (nothing material). Softish (4-dec `.xx00`) shipyards **13→13**.
- Preferred US / China soft pins checked against OSM tag bar (`industrial=shipyard` required; Nominatim/WD P625 supporting only).

## Target checks

### ARC-SHIP-021 Vigor Shipyard (Seattle) — BLOCKED
- Soft: `47.6000,-122.3300` (Seattle city).
- OSM **way/223565674** "Vigor Ship Yard", addr `1801 16th Avenue Southwest, Seattle WA 98134`, Overpass/Nominatim centroid ~`47.58589,-122.35723` (Harbor Island).
- Tags: `building=yes` + name/address only — **missing `industrial=shipyard`** (and no surrounding Harbor Island `landuse=industrial` polygon named Vigor/Todd).
- Google Maps / company address corroborates Harbor Island site; Wikidata search for Vigor/Todd Seattle returned no entity with P625.
- Same standing bar as Sembcorp: named facility alone is not enough.

### ARC-SHIP-022 VT Halter Marine (Pascagoula) — BLOCKED
- Soft: `30.3700,-88.5600`.
- Overpass bbox: no `industrial=shipyard` named Halter/VT Halter/Bollinger; only **Ingalls Shipbuilding** way/244343830 (`industrial=shipyard`) — different operator (HII), must not densify onto it.
- Nominatim queries empty for VT Halter / Bollinger Mississippi.

### ARC-SHIP-023 Eastern Shipbuilding (Panama City) — BLOCKED
- Soft: `30.1600,-85.6600`.
- Nearby unnamed `industrial=shipyard` ways: **1136084839 / 1136084840 / 1136084841** (~`30.14,-85.63`) — tags only `industrial=shipyard` + `landuse=industrial`, **no name/operator**.
- Cannot attribute to Eastern without name or WD P625; Nominatim "Eastern Shipbuilding Panama City" empty.

### ARC-SHIP-036 Shanghai Waigaoqiao — BLOCKED (tag check complete)
- Soft: `31.3667,121.5667`.
- OSM **way/168992087** name `上海外高桥造船有限公司` / `name:en=Shanghai Waigaoqiao Shipbuilding Co., Ltd.`, Nominatim centroid `31.3427375,121.6304940`.
- Tags: `landuse=industrial` + names only — **missing `industrial=shipyard`** (parallel to Sembcorp way/1004233134).

## Still blocked (unchanged)
- Wuchang ARC-SHIP-039 — need Yangluo/Shuangliu `industrial=shipyard`.
- Sembcorp ARC-SHIP-033 — way/1004233134 missing `industrial=shipyard`.
- Hyundai ARC-SHIP-034 — avoid dup vs ARC-SHIP-058.
- Quarantine untouched: PORT-034/069, SHIP-069, Zvezda, Wrangell, Ulstein #37, Naval Group #43.

## Atlas
- Unchanged from prior cycle: `generated` **2026-09-22T06:51:31Z**, 1321 features / 70 shipyards / 156 ports, CRS primary EPSG:3996.
- No CSV edit, no atlas rebuild, no SPA touch.

## Community ask
- Issue #46 comment: request OSM add `industrial=shipyard` on Vigor way/223565674 and Waigaoqiao way/168992087; name Eastern Panama City polygons; find VT Halter/Bollinger yard polygon.

## Next preferred (when OSM tags appear)
1. Vigor ARC-SHIP-021 if way/223565674 (or Harbor Island yard polygon) gains `industrial=shipyard`.
2. Waigaoqiao ARC-SHIP-036 if way/168992087 gains `industrial=shipyard`.
3. Eastern ARC-SHIP-023 if a named shipyard polygon appears.
4. VT Halter ARC-SHIP-022 if Halter/Bollinger shipyard polygon appears (not Ingalls).
