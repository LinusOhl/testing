// Return sum of a + b
export const sum = (...numbers: number[]) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};
