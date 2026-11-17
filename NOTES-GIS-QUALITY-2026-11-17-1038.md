# GIS Quality Loop — 2026-11-17 10:38 MSK

Health: no ATL/UM drift (ATL home c24e5823, atlas.3996 6f1a2927, 1317 features, /api/health ok; UM index-D072dq9N.js, 630/514).

## icebreakers.csv (metadata-only, no geometry; ice_class and speed are properties only)
- ARC-ICE-044 Kapitan Khlebnikov: ice_class Arc4 -> LL3 (RS KM LL3[2] A2 passenger), service_speed_kn 14 -> 18.
  Source: Rosmorport technical data quoted by PortNews https://portnews.ru/news/365810/ and https://portnews.ru/news/231988/
  (LOA 129.1 m, beam 26.75 m, draft 8.5 m, 18264 kW, 1981 verified unchanged).
- ARC-ICE-045 Kapitan Dranitsyn: ice_class Arc5 -> LL3 (RS KM(*) LL3[2] AUT2).
  Source: Rosmorport https://www.rosmorport.ru/filials/mur_news_main/2330/

## Flagged (not changed)
- 045 power_kw 18264 vs Rosmorport "24 000 hp" (~17.65 MW); length 122.5 vs 129 / 134.4 in secondary sources; speed 15 vs "about 13 kn cruise" (Marinek). Needs one primary Rosmorport spec sheet.
- 044 route "Tourism and Expedition": Rosmorport uses it for icebreaking at Magadan/Vanino (Far East basin). Route drives anchor geometry; not changed.
