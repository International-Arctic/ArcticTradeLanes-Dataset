# GIS Quality Loop — 2026-11-17 18:08 MSK

Health: no ATL/UM drift (md5: ATL home c24e5823, atlas.3996 6f1a2927 / 1317 features, /data/ports.csv c6e72709; /api/health ok;
UM index-D072dq9N.js, stats 630/514).

## tankers.csv (metadata-only, no geometry) — Zvezda Arc7 LNG series (Arctic LNG 2)
- ARC-TNK-016..021: deadweight_tonnage 98000 -> 81000 and beam_m 50.0 -> 48.8. LOA 300.0 confirmed.
  Sources: Rosneft/Zvezda via AKM 2025-12-25 (Alexey Kosygin handover: 300 m long, 48.8 m wide, deadweight 81 thousand t, 60 MW);
  Interfax 2026-06-18 quoting Sovcomflot (Konstantin Posyet: same figures). Class-wide spec of the Zvezda series.

## Flagged (not changed)
- Rows 016-021 are generic placeholders ("Arc7 LNG Carrier-0NN", owner "Zvezda Shipyard (Novatek)"). Sourced facts: the first five
  hulls are Alexey Kosygin (delivered to Sovcomflot 2025-12-22/25), Konstantin Posyet (named 2026-06-18, Sovcomflot, long-term
  charter to Arctic LNG 2), Pyotr Stolypin (preparing sea trials Sept 2026), Sergei Witte, Viktor Chernomyrdin (under completion).
  No Zvezda Arc7 carrier was delivered in 2024 (row 016 year 2024) and the voyage counts 15/8/5 are unsourced. Mapping placeholders
  to named hulls needs a decision; draft value for owner would be "Sovcomflot (time-chartered to Arctic LNG 2)".
- draft_m 12.0 for the Zvezda series: no source found this cycle.
