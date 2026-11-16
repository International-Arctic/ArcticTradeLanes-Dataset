# GIS Quality Loop 2026-11-16 14:38 MSK

Health: unchanged (ATL /api/health ok, live atlas.3996 md5 6f1a2927, 1317 features; UM geoPinned 588, peopleOnMap 476).

## Russian nuclear icebreakers (metadata-only, no geometry)
Sources: operator Rosatomflot, https://www.rosatomflot.ru/flot/universalnyy-atomnyy-ledokol-proekta-22220/ (comparison table pr. 1052 / 10580 / 22220) and https://www.rosatomflot.ru/flot/atomnye-ledokoly/deystvuyushie/ ; designer CKB Iceberg, https://iceberg.org.ru/portfolio/ledokol-arktika/
- ARC-ICE-001..004 Arktika, Sibir, Ural, Yakutia (pr. 22220): ice_class "Arc9/Polar Class 1" -> "Icebreaker9" (RS class KM✪ Icebreaker9 AUT2-ICS EPP per designer; no IACS Polar Class notation sourced). Dims 173.3 x 34.0 x 10.5 m, 60,000 kW shaft, ~22 kn verified unchanged.
- ARC-ICE-006/007 Taymyr, Vaygach (pr. 10580): length_m 151.8 -> 150.0 (Rosatomflot LOA). Beam 29.2, draft 8.1, 32,500 kW shaft verified.
- ARC-ICE-009 Yamal (pr. 1052 Arktika type): length_m 150.0 -> 148.0, service_speed_kn 20.6 -> 20.8 (Rosatomflot). Beam 30.0, draft 11.0 verified.

Flagged, left:
- 001..004 operational_range_nm 75000: designer says range "unlimited" (no number); charter rates unsourced.
- 002 Sibir year 2022 (Rosatomflot list) vs designer delivery 24.12.2021; 004 Yakutia 2024 (Rosatomflot) vs designer 26.03.2025.
- 006/007 speed 18.5 vs Rosatomflot table 20.2 kn (Rosatomflot fleet page gives 18.5); ice class "Arc9/Polar Class 1" on 006..009 not yet checked against RS register.
- 008/009 power 55000 kW ≈ main plant 75,000 hp; Rosatomflot shaft power is 49,000 kW (definition differs, not changed). 008 50 Let Pobedy LOA 159.6 differs from base type 148.0 (it is a lengthened unit), not changed.
