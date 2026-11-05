import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

test("project intentionally contains no seeded content fixtures", async () => {
  for (const path of ["../data/chapters.json", "../data/leaderboard.json", "../lib/catalog.ts"]) {
    await assert.rejects(access(new URL(path, import.meta.url)));
  }
});

test("learning and progress pages use empty states instead of sample records", async () => {
  const learn = await readFile(new URL("../app/(platform)/learn/page.tsx", import.meta.url), "utf8");
  const progress = await readFile(new URL("../app/(platform)/progress/page.tsx", import.meta.url), "utf8");
  const leaderboard = await readFile(new URL("../app/(platform)/leaderboard/page.tsx", import.meta.url), "utf8");
  assert.match(learn, /No chapters or lesson data have been added/);
  assert.match(progress, /No sessions, streaks, scores or completion records/);
  assert.match(leaderboard, /No student accounts, names, XP or ranking records/);
});

test("no demo user names or seeded question banks remain in the interface", async () => {
  const files = [
    "../app/(platform)/dashboard/page.tsx",
    "../app/(platform)/leaderboard/page.tsx",
    "../components/feature-workspaces.tsx"
  ];
  for (const path of files) {
    const source = await readFile(new URL(path, import.meta.url), "utf8");
    assert.doesNotMatch(source, /Aarav Mehta|Ananya Singh|Vihaan Rao|1,280 XP|const questions = \[/);
  }
});
