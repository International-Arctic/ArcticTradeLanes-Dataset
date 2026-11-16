# GIS Quality Loop 2026-11-16 10:36 MSK

Health: unchanged (ATL /api/health ok, live atlas.3996 md5 6f1a2927, 1317 features; UM geoPinned 588, peopleOnMap 476).

## ARC-ICE-036 Ale (metadata-only, no geometry)
Source: Sjöfartsverket vessel sheet ale_2026.pdf (https://www.sjofartsverket.se/globalassets/tjanster/isbrytning/vara-isbrytare/ale_2026.pdf).
- ice_class: Arc4 -> 1A Super (Finnish-Swedish ice class) ("Isklass: 1A Super").
- power_kw: 10500 -> 3450 (propulsion motors 2 x 1725 kW; main diesels 4 x 1258 hp = 4750 hp).
- length_m: 81.0 -> 50.8 (Sjöfartsverket press releases give 48.70 m; 50.8 per the current vessel sheet).
- beam_m: 19.0 -> 13.0; draft_m: 6.5 -> 5.4.
- Verified unchanged: built 1973 (Oy Wärtsilä Ab, Helsinki), open-water speed 14 kn, owner Sjöfartsverket.
- Flagged, left: range 15000 nm unsourced (no official range); route "Coastal and Port Operations" is generic (official: Lake Vänern / Gulf of Bothnia assistance) — route left because build_atlas anchors icebreakers by route text; charter rate unsourced.
