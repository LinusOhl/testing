import { it, expect } from "vitest";
import { getRandomNumber } from "./randomNumber";

it("should generate a random number between 0 - 10", () => {
  const randomNumber = getRandomNumber();
  expect(randomNumber).toBeGreaterThanOrEqual(1);
  expect(randomNumber).toBeLessThanOrEqual(10);
});
