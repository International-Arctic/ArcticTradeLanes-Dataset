# GIS quality notes, 2026-11-09 17:49 MSK (gis-loop-1109-1749)

icebreakers.csv has no sources column, so the provenance for this edit is recorded here. This is a metadata-only change to icebreakers.csv. There are no geometry or atlas changes; the atlas still carries the old properties until the parked gated rebuild.

## Corrected (official Canadian Coast Guard Fleet Data, CCG FDAT, only)
Sources: CCG FDAT vessel-details and vessel spec report pages, https://inter-j02.dfo-mpo.gc.ca/fdat/vessels/vessel-details/{id} and .../fdat/vessels/report/{id}
(St-Laurent 81, Terry Fox 108, Henry Larsen 70, Des Groseilliers 54, Pierre Radisson 91, Amundsen 3).

- ARC-ICE-016 CCGS Louis S. St-Laurent (IMO 6705937): ice_class Polar Class 2 -> Arctic Class 4; power_kw 20000 -> 20142; length_m 119.8 -> 119.6; operational_range_nm 42000 -> 28000. Beam 24.4, draft 9.9 and year 1969 (in service) are confirmed.
- ARC-ICE-017 CCGS Terry Fox (IMO 8127799): ice_class Polar Class 2 -> Arctic Class 4; power_kw 17500 -> 17300; beam_m 24.0 -> 17.8; operational_range_nm 35000 -> 20000. Length 88.0, draft 8.3 and year 1983 are confirmed.
- ARC-ICE-018 CCGS Henry Larsen (IMO 8409329): ice_class Polar Class 3 -> Arctic Class 4; power_kw 12900 -> 16080; length_m 98.0 -> 99.8; beam_m 19.8 -> 19.6; operational_range_nm 28000 -> 20000. Draft 7.2 and year 1987 are confirmed.
- ARC-ICE-019 CCGS Des Groseilliers (IMO 8006385): ice_class Polar Class 3 -> Arctic Class 3; power_kw 12900 -> 10142; length_m 98.0 -> 98.2; draft_m 7.2 -> 7.4; operational_range_nm 28000 -> 27000. Beam 19.8 and year 1982 are confirmed.
- ARC-ICE-020 CCGS Pierre Radisson (IMO 7510834): ice_class Polar Class 3 -> Arctic Class 3; power_kw 12900 -> 10142; length_m 98.0 -> 98.2; beam_m 19.8 -> 19.2; operational_range_nm 28000 -> 15000. Draft 7.2 and year 1978 are confirmed.
- ARC-ICE-021 CCGS Amundsen (IMO 7510846): ice_class Polar Class 3 -> Arctic Class 3; power_kw 12000 -> 10142; length_m 98.0 -> 98.2; operational_range_nm 25000 -> 35000. Beam 19.5, draft 7.2 and year 1979 are confirmed.

ice_class now uses the official CCG/CASPPR "Arctic Class" designation. The previous "Polar Class" values had no source.
power_kw is the single FDAT "Power" figure, which is the main-engine/installed power: for example 3 x Wartsila Vasa 16V32 = 16080 kW on Henry Larsen, and 6 x Alco M251F = 10142 kW on the R-class ships.
operational_range_nm is the FDAT "Cruising Range".

## Flagged, not changed
- service_speed_kn (16 for all six): FDAT gives maximum speeds of 18.0, 16.0, 16.0, 16.5, 16.7 and 16.0, and cruise speeds such as 13.5 and 14.0. The column could mean either, so it is left as is.
- ARC-ICE-022 CCGS John A. Macdonald (planned polar icebreaker): not in FDAT, so its specs are unverified.
- ARC-ICE-016 to 021: charter_rate_usd_per_day is unsourced. The CCG does not publish charter rates for these state vessels.
- Rosatomflot (ARC-ICE-001 to 009) could not be checked: rosatomflot.ru returned HTTP 500 or failed TLS from the box and the fetcher. ARC-ICE-010 "Ob" is still unverified.
