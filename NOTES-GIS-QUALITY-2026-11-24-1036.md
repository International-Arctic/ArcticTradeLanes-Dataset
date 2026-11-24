# GIS Quality Loop — 2026-11-24 10:36 MSK

## Drift check (vs 10:06 MSK baseline): none
- ATL home md5 c24e5823 (111124 B); /data/atlas.3996.geojson md5 6f1a2927 (1317 features); /data/ports.csv md5 c6e72709; /api/health {"status":"ok"}.
- UM bundle index-D072dq9N.js; /api/stats.json geoPinned 653, peopleOnMap 537.

## Fix (metadata-only, coords unchanged)
- ARC-PORT-014 Tromso Port (NOTOS): max_depth_m 11.0 -> 22.0.
  - Source: Troms Havn KF official quay list https://tromso.havn.no/tjenester/kaiplass/ (EN: https://tromso.havn.no/en/services/quays/).
  - Kai 50 Grøtsund, 130 m, depth 22,0 m, is the deepest quay. The port-wide range is given as 3,5–22 m.
  - Other quays on the list: Breivika Kai 25 11,5 m; Kai 21–24 10,4–11,0 m; Kai 24 nord 11,0 m; Kai 38 11,0 m. Prostneset Kai 7 7,2–9,9 m; Kai 8 7,9–9,5 m.
  - The source gives quay depth, not draught. Troms Havn's quay sheets (e.g. FO22-info.pdf) say depths are believed but not guaranteed and point to official charts.

## Flags (not changed)
- ARC-PORT-139 Tromsø Havn (Breivika pin) max_depth_m 11.0. Breivika's deepest is Kai 25 at 11,5 m. Needs a decision on whether 139 is a Breivika record or a port-wide one.
- ARC-PORT-014 berth_count 18 is unverified. The official list has about 10 main quays plus additional centre quays.
- ARC-PORT-014 pin 69.6507379/18.9649587 is in the city centre (indre havn). It is a lead only and the coordinates were not touched.
- ARC-PORT-019 Narvik: the Narvik Havn Fagerneskaia page gives "LAT 5,70m", which is ambiguous as a depth. The 18.5 value is not verified, so Narvik was skipped.
- ARC-PORT-018 Bodø: bodohavn.no publishes no quay depths (gods/anløp pages checked). Not verified.
- Still open (not redone): 160 text-vs-table depth; berth_count for 027/028/172.
- data/ports.csv vs root ports.csv now also diverge on 014 depth. This waits on the gated properties-only publish. No rebuild or publish was done.
