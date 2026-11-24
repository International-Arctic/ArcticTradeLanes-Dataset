# GIS Quality Loop — 2026-11-24 17:43 MSK

## Drift check (vs 17:08 MSK baseline): NO DRIFT
- ATL `/` 111124 B, md5 c24e5823; `/data/atlas.3996.geojson` md5 6f1a2927; `/data/ports.csv` md5 c6e72709; `/api/health` {"status":"ok"} (ts 2026-11-24T14:41:30Z = 17:41 MSK)
- UM (unicornsmap.com) bundle index-D072dq9N.js; `/api/stats.json` geoPinned 653 / peopleOnMap 537 (unchanged vs 17:08 cycle)

## Fix (metadata-only, coords unchanged; no atlas rebuild/publish)
- ARC-PORT-005 Pevek Commercial Port (pin = OSM node/950642422 "Pevek Docks" at 69.7052842/170.2556335): max_depth_m 9.0 -> 9.3; last_verified 2026-11-24
  - Source: Mintrans order No.298 of 13.10.2015, "Obligatory Regulations in seaport Pevek" (MinJust reg. 16.11.2015 No.39712). Copy fetched from the operator's disclosure page: https://files.rosatomport.ru/files/raskrytie_informatsii/normativnye-documents/pevek-prikaz-ot-13-oktjabrja-2015-g.-N-298.pdf (mirror: https://pravo.ppt.ru/prikaz/mintrans/n-298-99955)
  - Annex 2 berths: No.1 (restricted in operation) 186 m / 9.3 m; No.2 180 m / 9.3 m; No.3 134 m / 7.8 m. All three lie at 69°42'19"N, 170°14'55"-170°15'41"E, and the pin sits on berth 2 (170°15'09.8"-170°15'26.7"E). The oil-depot berth (104.3 m / 10 m, 69°40'45"N 170°12'50"E) is ~3 km SW: it is a separate facility, not this pin.
  - Para 71: the port accepts ships up to 180 m LOA and 9 m draught (oil-depot berth up to 9.7 m draught). The old 9.0 matched the draught limit, not the berth depth.
  - Amending order No.339 of 24.07.2026 (in force 2026-09-08; official publication http://publication.pravo.gov.ru/document/View/0001202608280016; text https://www.rosmorport.ru/upload/medialibrary/673/z0g68o0pxizatnwjlz1suvsh7hczimeu/%D0%9F%D1%80%D0%B8%D0%BA%D0%B0%D0%B7%202026_07_24_339.pdf) changes only the text, footnotes and Annex 1 (new anchorage No.7 at Cape Nagleynyn, 6-10 m). Annex 2 berth depths are unchanged. Rosmorport's news item of 24.11.2026 (https://www.rosmorport.ru/filials/vaf_news_main/64614/) confirms the scope.

## Flags / leads (not changed)
- ARC-PORT-044 Anadyr 8.5 (still parked): the in-force order No.170 Annex 1 puts berth 10 (117.6 m / 10.25 m) "1 cable N of Cape Zaseleniya". Nominatim places Cape Zaseleniya (OSM node/5772237207) at 64.6977/177.6344, ~7 km SE of the pin (64.7400/177.5075), across the estuary. So 10.25 is NOT the depth for the pinned harbour. For the pinned harbour (berths 11-13), the order gives a maximum of 7.40 (berth 11) / 7.10 (12/13), and Rosmorport gives 7.5 design. This needs a decision: 7.1/7.4/7.5, or leave it.
- ARC-PORT-041 Mys Shmidta: the Pevek regulations (order 298 and 339) list no Mys Shmidta berth, so there is no official depth source found yet.
- ARC-PORT-099 Nagleynyn: order 339 adds anchorage No.7 (6-10 m) but no berth row. The 12.29 m (Glavgosexpertiza via portnews) is unchanged.
