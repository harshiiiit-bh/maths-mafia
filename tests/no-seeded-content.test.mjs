import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";

test("there are no seeded chapter or leaderboard fixtures", async () => {
  await assert.rejects(access(new URL("../data/chapters.json", import.meta.url)));
  await assert.rejects(access(new URL("../data/leaderboard.json", import.meta.url)));
  await assert.rejects(access(new URL("../lib/catalog.ts", import.meta.url)));
});

test("practice interface contains no embedded question bank", async () => {
  const source = await readFile(new URL("../components/feature-workspaces.tsx", import.meta.url), "utf8");
  assert.match(source, /Your question area is empty/);
  assert.doesNotMatch(source, /const questions = \[/);
  assert.doesNotMatch(source, /Aarav Mehta|Ananya Singh|1,280 XP/);
});
