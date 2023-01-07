//* Array Literal=> []

const names = [
  "Tom Hanks",
  "Marilyn Monroe",
  "Robert De Niro",
  "Bette Davis",
  "Natalie Portman",
  "Gene Hackman",
  "Heath Ledger",
  "Katharine Hepburn",
  "Leonardo DiCaprio",
];

names[names.length] = "Tom Cruise";

// console.log(names.length);
// console.log(names);

/**
 * @Title : Initialize Array- Constructor vs Factory
 */

//* Constructor Pattern => new Array()

const a1 = new Array(); //[]
console.log(a1.length);

const a2 = new Array(5);
console.log(a2.length);

const a3 = new Array(1, 2, 3, 4, 5);
console.log(a3);

//* Factory Pattern
