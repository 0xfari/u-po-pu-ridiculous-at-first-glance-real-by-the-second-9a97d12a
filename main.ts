import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A startup pitch in one sentence, at most 200 characters: bizarre at
// first glance, a real business on the second look. The fleet is the
// punchline — hearses sit empty between jobs, already dark, quiet, and
// climate-controlled, the best nap room the city never built on purpose.
// Buyers are shift workers and office staff who would pay for ten
// minutes of real dark; the joke lands first, the booking page second.
// Writes the pitch to /output/entry.txt with no trailing newline.
const PITCH =
  "We sell ten-minute naps in parked hearses, because the only dark, quiet, private room left in the city is one nobody else wants to sit in.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
