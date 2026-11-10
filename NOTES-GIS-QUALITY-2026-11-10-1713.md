# GIS quality loop 2026-11-10 17:13 MSK

Health: no ATL or UM drift (ATL home c24e5823, /api/health ok; UM bundle index-CuvrFAFf, geoPinned 588, peopleOnMap 476, unicorns 303).

## ARC-ICE-050 R/V Sikuliaq (metadata-only, no geometry)
- owner_operator "University of Alaska" -> "University of Alaska Fairbanks CFOS (NSF-owned)": UAF CFOS flyer (https://www.uaf.edu/cfos/files/about-us/publications/CFOS-Sikuliaq-Flyer-4-2026.pdf) says owned by the National Science Foundation and operated by the UAF College of Fisheries and Ocean Sciences.
- ice_class "Arc4" -> "Polar Class 5": official ops site (https://ops.sikuliaq.alaska.edu/cruise-planning/vessel-specifications-and-equipment) says constructed to the IACS Polar Class 5 (PC 5) standard.
- power_kw 4500 -> 4476: propulsion is two 2,238 kW Siemens motors (https://ops.sikuliaq.alaska.edu/cruise-planning/propulsion-system-and-power-plant).
- length_m 80.0 -> 79.6: overall length 261 ft (UAF flyer; UNOLS characteristics https://www.unols.org/sites/default/files/201411rvtap06.pdf).
- operational_range_nm 18000 -> 9000: UNOLS characteristics give range 9,000 nm at 11 kn (marked preliminary there).
- Unchanged, confirmed: beam 15.8 m (52 ft max across reamer), draft 5.7 m (18 ft 9 in design waterline), year 2014.

## Flagged, not changed
- service_speed_kn 14: UNOLS gives cruise 11 kn and max 14.2 kn calm water; UAF flyer gives cruising speed 10 kn.
