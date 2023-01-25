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
