# GIS quality loop 2026-11-10 13:52 MSK

Health: no ATL or UM drift (ATL home c24e5823, /api/health ok; UM bundle index-CuvrFAFf, geoPinned 588, peopleOnMap 476).

## ARC-ICE-042 RV Polarstern (metadata-only, no geometry)
- power_kw 13200 -> 14116: total main engine capacity 4 x 3529 kW = 14,116 kW, per AWI Polarstern wiki "Information about the engine" (https://spaces.awi.de/spaces/EFPW/pages/286131265/Information+about+the+engine). AWI fleet page gives 19,198 hp (four engines), consistent.
- operational_range_nm 35000 -> 19000: AWI fleet page "Range 19,000 nautical miles / 80 days" (https://www.awi.de/en/fleet-stations/research-vessel-and-cutter/research-vessel-and-icebreaker-polarstern.html).
- Unchanged: length 117.9 (AWI 117.91 m), beam 25.0 (AWI 25.00 m), year 1982 (AWI).

## Flagged, not changed
- draft_m 10.5 matches the 1983 AWI design draught; AWI current max draught is 11.21 m. Column semantics (design vs max) undefined.
- service_speed_kn 15: AWI gives max speed 16 kn and 15.5 kn trial speed; service speed not stated.
- ice_class "Polar Class 2": AWI states GL+100 A5 ARC 3 (Germanischer Lloyd class), not an IACS Polar Class. Needs a decision on ice-class notation before changing.
