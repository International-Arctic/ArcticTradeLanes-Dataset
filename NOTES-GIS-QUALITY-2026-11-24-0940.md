# GIS Quality Loop — 2026-11-24 09:40 MSK (UM + ATL)

## Health / drift (vs 2026-11-24 09:12 MSK baseline)
- ATL home 200, 111124 B, md5 c24e5823; /api/health {"status":"ok"} (ts 2026-11-24T06:39Z = 09:39 MSK); /data/atlas.3996.geojson md5 6f1a2927, 1317 features; /data/ports.csv md5 c6e72709. No ATL drift.
- UM bundle index-D072dq9N.js; /api/stats.json geoPinned 653, peopleOnMap 537. No UM drift.

## Theme: ports.csv max_depth_m (continued). Metadata-only, coords unchanged, LF endings kept, 20 fields.
### Edit
- ARC-PORT-028 Oulu Port: max_depth_m 11.5 (unsourced) -> 12.5; last_verified 2026-10-27 -> 2026-11-24; berth_count 12 unchanged.
  - Source (official port authority, Port of Oulu Ltd / Oulun Satama Oy), fetched 2026-11-24:
    - https://ouluport.com/en/harbours/oritkari/ : West Quay (Sawn Timber Quay) berth 105, 330 m, navigational draught 12.5 m; North Quay berth 101 10.0 m; Main Quay berths 102-103 (343 m) 9.0 m. The Finnish page https://ouluport.com/satamat/oritkari/ says "kulkusyväys on 12,5 m".
    - https://ouluport.com/en/harbours/nuottasaari/ : 4 berths, 6.4-10.0 m. https://ouluport.com/en/harbours/vihreasaari/ : 3 berths, 10.0 m.
    - https://ouluport.com/en/harbours/ : approach channel draught 12.50 m (since 2018).
  - The Port of Oulu Handbook 2021-2022 also says West Quay has 12.5 m depth alongside. This was seen only in a search-index excerpt, because the PDF host returned HTTP 500/empty to the box.
  - The old 11.5 was below the officially published 12.5 m draught at berth 105, so it was certainly too low.

## Flags
- 028 depth convention: Port of Oulu publishes draught / depth alongside, not a separate sjökort/charted depth. 12.5 is the deepest published quay value and a lower bound on charted depth.
- 028 berth_count 12: the official pages list Oritkari 101/102/103/105 (4; the FI text says "kolme laivapaikkaa"), Nuottasaari 4 and Vihreäsaari 3, for 11. The handbook map numbers 101-105, 201-204 and 301-303, for 12. Not changed.
- Still open: 160 text-vs-table depth, 172 berth_count.
- data/ports.csv vs ports.csv divergence now also covers 028 depth. This waits on the gated properties-only publish. No rebuild was done this cycle.

Sync: only this Dataset copy (root ports.csv) changed. Nothing was published live.
