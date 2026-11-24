# GIS Quality Loop — 2026-11-24 15:37 MSK

## Drift check (vs 15:15 MSK baseline): NO DRIFT
- ATL `/` 200, 111124 B, md5 c24e5823; `/data/atlas.3996.geojson` 200, md5 6f1a2927, 1317 features; `/data/ports.csv` 200, md5 c6e72709; `/api/health` {"status":"ok"} (ts 2026-11-24T12:37:43Z = 15:37 MSK)
- UM (unicornsmap.com) bundle index-D072dq9N.js; `/api/stats.json` geoPinned 653 / peopleOnMap 537

## Fix (metadata-only, coords unchanged; no atlas rebuild/publish)
- ARC-PORT-143 NorSea Polarbase Hammerfest (Rypefjord; pin = OSM relation/8520723 whole base): max_depth_m 10.0 -> 13.0; last_verified 2026-11-24
  - Source: NorSea Group official Polarbase page, Quay Data table https://norseagroup.com/en/baser/norsea-polarbase-as (checked 2026-11-24)
    - Quay 1 293 m / 10 m; **Quay 2 90 m / 13 m**; Quay 3 Ro-ro 22 m / 12 m; **Quay 4 95 m / 13 m**; Quay 5 68 m / 15 m "(7 m fra kai, 20 m dybde"
  - Old 10.0 was only Quay 1 (shallowest). 13.0 is the deepest unambiguous alongside depth.

## Flags / leads (not changed)
- Quay 5 (rig quay) 15 m is not used because the table note says "7 m from quay, 20 m depth", so it is ambiguous (Offshore Magazine 2017 cites 10-22 m alongside, but that is not official).
- The record name says "new Ro-Ro facility"; Ro-ro Quay 3 is 12 m. If the record is meant as the Ro-Ro quay only, use 12.0 instead (needs a decision).
- berth_count 3 vs the official 5 quays (not changed: scope question, same as above).
- Verified unchanged earlier this cycle: 087 Piteå 11.2 (portofpitea.se), 089 Grundarfjörður 9.5 (grundport.is Berth 1); 088 Skellefteå 12.5 is the new quay depth (partially ready 2026), lead only.
