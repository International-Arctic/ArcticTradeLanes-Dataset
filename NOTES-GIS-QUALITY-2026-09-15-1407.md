# GIS Quality Loop — 2026-09-15 ~14:07 MSK

## Win
- Densified **ARC-SHIP-073** Novatek Severny Inzhiniring off Moscow Red Square centroid `55.7558,37.6173` onto OSM office=company **ПАО «Новатэк»** [way/1354011261](https://www.openstreetmap.org/way/1354011261) center `55.6728965,37.5206578` (Leninsky Prospekt vl90/2) — registered HQ for Novatek in-house shipbuilding/engineering subsidiary.
- Densified **ARC-FAC-345** JSC Rusatom Arctic (same soft-stack) onto OSM office=company **Росатом** [relation/13626693](https://www.openstreetmap.org/relation/13626693) `55.7398734,37.6232680` (Bolshaya Ordynka 24) — parent HQ for NSR infrastructure / Northern Delivery operator.
- Broke the shared Moscow tourist-centroid clone between shipyard + industry layers.

## Atlas
- Rebuilt via `atlas-proj/build_atlas.py`; synced Dataset + public + dist + www aliases (static only — no SPA redeploy / App.tsx).
- Live `/data/atlas.geojson` + apex verified after `dist/data/` sync.
- 1321 features / 156 ports / 70 shipyards / 110 industry / 14 rail. CRS primary EPSG:3996; RFC7946 companion 4326.
- generated: `2026-09-15T11:13:15.224986+00:00`
- centroid_clone remaining: ARC-PORT-034, ARC-PORT-069, ARC-SHIP-069.

## CI / UM
- `check-people-event-pin-filter.mjs` — PASS (accepted 4 / dropped 6).
- `check-centroid-clone-remaining.mjs` — EXPECTED lock updated (removed ARC-PORT-153 after prior Steensby densify); PASS for 034/069/SHIP-069.

## Left alone this cycle
- **ARC-PORT-034** Obskaya LNG — quarantine (no marine LNG OSM).
- **ARC-PORT-069** Chevak barge landing — quarantine (no pier/harbour OSM).
- **ARC-SHIP-069** Sevgiprorybflot — quarantine.
- Provideniya FAC-391 / Wrangell SHIP-051 / Korsakov SHIP-065 / tanker↔icebreaker colocations — deferred (need clearer OSM site geometry).
