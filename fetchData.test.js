import { describe, expect, it } from "vitest";
import { fetchData } from "./fetchData";

describe("fetchData()", () => {
  it("should resolved with correct data or rejects with error", async () => {
    await fetchData()
      .then((data) => expect(data).toEqual({ name: "John", age: 30 }))
      .catch((error) => expect(error).toBeDefined());
  });
});
