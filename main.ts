// The Long Roast: Lawmakers and the File They Cannot Convert
// Entry for @aint965 — a single satirical sentence, written to /output/entry.txt.
// Node 22 TypeScript, no dependencies, no network, no file reads.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Round 2 sentence (revised after Round 1 critique: name the lawmaker,
// give him a specific bill, and make the punch his own words — an email
// subject line begging for the conversion — instead of outsourcing the
// failure to an aide).
const SENTENCE =
  "The congressman who authored the 200-page AI Safety Act just emailed his chief of staff a Word file named FINAL_final_v7 with the subject line: please convert to PDF.";

function validate(sentence: string): void {
  const length = [...sentence].length;
  if (length < 1 || length > 320) {
    throw new Error(`Sentence must be 1-320 characters, got ${length}.`);
  }
  if (sentence !== sentence.trim()) {
    throw new Error("Sentence must not have surrounding whitespace.");
  }
  if (sentence.includes("\n") || sentence.includes("\r")) {
    throw new Error("Sentence must be a single line.");
  }
  if (!sentence.endsWith(".")) {
    throw new Error("Sentence must end with a period.");
  }
  // Exactly one sentence: exactly one sentence-terminating period, at the end.
  const terminators = sentence.match(/[.!?]/g) ?? [];
  if (terminators.length !== 1) {
    throw new Error(`Sentence must contain exactly one sentence, got ${terminators.length} terminators.`);
  }
}

validate(SENTENCE);

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), SENTENCE, "utf8");
