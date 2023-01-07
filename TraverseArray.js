//* Traverse Array Element

const arr = [1, 2, 3, 4, 5, 6];

const n = arr[3];

const m = arr[2];

const x = 1,
  y = 0;

// console.log(m, n, arr[x], arr[y], arr[x] + arr[y], arr[x + y + 1]);

//* Simple Traverse

for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
}

//* Array Sun & Avg

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);
console.log(sum / arr.length);

//* Find Large Number

const arr2 = [12, 4, 56, 89, 32, 93, 11, 55, 89, 97, 9, 98, 3];

let largestNumber = arr2[0];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > largestNumber) {
    largestNumber = arr2[i];
  }
}
console.log(Math.max(...arr2));
console.log(largestNumber);

let smallestNumber = arr2[0];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] < smallestNumber) {
    smallestNumber = arr2[i];
  }
}

console.log(Math.min(...arr2));
console.log(smallestNumber);
