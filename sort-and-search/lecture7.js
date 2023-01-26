/**
 * @title :FindIndex Method in JavaScript🏇
 */

const arr = [1, 3, 56, 7, 8, 33, 66, 90, 423, 3434, 67, 789, 00, -7, 122, 11];

let todos = [
  { name: "Project 1", isDone: true },
  { name: "Project 2", isDone: true },
  { name: "Project 3", isDone: true },
  { name: "Project 4", isDone: false },
  { name: "Project 5", isDone: false },
  { name: "Project 6", isDone: false },
  { name: "Project 7", isDone: false },
];

const index1 = arr.findIndex((item) => item === -7);
console.log(index1);

const index2 = todos.findIndex(
  (item) => item.name.toLowerCase() === "project 3"
);
console.log(index2);
