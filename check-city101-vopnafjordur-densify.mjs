#!/usr/bin/env node
/** Assert ARC-CITY-101 densified onto OSM node/59860048 (gis-densify-1848). */
import { readFileSync } from 'node:fs';
const csv = readFileSync('cities.csv', 'utf8');
const line = csv.split(/\r?\n/).find((l) => l.startsWith('ARC-CITY-101,'));
if (!line) { console.error('ARC-CITY-101 missing'); process.exit(1); }
// naive CSV split respecting quotes
function parse(line) {
  const fields = []; let cur = '', inQ = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') { inQ = !inQ; continue; }
    if (ch === ',' && !inQ) { fields.push(cur); cur = ''; continue; }
    cur += ch;
  }
  fields.push(cur);
  return fields;
}
const f = parse(line);
const lat = Number(f[4]);
const lon = Number(f[5]);
const src = f[11] || '';
const want = { lat: 65.7540583, lon: -14.8294887 };
const soft = { lat: 65.746, lon: -14.780 };
const ok =
  Math.abs(lat - want.lat) < 1e-7 &&
  Math.abs(lon - want.lon) < 1e-7 &&
  src.includes('gis-densify-1848') &&
  src.includes('node/59860048') &&
  (Math.abs(lat - soft.lat) > 1e-4 || Math.abs(lon - soft.lon) > 1e-4);
console.log(JSON.stringify({ id: 'ARC-CITY-101', lat, lon, want, ok, srcSnippet: src.slice(-220) }, null, 2));
process.exit(ok ? 0 : 1);
