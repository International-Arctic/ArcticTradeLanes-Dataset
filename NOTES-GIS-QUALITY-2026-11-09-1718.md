# GIS quality notes, 2026-11-09 17:18 MSK (gis-loop-1109-1718)

icebreakers.csv has no sources column, so the provenance for this edit is recorded here. This is a metadata-only change with no geometry or atlas changes.

## Corrected (official FSUE Rosmorport sources only)
- ARC-ICE-012 Vladivostok: length_m 142.0 -> 119.8; beam_m 27.8 -> 27.5; draft_m 8.7 -> 8.5; year_built 2019 -> 2015.
- ARC-ICE-013 Murmansk: length_m 142.0 -> 119.8; beam_m 27.8 -> 27.5; draft_m 8.7 -> 8.5; year_built 2020 -> 2015.
- ARC-ICE-011, 012, 013: ice_class Arc7 -> Icebreaker6 (the RS class given officially is "KM(*) Icebreaker6 [2] AUT1-ICS FF2 EPP ECO HELIDECK Special purpose ship").
  - Sources: https://www.rosmorport.ru/spb_serv_led.html, the North-West Basin Branch icebreaker spec table. It gives 119.8 / 27.5 / 8.5 m and the class above for Vladivostok, Murmansk and Novorossiysk.
  - https://www.rosmorport.ru/spb_history.html (North-West Basin Branch history): newly built Project 21900M icebreaker "Vladivostok" transferred to the branch Nov 2015 (order of 25.11.2015 No 668). "Murmansk" transferred Dec 2015 (order of 25.12.2015 No 756). "Novorossiysk" transferred Dec 2016 (order of 26.12.2016 No 646), which matches the 2016 set in the 16:50 cycle.

## Flagged, not changed
- power_kw: the Rosmorport spec table gives 27 840 kW for all three ships, which is installed or main-engine power. The Rosmorport news pages cited in the 16:50 notes give 18 MW, which is propulsion power. The column definition is ambiguous, so 18000 is left as is.
- ARC-ICE-010 "Ob": not listed in the Rosmorport North-West branch icebreaker table or in its history, so its identity and specs are still unverified.
- ARC-ICE-010 to 013: operational_range_nm, charter_rate_usd_per_day and the route are still unsourced. The official endurance figure is 31 days in ice and 70 days in open water, which is not a range in nautical miles.
