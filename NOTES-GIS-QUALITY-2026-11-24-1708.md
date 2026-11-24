# GIS Quality Loop — 2026-11-24 17:08 MSK

## Drift check (vs 16:41 MSK baseline): NO DRIFT
- ATL `/` 111124 B, md5 c24e5823; `/data/atlas.3996.geojson` md5 6f1a2927, 1317 features; `/data/ports.csv` md5 c6e72709; `/api/health` {"status":"ok"} (ts 2026-11-24T14:08:55Z = 17:08 MSK)
- UM (unicornsmap.com) bundle index-D072dq9N.js; `/api/stats.json` geoPinned 653 / peopleOnMap 537

## Fix (metadata-only, coords unchanged; no atlas rebuild/publish)
- ARC-PORT-043 Provideniya Bay Port (pin = OSM way/129101713 landuse=harbour "Морской порт Провидения"): max_depth_m 9.0 -> 10.0; last_verified 2026-11-24
  - Source: Mintrans order No.170 of 28.05.2025, "Obligatory Regulations in seaport Anadyr" (registered with MinJust 15.09.2025 No.83544). It came into force on 2026-03-01 and runs until 2032-03-01. It repeals the Provideniya order No.378 of 23.10.2018 and puts the Provideniya terminal (Komsomolskaya Bay) under seaport Anadyr. Official publication: http://publication.pravo.gov.ru/document/0001202509160001
  - Annex 1, Provideniya terminal berths: No.1 (general/bulk/containers) is 147 m with 10 m depth at the berth. No.2 (lighters) is 62 m / 10 m. The extension (otkrylok) is 58.9 m / 10 m. The oil pier is 9.4 m.
  - Point-in-polygon check: berths 1, 2 and the extension fall inside the pinned harbour polygon. The oil pier (64°26'13"N 173°11'57"W) falls outside it.
  - Para 80: the terminal accepts ships up to 200 m LOA and 10 m draught. The oil-depot berth takes up to 7.7 m draught.

## Flags / leads (not changed)
- ARC-PORT-042 Egvekinot 7.5: the same order No.170 (Annex 1, Egvekinot terminal) gives berths 1/2 (GTS pier) 8.9 m, berth 3 8.15 m and berth 4 4.4 m. It replaces order No.342/2017, which gave 9.3/9.3/8.55/4.8. The terminal accepts up to 130 m LOA and 8 m draught. The order's berth coordinates (66°18'49"-66°18'57"N) line up with OSM pier way/721745075 (~66.314N). The pinned pier way/721745076 is at ~66.319N, which is ~0.5 km north of every listed berth. That is a scope mismatch, so the row is not changed and needs a decision.
- ARC-PORT-044 Anadyr: order No.170 Annex 1 is now the in-force official source. Berth 10 is 117.6 m / 10.25 m, berths 12/13 are 123 m / 7.10 m, and berth 11 is 1.10-7.40 m. The parked decision (8.5 harbour-wide) can use these figures; the repealed order No.459 had the same numbers.
- ARC-PORT-087 Piteå: still parked (draught vs depth).
