# GIS Quality Loop — 2026-11-18 13:36 MSK

## Drift check (read-only)
- arctictradelanes.com home c24e5823, atlas.3996 6f1a2927, ports.csv c6e72709 (md5), /api/health ok — unchanged.
- unicornsmap.com geoPinned 630 / peopleOnMap 514, bundle index-D072dq9N.js — unchanged.

## Changes (sourced, metadata-only, no geometry) — icebreakers.csv
### ARC-ICE-052 MS Stark (Kirkenes Havn KF)
- year_built "pre-2024 (acquired 2024)" -> "1974/1975 (operator pages differ; acquired 17-Apr-2024)".
- Sources: Kirkenes Havn https://kirkeneshavn.no/nyheter/ms-stark/ ("bygd i 1975") and https://kirkeneshavn.no/nyheter/ms-stark-1/ ("bygget i 1974"); purchase date 17 April 2024 per KOFA decision 2026/0354 (klagenemndssekretariatet.no). The second page also says the vessel was originally built for icebreaking pilot transport.

### ARC-ICE-053 New Swedish icebreaker (HD Hyundai HHI; name not yet decided)
- power_kw "unknown (diesel-electric propulsion)" -> "~21000 (total shaft power, diesel-electric)"; beam_m unknown -> 28.0.
- Sources: World Ports Organization article "Sweden ordered its icebreakers from South Korea..." (126 m x 28 m, ~21 MW total shaft power, ~15,000 t displacement, PC4, end-2029 delivery; HHI contract USD 348.9M); Marine Log on the Steerprop propulsion package. Official Sjöfartsverket news 2026-04-29 confirms HHI award, 2029 delivery, 32 m channel width and that the name is not decided (it gives no dimensions).

## Flagged (not changed)
- 052 dimensions/power still unknown (no operator figures found); 053 draft not found.
- 053 length 126 m comes from secondary sources only (consistent).

## Next
- 054 Leningrad / 055 Stalingrad schedule; then return to UM people geo filter or ports QA.
