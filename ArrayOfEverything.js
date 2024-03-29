/**
 * @Title => Array Of Everything.
 */

// Array of Function

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const times = (a, b) => a * b;
const div = (a, b) => a / b;
const mod = (a, b) => a % b;

const funcs = [sum, sub, times, div, mod];
const a = 10,
  b = 20;

for (let i = 0; i < funcs.length; i++) {
  const result = funcs[i](a, b);
  //   console.log(`[${funcs[i].name}] Result = ${result}`);
}

// Array of Arrays

const pointTable = [
  [0, 0],
  [3, 5],
  [5, 7],
  [10, 23],
];

// One dimensional Traverse
for (let i = 0; i < pointTable.length; i++) {
  //   console.log(`point ${i} - x=${pointTable[i][0]} and y=${pointTable[i][1]}`);
}
// Two dimensional Traverse

const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers[i].length; j++) {
    // console.log(numbers[i][j]);
  }
}

for (let i = 0; i < pointTable.length; i++) {
  for (let j = 0; j < pointTable[i].length; j++) {
    // console.log(`Points [${i}, ${j}] = ${pointTable[i][j]}`);
  }
}

/**
 * [
 * [1 2 3 4 5 6]
 * [1 2 3 4 5 6]
 * [1 2 3 4 5 6]
 * [1 2 3 4 5 6]
 * [1 2 3 4 5 6]
 * ]
 */

// Matrix Example

const matrixA = [
  [1, 3],
  [1, 0],
  [1, 2],
];

const matrixB = [
  [0, 0],
  [7, 5],
  [2, 1],
];

const matrixSum = (matrixA, matrixB) => {
  const result = [];
  for (let i = 0; i < matrixA.length; i++) {
    const row = [];
    for (let j = 0; j < matrixA[i].length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
  }
  return result;
};
const matrixC = matrixSum(matrixA, matrixB);
console.log(matrixC);
