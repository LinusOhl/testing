import { describe, it, expect } from "vitest";
import { add, sub } from "./sum";

describe("tests addition", () => {
  it("should add 1 + 2", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("should add 1 + 2 + 3", () => {
    expect(add(1, 2, 3)).toBe(6);
  });
});

describe("tests subtraction", () => {
  it("should subtract 100-50", () => {
    expect(sub(100, 50)).toBe(50);
  });
});
