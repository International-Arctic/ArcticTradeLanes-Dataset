#!/usr/bin/env node
/** GIS densify check: ARC-SHIP-032 Orskov Yard off soft Frederikshavn pin onto OSM way/1252850980 + way/1252850979 centroid */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const dir = dirname(fileURLToPath(import.meta.url));
const csv = readFileSync(join(dir, 'shipbuilding_facilities.csv'), 'utf8');

function parseRow(id) {
  for (const line of csv.split(/\r?\n/).slice(1)) {
    if (!line.startsWith(id + ',')) continue;
    const fields = [];
    let cur = '', q = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') {
        if (q && line[i + 1] === '"') { cur += '"'; i++; }
        else q = !q;
      } else if (c === ',' && !q) { fields.push(cur); cur = ''; }
      else cur += c;
    }
    fields.push(cur);
    return { shipyard_id: fields[0], latitude: fields[4], longitude: fields[5], sources: fields[13] || '' };
  }
  return null;
}

const row = parseRow('ARC-SHIP-032');
if (!row) {
  console.error('FAIL: ARC-SHIP-032 missing');
  process.exit(1);
}
const lat = Number(row.latitude);
const lon = Number(row.longitude);
const src = row.sources || '';
const expectLat = 57.4368155;
const expectLon = 10.5474498;
const softOld = { lat: 57.44, lon: 10.54 };
const ok =
  Math.abs(lat - expectLat) < 1e-6 &&
  Math.abs(lon - expectLon) < 1e-6 &&
  src.includes('way/1252850980') &&
  src.includes('way/1252850979') &&
  src.includes('Q19827622') &&
  (Math.abs(lat - softOld.lat) > 0.001 || Math.abs(lon - softOld.lon) > 0.001) &&
  !csv.includes('ARC-SSHIP-024') &&
  csv.includes('ARC-SHIP-024,');
console.log(JSON.stringify({ id: 'ARC-SHIP-032', lat, lon, expectLat, expectLon, ok, srcSnippet: src.slice(-240) }, null, 2));
process.exit(ok ? 0 : 1);
