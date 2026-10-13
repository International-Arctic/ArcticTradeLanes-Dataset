#!/usr/bin/env node
/** Lock: ARC-PORT-171 Port Elga — Manorsky on OSM way/1316635669 (gis-port171-1805). */
import fs from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
function km(a, b) {
  const toR = (d) => (d * Math.PI) / 180;
  const [la1, lo1, la2, lo2] = [a[0], a[1], b[0], b[1]].map(toR);
  const h =
    Math.sin((la2 - la1) / 2) ** 2 +
    Math.cos(la1) * Math.cos(la2) * Math.sin((lo2 - lo1) / 2) ** 2;
  return 6371.0088 * 2 * Math.asin(Math.sqrt(h));
}
const ANCHOR = [55.1173682, 135.6970483];
const OLD = [55.1167, 135.7000];
const csv = fs.readFileSync(process.argv[2] || "ports.csv", "utf8");
const line = csv.split(/\r?\n/).find((l) => l.startsWith("ARC-PORT-171,"));
if (!line) {
  console.error("FAIL missing ARC-PORT-171");
  process.exit(1);
}
// rough parse: lat/lon are fields after country Russia
const m = line.match(/,Russia,([-+0-9.]+),([-+0-9.]+),/);
if (!m) {
  console.error("FAIL parse lat/lon");
  process.exit(1);
}
const lat = +m[1],
  lon = +m[2];
const d = km([lat, lon], ANCHOR);
const errs = [];
if (d > 0.5) errs.push(`ARC-PORT-171 is ${d.toFixed(2)} km from OSM way/1316635669`);
if (km([lat, lon], OLD) < 0.05) errs.push("still on soft pin");
if (!line.includes("gis-port171-1805")) errs.push("missing densify note");
if (errs.length) {
  console.error("FAIL\n" + errs.join("\n"));
  process.exit(1);
}
console.log(
  `OK ARC-PORT-171 ${lat},${lon} (${d.toFixed(3)} km from OSM way/1316635669; moved ${km(OLD, ANCHOR).toFixed(2)} km off soft)`
);
