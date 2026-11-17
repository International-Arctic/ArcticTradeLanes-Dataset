# GIS Quality Loop — 2026-11-17 18:35 MSK

Health: no ATL/UM drift (md5: ATL home c24e5823, atlas.3996 6f1a2927, /data/ports.csv c6e72709; /api/health ok;
UM index-D072dq9N.js, stats 630/514).

## tankers.csv (metadata-only, no geometry)
- ARC-TNK-026 Stena Polaris (IMO 9390032): deadweight 65000 -> 65200 (design), beam 32.0 -> 40.0 m, draft 11.0 -> 11.3 m (design).
  LOA 183.0 and year 2010 confirmed. Sources: Concordia Maritime fleet sheet (P-MAX, Brodosplit 2010, DNV ICE-1A, LOA 182.9,
  beam 40.0, design draft 11.3, design DWT 65,200); Concordia delivery release (Cision); Stena Bulk NSR voyage release (Cision).

## Flagged (not changed)
- 026 ice_class "Arc4": vessel is DNV ICE-1A (Finnish-Swedish 1A), not an RS Arc class; column taxonomy mixes systems.
- 026 owner/flag: Concordia Maritime owned it (Stena Bulk time-charterer); VesselFinder now shows US flag, so current owner needs a source.
- ARC-TNK-027 "Stena Arctica" specs identical to 026 placeholder pattern; needs a source. Next: 022-025 NORDEN, 027-030.
