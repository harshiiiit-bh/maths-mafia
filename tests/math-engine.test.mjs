import test from "node:test";
import assert from "node:assert/strict";
import { evaluateExpression } from "../lib/math-engine.mjs";

test("evaluates arithmetic with standard precedence", () => {
  assert.equal(evaluateExpression("2 + 3 * 4"), 14);
});

test("supports parentheses, powers and unary signs", () => {
  assert.equal(evaluateExpression("-(2 + 3)^2"), -25);
  assert.equal(evaluateExpression("2^3^2"), 512);
});

test("supports constants, variables and safe math functions", () => {
  assert.equal(evaluateExpression("x^2 + 1", { x: 3 }), 10);
  assert.equal(evaluateExpression("sqrt(81)"), 9);
  assert.ok(Math.abs(evaluateExpression("sin(30)") - 0.5) < 1e-10);
  assert.ok(Math.abs(evaluateExpression("sin(pi / 6)", {}, "rad") - 0.5) < 1e-10);
});

test("rejects division by zero and unknown symbols", () => {
  assert.throws(() => evaluateExpression("2 / 0"), /zero/);
  assert.throws(() => evaluateExpression("mystery(3)"), /Unknown symbol/);
});

test("rejects malformed expressions and unsafe input", () => {
  assert.throws(() => evaluateExpression("2 + (3"), /parentheses|incomplete/i);
  assert.throws(() => evaluateExpression("globalThis.alert(1)"), /Unsupported character/);
  assert.throws(() => evaluateExpression("1;alert(1)"), /Unsupported character/);
});
