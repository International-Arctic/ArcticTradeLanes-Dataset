# GIS quality notes, 2026-11-09 18:22 MSK (gis-loop-1109-1822)

Metadata-only change to icebreakers.csv (no sources column, so provenance is recorded here). No geometry or atlas changes; the atlas carries the old properties until a future gated properties-only rebuild.

## Sources (official FSUE Atomflot / Rosatomflot pages, fetched 2026-11-09)
- A: https://www.rosatomflot.ru/flot/atomnye-ledokoly/deystvuyushie/ (active fleet: type ARKTIKA 1992 Yamal, 2007 50 Let Pobedy, 147.9 x 29.9 m, 75 000 hp, 20.8 kn; type TAYMYR 1989 Taymyr, 1990 Vaygach, 151.8 x 29.2 m, 50 000 hp, 18.5 kn; Project 22220 2020 Arktika, 2022 Sibir and Ural, 2024 Yakutia, 173.3 x 34 m (33 m at waterline), 22 kn)
- B: https://www.rosatomflot.ru/flot/universalnyy-atomnyy-ledokol-proekta-22220/ (comparison table: Pr. 1052 148.0/30.0 m, draft 11.0 m, 49 000 kW on shafts; Pr. 10580 150.0/29.2 m, draft 8.1 m, 32 500 kW on shafts; Pr. 22220 173.3/34.0 m, draft 10.5 m at waterline, 60 000 kW on shafts, about 22 kn)
- C: https://www.rosatomflot.ru/flot/sverhmoshnyy-atomnyy-ledokol-rossiya-proekta-10510/ (Rossiya: length overall 209.2 m, beam 47.7 m, draft 13.0 m, 120 MW on shafts, 23 kn specification speed)

## Corrected
- ARC-ICE-002 NS Sibir: year_built 2021 -> 2022 (A: entered the fleet in 2022).
- ARC-ICE-005 NS Rossiya: length_m 209.0 -> 209.2; service_speed_kn 24 -> 23 (C).
- ARC-ICE-006 Taymyr: year_built 1987 -> 1989 (A); draft_m 9.0 -> 8.1, power_kw 35000 -> 32500 on shafts (B).
- ARC-ICE-007 Vaygach: length_m 149.7 -> 151.8 (A); draft_m 9.0 -> 8.1, power_kw 35000 -> 32500 on shafts (B).

## Confirmed unchanged
- ARC-ICE-001..004 Project 22220: 60000 kW, 173.3/34.0/10.5 m, 22 kn; years 2020 / 2022 Ural / 2024 Yakutia match A.
- ARC-ICE-005: beam 47.7, draft 13.0, 120000 kW match C. Year 2028 (planned) is not on the page; left as is.
- ARC-ICE-009 Yamal: 150.0/30.0/11.0 m, 20.8 kn match the Yamal description on the atomnye-ledokoly page; 1992 matches A.

## Flagged, not changed
- ARC-ICE-008 50 Let Pobedy: A groups it under the Arktika type at 147.9 m, but the dataset's 159.6 m reflects its longer modified hull; no official per-ship figure found, left as is. Speed 21 vs type 20.8 left.
- ARC-ICE-008/009 power_kw 55000: matches 75 000 hp main plant (about 55.2 MW); B gives 49 000 kW on shafts. The column's basis (shaft vs plant) is mixed across rows.
- Taymyr-type speed: A says 18.5 kn, B's table says 20.2 kn; kept 18.5.
- ice_class "Arc9/Polar Class 1", operational_range_nm and charter rates for ICE-001..009 are unsourced on these pages.
- ARC-ICE-010 "Ob" still unverified.
