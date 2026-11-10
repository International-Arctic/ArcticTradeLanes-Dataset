# GIS quality loop 2026-11-10 16:17 MSK

Health: no ATL or UM drift (ATL home c24e5823, /api/health ok; UM bundle index-CuvrFAFf, geoPinned 588, peopleOnMap 476, unicorns 303).

## Ex-Viking icebreakers now in Canadian Coast Guard service (metadata-only, no geometry)
The three Viking Supply Ships icebreaking AHTS vessels were bought by Canada in 2018 and converted by Davie into CCG medium icebreakers (Davie medium icebreaker programme page, https://www.davie.ca/en/projects/medium-icebrakers/: Vidar Viking -> CCGS Captain Molly Kool, Balder Viking -> CCGS Jean Goodwill, Tor Viking -> CCGS Vincent Massey).

- ARC-ICE-048 Vidar Viking -> "CCGS Captain Molly Kool (ex Vidar Viking)", owner Canadian Coast Guard, power 13440 kW, length 83.7, beam 18.0, draft 7.2, range 11000 nm. Official CCG fleet database (https://inter-j02.dfo-mpo.gc.ca/fdat/vessels/report/2243): "vessel purchased in 2018 - ex VIDAR VIKING", IMO 9199646, launched 2001 (matches year_built), home port St. John's NL.
- ARC-ICE-047 Balder Viking -> "CCGS Jean Goodwill (ex Balder Viking)", owner Canadian Coast Guard, power 13652 kW, length 83.7, beam 18.0, draft 7.2, range 11000 nm. Official CCG fleet database (https://inter-j02.dfo-mpo.gc.ca/fdat/vessels/report/2424): IMO 9199634, launched 2000 (matches), in service 2020, home port Dartmouth NS. Ex-name per Davie page.

## Flagged, not changed
- country "Sweden" and primary_service_route "Baltic and North Sea Operations" are outdated for 047/048 (now Canada, Atlantic Region). Not changed this cycle because build_atlas.py anchors icebreakers on route text with a country fallback, so these edits can move their schematic points; needs a gated rebuild decision first.
- ice_class Arc4: CCG lists DNV ICE-10 Icebreaker. Same ice-class notation question as ICE-037/040/042/044/049.
- service_speed_kn 15: CCG cruise speed 11 kn, maximum 16 kn.
- ARC-ICE-046 Tor Viking II -> CCGS Vincent Massey per Davie; its CCG fleet database page was not located this run, so the row is unchanged.
