# GIS Quality Loop — 2026-11-17 15:43 MSK

Health: no ATL/UM drift (ATL home c24e5823, atlas.3996 6f1a2927, /api/health ok; UM index-D072dq9N.js, stats 630/514).

## All-CSV geo hygiene scan (no change)
- Column widths consistent in all 15 CSVs; no null-island, out-of-range or non-numeric coordinates except rows that are
  intentionally coordinate-less (ARC-FAC-352, ARC-SHIP-022/025/075; builder skips them).
- entrepreneur_programs.csv: 65 shared coordinates (programs share host-city points; expected).

## Flagged: duplicate stacked port pin in the live atlas
- ARC-PORT-074 "Cape Blossom Regional Port (planning — Kotzebue)" and ARC-PORT-123 "Cape Blossom Deep-Water Port (proposed)"
  are the same planned project, with identical UNECE code USOTZ and identical pin 66.7341667, -162.4950000. Both are
  live in atlas.3996.geojson at the same EPSG:3996 point (-778640.374, 2468780.519), so users see two stacked pins.
- The builder's soft-dedupe (identical cleaned LOCODE + rounded pin, keep lowest id) in the repo copy of
  atlas-proj/build_atlas.py should already drop ARC-PORT-123; it is still live, so the Zo canonical builder or its inputs differ
  from the repo copy (to investigate). The Lavna alias ARC-PORT-164 is correctly dropped live.
- Dropping 123 changes the feature count (1317 -> 1316), so it is NOT a properties-only change; it needs an explicit gated rebuild
  decision. No CSV change made this cycle.
