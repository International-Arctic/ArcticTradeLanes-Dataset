# GIS Quality Loop — 2026-11-27 18:39 MSK (metadata-only, coords unchanged)

Drift: none. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927, /data/ports.csv c6e72709, /api/health ok. UM bundle index-D072dq9N.js, /api/stats.json geoPinned 653 / peopleOnMap 537.

## city_id relinks (ports.csv)
| port | old city_id | new city_id | source |
|---|---|---|---|
| ARC-PORT-047 Nordvik (historic) | ARC-CITY-046 Salekhard (YNAO, 1818 km) | ARC-CITY-009 Khatanga (368 km) | Wikidata Q2364258 P131=Q302113 Taymyrsky Dolgano-Nenetsky District (Krasnoyarsk Krai Q6563); Q918830 Khatanga -> Q17506477 -> Q302113 |
| ARC-PORT-100 Utqiagvik revetment | ARC-CITY-074 Maniitsoq (Greenland, 3778 km) | ARC-CITY-028 Barrow (0.23 km) | Wikidata Q79809 Utqiagvik, alias Barrow, P625 71.290556/-156.788611 = city row coords |
| ARC-PORT-022 Tuktoyaktuk | ARC-CITY-033 Kotzebue (USA, 1243 km) | ARC-CITY-025 Inuvik (NWT, 122 km) | Wikidata Q719547 Tuktoyaktuk P131=Q2007 Northwest Territories; Q338686 Inuvik, NWT; no Tuktoyaktuk city row |

## city_id scan — flagged, NOT changed (need decision or a closer city row)
- ARC-PORT-039 Rankin Inlet -> ARC-CITY-022 Iqaluit (Nunavut, 1177 km; no Kivalliq city row; nearest row Churchill MB 462 km)
- ARC-PORT-040 Honningsvag -> ARC-CITY-043 (missing from cities.csv)
- ARC-PORT-041/042/043/044/048/166 -> ARC-CITY-006 Pevek (same region Chukotka, 415-920 km; 044 Anadyr is itself the Chukotka capital, no Anadyr city row)
- ARC-PORT-045 Ambarchik -> ARC-CITY-007 Tiksi (both Sakha, 1236 km; Pevek 308 km is nearer but other region)
- ARC-PORT-046 Zhelaniye -> ARC-CITY-008 Dikson (510 km)
- ARC-PORT-049 Franz Josef Land, ARC-PORT-050 Novaya Zemlya -> ARC-CITY-001 Murmansk (Murmansk Oblast; both archipelagos are Arkhangelsk Oblast; 1370/774 km)
- Empty/NULL city_id: 078, 101, 102, 105, 107, 109, 111, 112, 114, 128, 129, 130, 134, 135, 158, 159, 161, 167, 169, 171, 173

data/ports.csv (live mirror) untouched; no atlas rebuild.
