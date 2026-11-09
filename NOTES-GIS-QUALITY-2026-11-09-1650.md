# GIS quality notes, 2026-11-09 16:50 MSK (gis-loop-1109-1650)

icebreakers.csv has no sources column, so the provenance for this edit is recorded here. Metadata only. No geometry or atlas change; the atlas properties update at the next gated rebuild.

## Corrected (official FSUE Rosmorport sources only)
- ARC-ICE-011 Novorossiysk: power_kw 25700 -> 18000; length_m 142.0 -> 119.8; beam_m 27.8 -> 27.5; draft_m 8.7 -> 8.5; year_built 2019 -> 2016.
  - https://www.rosmorport.com/news/photoarchive/company/24824/ (acceptance certificate signed 26 Dec 2016; length 119.8 m, breadth 27.5 m, draft 8.5 m, 17 kn)
  - https://www.rosmorport.ru/news/company/32368/ (Project 21900M series of 3, Vladivostok, Murmansk and Novorossiysk, built 2012-2016, power 18 MW)
- ARC-ICE-012 Vladivostok, ARC-ICE-013 Murmansk: power_kw 25700 -> 18000.
  - https://www.rosmorport.ru/news/company/32368/ and https://www.rosmorport.ru/news/company/32424/ (both name these ships as 18 MW Project 21900M, built at Vyborg Shipyard 2012-2016)

## Flagged, not changed (no official per-vessel source found this cycle)
- ARC-ICE-012/013 year_built 2019/2020 contradicts the official statement that the series was built 2012-2016. Secondary reports (shipyard via PortNews) give deliveries of Oct 2015 for Vladivostok and 25 Dec 2015 for Murmansk. Their length, beam and draft are still the copy-pasted 142.0/27.8/8.7, while the official figures for sister Novorossiysk are 119.8/27.5/8.5.
- ARC-ICE-010 "Ob": the official sources do not list it as part of the Rosmorport 21900M series. Its specs are identical copies of the other rows. Identity and specs are unverified.
- ARC-ICE-010..013: ice_class "Arc7" is unsourced. Secondary sources give the RS class KM Icebreaker6 for the 21900M ships. operational_range_nm, charter_rate_usd_per_day and the route are also unsourced.
