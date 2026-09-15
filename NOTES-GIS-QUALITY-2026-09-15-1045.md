# GIS Quality — 2026-09-15 ~10:45 MSK

## Win
Densified **ARC-FAC-387** (Nordgold Lenotap ore field GOK) off **ARC-PORT-042** Egvekinot harbour soft-stack.

| Field | Before | After |
|-------|--------|-------|
| lat,lon | 66.3167, -179.1167 (= PORT-042) | 67.9381457, -178.9312504 |
| OSM | — | waterway Ленотап [way/649821635](https://www.openstreetmap.org/way/649821635) (Nominatim) |
| Cross-check | — | Iultin locality [way/649821750](https://www.openstreetmap.org/way/649821750) ~11 km; ~180 km N of Egvekinot port |

## Atlas
- Rebuilt via Zo `atlas-proj/build_atlas.py`; public+dist+Dataset aliases synced (static only — no SPA redeploy).
- `generated` `2026-09-15T07:49:49Z`, **1321** features / **156** ports / industry 110.
- Remaining `centroid_clone` (unchanged): PORT-034, PORT-069, PORT-153, SHIP-069 — no new verifiable harbour/pier OSM this cycle.

## CI
`scripts/check-fac387-lenotap-densify.mjs` on Arctic-Trade-Lanes — locks FAC-387 off PORT-042 in Lenotap/Iultin band.

Neutral OSM/Nominatim sourcing only.
