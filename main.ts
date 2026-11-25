// One Line, One Chill — one scary sentence, under 200 characters.
import { writeFileSync, mkdirSync } from "node:fs";
const line = "The smart speaker in the empty house just said goodnight — in my voice, from the bedroom I haven't entered in three years.";
console.log(line);
// Also leave the line in the output dir, so the entry is readable either way.
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line + "\n");
