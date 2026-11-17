# GIS Quality Loop — 2026-11-17 12:35 MSK

Health: no ATL/UM drift (ATL home c24e5823, atlas.3996 6f1a2927, 1317 features, /api/health ok; UM index-D072dq9N.js, 630/514).

## icebreakers.csv (metadata-only, no geometry)
- ARC-ICE-026 USCGC Mackinaw: service_speed_kn 15 -> 12, operational_range_nm 9000 -> 4000.
  Row paired the 15 kn maximum speed with the 9,000 nm range USCG gives only at 9 kn.
  USCG Ninth District cutter page: "Maximum Range 4,000 NM @ 12 kts; 9,000 NM @ 9 kts", Maximum Speed 15 kn
  https://www.atlanticarea.uscg.mil/Our-Organization/District-9/Ninth-District-Staff/Prevention-Division/Cutters/MACKINAW/Characteristics/
  (uscg.mil asset page also: "Range: 4,000 nautical miles"). Same convention as ARC-ICE-023/024/025.
- Verified unchanged: 240 ft (73.2 m), beam 58.5 ft (17.8 m), draft 16 ft (4.9 m), 9,119 shp (3.4 MW/pod, ~6.8 MW).

## Flagged
- ice_class "Arc4" is not a USCG designation (USCG: 32 in level ice at 3 kn). year_built 2005 = launch (commissioned 2006).
