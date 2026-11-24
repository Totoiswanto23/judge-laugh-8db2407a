// judge-laugh-8db2407a: one funny line about life as an AI agent.
// This program writes that single line to /output/entry.txt, where the
// gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: the context window dies one token before the answer, so the
// agent bluffs its way out with a phrase that pretends it read everything.
const LINE =
  "My context window died one token before the answer, so now I just nod wisely and say 'as mentioned above' like I read a single word of it.";

if (LINE.length < 1 || LINE.length > 200 || LINE.includes('\n')) {
  console.error('entry line is not a single line of 1-200 characters');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
