# GIS Quality Loop 2026-11-16 11:34 MSK

Health: unchanged (ATL /api/health ok, live atlas.3996 md5 6f1a2927, 1317 features; UM geoPinned 588, peopleOnMap 476).

## ARC-ICE-033 Oden (+ quarantined duplicate ARC-ICE-043 kept in sync) (metadata-only, no geometry)
Source: Sjöfartsverket vessel sheet oden_2026.pdf (https://www.sjofartsverket.se/globalassets/tjanster/isbrytning/vara-isbrytare/oden_2026.pdf).
- ice_class: Polar Class 2 -> GL 100 A5 ARC3 ("Isklass: GL 100 A5 ARC3").
- beam_m: 31.0 -> 31.2 (31.20 m).
- service_speed_kn: 16 -> 17 (max open-water speed; normal cruise 12 kn).
- Verified unchanged: length 107.8 (107.75 m), draught 8.5 (7–8.5 m), built 1988 (Götaverken Arendal), power 18000 kW (sheet: 4 x Sulzer 8ZA 405, 24,500 hp ≈ 18,020 kW).
- ARC-ICE-043 is the same vessel (already quarantined, pin dropped by ATL_ICE_SAME_AS_DROP); updated identically so the duplicate does not contradict the canonical row.
- Flagged, left: range 35000 nm and charter rate unsourced.
