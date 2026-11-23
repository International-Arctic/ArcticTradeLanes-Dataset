# GIS Quality Loop — 2026-11-23 16:41 MSK (UM + ATL)

## Health / drift (vs 16:12 baseline)
- ATL home md5 c24e5823, /data/atlas.3996.geojson 6f1a2927, /data/ports.csv c6e72709, /api/health ok — no drift.
- UM bundle index-D072dq9N.js unchanged; /api/people.json count 535 — no drift.

## Theme: ports.csv max_depth_m gap fill (continued). Metadata-only, coords unchanged.
### Edits
- ARC-PORT-072 Øksfjord: max_depth_m 7.0 -> 5.1 (below chart datum LAT); last_verified 2026-09-08 -> 2026-11-23.
  - Norconsult "Søknad om tiltak i sjø ved Øksfjord havn" for Loppa kommune (RIM-01 D01, 2026-06-30), filed with Statsforvalteren i Troms og Finnmark:
    https://www.statsforvalteren.no/contentassets/f32a46499d714409a4cac92461b1bf2a/loppa-kommune---molo.pdf
    §3.1: harbour basin seabed "kote -6 til kote -7 (NN2000)". Geotechnical note 15214-OO-RIG-N-002 (same file): "LAT i Øksfjord ligger på kt. -1,93 (NN2000)" (Kartverket).
    -> 7.00 - 1.93 = 5.07 ≈ 5.1 m below LAT (4.1–5.1 m range). The old 7.0 matched the NN2000 kote, not the chart datum.
  - Sediment stations M1–M7 (NTM22) convert to ~70.2415–70.2420 N, 22.342–22.347 E, i.e. the same basin as the pin (70.2379, 22.3497).
- ARC-PORT-140 Ísafjörður Sundabakki extension: max_depth_m 10.0 -> 11.0. ARC-PORT-077 Ísafjörður (parent): max_depth_m 10 -> 11. Both last_verified -> 2026-11-23.
  - Vegagerðin project page https://www.vegagerdin.is/verkefnin/framkvaemdir/sundabakki says: "Staða: Framkvæmd lokið", "Verktími 2020–2024", "Að lokinni dýpkun var dýpið við viðlegukantinn 11 metrar". Vegagerðin designed the works.
  - The Hafnir Ísafjarðarbæjar EIA (Frummatsskýrsla July 2020, fundargatt.isafjordur.is) agrees: the new 300 m steel quay has a design depth of "allt að 11 m" and takes ships with up to 11 m draught. The old 190 m quay stays at its earlier design depth (7–8 m).
  - Ísafjarðarbær news from 04-Apr-2024 gave "10 m" for two areas. That was the interim phase by the dredger Hein; Álfsnes was due to finish the shallow areas that summer, and Vegagerðin's completion figure supersedes it.
  - The Cruise Iceland per-berth max drafts on 077 are unchanged, and so are the berth counts.

## Checked, not changed
- ARC-PORT-071 Mehamn: nordkynhavn.no havnekart PDF (/assets/filer/Kart/Dybdekart_Mehamn_detaljert.pdf) is a 2013 scanned survey/dredge-plan sheet (PDF created 14-Nov-2013). It shows soundings ~6–7 m off Industrikai and two dredge areas marked "-7m", with no datum stated and no quay-face figures. It is not specific or current enough to replace 6.0, and the Kystverket 9/8/7/6 m dredging is still planned. Left (parked).
- ARC-PORT-072 berth_count 8: still unsourced. The plan alternatives give 55/156/192 boat places, which are not berths. Frydenbø Yards Øksfjord floating dock (8 m) is a separate yard, not this harbour.
- port.isafjordur.is publishes no depth figures.

## Next
- Other Norwegian or Icelandic ports with blank or unsourced depths (Kystverket fiskerihavn regulations / municipal havn pages), then 072 berth_count.
