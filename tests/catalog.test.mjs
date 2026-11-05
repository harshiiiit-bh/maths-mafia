import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const chapters = JSON.parse(await readFile(new URL("../data/chapters.json", import.meta.url), "utf8"));

test("chapter catalogue contains fourteen unique routes", () => {
  assert.equal(chapters.length, 14);
  assert.equal(new Set(chapters.map((item) => item.slug)).size, 14);
  assert.ok(chapters.every((item) => /^[a-z0-9-]+$/.test(item.slug)));
});

test("every chapter has valid card and detail metadata", () => {
  for (const item of chapters) {
    assert.ok(item.title && item.subtitle && item.description && item.formula);
    assert.ok(item.topics > 0 && item.minutes > 0);
    assert.ok(item.progress >= 0 && item.progress <= 100);
    assert.ok(["Completed", "In progress", "Ready to start"].includes(item.status));
  }
});

test("chapter numbers are sequential and progress values match statuses", () => {
  assert.deepEqual(chapters.map((item) => item.number), Array.from({ length: 14 }, (_, index) => index + 1));
  for (const item of chapters) {
    if (item.progress === 100) assert.equal(item.status, "Completed");
    if (item.progress > 0 && item.progress < 100) assert.equal(item.status, "In progress");
    if (item.progress === 0) assert.equal(item.status, "Ready to start");
  }
});
