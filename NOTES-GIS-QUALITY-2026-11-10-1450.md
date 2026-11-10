# GIS quality loop 2026-11-10 14:50 MSK

Health: no ATL or UM drift (ATL home c24e5823, /api/health ok; UM bundle index-CuvrFAFf, geoPinned 588, peopleOnMap 476, unicorns 303).

## ARC-ICE-049 RVIB Nathaniel B. Palmer (metadata-only, no geometry)
Source: USAP "RVIB Nathaniel B. Palmer Principal Features and Technical Information" (https://www.usap.gov/USAPgov/vesselScienceAndOperations/documents/NBP_Systems.pdf).
- owner_operator "Lockheed Martin (for NSF)" -> "Leidos ASC (NSF charter; owner Offshore Service Vessels LLC)": USAP lists vessel owner Offshore Service Vessels LLC, chartered to Leidos ASC.
- beam_m 18.2 -> 18.3 (Breadth Moulded 60 ft / 18.3 m).
- draft_m 7.0 -> 6.8 (Draft, Design 22.5 ft / 6.8 m).
- operational_range_nm 28000 -> 15000 (Endurance 15,000 NM @ 12 knots).
- Unchanged, confirmed: power 9500 kW (12,700 SHP), length 94.0 m, year 1992.

## Flagged, not changed
- ice_class "Polar Class 4": USAP gives ABS Ice Class A2, not an IACS Polar Class (same notation question as Polarstern ARC-ICE-042 and KV Svalbard ARC-ICE-037).
- service_speed_kn 14: USAP endurance figure is at 12 kn; no service speed stated.
