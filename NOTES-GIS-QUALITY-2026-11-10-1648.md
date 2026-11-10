# GIS quality loop 2026-11-10 16:48 MSK

Health: no ATL or UM drift (ATL home c24e5823, /api/health ok; UM bundle index-CuvrFAFf, geoPinned 588, peopleOnMap 476, unicorns 303).

## ARC-ICE-046 Tor Viking II -> CCGS Vincent Massey (metadata-only, no geometry)
Completes the ex-Viking trio started in NOTES-GIS-QUALITY-2026-11-10-1617.md.
Official CCG fleet database (https://inter-j02.dfo-mpo.gc.ca/fdat/vessels/report/2423): CCGS VINCENT MASSEY, Medium Icebreaker, owner Canadian Coast Guard, "Ex - THOR VIKING", IMO 9199622, launched 2000 (matches year_built), home region Central and Arctic.
- vessel_name -> "CCGS Vincent Massey (ex Tor Viking II)"; owner_operator -> Canadian Coast Guard.
- power_kw 14700 -> 13652, length_m 93.0 -> 83.7, beam_m 20.0 -> 18.0, draft_m 7.5 -> 7.2, operational_range_nm 20000 -> 11000.

## Flagged, not changed
- Same as 047/048: country "Sweden" and route "Baltic and North Sea Operations" are outdated, but route/country drive the icebreaker anchor in build_atlas.py, so they wait for a gated rebuild decision. Ice class (CCG: DNV ICE-10 Icebreaker) and service speed (CCG cruise 11 kn, max 16 kn) also left.
