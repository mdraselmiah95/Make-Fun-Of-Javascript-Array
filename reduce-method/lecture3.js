/**
 * @title :Example Array Flatten
 *
 */

let nestedArray = [[1, 2], 3, [4, 5]];
const flatten1 = nestedArray.flat();
console.log(flatten1);

const flatArray2 = nestedArray.reduce((acc, cur) => {
  return acc.concat(cur);
}, []);

console.log(flatArray2);
