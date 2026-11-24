# GIS Quality Loop — 2026-11-24 18:11 MSK

## Drift check (vs 17:43 MSK baseline): NO DRIFT
- ATL `/` md5 c24e5823; `/data/atlas.3996.geojson` md5 6f1a2927; `/data/ports.csv` md5 c6e72709; `/api/health` {"status":"ok"} (ts 2026-11-24T15:11:53Z = 18:11 MSK)
- UM (unicornsmap.com) bundle index-D072dq9N.js; `/api/stats.json` geoPinned 653 / peopleOnMap 537 (unchanged)

## Fix (metadata-only, coords unchanged; no atlas rebuild/publish)
- ARC-PORT-144 Ny-Ålesund / Kings Bay Arctic Research Port (pin 78.9280349/11.9358348 = OSM man_made=pier way/588897062, the main quay; parallel way/588897063, end way/588897064): max_depth_m 6.0 -> 8.0; last_verified 2026-11-24
  - Source: Kings Bay AS (owner/operator of Ny-Ålesund harbour), official page https://kingsbay.no/flight-harbour-fuel/ (fetched 2026-11-24): "Ny-Ålesund has modern harbour facilities with a 73 meter long quay and a maximum water depth of 8 meters."
  - Corroboration: Kings Bay 2025 harbour regulations https://kingsbay.no/wp-content/uploads/2025/01/2025-Regulations-and-prices-for-Ny-Alesund-Harbour-v2.pdf ("The pier can only handle one large vessel at berth"; separate tender pier). The 2026 regulations link on the page (…/2026/01/2026-Regulations-and-prices-for-Ny-Alesund-Harbour-v1.pdf) returned HTML, not a PDF, from the box.
  - The previous 6.0 had no cited source in the row. berth_count 2 left unchanged (not verified).

## Flags / leads (not changed)
- ARC-PORT-087 Piteå (11.2): the operator gives 11.2 m as max draught/"inseglingsdjup 11,2 m (12,5)" (portofpitea.se/infrastruktur/kajplatser/, /tjanster/sjofart/farled/) and the homepage says "12,5 meter djup". There is no per-berth water depth (the berth map image has lengths only), so 11.2 is a draught, not a depth. Lead: 12.5 if that is accepted as the harbour depth. Needs a berth depth source.
- ARC-PORT-062 Aasiaat / 070 Maniitsoq Atlantkaj (8.0): no official RAL/Naalakkersuisut berth depth found; the only source is the cowiplan 8 m for Aasiaat.
- ARC-PORT-044 Anadyr is still parked.
