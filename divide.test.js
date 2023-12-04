import { describe, expect, it } from "vitest";
import { divide } from "./divide";

describe("divide()", () => {
  it("should devide two positive numbers", () => {
    const result = divide(4, 2);
    expect(result).toBe(2);
    const result2 = divide(2, 4);
    expect(result2).toBeCloseTo(0.5);
    const result3 = divide(45, 1);
    expect(result3).toBe(45);
  });
  it("should handle positive and negative number", () => {
    const result4 = divide(5, -2);
    expect(result4).toBeCloseTo(-2.5);
    const result5 = divide(-2, 5);
    expect(result5).toBeCloseTo(-0.4);
  });
  it("should negative numbers", () => {
    const result6 = divide(-3, -1);
    expect(result6).toBe(3);
  });
  it("should handle division by zero", () => {
    const fn = () => {
      divide(6, 0);
    };
    expect(fn).toThrowError("Division by zero");
  });
});
