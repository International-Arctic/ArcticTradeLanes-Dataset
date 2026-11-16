# GIS Quality Loop 2026-11-16 18:06 MSK

Health: unchanged (ATL /api/health ok, live atlas.3996 md5 6f1a2927, 1317 features; UM geoPinned 588, peopleOnMap 476).

## ARC-ICE-033 Oden (and quarantined duplicate ARC-ICE-043) — metadata-only, no geometry
Source: Swedish Maritime Administration fact sheet, https://www.sjofartsverket.se/globalassets/tjanster/isbrytning/vara-isbrytare/oden_2026.pdf ("Oden klarar 27000 nautiska mil/100 dagar på öppet hav").
- operational_range_nm 35000 -> 27000 (both rows; route text untouched, so anchors unchanged).
- Verified unchanged: GL 100 A5 ARC3, 107.8 x 31.2 x 8.5 m, 24,500 hp (~18,000 kW), 17 kn max open-water (2026 PDF; web page says 16 kn), built 1988 (in service Jan 1989).

## Verified, no change
- Arctia fleet page https://arctia.fi/en/fleet/: Polaris (027), Voima (028), Urho (029), Sisu (030), Otso (031), Kontio (032), Nordica (038), Fennica (039) length/breadth/draught/power all match.
- SMA fact sheets: Ymer (035) 104.7 x 23.8 x 8.3 m, 16,240 kW, 18 kn, 1A Super — match. Ale (036) 50.8 x 13.0 x 5.4 m, 3,450 kW propulsion, 14 kn, 1973 — match (range 15000 unsourced).

## Flagged, left
- ARC-ICE-034 Atle length: SMA Swedish 2026 sheet says 109.5 m, SMA English sheet says LOA 104.70 m; two official pages disagree, row keeps 109.5.
- Frej (Atle class, SMA) has no row; adding it would add an atlas feature, so it needs an intentional gated rebuild.
