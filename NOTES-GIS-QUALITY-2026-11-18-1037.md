# GIS Quality Loop — 2026-11-18 10:37 MSK

## Drift check (read-only)
- arctictradelanes.com home c24e5823, atlas.3996 6f1a2927, ports.csv c6e72709 (md5), /api/health ok — unchanged.
- unicornsmap.com geoPinned 630 / peopleOnMap 514, bundle index-D072dq9N.js — unchanged.

## Changes (sourced, metadata-only, no geometry)
### ARC-TNK-034 Transpaper -> Tavastland (ex-Transpaper), IMO 9334959
- Operator page: https://wallenius-sol.com/en/fleet/mv-tavastland (T-class RoRo, Swedish flag, built 2006 Aker Yards Rauma; LOA 190.80 m, beam 26.44 m, full-load draft 7.80 m, DWT 15,960 t).
- Rename date: shipspotting.com record for IMO 9334959 (ex-Transpaper until Dec 2016).
- vessel_name -> "Tavastland (ex-Transpaper)"; owner_operator Finnlines -> Wallenius SOL; deadweight_tonnage 28000 -> 15960; length_m 180.0 -> 190.8; beam_m 26.0 -> 26.4; draft_m 8.5 -> 7.8; year_built 2001 -> 2006.

### ARC-TNK-035 Timca, IMO 9307358
- Operator page: https://www.transfennica.com/fleet-equipment/fleet/mv-timca (length 205 m, deadweight 12,200/17,400 t, ice class 1A Super); listed in the Transfennica fleet (Spliethoff Group).
- Year: ferry-site.dk (id 9307358) and maritime-database.com both give built 2006.
- owner_operator Finnlines -> Transfennica; length_m 180.0 -> 205.0; year_built 2003 -> 2006.

## Flagged (not changed)
- 035 deadweight: the operator gives two figures (12,200/17,400 t) and databases give summer 18,250 t, so 28000 is wrong but no single value could be picked; beam (25.5 vs 26 m in databases) and draft not on operator page.
- 034/035 ice_class Arc4 vs operator FSICR 1A Super (035); country column (034 now Swedish flag, 035 Dutch flag).
- 033 "Prospero": no Finnlines ro-ro by that name found yet.
- Unsourced columns on all rows: typical_arctic_route, annual_arctic_voyages, charter_rate_usd_per_day, insurance_premium_multiplier.

## Next
- 033 Prospero, 036/037 Afina/Bulknes (Grieg Star?), 038-043 offshore, 044 Viktor Chernomyrdin (an LK-25 icebreaker, not research/supply), 049/050.
