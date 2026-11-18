# GIS Quality Loop — 2026-11-18 11:06 MSK

## Drift check (read-only)
- arctictradelanes.com home c24e5823, atlas.3996 6f1a2927, ports.csv c6e72709 (md5), /api/health ok — unchanged.
- unicornsmap.com geoPinned 630 / peopleOnMap 514, bundle index-D072dq9N.js — unchanged.

## Change (sourced, metadata-only, no geometry)
### ARC-TNK-044 Viktor Chernomyrdin (IMO 9658630, Project 22600 / LK-25)
- Source: FSUE Rosmorport icebreaking services table, https://www.rosmorport.ru/filials/spb_serv_led/ — class KM(*) Icebreaker8 [2] AUT1-ICS ...; length, beam, draft 143.6 / 29.0 / 8.5 (min) - 9.7 (max) m; power 34,800 kW; endurance 60 days.
- ice_class Arc5 -> Icebreaker8; length_m 95.0 -> 143.6; beam_m 22.0 -> 29.0; draft_m 7.5 -> 9.7 (max); year_built 2020 unchanged (delivery certificate 2020-09-30, PortNews).

## Flagged (not changed)
- 044 is an icebreaker, not a tanker/research-supply ship: cargo_type "Research/Supply" is wrong, and it is missing from icebreakers.csv (power 34,800 kW and 60-day endurance would fit there). Moving it between files needs a decision.
- 044 deadweight_tonnage 22000 is unsupported (published DWT ~7,000-8,321 t; ~22,000 t is the displacement). Not changed because no official DWT was found.
- Length: Rosmorport gives 143.6 m; secondary sources give LOA 146.8 m.

## Next
- 033 Prospero, 036/037 Afina/Bulknes, 038-043 offshore, 049/050 NewNew placeholders.
