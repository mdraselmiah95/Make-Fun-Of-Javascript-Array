/**
 *@title :Copy Array Elements  🤸
 */

const arr = [1, 2, 3, 4];

const arr2 = [...arr]; // Shallow Copy
arr2.push(5);

// console.log(arr, arr2);

const points = [
  [10, 12],
  [2, 44],
  [67, 19],
];

const pointsCopy = [...points];
// pointsCopy.push([1, 2]);
pointsCopy[0][0] = 100;
pointsCopy[0][1] = 101;
// console.log(points);
// console.log(pointsCopy);

const arr3 = arr.map((x) => x);
console.log(arr === arr3);

const arr4 = arr.filter(() => true);
console.log(arr === arr4);

const arr5 = arr.slice();
console.log(arr === arr5);

const arr6 = arr.concat();
console.log(arr === arr6);

const arr7 = Array.from(arr);
console.log(arr === arr7);

const pointsDeepCopy = JSON.parse(JSON.stringify(points));
console.log(pointsDeepCopy);
