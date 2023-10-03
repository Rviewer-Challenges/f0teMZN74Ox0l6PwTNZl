export const createInitialStateMatrix = (rows: number, columns: number) => {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push(Array(columns).fill(false));
  }
  return matrix;
};

export const createTruthStateMatrix = (
  options: number,
  rows: number,
  columns: number
) => {
  const numbers = Array.from({ length: options }, (_, i) => i).concat(
    Array.from({ length: options }, (_, i) => i)
  );
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix.push(numbers.splice(0, columns));
  }
  return matrix;
};
