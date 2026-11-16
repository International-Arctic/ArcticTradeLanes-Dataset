# GIS Quality Loop 2026-11-16 17:34 MSK

Health: unchanged (ATL /api/health ok, live atlas.3996 md5 6f1a2927, 1317 features; UM geoPinned 588, peopleOnMap 476).

## ARC-ICE-008 50 Let Pobedy (pr. 10521) — metadata-only, no geometry
Sources: state customer directorate (FKU Direktsiya goszakazchika), https://dgz.ru/deyatelnost_direktsii/sudostroenie/sudostroenie._realizovannyie_proektyi/atomnyiy_ledokol_50_let_pobedyi.html (RS class KM⍟ LL1 [2] A; 55 MW; 159.6 x 30 m; draft 11 m; 21 kn); Rosatomflot operating-fleet table, https://www.rosatomflot.ru/uslugi/rabota-atomnogo-ledokolnogo-flota/
- ice_class "Arc9/Polar Class 1" -> "LL1" (RS icebreaker class symbol, consistent with other rows using RS notation)
- Verified unchanged: 55000 kW, 159.6 x 30.0 x 11.0 m, 2007.
- Flagged, left: speed 21 kn (DGZ) vs 19.0 kn (Rosatomflot tariff table); range 70000 unsourced (nuclear, 7.5 months endurance).

## Correction to the 14:38 cycle — ARC-ICE-006/007 Taymyr, Vaygach
The Rosatomflot operating-fleet table above gives max length 151.8 m for Taymyr and Vaygach, while the Rosatomflot pr. 22220 comparison table gives 150.0 m. Two operator pages disagree, so the 14:38 change 151.8 -> 150.0 is reverted to the original 151.8 (flagged as conflicting).
- service_speed_kn 18.5 -> 20.2: both Rosatomflot tables (comparison table and operating-fleet table) give 20.2 kn for pr. 10580.
- Also from that table: Yamal 148.0 m and 20.8 kn (matches the 14:38 change).
