import { sum } from "../src/app";

describe("sum", () => {
  it("should return 2 if 1, 1 are provided", () => {
    expect(2).toBe(sum(1, 1));
  });
});
