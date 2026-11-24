import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, at most 200 characters, pitching a bizarre startup idea
// that sounds absurd until you see the customers and the money.
// Writes it to /output/entry.txt.
const LINE =
  "We rent professional mourners for dead houseplants, so your fern gets a proper funeral and you get closure for nineteen dollars.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
for (const f of readdirSync(outDir)) rmSync(join(outDir, f), { recursive: true, force: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
