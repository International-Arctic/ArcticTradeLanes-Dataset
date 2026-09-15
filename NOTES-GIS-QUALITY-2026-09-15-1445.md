# GIS Quality Loop — 2026-09-15 ~14:45 MSK

## Win
- Densified **ARC-PORT-043** Provideniya Bay Port off soft-stack `64.3833,-173.3000` (shared with ARC-FAC-391 NewNew/KRDV concept pin) onto OSM `landuse=harbour` **Морской порт Провидения** [way/129101713](https://www.openstreetmap.org/way/129101713) center `64.4211368,-173.2304897`.
- Broke port↔industry soft-stack; FAC-391 left on concept pin (no separate OSM for planned complex).
- Quarantine unchanged: ARC-PORT-034 Obskaya, ARC-PORT-069 Chevak, ARC-SHIP-069 Sevgiprorybflot (no verifiable harbour/pier/shipyard OSM this pass).

## Atlas
- Rebuilt via `atlas-proj/build_atlas.py`; synced Dataset + public/data + dist/data + www aliases (static only — no SPA redeploy / App.tsx).
- 1321 features / 156 ports / 70 shipyards / 110 industry / 14 rail. CRS primary EPSG:3996.
- generated: `2026-09-15T11:43:39.088545+00:00`
- centroid_clone remaining: ARC-PORT-034, ARC-PORT-069, ARC-SHIP-069.

## Left alone
- ARC-PORT-034 / ARC-PORT-069 / ARC-SHIP-069 — quarantine.
- ARC-PORT-086↔ARC-SHIP-051 Wrangell 6-Mile — downtown piers exist but not site-specific 6-Mile Mill OSM; deferred.
- ARC-PORT-130↔ARC-SHIP-065 Korsakov — pier geometry available; deferred to next cycle (one win rule).
