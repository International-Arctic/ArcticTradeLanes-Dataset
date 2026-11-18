# GIS Quality Loop — 2026-11-18 12:41 MSK

## Drift check (read-only)
- arctictradelanes.com home c24e5823, atlas.3996 6f1a2927, ports.csv c6e72709 (md5), /api/health ok — unchanged.
- unicornsmap.com geoPinned 630 / peopleOnMap 514, bundle index-D072dq9N.js — unchanged.

## Checked this cycle (no change)
- ARC-TNK-042 "UT 755 Arctic" / 043 "UT 755 Ice" (Atlantic Offshore): UT 755 is a Rolls-Royce/Ulstein PSV design name, not a vessel name; the only web hits are ATL's own /vessel pages. Placeholders.
- ARC-TNK-049 "Arctic Express Container" / 050 "Arctic Express Logistics" (NewNew Shipping): no vessels by these names. NewNew's NSR fleet per Splash247 (VesselsValue) is NewNew Polar Bear (2005, 1,638 TEU), Newnew Moon (1999, 2,202 TEU), Newnew Star (2007, 3,534 TEU), Xin He Lu 2 (1997, 3,429 TEU); The Loadstar names NewNew Polar Bear as the ice-class first Arctic liner ship. Placeholders — replacing them with real hulls would be a data decision.

## Tankers placeholder summary (decision needed, nothing removed)
Rows with no authoritative source for the named vessel, all live as /vessel pages on arctictradelanes.com:
| id | name | evidence |
|---|---|---|
| ARC-TNK-015 | Vladimir Tikhonov (MOL Arc7 LNG 2021) | no source found (11-17) |
| ARC-TNK-016..021 | Zvezda Arc7 placeholder names | real hulls: Kosygin, Posyet, Stolypin, Witte, Chernomyrdin (11-17) |
| ARC-TNK-030 | Seival | only SEIVAL is a 2000-built offshore tug, IMO 9199115 |
| ARC-TNK-033 | Prospero (Finnlines) | no Finnlines vessel found |
| ARC-TNK-036 | Afina (Grieg Star) | no vessel found |
| ARC-TNK-038 | Bona Safir (Solstad) | real Bona Safir is a 1992 general cargo ship, IMO 9030228 |
| ARC-TNK-039 | Bona Sapphire (Solstad) | only ATL self-source |
| ARC-TNK-042/043 | UT 755 Arctic / Ice | design name, only ATL self-source |
| ARC-TNK-045 | Severny Polyus (Norilsk Nickel) | not in Nornickel MTF fleet list |
| ARC-TNK-047 | Pechenga (Norilsk Nickel) | not in Nornickel MTF fleet list |
| ARC-TNK-049/050 | Arctic Express Container / Logistics | not NewNew vessel names |
Options: (a) add a verification_status=unverified flag and hide these client-side, (b) replace with the real sister hulls where named above, (c) leave as-is. Also: ARC-TNK-044 Viktor Chernomyrdin is an icebreaker missing from icebreakers.csv.
