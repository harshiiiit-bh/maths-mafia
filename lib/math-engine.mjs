const functions = new Set(["sqrt", "sin", "cos", "tan", "abs", "log", "ln"]);
const tokenPattern = /(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|[a-zA-Z]+|π|[()+\-*/^%]/y;

export function evaluateExpression(source, variables = {}, angleMode = "deg") {
  if (typeof source !== "string" || !source.trim()) throw new Error("Enter an expression first.");
  if (source.length > 160) throw new Error("Expression is too long.");
  const tokens = [];
  let offset = 0;
  while (offset < source.length) {
    if (/\s/.test(source[offset])) { offset++; continue; }
    tokenPattern.lastIndex = offset;
    const match = tokenPattern.exec(source);
    if (!match) throw new Error("Unsupported character in expression.");
    tokens.push(match[0]);
    offset = tokenPattern.lastIndex;
  }
  let cursor = 0;
  const peek = () => tokens[cursor];
  const consume = () => tokens[cursor++];
  const expect = (token) => { if (consume() !== token) throw new Error("Check your parentheses and operators."); };

  function primary() {
    const token = consume();
    if (token === undefined) throw new Error("Expression is incomplete.");
    if (token === "(") {
      const value = expression();
      expect(")");
      return value;
    }
    if (token === "π") return Math.PI;
    if (/^\d/.test(token) || /^\.\d/.test(token)) return Number(token);
    if (/^[a-zA-Z]+$/.test(token)) {
      const name = token.toLowerCase();
      if (name === "x") return Number(variables.x ?? 0);
      if (name === "pi") return Math.PI;
      if (name === "e") return Math.E;
      if (!functions.has(name)) throw new Error("Unknown symbol: " + token);
      expect("(");
      const argument = expression();
      expect(")");
      const radians = angleMode === "deg" ? argument * Math.PI / 180 : argument;
      if (name === "sqrt") return Math.sqrt(argument);
      if (name === "abs") return Math.abs(argument);
      if (name === "sin") return Math.sin(radians);
      if (name === "cos") return Math.cos(radians);
      if (name === "tan") return Math.tan(radians);
      if (name === "log") return Math.log10(argument);
      if (name === "ln") return Math.log(argument);
    }
    throw new Error("Unexpected token: " + token);
  }

  function power() {
    const base = primary();
    if (peek() === "^") {
      consume();
      return Math.pow(base, unary());
    }
    return base;
  }
  function unary() {
    if (peek() === "+") { consume(); return unary(); }
    if (peek() === "-") { consume(); return -unary(); }
    return power();
  }
  function term() {
    let value = unary();
    while (peek() === "*" || peek() === "/" || peek() === "%") {
      const operator = consume();
      const right = unary();
      if ((operator === "/" || operator === "%") && right === 0) throw new Error("Cannot divide by zero.");
      value = operator === "*" ? value * right : operator === "/" ? value / right : value % right;
    }
    return value;
  }
  function expression() {
    let value = term();
    while (peek() === "+" || peek() === "-") {
      const operator = consume();
      const right = term();
      value = operator === "+" ? value + right : value - right;
    }
    return value;
  }

  const result = expression();
  if (cursor !== tokens.length) throw new Error("There is an extra operator or bracket.");
  if (!Number.isFinite(result)) throw new Error("This expression has no finite real result.");
  if (Math.abs(result) > 1e100) throw new Error("Result is outside the supported range.");
  return result;
}
