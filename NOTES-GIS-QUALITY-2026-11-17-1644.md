# GIS Quality Loop — 2026-11-17 16:44 MSK

Health: no ATL/UM drift (ATL home c24e5823, atlas.3996 6f1a2927, served /data/ports.csv c6e72709, /api/health ok;
UM index-D072dq9N.js, stats 630/514).

## tankers.csv (metadata-only, no geometry) — first QA pass on tankers
- ARC-TNK-002 Boris Vilkitsky (IMO 9768368) and ARC-TNK-003 Fedor Litke (IMO 9768370): owner_operator "Sovcomflot (Novatek)"
  -> "Dynagas-CLNG-Sinotrans JV (Dynagas 49%; chartered to Yamal LNG)". Sources: Offshore Energy 2017-11-21 citing the Russian
  Maritime Register of Shipping (JV: Sinotrans 25.5%, China LNG Shipping 25.5%, Dynagas 49%; delivered by DSME Nov 2017);
  Bureau Veritas Marine & Offshore magazine (Fedor Litke owned by the Dynagas JV); Lloyd's List LL1140062 (IMO numbers, Dynagas JV).
  year_built 2017 verified (delivered November 2017).

## Flagged (not changed)
- Yamalmax rows: deadweight 96800 vs "85,000 dwt" (Offshore Energy 2017-11-22); length 299.0 vs "299.9 m" (RS via Offshore Energy).
- annual_arctic_voyages, charter_rate_usd_per_day and insurance_premium_multiplier on all tanker rows have no sources.
- ARC-TNK-004..007 owners still "Sovcomflot (Novatek)"; Teekay (now Seapeak) owned six of the first 15 Arc7 carriers
  (Lloyd's List, Maritime Executive), but per-vessel ownership needs a source before changing.
