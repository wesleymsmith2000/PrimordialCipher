import { describe, expect, it } from "vitest";
import { factorize, lcm, storageLimit } from "../engine";

describe("engine math", () => {
  it("computes LCM for Unus construction", () => {
    expect(lcm(6, 15)).toBe(30);
  });

  it("factorizes discovered values", () => {
    expect(factorize(66)).toEqual([2, 3, 11]);
  });

  it("uses floor(log2(card count)) for resonance storage", () => {
    expect(storageLimit(1)).toBe(0);
    expect(storageLimit(2)).toBe(1);
    expect(storageLimit(7)).toBe(2);
    expect(storageLimit(16)).toBe(4);
  });
});
