# GIS Quality Loop 2026-11-27 1142 MSK (metadata-only, coords unchanged)

Health: no drift. ATL home c24e5823, /data/atlas.3996.geojson 6f1a2927, /data/ports.csv c6e72709, /api/health ok; UM index-D072dq9N.js, stats geoPinned 653 / peopleOnMap 537.

## UN/LOCODE pass (blank-unlocode rows)
Already covered before today (no change): 031, 046, 048, 049, 137 (UNECE RU check 2026-11-09, gis-loop-1109-1349); 047, 050, 138 (gis-loop-1109-1522).
New checks this cycle; unlocode stays blank on all four (no official code for the exact location; no parent/nearby code borrowed):
- ARC-PORT-147 Naiba: no Naiba/Nayba entry in the official RU list (service.unece.org/trade/locode/ru.htm, 858 rows, same count as the datasets/un-locode mirror). RU IKS Tiksi not substituted.
- ARC-PORT-150 Pyramiden: official SJ list = BAR, HOP, JAM, LYR, NYA, SVE only. SJ LYR not substituted.
- ARC-PORT-153 Steensby Inlet: no entry in the datasets/un-locode code-list.csv mirror (3226 CA rows). The official ca.htm could only be read through "Innisfail" via web fetch (403 to curl), so the S-section is checked against the mirror only. CA MNI Milne Inlet Port (separate Baffinland northern port) not substituted.
- ARC-PORT-157 Arctic Gate (Mishukovo): no Mishukovo/Vorota Arktiki entry in the official RU list. RU MMK Murmansk not substituted.

Skipped per rules: 024, 164, and the rows noted on 2026-11-26.
Flag: 153 needs an official-page re-check of the CA S-section if a full-page fetch becomes possible.
