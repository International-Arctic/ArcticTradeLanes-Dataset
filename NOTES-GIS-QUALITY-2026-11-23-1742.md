# GIS Quality Loop — 2026-11-23 17:42 MSK (UM + ATL)

## Health / drift (vs 17:10 baseline)
- ATL home md5 c24e5823, /data/atlas.3996.geojson 6f1a2927 (1317 features), /data/ports.csv c6e72709, /api/health ok (ts 2026-11-23T14:43Z = 17:43 MSK). No drift.
- UM bundle index-D072dq9N.js unchanged; /api/people.json count 535. No drift.

## Theme: ports.csv max_depth_m gap fill (continued). Metadata-only, coords unchanged, LF line endings kept.
### Edits
- ARC-PORT-013 Akureyri Port: max_depth_m 10.5 (unsourced) -> 11.0; last_verified 2026-09-08 -> 2026-11-23.
  - Source: official Port of Akureyri (Hafnasamlag Norðurlands bs) pier list "Bryggjuupplýsingar", https://port.is/index.php/bryggjuupplysingar/ (fetched 2026-11-23).
  - Deepest berths: Krossanes suður 1b 80 m / 11 m; Tangabryggja 11a & 11b 356 m / 9–11 m; Oddeyrarbryggja 12 (the pinned quay) 240 m / 9,5–11 m. The other berths are 5–9 m. Max of the list = 11 m.
  - The old English page https://port.is/pictures-of-pier/ is now 404. Its archived copy (web.archive.org 2026-05-09) gave "Depth at LW": Oddeyrarbryggja 10 m, Krossanes 1b 10 m, Tangabryggja 11a 8,5–11 m. The current page raises these to 9,5–11 / 11 m, so the 11 m max holds on both versions (via Tangabryggja in the archive).
  - Datum: the current Icelandic page does not state one ("Dýpi"). The archived English version says depth at low water (LW), so this is read as depth below low-water chart datum.
  - **Current** (existing) depth, not planned.
- ARC-PORT-012 Reykjavik Port: max_depth_m 13.0 kept (was unsourced, now sourced); last_verified 2026-10-28 -> 2026-11-23.
  - Source: Faxaflóahafnir Port Information Guide (page says updated September 2026; PDF created 2026-09-02), https://www.faxafloahafnir.is/en/port-information-guide -> https://www.datocms-assets.com/164301/1788441122-port-information-guide-faxafloahafnir.pdf
  - The deepest berth is Eyjargarður oil terminal (Örfirisey, Gamla höfn): 72 m, 13.0 m MLWS.
  - The pinned Sundabakki container quay is 402 m, 12.0 m MLWS. Other Sundahöfn berths: Skarfabakki 12.0, Kleppsbakki 8.5/11.3, Vogabakki 8.0–9.0, Vatnagarðabakki and Korngarður 8.0.
  - The guide also lists draft restrictions at MLWS: Sundahöfn 8.0–12.0 m and the oil terminal 13.0 m.
  - **Current** depth below MLWS.
  - Cross-check: ARC-PORT-079 Skarfabakki 12 already matches the guide.

## Checked, not changed
- ARC-PORT-094 Vardø ytre molo: Statsforvalteren i Troms og Finnmark hearing (published 2025-01-10, deadline 2025-02-17) on Kystverket's application dated 2024-12-10, https://prep-utdatert.statsforvalteren.no/troms-finnmark/horinger/2025/02/soknad-om-mudring-og-utfylling-til-ny-molo-i-vardo-havn/, plus Vedlegg 1 (application form).
  - The only depths given are for the **fairway** dredging west of Hasselneset: the area is today at LAT −5 m or deeper, current water depth is 5.9–10.3 m, and the seabed is dredged to −10.3 m (21,900 m2).
  - The application gives no quay or basin depth. Vardø kommune's plan description cites a 160 m entrance corridor at 7.0 m sjøkartnull, which is also fairway depth.
  - Per the cycle rule ("leave if no clear quay/basin depth"), 094 stays at 7.0, still unsourced.

## Flags
- 094 Vardø 7.0 is still unsourced. A quay depth would need a Vardø Havn KF quay list or a Kystverket indre-havn document.
- 012 Reykjavík: the 13.0 m max is an oil-terminal berth (Eyjargarður, Gamla höfn), ~4 km from the Sundabakki cargo pin (12.0 m). This follows the port-wide max convention.
- 013 Akureyri: port.is raised several depths compared with the archived list (Oddeyrarbryggja 10 -> 9,5–11 m) without a stated datum or date.

## Next
- Another Icelandic gap: ARC-PORT-089 Grundarfjörður / 155 Vopnafjörður (official harbour pages), or 109/111 Reykjanes (Reykjaneshöfn quay list).
