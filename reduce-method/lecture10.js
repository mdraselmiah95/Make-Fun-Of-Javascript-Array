/**
 * @title :Map and Filter using Reduce
 */

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.reduce((acc, cur) => {
  acc.push(cur * cur);
  return acc;
}, []);

console.log(squares);
