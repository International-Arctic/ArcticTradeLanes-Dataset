# GIS Quality Loop — 2026-11-18 10:08 MSK

## Drift check (read-only)
- arctictradelanes.com home md5 c24e5823, /data/atlas.3996.geojson 6f1a2927, /data/ports.csv c6e72709, /api/health ok — unchanged.
- unicornsmap.com stats geoPinned 630 / peopleOnMap 514, bundle index-D072dq9N.js — unchanged.

## Changes (sourced, metadata-only, no geometry)
Source: operator fleet page of Nornickel's Murmansk Transport Branch (МТФ ПАО «ГМК «Норильский никель»), https://www.mtf-nn.ru/fleet.html (RS class KM* Arc7 1 AUT2; LOA 169.04 m; moulded beam 23.10 m, overall 26.45 m; summer-load draft 10.0 m).
Corroborating: Port of Hamburg vessel page (Monchegorsk IMO 9404015, 169.04 m, 2008).

### ARC-TNK-046 Monchegorsk (IMO 9404015)
- ice_class Arc4 -> Arc7; deadweight_tonnage 15000 -> 18486 (summer load line; Arctic-draft dwt 14020); length_m 140.0 -> 169.0; beam_m 21.0 -> 23.1; draft_m 7.8 -> 10.0; year_built 2007 -> 2008 (07.2008, Wismar).

### ARC-TNK-048 Norilsk Nickel (vessel) -> Norilskiy Nickel (IMO 9330836)
- vessel_name set to the operator's official English name; ice_class Arc4 -> Arc7; deadweight_tonnage 14000 -> 18095; length_m 138.0 -> 169.0; beam_m 20.5 -> 23.1; draft_m 7.6 -> 10.0; year_built 2006 unchanged (28.02.2006, Helsinki).

## Flagged (not changed)
- 045 "Severny Polyus" and 047 "Pechenga": not in the operator fleet list (which lists Monchegorsk, Zapolyarnyy, Norilskiy Nickel, Talnakh, Nadezhda + a 2011 Arc7 unit); may be placeholders — needs a decision. Real sister hulls Zapolyarnyy (9404027), Talnakh (9404039), Nadezhda (9404041) are absent from the file.
- cargo_type "General Cargo/Nickel" vs operator role (Arctic container/general cargo, 648-650 TEU).
- Unsourced columns on all rows: typical_arctic_route, annual_arctic_voyages, charter_rate_usd_per_day, insurance_premium_multiplier.
- Correction to 09:42 note: ARC-TNK-051 is NOT structurally broken — its fields are properly quoted; a CSV parser reads 15 fields on every row (the 20-field count was a naive comma split).

## Next
- ARC-TNK-033..035 Finnlines, 036/037 Grieg Star names (Afina/Bulknes do not look like Grieg Star "Star *" names), 038-043 offshore, 044, 049/050.
