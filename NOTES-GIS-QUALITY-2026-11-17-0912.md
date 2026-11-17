# GIS Quality Loop — 2026-11-17 09:12 MSK

Health: ATL home c24e5823, /api/health ok, atlas.3996 md5 6f1a2927 (1317 features) unchanged. UM bundle now index-D072dq9N.js (was index-CuvrFAFf.js); stats geoPinned 630 / peopleOnMap 514 (was 588/476).

## icebreakers.csv (metadata-only, no geometry)
- ARC-ICE-046 CCGS Vincent Massey, 047 CCGS Jean Goodwill, 048 CCGS Captain Molly Kool: service_speed_kn 15 -> 11
  (CCG Fleet FDAT "Cruising Speed (kts): 11", max 16). Sources:
  https://inter-j02.dfo-mpo.gc.ca/fdat/vessels/2423 , /2424 , /2243
- Verified unchanged against the same pages: LOA 83.7 m, beam 18 m, draft 7.2 m, range 11000 nm, power 13652/13652/13440 kW, launched 2000/2000/2001.

## Flagged (not changed — would move geometry; needs intentional-geometry gated rebuild)
- 046-048 `country` = Sweden, but owner is Canadian Coast Guard, port of registry Ottawa (FDAT). `country` feeds `_route_anchor`, so fixing it moves the icebreaker anchor.
- 046-048 `primary_service_route` = "Baltic and North Sea Operations"; FDAT home regions: 2423 Central and Arctic, 2424 Atlantic (Dartmouth NS), 2243 Atlantic (St. John's NL). Route text also drives the anchor.
- Ice class "Arc4" is not a CCG designation; FDAT lists DNV ICE-10 Icebreaker.
