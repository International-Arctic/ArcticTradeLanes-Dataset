# GIS Quality Loop — 2026-09-15 ~16:38 MSK

## Win
- Densified **ARC-PORT-001** Murmansk Commercial Sea Port off soft-stack `68.9841,33.0610` (shared with ARC-FAC-336 Kola Farwater Ltd ship agency) onto OSM `landuse=industrial` **Мурманский морской торговый порт** [way/85150513](https://www.openstreetmap.org/way/85150513) centroid `68.98092036962025,33.06344651139241`.
- Broke port↔industry soft-stack; ARC-FAC-336 left on prior MCSP pin (no separate OSM for Kola Farwater office).
- Cross-check: office=company **ПАО ММТП** [node/4185004064](https://www.openstreetmap.org/node/4185004064) Portovyy proyezd 22.

## Wrangell skip (this cycle primary target)
- ARC-PORT-086↔ARC-SHIP-051 soft-stack at `56.385,-132.355` (6-Mile Mill / planned deepwater + JAG yard) — **no** verifiable pier/harbour/industrial=port/quay OSM within ~1 km of the mill pin.
- OSM way/240047996 landuse=industrial (Shoemaker Bay) ~1.5 km NE; downtown Wrangell piers ~3.5 km north (wrong target — ARC-CITY-079 downtown stays).
- Planned-only site → skipped; no invented offsets. Quarantine style leave-alone.

## Quarantine unchanged
ARC-PORT-034 Obskaya, ARC-PORT-069 Chevak, ARC-SHIP-069 Sevgiprorybflot.

## Atlas
- Rebuilt via `ArcticTradeLanes.com/atlas-proj/build_atlas.py --dataset ArcticTradeLanes-Dataset`; synced Dataset + public/data + dist/data + www aliases (static only — no SPA redeploy / App.tsx).
- 1321 features / 156 ports / 70 shipyards / 110 industry / 14 rail. CRS primary EPSG:3996.
- `generated` `2026-09-15T13:48:48.021251+00:00`.
- centroid_clone remaining: ARC-PORT-034, ARC-PORT-069, ARC-SHIP-069.
