# GIS Quality Loop 2026-11-25 10:04 MSK

Drift: none. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927, /data/ports.csv c6e72709, /api/health ok. UM bundle index-D072dq9N.js, stats geoPinned/peopleOnMap 653/537.

## Change (metadata-only, coords unchanged)
- ARC-PORT-084 Cold Bay Dock Replacement Project: max_depth_m 7 -> 9.14.
  - Source: Alaska DOT&PF Cold Bay Dock (Bridge No. 1755) inspection, 8-10 Aug 2022, Soundings table: mudline elevations -23.5 to -30.0 ft along the fender line; Figure 15 note 2: channel bottom elevations in feet referenced to MLLW. Deepest is -30.0 ft (Fender 9-10), x 0.3048 = 9.14 m.
  - Document: PIDP FY2023 application Appendix 1, https://dot.alaska.gov/stwddes/dcspubs/assets/pidp_23/cold%20bay/Appendix1_inspections.pdf (index: https://dot.alaska.gov/stwddes/alaskapidp.shtml). The box gets a WAF "Request Rejected" page; Zo read_webpage downloads it (219 pp).
  - The old 7.0 was a max draught from the nationalfisherman pilothouse guide, not a water depth.

## Leads (not changed)
- ARC-PORT-084: USACE NDC Docks 0UYS (City of Cold Bay City Dock) says DEPTH 35/35 ft MLLW and berthing 460 ft. That is older than the 2022 soundings. The inspection summary's "Maximum Water Depth 28 ft" is water depth at the time of inspection (waterline 21 ft below deck).
- ARC-PORT-059 Skagway: USACE NDC 0U9U Ore Dock and Petro Marine says depth 45-90 ft MLLW and 1000 ft; 0YFG AML transfer bridge says 40 ft. The record is the redevelopment project, so the design depth needs the RFP (skagway.org/media/94651), which now returns 403 from both the box and Zo.
- ARC-PORT-068 Whittier (13.7 m = USACE 0UWL 45 ft) is already sourced and can count as done.
