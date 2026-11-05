export type AngleMode = "deg" | "rad";
export type ExpressionVariables = { x?: number };
export function evaluateExpression(source: string, variables?: ExpressionVariables, angleMode?: AngleMode): number;
