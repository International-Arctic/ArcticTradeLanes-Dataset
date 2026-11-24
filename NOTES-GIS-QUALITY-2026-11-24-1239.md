# GIS Quality Loop — 2026-11-24 12:39 MSK

## Drift check (vs 12:13 MSK baseline) — NO DRIFT
- ATL `/` md5 c24e5823 (111124 B); `/data/atlas.3996.geojson` md5 6f1a2927, 1317 features; `/data/ports.csv` md5 c6e72709; `/api/health` {"status":"ok"}
- UM bundle index-D072dq9N.js; `/api/stats.json` geoPinned 653 / peopleOnMap 537

## Fix (metadata-only, coords unchanged; no atlas rebuild/publish)
- ARC-PORT-023 Valdez Marine Terminal: max_depth_m 20.0 -> 27.43 (90 ft x 0.3048); last_verified 2026-11-24
  - Primary: NOAA U.S. Coast Pilot 9, Chapter 4 (22 NOV 2026 ed.), Valdez Marine Terminal "Wharves" (447)-(452):
    Berth No. 1 floating pier 99 ft alongside; Berth No. 3 90 ft; Berth No. 4 1,380 ft w/ dolphins, 90 ft alongside;
    Berth No. 5 1,385 ft, 85 ft alongside ("reported depths"; operator's TAPS Port Information Manual is definitive).
    https://nauticalcharts.noaa.gov/publications/coast-pilot/files/cp9/CPB9_C04_WEB.pdf
  - Operator: Berths 1 and 3 out of service; Berths 4 and 5 are the only operational berths.
    https://alyeska-pipe.com/valdez-marine-terminal/
  - Value = deepest active berth (Berth 4). Berth 1 (99 ft = 30.18 m) excluded as out of service. Alongside depth, not draught.

## Verified, no change
- ARC-PORT-017 Longyearbyen Port 9.0 m matches Port of Longyearbyen official Bykaia page (Depth 9 m; pin is on Bykaia)
  https://portlongyear.no/services/our-piers/bykaia-terminal/
  - Flag: Kullkaia (coal pier) page says 8 m in front of pier, 9.7 m lowest along fender edge, 11 m 2 m out (LAT)
    https://portlongyear.no/services/our-piers/kulkaia-coal-pier/ — port-wide max could be 9.7; left at 9.0 pending decision.

## Flags (not changed)
- 023 berth_count 4 vs 2 operational (Alyeska). 023 capacity/fees/calls/storage unsourced.
- Earlier open flags unchanged (PORT-160, 139 scope, berth_count 009/014/020/021/027/028/172, operators 009/021).
