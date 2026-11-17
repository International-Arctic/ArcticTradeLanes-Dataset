# GIS Quality Loop — 2026-11-17 16:10 MSK

Health: no ATL/UM drift (ATL home c24e5823, atlas.3996 6f1a2927, /api/health ok; UM index-D072dq9N.js, stats 630/514).

## Root cause of the Cape Blossom stacked pin (follow-up to 15:43 notes)
Read-only check of the Zo build input `ArcticTradeLanes.com/data/ports.csv` (md5 8e7d736e, the file the live atlas
was built from on 2026-11-09):
- Zo has ARC-PORT-123 unlocode `USKOT`, while the repo/Dataset have `USOTZ` (UNECE Kotzebue). Different codes, so the
  builder's soft-dedupe (same LOCODE + rounded pin) does not fire and both 074 and 123 are drawn. The live atlas confirms
  `ARC-PORT-123 unlocode USKOT`.
- Zo has Lavna 031/164 as `RULAV` (not in UNECE), which is why 164 *is* deduped live; the repo/Dataset blanked RULAV, so a
  rebuild from synced inputs would bring 164 back unless it is dropped another way.

## Build-input lag (Zo canonical vs repo `data/ports.csv` c6e72709, which is also what /data/ports.csv serves)
30 port rows differ; all differences are UN/LOCODE values (no coordinate differences). Zo still carries the pre-UNECE codes:
006 RUTIK, 008 RUKHA, 010 GLJNS, 023 USVAD, 031 RULAV, 033 RUSLY, 035 RUKOT, 038 CACMB, 039 CARAN, 043 RUPRO, 045 RUAMB,
046 RUZHE, 047 RUNVK, 048 RUWRA, 049 RUFJL, 050 RUNZL, 063 GLOQT, 068 USWIT, 069 USCVK, 082 USWIT, 099 RUPEV, 100 USUQT,
123 USKOT, 137 RUUTT, 138 RUKPT, 139 NOTRO, 142 RUDIK, 158 NOSLD, 164 RULAV, 166 RUCOK. The Dataset adds 4 more (109, 146,
170, 173 from today). So the live atlas popups show those old codes while the served CSV shows the corrected ones.

## What a sync rebuild would change (not done; needs a gated-rebuild decision)
- ~34 property-only diffs (codes / blanked fields), all traced to committed CSV changes.
- Two feature-count effects that a properties-only rebuild does not allow: ARC-PORT-123 dropped as a Cape Blossom alias
  (wanted), and ARC-PORT-164 Lavna reappearing because its RULAV code is blanked (not wanted; would need a same-as drop like
  ATL_ICE_SAME_AS_DROP for icebreakers). Net count would stay 1317 only by coincidence.
No change on Zo or in any CSV this cycle.
