# GIS Quality Loop 2026-11-16 14:11 MSK

Health: unchanged (ATL /api/health ok, live atlas.3996 md5 6f1a2927, 1317 features; UM geoPinned 588, peopleOnMap 476).

## ARC-ICE-022 planned CCG polar icebreaker (Chantier Davie) — metadata-only, no geometry
Sources (Government of Canada):
- PSPC Polar icebreaker projects: https://www.canada.ca/en/public-services-procurement/services/acquisitions/defence-marine/national-shipbuilding-strategy/projects/large-vessels/polar-icebreakers.html (Davie vessel named CCGS Arpatuuq, expected delivery 2030; Seaspan vessel CCGS Imnaryuaq, 2032; names announced Aug 2024 by Government of Canada and Inuit Tapiriit Kanatami)
- PSPC news 2025-03: https://www.canada.ca/en/public-services-procurement/news/2025/03/construction-of-new-polar-icebreakers-for-the-canadian-coast-guard.html (Davie vessel 139 m, Polar Class 2, delivery 2030; Seaspan vessel 158 m, 2032)
- CCG 2021 backgrounder: https://www.canada.ca/en/canadian-coast-guard/news/2021/05/polar-icebreakers-and-the-national-shipbuilding-strategy.html (pre-contract generic spec: 150 m, beam 28 m, ~18+ kn, ~30,000 nm)

Changes:
- vessel_name "CCGS John A. Macdonald (Polar Icebreaker)" -> "CCGS Arpatuuq (Polar Icebreaker)" (official name; the 2030 delivery year in the row matches the Davie vessel)
- length_m 150.0 -> 139.0 (PSPC 2025)
- power_kw 26000 -> NULL, beam_m 28.0 -> NULL, draft_m 10.5 -> NULL, operational_range_nm 55000 -> NULL: no official figure for the Davie 139 m design (28 m beam / 30,000 nm were the 2021 generic 150 m spec; 26000 kW, 10.5 m and 55000 nm had no source)
- Kept: Polar Class 2, 2030, owner CCG, speed 18 (CCG 2021 "approximately 18+ knots", flagged as pre-contract)

Site follow-up (not done here, no deploy): the live vessel page slug is /vessel/ccgs-john-a-macdonald; before the next properties-only rebuild publishes this name, keep the old slug working (alias/redirect) so existing links do not 404. Seaspan's CCGS Imnaryuaq (158 m, 2032) has no row; candidate additive row, not added this cycle.
