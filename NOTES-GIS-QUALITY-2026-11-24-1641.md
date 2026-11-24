# GIS Quality Loop — 2026-11-24 16:41 MSK

## Drift check (vs 16:05 MSK baseline): NO DRIFT
- ATL `/` 200, 111124 B, md5 c24e5823; `/data/atlas.3996.geojson` md5 6f1a2927, 1317 features; `/data/ports.csv` md5 c6e72709; `/api/health` {"status":"ok"} (ts 2026-11-24T13:41:36Z = 16:41 MSK)
- UM (unicornsmap.com) bundle index-D072dq9N.js; `/api/stats.json` geoPinned 653 / peopleOnMap 537

## Fix (metadata-only, coords unchanged; no atlas rebuild/publish)
- ARC-PORT-036 Tiksi East Port (pin = OSM East Pier No.1, berths 11/12): max_depth_m 7.0 -> 5.8; last_verified 2026-11-24
  - Source: Mintrans order No.50 of 14.02.2017, "Obligatory Regulations in seaport Tiksi". It is still in force, and no replacement order was found. Official publication: http://publication.pravo.gov.ru/document/0001201703160003
  - Annex 3: berths No.11 and No.12 (East Pier No.1) have a design length of 157.5 m and a depth at berth of 5.8 m. Berth No.10 is 4.0 m. Berths 1-4, 13 and 14 (East Pier No.2) are decommissioned.
  - Para 61: the port accepts ships up to 140 m LOA and 5 m draught. Para 62: ships up to 8 m draught may anchor in the port waters.
  - Corroboration (secondary): Morvesti 2024-07-15 and 2024-09-13 (Rosmorrechflot) give a permitted draught of 5 m at berths 11-12 and 6-7 m on the approach fairway.

## Verified unchanged (official sources, checked 2026-11-24)
- ARC-PORT-089 Grundarfjörður 9.5: https://grundport.is/port-information/ says Berth No.1 (Norðurgarður 1) is 135 m long with 9.5 m depth at lowest tide. Berth 2 is 8.0 m on its first 100 m, then 6.5 m.

## Flags / leads (not changed)
- ARC-PORT-044 Anadyr 8.5: Rosmorport's official leasing page (https://www.rosmorport.ru/filials/vaf_leasing/) gives cargo berths No.12 and No.13 a design depth of 7.5 m. Their actual depth is 7-9 m (No.12) and 7.3-11.5 m (No.13). The 2017 Mintrans order No.459 (now repealed) said 7.1 m for berths 12/13 and 10.25 m for berth 10. The pin is the harbour landuse centroid, not one berth. 8.5 is not clearly contradicted, so it needs a decision: design 7.5 or leave as is.
- ARC-PORT-087 Piteå: draught vs depth question still parked.
