/**
 * @title :Example Array Flatten
 *
 */

const arr = [1, 2, 3, 4, 5];

// FlatMap = Map --> Flat
const map = arr.map((x) => x * 2);
console.log(map);

const flatMap = arr.flatMap((x) => [x * 3]);
console.log(flatMap);

const flatMap1 = arr.flatMap((x) => [x, x * 3]);
console.log(flatMap1);

const reducedFlatMap = arr.reduce((acc, cur) => {
  return acc.concat(cur * 3);
}, []);
console.log("reducedFlatMap", reducedFlatMap);

const reducedFlatMap1 = arr.reduce((acc, cur) => {
  return acc.concat([cur, cur * 3]);
}, []);
console.log("reducedFlatMap1", reducedFlatMap1);
