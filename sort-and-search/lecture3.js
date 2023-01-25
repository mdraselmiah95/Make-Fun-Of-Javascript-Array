/**
 * @title :How to work with sort method
 */

let numbers = [10, 4, 6, 8, 9, 20, 30, 45, 78, 1, 99, 23, 5, 67, 81, 30];
numbers.sort((a, b) => {
  //   console.log(a, b);
  //   return a - b;
  return b - a;
});
// console.log(numbers);

let strings = ["apple", "Cat", "Cow", "Horse", "Banana", "Apple"];
strings.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a > b) return 1;
  if (b > a) return -1;
  return 0;
});
console.log(strings);

let strings1 = [
  "apple",
  "Ant",
  "Cat",
  "Ball",
  "Cow",
  "Horse",
  "Banana",
  "Apple",
];
strings1.sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a > b) return 1;
  if (b > a) return -1;
  return 0;
});
console.log(strings1);

const names = [
  "Angelina Jolie",
  "Scarlett Johansson",
  "Jennifer Lawrence",
  "Emily Blunt",
  "Elizabeth Olsen",
  "Zendaya",
  "Anya Taylor-Joy",
  "Shailene Woodley",
];

const actress = [
  { id: 2, name: "Angelina Jolie" },
  { id: 4, name: "Scarlett Johansson" },
  { id: 6, name: "Jennifer Lawrence" },
  { id: 5, name: "Emily Blunt" },
  { id: 3, name: "Elizabeth Olsen" },
  { id: 9, name: "Zendaya" },
  { id: 1, name: "Anya Taylor-Joy" },
  { id: 7, name: "Shailene Woodley" },
];

// Sort by id:
actress.sort((a, b) => {
  if (a.id > b.id) return 1;
  if (a.id < b.id) return -1;
  return 0;
});

console.log(actress);

// Sort by Name:
actress.sort((a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
});

console.log(actress);
