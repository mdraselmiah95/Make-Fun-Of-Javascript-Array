/**
 * @title :Map and Filter using Reduce
 */

const numbers = [1, 2, 3, 4, 5, 6, 7];

const squares = numbers.reduce((acc, cur) => {
  acc.push(cur * cur);
  return acc;
}, []);

console.log(squares);

const odds = numbers.reduce((acc, cur) => {
  if (cur % 2 === 1) {
    acc.push(cur);
  }
  return acc;
}, []);
console.log(odds);

// Big Array
const bigArray = [];
for (let i = 0; i < 50000000; i++) {
  bigArray.push(i);
}

// Map and Filter Chain - Time Efficiency
console.time("BOTH");
bigArray.filter((v) => v % 2 === 0).map((v) => v * 2);
console.timeEnd("BOTH");

// Map and Filter Reduce -Time Efficiency
console.time("Reduce");
bigArray.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    acc.push(cur * 2);
  }
  return acc;
}, []);
console.timeEnd("Reduce");
