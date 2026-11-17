# GIS Quality Loop — 2026-11-17 15:10 MSK

Health: no ATL/UM drift (ATL home c24e5823, atlas.3996 6f1a2927, /api/health ok; UM index-D072dq9N.js, stats 630/514).

## ports.csv numeric-field hygiene (metadata-only, coordinates unchanged)
- ARC-PORT-146 Kemi Port (Ajos): berth_count "0" -> blank (placeholder; none of the cited sources gives a berth count).
- ARC-PORT-170 Cordova South Harbor: storage_area_sq_m "96000 sq ft float surface" -> blank (moorage float area in sq ft, not a
  storage area in m2; value kept verbatim in the sources/notes field, per the 2026-10-28 data-hygiene rule).

## Checked, no change
- Pin vs UNECE LOCODE coordinate: only ARC-PORT-128 Indiga is >25 km (50.6 km) from its UNECE point; it is a planned port pinned
  on the Cape Rumyanichny project site, which the planned-port rule requires, so it stays.
- ARC-PORT-155 Vopnafjörður max_depth_m 70.0 is sourced to arcticportal.org (">70 m" fjord depth); flagged as fjord rather than berth depth.
- port_fees_usd ranges ("25000-80000") are a range format used across 55 rows, not an error; left as is.

Sync: Dataset only; Zo canonical and the ATL-repo ports.csv copies take this at the next gated properties-only rebuild.
