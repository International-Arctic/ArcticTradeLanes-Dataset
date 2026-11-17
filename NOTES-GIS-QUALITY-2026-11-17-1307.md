# GIS Quality Loop — 2026-11-17 13:07 MSK

Health: no ATL/UM drift (ATL home c24e5823, atlas.3996 6f1a2927, 1317 features, /api/health ok; UM index-D072dq9N.js, 630/514).

## icebreakers.csv (metadata-only, no geometry)
- ARC-ICE-009 Yamal (pr. 10521): power_kw 55000 -> 54000 (Rosatomflot operating-fleet table "Пропульсивная мощность, МВт 54,0");
  operational_range_nm 68000 -> NULL (unsourced; Rosatomflot gives autonomy 7.5 months, not a range — same treatment as ARC-ICE-005/010).
  Source: https://www.rosatomflot.ru/uslugi/rabota-atomnogo-ledokolnogo-flota/ (table, via search snapshot; page returned HTTP 500 to direct fetch this cycle)
- Verified unchanged: LOA 148.0 m, beam 30.0 m, draft 11.0 m (rosatomflot.ru/flot/atomnye-ledokoly/), speed 20.8 kn, in service 1992.

## Flagged
- ice_class "Arc9/Polar Class 1": RS notation KM(★) Icebreaker9 seen only in secondary sources; not changed.
