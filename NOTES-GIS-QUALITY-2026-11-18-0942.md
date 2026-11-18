# GIS Quality Loop — 2026-11-18 09:42 MSK (tankers.csv QA, metadata-only, no geometry)

## Drift check (read-only)
- arctictradelanes.com home md5 c24e5823, /data/atlas.3996.geojson 6f1a2927, /data/ports.csv c6e72709, /api/health ok — unchanged.
- unicornsmap.com stats geoPinned 630 / peopleOnMap 514, bundle index-D072dq9N.js — unchanged.

## Changes (sourced)
### ARC-TNK-027 Stena Arctica (IMO 9305556)
- deadweight_tonnage 65000 -> 117100; length_m 183.0 -> 249.8; beam_m 32.0 -> 44.0; draft_m 11.0 -> 15.4; year_built 2011 -> 2005 (delivered end-2005, Hyundai Heavy Industries).
- Sources: Stena Bulk press releases
  - https://news.cision.com/stena-bulk/r/stena-bulk-in-major-deal-with-neste-oil,c233781
  - https://news.cision.com/stena-bulk/r/stena-bulk-focuses-on-safety-and-cooperation-with-russia-in-the-baltic-sea,c183355
  - Corroborating: Neste Oil release "MT Stena Arctica to sail under the Finnish flag" (2008-02-05), 117,100 dwt, LOA 249.79 m, beam 44 m, draft 15.4 m, built 2005.

### ARC-TNK-031 Thun Liverpool (IMO 9828998) / ARC-TNK-032 Thun London (IMO 9828986)
- deadweight_tonnage 16500 -> 18684; length_m 144.0 -> 149.8; beam_m 21.5 -> 22.8; draft_m 7.6 -> 9.4; year_built 2007/2008 -> 2019.
- Sources: operator fleet list https://thun.se/fleet-list/thun-tankers-fleet/ ; corroborated by https://thuntankers.com/fleetlist/ , https://www.gothiatankers.com/fleet-list/ , MF Shipping Group pages https://www.mfshippinggroup.com/en/fleetlist/thun-liverpool and /thun-london (BV class, 18,684 dwt, 2019).

## Flagged (not changed)
- 027: ice_class Arc4 vs official Finnish-Swedish 1A Super; cargo_type "Oil Products" vs source "crude oil" (no "Crude Oil" category in file yet); owner_operator Stena Bulk vs 2006 50/50 Stena Bulk / Neste Oil ownership and 2008 Neste Shipping management, Finnish flag (current owner not verified); country Sweden vs Finnish flag.
- 030 Seival (Varo Energy, 17,000 dwt, 2006): no matching tanker found in any authoritative source; the only SEIVAL found is IMO 9199115, a 2000-built Russian offshore tug/supply vessel (2,200 dwt) — not the same vessel. Row may be a placeholder; needs a decision.
- 031/032: ice_class Arc4 vs official 1C; country Sweden vs Netherlands flag (Delfzijl, MF Shipping Group co-managed).
- Unsourced columns on all rows: typical_arctic_route, annual_arctic_voyages, charter_rate_usd_per_day, insurance_premium_multiplier.
- Structural: ARC-TNK-051 Konstantin Posyet has 20 fields vs 15 in header (unquoted extra fields shift columns; cargo_type reads "98000"). Needs a CSV-structure fix, not done here.

## Next
- ARC-TNK-033..035 Finnlines (Prospero/Transpaper/Timca — check finnlines.com fleet; Transpaper/Timca are Finnlines-chartered ro-ros), 036/037 Grieg Star, 038+.
