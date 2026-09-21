#!/usr/bin/env node
/** GIS densify check: ARC-SHIP-044 Havyard off soft pin onto Wikidata Q55947781 P625 */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const root = dirname(fileURLToPath(import.meta.url));
const csvPath = join(root, 'shipbuilding_facilities.csv');
const expectLat = 61.1245683;
const expectLon = 5.3234446;
const softOld = { lat: 61.18, lon: 6.08 };

const text = readFileSync(csvPath, 'utf8');
const line = text.split(/\r?\n/).find((l) => l.startsWith('ARC-SHIP-044,'));
if (!line) { console.error('FAIL: ARC-SHIP-044 missing'); process.exit(1); }
// CSV columns: id,name,location,country,latitude,longitude,...
const fields = [];
let cur = '', inQ = false;
for (let i = 0; i < line.length; i++) {
  const ch = line[i];
  if (ch === '"') { inQ = !inQ; continue; }
  if (ch === ',' && !inQ) { fields.push(cur); cur = ''; continue; }
  cur += ch;
}
fields.push(cur);
const lat = Number(fields[4]);
const lon = Number(fields[5]);
const src = fields[13] || '';
const ok =
  Math.abs(lat - expectLat) < 1e-7 &&
  Math.abs(lon - expectLon) < 1e-7 &&
  src.includes('Q55947781') &&
  src.includes('gis-densify-0915') &&
  (Math.abs(lat - softOld.lat) > 0.01 || Math.abs(lon - softOld.lon) > 0.01);
console.log(JSON.stringify({ id: 'ARC-SHIP-044', lat, lon, expectLat, expectLon, ok, srcSnippet: src.slice(-220) }, null, 2));
process.exit(ok ? 0 : 1);
