# GIS quality notes — 2026-11-10 11:46 MSK (metadata-only, no geometry)

Sources:
- USCG Pacific Area, CGC Healy ship's characteristics: https://www.pacificarea.uscg.mil/Our-Organization/Area-Cutters/CGC-Healy/Ship/
  (length overall 419'9" / 128 m, beam 82' / 25 m, full-load draft 29'3" / 8.9 m, shaft horsepower 30,000 max, speed 17 kn)
- USCG "The Cutters, Boats and Aircraft" 2015-2016 edition: https://www.uscg.mil/Portals/0/documents/CG_Cutters-Boats-Aircraft_2015-2016_edition.pdf
  (range 16,000 nm at 12.5 kn; 37,000 nm at 9.25 kn)

Changes:
- ARC-ICE-025 USCGC Healy: power_kw 22000 -> 22371 (30,000 shp x 0.7457 kW/hp, shaft basis); operational_range_nm 40000 -> 37000 (official maximum range, at 9.25 kn). Length, beam, draft and 17 kn speed confirmed as already listed.

## Flagged, not changed
- ARC-ICE-025 year_built 1999: the Pacific Area page says commissioned 1999, while the 2015-2016 USCG publication says commissioned July 2000 (launched 1997). Left at 1999.
- ARC-ICE-026 Mackinaw is the Great Lakes icebreaker WLBB 30 per the same USCG publication; its "Arc4" ice class is still unsourced.
