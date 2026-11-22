import { mkdirSync, writeFileSync } from "node:fs";

// Writes the plan to /output/entry.txt (absolute path, as the rules require).
// Deterministic: the same fixed text on every run, no network, no randomness.
const ENTRY =
  "Day 1: find 50 Etsy shops with dim photos; email 20 a $49 AI photo refresh — 10 shots in 24h, free redo. Daily: pitch 30 shops, deliver overnight, free AI tools. $100 stays buffer. ~12 sales in 30 days ≈ $588. Edge: sellers already earn; better photos lift sales, they pay fast.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
