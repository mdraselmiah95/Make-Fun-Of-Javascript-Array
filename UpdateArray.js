/**
 * @Title => Update Array Elements and Fill Array
 */

//* Array fill Manual Way
const arr1 = new Array(10);
for (let i = 0; i < arr1.length; i++) {
  arr1[i] = "Rasel";
}
console.log(arr1);

//* Array fill
const arr2 = new Array(10);
arr2.fill(0);
console.log(arr2);

const names = ["Samuel ", "Toshiro ", "Nicolas ", "Humphrey "]; // Array with string

names[0] = "Samuel L. Jackson";
names[1] = "Toshiro Mifune";
names[2] = "Nicolas Cage";
names[3] = "Humphrey Bogart";

console.log(names);

//* Fill Array and Update
const response = new Array(9);
response.fill(false);
for (let i = 0; i < response.length; i++) {
  const rand = Math.floor(Math.random() * 10 + 1);
  response[i] = rand > 5 ? "X" : "O";
}

console.log(response);

//* Array is Mutable
function update(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `${i + 1}. ${arr[i]}`;
  }
  return arr;
}

const updatedNames = update(names);
console.log(names);

console.log(updatedNames);
console.log(names === updatedNames);
