# GIS quality loop 2026-11-10 18:48 MSK

Health: no ATL or UM drift (ATL home c24e5823, /api/health ok; UM bundle index-CuvrFAFf, geoPinned 588, peopleOnMap 476, unicorns 303).

## ARC-ICE-027 Polaris (metadata-only, no geometry)
Source: official Arctia fleet page (https://www.arctia.fi/en/fleet/icebreaker-polaris.html) and spec sheet (https://www.arctia.fi/media/dokumentit/alusesitteet/icebreakers/polaris_spec.pdf): ice class PC 4, Lloyd's Register 100A1 Icebreaker(+); length 110 m, breadth 24 m, operational draught 8 m, propulsion power 19 MW (installed 22 MW), speed 18 kn, endurance 30 days, built 2016.
- ice_class "Arc4" -> "Polar Class 4".
- Unchanged, confirmed: length 110.0, beam 24.0, draft 8.0, power 19000 kW (propulsion), year 2016.

## Verified, no change
- ARC-ICE-016 CCGS Louis S. St-Laurent and ARC-ICE-017 CCGS Terry Fox match the CCG fleet database (fdat report/81 and report/108) for length, breadth, draft, power, ice class and range.

## Flagged, not changed
- ARC-ICE-027 operational_range_nm 20000 unsourced (Arctia gives 30 days endurance); service_speed_kn 16 vs 18 kn official speed; charter rate unsourced.
- ARC-ICE-016 service speed 16 (CCG: cruise 15, max 18); ARC-ICE-017 service speed 16 (CCG: cruise 13.5, max 16).
