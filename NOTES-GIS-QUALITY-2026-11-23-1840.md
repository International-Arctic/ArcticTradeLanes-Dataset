# GIS Quality Loop — 2026-11-23 18:40 MSK (UM + ATL)

## Health / drift (vs 18:20 baseline)
- ATL home 200, md5 c24e5823; /api/health {"status":"ok"} (ts 2026-11-23T15:36Z = 18:36 MSK); /data/atlas.3996.geojson md5 6f1a2927, 1317 features; /data/ports.csv md5 c6e72709. No ATL drift.
- UM /api/stats.json: geoPinned 653, peopleOnMap 537 (unchanged vs 18:20); home bundle index-D072dq9N.js unchanged. No UM drift.

## Theme: ports.csv max_depth_m (continued). Metadata-only, coords unchanged, LF line endings kept.
### Edit
- ARC-PORT-172 Kristiansand Port: max_depth_m 11.5 (unsourced) -> 13.2; last_verified 2026-10-27 -> 2026-11-23.
  - Source (official port authority, Kristiansand Havn KF): https://portofkristiansand.no/maritimt-og-trafikk/kai-og-terminaler/kristiansand (fetched 2026-11-23).
    Deepest listed berth: Kongsgård Berth 35 NOKRS-0016, 144 m, "Minimum depth: 13,2 m". Others: Berth 36 (Kongsgård, 307 m) 12,2 m; Berth 10 (cruise) 10,9 m; Berth 16 (Odderøya) 10,7 m; Berths 1/1A/1B (ferry) 6,6/8,8/8,7 m; pinned Containerterminalen Lagmannsholmen Berth 3 5,7 m, Berth 9 8,5 m, Berths 20/21 7,3 m.
  - Value is the port-wide deepest berth minimum depth, not the pinned berth (same convention as ARC-PORT-012/013).

## Checked, not changed
- ARC-PORT-173 Ningbo: root ports.csv already has CNNBG (UNECE cn.htm "CN NBG Ningbo Pt", function 1-------; CNNGB is "Ningbo Lishe International Apt", ---4----), fixed 2026-11-17 in 1cfb5fe. data/ports.csv (= live /data/ports.csv, md5 c6e72709) still carries CNNGB. The fix is waiting on the gated atlas/data publish, so no change here. The sources text still says "UN/LOCODE CNNGB" (stale wording).
- ARC-PORT-098 Seward 14.0: NOAA Coast Pilot 9 2026 ch.4 paras (964)-(966) give ARRC Cargo Dock 35 ft, Cruise Dock 38 / 33-35 ft, Coal Dock 52 ft (reported). The coal loading facility was closed per ARRC 2016, and the cruise dock was replaced by the new 2026 terminal (depth not in CP9), so there is no single confident value. Left; flag.
- ARC-PORT-023 Valdez Marine Terminal 20.0: CP9 para (447)-(448) confirms four deepwater berths (matches berth_count 4) but gives no depth (it refers to the operator's Port Information Manual). Left.
- ARC-PORT-018 Bodø 12.5: Bodø Havn gods page has no depth. "Minimum 11 m on 250 of 350 m" for Terminalkaia appears only in a 2017 press release quoted by an.no. Left.

## Flags
- 172 berth_count 12 vs 19 berths listed on the official page (including small 6A/6B 2,0 m, 12 3,2 m, 45 2,5 m). Not changed.
- data/ports.csv vs ports.csv diverge on unlocode for 072, 109, 148, 156, 161, 173. These are root-only fixes waiting on the gated publish.
