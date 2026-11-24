// The Funniest Toaster Error Message — make.fun entry
// Writes one error line (<=120 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Error 418: I am a teapot. Please stop putting bread in me.";

// Gate check, mirroring the sealed scorer: UTF-8 text of 1 to 120
// characters, not only white space, on a single line.
if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(`Entry is ${ENTRY.length} chars, must be 1-120`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("Entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
