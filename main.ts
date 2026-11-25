import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of Monday, written as if Monday were a restaurant.
// The program's whole job is to write this single line to /output/entry.txt.
const review =
  "One star. Monday seated me at 9am, served cold coffee, forgot my order, and charged me for the whole week.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, review + "\n", "utf8");
