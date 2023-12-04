import { describe, expect, it, vi } from "vitest";
import { executeCallback } from "./callBack";

describe("executeCallback()", () => {
  it("should test whether the executeCallback calls", () => {
    const myCallback = vi.fn();
    executeCallback(myCallback, "Buy groceries");
    expect(myCallback).toBeCalledTimes(1);
  });
  it("should test whether the executeCallback calls with correct parameters", () => {
    const myCallback = vi.fn();
    executeCallback(myCallback, "Buy groceries");
    expect(myCallback).toBeCalledWith("Buy groceries");
  });
});
