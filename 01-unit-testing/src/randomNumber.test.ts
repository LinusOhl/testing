import { it, expect } from "vitest";
import { getRandomNumber } from "./randomNumber";

it("should generate a random number between 1-10", () => {
  const randomNumber = getRandomNumber();

  expect(randomNumber).toBeGreaterThanOrEqual(1);
  expect(randomNumber).toBeLessThanOrEqual(10);
});

it("should generate a random number between 1-50", () => {
  const max = 50;
  const randomNumber = getRandomNumber(max);

  expect(randomNumber).toBeGreaterThanOrEqual(1);
  expect(randomNumber).toBeLessThanOrEqual(max);
});

it("should generate 10 random numbers between 1-10", () => {
  for (let i = 0; i < 10; i++) {
    const randomNumber = getRandomNumber();

    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(10);
  }
});
