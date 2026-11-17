# GIS Quality Loop — 2026-11-17 11:43 MSK

Health: no ATL/UM drift (ATL home c24e5823, atlas.3996 6f1a2927, 1317 features, /api/health ok; UM index-D072dq9N.js, 630/514).

## icebreakers.csv (metadata-only, no geometry)
- ARC-ICE-017 Terry Fox: service_speed_kn 16 -> 13.5 (CCG FDAT cruising speed; max 16). LOA 88, breadth 17.8, draft 8.3, range 20000, 17300 kW, 1983, Arctic Class 4 verified. https://inter-j02.dfo-mpo.gc.ca/fdat/vessels/108
- ARC-ICE-022 CCGS Arpatuuq (Davie/Helsinki Shipyard "Polar Max"): power_kw NULL -> 18000 (ABB Azipod propulsion power 18 MW, https://helsinkishipyard.fi/abb-azipod-propulsion-to-power-new-canadian-icebreaker-polar-max/);
  service_speed_kn 18 -> NULL (18 kn is the *Seaspan* polar icebreaker CCGS Imnaryuaq top speed per seaspan.com; no published speed for Arpatuuq).
  139 m, Polar Class 2, delivery 2030 verified per PSPC https://www.canada.ca/en/public-services-procurement/news/2025/03/construction-of-new-polar-icebreakers-for-the-canadian-coast-guard.html

## Flagged
- CCGS Imnaryuaq (Seaspan, 158.2 m, PC2, 46 MW installed, 18 kn top, delivery by 2032) has no icebreakers.csv row; adding a feature needs a gated rebuild (count 1317 -> 1318).
