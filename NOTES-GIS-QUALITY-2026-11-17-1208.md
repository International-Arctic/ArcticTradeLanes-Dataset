# GIS Quality Loop — 2026-11-17 12:08 MSK

Health: no ATL/UM drift (ATL home c24e5823, atlas.3996 6f1a2927, 1317 features, /api/health ok; UM index-D072dq9N.js, 630/514).

## icebreakers.csv (metadata-only, no geometry)
- ARC-ICE-025 USCGC Healy: service_speed_kn 17 -> 12.5 and operational_range_nm 37000 -> 16000.
  The row paired the 17 kn *maximum* speed with the 37,000 nm range that USCG gives only at 9.25 kn.
  USCG "The Cutters, Boats and Aircraft" 2015-16: "Range: 16,000 nautical miles at 12.5 knots; 37,000 miles at 9.25 knots"
  https://www.uscg.mil/Portals/0/documents/CG_Cutters-Boats-Aircraft_2015-2016_edition.pdf
  Same convention as ARC-ICE-023/024 Polar class (range at stated cruise speed).
- Verified unchanged vs USCG Pacific Area ship page (https://www.pacificarea.uscg.mil/Our-Organization/Area-Cutters/CGC-Healy/Ship/):
  LOA 128 m, beam 25 m, full-load draft 8.9 m, 30,000 shp (= 22,371 kW).

## Flagged
- ice_class "Polar Class 2" is not stated by USCG (USCG: 4.5 ft continuous at 3 kn); year 1999 vs commissioned 2000 (USCG Cutters book) / June 1999 (old datasheet).
