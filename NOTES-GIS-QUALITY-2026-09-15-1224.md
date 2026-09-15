# GIS Quality — 2026-09-15 ~12:24 MSK

## Win
Densified **ARC-RAIL-006** (Rail Nordica Haparanda/Tornio-Kemi-Oulu) off **ARC-CITY-036** Kemi city centroid.

| Field | Before | After |
|-------|--------|-------|
| lat,lon | 65.7361, 24.5642 (~65 m from CITY-036) | 65.7367256, 24.5743024 |
| OSM | — | railway=station Kemi [node/251738389](https://www.openstreetmap.org/node/251738389) |
| Context | soft city pin | Named Rail Nordica corridor hub at Kemi station |

## Atlas
- Rebuilt via `atlas-proj/build_atlas.py`; public+dist+Dataset aliases synced (static only — no SPA redeploy).
- `generated` `2026-09-15T09:30:09Z`, **1321** features / **156** ports / rail 14 / CRS EPSG:3996.
- Remaining `centroid_clone` (unchanged): PORT-034, PORT-069, PORT-153, SHIP-069.

## CI
`scripts/check-rail006-kemi-densify.mjs` — locks RAIL-006 off CITY-036 on Kemi station OSM band.

## UM
Live bundle people/event pin filters present (`null_island` / `swapped_lat_lng` / `out_of_bounds`). No SPA redeploy.

Neutral OSM/Nominatim sourcing only.
