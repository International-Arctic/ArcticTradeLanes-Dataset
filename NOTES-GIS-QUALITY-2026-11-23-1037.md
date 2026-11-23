# GIS Quality Loop — 2026-11-23 10:37 MSK

Drift check: no drift. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927, /data/ports.csv c6e72709,
/atlas.4326.geojson 1c2e6a85, /api/health ok. UM bundle index-D072dq9N.js (md5 unchanged since 10:07), /api/people.json count 535.

## ports.csv (metadata-only, coordinates unchanged)
| id | field | old | new | source |
|---|---|---|---|---|
| ARC-PORT-155 Vopnafjörður | max_depth_m | 70.0 | 10.0 | mbl.is 200 mílur harbour register, https://www.mbl.is/200milur/hafnir/hofn/125/ : "Lengd bryggju 350,0 m; Lengd bryggjukanta 440,0 m; Dýpi við bryggju 9,0 m; Mesta dýpi við bryggju 10,0 m á 154,0 m kafla" |

The 70.0 came from arcticportal.org (">70 m" transshipment-site / fjord depth), which is not a berth depth. This was flagged in the
2026-11-17 15:10 notes. The old value is kept in the row's sources field. last_verified is now 2026-11-23.

## Flags (not changed)
- Other published figures are lower: NaviBoss/ADMIRALTY-derived max draught 7.5 m (1 terminal); NGA WPI via Cogoport cargo pier 4.9-6.1 m
  (old). Draught is not depth, so 10.0 (greatest depth at quay) stays consistent with how other rows use max_depth_m.
- ice_class_support "None": NaviBoss says "The harbour is subject to occasional incursions of polar ice". Flag only.
- berth_count 3 is not stated by mbl.is (it gives total berthing length 440 m). Not changed.

Sync: only this Dataset copy (ports.csv) changed, the same as the 2026-11-17 ports changes. Dataset data/ports.csv, the 8 ATL-repo copies
and the Zo canonical (all c6e72709, matching live) take this at the next gated properties-only rebuild. Nothing was published live.
