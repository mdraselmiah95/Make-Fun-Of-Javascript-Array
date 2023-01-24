/**
 * @title :Understand the concept of Reduce 🎊
 * @definition :make smaller or less in amount, degree, or size
 */

const numbers = [1, 2, 3, 4, 5, 6];

function reduce(accumulator, currentValue) {
  return accumulator + currentValue;
}

function sumFunc(a, b) {
  return a + b;
}

const sum = numbers.reduce(sumFunc);
console.log(sum);

const names = ["Rasel", "Shakib", "Rafi", "Saif"];
const votes = [
  "Java",
  "Java",
  "Python",
  "Java",
  "JavaScript",
  "Python",
  "JavaScript",
];
