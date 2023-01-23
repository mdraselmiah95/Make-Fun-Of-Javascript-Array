/**
 * @title :forEach vs for loop
 */

let names = [
  "Stack Learner",
  "Stack School",
  "Stack Solution",
  "Stack Consulting",
];

for (let i = 0; i < names.length; i++) {
  //   console.log(names);
}

for (let i = 0; i < names.length; i++) {
  //   console.log(`${i + 1}: ${names[i]}`);
}

//* Iterating Logic=> Business Logic

function reuse(arr, logic) {
  for (let i = 0; i < arr.length; i++) {
    logic(arr[i], i, arr);
  }
}

function log(value) {
  //   console.log(value);
}

function logic(value, index, arr) {
  //   console.log(value, index, arr);
}
reuse([1, 2, 3], log);
reuse(["Rasel", "Sakib", "Joy"], logic);

function myForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

const num = [1, 2, 3, 4, 5];
let sum = 0;

function sumFunc(v) {
  sum += v;
}

myForEach(num, sumFunc);

// console.log(sum);

myForEach(names, (value, index) => {
  //   console.log(`${index + 1}: ${value}`);
});

names.forEach((value, index) => {
  console.log(`${index + 1}: ${value}`);
});
