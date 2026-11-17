# GIS Quality Loop — 2026-11-17 10:06 MSK

Health: no ATL/UM drift (ATL home c24e5823, atlas.3996 6f1a2927, 1317 features, /api/health ok; UM index-D072dq9N.js, 630/514).

## icebreakers.csv (metadata-only, no geometry; ice_class and speed are properties only in build_atlas.py)
- ARC-ICE-049 Nathaniel B. Palmer: service_speed_kn 14 -> 12 (USAP "Endurance 15,000 NM @ 12 knots");
  ice_class "Polar Class 4" -> "ABS Ice Class A2" (USAP: classification ABS A1, AMS, E, ACC, Ice Class A2).
  Source: https://www.usap.gov/USAPgov/vesselScienceAndOperations/documents/NBP_Systems.pdf
- Verified unchanged: LOA 94.0 m, breadth 18.3 m, design draft 6.8 m, 1992, range 15000 nm, 9500 kW (12,700 SHP total shaft power), owner Offshore Service Vessels LLC / charter Leidos ASC.

## Flagged
- primary_service_route "Antarctic and Arctic Research": USAP describes Antarctic operations; route drives anchor geometry, so not changed here.
