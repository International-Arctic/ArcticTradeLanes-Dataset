# GIS Quality Loop — 2026-11-23 17:23 MSK (UM + ATL)

## Health / drift (vs 16:41 baseline)
- ATL home md5 c24e5823, /data/atlas.3996.geojson 6f1a2927 (1317 features), /data/ports.csv c6e72709, /api/health ok. No drift.
- UM bundle index-D072dq9N.js unchanged; /api/people.json count 535. No drift.

## Theme: ports.csv max_depth_m gap fill (continued). Metadata-only, coords unchanged, LF line endings kept.
### Edits
- ARC-PORT-095 Kjøllefjord fiskerihavn: max_depth_m 8.0 (unsourced) -> 7.0; last_verified 2026-09-08 -> 2026-11-23.
  - Kystverket project page https://www.kystverket.no/utbygging/farleds--og-fiskerihavnprosjekt/store-prosjekt/innseiling-kjollefjord/ says: "den nordlige delen skal utdypes til 7 meter i dybde, og den sørlige delen til 6 meter i dybde". NCC Norge AS holds the contract; works start autumn 2026 and finish autumn 2029.
  - The Kystverket application to Statsforvalteren i Troms og Finnmark (03-Jul-2024, ref 2022/408-24) gives dredge levels of -7.3 m (35,000 m2) and -6.3 m (17,500 m2). Current depth at the site is 2–6 m, and the municipality dredged to -6 m in 2015. The permit runs 01-Jun-2025 to 31-Dec-2028.
  - The dredge midpoint (UTM35 N7871750 E512343, i.e. 70.94906/27.33881) is about 0.18 km from the pin, in the same basin.
  - Datum: Kystverket depths are below sjøkartnull. The application text does not state the datum for the -7.3 level, so I used the conservative 7 m figure. This is a planned, post-works value.
- ARC-PORT-135 Kalvåg fiskerihavn: max_depth_m 8.0 (unsourced) -> 6.3; last_verified 2026-10-20 -> 2026-11-23.
  - Source: Norconsult "Søknad om tiltak i sjø – Kalvåg fiskerihavn" for Kystverket (RIM-RAP-02 J02, 2025-09-19), Statsforvaltaren i Vestland hearing ref 2025/2208: https://utdatert.statsforvalteren.no/contentassets/7593b7c0b234416294a1de6bf7bf08e3/soknad-med-vedlegg.pdf
  - Its wording: "I havnebassenget vil mudringen øke seilingsdypet fra 0,1 m ... til 6,3 m" and "mudres ned til kote -6,3". The depths are relative to sjøkartnull (LAT); the same document states that its depths are corrected to LAT.
  - The entrance shoals (6.8 m and 5.4 m) go to 12.3 m. That is fairway depth, not berth depth, so it is not used.
  - Kystverket's page gives a 2026 contract and planned completion in 2027, so this is a design value.

## Checked, not changed
- ARC-PORT-094 / 165 Vardø: the Kystverket Vardø fiskerihavn page has no depth figures (only the 595 m outer molo and Hasselneset dredging). Left as is: 094 is still 7.0 unsourced and 165 is blank.
- The regjeringen.no Kystverket fiskerihavn PDF returned 403, so it was not used.

## Flags
- 094 Vardø 7.0 has no source. The next lead is the Statsforvalteren application for the Vardø ytre molo / Hasselneset dredging.
- 095 and 135 now hold planned post-works depths for project records. Their current depths are shallower (about 2–6 m and 0.1–6 m).

## Next
- 094 Vardø depth (Statsforvalteren dredging application), then 013 Akureyri, which has no source for the 10.5 m (port.is lists Oddeyrarbryggja as "10 m LW").
