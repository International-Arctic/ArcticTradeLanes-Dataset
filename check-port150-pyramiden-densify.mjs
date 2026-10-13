#!/usr/bin/env node
/** Lock: ARC-PORT-150 Pyramiden quay crane on OSM node/857534564 (gis-port150-1828). */
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
const ANCHOR = [78.654916, 16.3553162];
const OLD = [78.6567, 16.3250];
const csv = fs.readFileSync(process.argv[2] || "ports.csv", "utf8");
const line = csv.split(/\r?\n/).find((l) => l.startsWith("ARC-PORT-150,"));
if (!line) {
  console.error("FAIL missing ARC-PORT-150");
  process.exit(1);
}
// rough parse: lat/lon are fields after country "Norway (Svalbard)"
const m = line.match(/,Norway \(Svalbard\),([-+0-9.]+),([-+0-9.]+),/);
if (!m) {
  console.error("FAIL parse lat/lon");
  process.exit(1);
}
const lat = +m[1],
  lon = +m[2];
const d = km([lat, lon], ANCHOR);
const errs = [];
if (d > 0.5) errs.push(`ARC-PORT-150 is ${d.toFixed(2)} km from OSM node/857534564`);
if (km([lat, lon], OLD) < 0.05) errs.push("still on soft pin");
if (!line.includes("gis-port150-1828")) errs.push("missing densify note");
if (errs.length) {
  console.error("FAIL\n" + errs.join("\n"));
  process.exit(1);
}
console.log(
  `OK ARC-PORT-150 ${lat},${lon} (${d.toFixed(3)} km from OSM node/857534564; moved ${km(OLD, ANCHOR).toFixed(2)} km off soft)`
);
