/**
 * @title :Grouping Similar Elements
 */

const words = [
  "One",
  "Two",
  "Three",
  "Four",
  "five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];

const group = words.reduce((acc, cur) => {
  const len = cur.length;
  if (acc[len]) {
    acc[len].push(cur);
  } else {
    acc[len] = [cur];
  }
  return acc;
}, {});

console.log(group);
