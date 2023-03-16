// Return sum of a + b
export const add = (...numbers: number[]) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

// Return sum of a - b
export const sub = (initialValue: number, ...numbers: number[]) => {
  return numbers.reduce((acc, num) => acc - num, initialValue);
};
