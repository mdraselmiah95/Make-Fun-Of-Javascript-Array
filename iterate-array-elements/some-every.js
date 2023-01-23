/**
 * @title :Some and Every in Array
 */

let productReview = [
  { name: "Rasel", response: "positive", rating: "5" },
  { name: "Shakib", response: "positive", rating: "4" },
  { name: "Saif", response: "negative", rating: "3" },
  { name: "Rafi", response: "positive", rating: "4.5" },
];

const positive = productReview.every((value) => value.rating > 3);
if (positive) {
  console.log("100% positive Reviews");
} else {
  console.log("Some Customer not Satisfied");
}

let testRunsInSingleMatch = [
  { name: "Dhoni", runs: 399 },
  { name: "BC Lara", runs: 449 },
  { name: "Tamim", runs: 209 },
  { name: "Sakib", runs: 489 },
];

const atLeastOne = testRunsInSingleMatch.some((value) => value.runs >= 400);
console.log(atLeastOne);
