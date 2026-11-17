# GIS Quality Loop — 2026-11-17 11:09 MSK

Health: no ATL/UM drift (ATL home c24e5823, atlas.3996 6f1a2927, 1317 features, /api/health ok; UM index-D072dq9N.js, 630/514).

## icebreakers.csv (metadata-only, no geometry)
service_speed_kn held the CCG *maximum* speed; set to the CCG Fleet (FDAT) *cruising* speed, same convention as ARC-ICE-046..048:
- ARC-ICE-016 Louis S. St-Laurent 16 -> 15 (max 18) — https://inter-j02.dfo-mpo.gc.ca/fdat/vessels/81
- ARC-ICE-018 Henry Larsen 16 -> 13.5 (max 16) — /fdat/vessels/70
- ARC-ICE-019 Des Groseilliers 16.5 -> 12 (max 16.5) — /fdat/vessels/54
- ARC-ICE-020 Pierre Radisson 16.7 -> 14 (max 16.7) — /fdat/vessels/91
- ARC-ICE-021 Amundsen 16 -> 14 (max 16) — /fdat/vessels/3
Verified unchanged vs FDAT: LOA, breadth, draft, cruising range, ice class (Arctic Class 4/3) for all five.

## Flagged
- 016 year_built 1969 vs FDAT "Year Launched 1968" (1969 may be commissioning year); not changed.
- 017 Terry Fox FDAT page did not load this cycle; recheck.
