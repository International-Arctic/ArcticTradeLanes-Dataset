# GIS Quality Loop — 2026-11-17 14:09 MSK

Health: no ATL/UM drift (ATL home c24e5823, atlas.3996 6f1a2927, /api/health ok; UM index-D072dq9N.js, stats 630/514).

## icebreakers.csv (metadata-only, no geometry)
- ARC-ICE-038 MSV Nordica and ARC-ICE-039 MSV Fennica: operational_range_nm 22000 -> NULL (unsourced). Arctia's official vessel
  sheets give endurance only ("Duration, 13 knots abt. 45 days; 11 knots abt. 67 days" at 8.4 m draught), not a range in nm.
  Sources: https://www.arctia.fi/media/dokumentit/alusesitteet/icebreakers/nordica_2025.pdf , .../fennica_2025.pdf
- Verified unchanged against Arctia fleet pages (arctia.fi/en/fleet/multipurpose-icebreaker-nordica.html / -fennica.html):
  built 1994 / 1993, PC 3, speed 16 kn, length 116 m, breadth 26 m, operational draught 7.9 m, propulsion power 15 MW.

## Flagged (not changed)
- Fennica LOA: Arctia web page says 116 m, Arctia 2025 PDF sheet says 118.0 m. Row keeps 116.0 (web page + ILS designer page agree).
- Icebreakers 001-050 have now all been touched by this loop; next cycles move to ports QA.
